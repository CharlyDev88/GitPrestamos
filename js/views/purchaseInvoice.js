import { state } from "../state.js";
import {
  invoiceForm,
  invoiceHistory,
  invoiceItemSearch,
  invoiceItemSelect,
  invoiceLines,
  invoiceSubtotal,
  invoiceSupplierHint,
  invoiceSupplierSelect,
  invoiceTotal,
  invoiceTotalWarning,
  invoiceWithholdings,
} from "../dom.js";
import { api } from "../api.js";
import { formatCurrencyNumber, formatDate, formatDateTime } from "../utils/format.js";
import { computeLine, invoiceTotalWarning as totalWarningText, money, round } from "../utils/purchaseMath.js";
import { createEmptyState, render, showToast } from "../ui/layout.js";
import { renderItemSelect } from "../ui/selects.js";
import { loadDashboard } from "../auth.js";
import { clearPager, paginateElements } from "../ui/pager.js";

// Factura de compra que no viene de un pedido: mismos campos que "Confirmar pedido",
// material por material. Al registrarla ingresa el stock y actualiza el costo de cada material.

function input(attributes) {
  const element = document.createElement("input");
  Object.assign(element, attributes);
  return element;
}

function findItem(itemId) {
  return (state.dashboard?.items || []).find((item) => item.id === itemId);
}

function ensureTable() {
  let table = invoiceLines.querySelector("table");
  if (table) return table;

  table = document.createElement("table");
  table.className = "data-table confirmation-table";
  const head = document.createElement("tr");
  [
    ["Material", ""],
    ["Stock", "is-numeric"],
    ["Cantidad", ""],
    ["Costo unitario", ""],
    ["Bonificación", ""],
    ["Subtotal", "is-numeric"],
    ["", ""],
  ].forEach(([label, className]) => {
    const th = document.createElement("th");
    th.textContent = label;
    th.className = className;
    head.append(th);
  });
  const thead = document.createElement("thead");
  thead.append(head);
  table.append(thead, document.createElement("tbody"));
  table.addEventListener("input", recalculateInvoice);
  table.addEventListener("change", recalculateInvoice);
  invoiceLines.replaceChildren(table);
  return table;
}

function addLine(item) {
  const tbody = ensureTable().querySelector("tbody");
  const row = document.createElement("tr");
  row.dataset.itemId = item.id;

  const name = document.createElement("td");
  const strong = document.createElement("div");
  strong.textContent = item.name;
  const code = document.createElement("small");
  code.textContent = `${item.code}${item.subcode ? `-${item.subcode}` : ""} · Costo prom. ${money(item.amount ?? 0)}`;
  name.append(strong, code);

  const stock = document.createElement("td");
  stock.className = "is-numeric";
  stock.textContent = String(item.stock);

  const quantityCell = document.createElement("td");
  quantityCell.append(input({ type: "number", min: "1", step: "1", value: "1", required: true, className: "js-quantity" }));

  const costCell = document.createElement("td");
  const suggested = item.lastPurchaseCost ?? item.amount ?? 0;
  costCell.append(input({ type: "number", min: "0", step: "any", value: String(round(suggested, 2)), required: true, className: "js-unit-cost" }));

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

  const removeCell = document.createElement("td");
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "button button--danger button--small";
  remove.textContent = "Quitar";
  remove.addEventListener("click", () => {
    row.remove();
    if (!invoiceLines.querySelector("tbody tr")) resetLines();
    recalculateInvoice();
  });
  removeCell.append(remove);

  row.append(name, stock, quantityCell, costCell, discountCell, subtotalCell, removeCell);
  tbody.append(row);
}

function resetLines() {
  invoiceLines.replaceChildren(createEmptyState("Agregá los materiales de la factura con el buscador de arriba."));
}

function readLines() {
  return [...invoiceLines.querySelectorAll("tbody tr")].map((row) => ({
    row,
    itemId: row.dataset.itemId,
    quantity: Number(row.querySelector(".js-quantity").value || 0),
    unitCost: Number(row.querySelector(".js-unit-cost").value || 0),
    discountType: row.querySelector(".js-discount-type").value,
    discountValue: Number(row.querySelector(".js-discount-value").value || 0),
  }));
}

// Fecha de hoy en formato AAAA-MM-DD (hora local).
function todayText() {
  return localDate(new Date().toISOString());
}

// El total de factura se completa solo con el subtotal hasta que el usuario lo escribe a mano.
// Si lo borra, vuelve a calcularse.
export function handleInvoiceTotalInput() {
  invoiceTotal.dataset.manual = invoiceTotal.value === "" ? "" : "1";
  recalculateInvoice();
}

function resetInvoiceHeader() {
  invoiceTotal.dataset.manual = "";
  const dateInput = invoiceForm.elements.invoiceDate;
  if (dateInput) {
    dateInput.max = todayText();
    dateInput.value = todayText();
  }
}

export function recalculateInvoice() {
  let subtotal = 0;
  readLines().forEach((line) => {
    const { discount, subtotal: lineSubtotal } = computeLine(line.quantity, line.unitCost, line.discountType, line.discountValue);
    subtotal = round(subtotal + lineSubtotal);
    const cell = line.row.querySelector(".js-subtotal");
    cell.replaceChildren(document.createTextNode(money(lineSubtotal)));
    if (discount > 0) {
      const small = document.createElement("small");
      small.textContent = `bonif. ${money(discount)}`;
      cell.append(small);
    }
  });

  invoiceSubtotal.textContent = money(subtotal);
  const withholdings = round(Number(invoiceWithholdings.value || 0));
  invoiceTotal.placeholder = formatCurrencyNumber(subtotal);
  const manual = invoiceTotal.dataset.manual === "1";
  if (!manual) {
    invoiceTotal.value = readLines().length ? String(round(subtotal)) : "";
  }
  const hint = document.querySelector("#invoice-total-hint");
  if (hint) {
    hint.textContent = manual
      ? "Modificado a mano. Borralo para recalcular."
      : "Suma de los subtotales. Podés modificarlo.";
    hint.classList.toggle("is-manual", manual);
  }
  const warning = totalWarningText(subtotal, withholdings, invoiceTotal.value);
  invoiceTotalWarning.hidden = !warning;
  invoiceTotalWarning.textContent = warning;
}

export function handleAddInvoiceItem() {
  const item = findItem(invoiceItemSelect.value);
  if (!item) {
    showToast("error", "Elegí un material", "Buscá y seleccioná un material del inventario.");
    return;
  }
  if (invoiceLines.querySelector(`tbody tr[data-item-id="${CSS.escape(item.id)}"]`)) {
    showToast("error", "Material repetido", `${item.name} ya está en la factura: ajustá la cantidad en su renglón.`);
    return;
  }
  addLine(item);
  recalculateInvoice();
  invoiceLines.querySelector("tbody tr:last-child .js-quantity")?.focus();
}

export function renderInvoiceItemSelect() {
  renderItemSelect(invoiceItemSelect, state.dashboard?.items || [], invoiceItemSearch.value, { includeZeroStock: true });
}

function renderSupplierOptions() {
  const suppliers = state.dashboard?.suppliers || [];
  const current = invoiceSupplierSelect.value;
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = suppliers.length ? "Seleccionar proveedor" : "No hay proveedores cargados";
  invoiceSupplierSelect.replaceChildren(
    placeholder,
    ...suppliers.map((supplier) => {
      const option = document.createElement("option");
      option.value = supplier.id;
      option.textContent = `${supplier.name} · CUIT ${supplier.cuit}`;
      return option;
    })
  );
  if (suppliers.some((supplier) => supplier.id === current)) invoiceSupplierSelect.value = current;
  invoiceSupplierHint.hidden = suppliers.length > 0;
}

const normalizeText = (value) =>
  String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

// Fecha local (AAAA-MM-DD) del registro, para comparar con los filtros Desde / Hasta.
function localDate(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  const pad = (number) => String(number).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function filterInvoices(invoices) {
  const { search, supplierId, dateFrom, dateTo } = state.invoiceFilters;
  const term = normalizeText(search.trim());
  return invoices
    .filter((invoice) => {
      if (supplierId && invoice.supplierId !== supplierId) return false;
      const day = invoiceDay(invoice);
      if (dateFrom && day < dateFrom) return false;
      if (dateTo && day > dateTo) return false;
      if (!term) return true;
      const haystack = [
        invoice.invoice,
        invoice.supplierName,
        invoice.supplierCuit,
        invoice.observation,
        invoice.createdBy,
        String(invoice.number),
        ...(invoice.lines || []).flatMap((line) => [line.itemName, line.code, line.subcode]),
      ].map(normalizeText).join(" ");
      return haystack.includes(term);
    })
    // Las últimas cargadas primero (aunque la fecha de factura sea anterior).
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

// Fecha de la factura; las cargadas antes de existir el campo usan la fecha de registro.
function invoiceDay(invoice) {
  return invoice.invoiceDate || localDate(invoice.createdAt);
}

function renderInvoiceSupplierFilter(invoices) {
  const select = document.querySelector("#invoice-filter-supplier");
  if (!select) return;
  const suppliers = new Map();
  (state.dashboard?.suppliers || []).forEach((supplier) => suppliers.set(supplier.id, supplier.name));
  invoices.forEach((invoice) => {
    if (invoice.supplierId && !suppliers.has(invoice.supplierId)) suppliers.set(invoice.supplierId, invoice.supplierName);
  });
  const all = document.createElement("option");
  all.value = "";
  all.textContent = "Todos";
  const options = [...suppliers.entries()]
    .sort((a, b) => a[1].localeCompare(b[1], "es"))
    .map(([id, name]) => {
      const option = document.createElement("option");
      option.value = id;
      option.textContent = name;
      return option;
    });
  select.replaceChildren(all, ...options);
  select.value = suppliers.has(state.invoiceFilters.supplierId) ? state.invoiceFilters.supplierId : "";
}

export function initInvoiceFilters() {
  const bind = (selector, field, eventName = "input", transform = (value) => value) => {
    document.querySelector(selector)?.addEventListener(eventName, (event) => {
      state.invoiceFilters[field] = transform(event.target.value);
      renderHistory();
    });
  };
  bind("#invoice-filter-search", "search");
  bind("#invoice-filter-supplier", "supplierId", "change");
  bind("#invoice-filter-from", "dateFrom", "change");
  bind("#invoice-filter-to", "dateTo", "change");
}

function renderHistory() {
  const allInvoices = state.dashboard?.purchaseInvoices || [];
  renderInvoiceSupplierFilter(allInvoices);
  if (!allInvoices.length) {
    invoiceHistory.replaceChildren(createEmptyState("Todavía no se registraron facturas sin pedido."));
    clearPager(invoiceHistory, "purchaseInvoices");
    return;
  }
  const invoices = filterInvoices(allInvoices);
  if (!invoices.length) {
    invoiceHistory.replaceChildren(createEmptyState("No hay facturas que coincidan con los filtros."));
    clearPager(invoiceHistory, "purchaseInvoices");
    return;
  }
  invoiceHistory.replaceChildren(
    ...invoices.map((invoice) => {
      const card = document.createElement("article");
      card.className = "confirmation-card";
      const head = document.createElement("div");
      head.className = "confirmation-card__head";
      const name = document.createElement("strong");
      name.textContent = `Factura ${invoice.invoice} · ${invoice.supplierName}${invoice.invoiceDate ? ` · ${formatDate(invoice.invoiceDate)}` : ""}`;
      const badge = document.createElement("span");
      badge.className = "status-badge status-badge--ok";
      badge.textContent = "Ingresada";
      head.append(name, badge);
      const lines = document.createElement("p");
      lines.textContent = invoice.lines
        .map((line) => `${line.itemName}: ${line.quantity} × ${money(line.unitCost)}${line.discountAmount ? ` − bonif. ${money(line.discountAmount)}` : ""} = ${money(line.subtotal)}`)
        .join(" · ");
      const totals = document.createElement("p");
      totals.textContent = `Subtotal ${money(invoice.subtotal)} · Retenciones ${money(invoice.withholdings)} · Total factura ${money(invoice.invoiceTotal)}`;
      const meta = document.createElement("small");
      meta.textContent = `N° interno ${invoice.number} · Registrada el ${formatDateTime(invoice.createdAt)} por ${invoice.createdBy}${invoice.observation ? ` · ${invoice.observation}` : ""}${invoice.totalWarning ? " · ⚠ total distinto del calculado" : ""}`;
      card.append(head, lines, totals, meta);
      return card;
    })
  );
  paginateElements(invoiceHistory.children, { key: "purchaseInvoices", anchor: invoiceHistory, pageSize: 10, label: "facturas", signature: JSON.stringify(state.invoiceFilters) });
}

export function renderPurchaseInvoice() {
  if (!invoiceForm) return;
  const dateInput = invoiceForm.elements.invoiceDate;
  if (dateInput && !dateInput.value) resetInvoiceHeader();
  renderSupplierOptions();
  renderInvoiceItemSelect();
  if (!invoiceLines.querySelector("tbody tr")) resetLines();
  recalculateInvoice();
  renderHistory();
}

export async function handleInvoiceSubmit(event) {
  event.preventDefault();
  const lines = readLines().map(({ itemId, quantity, unitCost, discountType, discountValue }) => ({ itemId, quantity, unitCost, discountType, discountValue }));
  if (!lines.length) {
    showToast("error", "Factura sin materiales", "Agregá al menos un material a la factura.");
    return;
  }
  if (!invoiceTotalWarning.hidden && !window.confirm("El total de factura no coincide con el subtotal calculado. ¿Registrar igual?")) {
    return;
  }

  const formData = new FormData(invoiceForm);
  try {
    const result = await api("/api/purchase-invoices", {
      method: "POST",
      body: {
        supplierId: formData.get("supplierId"),
        invoice: formData.get("invoice"),
        invoiceDate: formData.get("invoiceDate"),
        observation: formData.get("observation"),
        withholdings: Number(formData.get("withholdings") || 0),
        invoiceTotal: formData.get("invoiceTotal") === "" ? "" : Number(formData.get("invoiceTotal")),
        lines,
      },
    });
    invoiceForm.reset();
    invoiceItemSearch.value = "";
    resetInvoiceHeader();
    resetLines();
    await loadDashboard();
    render();
    showToast(
      "success",
      `Factura ${result.purchaseInvoice.invoice} registrada`,
      `Ingresaron ${lines.length} material${lines.length === 1 ? "" : "es"} al stock y se actualizó su costo.`
    );
  } catch (error) {
    showToast("error", "No se pudo registrar la factura", error.message);
  }
}
