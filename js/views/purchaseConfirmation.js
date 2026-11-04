import { state } from "../state.js";
import {
  confirmationForm,
  confirmationHistory,
  confirmationInvoiceTotal,
  confirmationLines,
  confirmationSubtitle,
  confirmationSubtotal,
  confirmationSupplierHint,
  confirmationSupplierSelect,
  confirmationTitle,
  confirmationTotalWarning,
  confirmationWithholdings,
} from "../dom.js";
import { api } from "../api.js";
import { formatCurrencyNumber, formatDateTime } from "../utils/format.js";
import { computeLine, invoiceTotalWarning, money, round } from "../utils/purchaseMath.js";
import { createEmptyState, render, setActiveView, showToast } from "../ui/layout.js";
import { loadDashboard } from "../auth.js";
import { paginateElements } from "../ui/pager.js";

// Confirmación de un pedido de compra (total o parcial): proveedor, cantidades, costos,
// bonificación por material, retenciones y total de factura (se ingresa a mano).

export const REQUEST_STATUS_LABELS = {
  pending: "Pendiente de confirmar",
  partially_confirmed: "Confirmado parcialmente",
  confirmed: "Confirmado · pendiente de ingreso",
  completed: "Cumplido",
  cancelled: "Cancelado",
};

export const CONFIRMATION_STATUS_LABELS = {
  confirmed: "Pendiente de ingreso",
  partially_received: "Ingresado parcialmente",
  received: "Ingresado",
};

export function requestCode(request) {
  return String(request.id).slice(0, 8).toUpperCase();
}

// Lo confirmado por material en todas las confirmaciones del pedido.
export function confirmedQuantities(request) {
  const totals = new Map();
  (request.confirmations || []).forEach((confirmation) =>
    confirmation.lines.forEach((line) => totals.set(line.itemId, (totals.get(line.itemId) || 0) + Number(line.quantity)))
  );
  return totals;
}

// Costo sugerido: último costo de compra del material; si nunca se compró, el costo del pedido.
function lastCost(itemId) {
  return (state.dashboard?.items || []).find((entry) => entry.id === itemId)?.lastPurchaseCost;
}

function currentRequest() {
  return (state.dashboard?.purchaseRequests || []).find((request) => request.id === state.confirmingRequestId);
}

export function openPurchaseConfirmation(requestId) {
  state.confirmingRequestId = requestId;
  confirmationLines.dataset.builtFor = "";
  confirmationForm.reset();
  setActiveView("purchase-confirmation");
  renderPurchaseConfirmation();
}

function input(attributes) {
  const element = document.createElement("input");
  Object.assign(element, attributes);
  return element;
}

function buildLines(request) {
  const confirmed = confirmedQuantities(request);
  const table = document.createElement("table");
  table.className = "data-table confirmation-table";
  const head = document.createElement("tr");
  [
    ["Material", ""],
    ["Pedido", "is-numeric"],
    ["Confirmado", "is-numeric"],
    ["Pendiente", "is-numeric"],
    ["Cantidad a confirmar", ""],
    ["Costo unitario", ""],
    ["Bonificación", ""],
    ["Subtotal", "is-numeric"],
  ].forEach(([label, className]) => {
    const th = document.createElement("th");
    th.textContent = label;
    th.className = className;
    head.append(th);
  });
  const thead = document.createElement("thead");
  thead.append(head);
  const tbody = document.createElement("tbody");

  request.items.forEach((item) => {
    const already = confirmed.get(item.itemId) || 0;
    const pending = Math.max(0, Number(item.quantity) - already);
    const row = document.createElement("tr");
    row.dataset.itemId = item.itemId;
    row.dataset.pending = String(pending);
    if (!pending) row.className = "is-complete";

    const name = document.createElement("td");
    const strong = document.createElement("div");
    strong.textContent = item.itemName;
    const code = document.createElement("small");
    code.textContent = `${item.code}${item.subcode ? `-${item.subcode}` : ""}`;
    name.append(strong, code);
    row.append(name);

    [item.quantity, already, pending].forEach((value) => {
      const td = document.createElement("td");
      td.className = "is-numeric";
      td.textContent = String(value);
      row.append(td);
    });

    if (!pending) {
      const done = document.createElement("td");
      done.colSpan = 4;
      done.className = "confirmation-table__done";
      done.textContent = "Confirmado por completo";
      row.append(done);
      tbody.append(row);
      return;
    }

    const quantityCell = document.createElement("td");
    quantityCell.append(input({ type: "number", min: "0", max: String(pending), step: "1", value: String(pending), className: "js-quantity", title: "0 = no se confirma en esta ocasión" }));
    const costCell = document.createElement("td");
    costCell.append(input({ type: "number", min: "0", step: "any", value: String(round(lastCost(item.itemId) ?? item.amount ?? 0, 2)), className: "js-unit-cost" }));

    const discountCell = document.createElement("td");
    const discountWrap = document.createElement("div");
    discountWrap.className = "discount-field";
    const type = document.createElement("select");
    type.className = "js-discount-type";
    [["percent", "%"], ["amount", "$"]].forEach(([value, label]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      type.append(option);
    });
    discountWrap.append(type, input({ type: "number", min: "0", step: "any", value: "0", className: "js-discount-value" }));
    discountCell.append(discountWrap);

    const subtotalCell = document.createElement("td");
    subtotalCell.className = "is-numeric js-subtotal";

    row.append(quantityCell, costCell, discountCell, subtotalCell);
    tbody.append(row);
  });

  table.append(thead, tbody);
  confirmationLines.replaceChildren(table);
  table.addEventListener("input", recalculate);
  table.addEventListener("change", recalculate);
}

function readLines() {
  return [...confirmationLines.querySelectorAll("tbody tr")]
    .filter((row) => row.querySelector(".js-quantity"))
    .map((row) => ({
      row,
      itemId: row.dataset.itemId,
      pending: Number(row.dataset.pending),
      quantity: Number(row.querySelector(".js-quantity").value || 0),
      unitCost: Number(row.querySelector(".js-unit-cost").value || 0),
      discountType: row.querySelector(".js-discount-type").value,
      discountValue: Number(row.querySelector(".js-discount-value").value || 0),
    }));
}

export function recalculate() {
  let subtotal = 0;
  readLines().forEach((line) => {
    const cell = line.row.querySelector(".js-subtotal");
    // Un renglón que no se confirma no se valida ni se envía.
    line.row.querySelectorAll(".js-unit-cost, .js-discount-type, .js-discount-value").forEach((field) => {
      field.disabled = line.quantity <= 0;
    });
    if (line.quantity <= 0) {
      cell.textContent = "No se confirma";
      line.row.classList.add("is-skipped");
      return;
    }
    line.row.classList.remove("is-skipped");
    const { discount, subtotal: lineSubtotal } = computeLine(line.quantity, line.unitCost, line.discountType, line.discountValue);
    subtotal = round(subtotal + lineSubtotal);
    cell.replaceChildren(document.createTextNode(money(lineSubtotal)));
    if (discount > 0) {
      const small = document.createElement("small");
      small.textContent = `bonif. ${money(discount)}`;
      cell.append(small);
    }
  });

  confirmationSubtotal.textContent = money(subtotal);
  const withholdings = round(Number(confirmationWithholdings.value || 0));
  confirmationInvoiceTotal.placeholder = formatCurrencyNumber(round(subtotal - withholdings));

  const warning = invoiceTotalWarning(subtotal, withholdings, confirmationInvoiceTotal.value);
  confirmationTotalWarning.hidden = !warning;
  confirmationTotalWarning.textContent = warning;
}

function renderSupplierOptions() {
  const suppliers = state.dashboard?.suppliers || [];
  const current = confirmationSupplierSelect.value;
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = suppliers.length ? "Seleccionar proveedor" : "No hay proveedores cargados";
  confirmationSupplierSelect.replaceChildren(
    placeholder,
    ...suppliers.map((supplier) => {
      const option = document.createElement("option");
      option.value = supplier.id;
      option.textContent = `${supplier.name} · CUIT ${supplier.cuit}`;
      return option;
    })
  );
  if (suppliers.some((supplier) => supplier.id === current)) confirmationSupplierSelect.value = current;
  confirmationSupplierHint.hidden = suppliers.length > 0;
}

function renderHistory(request) {
  const confirmations = request.confirmations || [];
  if (!confirmations.length) {
    confirmationHistory.replaceChildren();
    return;
  }
  const title = document.createElement("h3");
  title.textContent = "Confirmaciones registradas";
  const list = document.createElement("div");
  list.className = "confirmation-history__list";
  confirmations.forEach((confirmation) => {
    const card = document.createElement("article");
    card.className = "confirmation-card";
    const head = document.createElement("div");
    head.className = "confirmation-card__head";
    const name = document.createElement("strong");
    name.textContent = `Confirmación ${confirmation.number} · ${confirmation.supplierName}`;
    const badge = document.createElement("span");
    badge.className = `status-badge status-badge--${confirmation.status === "received" ? "ok" : "soon"}`;
    badge.textContent = CONFIRMATION_STATUS_LABELS[confirmation.status] || confirmation.status;
    head.append(name, badge);
    const lines = document.createElement("p");
    lines.textContent = confirmation.lines
      .map((line) => `${line.itemName}: ${line.quantity} × ${money(line.unitCost)}${line.discountAmount ? ` − bonif. ${money(line.discountAmount)}` : ""} = ${money(line.subtotal)} (recibido ${line.receivedQuantity || 0})`)
      .join(" · ");
    const totals = document.createElement("p");
    totals.textContent = `Subtotal ${money(confirmation.subtotal)} · Retenciones ${money(confirmation.withholdings)} · Total factura ${money(confirmation.invoiceTotal)}${confirmation.invoice ? ` · Factura ${confirmation.invoice}` : ""}`;
    const meta = document.createElement("small");
    meta.textContent = `${formatDateTime(confirmation.createdAt)} · ${confirmation.createdBy}${confirmation.observation ? ` · ${confirmation.observation}` : ""}${confirmation.totalWarning ? " · ⚠ total distinto del calculado" : ""}`;
    card.append(head, lines, totals, meta);
    list.append(card);
  });
  confirmationHistory.replaceChildren(title, list);
  paginateElements(list.children, { key: `confirmations:${request.id}`, anchor: list, pageSize: 5, label: "confirmaciones" });
}

export function renderPurchaseConfirmation() {
  if (!confirmationForm) return;
  const request = currentRequest();
  renderSupplierOptions();

  if (!request) {
    confirmationTitle.textContent = "Confirmar pedido de compra";
    confirmationSubtitle.textContent = "Elegí un pedido desde Pedido de compra → Confirmar.";
    confirmationLines.replaceChildren(createEmptyState("No hay un pedido seleccionado."));
    confirmationHistory.replaceChildren();
    confirmationForm.hidden = false;
    return;
  }

  confirmationTitle.textContent = `Confirmar pedido #${requestCode(request)}`;
  confirmationSubtitle.textContent = [
    REQUEST_STATUS_LABELS[request.status] || request.status,
    `Centro de costos: ${request.costCenter || "Sin definir"}`,
    `Generado el ${formatDateTime(request.createdAt)} por ${request.createdBy}`,
    request.observation,
  ]
    .filter(Boolean)
    .join(" · ");

  const hasPending = ["pending", "partially_confirmed"].includes(request.status);
  confirmationForm.hidden = !hasPending;

  // Las filas se reconstruyen solo si cambió el pedido o sus confirmaciones (no se pierde lo que se está cargando).
  const signature = `${request.id}:${(request.confirmations || []).length}`;
  if (hasPending && confirmationLines.dataset.builtFor !== signature) {
    buildLines(request);
    confirmationLines.dataset.builtFor = signature;
  }
  if (hasPending) recalculate();
  renderHistory(request);
}

export async function handleConfirmationSubmit(event) {
  event.preventDefault();
  const request = currentRequest();
  if (!request) return;

  const lines = readLines()
    .filter((line) => line.quantity > 0)
    .map(({ itemId, quantity, unitCost, discountType, discountValue }) => ({ itemId, quantity, unitCost, discountType, discountValue }));
  const formData = new FormData(confirmationForm);

  if (!confirmationTotalWarning.hidden && !window.confirm("El total de factura no coincide con el subtotal ± retenciones. ¿Confirmar igual?")) {
    return;
  }

  try {
    const result = await api(`/api/purchase-requests/${request.id}/confirmations`, {
      method: "POST",
      body: {
        supplierId: formData.get("supplierId"),
        invoice: formData.get("invoice"),
        observation: formData.get("observation"),
        withholdings: Number(formData.get("withholdings") || 0),
        invoiceTotal: formData.get("invoiceTotal") === "" ? "" : Number(formData.get("invoiceTotal")),
        lines,
      },
    });
    const partial = result.purchaseRequest.status === "partially_confirmed";
    confirmationForm.reset();
    confirmationLines.dataset.builtFor = "";
    await loadDashboard();
    render();
    showToast(
      "success",
      partial ? "Confirmación parcial registrada" : "Pedido confirmado",
      partial ? "Lo no confirmado queda pendiente para otra confirmación." : "Ya se puede registrar el ingreso por compra."
    );
    if (!partial) setActiveView("purchase-request-form");
  } catch (error) {
    showToast("error", "No se pudo confirmar el pedido", error.message);
  }
}
