import { state } from "../state.js";
import {
  loanForm,
  loanItemSearch,
  loanItemSelect,
  loanList,
  loanResponsibleSearch,
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
import { formatQuantity, quantityStep, unitOf } from "../utils/units.js";
import { createEmptyState, render, showToast } from "../ui/layout.js";
import { can, loadDashboard } from "../auth.js";

const loanItemsList = document.querySelector("#loan-items-list");
const loanItemQuantity = document.querySelector("#loan-item-quantity");

// Materiales elegidos para el préstamo en curso: [{ itemId, quantity }].
const draft = [];
const findItem = (itemId) => (state.dashboard?.items || []).find((item) => item.id === itemId);

// ---------------------------------------------------------------------------
// Préstamo con uno o varios materiales
// ---------------------------------------------------------------------------
export function syncLoanQuantityStep() {
  if (!loanItemQuantity) return;
  const item = findItem(loanItemSelect.value);
  const step = quantityStep(item);
  loanItemQuantity.step = step;
  loanItemQuantity.min = step;
}

export function handleAddLoanItem() {
  const item = findItem(loanItemSelect.value);
  if (!item) {
    showToast("error", "Falta el material", "Elegí el material que querés agregar al préstamo.");
    return;
  }
  const quantity = Number(loanItemQuantity.value);
  if (!Number.isFinite(quantity) || quantity <= 0) {
    showToast("error", "Cantidad inválida", "La cantidad debe ser mayor a cero.");
    return;
  }
  const existing = draft.find((line) => line.itemId === item.id);
  const total = (existing?.quantity || 0) + quantity;
  if (total > Number(item.stock)) {
    showToast("error", "No alcanza el stock", `De ${item.name} hay ${formatQuantity(item.stock, item)} disponibles.`);
    return;
  }
  if (existing) existing.quantity = total;
  else draft.push({ itemId: item.id, quantity });

  loanItemSearch.value = "";
  loanItemSelect.value = "";
  loanItemQuantity.value = "1";
  render();
  loanItemSearch.focus();
}

export function renderLoanDraft() {
  if (!loanItemsList) return;
  // Si un material ya no existe o se quedó sin stock, se lo saca de la lista.
  for (let index = draft.length - 1; index >= 0; index -= 1) {
    const item = findItem(draft[index].itemId);
    if (!item || item.retiredAt) draft.splice(index, 1);
  }
  loanItemsList.innerHTML = "";
  if (!draft.length) {
    const empty = document.createElement("p");
    empty.className = "loan-items-list__empty";
    empty.textContent = "Todavía no agregaste materiales. Elegí uno, indicá la cantidad y tocá \"Agregar\". Podés sumar todos los que necesites.";
    loanItemsList.append(empty);
    return;
  }
  draft.forEach((line, index) => {
    const item = findItem(line.itemId);
    const row = document.createElement("div");
    row.className = "loan-items-list__row";
    const name = document.createElement("div");
    name.className = "loan-items-list__name";
    const strong = document.createElement("strong");
    strong.textContent = item.name;
    const meta = document.createElement("span");
    meta.textContent = `${item.code}${item.subcode ? `-${item.subcode}` : ""} · disponible ${formatQuantity(item.stock, item)}`;
    name.append(strong, meta);

    const quantityLabel = document.createElement("label");
    quantityLabel.className = "loan-items-list__quantity";
    const input = document.createElement("input");
    input.type = "number";
    input.step = quantityStep(item);
    input.min = quantityStep(item);
    input.max = String(item.stock);
    input.value = String(line.quantity);
    input.setAttribute("aria-label", `Cantidad de ${item.name}`);
    input.addEventListener("change", () => {
      line.quantity = Number(input.value);
    });
    const unit = document.createElement("span");
    unit.textContent = unitOf(item).short;
    quantityLabel.append(input, unit);

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "button button--ghost loan-items-list__remove";
    remove.textContent = "Quitar";
    remove.addEventListener("click", () => {
      draft.splice(index, 1);
      renderLoanDraft();
    });
    row.append(name, quantityLabel, remove);
    loanItemsList.append(row);
  });
  const total = document.createElement("p");
  total.className = "loan-items-list__total";
  total.textContent = `${draft.length} material(es) en este préstamo.`;
  loanItemsList.append(total);
}

export async function handleLoanSubmit(event) {
  event.preventDefault();

  // Si quedó un material elegido sin "Agregar", se suma también.
  const pending = findItem(loanItemSelect.value);
  const lines = draft.map((line) => ({ ...line }));
  if (pending && !lines.some((line) => line.itemId === pending.id)) {
    lines.push({ itemId: pending.id, quantity: Number(loanItemQuantity.value) });
  }
  if (!lines.length) {
    showToast("error", "Faltan materiales", "Agregá al menos un material al préstamo.");
    loanItemSearch.focus();
    return;
  }

  try {
    const formData = new FormData(loanForm);
    const result = await api("/api/loans", {
      method: "POST",
      body: {
        items: lines,
        responsibleId: formData.get("responsibleId"),
        department: formData.get("department"),
        dueDate: formData.get("dueDate"),
        observation: formData.get("observation"),
      },
    });

    draft.length = 0;
    loanForm.reset();
    loanItemQuantity.value = "1";
    loanItemSearch.value = "";
    loanResponsibleSearch.value = "";
    await loadDashboard();
    render();
    const count = result.loans?.length || 1;
    showToast("success", "Préstamo registrado", count === 1 ? "El préstamo se registró correctamente." : `Se registró el préstamo con ${count} materiales.`);
  } catch (error) {
    showToast("error", "No se pudo registrar el préstamo", error.message);
  }
}

// ---------------------------------------------------------------------------
// Devoluciones: un préstamo (con todos sus materiales) por tarjeta
// ---------------------------------------------------------------------------
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

function matchesFilters(loan, { date, material, borrower }) {
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
}

export function filterLoans(loans) {
  return loans.filter((loan) => matchesFilters(loan, state.returnsFilters));
}

export function filterOverdueLoans(loans) {
  return loans.filter((loan) => loan.overdue && matchesFilters(loan, state.overdueFilters));
}

// Agrupa las líneas por préstamo (los préstamos anteriores, sin grupo, quedan solos).
export function groupLoans(loans) {
  const groups = new Map();
  loans.forEach((loan) => {
    const key = loan.groupId || loan.id;
    if (!groups.has(key)) groups.set(key, { key, lines: [] });
    groups.get(key).lines.push(loan);
  });
  return [...groups.values()].map((group) => {
    const first = group.lines[0];
    return {
      ...group,
      borrower: first.borrower,
      department: first.department,
      dueDate: first.dueDate,
      createdAt: first.createdAt,
      createdBy: first.createdBy,
      observation: first.observation,
      overdue: group.lines.some((line) => line.overdue),
    };
  });
}

// Grupos que tienen al menos una línea que cumple el filtro (se muestran con todos sus materiales).
function filteredGroups(loans, predicate) {
  return groupLoans(loans).filter((group) => group.lines.some(predicate));
}

function createLoanGroupCard(group) {
  const article = document.createElement("article");
  article.className = "loan-card loan-group-card";
  article.dataset.loanGroup = group.key;

  const head = document.createElement("div");
  const pill = document.createElement("span");
  pill.className = "pill pill--alert";
  pill.textContent = group.overdue ? "Vencido" : "Activo";
  const title = document.createElement("h3");
  title.textContent = group.lines.length === 1 ? group.lines[0].item?.name || "Elemento no disponible" : `Préstamo de ${group.lines.length} materiales`;
  head.append(pill, title);

  const meta = document.createElement("p");
  meta.className = "loan-card__meta";
  meta.textContent = `${group.borrower} · ${group.department || "Sin sector"}${group.observation ? ` · ${group.observation}` : ""}`;
  const due = document.createElement("p");
  due.className = "loan-card__due";
  due.textContent = `Devolver el ${formatDate(group.dueDate)} · Registró ${group.createdBy}`;

  const lines = document.createElement("div");
  lines.className = "loan-return-lines";
  const inputs = [];
  const canReturn = can("loans.return");
  group.lines.forEach((loan) => {
    const row = document.createElement("div");
    row.className = "loan-return-line";
    const name = document.createElement("div");
    name.className = "loan-return-line__name";
    const strong = document.createElement("strong");
    strong.textContent = loan.item ? loan.item.name : "Elemento no disponible";
    const pendingText = document.createElement("span");
    pendingText.textContent = `${loan.item ? `${loan.item.code}${loan.item.subcode ? `-${loan.item.subcode}` : ""} · ` : ""}Pendiente: ${formatQuantity(loan.quantity, loan.item)}`;
    name.append(strong, pendingText);

    const label = document.createElement("label");
    label.className = "loan-return-line__quantity";
    label.append(document.createTextNode("Devolver"));
    const input = document.createElement("input");
    input.type = "number";
    input.className = "loan-return-quantity";
    input.min = "0";
    input.step = quantityStep(loan.item);
    input.max = String(loan.quantity);
    input.value = String(loan.quantity);
    input.disabled = !canReturn;
    const unit = document.createElement("span");
    unit.textContent = unitOf(loan.item).short;
    const wrap = document.createElement("span");
    wrap.className = "loan-return-line__input";
    wrap.append(input, unit);
    label.append(wrap);
    inputs.push({ loan, input });
    row.append(name, label);
    lines.append(row);
  });

  const controls = document.createElement("div");
  controls.className = "return-controls";
  const observationLabel = document.createElement("label");
  observationLabel.className = "return-controls__field return-controls__field--wide";
  observationLabel.append(document.createTextNode("Observación"));
  const observation = document.createElement("input");
  observation.type = "text";
  observation.className = "loan-return-observation";
  observation.placeholder = "Estado del material, faltantes, observaciones";
  observation.disabled = !canReturn;
  observationLabel.append(observation);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "button button--action-blue loan-return-button";
  button.textContent = group.lines.length === 1 ? "Registrar devolución" : "Registrar devolución de lo indicado";
  button.hidden = !canReturn;
  controls.append(observationLabel, button);

  if (canReturn) {
    button.addEventListener("click", async () => {
      const returnLines = inputs.map(({ loan, input }) => ({ loanId: loan.id, quantity: Number(input.value || 0) })).filter((line) => line.quantity > 0);
      if (!returnLines.length) {
        showToast("error", "Nada para devolver", "Indicá la cantidad que se devuelve de al menos un material.");
        return;
      }
      try {
        await api("/api/loans/return", { method: "POST", body: { lines: returnLines, observation: observation.value } });
        await loadDashboard();
        render();
        const closed = inputs.every(({ loan, input }) => Number(input.value || 0) >= Number(loan.quantity));
        showToast("success", "Devolución registrada", closed ? "Se devolvió todo y el préstamo quedó cerrado." : "La devolución parcial se registró. El préstamo sigue abierto con lo pendiente.");
      } catch (error) {
        showToast("error", "No se pudo registrar la devolución", error.message);
      }
    });
  }

  article.append(head, meta, due, lines, controls);
  return article;
}

function renderGroupList({ container, groups, page, emptyAll, emptyFiltered, hasAny, onPage }) {
  container.innerHTML = "";
  const pageSize = 4;
  const totalPages = Math.max(1, Math.ceil(groups.length / pageSize));
  const current = Math.min(page, totalPages);
  if (!hasAny) {
    container.append(createEmptyState(emptyAll));
    onPage(0, 1, 1);
    return;
  }
  if (!groups.length) {
    container.append(createEmptyState(emptyFiltered));
    onPage(0, 1, 1);
    return;
  }
  groups.slice((current - 1) * pageSize, current * pageSize).forEach((group) => container.append(createLoanGroupCard(group)));
  onPage(groups.length, totalPages, current);
}

export function renderLoans(loans) {
  renderGroupList({
    container: loanList,
    groups: filteredGroups(loans, (loan) => matchesFilters(loan, state.returnsFilters)),
    page: state.returnsPage,
    hasAny: loans.length > 0,
    emptyAll: "No hay préstamos activos en este momento.",
    emptyFiltered: "No hay devoluciones pendientes que coincidan con los filtros aplicados.",
    onPage: (total, totalPages, current) => {
      state.returnsPage = current;
      updateReturnsPagination(total, totalPages);
    },
  });
}

export function updateReturnsPagination(totalItems, totalPages) {
  returnsPageInfo.textContent = `Página ${state.returnsPage} de ${totalPages} · ${totalItems} préstamo(s)`;
  returnsPrevPage.disabled = state.returnsPage <= 1;
  returnsNextPage.disabled = state.returnsPage >= totalPages;
}

export function renderOverdueLoans(loans) {
  renderGroupList({
    container: overdueList,
    groups: filteredGroups(loans, (loan) => loan.overdue && matchesFilters(loan, state.overdueFilters)),
    page: state.overduePage,
    hasAny: loans.some((loan) => loan.overdue),
    emptyAll: "No hay préstamos vencidos en este momento.",
    emptyFiltered: "No hay préstamos vencidos que coincidan con los filtros aplicados.",
    onPage: (total, totalPages, current) => {
      state.overduePage = current;
      updateOverduePagination(total, totalPages);
    },
  });
}

export function updateOverduePagination(totalItems, totalPages) {
  overduePageInfo.textContent = `Página ${state.overduePage} de ${totalPages} · ${totalItems} vencido(s)`;
  overduePrevPage.disabled = state.overduePage <= 1;
  overdueNextPage.disabled = state.overduePage >= totalPages;
}
