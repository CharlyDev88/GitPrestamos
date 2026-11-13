import { state } from "../state.js";
import { api } from "../api.js";
import { loadDashboard } from "../auth.js";
import { formatDateTime } from "../utils/format.js";
import { createEmptyState, render, showToast } from "../ui/layout.js";

// Permisos por rol: grilla de funcionalidades × roles que solo ve el administrador.

const ROLE_LABELS = { panolero: "Pañolero", docente: "Docente", administrativo: "Administrativo", directivo: "Directivo", jefe_taller: "Jefe de taller", contable: "Contable" };
const ROLE_SHORT = { panolero: "Pañol.", docente: "Doc.", administrativo: "Admtvo.", directivo: "Direc.", jefe_taller: "J. taller", contable: "Cont." };
const IMPLIED = { "responsibles.manage": "responsibles.personalData" };

let draft = null; // { rol: Set(claves propias) } con los cambios sin guardar
let saving = false;

const matrixNode = () => document.querySelector("#permissions-matrix");
const statusNode = () => document.querySelector("#permissions-status");
const saveButton = () => document.querySelector("#permissions-save");
const discardButton = () => document.querySelector("#permissions-discard");

function matrix() {
  return state.dashboard?.rolePermissions || null;
}

function roleEntry(role) {
  return matrix()?.roles.find((entry) => entry.role === role);
}

// Permisos propios guardados (sin herencia).
function savedOwn(role) {
  return new Set(roleEntry(role)?.own || []);
}

// Permisos efectivos guardados (con herencia), para resaltar lo que cambia.
function savedEffective(role) {
  return new Set(roleEntry(role)?.permissions || []);
}

// Permisos que llegan del rol inferior según el borrador actual (si cambia Administrativo, se ve en Directivo).
function inheritedDraft(role, seen = new Set()) {
  const parent = roleEntry(role)?.inheritsFrom;
  if (!parent || seen.has(parent)) return new Set();
  seen.add(role);
  return effectiveDraft(parent, seen);
}

function effectiveDraft(role, seen = new Set()) {
  const set = new Set([...(draft[role] || []), ...inheritedDraft(role, seen)]);
  Object.entries(IMPLIED).forEach(([source, target]) => {
    if (set.has(source)) set.add(target);
  });
  return set;
}

function resetDraft() {
  draft = Object.fromEntries((matrix()?.roles || []).map((entry) => [entry.role, new Set(entry.own || entry.permissions)]));
}

function changedRoles() {
  if (!draft) return [];
  return Object.keys(draft).filter((role) => {
    const saved = savedOwn(role);
    return saved.size !== draft[role].size || [...draft[role]].some((key) => !saved.has(key));
  });
}

function checkbox(role, key) {
  const input = document.createElement("input");
  input.type = "checkbox";
  const effective = effectiveDraft(role);
  input.checked = effective.has(key);
  input.dataset.role = role;
  input.dataset.key = key;
  const parent = roleEntry(role)?.inheritsFrom;
  const impliedBy = Object.keys(IMPLIED).find((source) => IMPLIED[source] === key);
  if (parent && inheritedDraft(role).has(key)) {
    input.disabled = true;
    input.title = `Heredado de ${ROLE_LABELS[parent]}: el rol ${ROLE_LABELS[role]} tiene siempre todo lo de ${ROLE_LABELS[parent]}.`;
  } else if (impliedBy && effective.has(impliedBy)) {
    input.disabled = true;
    input.title = "Incluido porque el rol puede editar responsables.";
  }
  input.setAttribute("aria-label", `${ROLE_LABELS[role]}: ${matrix().catalog.find((entry) => entry.key === key)?.label}`);
  return input;
}

function buildTable() {
  const data = matrix();
  const table = document.createElement("table");
  table.className = "permissions-table";

  const headRow = document.createElement("tr");
  const first = document.createElement("th");
  first.textContent = "Funcionalidad";
  headRow.append(first);
  data.roles.forEach((entry) => {
    const th = document.createElement("th");
    const full = document.createElement("span");
    full.className = "permissions-role-full";
    full.textContent = ROLE_LABELS[entry.role] || entry.role;
    const short = document.createElement("abbr");
    short.className = "permissions-role-short";
    short.title = full.textContent;
    short.textContent = ROLE_SHORT[entry.role] || full.textContent;
    th.append(full, short);
    const note = document.createElement("small");
    note.textContent = (entry.inheritsFrom ? `Incluye todo lo de ${ROLE_LABELS[entry.inheritsFrom]} · ` : "") + (entry.customized
      ? `Modificado${entry.updatedAt ? ` el ${formatDateTime(entry.updatedAt)}` : ""}${entry.updatedBy ? ` por ${entry.updatedBy}` : ""}`
      : "Permisos predeterminados");
    th.append(note);
    if (entry.customized) {
      const reset = document.createElement("button");
      reset.type = "button";
      reset.className = "permissions-reset";
      reset.textContent = "Restablecer";
      reset.title = "Volver a los permisos predeterminados de este rol";
      reset.addEventListener("click", () => handleReset(entry.role));
      th.append(reset);
    }
    headRow.append(th);
  });
  const adminTh = document.createElement("th");
  adminTh.className = "permissions-admin-col";
  adminTh.textContent = "Admin";
  const adminNote = document.createElement("small");
  adminNote.textContent = "Siempre todo";
  adminTh.append(adminNote);
  headRow.append(adminTh);
  const thead = document.createElement("thead");
  thead.append(headRow);

  const tbody = document.createElement("tbody");
  let group = "";
  data.catalog.forEach((permission) => {
    if (permission.group !== group) {
      group = permission.group;
      const groupRow = document.createElement("tr");
      groupRow.className = "permissions-group";
      const cell = document.createElement("td");
      cell.colSpan = data.roles.length + 2;
      cell.textContent = group;
      groupRow.append(cell);
      tbody.append(groupRow);
    }
    const row = document.createElement("tr");
    const label = document.createElement("td");
    label.textContent = permission.label;
    if (IMPLIED[permission.key]) {
      const note = document.createElement("span");
      note.className = "permissions-note";
      note.textContent = "Incluye ver sus datos personales.";
      label.append(note);
    }
    row.append(label);
    data.roles.forEach((entry) => {
      const cell = document.createElement("td");
      cell.append(checkbox(entry.role, permission.key));
      cell.classList.toggle("is-changed", savedEffective(entry.role).has(permission.key) !== effectiveDraft(entry.role).has(permission.key));
      row.append(cell);
    });
    const adminCell = document.createElement("td");
    adminCell.className = "permissions-admin-col";
    const adminBox = document.createElement("input");
    adminBox.type = "checkbox";
    adminBox.checked = true;
    adminBox.disabled = true;
    adminBox.setAttribute("aria-label", `Admin: ${permission.label}`);
    adminCell.append(adminBox);
    row.append(adminCell);
    tbody.append(row);
  });

  table.append(thead, tbody);
  table.addEventListener("change", handleToggle);
  matrixNode().replaceChildren(table);
}

function updateActions() {
  const changed = changedRoles();
  saveButton().disabled = saving || !changed.length;
  discardButton().disabled = saving || !changed.length;
  statusNode().textContent = changed.length
    ? `Cambios sin guardar en: ${changed.map((role) => ROLE_LABELS[role]).join(", ")}.`
    : "Sin cambios pendientes.";
}

function handleToggle(event) {
  const input = event.target;
  if (!input.matches("input[type=checkbox][data-role]")) return;
  const set = draft[input.dataset.role];
  if (input.checked) set.add(input.dataset.key);
  else set.delete(input.dataset.key);
  if (input.checked && IMPLIED[input.dataset.key]) set.add(IMPLIED[input.dataset.key]);
  buildTable();
  updateActions();
}

async function refreshAfterSave() {
  draft = null;
  await loadDashboard();
  render();
}

async function handleSave() {
  const changed = changedRoles();
  if (!changed.length) return;
  saving = true;
  updateActions();
  try {
    for (const role of changed) {
      await api(`/api/role-permissions/${role}`, { method: "PUT", body: { permissions: [...draft[role]] } });
    }
    await refreshAfterSave();
    showToast("success", "Permisos actualizados", `Se guardaron los cambios de ${changed.map((role) => ROLE_LABELS[role]).join(", ")}. Los usuarios los ven al recargar la página.`);
  } catch (error) {
    showToast("error", "No se pudieron guardar los permisos", error.message);
  } finally {
    saving = false;
    updateActions();
  }
}

async function handleReset(role) {
  if (!window.confirm(`¿Volver a los permisos predeterminados del rol ${ROLE_LABELS[role]}? Se pierden los cambios hechos para ese rol.`)) return;
  try {
    await api(`/api/role-permissions/${role}`, { method: "PUT", body: { reset: true } });
    await refreshAfterSave();
    showToast("success", "Permisos restablecidos", `${ROLE_LABELS[role]} volvió a los permisos predeterminados.`);
  } catch (error) {
    showToast("error", "No se pudieron restablecer los permisos", error.message);
  }
}

export function renderPermissions() {
  const node = matrixNode();
  if (!node) return;
  if (!matrix()) {
    node.replaceChildren(createEmptyState("Solo el administrador puede ver los permisos."));
    return;
  }
  // Si hay cambios sin guardar, se conservan aunque se actualice el resto de la pantalla.
  if (!draft || !changedRoles().length) resetDraft();
  buildTable();
  updateActions();
}

export function initPermissions() {
  saveButton()?.addEventListener("click", handleSave);
  discardButton()?.addEventListener("click", () => {
    resetDraft();
    buildTable();
    updateActions();
  });
}
