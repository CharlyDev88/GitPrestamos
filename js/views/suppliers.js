import { state } from "../state.js";
import {
  supplierCancelButton,
  supplierForm,
  supplierSubmitButton,
  suppliersAdminList,
  suppliersNextPage,
  suppliersPageInfo,
  suppliersPrevPage,
  suppliersSearch,
} from "../dom.js";
import { api } from "../api.js";
import { formatDateTime } from "../utils/format.js";
import { createEmptyState, render, renderViewState, showToast, updateSimplePagination } from "../ui/layout.js";
import { loadDashboard } from "../auth.js";

// Proveedores (datos maestros): alta, edición, baja y búsqueda.

const PAGE_SIZE = 6;
const FIELDS = ["name", "cuit", "taxCondition", "address", "phone", "email", "contact", "notes"];

function filterSuppliers(suppliers) {
  const query = (suppliersSearch?.value || "").trim().toLowerCase();
  const digits = query.replace(/\D/g, "");
  if (!query) return suppliers;
  return suppliers.filter((supplier) => {
    const text = [supplier.name, supplier.contact, supplier.email, supplier.phone].join(" ").toLowerCase();
    return text.includes(query) || (digits && supplier.cuit.replace(/\D/g, "").includes(digits));
  });
}

function supplierItem(supplier) {
  const article = document.createElement("article");
  article.className = "activity-item material-admin-item";

  const content = document.createElement("div");
  content.className = "material-admin-item__content";
  const title = document.createElement("strong");
  title.textContent = supplier.name;
  const detail = document.createElement("p");
  detail.textContent = [`CUIT ${supplier.cuit}`, supplier.taxCondition, supplier.contact && `Contacto: ${supplier.contact}`].filter(Boolean).join(" · ");
  const contact = document.createElement("p");
  contact.textContent = [supplier.phone, supplier.email, supplier.address].filter(Boolean).join(" · ") || "Sin datos de contacto.";
  const created = document.createElement("span");
  created.textContent = `Alta: ${formatDateTime(supplier.createdAt)}${supplier.notes ? ` · ${supplier.notes}` : ""}`;
  content.append(title, detail, contact, created);

  const actions = document.createElement("div");
  actions.className = "material-admin-item__actions";
  const edit = document.createElement("button");
  edit.type = "button";
  edit.className = "button button--warning";
  edit.textContent = "Editar";
  edit.addEventListener("click", () => startEditSupplier(supplier));
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "button button--danger";
  remove.textContent = "Eliminar";
  remove.addEventListener("click", () => deleteSupplier(supplier));
  actions.append(edit, remove);

  article.append(content, actions);
  return article;
}

export function renderSuppliersAdmin(suppliers = state.dashboard?.suppliers || []) {
  if (!suppliersAdminList) return;
  const filtered = filterSuppliers(suppliers);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  state.suppliersPage = Math.min(Math.max(1, state.suppliersPage), totalPages);
  const start = (state.suppliersPage - 1) * PAGE_SIZE;

  if (!filtered.length) {
    suppliersAdminList.replaceChildren(
      createEmptyState(suppliers.length ? "Ningún proveedor coincide con la búsqueda." : "Todavía no hay proveedores cargados.")
    );
  } else {
    suppliersAdminList.replaceChildren(...filtered.slice(start, start + PAGE_SIZE).map(supplierItem));
  }
  updateSimplePagination(suppliersPrevPage, suppliersNextPage, suppliersPageInfo, filtered.length, totalPages, "proveedor(es)", state.suppliersPage);
}

export function changeSuppliersPage(delta) {
  state.suppliersPage += delta;
  renderSuppliersAdmin();
}

export async function handleSupplierSubmit(event) {
  event.preventDefault();
  const formData = new FormData(supplierForm);
  const isEditing = Boolean(state.editingSupplierId);
  try {
    await api(isEditing ? `/api/suppliers/${state.editingSupplierId}` : "/api/suppliers", {
      method: isEditing ? "PUT" : "POST",
      body: Object.fromEntries(FIELDS.map((field) => [field, formData.get(field)])),
    });
    resetSupplierForm();
    await loadDashboard();
    render();
    showToast("success", isEditing ? "Proveedor actualizado" : "Proveedor guardado", isEditing ? "Los cambios se registraron correctamente." : "El proveedor se cargó correctamente.");
  } catch (error) {
    showToast("error", "No se pudo guardar el proveedor", error.message);
  }
}

export function startEditSupplier(supplier) {
  state.activeView = "master-data-suppliers";
  state.editingSupplierId = supplier.id;
  FIELDS.forEach((field) => {
    if (supplierForm.elements[field]) supplierForm.elements[field].value = supplier[field] || "";
  });
  supplierForm.elements.id.value = supplier.id;
  supplierSubmitButton.textContent = "Actualizar proveedor";
  supplierCancelButton.hidden = false;
  renderViewState();
  supplierForm.elements.name.focus();
}

export function resetSupplierForm() {
  state.editingSupplierId = null;
  supplierForm.reset();
  supplierForm.elements.id.value = "";
  supplierSubmitButton.textContent = "Guardar proveedor";
  supplierCancelButton.hidden = true;
}

async function deleteSupplier(supplier) {
  if (!window.confirm(`¿Querés eliminar el proveedor "${supplier.name}"?`)) return;
  try {
    await api(`/api/suppliers/${supplier.id}`, { method: "DELETE" });
    if (state.editingSupplierId === supplier.id) resetSupplierForm();
    await loadDashboard();
    render();
    showToast("success", "Proveedor eliminado", "El registro se eliminó correctamente.");
  } catch (error) {
    showToast("error", "No se pudo eliminar el proveedor", error.message);
  }
}
