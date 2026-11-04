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
import { formatCurrencyNumber } from "../utils/format.js";
import { createEmptyState, render, renderViewState, showToast, syncSelectOptions } from "../ui/layout.js";
import { loadDashboard } from "../auth.js";

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
    return;
  }

  if (filteredItems.length === 0) {
    materialsAdminList.append(createEmptyState("No hay materiales que coincidan con los filtros aplicados."));
    updateMaterialsPagination(0, 1);
    return;
  }

  pagedItems.forEach((item) => {
    const fragment = materialAdminTemplate.content.cloneNode(true);
    fragment.querySelector("strong").textContent = item.name;
    fragment.querySelector("p").textContent =
      `${item.category} · ${item.code}${item.subcode ? `-${item.subcode}` : ""} · ${item.location || "Sin ubicación"} · Stock ${item.stock} · Mínimo ${item.stockMinimum ?? 0}`;
    fragment.querySelector("span").textContent = `${item.notes || "Sin observaciones."} · Costo unitario promedio $${formatCurrencyNumber(item.amount)}${item.lastPurchaseCost != null ? ` · Último costo $${formatCurrencyNumber(item.lastPurchaseCost)}` : ""}`;
    fragment.querySelector(".material-edit-button").addEventListener("click", () => startEditItem(item));
    fragment.querySelector(".material-delete-button").addEventListener("click", async () => {
      const confirmed = window.confirm(`¿Querés eliminar el material "${item.name}"?`);
      if (!confirmed) {
        return;
      }

      const reason = window.prompt(`Ingresá el motivo de baja para "${item.name}":`, "");
      if (reason === null) {
        return;
      }

      const trimmedReason = reason.trim();
      if (!trimmedReason) {
        showToast("error", "Motivo obligatorio", "Tenés que indicar el motivo de baja para eliminar el material.");
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
        showToast("success", "Material eliminado", `La baja se registró correctamente. Motivo: ${trimmedReason}.`);
      } catch (error) {
        showToast("error", "No se pudo eliminar el material", error.message);
      }
    });
    materialsAdminList.append(fragment);
  });

  updateMaterialsPagination(filteredItems.length, totalPages);
}

export function renderMaterialsFilters(items) {
  const categories = (state.dashboard?.categories || []).map((category) => category.name);
  const locations = (state.dashboard?.locations || []).map((location) => location.name);

  syncSelectOptions(materialsCategoryFilter, categories, "Todas");
  syncSelectOptions(materialsLocationFilter, locations, "Todas");
  materialsSearch.value = state.materialsFilters.search;
  materialsCategoryFilter.value = state.materialsFilters.category;
  materialsLocationFilter.value = state.materialsFilters.location;
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

    return matchesSearch && matchesCategory && matchesLocation;
  });
}

export function updateMaterialsPagination(totalItems, totalPages) {
  materialsPageInfo.textContent = `Página ${state.materialsPage} de ${totalPages} · ${totalItems} material(es)`;
  materialsPrevPage.disabled = state.materialsPage <= 1;
  materialsNextPage.disabled = state.materialsPage >= totalPages;
}

export function startEditItem(item) {
  state.activeView = "item-form";
  state.editingItemId = item.id;
  itemForm.elements.id.value = item.id;
  itemForm.elements.name.value = item.name || "";
  itemForm.elements.category.value = item.category || itemCategorySelect.value || "";
  itemForm.elements.code.value = item.code || "";
  itemForm.elements.subcode.value = item.subcode || "";
  itemForm.elements.location.value = item.location || itemLocationSelect.value || "";
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
  itemForm.elements.stock.value = 1;
  itemForm.elements.stockMinimum.value = 1;
  itemForm.elements.amount.value = 0;
  itemSubmitButton.textContent = "Guardar material";
  itemCancelButton.hidden = true;
}
