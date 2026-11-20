import { state } from "../state.js";
import {
  itemCancelButton,
  itemCategorySelect,
  itemForm,
  itemLocationSelect,
  itemSubmitButton,
  materialAdminTemplate,
  materialsAdminList,
  materialsCategoryFilter,
  materialsLocationFilter,
  materialsNextPage,
  materialsPageInfo,
  materialsPrevPage,
  materialsSearch,
} from "../dom.js";
import { api } from "../api.js";
import { formatCurrencyNumber, formatDateTime } from "../utils/format.js";
import { WRITE_OFF_REASONS, formatQuantity, isRetired, quantityStep, unitOf } from "../utils/units.js";
import { createEmptyState, render, renderViewState, showToast, syncSelectOptions } from "../ui/layout.js";
import { can, loadDashboard } from "../auth.js";

const statusFilter = document.querySelector("#materials-status-filter");
const writeOffsList = document.querySelector("#write-offs-list");
const writeOffsSearch = document.querySelector("#write-offs-search");
const writeOffsReasonFilter = document.querySelector("#write-offs-reason-filter");
const writeOffsPrev = document.querySelector("#write-offs-prev-page");
const writeOffsNext = document.querySelector("#write-offs-next-page");
const writeOffsPageInfo = document.querySelector("#write-offs-page-info");

// Estado propio de esta pantalla (filtro de estado, baja en curso e historial de bajas).
const local = {
  status: "active",
  writingOffId: "",
  writeOffs: { search: "", reason: "", page: 1 },
};

// Alta y edición de materiales.
export async function handleItemSubmit(event) {
  event.preventDefault();

  try {
    const formData = new FormData(itemForm);
    const payload = {
      name: formData.get("name"),
      category: formData.get("category"),
      code: formData.get("code"),
      subcode: formData.get("subcode"),
      location: formData.get("location"),
      unit: formData.get("unit"),
      stock: Number(formData.get("stock")),
      stockMinimum: Number(formData.get("stockMinimum")),
      amount: Number(formData.get("amount")),
      notes: formData.get("notes"),
    };

    const isEditing = Boolean(state.editingItemId);
    await api(isEditing ? `/api/items/${state.editingItemId}` : "/api/items", {
      method: state.editingItemId ? "PUT" : "POST",
      body: {
        ...payload,
      },
    });

    resetItemForm();
    await loadDashboard();
    render();
    showToast("success", isEditing ? "Material actualizado" : "Material guardado", isEditing ? "Los cambios se registraron correctamente." : "El material se cargó correctamente.");
  } catch (error) {
    showToast("error", "No se pudo guardar el material", error.message);
  }
}

function nowParts() {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return { date: `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`, time: `${pad(now.getHours())}:${pad(now.getMinutes())}` };
}

function field(labelText, control, className = "") {
  const label = document.createElement("label");
  if (className) label.className = className;
  label.append(document.createTextNode(labelText), control);
  return label;
}

// Formulario de baja dentro de la tarjeta del material: cantidad, motivo, observación, fecha y hora.
function writeOffForm(item) {
  const form = document.createElement("form");
  form.className = "write-off-form";
  const { date, time } = nowParts();

  const title = document.createElement("strong");
  title.className = "write-off-form__title";
  title.textContent = `Dar de baja · stock actual ${formatQuantity(item.stock, item)}`;

  const quantity = document.createElement("input");
  quantity.type = "number";
  quantity.name = "quantity";
  quantity.min = quantityStep(item);
  quantity.step = quantityStep(item);
  quantity.max = String(item.stock);
  quantity.value = String(Math.min(1, Number(item.stock)) || item.stock);
  quantity.required = true;

  const reason = document.createElement("select");
  reason.name = "reason";
  reason.required = true;
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Seleccionar motivo";
  reason.append(placeholder, ...WRITE_OFF_REASONS.map((text) => Object.assign(document.createElement("option"), { value: text, textContent: text })));

  const dateInput = Object.assign(document.createElement("input"), { type: "date", name: "date", value: date, max: date, required: true });
  const timeInput = Object.assign(document.createElement("input"), { type: "time", name: "time", value: time, required: true });
  const observation = Object.assign(document.createElement("textarea"), { name: "observation", rows: 2, maxLength: 500, placeholder: "Detalle de la baja: qué pasó, quién informó, n.° de acta, etc." });

  const retire = Object.assign(document.createElement("input"), { type: "checkbox", name: "retire" });
  const retireLabel = document.createElement("label");
  retireLabel.className = "write-off-form__retire";
  retireLabel.append(retire, document.createTextNode(" Baja definitiva: se da de baja todo el stock y el material deja de usarse (no se presta, no se consume y no genera alertas)."));
  retire.addEventListener("change", () => {
    quantity.disabled = retire.checked;
    if (retire.checked) quantity.value = String(item.stock);
  });

  const unitHint = document.createElement("small");
  unitHint.textContent = `En ${unitOf(item).label.toLowerCase()}${unitOf(item).decimals ? " (admite decimales)" : ""}.`;

  const actions = document.createElement("div");
  actions.className = "write-off-form__actions";
  const submit = Object.assign(document.createElement("button"), { type: "submit", className: "button button--danger", textContent: "Registrar baja" });
  const cancel = Object.assign(document.createElement("button"), { type: "button", className: "button button--ghost", textContent: "Cancelar" });
  cancel.addEventListener("click", () => {
    local.writingOffId = "";
    renderMaterialsAdmin(state.dashboard?.items || []);
  });
  actions.append(submit, cancel);

  const quantityField = field("Cantidad", quantity);
  quantityField.append(unitHint);
  form.append(
    title,
    quantityField,
    field("Motivo", reason),
    field("Fecha", dateInput),
    field("Hora", timeInput),
    field("Observación", observation, "write-off-form__wide"),
    retireLabel,
    actions
  );

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (reason.value === "Otro" && !observation.value.trim()) {
      showToast("error", "Falta la observación", "Con el motivo \"Otro\", explicá la baja en la observación.");
      observation.focus();
      return;
    }
    try {
      const result = await api(`/api/items/${item.id}/write-offs`, {
        method: "POST",
        body: {
          quantity: Number(quantity.value),
          reason: reason.value,
          observation: observation.value,
          date: dateInput.value,
          time: timeInput.value,
          retire: retire.checked,
        },
      });
      local.writingOffId = "";
      await loadDashboard();
      render();
      showToast(
        "success",
        retire.checked ? "Material dado de baja" : "Baja registrada",
        retire.checked
          ? `${item.name} quedó dado de baja definitivamente (${formatQuantity(result.writeOff.quantity, item)}).`
          : `Se dio de baja ${formatQuantity(result.writeOff.quantity, item)} de ${item.name}. Stock restante: ${formatQuantity(result.item.stock, item)}.`
      );
    } catch (error) {
      showToast("error", "No se pudo registrar la baja", error.message);
    }
  });
  setTimeout(() => reason.focus(), 0);
  return form;
}

async function reactivateItem(item) {
  try {
    await api(`/api/items/${item.id}/reactivate`, { method: "POST", body: {} });
    await loadDashboard();
    render();
    showToast("success", "Material habilitado", `${item.name} vuelve a estar en uso. Cargá un ingreso para reponer el stock.`);
  } catch (error) {
    showToast("error", "No se pudo habilitar el material", error.message);
  }
}

async function deleteItem(item) {
  const confirmed = window.confirm(`¿Querés eliminar el material "${item.name}"?\n\nUsá "Eliminar" solo si se cargó por error. Para registrar una rotura, pérdida o desuso, usá "Dar de baja".`);
  if (!confirmed) {
    return;
  }

  const reason = window.prompt(`Ingresá el motivo de la eliminación de "${item.name}":`, "Cargado por error");
  if (reason === null) {
    return;
  }

  const trimmedReason = reason.trim();
  if (!trimmedReason) {
    showToast("error", "Motivo obligatorio", "Tenés que indicar el motivo para eliminar el material.");
    return;
  }

  try {
    await api(`/api/items/${item.id}`, {
      method: "DELETE",
      body: { reason: trimmedReason },
    });
    if (state.editingItemId === item.id) {
      resetItemForm();
    }
    await loadDashboard();
    render();
    showToast("success", "Material eliminado", `Se eliminó el material. Motivo: ${trimmedReason}.`);
  } catch (error) {
    showToast("error", "No se pudo eliminar el material", error.message);
  }
}

export function renderMaterialsAdmin(items) {
  materialsAdminList.innerHTML = "";
  const filteredItems = filterMaterialsItems(items);
  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / pageSize));
  if (state.materialsPage > totalPages) {
    state.materialsPage = totalPages;
  }
  const startIndex = (state.materialsPage - 1) * pageSize;
  const pagedItems = filteredItems.slice(startIndex, startIndex + pageSize);

  if (items.length === 0) {
    materialsAdminList.append(createEmptyState("Todavía no hay materiales cargados."));
    updateMaterialsPagination(0, 1);
    renderWriteOffs();
    return;
  }

  if (filteredItems.length === 0) {
    materialsAdminList.append(createEmptyState(local.status === "retired" ? "No hay materiales dados de baja." : "No hay materiales que coincidan con los filtros aplicados."));
    updateMaterialsPagination(0, 1);
    renderWriteOffs();
    return;
  }

  const canManage = can("items.manage");
  const canWriteOff = can("items.writeOff");
  pagedItems.forEach((item) => {
    const fragment = materialAdminTemplate.content.cloneNode(true);
    const article = fragment.querySelector("article");
    const retired = isRetired(item);
    article.classList.toggle("is-retired", retired);
    fragment.querySelector("strong").textContent = retired ? `${item.name} · Dado de baja` : item.name;
    fragment.querySelector("p").textContent =
      `${item.category} · ${item.code}${item.subcode ? `-${item.subcode}` : ""} · ${item.location || "Sin ubicación"} · Unidad: ${unitOf(item).label} · Stock ${formatQuantity(item.stock, item)} · Mínimo ${formatQuantity(item.stockMinimum ?? 0, item)}`;
    fragment.querySelector("span").textContent = retired
      ? `Dado de baja el ${formatDateTime(item.retiredAt)} por ${item.retiredBy || "-"}.`
      : `${item.notes || "Sin observaciones."} · Costo unitario promedio $${formatCurrencyNumber(item.amount)}${item.lastPurchaseCost != null ? ` · Último costo $${formatCurrencyNumber(item.lastPurchaseCost)}` : ""}`;

    const editButton = fragment.querySelector(".material-edit-button");
    const writeOffButton = fragment.querySelector(".material-writeoff-button");
    const reactivateButton = fragment.querySelector(".material-reactivate-button");
    const deleteButton = fragment.querySelector(".material-delete-button");
    editButton.hidden = !canManage || retired;
    deleteButton.hidden = !canManage;
    writeOffButton.hidden = !canWriteOff || retired || local.writingOffId === item.id;
    writeOffButton.disabled = Number(item.stock) <= 0;
    writeOffButton.title = Number(item.stock) <= 0 ? "No hay stock para dar de baja" : "";
    reactivateButton.hidden = !canWriteOff || !retired;

    editButton.addEventListener("click", () => startEditItem(item));
    writeOffButton.addEventListener("click", () => {
      local.writingOffId = item.id;
      renderMaterialsAdmin(state.dashboard?.items || []);
    });
    reactivateButton.addEventListener("click", () => reactivateItem(item));
    deleteButton.addEventListener("click", () => deleteItem(item));

    if (local.writingOffId === item.id && !retired) {
      const form = writeOffForm(item);
      fragment.querySelector(".material-admin-item__content").append(form);
      // La lista tiene scroll propio: se muestra el formulario completo.
      requestAnimationFrame(() => form.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }
    materialsAdminList.append(fragment);
  });

  updateMaterialsPagination(filteredItems.length, totalPages);
  renderWriteOffs();
}

export function renderMaterialsFilters(items) {
  const categories = (state.dashboard?.categories || []).map((category) => category.name);
  const locations = (state.dashboard?.locations || []).map((location) => location.name);

  syncSelectOptions(materialsCategoryFilter, categories, "Todas");
  syncSelectOptions(materialsLocationFilter, locations, "Todas");
  materialsSearch.value = state.materialsFilters.search;
  materialsCategoryFilter.value = state.materialsFilters.category;
  materialsLocationFilter.value = state.materialsFilters.location;
  if (statusFilter && statusFilter.value !== "history") statusFilter.value = local.status;
}

export function filterMaterialsItems(items) {
  const { search, category, location } = state.materialsFilters;

  return items.filter((item) => {
    const matchesSearch =
      !search ||
      [item.name, item.code, item.subcode, item.location, item.notes, item.category]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(search));
    const matchesCategory = !category || item.category === category;
    const matchesLocation = !location || item.location === location;
    const matchesStatus = !local.status || (local.status === "retired" ? isRetired(item) : !isRetired(item));

    return matchesSearch && matchesCategory && matchesLocation && matchesStatus;
  });
}

export function updateMaterialsPagination(totalItems, totalPages) {
  materialsPageInfo.textContent = `Página ${state.materialsPage} de ${totalPages} · ${totalItems} material(es)`;
  materialsPrevPage.disabled = state.materialsPage <= 1;
  materialsNextPage.disabled = state.materialsPage >= totalPages;
}

// --- Historial de bajas ---
function renderWriteOffs() {
  if (!writeOffsList) return;
  if (writeOffsReasonFilter && writeOffsReasonFilter.options.length === 1) {
    WRITE_OFF_REASONS.forEach((text) => writeOffsReasonFilter.append(Object.assign(document.createElement("option"), { value: text, textContent: text })));
  }
  const { search, reason } = local.writeOffs;
  const all = state.dashboard?.writeOffs || [];
  const filtered = all.filter((entry) =>
    (!reason || entry.reason === reason) &&
    (!search || [entry.itemName, entry.itemCode, entry.observation, entry.createdBy].filter(Boolean).some((value) => String(value).toLowerCase().includes(search)))
  );
  const pageSize = 8;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  if (local.writeOffs.page > totalPages) local.writeOffs.page = totalPages;
  writeOffsList.innerHTML = "";
  if (!filtered.length) {
    writeOffsList.append(createEmptyState(all.length ? "No hay bajas que coincidan con el filtro." : "Todavía no se registraron bajas."));
  }
  filtered.slice((local.writeOffs.page - 1) * pageSize, local.writeOffs.page * pageSize).forEach((entry) => {
    const article = document.createElement("article");
    article.className = "activity-item write-off-item";
    const title = document.createElement("strong");
    title.textContent = `${entry.itemName}${entry.itemCode ? ` (${entry.itemCode})` : ""} · ${formatQuantity(entry.quantity, entry.unit)}${entry.retire ? " · Baja definitiva" : ""}`;
    const reasonText = document.createElement("p");
    reasonText.textContent = `${entry.reason}${entry.observation ? ` · ${entry.observation}` : ""}`;
    const meta = document.createElement("span");
    meta.textContent = `${String(entry.date || "").split("-").reverse().join("/")} ${entry.time || ""} · Registró ${entry.createdBy || "-"}${entry.unitCost ? ` · Valor estimado $${formatCurrencyNumber(entry.unitCost * entry.quantity)}` : ""}`;
    article.append(title, reasonText, meta);
    writeOffsList.append(article);
  });
  writeOffsPageInfo.textContent = `Página ${local.writeOffs.page} de ${totalPages} · ${filtered.length} baja(s)`;
  writeOffsPrev.disabled = local.writeOffs.page <= 1;
  writeOffsNext.disabled = local.writeOffs.page >= totalPages;
}

// Eventos propios de esta pantalla (se conectan una sola vez desde main.js).
export function setupMaterialsExtras() {
  const rerender = () => renderMaterialsAdmin(state.dashboard?.items || []);
  statusFilter?.addEventListener("change", () => {
    // "Historial de bajas" reemplaza la lista y el formulario por el historial.
    const showHistory = statusFilter.value === "history";
    document.querySelector("#item-panel")?.classList.toggle("show-write-offs", showHistory);
    document.querySelector(".write-offs-block")?.toggleAttribute("hidden", !showHistory);
    if (!showHistory) local.status = statusFilter.value;
    state.materialsPage = 1;
    rerender();
  });
  writeOffsSearch?.addEventListener("input", () => {
    local.writeOffs.search = writeOffsSearch.value.trim().toLowerCase();
    local.writeOffs.page = 1;
    renderWriteOffs();
  });
  writeOffsReasonFilter?.addEventListener("change", () => {
    local.writeOffs.reason = writeOffsReasonFilter.value;
    local.writeOffs.page = 1;
    renderWriteOffs();
  });
  writeOffsPrev?.addEventListener("click", () => {
    local.writeOffs.page = Math.max(1, local.writeOffs.page - 1);
    renderWriteOffs();
  });
  writeOffsNext?.addEventListener("click", () => {
    local.writeOffs.page += 1;
    renderWriteOffs();
  });
}

export function startEditItem(item) {
  state.activeView = "item-form";
  state.editingItemId = item.id;
  local.writingOffId = "";
  itemForm.elements.id.value = item.id;
  itemForm.elements.name.value = item.name || "";
  itemForm.elements.category.value = item.category || itemCategorySelect.value || "";
  itemForm.elements.code.value = item.code || "";
  itemForm.elements.subcode.value = item.subcode || "";
  itemForm.elements.location.value = item.location || itemLocationSelect.value || "";
  itemForm.elements.unit.value = item.unit || "unidad";
  itemForm.elements.stock.value = item.stock ?? 1;
  itemForm.elements.stockMinimum.value = item.stockMinimum ?? 1;
  itemForm.elements.amount.value = item.amount ?? 0;
  itemForm.elements.notes.value = item.notes || "";
  itemSubmitButton.textContent = "Actualizar material";
  itemCancelButton.hidden = false;
  renderViewState();
}

export function resetItemForm() {
  state.editingItemId = null;
  itemForm.reset();
  itemForm.elements.id.value = "";
  itemForm.elements.category.value = itemCategorySelect.value || "";
  itemForm.elements.location.value = itemLocationSelect.value || "";
  itemForm.elements.unit.value = "unidad";
  itemForm.elements.stock.value = 1;
  itemForm.elements.stockMinimum.value = 1;
  itemForm.elements.amount.value = 0;
  itemSubmitButton.textContent = "Guardar material";
  itemCancelButton.hidden = true;
}
