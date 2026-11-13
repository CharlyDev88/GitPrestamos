import { state } from "../state.js";
import {
  itemCategorySelect,
  itemLocationSelect,
  itemSubmitButton,
  loanForm,
  loanResponsibleSelect,
  purchaseCostCenterSelect,
  responsibleOrientationSelect,
} from "../dom.js";
import { dniLabel } from "../utils/format.js";

// Listas desplegables de materiales, responsables y datos maestros.
export function renderItemSelect(select, items, searchTerm = "", options = {}) {
  const { includeZeroStock = false } = options;
  const availableItems = includeZeroStock ? items.slice() : items.filter((item) => item.stock > 0);
  const normalizedSearch = String(searchTerm || "").trim().toLowerCase();
  const currentValue = select.value;
  select.innerHTML = "";
  const filteredItems = availableItems.filter((item) => {
    if (!normalizedSearch) {
      return true;
    }

    return [item.name, item.code, item.subcode]
      .filter(Boolean)
      .some((value) => String(value).toLowerCase().includes(normalizedSearch));
  });

  if (availableItems.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = includeZeroStock ? "No hay materiales cargados" : "No hay elementos disponibles";
    select.append(option);
    select.disabled = true;
    return;
  }

  if (filteredItems.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No hay materiales que coincidan con la búsqueda";
    select.append(option);
    select.disabled = true;
    return;
  }

  select.disabled = false;
  // Opción vacía: después de guardar, la lista vuelve a "Seleccionar material".
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = normalizedSearch ? `Seleccionar material (${filteredItems.length} coincidencia${filteredItems.length === 1 ? "" : "s"})` : "Seleccionar material";
  select.append(placeholder);
  filteredItems.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent =
      `${item.name} · ${item.code}${item.subcode ? `-${item.subcode}` : ""} · ${item.location || "Sin ubicación"} (${item.stock} disponibles)`;
    select.append(option);
  });

  // Se conserva lo elegido; si se está buscando, se elige solo la primera coincidencia.
  select.value = filteredItems.some((item) => item.id === currentValue)
    ? currentValue
    : normalizedSearch
      ? (filteredItems[0]?.id || "")
      : "";
}

export function renderStockItemSelect(select, items, searchTerm = "") {
  renderItemSelect(select, items, searchTerm);
}

export function syncLoanResponsibleContext() {
  const departmentInput = loanForm.elements.department;
  if (!departmentInput) {
    return;
  }

  const responsibles = state.dashboard?.responsibles || [];
  const responsible = responsibles.find((entry) => entry.id === loanResponsibleSelect.value);

  if (responsible?.type === "alumno") {
    const course = String(responsible.course || "").trim();
    const division = String(responsible.division || "").trim();
    departmentInput.value = [course, division].filter(Boolean).join(" ");
  }
}

export function renderResponsibleSelect(select, responsibles, searchTerm = "") {
  const currentValue = select.value;
  const normalizedSearch = String(searchTerm || "").trim().toLowerCase();
  select.innerHTML = "";

  const filteredResponsibles = responsibles.filter((responsible) => {
    if (!normalizedSearch) {
      return true;
    }

    return [responsible.fullName, responsible.dni]
      .filter(Boolean)
      .some((value) => String(value).toLowerCase().includes(normalizedSearch));
  });

  if (responsibles.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Primero cargá un responsable en Datos Maestros";
    select.append(option);
    select.disabled = true;
    return;
  }

  if (filteredResponsibles.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No hay responsables que coincidan con la búsqueda";
    select.append(option);
    select.disabled = true;
    return;
  }

  select.disabled = false;
  filteredResponsibles.forEach((responsible) => {
    const option = document.createElement("option");
    option.value = responsible.id;
    option.textContent = `${responsible.fullName}${dniLabel(responsible)}`;
    select.append(option);
  });

  select.value = filteredResponsibles.some((responsible) => responsible.id === currentValue)
    ? currentValue
    : (filteredResponsibles[0]?.id || "");
}

export function renderCategorySelect(categories, targetSelect = itemCategorySelect, emptyLabel = "Primero cargá una categoría en Datos Maestros") {
  const currentValue = targetSelect.value;
  targetSelect.innerHTML = "";

  if (categories.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = emptyLabel;
    targetSelect.append(option);
    targetSelect.disabled = true;
    if (targetSelect === itemCategorySelect) {
      itemSubmitButton.disabled = true;
    }
    return;
  }

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.name;
    option.textContent = category.name;
    targetSelect.append(option);
  });

  targetSelect.value = categories.some((category) => category.name === currentValue)
    ? currentValue
    : (categories[0]?.name || "");
  targetSelect.disabled = false;

  if (targetSelect === itemCategorySelect) {
    itemSubmitButton.disabled = itemLocationSelect.disabled;
  }
}

export function renderLocationSelect(locations, targetSelect = itemLocationSelect, emptyLabel = "Primero cargá una ubicación en Datos Maestros") {
  const currentValue = targetSelect.value;
  targetSelect.innerHTML = "";

  if (locations.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = emptyLabel;
    targetSelect.append(option);
    targetSelect.disabled = true;
    if (targetSelect === itemLocationSelect) {
      itemSubmitButton.disabled = true;
    }
    return;
  }

  locations.forEach((location) => {
    const option = document.createElement("option");
    option.value = location.name;
    option.textContent = location.name;
    targetSelect.append(option);
  });

  targetSelect.value = locations.some((location) => location.name === currentValue)
    ? currentValue
    : (locations[0]?.name || "");
  targetSelect.disabled = false;

  if (targetSelect === itemLocationSelect) {
    itemSubmitButton.disabled = itemCategorySelect.disabled;
  }
}

export function renderCostCenterSelect(costCenters, targetSelect = purchaseCostCenterSelect, defaultLabel = "Seleccionar") {
  const currentValue = targetSelect.value;
  targetSelect.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = defaultLabel;
  targetSelect.append(defaultOption);

  costCenters.forEach((costCenter) => {
    const option = document.createElement("option");
    option.value = costCenter.name;
    option.textContent = costCenter.name;
    targetSelect.append(option);
  });

  targetSelect.value = costCenters.some((costCenter) => costCenter.name === currentValue) ? currentValue : "";
}

export function renderOrientationSelect(orientations) {
  const currentValue = responsibleOrientationSelect.value;
  responsibleOrientationSelect.innerHTML = "";

  if (orientations.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Primero cargá una orientación en Datos Maestros";
    responsibleOrientationSelect.append(option);
    responsibleOrientationSelect.disabled = true;
    return;
  }

  orientations.forEach((orientation) => {
    const option = document.createElement("option");
    option.value = orientation.name;
    option.textContent = orientation.name;
    responsibleOrientationSelect.append(option);
  });

  responsibleOrientationSelect.value = orientations.some((orientation) => orientation.name === currentValue)
    ? currentValue
    : (orientations[0]?.name || "");
  responsibleOrientationSelect.disabled = false;
}
