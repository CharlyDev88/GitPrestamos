import { state } from "../state.js";
import {
  appView,
  categoryBarTemplate,
  categoryChart,
  consumptionCostCenterSelect,
  consumptionFormPanel,
  consumptionItemSearch,
  consumptionItemSelect,
  consumptionResponsibleSearch,
  consumptionResponsibleSelect,
  dashboardGrid,
  healthPercent,
  healthRing,
  itemPanel,
  loanFormPanel,
  loanItemSearch,
  loanItemSelect,
  loanResponsibleSearch,
  loanResponsibleSelect,
  loginView,
  masterDataDescription,
  masterDataSections,
  masterDataSubmenu,
  masterDataTitle,
  masterDataToggle,
  navigationButtons,
  passwordView,
  purchaseCostCenterSelect,
  purchaseItemSearch,
  purchaseItemSelect,
  purchaseRequestForm,
  purchaseRequestPanel,
  sidebarInitials,
  sidebarName,
  sidebarUser,
  stockEntryCategorySelect,
  stockEntryForm,
  stockEntryItemSearch,
  stockEntryItemSelect,
  stockEntryLocationSelect,
  stockEntryPanel,
  stockEntryTypeSelect,
  submenuButtons,
  summaryAlerts,
  summaryLoans,
  summaryLowStock,
  summaryOverdue,
  summaryPurchaseRequests,
  summaryRole,
  summaryTools,
  toastContainer,
  usersPanel,
  viewPanels,
  welcomeText,
} from "../dom.js";
import { initialsForName } from "../utils/format.js";
import {
  renderCategorySelect,
  renderCostCenterSelect,
  renderItemSelect,
  renderLocationSelect,
  renderOrientationSelect,
  renderResponsibleSelect,
  renderStockItemSelect,
  syncLoanResponsibleContext,
} from "./selects.js";
import { MASTER_DATA_VIEWS, can, canView, firstMasterDataView, isAdminRole, roleLabel } from "../auth.js";
import { renderPermissions } from "../views/permissions.js";
import {
  renderInventory,
  renderInventoryFilters,
  renderLowStockFilters,
  renderLowStockItems,
} from "../views/inventory.js";
import { renderMaterialsAdmin, renderMaterialsFilters } from "../views/materials.js";
import {
  renderCategoriesAdmin,
  renderCostCentersAdmin,
  renderLocationsAdmin,
  renderOrientationsAdmin,
} from "../views/masterData.js";
import { renderResponsiblesAdmin } from "../views/responsibles.js";
import { renderUsersAdmin } from "../views/users.js";
import { renderLoanDraft, renderLoans, renderOverdueLoans, syncLoanQuantityStep, syncOverdueFilters, syncReturnsFilters } from "../views/loans.js";
import {
  renderPurchaseRequestOptions,
  renderSelectedPurchaseRequest,
  renderStockEntries,
} from "../views/stockEntries.js";
import {
  renderPurchaseLowStockOptions,
  renderPurchaseRequestDraft,
  renderPurchaseRequests,
} from "../views/purchaseRequests.js";
import { renderActivity } from "../views/activity.js";
import { renderReports } from "../views/reports.js";
import { renderActiveLoans } from "../views/activeLoans.js";
import { renderLoanChart } from "../views/loanChart.js";
import { renderSuppliersAdmin } from "../views/suppliers.js";
import { renderPurchaseConfirmation } from "../views/purchaseConfirmation.js";
import { renderPurchaseInvoice } from "../views/purchaseInvoice.js";

// Estructura general: render principal, navegación entre vistas, avisos y textos de la interfaz.
export function render() {
  loginView.hidden = true;
  passwordView.hidden = true;
  appView.hidden = false;
  sanitizeNewModuleTexts();

  const { user, summary, items, loans, activity } = state.dashboard;
  const alerts = summary.lowStock + summary.overdueLoans + (summary.pendingPurchaseRequests || 0);
  const healthValue = calculateHealth(summary);

  welcomeText.textContent = "";
  sidebarName.textContent = user.name;
  sidebarUser.textContent = `${user.username}@panol.local`;
  sidebarInitials.textContent = initialsForName(user.name);
  summaryTools.textContent = String(summary.totalItems);
  summaryLoans.textContent = String(summary.activeLoans);
  summaryAlerts.textContent = String(alerts);
  summaryLowStock.textContent = String(summary.lowStock);
  summaryOverdue.textContent = String(summary.overdueLoans);
  summaryPurchaseRequests.textContent = String(summary.pendingPurchaseRequests || 0);
  summaryRole.textContent = roleLabel(user.role);
  healthRing.style.setProperty("--ring-value", String(healthValue));
  healthRing.style.background = healthRingBackground(summary, healthValue);
  healthRing.setAttribute("aria-label", `Estado general del pañol: ${healthValue}% sin alertas. Stock bajo ${summary.lowStock}, vencidos ${summary.overdueLoans}, pedidos pendientes ${summary.pendingPurchaseRequests || 0}.`);
  healthPercent.textContent = `${healthValue}%`;
  const healthLegend = document.querySelector("#summary-health-legend");
  if (healthLegend) healthLegend.textContent = `${healthValue}%`;

  itemPanel.hidden = !canView("item-form");
  // Dentro de "Materiales": el formulario de alta solo si puede administrar materiales.
  itemPanel.querySelector(".materials-form-panel")?.toggleAttribute("hidden", !can("items.manage"));
  itemPanel.querySelector(".materials-workspace")?.classList.toggle("is-list-only", !can("items.manage"));
  usersPanel.hidden = !isAdminRole(user.role);
  loanFormPanel.hidden = !canView("loan-form");
  consumptionFormPanel.hidden = !canView("consumption-form");
  stockEntryPanel.hidden = !canView("stock-entry-form");
  purchaseRequestPanel.hidden = !canView("purchase-request-form");
  // Dentro de "Pedido de compra": el formulario solo si puede generar pedidos.
  purchaseRequestPanel.querySelector(".materials-form-panel")?.toggleAttribute("hidden", !can("purchases.requests"));
  purchaseRequestPanel.querySelector(".materials-workspace")?.classList.toggle("is-list-only", !can("purchases.requests"));

  const requestedView = normalizeView(state.activeView);
  if (!canView(requestedView) || (requestedView === "master-data-categories" && !canView("master-data-categories"))) {
    state.activeView = "dashboard";
  }

  renderCategoryChart(items);
  renderLoanChart(state.dashboard.loanStats);
  renderActiveLoans(loans);
  renderSuppliersAdmin(state.dashboard.suppliers || []);
  renderPurchaseConfirmation();
  renderPurchaseInvoice();
  renderPermissions();
  renderCategorySelect(state.dashboard.categories);
  renderLocationSelect(state.dashboard.locations);
  renderOrientationSelect(state.dashboard.orientations || []);
  renderStockItemSelect(loanItemSelect, items, loanItemSearch.value);
  syncLoanQuantityStep();
  renderLoanDraft();
  renderStockItemSelect(consumptionItemSelect, items, consumptionItemSearch?.value || "");
  renderItemSelect(stockEntryItemSelect, items, stockEntryItemSearch.value, { includeZeroStock: true });
  renderCategorySelect(state.dashboard.categories, stockEntryCategorySelect, "Seleccionar");
  renderLocationSelect(state.dashboard.locations, stockEntryLocationSelect, "Seleccionar");
  renderPurchaseRequestOptions(state.dashboard.purchaseRequests || []);
  renderSelectedPurchaseRequest();
  renderItemSelect(purchaseItemSelect, items, purchaseItemSearch.value, { includeZeroStock: true });
  renderResponsibleSelect(loanResponsibleSelect, state.dashboard.responsibles || [], loanResponsibleSearch.value);
  renderResponsibleSelect(consumptionResponsibleSelect, state.dashboard.responsibles || [], consumptionResponsibleSearch.value);
  syncLoanResponsibleContext();
  renderCostCenterSelect(state.dashboard.costCenters || [], purchaseCostCenterSelect, "Seleccionar");
  renderCostCenterSelect(state.dashboard.costCenters || [], consumptionCostCenterSelect, "Sin centro de costos");
  renderInventoryFilters(items);
  renderInventory(items);
  renderMaterialsFilters(items);
  renderLowStockFilters(items);
  renderLowStockItems(items);
  renderMaterialsAdmin(items);
  renderCategoriesAdmin(state.dashboard.categories);
  renderLocationsAdmin(state.dashboard.locations);
  renderCostCentersAdmin(state.dashboard.costCenters || []);
  renderOrientationsAdmin(state.dashboard.orientations || []);
  renderResponsiblesAdmin(state.dashboard.responsibles || []);
  renderUsersAdmin(state.dashboard.users || []);
  renderStockEntries(state.dashboard.stockEntries || []);
  renderPurchaseLowStockOptions(items);
  renderPurchaseRequestDraft(items);
  renderPurchaseRequests(state.dashboard.purchaseRequests || []);
  syncReturnsFilters();
  renderLoans(loans);
  syncOverdueFilters();
  renderOverdueLoans(loans);
  renderActivity(activity);
  renderReports();
  renderViewState();
}

export function setActiveView(view) {
  state.activeView = normalizeView(view);
  renderViewState();
}

export function renderViewState() {
  const user = state.dashboard?.user || state.user;
  const normalizedView = normalizeView(state.activeView);
  const singleView = normalizedView !== "dashboard";
  const activeMasterSection =
    normalizedView === "master-data-locations"
      ? "locations"
      : normalizedView === "master-data-cost-centers"
        ? "cost-centers"
      : normalizedView === "master-data-orientations"
        ? "orientations"
      : normalizedView === "master-data-responsibles"
        ? "responsibles"
      : normalizedView === "master-data-suppliers"
        ? "suppliers"
        : "categories";

  viewPanels.forEach((panel) => {
    const matches = panel.dataset.viewPanel === mapPanelView(normalizedView);
    const blocked = panel.dataset.viewPanel === "master-data" ? !canView(normalizedView) : !canView(panel.dataset.viewPanel);
    panel.classList.toggle("is-visible", matches && !blocked);
  });

  navigationButtons.forEach((button) => {
    button.hidden = button.dataset.toggleSubmenu === "master-data" ? !firstMasterDataView() : !canView(button.dataset.view);
    button.classList.toggle("is-active", button.dataset.view === normalizedView);
  });

  submenuButtons.forEach((button) => {
    button.hidden = !canView(button.dataset.view);
    button.classList.toggle("is-active", button.dataset.view === normalizedView);
  });

  const isMasterView = ["master-data-categories", "master-data-locations", "master-data-cost-centers", "master-data-orientations", "master-data-responsibles", "master-data-suppliers"].includes(normalizedView);
  masterDataToggle?.classList.toggle("is-active", isMasterView);
  masterDataToggle?.classList.toggle("is-expanded", state.masterDataMenuOpen);
  masterDataSubmenu?.classList.toggle("is-open", state.masterDataMenuOpen);
  masterDataSections.forEach((section) => {
    section.hidden = !isMasterView || section.dataset.masterSection !== activeMasterSection;
  });

  if (masterDataTitle && masterDataDescription) {
    masterDataTitle.textContent = isMasterView
      ? (
        activeMasterSection === "categories"
          ? "Datos Maestros · Categorías"
          : activeMasterSection === "locations"
            ? "Datos Maestros · Ubicaciones"
            : "Datos Maestros · Responsables"
      )
      : "Datos Maestros";
    masterDataDescription.textContent =
      activeMasterSection === "categories"
        ? "Definí y administrá las categorías disponibles para materiales."
        : activeMasterSection === "locations"
          ? "Definí y administrá las ubicaciones disponibles para materiales."
          : "Definí y administrá alumnos y profesores responsables.";
  }

  if (masterDataTitle && masterDataDescription && activeMasterSection === "orientations") {
    masterDataTitle.textContent = "Datos Maestros · Orientaciones";
    masterDataDescription.textContent = "Definí y administrá las orientaciones disponibles para alumnos.";
  }

  if (masterDataTitle && masterDataDescription && activeMasterSection === "suppliers") {
    masterDataTitle.textContent = "Datos Maestros · Proveedores";
    masterDataDescription.textContent = "Definí y administrá los proveedores que se eligen al confirmar pedidos de compra.";
  }

  if (masterDataTitle && masterDataDescription && activeMasterSection === "cost-centers") {
    masterDataTitle.textContent = "Datos Maestros · Centro de Costos";
    masterDataDescription.textContent = "Definí y administrá los centros de costos disponibles para pedidos y compras.";
  }

  dashboardGrid.classList.toggle("is-single-view", singleView);
}

export function normalizeView(view) {
  return view === "master-data" ? firstMasterDataView() || "dashboard" : view;
}

export function mapPanelView(view) {
  return view.startsWith("master-data") ? "master-data" : view;
}

export function toggleMasterDataSubmenu() {
  state.masterDataMenuOpen = !state.masterDataMenuOpen;

  if (state.masterDataMenuOpen && !MASTER_DATA_VIEWS.includes(state.activeView) && firstMasterDataView()) {
    setActiveView(firstMasterDataView());
    return;
  }

  renderViewState();
}

export function syncSelectOptions(select, values, defaultLabel) {
  const currentValue = select.value;
  select.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = defaultLabel;
  select.append(defaultOption);

  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });

  select.value = values.includes(currentValue) ? currentValue : "";
}

export function renderCategoryChart(items) {
  categoryChart.innerHTML = "";

  if (items.length === 0) {
    categoryChart.append(createEmptyState("Sin datos suficientes para el resumen visual."));
    return;
  }

  const grouped = items.reduce((accumulator, item) => {
    accumulator[item.category] = (accumulator[item.category] || 0) + item.stock;
    return accumulator;
  }, {});

  const entries = Object.entries(grouped).slice(0, 4);
  const maxValue = Math.max(...entries.map(([, value]) => value), 1);

  entries.forEach(([label, value]) => {
    const fragment = categoryBarTemplate.content.cloneNode(true);
    const bar = fragment.querySelector(".chart-bar span");
    fragment.querySelector(".chart-bar-card__value").textContent = `${value} unidades`;
    fragment.querySelector("strong").textContent = label;
    bar.style.height = `${Math.max((value / maxValue) * 100, 12)}%`;
    categoryChart.append(fragment);
  });
}

export function showToast(type, title, message) {
  if (!toastContainer) {
    return;
  }

  const toast = document.createElement("article");
  toast.className = `toast toast--${type}`;

  const heading = document.createElement("strong");
  heading.textContent = title;
  const body = document.createElement("span");
  body.textContent = message;

  toast.append(heading, body);
  toastContainer.append(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 3600);
}

export function sanitizeNewModuleTexts() {
  setPanelHeaderText("#stock-entry-panel", "Ingresos al inventario", "Registrá ingresos por donación o compra para materiales existentes o nuevos.");
  setPanelHeaderText("#purchase-request-panel", "Pedido de compra", "Generá pedidos con materiales en alerta de stock y materiales adicionales a elección.");

  const stockEntryTypeOptions = stockEntryTypeSelect?.querySelectorAll("option");
  if (stockEntryTypeOptions?.[0]) {
    stockEntryTypeOptions[0].textContent = "Donación";
  }
  if (stockEntryTypeOptions?.[1]) {
    stockEntryTypeOptions[1].textContent = "Compra";
  }

  setLabelText(stockEntryForm, "entryType", "Tipo de ingreso");
  setLabelText(stockEntryForm, "targetType", "Aplicar sobre");
  setLabelText(stockEntryForm, "itemId", "Material");
  setLabelText(stockEntryForm, "name", "Nombre");
  setLabelText(stockEntryForm, "category", "Categoría");
  setLabelText(stockEntryForm, "code", "Código interno");
  setLabelText(stockEntryForm, "subcode", "Subcódigo");
  setLabelText(stockEntryForm, "location", "Ubicación");
  setLabelText(stockEntryForm, "stockMinimum", "Stock mínimo");
  setLabelText(stockEntryForm, "amount", "Costo Unitario");
  setLabelText(stockEntryForm, "estimatedUnitCost", "Costo unitario estimado");
  setLabelText(stockEntryForm, "invoice", "Factura");
  setLabelText(stockEntryForm, "quantity", "Cantidad ingresada");
  setLabelText(stockEntryForm, "observation", "Observación del movimiento");
  setAuxLabelText("#stock-entry-item-search", "Buscar material");
  setPlaceholder("#stock-entry-item-search", "Nombre, código o subcódigo");
  setPlaceholder("[name='observation']", "Detalle de la donación o de la compra", stockEntryForm);

  setLabelText(purchaseRequestForm, "observation", "Observación");
  setAuxLabelText("#purchase-item-search", "Buscar material");
  setAuxLabelText("#purchase-item-select", "Material");
  setAuxLabelText("#purchase-item-quantity", "Cantidad solicitada");
  setPlaceholder("#purchase-item-search", "Nombre, código o subcódigo");

  setText("#stock-entry-panel .materials-list-header h3", "Últimos ingresos");
  setText("#stock-entry-panel .materials-list-header p", "Movimiento de stock generado por compras o donaciones.", 1);
  setText("#purchase-request-panel .materials-list-header h3", "Materiales con stock bajo", 0);
  setText("#purchase-request-panel .materials-list-header p", "Marcá los materiales sugeridos y ajustá la cantidad si lo necesitás.", 0);
  setText("#purchase-request-panel .materials-list-header h3", "Agregar material a elección", 1);
  setText("#purchase-request-panel .materials-list-header p", "Sumá materiales adicionales al pedido de compra.", 1);
  setText("#purchase-request-panel .materials-list-header h3", "Detalle del pedido", 2);
  setText("#purchase-request-panel .materials-list-header p", "Lista final de materiales incluidos antes de generar el pedido.", 2);
  setText("#purchase-request-panel .materials-list-panel .materials-list-header h3", "Pedidos generados");
  setText("#purchase-request-panel .materials-list-panel .materials-list-header p", "Historial reciente de pedidos emitidos desde el sistema.");
}

export function setPanelHeaderText(panelSelector, title, description) {
  const panel = document.querySelector(panelSelector);
  if (!panel) {
    return;
  }

  const titleNode = panel.querySelector(".panel__header h2");
  const descriptionNode = panel.querySelector(".panel__header p");
  if (titleNode) {
    titleNode.textContent = title;
  }
  if (descriptionNode) {
    descriptionNode.textContent = description;
  }
}

export function setLabelText(form, fieldName, text) {
  if (!form) {
    return;
  }

  const field = form.elements[fieldName];
  const label = field?.closest("label");
  if (!label) {
    return;
  }

  const textNode = Array.from(label.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
  if (textNode) {
    textNode.nodeValue = `${text}\n`;
  }
}

export function setAuxLabelText(selector, text) {
  const field = document.querySelector(selector);
  const label = field?.closest("label");
  if (!label) {
    return;
  }

  const textNode = Array.from(label.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
  if (textNode) {
    textNode.nodeValue = `${text}\n`;
  }
}

export function setPlaceholder(selector, text, scope = document) {
  const field = scope.querySelector(selector);
  if (field) {
    field.placeholder = text;
  }
}

export function setText(selector, text, index = 0) {
  const nodes = document.querySelectorAll(selector);
  if (nodes[index]) {
    nodes[index].textContent = text;
  }
}

export function updateSimplePagination(prevButton, nextButton, infoNode, totalItems, totalPages, label, currentPage = 1) {
  prevButton.disabled = currentPage <= 1;
  nextButton.disabled = currentPage >= totalPages;
  infoNode.textContent = `Página ${currentPage} de ${totalPages} · ${totalItems} ${label}`;
}

export function createEmptyState(message) {
  const element = document.createElement("div");
  element.className = "empty-state";
  element.textContent = message;
  return element;
}

// Anillo: la parte "sin alertas" y el resto repartido entre stock bajo, vencidos y pedidos pendientes
// (en proporción a cuántos hay de cada uno). Los colores coinciden con la leyenda de al lado.
const RING_COLORS = { ok: "#0b3f86", low: "#d4b45c", overdue: "#c0392b", pending: "#7ca5d8", empty: "#e3eaf3" };
export function healthRingBackground(summary, healthValue) {
  const alerts = [
    [RING_COLORS.low, Number(summary.lowStock) || 0],
    [RING_COLORS.overdue, Number(summary.overdueLoans) || 0],
    [RING_COLORS.pending, Number(summary.pendingPurchaseRequests) || 0],
  ];
  const totalAlerts = alerts.reduce((sum, [, count]) => sum + count, 0);
  const stops = [`${RING_COLORS.ok} 0 ${healthValue}%`];
  let position = healthValue;
  const rest = 100 - healthValue;
  if (!totalAlerts) {
    stops.push(`${RING_COLORS.empty} ${position}% 100%`);
  } else {
    alerts.forEach(([color, count]) => {
      if (!count) return;
      const next = position + (rest * count) / totalAlerts;
      stops.push(`${color} ${position}% ${next}%`);
      position = next;
    });
  }
  return `conic-gradient(${stops.join(", ")})`;
}

export function calculateHealth(summary) {
  const totalIncidents = summary.lowStock + summary.overdueLoans + (summary.pendingPurchaseRequests || 0);
  const totalBase = Math.max(summary.totalItems + summary.activeLoans, 1);
  const health = Math.round(Math.max(25, 100 - (totalIncidents / totalBase) * 100));
  return Math.min(100, health);
}
