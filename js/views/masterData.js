import { state } from "../state.js";
import {
  categoriesAdminList,
  categoriesNextPage,
  categoriesPageInfo,
  categoriesPrevPage,
  categoryAdminTemplate,
  categoryCancelButton,
  categoryForm,
  categorySubmitButton,
  costCenterCancelButton,
  costCenterForm,
  costCentersAdminList,
  costCentersNextPage,
  costCentersPageInfo,
  costCentersPrevPage,
  costCenterSubmitButton,
  locationAdminTemplate,
  locationCancelButton,
  locationForm,
  locationsAdminList,
  locationsNextPage,
  locationsPageInfo,
  locationsPrevPage,
  locationSubmitButton,
  orientationCancelButton,
  orientationForm,
  orientationsAdminList,
  orientationsNextPage,
  orientationsPageInfo,
  orientationsPrevPage,
  orientationSubmitButton,
} from "../dom.js";
import { api } from "../api.js";
import { formatDateTime } from "../utils/format.js";
import { createEmptyState, render, renderViewState, showToast, updateSimplePagination } from "../ui/layout.js";
import { loadDashboard } from "../auth.js";

// Ubicaciones, categorías, centros de costos y orientaciones.
export async function handleCostCenterSubmit(event) {
  event.preventDefault();

  try {
    const formData = new FormData(costCenterForm);
    const isEditing = Boolean(state.editingCostCenterId);
    await api(isEditing ? `/api/cost-centers/${state.editingCostCenterId}` : "/api/cost-centers", {
      method: isEditing ? "PUT" : "POST",
      body: {
        name: formData.get("name"),
        description: formData.get("description"),
      },
    });

    resetCostCenterForm();
    await loadDashboard();
    render();
    showToast("success", isEditing ? "Centro de costos actualizado" : "Centro de costos guardado", "Los cambios se registraron correctamente.");
  } catch (error) {
    showToast("error", "No se pudo guardar el centro de costos", error.message);
  }
}

export function renderLocationsAdmin(locations) {
  locationsAdminList.innerHTML = "";
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(locations.length / pageSize));
  if (state.locationsPage > totalPages) {
    state.locationsPage = totalPages;
  }
  const startIndex = (state.locationsPage - 1) * pageSize;
  const pagedLocations = locations.slice(startIndex, startIndex + pageSize);

  if (locations.length === 0) {
    locationsAdminList.append(createEmptyState("Todavía no hay ubicaciones cargadas."));
    updateLocationsPagination(0, 1);
    return;
  }

  pagedLocations.forEach((location) => {
    const fragment = locationAdminTemplate.content.cloneNode(true);
    fragment.querySelector("strong").textContent = location.name;
    fragment.querySelector("p").textContent = location.description || "Sin descripción.";
    fragment.querySelector("span").textContent = `Creada: ${formatDateTime(location.createdAt)}`;
    fragment.querySelector(".location-edit-button").addEventListener("click", () => startEditLocation(location));
    fragment.querySelector(".location-delete-button").addEventListener("click", async () => {
      const confirmed = window.confirm(`¿Querés eliminar la ubicación "${location.name}"?`);
      if (!confirmed) {
        return;
      }

      try {
        await api(`/api/locations/${location.id}`, { method: "DELETE" });
        if (state.editingLocationId === location.id) {
          resetLocationForm();
        }
        await loadDashboard();
        render();
        showToast("success", "Ubicación eliminada", "El registro se eliminó correctamente.");
      } catch (error) {
        showToast("error", "No se pudo eliminar la ubicación", error.message);
      }
    });
    locationsAdminList.append(fragment);
  });

  updateLocationsPagination(locations.length, totalPages);
}

export function renderCostCentersAdmin(costCenters) {
  costCentersAdminList.innerHTML = "";
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(costCenters.length / pageSize));
  if (state.costCentersPage > totalPages) {
    state.costCentersPage = totalPages;
  }
  const startIndex = (state.costCentersPage - 1) * pageSize;
  const pagedCostCenters = costCenters.slice(startIndex, startIndex + pageSize);

  if (costCenters.length === 0) {
    costCentersAdminList.append(createEmptyState("Todavía no hay centros de costos cargados."));
    updateSimplePagination(costCentersPrevPage, costCentersNextPage, costCentersPageInfo, 0, 1, "centro(s) de costos");
    return;
  }

  pagedCostCenters.forEach((costCenter) => {
    const fragment = categoryAdminTemplate.content.cloneNode(true);
    fragment.querySelector("strong").textContent = costCenter.name;
    fragment.querySelector("p").textContent = costCenter.description || "Sin descripción.";
    fragment.querySelector("span").textContent = `Alta: ${formatDateTime(costCenter.createdAt)}`;
    fragment.querySelector(".category-edit-button").addEventListener("click", () => startEditCostCenter(costCenter));
    fragment.querySelector(".category-delete-button").addEventListener("click", async () => {
      const confirmed = window.confirm(`¿Querés eliminar el centro de costos "${costCenter.name}"?`);
      if (!confirmed) {
        return;
      }

      try {
        await api(`/api/cost-centers/${costCenter.id}`, { method: "DELETE" });
        if (state.editingCostCenterId === costCenter.id) {
          resetCostCenterForm();
        }
        await loadDashboard();
        render();
        showToast("success", "Centro de costos eliminado", "El registro se eliminó correctamente.");
      } catch (error) {
        showToast("error", "No se pudo eliminar el centro de costos", error.message);
      }
    });
    costCentersAdminList.append(fragment);
  });

  updateSimplePagination(costCentersPrevPage, costCentersNextPage, costCentersPageInfo, costCenters.length, totalPages, "centro(s) de costos", state.costCentersPage);
}

export function renderCategoriesAdmin(categories) {
  categoriesAdminList.innerHTML = "";
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(categories.length / pageSize));
  if (state.categoriesPage > totalPages) {
    state.categoriesPage = totalPages;
  }
  const startIndex = (state.categoriesPage - 1) * pageSize;
  const pagedCategories = categories.slice(startIndex, startIndex + pageSize);

  if (categories.length === 0) {
    categoriesAdminList.append(createEmptyState("Todavía no hay categorías cargadas."));
    updateCategoriesPagination(0, 1);
    return;
  }

  pagedCategories.forEach((category) => {
    const fragment = categoryAdminTemplate.content.cloneNode(true);
    fragment.querySelector("strong").textContent = category.name;
    fragment.querySelector("p").textContent = category.description || "Sin descripción.";
    fragment.querySelector("span").textContent = `Creada: ${formatDateTime(category.createdAt)}`;
    fragment.querySelector(".category-edit-button").addEventListener("click", () => startEditCategory(category));
    fragment.querySelector(".category-delete-button").addEventListener("click", async () => {
      const confirmed = window.confirm(`¿Querés eliminar la categoría "${category.name}"?`);
      if (!confirmed) {
        return;
      }

      try {
        await api(`/api/categories/${category.id}`, { method: "DELETE" });
        if (state.editingCategoryId === category.id) {
          resetCategoryForm();
        }
        await loadDashboard();
        render();
        showToast("success", "Categoría eliminada", "El registro se eliminó correctamente.");
      } catch (error) {
        showToast("error", "No se pudo eliminar la categoría", error.message);
      }
    });
    categoriesAdminList.append(fragment);
  });

  updateCategoriesPagination(categories.length, totalPages);
}

export function renderOrientationsAdmin(orientations) {
  orientationsAdminList.innerHTML = "";
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(orientations.length / pageSize));
  if (state.orientationsPage > totalPages) {
    state.orientationsPage = totalPages;
  }
  const startIndex = (state.orientationsPage - 1) * pageSize;
  const pagedOrientations = orientations.slice(startIndex, startIndex + pageSize);

  if (orientations.length === 0) {
    orientationsAdminList.append(createEmptyState("Todavía no hay orientaciones cargadas."));
    updateOrientationsPagination(0, 1);
    return;
  }

  pagedOrientations.forEach((orientation) => {
    const fragment = categoryAdminTemplate.content.cloneNode(true);
    fragment.querySelector("strong").textContent = orientation.name;
    fragment.querySelector("p").textContent = orientation.description || "Sin descripción.";
    fragment.querySelector("span").textContent = `Creada: ${formatDateTime(orientation.createdAt)}`;
    fragment.querySelector(".category-edit-button").addEventListener("click", () => startEditOrientation(orientation));
    fragment.querySelector(".category-delete-button").addEventListener("click", async () => {
      const confirmed = window.confirm(`¿Querés eliminar la orientación "${orientation.name}"?`);
      if (!confirmed) {
        return;
      }

      try {
        await api(`/api/orientations/${orientation.id}`, { method: "DELETE" });
        if (state.editingOrientationId === orientation.id) {
          resetOrientationForm();
        }
        await loadDashboard();
        render();
        showToast("success", "Orientación eliminada", "El registro se eliminó correctamente.");
      } catch (error) {
        showToast("error", "No se pudo eliminar la orientación", error.message);
      }
    });
    orientationsAdminList.append(fragment);
  });

  updateOrientationsPagination(orientations.length, totalPages);
}

export function updateCategoriesPagination(totalItems, totalPages) {
  categoriesPageInfo.textContent = `Página ${state.categoriesPage} de ${totalPages} · ${totalItems} categoría(s)`;
  categoriesPrevPage.disabled = state.categoriesPage <= 1;
  categoriesNextPage.disabled = state.categoriesPage >= totalPages;
}

export function updateLocationsPagination(totalItems, totalPages) {
  locationsPageInfo.textContent = `Página ${state.locationsPage} de ${totalPages} · ${totalItems} ubicación(es)`;
  locationsPrevPage.disabled = state.locationsPage <= 1;
  locationsNextPage.disabled = state.locationsPage >= totalPages;
}

export function updateOrientationsPagination(totalItems, totalPages) {
  orientationsPageInfo.textContent = `Página ${state.orientationsPage} de ${totalPages} · ${totalItems} orientación(es)`;
  orientationsPrevPage.disabled = state.orientationsPage <= 1;
  orientationsNextPage.disabled = state.orientationsPage >= totalPages;
}

export async function handleCategorySubmit(event) {
  event.preventDefault();

  try {
    const formData = new FormData(categoryForm);
    const isEditing = Boolean(state.editingCategoryId);
    await api(isEditing ? `/api/categories/${state.editingCategoryId}` : "/api/categories", {
      method: state.editingCategoryId ? "PUT" : "POST",
      body: {
        name: formData.get("name"),
        description: formData.get("description"),
      },
    });

    resetCategoryForm();
    await loadDashboard();
    render();
    showToast("success", isEditing ? "Categoría actualizada" : "Categoría guardada", isEditing ? "Los cambios se registraron correctamente." : "La categoría se cargó correctamente.");
  } catch (error) {
    showToast("error", "No se pudo guardar la categoría", error.message);
  }
}

export function startEditCategory(category) {
  state.activeView = "master-data-categories";
  state.editingCategoryId = category.id;
  categoryForm.elements.id.value = category.id;
  categoryForm.elements.name.value = category.name || "";
  categoryForm.elements.description.value = category.description || "";
  categorySubmitButton.textContent = "Actualizar categoría";
  categoryCancelButton.hidden = false;
  renderViewState();
}

export function resetCategoryForm() {
  state.editingCategoryId = null;
  state.categoriesPage = 1;
  categoryForm.reset();
  categoryForm.elements.id.value = "";
  categorySubmitButton.textContent = "Guardar categoría";
  categoryCancelButton.hidden = true;
}

export async function handleOrientationSubmit(event) {
  event.preventDefault();

  try {
    const formData = new FormData(orientationForm);
    const isEditing = Boolean(state.editingOrientationId);
    await api(isEditing ? `/api/orientations/${state.editingOrientationId}` : "/api/orientations", {
      method: state.editingOrientationId ? "PUT" : "POST",
      body: {
        name: formData.get("name"),
        description: formData.get("description"),
      },
    });

    resetOrientationForm();
    await loadDashboard();
    render();
    showToast("success", isEditing ? "Orientación actualizada" : "Orientación guardada", isEditing ? "Los cambios se registraron correctamente." : "La orientación se cargó correctamente.");
  } catch (error) {
    showToast("error", "No se pudo guardar la orientación", error.message);
  }
}

export function startEditOrientation(orientation) {
  state.activeView = "master-data-orientations";
  state.editingOrientationId = orientation.id;
  orientationForm.elements.id.value = orientation.id;
  orientationForm.elements.name.value = orientation.name || "";
  orientationForm.elements.description.value = orientation.description || "";
  orientationSubmitButton.textContent = "Actualizar orientación";
  orientationCancelButton.hidden = false;
  renderViewState();
}

export function resetOrientationForm() {
  state.editingOrientationId = null;
  state.orientationsPage = 1;
  orientationForm.reset();
  orientationForm.elements.id.value = "";
  orientationSubmitButton.textContent = "Guardar orientación";
  orientationCancelButton.hidden = true;
}

export async function handleLocationSubmit(event) {
  event.preventDefault();

  try {
    const formData = new FormData(locationForm);
    const isEditing = Boolean(state.editingLocationId);
    await api(isEditing ? `/api/locations/${state.editingLocationId}` : "/api/locations", {
      method: state.editingLocationId ? "PUT" : "POST",
      body: {
        name: formData.get("name"),
        description: formData.get("description"),
      },
    });

    resetLocationForm();
    await loadDashboard();
    render();
    showToast("success", isEditing ? "Ubicación actualizada" : "Ubicación guardada", isEditing ? "Los cambios se registraron correctamente." : "La ubicación se cargó correctamente.");
  } catch (error) {
    showToast("error", "No se pudo guardar la ubicación", error.message);
  }
}

export function startEditLocation(location) {
  state.activeView = "master-data-locations";
  state.editingLocationId = location.id;
  locationForm.elements.id.value = location.id;
  locationForm.elements.name.value = location.name || "";
  locationForm.elements.description.value = location.description || "";
  locationSubmitButton.textContent = "Actualizar ubicación";
  locationCancelButton.hidden = false;
  renderViewState();
}

export function resetLocationForm() {
  state.editingLocationId = null;
  state.locationsPage = 1;
  locationForm.reset();
  locationForm.elements.id.value = "";
  locationSubmitButton.textContent = "Guardar ubicación";
  locationCancelButton.hidden = true;
}

export function startEditCostCenter(costCenter) {
  state.activeView = "master-data-cost-centers";
  state.editingCostCenterId = costCenter.id;
  costCenterForm.elements.id.value = costCenter.id;
  costCenterForm.elements.name.value = costCenter.name || "";
  costCenterForm.elements.description.value = costCenter.description || "";
  costCenterSubmitButton.textContent = "Actualizar centro de costos";
  costCenterCancelButton.hidden = false;
  renderViewState();
}

export function resetCostCenterForm() {
  state.editingCostCenterId = null;
  state.costCentersPage = 1;
  costCenterForm.reset();
  costCenterForm.elements.id.value = "";
  costCenterSubmitButton.textContent = "Guardar centro de costos";
  costCenterCancelButton.hidden = true;
}
