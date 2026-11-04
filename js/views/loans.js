import { state } from "../state.js";
import {
  loanForm,
  loanItemSearch,
  loanList,
  loanResponsibleSearch,
  loanTemplate,
  overdueBorrowerFilter,
  overdueDateFilter,
  overdueList,
  overdueMaterialFilter,
  overdueNextPage,
  overduePageInfo,
  overduePrevPage,
  returnsBorrowerFilter,
  returnsDateFilter,
  returnsMaterialFilter,
  returnsNextPage,
  returnsPageInfo,
  returnsPrevPage,
} from "../dom.js";
import { api } from "../api.js";
import { formatDate } from "../utils/format.js";
import { createEmptyState, render, showToast } from "../ui/layout.js";
import { can, loadDashboard } from "../auth.js";

// Préstamos, devoluciones y préstamos vencidos.
export async function handleLoanSubmit(event) {
  event.preventDefault();

  try {
    const formData = new FormData(loanForm);
    await api("/api/loans", {
      method: "POST",
      body: {
        itemId: formData.get("itemId"),
        responsibleId: formData.get("responsibleId"),
        department: formData.get("department"),
        quantity: Number(formData.get("quantity")),
        dueDate: formData.get("dueDate"),
        observation: formData.get("observation"),
      },
    });

    loanForm.reset();
    loanForm.quantity.value = 1;
    loanItemSearch.value = "";
    loanResponsibleSearch.value = "";
    await loadDashboard();
    render();
    showToast("success", "Préstamo registrado", "El préstamo se registró correctamente.");
  } catch (error) {
    showToast("error", "No se pudo registrar el préstamo", error.message);
  }
}

export function syncReturnsFilters() {
  returnsDateFilter.value = state.returnsFilters.date;
  returnsMaterialFilter.value = state.returnsFilters.material;
  returnsBorrowerFilter.value = state.returnsFilters.borrower;
}

export function syncOverdueFilters() {
  overdueDateFilter.value = state.overdueFilters.date;
  overdueMaterialFilter.value = state.overdueFilters.material;
  overdueBorrowerFilter.value = state.overdueFilters.borrower;
}

export function filterLoans(loans) {
  const { date, material, borrower } = state.returnsFilters;

  return loans.filter((loan) => {
    const matchesDate = !date || loan.dueDate === date;
    const matchesMaterial =
      !material ||
      [loan.item?.name, loan.item?.code, loan.item?.subcode]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(material));
    const matchesBorrower =
      !borrower ||
      [loan.borrower, loan.department, loan.responsible?.dni]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(borrower));

    return matchesDate && matchesMaterial && matchesBorrower;
  });
}

export function filterOverdueLoans(loans) {
  const { date, material, borrower } = state.overdueFilters;

  return loans.filter((loan) => {
    const matchesDate = !date || loan.dueDate === date;
    const matchesMaterial =
      !material ||
      [loan.item?.name, loan.item?.code, loan.item?.subcode]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(material));
    const matchesBorrower =
      !borrower ||
      [loan.borrower, loan.department, loan.responsible?.dni]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(borrower));

    return loan.overdue && matchesDate && matchesMaterial && matchesBorrower;
  });
}

export function createLoanCard(loan) {
  const fragment = loanTemplate.content.cloneNode(true);
  const returnButton = fragment.querySelector(".loan-return-button");
  const returnQuantityInput = fragment.querySelector(".loan-return-quantity");
  const returnObservationInput = fragment.querySelector(".loan-return-observation");

  fragment.querySelector(".pill").textContent = loan.overdue ? "Vencido" : "Activo";
  fragment.querySelector("h3").textContent = loan.item ? loan.item.name : "Elemento no disponible";
  fragment.querySelector(".loan-card__meta").textContent =
    `${loan.borrower} · ${loan.department || "Sin sector"} · ${loan.quantity} unidad(es) pendientes`;
  fragment.querySelector(".loan-card__due").textContent =
    `Devolver el ${formatDate(loan.dueDate)} · Registró ${loan.createdBy}`;
  returnQuantityInput.max = String(loan.quantity);
  returnQuantityInput.value = String(loan.quantity);

  if (can("loans.return")) {
    returnButton.addEventListener("click", async () => {
      try {
        await api(`/api/loans/${loan.id}/return`, {
          method: "POST",
          body: {
            quantity: Number(returnQuantityInput.value),
            observation: returnObservationInput.value,
          },
        });
        await loadDashboard();
        render();
        showToast("success", "Devolución registrada", "La devolución se registró correctamente.");
      } catch (error) {
        showToast("error", "No se pudo registrar la devolución", error.message);
      }
    });
  } else {
    returnButton.hidden = true;
    returnQuantityInput.disabled = true;
    returnObservationInput.disabled = true;
  }

  return fragment;
}

export function createOverdueLoanCard(loan) {
  const fragment = loanTemplate.content.cloneNode(true);
  const returnButton = fragment.querySelector(".loan-return-button");
  const returnQuantityInput = fragment.querySelector(".loan-return-quantity");
  const returnObservationInput = fragment.querySelector(".loan-return-observation");

  fragment.querySelector(".pill").textContent = loan.overdue ? "Vencido" : "Activo";
  fragment.querySelector("h3").textContent = loan.item ? loan.item.name : "Elemento no disponible";
  fragment.querySelector(".loan-card__meta").textContent =
    `${loan.borrower} - ${loan.department || "Sin sector"} - ${loan.quantity} unidad(es) pendientes`;
  fragment.querySelector(".loan-card__due").textContent =
    `Devolver el ${formatDate(loan.dueDate)} - Registro ${loan.createdBy}`;
  returnQuantityInput.max = String(loan.quantity);
  returnQuantityInput.value = String(loan.quantity);

  if (can("loans.return")) {
    returnButton.addEventListener("click", async () => {
      try {
        await api(`/api/loans/${loan.id}/return`, {
          method: "POST",
          body: {
            quantity: Number(returnQuantityInput.value),
            observation: returnObservationInput.value,
          },
        });
        await loadDashboard();
        render();
        showToast("success", "Devolucion registrada", "La devolucion se registro correctamente.");
      } catch (error) {
        showToast("error", "No se pudo registrar la devolucion", error.message);
      }
    });
  } else {
    returnButton.hidden = true;
    returnQuantityInput.disabled = true;
    returnObservationInput.disabled = true;
  }

  return fragment;
}

export function renderLoans(loans) {
  loanList.innerHTML = "";
  const filteredLoans = filterLoans(loans);
  const pageSize = 4;
  const totalPages = Math.max(1, Math.ceil(filteredLoans.length / pageSize));
  if (state.returnsPage > totalPages) {
    state.returnsPage = totalPages;
  }
  const startIndex = (state.returnsPage - 1) * pageSize;
  const pagedLoans = filteredLoans.slice(startIndex, startIndex + pageSize);

  if (loans.length === 0) {
    loanList.append(createEmptyState("No hay préstamos activos en este momento."));
    updateReturnsPagination(0, 1);
    return;
  }

  if (filteredLoans.length === 0) {
    loanList.append(createEmptyState("No hay devoluciones pendientes que coincidan con los filtros aplicados."));
    updateReturnsPagination(0, 1);
    return;
  }

  pagedLoans.forEach((loan) => {
    const fragment = loanTemplate.content.cloneNode(true);
    const returnButton = fragment.querySelector(".loan-return-button");
    const returnQuantityInput = fragment.querySelector(".loan-return-quantity");
    const returnObservationInput = fragment.querySelector(".loan-return-observation");

    fragment.querySelector(".pill").textContent = loan.overdue ? "Vencido" : "Activo";
    fragment.querySelector("h3").textContent = loan.item ? loan.item.name : "Elemento no disponible";
    fragment.querySelector(".loan-card__meta").textContent =
      `${loan.borrower} · ${loan.department || "Sin sector"} · ${loan.quantity} unidad(es) pendientes`;
    fragment.querySelector(".loan-card__due").textContent =
      `Devolver el ${formatDate(loan.dueDate)} · Registró ${loan.createdBy}`;
    returnQuantityInput.max = String(loan.quantity);
    returnQuantityInput.value = String(loan.quantity);

    if (can("loans.return")) {
      returnButton.addEventListener("click", async () => {
        try {
          await api(`/api/loans/${loan.id}/return`, {
            method: "POST",
            body: {
              quantity: Number(returnQuantityInput.value),
              observation: returnObservationInput.value,
            },
          });
          await loadDashboard();
          render();
          showToast("success", "Devolución registrada", "La devolución se registró correctamente.");
        } catch (error) {
          showToast("error", "No se pudo registrar la devolución", error.message);
        }
      });
    } else {
      returnButton.hidden = true;
      returnQuantityInput.disabled = true;
      returnObservationInput.disabled = true;
    }

    loanList.append(fragment);
  });

  updateReturnsPagination(filteredLoans.length, totalPages);
}

export function updateReturnsPagination(totalItems, totalPages) {
  returnsPageInfo.textContent = `Página ${state.returnsPage} de ${totalPages} · ${totalItems} devolución(es)`;
  returnsPrevPage.disabled = state.returnsPage <= 1;
  returnsNextPage.disabled = state.returnsPage >= totalPages;
}

export function renderOverdueLoans(loans) {
  overdueList.innerHTML = "";
  const filteredLoans = filterOverdueLoans(loans);
  const allOverdueLoans = loans.filter((loan) => loan.overdue);
  const pageSize = 4;
  const totalPages = Math.max(1, Math.ceil(filteredLoans.length / pageSize));
  if (state.overduePage > totalPages) {
    state.overduePage = totalPages;
  }
  const startIndex = (state.overduePage - 1) * pageSize;
  const pagedLoans = filteredLoans.slice(startIndex, startIndex + pageSize);

  if (allOverdueLoans.length === 0) {
    overdueList.append(createEmptyState("No hay préstamos vencidos en este momento."));
    updateOverduePagination(0, 1);
    return;
  }

  if (filteredLoans.length === 0) {
    overdueList.append(createEmptyState("No hay préstamos vencidos que coincidan con los filtros aplicados."));
    updateOverduePagination(0, 1);
    return;
  }

  pagedLoans.forEach((loan) => {
    overdueList.append(createOverdueLoanCard(loan));
  });

  updateOverduePagination(filteredLoans.length, totalPages);
}

export function updateOverduePagination(totalItems, totalPages) {
  overduePageInfo.textContent = `Página ${state.overduePage} de ${totalPages} · ${totalItems} vencido(s)`;
  overduePrevPage.disabled = state.overduePage <= 1;
  overdueNextPage.disabled = state.overduePage >= totalPages;
}
