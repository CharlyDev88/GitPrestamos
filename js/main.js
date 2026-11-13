import { state } from "./state.js";
import {
  activityDateFrom,
  activityDateTo,
  activityResponsibleFilter,
  activityTypeFilter,
  alertViewButtons,
  appView,
  categoriesNextPage,
  categoriesPrevPage,
  categoryCancelButton,
  categoryForm,
  changePasswordButton,
  consumptionForm,
  consumptionItemSearch,
  consumptionItemSelect,
  consumptionResponsibleSearch,
  consumptionResponsibleSelect,
  costCenterCancelButton,
  costCenterForm,
  costCentersNextPage,
  costCentersPrevPage,
  inventoryCategoryFilter,
  inventoryLocationFilter,
  inventorySearch,
  itemCancelButton,
  itemForm,
  loanForm,
  loanItemSearch,
  loanItemSelect,
  loanResponsibleSearch,
  loanResponsibleSelect,
  locationCancelButton,
  locationForm,
  locationsNextPage,
  locationsPrevPage,
  loginForm,
  logoutButton,
  lowStockCategoryFilter,
  lowStockLocationFilter,
  lowStockSearch,
  materialsCategoryFilter,
  materialsLocationFilter,
  materialsNextPage,
  materialsPrevPage,
  materialsSearch,
  navigationButtons,
  orientationCancelButton,
  orientationForm,
  orientationsNextPage,
  orientationsPrevPage,
  overdueBorrowerFilter,
  overdueDateFilter,
  overdueMaterialFilter,
  overdueNextPage,
  overduePrevPage,
  passwordCancelButton,
  passwordForm,
  passwordView,
  purchaseAddItemButton,
  purchaseItemSearch,
  purchaseItemSelect,
  purchaseRequestForm,
  purchaseRequestsNextPage,
  purchaseRequestsPrevPage,
  purchaseRequestsFilter,
  reportConsumptionsCostCenter,
  reportConsumptionsDateFrom,
  reportConsumptionsDateTo,
  reportLowStockCategory,
  reportLowStockLocation,
  reportLowStockSearch,
  reportMaterialsCategory,
  reportMaterialsLocation,
  reportMaterialsSearch,
  reportOverdueDate,
  reportOverdueMaterial,
  reportOverdueResponsible,
  reportReturnsDate,
  reportReturnsMaterial,
  reportReturnsResponsible,
  reportsExportCsvButton,
  reportsExportPdfButton,
  reportStudentSearch,
  reportTypeSelect,
  responsibleCancelButton,
  responsibleForm,
  responsiblesDniFilter,
  responsiblesNameFilter,
  responsiblesNextPage,
  responsiblesPrevPage,
  responsiblesTypeFilter,
  responsibleTypeSelect,
  returnsBorrowerFilter,
  returnsDateFilter,
  returnsMaterialFilter,
  returnsNextPage,
  returnsPrevPage,
  stockEntriesNextPage,
  stockEntriesPrevPage,
  stockEntryForm,
  stockEntryItemSearch,
  stockEntryItemSelect,
  stockEntryPurchaseRequestSelect,
  stockEntryTargetType,
  stockEntryTypeSelect,
  submenuButtons,
  userCancelButton,
  userForm,
  usersNextPage,
  usersPrevPage,
  usersRoleFilter,
  usersSearch,
} from "./dom.js";
import { setActiveView, toggleMasterDataSubmenu } from "./ui/layout.js";
import {
  renderItemSelect,
  renderResponsibleSelect,
  renderStockItemSelect,
  syncLoanResponsibleContext,
} from "./ui/selects.js";
import { bootstrap, handleLogin, handleLogout, handlePasswordChange, renderPasswordChange } from "./auth.js";
import { renderInventory, renderLowStockItems } from "./views/inventory.js";
import { handleItemSubmit, renderMaterialsAdmin, resetItemForm } from "./views/materials.js";
import {
  handleCategorySubmit,
  handleCostCenterSubmit,
  handleLocationSubmit,
  handleOrientationSubmit,
  renderCategoriesAdmin,
  renderCostCentersAdmin,
  renderLocationsAdmin,
  renderOrientationsAdmin,
  resetCategoryForm,
  resetCostCenterForm,
  resetLocationForm,
  resetOrientationForm,
} from "./views/masterData.js";
import {
  handleResponsibleSubmit,
  renderResponsiblesAdmin,
  resetResponsibleForm,
  toggleResponsibleFields,
} from "./views/responsibles.js";
import { handleUserSubmit, renderUsersAdmin, resetUserForm } from "./views/users.js";
import { handleLoanSubmit, renderLoans, renderOverdueLoans } from "./views/loans.js";
import { handleConsumptionSubmit } from "./views/consumptions.js";
import {
  handleStockEntrySubmit,
  renderSelectedPurchaseRequest,
  renderStockEntries,
  syncStockEntryMode,
  toggleStockEntryFields,
} from "./views/stockEntries.js";
import {
  handleAddPurchaseDraftItem,
  handlePurchaseRequestSubmit,
  renderPurchaseRequests,
} from "./views/purchaseRequests.js";
import { renderActivity } from "./views/activity.js";
import { exportCurrentReportCsv, exportCurrentReportPdf, renderReports } from "./views/reports.js";
import { activeLoansSearch, activeLoansSort, activeLoansStatus, loanStatsToggle } from "./dom.js";
import { renderActiveLoans } from "./views/activeLoans.js";
import { toggleLoanStatsTable } from "./views/loanChart.js";
import {
  confirmationForm,
  invoiceAddItemButton,
  invoiceForm,
  invoiceItemSearch,
  invoiceTotal,
  invoiceWithholdings,
  confirmationInvoiceTotal,
  confirmationWithholdings,
  supplierCancelButton,
  supplierForm,
  suppliersNextPage,
  suppliersPrevPage,
  suppliersSearch,
} from "./dom.js";
import { changeSuppliersPage, handleSupplierSubmit, renderSuppliersAdmin, resetSupplierForm } from "./views/suppliers.js";
import { handleConfirmationSubmit, recalculate } from "./views/purchaseConfirmation.js";
import { initPermissions } from "./views/permissions.js";
import { initInvoiceFilters } from "./views/purchaseInvoice.js";
import { handleAddInvoiceItem, handleInvoiceSubmit, handleInvoiceTotalInput, recalculateInvoice, renderInvoiceItemSelect } from "./views/purchaseInvoice.js";

// Conecta los controles de la página con sus acciones y arranca la aplicación.
loginForm.addEventListener("submit", handleLogin);
logoutButton.addEventListener("click", handleLogout);
passwordForm.addEventListener("submit", handlePasswordChange);
passwordCancelButton.addEventListener("click", () => {
  if (state.user?.mustChangePassword) {
    handleLogout();
    return;
  }
  passwordView.hidden = true;
  appView.hidden = false;
});
changePasswordButton.addEventListener("click", () => renderPasswordChange(false));
itemForm.addEventListener("submit", handleItemSubmit);
loanForm.addEventListener("submit", handleLoanSubmit);
consumptionForm.addEventListener("submit", handleConsumptionSubmit);
stockEntryForm.addEventListener("submit", handleStockEntrySubmit);
purchaseRequestForm.addEventListener("submit", handlePurchaseRequestSubmit);
locationForm.addEventListener("submit", handleLocationSubmit);
categoryForm.addEventListener("submit", handleCategorySubmit);
costCenterForm.addEventListener("submit", handleCostCenterSubmit);
orientationForm.addEventListener("submit", handleOrientationSubmit);
responsibleForm.addEventListener("submit", handleResponsibleSubmit);
userForm.addEventListener("submit", handleUserSubmit);
itemCancelButton.addEventListener("click", resetItemForm);
categoryCancelButton.addEventListener("click", resetCategoryForm);
locationCancelButton.addEventListener("click", resetLocationForm);
costCenterCancelButton.addEventListener("click", resetCostCenterForm);
orientationCancelButton.addEventListener("click", resetOrientationForm);
responsibleCancelButton.addEventListener("click", resetResponsibleForm);
userCancelButton.addEventListener("click", resetUserForm);
orientationsPrevPage.addEventListener("click", () => {
  if (state.orientationsPage > 1) {
    state.orientationsPage -= 1;
    renderOrientationsAdmin(state.dashboard?.orientations || []);
  }
});
orientationsNextPage.addEventListener("click", () => {
  state.orientationsPage += 1;
  renderOrientationsAdmin(state.dashboard?.orientations || []);
});
categoriesPrevPage.addEventListener("click", () => {
  if (state.categoriesPage > 1) {
    state.categoriesPage -= 1;
    renderCategoriesAdmin(state.dashboard?.categories || []);
  }
});
categoriesNextPage.addEventListener("click", () => {
  state.categoriesPage += 1;
  renderCategoriesAdmin(state.dashboard?.categories || []);
});
locationsPrevPage.addEventListener("click", () => {
  if (state.locationsPage > 1) {
    state.locationsPage -= 1;
    renderLocationsAdmin(state.dashboard?.locations || []);
  }
});
locationsNextPage.addEventListener("click", () => {
  state.locationsPage += 1;
  renderLocationsAdmin(state.dashboard?.locations || []);
});
costCentersPrevPage.addEventListener("click", () => {
  if (state.costCentersPage > 1) {
    state.costCentersPage -= 1;
    renderCostCentersAdmin(state.dashboard?.costCenters || []);
  }
});
costCentersNextPage.addEventListener("click", () => {
  state.costCentersPage += 1;
  renderCostCentersAdmin(state.dashboard?.costCenters || []);
});
responsiblesPrevPage.addEventListener("click", () => {
  if (state.responsiblesPage > 1) {
    state.responsiblesPage -= 1;
    renderResponsiblesAdmin(state.dashboard?.responsibles || []);
  }
});
responsiblesNextPage.addEventListener("click", () => {
  state.responsiblesPage += 1;
  renderResponsiblesAdmin(state.dashboard?.responsibles || []);
});
usersPrevPage.addEventListener("click", () => {
  if (state.usersPage > 1) {
    state.usersPage -= 1;
    renderUsersAdmin(state.dashboard?.users || []);
  }
});
usersNextPage.addEventListener("click", () => {
  state.usersPage += 1;
  renderUsersAdmin(state.dashboard?.users || []);
});
usersSearch.addEventListener("input", () => {
  state.usersFilters.search = usersSearch.value.trim().toLowerCase();
  state.usersPage = 1;
  renderUsersAdmin(state.dashboard?.users || []);
});
usersRoleFilter.addEventListener("change", () => {
  state.usersFilters.role = usersRoleFilter.value;
  state.usersPage = 1;
  renderUsersAdmin(state.dashboard?.users || []);
});
responsiblesNameFilter.addEventListener("input", () => {
  state.responsiblesFilters.name = responsiblesNameFilter.value.trim().toLowerCase();
  state.responsiblesPage = 1;
  renderResponsiblesAdmin(state.dashboard?.responsibles || []);
});
responsiblesDniFilter.addEventListener("input", () => {
  state.responsiblesFilters.dni = responsiblesDniFilter.value.trim().toLowerCase();
  state.responsiblesPage = 1;
  renderResponsiblesAdmin(state.dashboard?.responsibles || []);
});
responsiblesTypeFilter.addEventListener("change", () => {
  state.responsiblesFilters.type = responsiblesTypeFilter.value;
  state.responsiblesPage = 1;
  renderResponsiblesAdmin(state.dashboard?.responsibles || []);
});
loanItemSearch.addEventListener("input", () => {
  renderStockItemSelect(loanItemSelect, state.dashboard?.items || [], loanItemSearch.value);
});
consumptionItemSearch.addEventListener("input", () => {
  renderStockItemSelect(consumptionItemSelect, state.dashboard?.items || [], consumptionItemSearch.value);
});
stockEntryItemSearch.addEventListener("input", () => {
  renderItemSelect(stockEntryItemSelect, state.dashboard?.items || [], stockEntryItemSearch.value, { includeZeroStock: true });
});
stockEntryTypeSelect.addEventListener("change", () => {
  syncStockEntryMode();
});
stockEntryTargetType.addEventListener("change", () => {
  syncStockEntryMode();
});
stockEntryPurchaseRequestSelect?.addEventListener("change", () => {
  state.selectedPurchaseRequestId = stockEntryPurchaseRequestSelect.value;
  delete stockEntryForm.elements.invoice.dataset.touched;
  renderSelectedPurchaseRequest();
});
loanResponsibleSelect.addEventListener("change", syncLoanResponsibleContext);
responsibleTypeSelect.addEventListener("change", () => toggleResponsibleFields(responsibleTypeSelect.value));
toggleResponsibleFields("alumno");
toggleStockEntryFields("existing");
materialsSearch.addEventListener("input", () => {
  state.materialsFilters.search = materialsSearch.value.trim().toLowerCase();
  state.materialsPage = 1;
  renderMaterialsAdmin(state.dashboard?.items || []);
});
materialsCategoryFilter.addEventListener("change", () => {
  state.materialsFilters.category = materialsCategoryFilter.value;
  state.materialsPage = 1;
  renderMaterialsAdmin(state.dashboard?.items || []);
});
materialsLocationFilter.addEventListener("change", () => {
  state.materialsFilters.location = materialsLocationFilter.value;
  state.materialsPage = 1;
  renderMaterialsAdmin(state.dashboard?.items || []);
});
materialsPrevPage.addEventListener("click", () => {
  if (state.materialsPage > 1) {
    state.materialsPage -= 1;
    renderMaterialsAdmin(state.dashboard?.items || []);
  }
});
materialsNextPage.addEventListener("click", () => {
  state.materialsPage += 1;
  renderMaterialsAdmin(state.dashboard?.items || []);
});
navigationButtons.forEach((button) => {
  if (button.dataset.view) {
    button.addEventListener("click", () => setActiveView(button.dataset.view));
    return;
  }

  if (button.dataset.toggleSubmenu === "master-data") {
    button.addEventListener("click", () => toggleMasterDataSubmenu());
  }
});
submenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.masterDataMenuOpen = true;
    setActiveView(button.dataset.view);
  });
});
inventorySearch.addEventListener("input", () => {
  state.inventoryFilters.search = inventorySearch.value.trim().toLowerCase();
  renderInventory(state.dashboard?.items || []);
});
inventoryCategoryFilter.addEventListener("change", () => {
  state.inventoryFilters.category = inventoryCategoryFilter.value;
  renderInventory(state.dashboard?.items || []);
});
inventoryLocationFilter.addEventListener("change", () => {
  state.inventoryFilters.location = inventoryLocationFilter.value;
  renderInventory(state.dashboard?.items || []);
});
returnsDateFilter.addEventListener("input", () => {
  state.returnsFilters.date = returnsDateFilter.value;
  state.returnsPage = 1;
  renderLoans(state.dashboard?.loans || []);
});
returnsMaterialFilter.addEventListener("input", () => {
  state.returnsFilters.material = returnsMaterialFilter.value.trim().toLowerCase();
  state.returnsPage = 1;
  renderLoans(state.dashboard?.loans || []);
});
returnsBorrowerFilter.addEventListener("input", () => {
  state.returnsFilters.borrower = returnsBorrowerFilter.value.trim().toLowerCase();
  state.returnsPage = 1;
  renderLoans(state.dashboard?.loans || []);
});
returnsPrevPage.addEventListener("click", () => {
  if (state.returnsPage > 1) {
    state.returnsPage -= 1;
    renderLoans(state.dashboard?.loans || []);
  }
});
returnsNextPage.addEventListener("click", () => {
  state.returnsPage += 1;
  renderLoans(state.dashboard?.loans || []);
});
overdueDateFilter.addEventListener("input", () => {
  state.overdueFilters.date = overdueDateFilter.value;
  state.overduePage = 1;
  renderOverdueLoans(state.dashboard?.loans || []);
});
overdueMaterialFilter.addEventListener("input", () => {
  state.overdueFilters.material = overdueMaterialFilter.value.trim().toLowerCase();
  state.overduePage = 1;
  renderOverdueLoans(state.dashboard?.loans || []);
});
overdueBorrowerFilter.addEventListener("input", () => {
  state.overdueFilters.borrower = overdueBorrowerFilter.value.trim().toLowerCase();
  state.overduePage = 1;
  renderOverdueLoans(state.dashboard?.loans || []);
});
overduePrevPage.addEventListener("click", () => {
  if (state.overduePage > 1) {
    state.overduePage -= 1;
    renderOverdueLoans(state.dashboard?.loans || []);
  }
});
overdueNextPage.addEventListener("click", () => {
  state.overduePage += 1;
  renderOverdueLoans(state.dashboard?.loans || []);
});
lowStockSearch.addEventListener("input", () => {
  state.lowStockFilters.search = lowStockSearch.value.trim().toLowerCase();
  renderLowStockItems(state.dashboard?.items || []);
});
lowStockCategoryFilter.addEventListener("change", () => {
  state.lowStockFilters.category = lowStockCategoryFilter.value;
  renderLowStockItems(state.dashboard?.items || []);
});
lowStockLocationFilter.addEventListener("change", () => {
  state.lowStockFilters.location = lowStockLocationFilter.value;
  renderLowStockItems(state.dashboard?.items || []);
});
stockEntriesPrevPage.addEventListener("click", () => {
  if (state.stockEntriesPage > 1) {
    state.stockEntriesPage -= 1;
    renderStockEntries(state.dashboard?.stockEntries || []);
  }
});
stockEntriesNextPage.addEventListener("click", () => {
  state.stockEntriesPage += 1;
  renderStockEntries(state.dashboard?.stockEntries || []);
});
purchaseItemSearch.addEventListener("input", () => {
  renderItemSelect(purchaseItemSelect, state.dashboard?.items || [], purchaseItemSearch.value, { includeZeroStock: true });
});
purchaseAddItemButton.addEventListener("click", handleAddPurchaseDraftItem);
purchaseRequestsFilter?.addEventListener("change", () => {
  state.purchaseRequestsFilter = purchaseRequestsFilter.value;
  state.purchaseRequestsPage = 1;
  renderPurchaseRequests(state.dashboard?.purchaseRequests || []);
});

purchaseRequestsPrevPage.addEventListener("click", () => {
  if (state.purchaseRequestsPage > 1) {
    state.purchaseRequestsPage -= 1;
    renderPurchaseRequests(state.dashboard?.purchaseRequests || []);
  }
});
purchaseRequestsNextPage.addEventListener("click", () => {
  state.purchaseRequestsPage += 1;
  renderPurchaseRequests(state.dashboard?.purchaseRequests || []);
});
alertViewButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveView(button.dataset.alertView));
});
activityDateFrom.addEventListener("input", () => {
  state.activityFilters.dateFrom = activityDateFrom.value;
  renderActivity(state.dashboard?.activity || []);
});
activityDateTo.addEventListener("input", () => {
  state.activityFilters.dateTo = activityDateTo.value;
  renderActivity(state.dashboard?.activity || []);
});
activityTypeFilter.addEventListener("change", () => {
  state.activityFilters.type = activityTypeFilter.value;
  renderActivity(state.dashboard?.activity || []);
});
activityResponsibleFilter.addEventListener("input", () => {
  state.activityFilters.responsible = activityResponsibleFilter.value.trim().toLowerCase();
  renderActivity(state.dashboard?.activity || []);
});
loanResponsibleSearch.addEventListener("input", () => {
  renderResponsibleSelect(loanResponsibleSelect, state.dashboard?.responsibles || [], loanResponsibleSearch.value);
});
consumptionResponsibleSearch.addEventListener("input", () => {
  renderResponsibleSelect(consumptionResponsibleSelect, state.dashboard?.responsibles || [], consumptionResponsibleSearch.value);
});
reportTypeSelect?.addEventListener("change", () => {
  state.reports.type = reportTypeSelect.value;
  renderReports();
});
reportMaterialsSearch?.addEventListener("input", () => {
  state.reports.materials.search = reportMaterialsSearch.value.trim().toLowerCase();
  renderReports();
});
reportMaterialsCategory?.addEventListener("change", () => {
  state.reports.materials.category = reportMaterialsCategory.value;
  renderReports();
});
reportMaterialsLocation?.addEventListener("change", () => {
  state.reports.materials.location = reportMaterialsLocation.value;
  renderReports();
});
reportReturnsDate?.addEventListener("input", () => {
  state.reports.pendingReturns.date = reportReturnsDate.value;
  renderReports();
});
reportReturnsMaterial?.addEventListener("input", () => {
  state.reports.pendingReturns.material = reportReturnsMaterial.value.trim().toLowerCase();
  renderReports();
});
reportReturnsResponsible?.addEventListener("input", () => {
  state.reports.pendingReturns.responsible = reportReturnsResponsible.value.trim().toLowerCase();
  renderReports();
});
reportLowStockSearch?.addEventListener("input", () => {
  state.reports.lowStock.search = reportLowStockSearch.value.trim().toLowerCase();
  renderReports();
});
reportLowStockCategory?.addEventListener("change", () => {
  state.reports.lowStock.category = reportLowStockCategory.value;
  renderReports();
});
reportLowStockLocation?.addEventListener("change", () => {
  state.reports.lowStock.location = reportLowStockLocation.value;
  renderReports();
});
reportOverdueDate?.addEventListener("input", () => {
  state.reports.overdue.date = reportOverdueDate.value;
  renderReports();
});
reportOverdueMaterial?.addEventListener("input", () => {
  state.reports.overdue.material = reportOverdueMaterial.value.trim().toLowerCase();
  renderReports();
});
reportOverdueResponsible?.addEventListener("input", () => {
  state.reports.overdue.responsible = reportOverdueResponsible.value.trim().toLowerCase();
  renderReports();
});
reportStudentSearch?.addEventListener("input", () => {
  state.reports.studentClearance.search = reportStudentSearch.value.trim().toLowerCase();
  renderReports();
});
reportConsumptionsDateFrom?.addEventListener("input", () => {
  state.reports.consumptions.dateFrom = reportConsumptionsDateFrom.value;
  renderReports();
});
reportConsumptionsDateTo?.addEventListener("input", () => {
  state.reports.consumptions.dateTo = reportConsumptionsDateTo.value;
  renderReports();
});
reportConsumptionsCostCenter?.addEventListener("change", () => {
  state.reports.consumptions.costCenter = reportConsumptionsCostCenter.value;
  renderReports();
});
reportsExportCsvButton?.addEventListener("click", exportCurrentReportCsv);
reportsExportPdfButton?.addEventListener("click", exportCurrentReportPdf);

activeLoansSearch?.addEventListener("input", () => renderActiveLoans());
activeLoansStatus?.addEventListener("change", () => renderActiveLoans());
activeLoansSort?.addEventListener("change", () => renderActiveLoans());
loanStatsToggle?.addEventListener("click", toggleLoanStatsTable);

// Proveedores
supplierForm?.addEventListener("submit", handleSupplierSubmit);
supplierCancelButton?.addEventListener("click", resetSupplierForm);
suppliersSearch?.addEventListener("input", () => {
  state.suppliersPage = 1;
  renderSuppliersAdmin();
});
suppliersPrevPage?.addEventListener("click", () => changeSuppliersPage(-1));
suppliersNextPage?.addEventListener("click", () => changeSuppliersPage(1));

// Confirmación de pedidos de compra
confirmationForm?.addEventListener("submit", handleConfirmationSubmit);
confirmationWithholdings?.addEventListener("input", recalculate);
confirmationInvoiceTotal?.addEventListener("input", recalculate);

// Ingreso por compra: la factura se completa desde la confirmación hasta que el usuario la edita.
stockEntryForm?.elements.invoice?.addEventListener("input", () => {
  stockEntryForm.elements.invoice.dataset.touched = "1";
});

bootstrap();

invoiceForm?.addEventListener("submit", handleInvoiceSubmit);
invoiceItemSearch?.addEventListener("input", renderInvoiceItemSelect);
invoiceAddItemButton?.addEventListener("click", handleAddInvoiceItem);
invoiceWithholdings?.addEventListener("input", recalculateInvoice);
invoiceTotal?.addEventListener("input", handleInvoiceTotalInput);

// Menú en pantallas chicas: se abre con el botón "Menú" y se cierra al elegir una opción.
const sidebar = document.querySelector(".sidebar");
const sidebarMenuToggle = document.querySelector("#sidebar-menu-toggle");
function setSidebarMenu(open) {
  sidebar?.classList.toggle("is-menu-open", open);
  sidebarMenuToggle?.setAttribute("aria-expanded", String(open));
}
sidebarMenuToggle?.addEventListener("click", () => setSidebarMenu(!sidebar.classList.contains("is-menu-open")));
sidebar?.addEventListener("click", (event) => {
  if (event.target.closest("[data-view]")) {
    setSidebarMenu(false);
    window.scrollTo({ top: 0 });
  }
});

// Año del pie de página: se actualiza solo.
document.querySelectorAll(".js-current-year").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

initPermissions();

// Actividad: cantidad de movimientos a mostrar (últimos 50 por defecto).
document.querySelector("#activity-limit-filter")?.addEventListener("change", (event) => {
  state.activityFilters.limit = Number(event.target.value) || 50;
  renderActivity(state.dashboard?.activity || []);
});
initInvoiceFilters();
