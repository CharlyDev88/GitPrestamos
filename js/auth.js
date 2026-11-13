import { state } from "./state.js";
import {
  appView,
  loginError,
  loginForm,
  loginView,
  passwordCancelButton,
  passwordError,
  passwordForm,
  passwordIntro,
  passwordView,
} from "./dom.js";
import { api, clearSession } from "./api.js";
import { capitalize } from "./utils/format.js";
import { render, sanitizeNewModuleTexts, showToast } from "./ui/layout.js";

// Ingreso, sesión, cambio de contraseña y permisos por rol.
// Permisos configurables por el administrador (los envía el servidor con el panel principal).
export function can(permission) {
  const role = state.dashboard?.user?.role || state.user?.role || "";
  if (role === "admin") return true;
  return (state.dashboard?.permissions || []).includes(permission);
}

// Firmas del circuito de aprobación de pedidos de compra (deben coincidir con src/services/purchases.js).
export const APPROVAL_STEPS = [
  { key: "workshop", label: "Jefe de taller", permission: "purchases.approve.workshop" },
  { key: "rector", label: "Rector", permission: "purchases.approve.rector" },
  { key: "accounting", label: "Contable", permission: "purchases.approve.accounting" },
];
export const APPROVAL_PERMISSIONS = APPROVAL_STEPS.map((step) => step.permission);

// Qué permiso habilita cada pantalla (alcanza con uno de la lista). "admin" = solo administrador.
export const VIEW_PERMISSIONS = {
  "loan-form": ["loans.create"],
  "consumption-form": ["consumptions.create"],
  "item-form": ["items.manage"],
  "stock-entry-form": ["stock.entries"],
  "purchase-request-form": ["purchases.requests", "purchases.confirm", ...APPROVAL_PERMISSIONS],
  "purchase-confirmation": ["purchases.confirm"],
  "purchase-invoice": ["purchases.invoices"],
  "master-data-categories": ["masterData.manage"],
  "master-data-locations": ["masterData.manage"],
  "master-data-cost-centers": ["masterData.manage"],
  "master-data-orientations": ["masterData.manage"],
  "master-data-suppliers": ["masterData.manage"],
  "master-data-responsibles": ["responsibles.manage"],
  users: "admin",
  permissions: "admin",
};

export const MASTER_DATA_VIEWS = [
  "master-data-categories",
  "master-data-locations",
  "master-data-cost-centers",
  "master-data-suppliers",
  "master-data-orientations",
  "master-data-responsibles",
];

export function canView(view) {
  const required = VIEW_PERMISSIONS[view];
  if (!required) return true;
  const role = state.dashboard?.user?.role || state.user?.role || "";
  if (required === "admin") return role === "admin";
  return required.some((permission) => can(permission));
}

export function firstMasterDataView() {
  return MASTER_DATA_VIEWS.find((view) => canView(view)) || "";
}

export function isAdminRole(role) {
  return role === "admin";
}

const ROLE_LABELS = {
  admin: "Admin",
  directivo: "Directivo",
  jefe_taller: "Jefe de taller",
  contable: "Contable",
  administrativo: "Administrativo",
  docente: "Docente",
  panolero: "Pañolero",
};

export function roleLabel(role) {
  return ROLE_LABELS[role] || capitalize(role || "");
}

// Versión demo: cartel y usuarios de prueba en la pantalla de ingreso.
async function setupDemo() {
  let info;
  try {
    info = await api("/api/demo");
  } catch (error) {
    return;
  }
  if (!info?.demo) return;
  document.querySelectorAll("[data-demo-badge]").forEach((badge) => { badge.hidden = false; });
  const box = document.querySelector("#demo-access");
  const list = document.querySelector("#demo-users");
  if (!box || !list) return;
  document.querySelector("#demo-password").textContent = info.password || "";
  list.replaceChildren(
    ...info.users.map((user) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "demo-user";
      const role = document.createElement("strong");
      role.textContent = user.role;
      const detail = document.createElement("span");
      detail.textContent = `${user.username} · ${user.name}`;
      button.append(role, detail);
      button.addEventListener("click", () => {
        loginForm.elements.username.value = user.username;
        loginForm.elements.password.value = info.password || "";
        loginForm.requestSubmit();
      });
      return button;
    })
  );
  // Versión web (GitHub Pages): los datos viven en este navegador y se pueden volver a cero.
  if (window.__PANOL_DEMO_WEB__ && !box.querySelector(".demo-reset")) {
    const note = document.createElement("p");
    note.className = "demo-note";
    note.textContent = "Lo que cargues queda guardado solo en este navegador.";
    const reset = document.createElement("button");
    reset.type = "button";
    reset.className = "button button--ghost demo-reset";
    reset.textContent = "Restablecer datos de la demo";
    reset.addEventListener("click", () => {
      if (window.confirm("¿Volver a los datos de ejemplo? Se pierde todo lo cargado en este navegador.")) {
        window.__PANOL_DEMO_WEB__.reset();
      }
    });
    box.append(note, reset);
  }
  box.hidden = false;
}

export async function bootstrap() {
  setupDemo();
  try {
    const sessionResponse = await api("/api/session");
    state.user = sessionResponse.user;
    await enterApp();
  } catch (error) {
    clearSession();
    renderLoggedOut();
  }
}

export async function enterApp() {
  if (state.user?.mustChangePassword) {
    renderPasswordChange(true);
    return;
  }
  await loadDashboard();
  // Cada ingreso empieza en el Dashboard, arriba de todo y con el menú de celular cerrado.
  state.activeView = "dashboard";
  closeMobileMenu();
  render();
  window.scrollTo({ top: 0 });
  document.querySelector(".dashboard-content")?.scrollTo?.({ top: 0 });
}

function closeMobileMenu() {
  document.querySelector(".sidebar")?.classList.remove("is-menu-open");
  document.querySelector("#sidebar-menu-toggle")?.setAttribute("aria-expanded", "false");
}

export function renderPasswordChange(required) {
  loginView.hidden = true;
  appView.hidden = true;
  passwordView.hidden = false;
  passwordError.hidden = true;
  passwordForm.reset();
  passwordIntro.textContent = required
    ? "Por seguridad, tenés que elegir una contraseña nueva antes de continuar."
    : "Elegí una contraseña nueva para tu usuario.";
  passwordCancelButton.textContent = required ? "Cerrar sesión" : "Cancelar";
  passwordForm.querySelector("input")?.focus();
}

export async function handlePasswordChange(event) {
  event.preventDefault();
  const formData = new FormData(passwordForm);
  const newPassword = String(formData.get("newPassword"));

  try {
    if (newPassword !== String(formData.get("confirmPassword"))) {
      throw new Error("La confirmación no coincide con la contraseña nueva.");
    }

    const data = await api("/api/me/password", {
      method: "POST",
      body: {
        currentPassword: String(formData.get("currentPassword")),
        newPassword,
      },
    });
    state.user = data.user;
    passwordForm.reset();
    passwordView.hidden = true;
    await loadDashboard();
    render();
    showToast("success", "Contraseña actualizada", "Tu contraseña se cambió correctamente.");
  } catch (error) {
    passwordError.hidden = false;
    passwordError.textContent = error.message;
  }
}

export async function handleLogin(event) {
  event.preventDefault();
  const formData = new FormData(loginForm);

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: String(formData.get("username")).trim(),
        password: String(formData.get("password")),
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "No fue posible iniciar sesión.");
    }

    state.user = data.user;
    loginError.hidden = true;
    loginForm.reset();
    await enterApp();
  } catch (error) {
    loginError.hidden = false;
    loginError.textContent = error.message;
  }
}

export async function handleLogout() {
  closeMobileMenu();
  try {
    await api("/api/logout", { method: "POST" });
  } catch (error) {
    console.error(error);
  }

  clearSession();
  renderLoggedOut();
}

export async function loadDashboard() {
  state.dashboard = await api("/api/dashboard");
}

export function renderLoggedOut() {
  loginView.hidden = false;
  appView.hidden = true;
  passwordView.hidden = true;
  sanitizeNewModuleTexts();
}
