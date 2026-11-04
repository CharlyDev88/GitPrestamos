import { state } from "./state.js";
import { loginError } from "./dom.js";
import { renderLoggedOut, renderPasswordChange } from "./auth.js";

// Comunicación con el servidor.
export async function api(url, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  const response = await fetch(url, {
    ...options,
    headers,
    credentials: "same-origin",
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 401 && url !== "/api/session" && url !== "/api/logout") {
      clearSession();
      renderLoggedOut();
      loginError.hidden = false;
      loginError.textContent = "Tu sesión venció. Volvé a ingresar.";
    }
    if (response.status === 403 && data.code === "PASSWORD_CHANGE_REQUIRED") {
      state.user = { ...(state.user || {}), mustChangePassword: true };
      renderPasswordChange(true);
    }
    // Solo una ruta inexistente indica un servidor desactualizado; los demás 404 traen su propio mensaje.
    if (response.status === 404 && String(url).startsWith("/api/") && (!data.error || data.error === "Ruta no encontrada.")) {
      throw new Error("La acción no está disponible en el servidor actual. Reiniciá el servidor para cargar la última versión de la aplicación.");
    }
    throw new Error(data.error || "Ocurrió un error en la operación.");
  }

  return data;
}

export function clearSession() {
  state.user = null;
  state.dashboard = null;
  try {
    // Limpia el token que guardaban versiones anteriores de la aplicación.
    localStorage.removeItem("panol-auth-token");
  } catch (error) {
    // Sin acceso a localStorage: no hay nada que limpiar.
  }
}
