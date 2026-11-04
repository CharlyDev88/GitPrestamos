import { state } from "../state.js";
import {
  purchaseItemQuantity,
  purchaseItemSearch,
  purchaseItemSelect,
  purchaseLowStockList,
  purchaseRequestDraft,
  purchaseRequestForm,
  purchaseRequestsList,
  purchaseRequestsNextPage,
  purchaseRequestsPageInfo,
  purchaseRequestsPrevPage,
} from "../dom.js";
import { api } from "../api.js";
import { escapeHtml, formatCurrencyNumber, formatDateTime } from "../utils/format.js";
import { createEmptyState, render, showToast, updateSimplePagination } from "../ui/layout.js";
import { can, loadDashboard } from "../auth.js";
import { clearPager, paginateElements } from "../ui/pager.js";
import { REQUEST_STATUS_LABELS, confirmedQuantities, openPurchaseConfirmation, requestCode } from "./purchaseConfirmation.js";

// Pedidos de compra.
export async function handlePurchaseRequestSubmit(event) {
  event.preventDefault();

  try {
    const lowStockItems = Array.from(purchaseLowStockList.querySelectorAll(".selection-card input[type='checkbox']:checked"))
      .map((checkbox) => {
        const quantityInput = purchaseLowStockList.querySelector(`[data-low-stock-quantity='${checkbox.value}']`);
        return {
          itemId: checkbox.value,
          quantity: Number(quantityInput?.value || 0),
        };
      })
      .filter((entry) => entry.itemId && Number.isFinite(entry.quantity) && entry.quantity > 0);

    await api("/api/purchase-requests", {
      method: "POST",
      body: {
        lowStockItems,
        manualItems: state.purchaseRequestDraft,
        costCenter: purchaseRequestForm.elements.costCenter.value,
        observation: purchaseRequestForm.elements.observation.value,
      },
    });

    resetPurchaseRequestForm();
    await loadDashboard();
    render();
    showToast("success", "Pedido generado", "El pedido de compra quedó registrado.");
  } catch (error) {
    showToast("error", "No se pudo generar el pedido", error.message);
  }
}

export function resetPurchaseRequestForm() {
  purchaseRequestForm.reset();
  state.purchaseRequestDraft = [];
  purchaseItemSearch.value = "";
  purchaseItemQuantity.value = 1;
}

export function handleAddPurchaseDraftItem() {
  const itemId = purchaseItemSelect.value;
  const quantity = Number(purchaseItemQuantity.value);
  const item = (state.dashboard?.items || []).find((entry) => entry.id === itemId);

  if (!item) {
    showToast("error", "Material no disponible", "Seleccioná un material válido para agregar al pedido.");
    return;
  }

  if (!Number.isFinite(quantity) || quantity <= 0) {
    showToast("error", "Cantidad inválida", "La cantidad del pedido debe ser mayor a cero.");
    return;
  }

  const existingDraft = state.purchaseRequestDraft.find((entry) => entry.itemId === itemId);
  if (existingDraft) {
    existingDraft.quantity += quantity;
  } else {
    state.purchaseRequestDraft.push({
      itemId: item.id,
      quantity,
    });
  }

  purchaseItemQuantity.value = 1;
  renderPurchaseRequestDraft(state.dashboard?.items || []);
}

export function removePurchaseDraftItem(itemId) {
  state.purchaseRequestDraft = state.purchaseRequestDraft.filter((entry) => entry.itemId !== itemId);
  renderPurchaseRequestDraft(state.dashboard?.items || []);
}

export function updatePurchaseDraftQuantity(itemId, quantity) {
  const nextQuantity = Number(quantity);
  if (!Number.isFinite(nextQuantity) || nextQuantity <= 0) {
    return;
  }

  const draftEntry = state.purchaseRequestDraft.find((entry) => entry.itemId === itemId);
  if (draftEntry) {
    draftEntry.quantity = nextQuantity;
    renderPurchaseRequestDraft(state.dashboard?.items || []);
    return;
  }

  const lowStockField = purchaseLowStockList.querySelector(`[data-low-stock-quantity='${itemId}']`);
  if (lowStockField) {
    lowStockField.value = String(nextQuantity);
    renderPurchaseRequestDraft(state.dashboard?.items || []);
  }
}

export function renderPurchaseLowStockOptions(items) {
  purchaseLowStockList.innerHTML = "";
  const lowStockItems = items.filter((item) => Number(item.stock) <= Number(item.stockMinimum ?? 0));

  if (lowStockItems.length === 0) {
    purchaseLowStockList.append(createEmptyState("No hay materiales en alerta de stock para sugerir."));
    clearPager(purchaseLowStockList, "purchaseLowStock");
    return;
  }

  lowStockItems.forEach((item) => {
    const wrapper = document.createElement("label");
    wrapper.className = "selection-card";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = item.id;
    checkbox.checked = true;
    checkbox.addEventListener("change", () => renderPurchaseRequestDraft(state.dashboard?.items || []));

    const content = document.createElement("div");
    content.className = "selection-card__body";

    const strong = document.createElement("strong");
    strong.textContent = item.name;
    const meta = document.createElement("p");
    meta.textContent = `${item.code}${item.subcode ? `-${item.subcode}` : ""} · Stock ${item.stock} · Mínimo ${item.stockMinimum ?? 0}`;

    const qty = document.createElement("input");
    qty.type = "number";
    qty.min = "1";
    qty.value = String(Math.max(Number(item.stockMinimum || 1) - Number(item.stock || 0), 1));
    qty.dataset.lowStockQuantity = item.id;
    qty.addEventListener("input", () => renderPurchaseRequestDraft(state.dashboard?.items || []));

    content.append(strong, meta, qty);
    wrapper.append(checkbox, content);
    purchaseLowStockList.append(wrapper);
  });
  paginateElements(purchaseLowStockList.children, { key: "purchaseLowStock", anchor: purchaseLowStockList, pageSize: 6, label: "materiales sugeridos" });
}

export function renderPurchaseRequestDraft(items) {
  purchaseRequestDraft.innerHTML = "";
  const selectedLowStockItems = Array.from(purchaseLowStockList.querySelectorAll(".selection-card input[type='checkbox']:checked"))
    .map((checkbox) => {
      const item = items.find((current) => current.id === checkbox.value);
      const quantityField = purchaseLowStockList.querySelector(`[data-low-stock-quantity='${checkbox.value}']`);
      return item ? { item, quantity: Number(quantityField?.value || 0), source: "Alerta" } : null;
    })
    .filter((entry) => entry && Number.isFinite(entry.quantity) && entry.quantity > 0);
  const manualItems = state.purchaseRequestDraft
    .map((entry) => {
      const item = items.find((current) => current.id === entry.itemId);
      return item ? { item, quantity: entry.quantity, source: "Manual" } : null;
    })
    .filter(Boolean);
  const combinedEntries = [...selectedLowStockItems, ...manualItems];

  if (!combinedEntries.length) {
    purchaseRequestDraft.append(createEmptyState("Todavía no agregaste materiales al pedido."));
    clearPager(purchaseRequestDraft, "purchaseDraft");
    return;
  }

  combinedEntries.forEach((entry) => {
    const { item } = entry;
    const article = document.createElement("article");
    article.className = "activity-item material-admin-item";

    const content = document.createElement("div");
    content.className = "material-admin-item__content";
    const title = document.createElement("strong");
    title.textContent = item.name;
    const meta = document.createElement("p");
    meta.textContent = `${item.code}${item.subcode ? `-${item.subcode}` : ""} · ${item.location || "Sin ubicación"} · Pedido ${entry.quantity} unidad(es) · ${entry.source}`;
    const detail = document.createElement("span");
    detail.textContent = `${item.notes || "Sin observaciones."} · Costo unitario actual $${formatCurrencyNumber(item.amount)}`;
    const quantityEditor = document.createElement("label");
    quantityEditor.className = "purchase-draft-quantity";
    quantityEditor.textContent = "Cantidad a pedir";
    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.min = "1";
    quantityInput.value = String(entry.quantity);
    quantityInput.addEventListener("input", () => updatePurchaseDraftQuantity(item.id, quantityInput.value));
    quantityEditor.append(quantityInput);
    content.append(title, meta, detail);
    content.append(quantityEditor);

    const actions = document.createElement("div");
    actions.className = "material-admin-item__actions";
    if (entry.source === "Manual") {
      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "button button--danger";
      removeButton.textContent = "Quitar";
      removeButton.addEventListener("click", () => removePurchaseDraftItem(entry.item.id));
      actions.append(removeButton);
    }

    article.append(content, actions);
    purchaseRequestDraft.append(article);
  });
  paginateElements(purchaseRequestDraft.children, { key: "purchaseDraft", anchor: purchaseRequestDraft, pageSize: 8, label: "materiales en el pedido" });
}

export function exportPurchaseRequestPdf(request) {
  try {
    const printable = window.open("", "_blank", "width=1024,height=768");
    if (!printable) {
      throw new Error("El navegador bloqueó la ventana de impresión.");
    }

    const rows = request.items
      .map((item) => `
        <tr>
          <td>${escapeHtml(item.itemName)}</td>
          <td>${escapeHtml(item.code || "")}</td>
          <td>${escapeHtml(item.subcode || "-")}</td>
          <td>${escapeHtml(String(item.quantity))}</td>
          <td>${escapeHtml(String(item.currentStock ?? 0))}</td>
          <td>${escapeHtml(String(item.stockMinimum ?? 0))}</td>
          <td>${escapeHtml(`$${formatCurrencyNumber(item.amount)}`)}</td>
        </tr>
      `)
      .join("");

    printable.document.write(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Pedido de compra ${escapeHtml(String(request.id).slice(0, 8).toUpperCase())}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 24px; color: #1f2937; }
          h1 { margin: 0 0 8px; font-size: 24px; }
          p { margin: 0 0 8px; color: #4b5563; }
          .meta { margin-bottom: 18px; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #d1d5db; padding: 10px; text-align: left; vertical-align: top; }
          th { background: #eef2f7; }
        </style>
      </head>
      <body>
        <h1>Pedido de compra #${escapeHtml(String(request.id).slice(0, 8).toUpperCase())}</h1>
        <div class="meta">
          <p>Fecha y hora de generación: ${escapeHtml(formatDateTime(request.createdAt))}</p>
          <p>Usuario: ${escapeHtml(request.createdBy || "-")}</p>
          <p>Estado: ${escapeHtml(REQUEST_STATUS_LABELS[request.status] || request.status)}</p>
          <p>Centro de costos: ${escapeHtml(request.costCenter || "Sin definir")}</p>
          <p>Proveedor: ${escapeHtml(request.provider || "Sin definir")}</p>
          <p>Observación: ${escapeHtml(request.observation || "Sin observación.")}</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Material</th>
              <th>Código</th>
              <th>Subcódigo</th>
              <th>Cantidad pedida</th>
              <th>Stock actual</th>
              <th>Stock mínimo</th>
              <th>Costo unitario</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </body>
      </html>
    `);
    printable.document.close();
    printable.focus();
    printable.print();
    showToast("success", "Pedido listo para PDF", "Se abrió la vista de impresión del pedido.");
  } catch (error) {
    showToast("error", "No se pudo generar el PDF del pedido", error.message);
  }
}

export function renderPurchaseRequests(requests) {
  purchaseRequestsList.innerHTML = "";
  const pageSize = 8;
  const totalPages = Math.max(1, Math.ceil(requests.length / pageSize));
  if (state.purchaseRequestsPage > totalPages) {
    state.purchaseRequestsPage = totalPages;
  }
  const startIndex = (state.purchaseRequestsPage - 1) * pageSize;
  const pageEntries = requests.slice(startIndex, startIndex + pageSize);

  if (requests.length === 0) {
    purchaseRequestsList.append(createEmptyState("Todavía no hay pedidos de compra generados."));
    updateSimplePagination(purchaseRequestsPrevPage, purchaseRequestsNextPage, purchaseRequestsPageInfo, 0, 1, "pedido(s)");
    return;
  }

  pageEntries.forEach((request) => {
    const article = document.createElement("article");
    article.className = "activity-item material-admin-item";

    const content = document.createElement("div");
    content.className = "material-admin-item__content";

    const title = document.createElement("strong");
    title.textContent = `Pedido #${requestCode(request)} · ${REQUEST_STATUS_LABELS[request.status] || request.status}`;

    const confirmations = request.confirmations || [];
    const confirmed = confirmedQuantities(request);
    const description = document.createElement("p");
    description.textContent = request.items
      .map((item) => (confirmations.length ? `${item.itemName} (${confirmed.get(item.itemId) || 0} de ${item.quantity} confirmados)` : `${item.itemName} (${item.quantity})`))
      .join(" · ");

    const detail = document.createElement("span");
    const suppliers = [...new Set(confirmations.map((confirmation) => confirmation.supplierName))];
    const confirmationText = confirmations.length
      ? ` · ${confirmations.length} confirmación(es) · Proveedor(es): ${suppliers.join(", ")}`
      : request.provider
        ? ` · Proveedor ${request.provider}`
        : "";
    detail.textContent = `${request.observation || "Sin observación."} · Centro de costos ${request.costCenter || "Sin definir"} · ${formatDateTime(request.createdAt)} · Registró ${request.createdBy}${confirmationText}`;

    content.append(title, description, detail);

    const actions = document.createElement("div");
    actions.className = "material-admin-item__actions";

    const pdfButton = document.createElement("button");
    pdfButton.type = "button";
    pdfButton.className = "button button--action-blue";
    pdfButton.textContent = "PDF";
    pdfButton.addEventListener("click", () => exportPurchaseRequestPdf(request));

    if (["pending", "partially_confirmed"].includes(request.status) && can("purchases.confirm")) {
      const confirmButton = document.createElement("button");
      confirmButton.type = "button";
      confirmButton.className = "button button--success";
      confirmButton.textContent = request.status === "pending" ? "Confirmar" : "Confirmar resto";
      confirmButton.addEventListener("click", () => openPurchaseConfirmation(request.id));
      actions.append(confirmButton);
    } else if (confirmations.length) {
      const viewButton = document.createElement("button");
      viewButton.type = "button";
      viewButton.className = "button button--ghost";
      viewButton.textContent = "Ver confirmaciones";
      viewButton.addEventListener("click", () => openPurchaseConfirmation(request.id));
      actions.append(viewButton);
    }

    actions.append(pdfButton);
    article.append(content, actions);
    purchaseRequestsList.append(article);
  });

  updateSimplePagination(purchaseRequestsPrevPage, purchaseRequestsNextPage, purchaseRequestsPageInfo, requests.length, totalPages, "pedido(s)", state.purchaseRequestsPage);
}
