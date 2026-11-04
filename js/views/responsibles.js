import { state } from "../state.js";
import {
  responsibleAdminTemplate,
  responsibleCancelButton,
  responsibleForm,
  responsibleOrientationSelect,
  responsiblesAdminList,
  responsiblesDniFilter,
  responsiblesNameFilter,
  responsiblesNextPage,
  responsiblesPageInfo,
  responsiblesPrevPage,
  responsiblesTypeFilter,
  responsibleSubmitButton,
  responsibleTypeFieldsets,
} from "../dom.js";
import { api } from "../api.js";
import { capitalize, dniLabel } from "../utils/format.js";
import { createEmptyState, render, renderViewState, showToast } from "../ui/layout.js";
import { loadDashboard } from "../auth.js";

// Responsables (alumnos, profesores y administrativos).
export function renderResponsiblesAdmin(responsibles) {
  responsiblesAdminList.innerHTML = "";
  syncResponsiblesFilters();
  const filteredResponsibles = filterResponsibles(responsibles);
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(filteredResponsibles.length / pageSize));
  if (state.responsiblesPage > totalPages) {
    state.responsiblesPage = totalPages;
  }
  const startIndex = (state.responsiblesPage - 1) * pageSize;
  const pagedResponsibles = filteredResponsibles.slice(startIndex, startIndex + pageSize);

  if (responsibles.length === 0) {
    responsiblesAdminList.append(createEmptyState("Todavía no hay responsables cargados."));
    updateResponsiblesPagination(0, 1);
    return;
  }

  if (filteredResponsibles.length === 0) {
    responsiblesAdminList.append(createEmptyState("No hay responsables que coincidan con los filtros aplicados."));
    updateResponsiblesPagination(0, 1);
    return;
  }

  pagedResponsibles.forEach((responsible) => {
    const fragment = responsibleAdminTemplate.content.cloneNode(true);
    const detail = responsible.type === "alumno"
      ? `${responsible.course || "-"} ${responsible.division || ""} · ${responsible.orientation || "Sin orientación"}`
      : responsible.type === "profesor"
        ? responsible.specialty || "Sin especialidad"
        : responsible.position || "Sin cargo";

    fragment.querySelector("strong").textContent = responsible.fullName;
    fragment.querySelector("p").textContent = `${capitalize(responsible.type)}${dniLabel(responsible)} · ${detail}`;
    fragment.querySelector("span").textContent = [responsible.email, responsible.phone].filter(Boolean).join(" · ");
    fragment.querySelector(".responsible-edit-button").addEventListener("click", () => startEditResponsible(responsible));
    fragment.querySelector(".responsible-delete-button").addEventListener("click", async () => {
      const confirmed = window.confirm(`¿Querés eliminar el responsable "${responsible.fullName}"?`);
      if (!confirmed) {
        return;
      }

      try {
        await api(`/api/responsibles/${responsible.id}`, { method: "DELETE" });
        if (state.editingResponsibleId === responsible.id) {
          resetResponsibleForm();
        }
        await loadDashboard();
        render();
        showToast("success", "Responsable eliminado", "El registro se eliminó correctamente.");
      } catch (error) {
        showToast("error", "No se pudo eliminar el responsable", error.message);
      }
    });
    responsiblesAdminList.append(fragment);
  });

  updateResponsiblesPagination(filteredResponsibles.length, totalPages);
}

export function updateResponsiblesPagination(totalItems, totalPages) {
  responsiblesPageInfo.textContent = `Página ${state.responsiblesPage} de ${totalPages} · ${totalItems} responsable(s)`;
  responsiblesPrevPage.disabled = state.responsiblesPage <= 1;
  responsiblesNextPage.disabled = state.responsiblesPage >= totalPages;
}

export function syncResponsiblesFilters() {
  responsiblesNameFilter.value = state.responsiblesFilters.name;
  responsiblesDniFilter.value = state.responsiblesFilters.dni;
  responsiblesTypeFilter.value = state.responsiblesFilters.type;
}

export function filterResponsibles(responsibles) {
  const { name, dni, type } = state.responsiblesFilters;

  return responsibles.filter((responsible) => {
    const matchesName = !name || String(responsible.fullName || "").toLowerCase().includes(name);
    const matchesDni = !dni || String(responsible.dni || "").toLowerCase().includes(dni);
    const matchesType = !type || responsible.type === type;

    return matchesName && matchesDni && matchesType;
  });
}

export async function handleResponsibleSubmit(event) {
  event.preventDefault();

  try {
    const formData = new FormData(responsibleForm);
    const isEditing = Boolean(state.editingResponsibleId);
    await api(isEditing ? `/api/responsibles/${state.editingResponsibleId}` : "/api/responsibles", {
      method: state.editingResponsibleId ? "PUT" : "POST",
      body: {
        type: formData.get("type"),
        fullName: formData.get("fullName"),
        dni: formData.get("dni"),
        admissionDate: formData.get("admissionDate"),
        course: formData.get("course"),
        division: formData.get("division"),
        orientation: formData.get("orientation"),
        specialty: formData.get("specialty"),
        position: formData.get("position"),
        address: formData.get("address"),
        email: formData.get("email"),
        phone: formData.get("phone"),
      },
    });

    resetResponsibleForm();
    await loadDashboard();
    render();
    showToast("success", isEditing ? "Responsable actualizado" : "Responsable guardado", isEditing ? "Los cambios se registraron correctamente." : "El responsable se cargó correctamente.");
  } catch (error) {
    showToast("error", "No se pudo guardar el responsable", error.message);
  }
}

export function startEditResponsible(responsible) {
  state.activeView = "master-data-responsibles";
  state.editingResponsibleId = responsible.id;
  responsibleForm.elements.id.value = responsible.id;
  responsibleForm.elements.type.value = responsible.type || "alumno";
  responsibleForm.elements.fullName.value = responsible.fullName || "";
  responsibleForm.elements.dni.value = responsible.dni || "";
  responsibleForm.elements.admissionDate.value = responsible.admissionDate || "";
  responsibleForm.elements.course.value = responsible.course || "";
  responsibleForm.elements.division.value = responsible.division || "";
  responsibleForm.elements.orientation.value = responsible.orientation || responsibleOrientationSelect.value || "";
  responsibleForm.elements.specialty.value = responsible.specialty || "";
  responsibleForm.elements.position.value = responsible.position || "";
  responsibleForm.elements.address.value = responsible.address || "";
  responsibleForm.elements.email.value = responsible.email || "";
  responsibleForm.elements.phone.value = responsible.phone || "";
  toggleResponsibleFields(responsible.type || "alumno");
  responsibleSubmitButton.textContent = "Actualizar responsable";
  responsibleCancelButton.hidden = false;
  renderViewState();
}

export function resetResponsibleForm() {
  state.editingResponsibleId = null;
  state.responsiblesPage = 1;
  responsibleForm.reset();
  responsibleForm.elements.id.value = "";
  responsibleForm.elements.type.value = "alumno";
  toggleResponsibleFields("alumno");
  responsibleSubmitButton.textContent = "Guardar responsable";
  responsibleCancelButton.hidden = true;
}

export function toggleResponsibleFields(type) {
  const noOrientationsLoaded = !state.dashboard?.orientations?.length;
  responsibleOrientationSelect.disabled = type !== "alumno" || noOrientationsLoaded;

  responsibleTypeFieldsets.forEach((group) => {
    const isActive = group.dataset.responsibleTypeFields === type;
    group.hidden = !isActive;

    group.querySelectorAll("input, select, textarea").forEach((field) => {
      const mustRequire =
        isActive &&
        (
          (type === "alumno" && ["admissionDate", "course", "division", "orientation"].includes(field.name)) ||
          (type === "profesor" && field.name === "specialty") ||
          (type === "administrativo" && field.name === "position")
        );
      field.required = mustRequire;
    });
  });
}
