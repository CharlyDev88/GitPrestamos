import { state } from "../state.js";
import { loanStatsChart, loanStatsLegend, loanStatsTable, loanStatsToggle } from "../dom.js";

// Gráfico mensual del dashboard: préstamos y devoluciones de cada mes (barras agrupadas)
// y préstamos abiertos al cierre del mes (línea). Los datos los calcula el servidor (loanStats).

const SERIES = [
  { key: "loans", label: "Préstamos", color: "#0b3f86", kind: "bar" },
  { key: "returns", label: "Devoluciones", color: "#c9a43e", kind: "bar" },
  { key: "openAtEnd", label: "Abiertos al cierre del mes", color: "#5b8fd0", kind: "line" },
];
const TEXT = "#202631";
const MUTED = "#7f8b9b";
const GRID = "#e4e9f0";
const SURFACE = "#ffffff";
const SVG_NS = "http://www.w3.org/2000/svg";

const monthShort = new Intl.DateTimeFormat("es-AR", { month: "short" });
const monthLong = new Intl.DateTimeFormat("es-AR", { month: "long", year: "numeric" });

function monthDate(key) {
  const [year, month] = key.split("-").map(Number);
  return new Date(year, month - 1, 1);
}

function shortLabel(key, index) {
  const date = monthDate(key);
  const name = monthShort.format(date).replace(".", "");
  return index === 0 || date.getMonth() === 0 ? `${name} ${String(date.getFullYear()).slice(2)}` : name;
}

function longLabel(key) {
  const text = monthLong.format(monthDate(key));
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function svg(tag, attributes = {}) {
  const element = document.createElementNS(SVG_NS, tag);
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, String(value)));
  return element;
}

// Escala entera "linda": 0, 1, 2… o 0, 5, 10… según el máximo.
function niceScale(maxValue) {
  const max = Math.max(1, maxValue);
  const rough = max / 4;
  const magnitude = 10 ** Math.floor(Math.log10(rough));
  const step = Math.max(1, [1, 2, 5, 10].map((m) => m * magnitude).find((candidate) => candidate >= rough));
  const top = Math.ceil(max / step) * step;
  const ticks = [];
  for (let value = 0; value <= top; value += step) ticks.push(value);
  return { top, ticks };
}

// Barra con las esquinas superiores redondeadas (4px) apoyada en la base.
function barPath(x, y, width, height, radius = 4) {
  if (height <= 0) return "";
  const r = Math.min(radius, width / 2, height);
  return `M${x},${y + height} V${y + r} Q${x},${y} ${x + r},${y} H${x + width - r} Q${x + width},${y} ${x + width},${y + r} V${y + height} Z`;
}

function renderLegend() {
  if (!loanStatsLegend || loanStatsLegend.childElementCount) return;
  SERIES.forEach((series) => {
    const item = document.createElement("span");
    item.className = "chart-legend__item";
    const swatch = document.createElement("span");
    swatch.className = `chart-legend__swatch chart-legend__swatch--${series.kind}`;
    swatch.style.setProperty("--swatch", series.color);
    item.append(swatch, document.createTextNode(series.label));
    loanStatsLegend.append(item);
  });
}

function renderTable(stats) {
  const table = document.createElement("table");
  table.className = "data-table";
  const head = document.createElement("tr");
  ["Mes", ...SERIES.map((series) => series.label)].forEach((label, index) => {
    const th = document.createElement("th");
    th.textContent = label;
    if (index > 0) th.className = "is-numeric";
    head.append(th);
  });
  const thead = document.createElement("thead");
  thead.append(head);
  const tbody = document.createElement("tbody");
  stats
    .slice()
    .reverse()
    .forEach((month) => {
      const row = document.createElement("tr");
      [longLabel(month.month), ...SERIES.map((series) => month[series.key])].forEach((value, index) => {
        const td = document.createElement("td");
        td.textContent = String(value);
        if (index > 0) td.className = "is-numeric";
        row.append(td);
      });
      tbody.append(row);
    });
  table.append(thead, tbody);
  loanStatsTable.replaceChildren(table);
}

function renderChart(stats) {
  const width = Math.max(320, Math.round(loanStatsChart.clientWidth || 800));
  const height = 260;
  const margin = { top: 18, right: 44, bottom: 30, left: 34 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const maxValue = Math.max(...stats.flatMap((month) => SERIES.map((series) => month[series.key])));
  const { top, ticks } = niceScale(maxValue);
  const y = (value) => margin.top + plotHeight - (value / top) * plotHeight;
  const band = plotWidth / stats.length;
  const barWidth = Math.max(4, Math.min(18, band * 0.28));
  const gap = 2;

  const root = svg("svg", { viewBox: `0 0 ${width} ${height}`, width, height, class: "loan-stats-svg" });

  // Grilla y eje Y (recesivos)
  ticks.forEach((tick) => {
    root.append(svg("line", { x1: margin.left, x2: width - margin.right, y1: y(tick), y2: y(tick), stroke: GRID, "stroke-width": 1 }));
    const label = svg("text", { x: margin.left - 8, y: y(tick) + 4, "text-anchor": "end", fill: MUTED, "font-size": 11 });
    label.textContent = String(tick);
    root.append(label);
  });

  // Resalte de la columna bajo el cursor
  const highlight = svg("rect", { x: 0, y: margin.top, width: band, height: plotHeight, fill: "#0b3f86", opacity: 0, rx: 6 });
  root.append(highlight);

  // Barras agrupadas
  stats.forEach((month, index) => {
    const center = margin.left + band * index + band / 2;
    SERIES.filter((series) => series.kind === "bar").forEach((series, seriesIndex) => {
      const value = month[series.key];
      const x = center - barWidth - gap / 2 + seriesIndex * (barWidth + gap);
      const path = barPath(x, y(value), barWidth, y(0) - y(value));
      if (path) root.append(svg("path", { d: path, fill: series.color }));
    });
    const label = svg("text", { x: center, y: height - 8, "text-anchor": "middle", fill: MUTED, "font-size": 11 });
    label.textContent = shortLabel(month.month, index);
    root.append(label);
  });

  // Línea de préstamos abiertos al cierre del mes
  const line = SERIES.find((series) => series.kind === "line");
  const points = stats.map((month, index) => [margin.left + band * index + band / 2, y(month[line.key])]);
  root.append(svg("polyline", { points: points.map((point) => point.join(",")).join(" "), fill: "none", stroke: line.color, "stroke-width": 2, "stroke-linejoin": "round" }));
  points.forEach(([px, py]) => root.append(svg("circle", { cx: px, cy: py, r: 4, fill: line.color, stroke: SURFACE, "stroke-width": 2 })));

  // Etiqueta directa solo en el último punto de la línea
  const [lastX, lastY] = points[points.length - 1];
  const lastLabel = svg("text", { x: lastX + 8, y: lastY + 4, fill: TEXT, "font-size": 12, "font-weight": 600 });
  lastLabel.textContent = String(stats[stats.length - 1][line.key]);
  root.append(lastLabel);

  // Línea base
  root.append(svg("line", { x1: margin.left, x2: width - margin.right, y1: y(0), y2: y(0), stroke: "#c9d3df", "stroke-width": 1 }));

  // Capa de interacción: una zona por mes, más grande que las marcas
  const tooltip = document.createElement("div");
  tooltip.className = "chart-tooltip";
  tooltip.hidden = true;

  stats.forEach((month, index) => {
    const zone = svg("rect", { x: margin.left + band * index, y: margin.top, width: band, height: plotHeight + 20, fill: "transparent" });
    zone.style.cursor = "default";
    const show = () => {
      highlight.setAttribute("x", margin.left + band * index);
      highlight.setAttribute("opacity", 0.05);
      tooltip.replaceChildren();
      const title = document.createElement("strong");
      title.textContent = longLabel(month.month);
      tooltip.append(title);
      SERIES.forEach((series) => {
        const row = document.createElement("div");
        row.className = "chart-tooltip__row";
        const swatch = document.createElement("span");
        swatch.className = `chart-legend__swatch chart-legend__swatch--${series.kind}`;
        swatch.style.setProperty("--swatch", series.color);
        const name = document.createElement("span");
        name.textContent = series.label;
        const value = document.createElement("b");
        value.textContent = String(month[series.key]);
        row.append(swatch, name, value);
        tooltip.append(row);
      });
      tooltip.hidden = false;
      const left = margin.left + band * index + band / 2;
      tooltip.style.left = `${Math.min(Math.max(left, 110), width - 110)}px`;
    };
    const hide = () => {
      highlight.setAttribute("opacity", 0);
      tooltip.hidden = true;
    };
    zone.addEventListener("mouseenter", show);
    zone.addEventListener("mouseleave", hide);
    root.append(zone);
  });

  loanStatsChart.replaceChildren(root, tooltip);
}

let resizeObserver = null;
let lastWidth = 0;

function showChartMessage(message) {
  const empty = document.createElement("div");
  empty.className = "empty-state";
  empty.textContent = message;
  loanStatsChart.replaceChildren(empty);
  loanStatsTable?.replaceChildren();
}

export function renderLoanChart(stats = state.dashboard?.loanStats) {
  if (!loanStatsChart) return;
  renderLegend();

  // Un servidor de una versión anterior no envía estos datos: hay que reiniciarlo.
  if (!Array.isArray(stats)) {
    showChartMessage("El servidor no envió los datos del gráfico. Reinicialo (cerrá su ventana y abrí iniciar.bat) y recargá la página.");
    return;
  }

  if (!stats.length || stats.every((month) => !month.loans && !month.returns && !month.openAtEnd)) {
    showChartMessage("Todavía no hay préstamos registrados.");
    return;
  }

  renderChart(stats);
  if (loanStatsTable) renderTable(stats);

  // Se redibuja al cambiar el ancho del panel (sin depender de la ventana).
  if (!resizeObserver && "ResizeObserver" in window) {
    resizeObserver = new ResizeObserver(() => {
      const width = Math.round(loanStatsChart.clientWidth);
      if (width && width !== lastWidth) {
        lastWidth = width;
        const current = state.dashboard?.loanStats || [];
        if (current.length) renderChart(current);
      }
    });
    resizeObserver.observe(loanStatsChart);
  }
}

// Alterna entre gráfico y tabla (la tabla es la alternativa accesible al color).
export function toggleLoanStatsTable() {
  const showTable = loanStatsTable.hidden;
  loanStatsTable.hidden = !showTable;
  loanStatsChart.hidden = showTable;
  loanStatsToggle.textContent = showTable ? "Ver gráfico" : "Ver tabla";
  loanStatsToggle.setAttribute("aria-pressed", String(showTable));
}
