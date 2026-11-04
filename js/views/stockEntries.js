import { state } from "../state.js";
import {
  stockEntriesList,
  stockEntriesNextPage,
  stockEntriesPageInfo,
  stockEntriesPrevPage,
  stockEntryDonorWrapper,
  stockEntryEstimatedUnitCostWrapper,
  stockEntryExistingFields,
  stockEntryForm,
  stockEntryInvoiceWrapper,
  stockEntryItemSearch,
  stockEntryNewAmountLabel,
  stockEntryNewFields,
  stockEntryProviderWrapper,
  stockEntryPurchaseItems,
  stockEntryPurchaseMetaRow,
  stockEntryPurchaseRequestSelect,
  stockEntryPurchaseRequestWrapper,
  stockEntryTargetType,
  stockEntryTypeSelect,
} from "../dom.js";
import { api } from "../api.js";
import { capitalize, formatCurrencyNumber, formatDateTime } from "../utils/format.js";
import { createEmptyState, render, showToast, updateSimplePagination } from "../ui/layout.js";
import { loadDashboard } from "../auth.js";

// Ingresos de stock por donación o compra.
export async function handleStockEntrySubmit(event) {
  event.preventDefault();

  try {
    const formData = new FormData(stockEntryForm);
    const entryType = formData.get("entryType");
    const targetType = formData.get("targetType");
    const payload = {
      entryType,
      targetType,
      observation: formData.get("observation"),
    };

    if (entryType === "compra") {
      const key = stockEntryPurchaseRequestSelect.value || state.selectedPurchaseRequestId || "";
      const [purchaseRequestId, confirmationId] = key.split("::");
      if (!confirmationId) {
        showToast("error", "No se pudo registrar el ingreso", "Primero confirmá el pedido de compra (Pedido de compra → Confirmar).");
        return;
      }
      state.selectedPurchaseRequestId = key;
      payload.purchaseRequestId = purchaseRequestId;
      payload.confirmationId = confirmationId;
      payload.invoice = formData.get("invoice");
      payload.items = collectPurchaseRequestFulfillmentItems();
    } else {
      payload.quantity = Number(formData.get("quantity"));
      payload.donor = formData.get("donor");
      payload.estimatedUnitCost = Number(formData.get("estimatedUnitCost"));

      if (targetType === "existing") {
        payload.itemId = formData.get("itemId");
      } else {
        payload.name = formData.get("name");
        payload.category = formData.get("category");
        payload.code = formData.get("code");
        payload.subcode = formData.get("subcode");
        payload.location = formData.get("location");
        payload.stockMinimum = Number(formData.get("stockMinimum"));
        payload.amount = Number(formData.get("estimatedUnitCost"));
        payload.notes = formData.get("notes");
      }
    }

    await api("/api/stock-entries", {
      method: "POST",
      body: payload,
    });

    resetStockEntryForm();
    await loadDashboard();
    render();
    showToast("success", "Ingreso registrado", "El stock se actualizó correctamente.");
  } catch (error) {
    showToast("error", "No se pudo registrar el ingreso", error.message);
  }
}

export function toggleStockEntryFields(targetType) {
  const isNew = targetType === "new";
  stockEntryExistingFields.hidden = isNew;
  stockEntryNewFields.hidden = !isNew;

  stockEntryExistingFields.querySelectorAll("input, select, textarea").forEach((field) => {
    field.required = !isNew && field.id === "stock-entry-item-select";
  });

  stockEntryNewFields.querySelectorAll("input, select, textarea").forEach((field) => {
    field.required = isNew && ["name", "category", "code", "location"].includes(field.name);
  });
}

export function syncStockEntryMode() {
  const entryType = stockEntryTypeSelect.value;
  const isPurchase = entryType === "compra";

  stockEntryDonorWrapper.hidden = isPurchase;
  stockEntryEstimatedUnitCostWrapper.hidden = isPurchase;
  stockEntryPurchaseRequestWrapper.hidden = !isPurchase;
  stockEntryProviderWrapper.hidden = !isPurchase;
  stockEntryInvoiceWrapper.hidden = !isPurchase;
  if (stockEntryPurchaseMetaRow) {
    stockEntryPurchaseMetaRow.hidden = !isPurchase;
  }
  stockEntryPurchaseItems.hidden = !isPurchase;
  stockEntryTargetType.parentElement.hidden = isPurchase;
  if (stockEntryNewAmountLabel) {
    stockEntryNewAmountLabel.hidden = true;
  }
  const quantityFieldLabel = stockEntryForm.elements.quantity?.closest("label");
  if (quantityFieldLabel) {
    quantityFieldLabel.hidden = isPurchase;
  }
  stockEntryExistingFields.hidden = isPurchase || stockEntryTargetType.value === "new";
  stockEntryNewFields.hidden = isPurchase || stockEntryTargetType.value !== "new";

  stockEntryForm.elements.donor.required = !isPurchase;
  stockEntryForm.elements.estimatedUnitCost.required = !isPurchase;
  stockEntryForm.elements.purchaseRequestId.required = isPurchase;
  stockEntryForm.elements.provider.required = false;
  stockEntryForm.elements.provider.readOnly = isPurchase;
  stockEntryForm.elements.invoice.required = false;
  stockEntryForm.elements.quantity.required = !isPurchase;

  if (isPurchase) {
    renderPurchaseRequestOptions(state.dashboard?.purchaseRequests || []);
    renderSelectedPurchaseRequest();
  } else {
    toggleStockEntryFields(stockEntryTargetType.value);
    stockEntryPurchaseItems.innerHTML = "";
  }
}

export function resetStockEntryForm() {
  stockEntryForm.reset();
  delete stockEntryForm.elements.invoice.dataset.touched;
  state.selectedPurchaseRequestId = "";
  stockEntryForm.elements.entryType.value = "donacion";
  stockEntryForm.elements.targetType.value = "existing";
  stockEntryForm.elements.quantity.value = 1;
  stockEntryForm.elements.stockMinimum.value = 0;
  if (stockEntryForm.elements.estimatedUnitCost) {
    stockEntryForm.elements.estimatedUnitCost.value = 0;
  }
  if (stockEntryForm.elements.amount) {
    stockEntryForm.elements.amount.value = 0;
  }
  stockEntryItemSearch.value = "";
  syncStockEntryMode();
}

// Confirmaciones de compra con mercadería pendiente de ingreso (valor del select: "pedido::confirmación").
function pendingConfirmations(requests) {
  return requests.flatMap((request) =>
    (request.confirmations || [])
      .filter((confirmation) => confirmation.status !== "received")
      .map((confirmation) => ({ request, confirmation, key: `${request.id}::${confirmation.id}` }))
  );
}

function selectedConfirmation() {
  return pendingConfirmations(state.dashboard?.purchaseRequests || []).find((entry) => entry.key === state.selectedPurchaseRequestId);
}

export function renderPurchaseRequestOptions(requests) {
  const options = pendingConfirmations(requests);
  const currentValue = state.selectedPurchaseRequestId || stockEntryPurchaseRequestSelect.value;
  stockEntryPurchaseRequestSelect.innerHTML = "";

  if (!options.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No hay pedidos confirmados pendientes de ingreso";
    stockEntryPurchaseRequestSelect.append(option);
    stockEntryPurchaseRequestSelect.disabled = true;
    state.selectedPurchaseRequestId = "";
    return;
  }

  options.forEach(({ request, confirmation, key }) => {
    const pending = confirmation.lines.reduce((sum, line) => sum + Math.max(0, line.quantity - (line.receivedQuantity || 0)), 0);
    const option = document.createElement("option");
    option.value = key;
    option.textContent = `Pedido ${String(request.id).slice(0, 8).toUpperCase()} · Confirmación ${confirmation.number} · ${confirmation.supplierName} · ${pending} u. por recibir`;
    stockEntryPurchaseRequestSelect.append(option);
  });

  state.selectedPurchaseRequestId = options.some((entry) => entry.key === currentValue) ? currentValue : options[0].key;
  stockEntryPurchaseRequestSelect.value = state.selectedPurchaseRequestId;
  stockEntryPurchaseRequestSelect.disabled = false;
}

export function renderSelectedPurchaseRequest() {
  if (!stockEntryPurchaseItems) {
    return;
  }

  stockEntryPurchaseItems.innerHTML = "";
  if (stockEntryTypeSelect.value !== "compra") {
    stockEntryPurchaseItems.hidden = true;
    return;
  }
  stockEntryPurchaseItems.hidden = false;

  const selected = selectedConfirmation();
  const providerField = stockEntryForm.elements.provider;
  const invoiceField = stockEntryForm.elements.invoice;
  if (!selected) {
    providerField.value = "";
    stockEntryPurchaseItems.append(createEmptyState("Confirmá un pedido de compra (Pedido de compra → Confirmar) para registrar su ingreso."));
    return;
  }

  const { confirmation } = selected;
  // El proveedor sale de la confirmación; la factura se puede completar o corregir.
  providerField.value = confirmation.supplierName;
  providerField.readOnly = true;
  if (!invoiceField.dataset.touched) {
    invoiceField.value = confirmation.invoice || "";
  }

  confirmation.lines.forEach((line) => {
    const pending = Math.max(0, line.quantity - (line.receivedQuantity || 0));
    const wrapper = document.createElement("div");
    wrapper.className = "selection-card selection-card--compact";
    const content = document.createElement("div");
    content.className = "selection-card__body";
    const fieldsGrid = document.createElement("div");
    fieldsGrid.className = "purchase-entry-grid";

    const title = document.createElement("strong");
    title.textContent = line.itemName;
    const meta = document.createElement("p");
    meta.textContent = `${line.code}${line.subcode ? `-${line.subcode}` : ""} · Confirmado ${line.quantity} · Recibido ${line.receivedQuantity || 0} · Pendiente ${pending}`;

    const quantityLabel = document.createElement("label");
    quantityLabel.className = "purchase-entry-field";
    quantityLabel.textContent = pending ? "Cantidad recibida" : "Recibido por completo";
    const quantity = document.createElement("input");
    quantity.type = "number";
    quantity.min = "0";
    quantity.max = String(pending);
    quantity.value = String(pending);
    quantity.disabled = !pending;
    quantity.dataset.fulfillmentQuantity = line.itemId;
    quantityLabel.append(quantity);

    const unitCostLabel = document.createElement("label");
    unitCostLabel.className = "purchase-entry-field";
    unitCostLabel.textContent = "Costo unitario neto";
    const unitCost = document.createElement("input");
    unitCost.type = "text";
    unitCost.readOnly = true;
    unitCost.value = `$ ${formatCurrencyNumber(line.netUnitCost)}`;
    unitCostLabel.append(unitCost);

    const totalLabel = document.createElement("label");
    totalLabel.className = "purchase-entry-field";
    totalLabel.textContent = "Costo total";
    const total = document.createElement("input");
    total.type = "text";
    total.readOnly = true;
    const syncTotal = () => {
      total.value = `$ ${formatCurrencyNumber(Number(quantity.value || 0) * Number(line.netUnitCost))}`;
    };
    syncTotal();
    quantity.addEventListener("input", syncTotal);
    totalLabel.append(total);

    fieldsGrid.append(quantityLabel, unitCostLabel, totalLabel);
    content.append(title, meta, fieldsGrid);
    wrapper.append(content);
    stockEntryPurchaseItems.append(wrapper);
  });
}

export function collectPurchaseRequestFulfillmentItems() {
  return [...stockEntryPurchaseItems.querySelectorAll("[data-fulfillment-quantity]")]
    .map((field) => ({ itemId: field.dataset.fulfillmentQuantity, quantity: Number(field.value || 0) }))
    .filter((entry) => Number.isFinite(entry.quantity) && entry.quantity > 0);
}

export function renderStockEntries(entries) {
  stockEntriesList.innerHTML = "";
  const pageSize = 8;
  const totalPages = Math.max(1, Math.ceil(entries.length / pageSize));
  if (state.stockEntriesPage > totalPages) {
    state.stockEntriesPage = totalPages;
  }
  const startIndex = (state.stockEntriesPage - 1) * pageSize;
  const pageEntries = entries.slice(startIndex, startIndex + pageSize);

  if (entries.length === 0) {
    stockEntriesList.append(createEmptyState("Todavía no hay ingresos registrados."));
    updateSimplePagination(stockEntriesPrevPage, stockEntriesNextPage, stockEntriesPageInfo, 0, 1, "ingreso(s)");
    return;
  }

  pageEntries.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "activity-item";

    const title = document.createElement("strong");
    title.textContent = `${capitalize(entry.entryType)} · ${entry.itemName}`;
    const description = document.createElement("p");
    description.textContent = `${entry.targetType === "new" ? "Material nuevo" : "Material existente"} · ${entry.quantity} unidad(es) · Registró ${entry.createdBy}`;
    const detail = document.createElement("span");
    const unitCost = Number.isFinite(Number(entry.unitCost)) ? Number(entry.unitCost) : Number(entry.amount);
    const totalCost = Number.isFinite(Number(entry.totalCost)) ? Number(entry.totalCost) : undefined;
    detail.textContent = `${entry.observation || "Sin observación."}${entry.donor ? ` · Donante ${entry.donor}` : ""}${entry.provider ? ` · Proveedor ${entry.provider}` : ""}${entry.invoice ? ` · Factura ${entry.invoice}` : ""}${Number.isFinite(unitCost) ? ` · Costo unitario $${formatCurrencyNumber(unitCost)}` : ""}${Number.isFinite(totalCost) ? ` · Costo total $${formatCurrencyNumber(totalCost)}` : ""} · ${formatDateTime(entry.createdAt)}`;

    article.append(title, description, detail);
    stockEntriesList.append(article);
  });

  updateSimplePagination(stockEntriesPrevPage, stockEntriesNextPage, stockEntriesPageInfo, entries.length, totalPages, "ingreso(s)", state.stockEntriesPage);
}
