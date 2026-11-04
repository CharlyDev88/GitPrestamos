import { state } from "../state.js";
import {
  activityDateFrom,
  activityDateTo,
  activityList,
  activityResponsibleFilter,
  activityTemplate,
  activityTypeFilter,
} from "../dom.js";
import { formatDateTime, labelForActivity } from "../utils/format.js";
import { createEmptyState } from "../ui/layout.js";
import { clearPager, paginateElements } from "../ui/pager.js";

// Registro de actividad.
export function syncActivityFilters() {
  activityDateFrom.value = state.activityFilters.dateFrom;
  activityDateTo.value = state.activityFilters.dateTo;
  activityTypeFilter.value = state.activityFilters.type;
  activityResponsibleFilter.value = state.activityFilters.responsible;
  const limitSelect = document.querySelector("#activity-limit-filter");
  if (limitSelect) limitSelect.value = String(state.activityFilters.limit || 50);
}

export function renderActivity(activity) {
  activityList.innerHTML = "";
  syncActivityFilters();
  // Los más recientes primero; se muestran los últimos N (50 por defecto) que cumplen los filtros.
  const limit = Number(state.activityFilters.limit) || 50;
  const filteredActivity = filterActivityEntries(activity)
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, limit);

  if (activity.length === 0) {
    activityList.append(createEmptyState("Todavía no hay actividad registrada."));
    clearPager(activityList, "activity");
    return;
  }

  if (filteredActivity.length === 0) {
    activityList.append(createEmptyState("No hay movimientos que coincidan con los filtros aplicados."));
    clearPager(activityList, "activity");
    return;
  }

  filteredActivity.forEach((entry) => {
    const fragment = activityTemplate.content.cloneNode(true);
    fragment.querySelector("strong").textContent = labelForActivity(entry.type);
    fragment.querySelector("p").textContent = entry.message;
    fragment.querySelector("span").textContent = formatDateTime(entry.createdAt);
    activityList.append(fragment);
  });
  paginateElements(activityList.children, { key: "activity", anchor: activityList, pageSize: 50, label: "movimientos", signature: JSON.stringify(state.activityFilters) });
}

export function filterActivityEntries(activity) {
  const { dateFrom, dateTo, type, responsible } = state.activityFilters;

  return activity.filter((entry) => {
    const entryDate = new Date(entry.createdAt);
    const fromOk = !dateFrom || entryDate >= new Date(`${dateFrom}T00:00:00`);
    const toOk = !dateTo || entryDate <= new Date(`${dateTo}T23:59:59`);
    const typeOk = !type || mapActivityMovement(entry.type) === type;
    const responsibleOk =
      !responsible ||
      String(entry.message || "").toLowerCase().includes(responsible);

    return fromOk && toOk && typeOk && responsibleOk;
  });
}

export function mapActivityMovement(type) {
  if (type === "loan_created") {
    return "loan";
  }
  if (["loan_returned", "loan_partial_returned"].includes(type)) {
    return "return";
  }
  if (type === "consumption_created") {
    return "consumption";
  }
  return "";
}
