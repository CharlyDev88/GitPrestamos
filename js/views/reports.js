import { state } from "../state.js";
import {
  reportConsumptionsCostCenter,
  reportConsumptionsDateFrom,
  reportConsumptionsDateTo,
  reportFilterBlocks,
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
  reportsList,
  reportsResultSummary,
  reportsResultTitle,
  reportStudentSearch,
  reportTypeSelect,
} from "../dom.js";
import { escapeHtml, formatCurrencyNumber, formatDate, formatDateTime, slugify } from "../utils/format.js";
import { WRITE_OFF_REASONS, formatQuantity, isRetired, unitOf } from "../utils/units.js";
import { createEmptyState, showToast, syncSelectOptions } from "../ui/layout.js";
import { clearPager, paginateElements } from "../ui/pager.js";

// Informes y exportación a CSV / PDF.
export function renderReports() {
  if (!reportsList || !reportTypeSelect) {
    return;
  }

  syncReportsFilters();
  reportsList.innerHTML = "";

  const items = state.dashboard?.items || [];
  const loans = state.dashboard?.loans || [];
  const responsibles = state.dashboard?.responsibles || [];
  const consumptions = state.dashboard?.consumptions || [];
  const reportType = state.reports.type;
  const reportConfig = buildReportConfig(reportType, { items, loans, responsibles, consumptions, writeOffs: state.dashboard?.writeOffs || [] });

  clearPager(reportsList, "reports");
  const reportSignature = JSON.stringify(state.reports);
  reportsResultTitle.textContent = reportConfig.title;
  reportsResultSummary.textContent = reportConfig.summary;

  if (reportConfig.columns?.length) {
    renderReportTable(reportConfig);
    const rows = reportsList.querySelectorAll(".report-table tbody tr");
    paginateElements(rows, { key: "reports", anchor: reportsList, pageSize: 20, label: "registros", signature: reportSignature });
    return;
  }

  if (reportConfig.entries.length === 0) {
    reportsList.append(createEmptyState(reportConfig.emptyMessage));
    return;
  }

  reportConfig.entries.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "activity-item";

    const title = document.createElement("strong");
    title.textContent = entry.title;

    const description = document.createElement("p");
    description.textContent = entry.description;

    const detail = document.createElement("span");
    detail.textContent = entry.detail;

    article.append(title, description, detail);
    reportsList.append(article);
  });
  paginateElements(reportsList.children, { key: "reports", anchor: reportsList, pageSize: 20, label: "registros", signature: reportSignature });
}

export function renderReportTable(reportConfig) {
  if (!reportConfig.rows?.length) {
    reportsList.append(createEmptyState(reportConfig.emptyMessage));
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "report-table-wrapper";

  const table = document.createElement("table");
  table.className = "report-table";

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  reportConfig.columns.forEach((column) => {
    const th = document.createElement("th");
    th.textContent = column.label;
    headRow.append(th);
  });
  thead.append(headRow);

  const tbody = document.createElement("tbody");
  reportConfig.rows.forEach((row) => {
    const tr = document.createElement("tr");
    reportConfig.columns.forEach((column) => {
      const td = document.createElement("td");
      td.textContent = row[column.key] ?? "";
      tr.append(td);
    });
    tbody.append(tr);
  });

  table.append(thead, tbody);
  wrapper.append(table);
  reportsList.append(wrapper);
}

export function getCurrentReportConfig() {
  return buildReportConfig(state.reports.type, {
    items: state.dashboard?.items || [],
    loans: state.dashboard?.loans || [],
    responsibles: state.dashboard?.responsibles || [],
    consumptions: state.dashboard?.consumptions || [],
    writeOffs: state.dashboard?.writeOffs || [],
  });
}

// Bajas de materiales entre fechas y por motivo, con el valor estimado (costo promedio al momento de la baja).
export function buildWriteOffsReport(writeOffs) {
  const { dateFrom, dateTo, reason } = state.reports.writeOffs;
  const filtered = writeOffs.filter((entry) =>
    (!dateFrom || entry.date >= dateFrom) && (!dateTo || entry.date <= dateTo) && (!reason || entry.reason === reason)
  );
  const total = filtered.reduce((sum, entry) => sum + Number(entry.unitCost || 0) * Number(entry.quantity || 0), 0);
  return {
    title: "Informe de bajas de materiales",
    summary: `${filtered.length} baja(s) · valor estimado $${formatCurrencyNumber(total)}.`,
    emptyMessage: "No hay bajas que coincidan con los filtros seleccionados.",
    columns: [
      { key: "date", label: "Fecha" },
      { key: "time", label: "Hora" },
      { key: "material", label: "Material" },
      { key: "code", label: "Código" },
      { key: "quantity", label: "Cantidad" },
      { key: "unit", label: "Unidad" },
      { key: "reason", label: "Motivo" },
      { key: "observation", label: "Observación" },
      { key: "type", label: "Tipo" },
      { key: "value", label: "Valor estimado" },
      { key: "by", label: "Registró" },
    ],
    rows: filtered.map((entry) => ({
      date: String(entry.date || "").split("-").reverse().join("/"),
      time: entry.time || "",
      material: entry.itemName,
      code: entry.itemCode || "-",
      quantity: String(entry.quantity),
      unit: unitOf(entry.unit).label,
      reason: entry.reason,
      observation: entry.observation || "-",
      type: entry.retire ? "Definitiva" : "Parcial",
      value: `$${formatCurrencyNumber(Number(entry.unitCost || 0) * Number(entry.quantity || 0))}`,
      by: entry.createdBy || "-",
    })),
    entries: [],
  };
}

export function syncReportsFilters() {
  const writeOffReason = document.querySelector("#report-write-offs-reason");
  if (writeOffReason && writeOffReason.options.length === 1) {
    WRITE_OFF_REASONS.forEach((text) => writeOffReason.append(Object.assign(document.createElement("option"), { value: text, textContent: text })));
  }
  const categories = (state.dashboard?.categories || []).map((category) => category.name);
  const locations = (state.dashboard?.locations || []).map((location) => location.name);
  const costCenters = (state.dashboard?.costCenters || []).map((costCenter) => costCenter.name);

  reportTypeSelect.value = state.reports.type;
  reportFilterBlocks.forEach((block) => {
    block.hidden = block.dataset.reportFilter !== state.reports.type;
  });

  syncSelectOptions(reportMaterialsCategory, categories, "Todas");
  syncSelectOptions(reportMaterialsLocation, locations, "Todas");
  syncSelectOptions(reportLowStockCategory, categories, "Todas");
  syncSelectOptions(reportLowStockLocation, locations, "Todas");
  syncSelectOptions(reportConsumptionsCostCenter, ["Sin centro de costos", ...costCenters], "Todos");

  reportMaterialsSearch.value = state.reports.materials.search;
  reportMaterialsCategory.value = state.reports.materials.category;
  reportMaterialsLocation.value = state.reports.materials.location;
  reportReturnsDate.value = state.reports.pendingReturns.date;
  reportReturnsMaterial.value = state.reports.pendingReturns.material;
  reportReturnsResponsible.value = state.reports.pendingReturns.responsible;
  reportLowStockSearch.value = state.reports.lowStock.search;
  reportLowStockCategory.value = state.reports.lowStock.category;
  reportLowStockLocation.value = state.reports.lowStock.location;
  reportOverdueDate.value = state.reports.overdue.date;
  reportOverdueMaterial.value = state.reports.overdue.material;
  reportOverdueResponsible.value = state.reports.overdue.responsible;
  reportStudentSearch.value = state.reports.studentClearance.search;
  reportConsumptionsDateFrom.value = state.reports.consumptions.dateFrom;
  reportConsumptionsDateTo.value = state.reports.consumptions.dateTo;
  reportConsumptionsCostCenter.value = state.reports.consumptions.costCenter;
}

// Evita que Excel interprete como fórmula un texto que empiece con =, +, -, @ (inyección CSV).
export function neutralizeCsvFormula(value) {
  const text = String(value ?? "");
  if (typeof value === "number" || /^-?\d+([.,]\d+)?$/.test(text)) {
    return text;
  }
  return /^[=+\-@\t\r]/.test(text) ? `'${text}` : text;
}

export function exportCurrentReportCsv() {
  try {
    const reportConfig = getCurrentReportConfig();
    const hasTableData = reportConfig.columns?.length && reportConfig.rows?.length;
    const hasEntries = reportConfig.entries?.length;
    if (!hasTableData && !hasEntries) {
      showToast("error", "No hay datos para exportar", "Aplicá otros filtros o generá información primero.");
      return;
    }

    const rows = hasTableData
      ? [
        ["Informe", reportConfig.title],
        ["Resumen", reportConfig.summary],
        [],
        reportConfig.columns.map((column) => column.label),
        ...reportConfig.rows.map((row) => reportConfig.columns.map((column) => row[column.key] ?? "")),
      ]
      : [
        ["Informe", reportConfig.title],
        ["Resumen", reportConfig.summary],
        [],
        ["Título", "Descripción", "Detalle"],
        ...reportConfig.entries.map((entry) => [entry.title, entry.description, entry.detail]),
      ];

    const csv = rows
      .map((row) => row.map((cell) => `"${neutralizeCsvFormula(cell).replace(/"/g, "\"\"")}"`).join(";"))
      .join("\r\n");

    const blob = new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${slugify(reportConfig.title)}-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast("success", "Informe exportado", "Se descargó el archivo para Excel.");
  } catch (error) {
    showToast("error", "No se pudo exportar el informe", error.message);
  }
}

export function exportCurrentReportPdf() {
  try {
    const reportConfig = getCurrentReportConfig();
    const hasTableData = reportConfig.columns?.length && reportConfig.rows?.length;
    const hasEntries = reportConfig.entries?.length;
    if (!hasTableData && !hasEntries) {
      showToast("error", "No hay datos para exportar", "Aplicá otros filtros o generá información primero.");
      return;
    }

    const printable = window.open("", "_blank", "width=1024,height=768");
    if (!printable) {
      throw new Error("El navegador bloqueó la ventana de impresión.");
    }

    const headerRow = hasTableData
      ? reportConfig.columns.map((column) => `<th>${escapeHtml(column.label)}</th>`).join("")
      : "<th>Título</th><th>Descripción</th><th>Detalle</th>";

    const rows = hasTableData
      ? reportConfig.rows
        .map((row) => `
          <tr>
            ${reportConfig.columns.map((column) => `<td>${escapeHtml(row[column.key] ?? "")}</td>`).join("")}
          </tr>
        `)
        .join("")
      : reportConfig.entries
        .map((entry) => `
          <tr>
            <td>${escapeHtml(entry.title)}</td>
            <td>${escapeHtml(entry.description)}</td>
            <td>${escapeHtml(entry.detail)}</td>
          </tr>
        `)
        .join("");

    printable.document.write(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>${escapeHtml(reportConfig.title)}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 24px; color: #1f2937; }
          h1 { margin: 0 0 8px; font-size: 24px; }
          p { margin: 0 0 18px; color: #4b5563; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #d1d5db; padding: 10px; text-align: left; vertical-align: top; }
          th { background: #eef2f7; }
          .date { margin-top: 16px; font-size: 12px; color: #6b7280; }
        </style>
      </head>
      <body>
        <h1>${escapeHtml(reportConfig.title)}</h1>
        <p>${escapeHtml(reportConfig.summary)}</p>
        <table>
          <thead>
            <tr>
              ${headerRow}
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
        <div class="date">Generado el ${escapeHtml(formatDateTime(new Date().toISOString()))}</div>
      </body>
      </html>
    `);
    printable.document.close();
    printable.focus();
    printable.print();
    showToast("success", "Informe listo para PDF", "Se abrió la vista de impresión del informe.");
  } catch (error) {
    showToast("error", "No se pudo preparar el PDF", error.message);
  }
}

export function buildReportConfig(reportType, data) {
  switch (reportType) {
    case "pending-returns":
      return buildPendingReturnsReport(data.loans);
    case "low-stock":
      return buildLowStockReport(data.items);
    case "overdue-loans":
      return buildOverdueReport(data.loans);
    case "student-clearance":
      return buildStudentClearanceReport(data.loans, data.responsibles);
    case "consumptions-cost-center":
      return buildConsumptionsByCostCenterReport(data.consumptions);
    case "write-offs":
      return buildWriteOffsReport(data.writeOffs);
    case "materials-stock":
    default:
      return buildMaterialsStockReport(data.items);
  }
}

export function buildMaterialsStockReport(items) {
  const filteredItems = items.filter((item) => {
    const { search, category, location } = state.reports.materials;
    const matchesSearch =
      !search ||
      [item.name, item.code, item.subcode, item.category, item.location, item.notes]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(search));
    const matchesCategory = !category || item.category === category;
    const matchesLocation = !location || item.location === location;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return {
    title: "Informe de materiales y stock actual",
    summary: `${filteredItems.length} material(es) encontrados sobre ${items.length} registrados.`,
    emptyMessage: "No hay materiales que coincidan con los filtros seleccionados.",
    columns: [
      { key: "name", label: "Material" },
      { key: "category", label: "Categoría" },
      { key: "code", label: "Código" },
      { key: "subcode", label: "Subcódigo" },
      { key: "location", label: "Ubicación" },
      { key: "unit", label: "Unidad" },
      { key: "stock", label: "Stock Actual" },
      { key: "stockMinimum", label: "Stock Mínimo" },
      { key: "unitCost", label: "Costo Unitario" },
      { key: "lastCost", label: "Último Costo" },
      { key: "notes", label: "Observaciones" },
    ],
    rows: filteredItems.map((item) => ({
      name: item.name,
      category: item.category,
      code: item.code,
      subcode: item.subcode || "-",
      location: item.location || "Sin ubicación",
      unit: unitOf(item).label,
      stock: String(item.stock),
      stockMinimum: String(item.stockMinimum ?? 0),
      unitCost: `$${formatCurrencyNumber(item.amount)}`,
      lastCost: item.lastPurchaseCost != null ? `$${formatCurrencyNumber(item.lastPurchaseCost)}` : "-",
      notes: item.notes || "Sin observaciones.",
    })),
    entries: [],
  };
}

export function buildPendingReturnsReport(loans) {
  const filteredLoans = filterLoansByCriteria(loans, state.reports.pendingReturns, { overdueOnly: false });

  return {
    title: "Informe de devoluciones pendientes",
    summary: `${filteredLoans.length} devolución(es) pendiente(s).`,
    emptyMessage: "No hay devoluciones pendientes que coincidan con los filtros seleccionados.",
    entries: filteredLoans.map((loan) => ({
      title: loan.item?.name || "Material no disponible",
      description: `${loan.borrower} · ${loan.department || "Sin sector"} · ${formatQuantity(loan.quantity, loan.item)} pendientes`,
      detail: `Fecha de devolución ${formatDate(loan.dueDate)} · Registró ${loan.createdBy}${loan.observation ? ` · ${loan.observation}` : ""}`,
    })),
  };
}

export function buildLowStockReport(items) {
  const filteredItems = items
    .filter((item) => !isRetired(item) && Number(item.stock) <= Number(item.stockMinimum ?? 0))
    .filter((item) => {
      const { search, category, location } = state.reports.lowStock;
      const matchesSearch =
        !search ||
        [item.name, item.code, item.subcode, item.category, item.location, item.notes]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(search));
      const matchesCategory = !category || item.category === category;
      const matchesLocation = !location || item.location === location;
      return matchesSearch && matchesCategory && matchesLocation;
    });

  return {
    title: "Informe de stock en alerta",
    summary: `${filteredItems.length} material(es) en alerta de stock mínimo.`,
    emptyMessage: "No hay materiales en alerta que coincidan con los filtros seleccionados.",
    entries: filteredItems.map((item) => ({
      title: item.name,
      description: `${item.category} · ${item.code}${item.subcode ? `-${item.subcode}` : ""} · ${item.location || "Sin ubicación"}`,
      detail: `Stock actual ${formatQuantity(item.stock, item)} · Stock mínimo ${formatQuantity(item.stockMinimum ?? 0, item)}${item.notes ? ` · ${item.notes}` : ""}`,
    })),
  };
}

export function buildOverdueReport(loans) {
  const filteredLoans = filterLoansByCriteria(loans, state.reports.overdue, { overdueOnly: true });

  return {
    title: "Informe de préstamos vencidos",
    summary: `${filteredLoans.length} préstamo(s) vencido(s).`,
    emptyMessage: "No hay préstamos vencidos que coincidan con los filtros seleccionados.",
    entries: filteredLoans.map((loan) => ({
      title: loan.item?.name || "Material no disponible",
      description: `${loan.borrower} · ${loan.department || "Sin sector"} · ${formatQuantity(loan.quantity, loan.item)} pendientes`,
      detail: `Vencimiento ${formatDate(loan.dueDate)} · Registró ${loan.createdBy}${loan.observation ? ` · ${loan.observation}` : ""}`,
    })),
  };
}

export function buildStudentClearanceReport(loans, responsibles) {
  const search = state.reports.studentClearance.search;
  const students = responsibles
    .filter((responsible) => responsible.type === "alumno")
    .filter((student) =>
      !search ||
      [student.fullName, student.dni, student.course, student.division, student.orientation]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(search))
    );

  const debtFreeCount = students.filter((student) => !loans.some((loan) => loan.responsibleId === student.id)).length;

  return {
    title: "Informe de libre de deuda por alumno",
    summary: `${debtFreeCount} alumno(s) libre(s) de deuda sobre ${students.length} resultado(s).`,
    emptyMessage: "No hay alumnos que coincidan con el filtro seleccionado.",
    entries: students.map((student) => {
      const activeLoans = loans.filter((loan) => loan.responsibleId === student.id);
      const debtLabel = activeLoans.length === 0
        ? "Libre de deuda de materiales."
        : `Con deuda: ${activeLoans.map((loan) => `${loan.item?.name || "Material"} (${formatQuantity(loan.quantity, loan.item)})`).join(" · ")}`;

      return {
        title: student.fullName,
        description: `${student.dni ? `DNI ${student.dni} · ` : ""}${student.course || "-"} ${student.division || ""} · ${student.orientation || "Sin orientación"}`.trim(),
        detail: debtLabel,
      };
    }),
  };
}

export function buildConsumptionsByCostCenterReport(consumptions) {
  const filteredConsumptions = consumptions.filter((entry) => {
    const entryDate = new Date(entry.createdAt);
    const fromOk =
      !state.reports.consumptions.dateFrom ||
      entryDate >= new Date(`${state.reports.consumptions.dateFrom}T00:00:00`);
    const toOk =
      !state.reports.consumptions.dateTo ||
      entryDate <= new Date(`${state.reports.consumptions.dateTo}T23:59:59`);
    const costCenterName = entry.costCenter || "Sin centro de costos";
    const costCenterOk =
      !state.reports.consumptions.costCenter ||
      costCenterName === state.reports.consumptions.costCenter;

    return fromOk && toOk && costCenterOk;
  });

  return {
    title: "Informe de consumos por centro de costo",
    summary: `${filteredConsumptions.length} consumo(s) registrados en el filtro actual.`,
    emptyMessage: "No hay consumos para el centro de costos o rango de fechas seleccionado.",
    entries: filteredConsumptions.map((entry) => ({
      title: entry.item?.name || entry.itemName || "Material no disponible",
      description: `${entry.costCenter || "Sin centro de costos"} · ${entry.responsible || entry.responsibleData?.fullName || "Sin responsable"} · ${formatQuantity(entry.quantity, entry.item)}`,
      detail: `${entry.department || "Sin sector"} · ${entry.detail || "Sin detalle"} · ${formatDateTime(entry.createdAt)}`,
    })),
  };
}

export function filterLoansByCriteria(loans, filters, options = {}) {
  const { overdueOnly = false } = options;

  return loans.filter((loan) => {
    if (overdueOnly && !loan.overdue) {
      return false;
    }

    const matchesDate = !filters.date || loan.dueDate === filters.date;
    const matchesMaterial =
      !filters.material ||
      [loan.item?.name, loan.item?.code, loan.item?.subcode]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(filters.material));
    const matchesResponsible =
      !filters.responsible ||
      [loan.borrower, loan.responsible?.dni]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(filters.responsible));

    return matchesDate && matchesMaterial && matchesResponsible;
  });
}
