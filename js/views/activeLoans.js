import { state } from "../state.js";
import {
  activeLoansSearch,
  activeLoansSort,
  activeLoansStatus,
  activeLoansSummary,
  activeLoansTable,
  returnsBorrowerFilter,
} from "../dom.js";
import { capitalize, formatDate, formatDateTime } from "../utils/format.js";
import { createEmptyState, setActiveView } from "../ui/layout.js";
import { can } from "../auth.js";
import { clearPager, paginateElements } from "../ui/pager.js";

// Pantalla "Préstamos activos": detalle de los préstamos con devolución pendiente.

const DAY_MS = 24 * 60 * 60 * 1000;

// Días hasta el vencimiento (negativo = vencido), contando por fecha calendario.
function daysUntilDue(dueDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(`${dueDate}T00:00:00`);
  return Math.round((due - today) / DAY_MS);
}

function loanStatus(loan) {
  const days = daysUntilDue(loan.dueDate);
  if (days < 0) {
    const late = Math.abs(days);
    return { key: "overdue", label: "Vencido", detail: `hace ${late} día${late === 1 ? "" : "s"}`, order: 0 };
  }
  if (days === 0) {
    return { key: "soon", label: "Vence hoy", detail: "", order: 1 };
  }
  if (days <= 7) {
    return { key: "soon", label: "Por vencer", detail: `en ${days} día${days === 1 ? "" : "s"}`, order: 1 };
  }
  return { key: "ok", label: "En plazo", detail: `en ${days} días`, order: 2 };
}

function responsibleDetail(responsible) {
  if (!responsible) {
    return "";
  }
  if (responsible.type === "alumno") {
    const course = [responsible.course ? `${responsible.course}°` : "", responsible.division].filter(Boolean).join(" ");
    return ["Alumno", course, responsible.orientation].filter(Boolean).join(" · ");
  }
  if (responsible.type === "profesor") {
    return ["Profesor", responsible.specialty].filter(Boolean).join(" · ");
  }
  return [capitalize(responsible.type || ""), responsible.position].filter(Boolean).join(" · ");
}

function responsibleContact(responsible) {
  if (!responsible) {
    return "";
  }
  return [responsible.dni ? `DNI ${responsible.dni}` : "", responsible.phone, responsible.email].filter(Boolean).join(" · ");
}

function searchableText(loan) {
  return [
    loan.item?.name,
    loan.item?.code,
    loan.item?.subcode,
    loan.borrower,
    loan.responsible?.dni,
    loan.department,
    loan.observation,
    loan.createdBy,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

const SORTERS = {
  due: (a, b) => a.dueDate.localeCompare(b.dueDate),
  recent: (a, b) => String(b.createdAt).localeCompare(String(a.createdAt)),
  borrower: (a, b) => String(a.borrower).localeCompare(String(b.borrower), "es"),
  item: (a, b) => String(a.item?.name || "").localeCompare(String(b.item?.name || ""), "es"),
};

function cell(row, ...lines) {
  const td = document.createElement("td");
  lines.forEach((line, index) => {
    if (!line && index > 0) {
      return;
    }
    const element = document.createElement(index === 0 ? "div" : "small");
    element.textContent = line || "—";
    td.append(element);
  });
  row.append(td);
  return td;
}

function goToReturn(loan) {
  // Abre Devoluciones filtrado por el responsable del préstamo.
  if (returnsBorrowerFilter) {
    returnsBorrowerFilter.value = loan.borrower || "";
    returnsBorrowerFilter.dispatchEvent(new Event("input", { bubbles: true }));
  }
  setActiveView("returns");
}

export function renderActiveLoans(loans = state.dashboard?.loans || []) {
  if (!activeLoansTable) {
    return;
  }

  const query = (activeLoansSearch?.value || "").trim().toLowerCase();
  const statusFilter = activeLoansStatus?.value || "";
  const sorter = SORTERS[activeLoansSort?.value] || SORTERS.due;
  const canReturn = can("loans.return");

  const enriched = loans.map((loan) => ({ ...loan, status: loanStatus(loan) }));
  const visible = enriched
    .filter((loan) => !query || searchableText(loan).includes(query))
    .filter((loan) => !statusFilter || loan.status.key === statusFilter)
    .sort(sorter);

  // Resumen
  const totalUnits = enriched.reduce((sum, loan) => sum + Number(loan.quantity || 0), 0);
  const overdue = enriched.filter((loan) => loan.status.key === "overdue").length;
  const soon = enriched.filter((loan) => loan.status.key === "soon").length;
  activeLoansSummary.replaceChildren(
    ...[
      ["Préstamos activos", enriched.length],
      ["Unidades pendientes", totalUnits],
      ["Vencidos", overdue],
      ["Vencen en 7 días", soon],
      ["Mostrando", `${visible.length} de ${enriched.length}`],
    ].map(([label, value]) => {
      const box = document.createElement("div");
      box.className = "active-loans-summary__item";
      const span = document.createElement("span");
      span.textContent = label;
      const strong = document.createElement("strong");
      strong.textContent = String(value);
      box.append(span, strong);
      return box;
    })
  );

  if (!visible.length) {
    activeLoansTable.replaceChildren(
      createEmptyState(enriched.length ? "No hay préstamos que coincidan con los filtros." : "No hay préstamos activos.")
    );
    clearPager(activeLoansTable, "activeLoans");
    return;
  }

  const table = document.createElement("table");
  table.className = "data-table";
  const head = document.createElement("thead");
  const headRow = document.createElement("tr");
  // La columna de contacto solo aparece si el rol puede ver esos datos (el docente no los recibe).
  const showContact = visible.some((loan) => responsibleContact(loan.responsible));
  ["Estado", "Material", "Cant.", "Responsable", ...(showContact ? ["Contacto"] : []), "Sector", "Prestado", "Vence", "Registró", "Observación", ...(canReturn ? [""] : [])].forEach(
    (label) => {
      const th = document.createElement("th");
      th.textContent = label;
      if (label === "Cant.") th.className = "is-numeric";
      headRow.append(th);
    }
  );
  head.append(headRow);

  const body = document.createElement("tbody");
  visible.forEach((loan) => {
    const row = document.createElement("tr");
    row.className = `is-${loan.status.key}`;

    const statusCell = document.createElement("td");
    const badge = document.createElement("span");
    badge.className = `status-badge status-badge--${loan.status.key}`;
    badge.textContent = loan.status.label;
    statusCell.append(badge);
    if (loan.status.detail) {
      const small = document.createElement("small");
      small.textContent = loan.status.detail;
      statusCell.append(small);
    }
    row.append(statusCell);

    const code = loan.item ? `${loan.item.code}${loan.item.subcode ? `-${loan.item.subcode}` : ""}` : "";
    cell(row, loan.item?.name || "Material no disponible", [code, loan.item?.category].filter(Boolean).join(" · "));
    const quantityCell = cell(row, String(loan.quantity));
    quantityCell.className = "is-numeric";
    cell(row, loan.borrower, responsibleDetail(loan.responsible));
    if (showContact) cell(row, responsibleContact(loan.responsible));
    cell(row, loan.department);
    cell(row, loan.createdAt ? formatDateTime(loan.createdAt) : "");
    cell(row, loan.dueDate ? formatDate(loan.dueDate) : "");
    cell(row, loan.createdBy);
    cell(row, loan.observation);

    if (canReturn) {
      const actionCell = document.createElement("td");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "button button--ghost button--small";
      button.textContent = "Registrar devolución";
      button.addEventListener("click", () => goToReturn(loan));
      actionCell.append(button);
      row.append(actionCell);
    }

    body.append(row);
  });

  table.append(head, body);
  activeLoansTable.replaceChildren(table);
  paginateElements(body.children, { key: "activeLoans", anchor: activeLoansTable, pageSize: 15, label: "préstamos", signature: [query, statusFilter, activeLoansSort?.value].join("|") });
}
