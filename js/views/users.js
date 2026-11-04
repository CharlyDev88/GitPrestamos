import { state } from "../state.js";
import {
  userAdminTemplate,
  userCancelButton,
  userForm,
  usersAdminList,
  usersNextPage,
  usersPageInfo,
  usersPrevPage,
  userSubmitButton,
} from "../dom.js";
import { api } from "../api.js";
import { createEmptyState, render, renderViewState, showToast, updateSimplePagination } from "../ui/layout.js";
import { loadDashboard, roleLabel } from "../auth.js";

// Gestión de usuarios.
export function filterUsers(users) {
  const { search, role } = state.usersFilters;

  return users.filter((user) => {
    const matchesSearch =
      !search ||
      [user.name, user.username]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(search));
    const matchesRole = !role || user.role === role;
    return matchesSearch && matchesRole;
  });
}

export function renderUsersAdmin(users) {
  if (!usersAdminList) {
    return;
  }

  usersAdminList.innerHTML = "";
  const filteredUsers = filterUsers(users);
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / pageSize));
  if (state.usersPage > totalPages) {
    state.usersPage = totalPages;
  }
  const startIndex = (state.usersPage - 1) * pageSize;
  const pagedUsers = filteredUsers.slice(startIndex, startIndex + pageSize);

  if (users.length === 0) {
    usersAdminList.append(createEmptyState("Todavía no hay usuarios cargados."));
    updateSimplePagination(usersPrevPage, usersNextPage, usersPageInfo, 0, 1, "usuario(s)");
    return;
  }

  if (filteredUsers.length === 0) {
    usersAdminList.append(createEmptyState("No hay usuarios que coincidan con los filtros aplicados."));
    updateSimplePagination(usersPrevPage, usersNextPage, usersPageInfo, 0, 1, "usuario(s)");
    return;
  }

  pagedUsers.forEach((user) => {
    const fragment = userAdminTemplate.content.cloneNode(true);
    fragment.querySelector("strong").textContent = user.name;
    fragment.querySelector("p").textContent = `${roleLabel(user.role)} · ${user.username}`;
    fragment.querySelector("span").textContent = user.id === state.user?.id ? "Sesión actual" : "Usuario del sistema";
    fragment.querySelector(".user-edit-button").addEventListener("click", () => startEditUser(user));
    fragment.querySelector(".user-delete-button").addEventListener("click", async () => {
      const confirmed = window.confirm(`¿Querés eliminar el usuario "${user.username}"?`);
      if (!confirmed) {
        return;
      }

      try {
        await api(`/api/users/${user.id}`, { method: "DELETE" });
        if (state.editingUserId === user.id) {
          resetUserForm();
        }
        await loadDashboard();
        render();
        showToast("success", "Usuario eliminado", "El registro se eliminó correctamente.");
      } catch (error) {
        showToast("error", "No se pudo eliminar el usuario", error.message);
      }
    });
    usersAdminList.append(fragment);
  });

  updateSimplePagination(usersPrevPage, usersNextPage, usersPageInfo, filteredUsers.length, totalPages, "usuario(s)", state.usersPage);
}

export async function handleUserSubmit(event) {
  event.preventDefault();
  const isEditing = Boolean(state.editingUserId);
  const formData = new FormData(userForm);
  const payload = {
    name: formData.get("name"),
    username: formData.get("username"),
    role: formData.get("role"),
  };

  const password = String(formData.get("password") || "").trim();
  if (!isEditing || password) {
    payload.password = password;
  }

  try {
    await api(isEditing ? `/api/users/${state.editingUserId}` : "/api/users", {
      method: isEditing ? "PUT" : "POST",
      body: payload,
    });
    resetUserForm();
    await loadDashboard();
    render();
    showToast("success", isEditing ? "Usuario actualizado" : "Usuario guardado", "Los datos del usuario se guardaron correctamente.");
  } catch (error) {
    showToast("error", "No se pudo guardar el usuario", error.message);
  }
}

export function startEditUser(user) {
  state.activeView = "users";
  state.editingUserId = user.id;
  userForm.elements.id.value = user.id;
  userForm.elements.name.value = user.name || "";
  userForm.elements.username.value = user.username || "";
  userForm.elements.role.value = user.role || "administrativo";
  userForm.elements.password.value = "";
  userSubmitButton.textContent = "Actualizar usuario";
  userCancelButton.hidden = false;
  renderViewState();
}

export function resetUserForm() {
  state.editingUserId = null;
  state.usersPage = 1;
  userForm.reset();
  userForm.elements.id.value = "";
  userForm.elements.role.value = "administrativo";
  userSubmitButton.textContent = "Guardar usuario";
  userCancelButton.hidden = true;
}
