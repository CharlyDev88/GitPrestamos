

// Formatos y utilidades de texto.
export function dniLabel(responsible) {
  return responsible?.dni ? ` · DNI ${responsible.dni}` : "";
}

export function formatDate(value) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

export function formatDateTime(value) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export function formatCurrencyNumber(value) {
  return new Intl.NumberFormat("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(value || 0));
}

export function slugify(value) {
  return String(value || "informe")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function initialsForName(value) {
  return value
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((chunk) => chunk[0].toUpperCase())
    .join("");
}

export function labelForActivity(type) {
  const labels = {
    seed: "Sistema",
    item_created: "Nuevo elemento",
    item_updated: "Material actualizado",
    item_deleted: "Material eliminado",
    category_created: "Categoría creada",
    category_updated: "Categoría actualizada",
    category_deleted: "Categoría eliminada",
    orientation_created: "Orientación creada",
    orientation_updated: "Orientación actualizada",
    orientation_deleted: "Orientación eliminada",
    cost_center_created: "Centro de costos creado",
    cost_center_updated: "Centro de costos actualizado",
    cost_center_deleted: "Centro de costos eliminado",
    responsible_created: "Responsable creado",
    responsible_updated: "Responsable actualizado",
    responsible_deleted: "Responsable eliminado",
    location_created: "Ubicación creada",
    location_updated: "Ubicación actualizada",
    location_deleted: "Ubicación eliminada",
    loan_created: "Préstamo registrado",
    consumption_created: "Consumo registrado",
    stock_entry_created: "Ingreso al inventario",
    purchase_request_created: "Pedido de compra",
    loan_returned: "Devolución",
    loan_partial_returned: "Devolución parcial",
  };

  return labels[type] || "Actividad";
}
