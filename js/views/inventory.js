import { state } from "../state.js";
import {
  inventoryCategoryFilter,
  inventoryList,
  inventoryLocationFilter,
  inventorySearch,
  inventoryTemplate,
  lowStockCategoryFilter,
  lowStockList,
  lowStockLocationFilter,
  lowStockSearch,
} from "../dom.js";
import { formatDateTime } from "../utils/format.js";
import { lastPurchaseText, money } from "../utils/purchaseMath.js";
import { createEmptyState, syncSelectOptions } from "../ui/layout.js";
import { clearPager, paginateElements } from "../ui/pager.js";

// Inventario y alertas de stock bajo.
export function renderInventory(items) {
  inventoryList.innerHTML = "";
  const filteredItems = filterInventoryItems(items);

  if (items.length === 0) {
    inventoryList.append(createEmptyState("Todavía no hay elementos cargados."));
    clearPager(inventoryList, "inventory");
    return;
  }

  if (filteredItems.length === 0) {
    inventoryList.append(createEmptyState("No hay elementos que coincidan con los filtros aplicados."));
    clearPager(inventoryList, "inventory");
    return;
  }

  filteredItems.forEach((item) => {
    const fragment = inventoryTemplate.content.cloneNode(true);
    const article = fragment.querySelector(".item-card");

    if (item.stock <= (item.stockMinimum ?? 2)) {
      article.classList.add("is-low-stock");
    }

    fragment.querySelector(".pill").textContent = item.category;
    fragment.querySelector("h3").textContent = item.name;
    fragment.querySelector(".item-card__stock").textContent = `${item.stock} en stock`;
    fragment.querySelector(".item-card__meta").textContent =
      `Código: ${item.code}${item.subcode ? ` · Subcódigo: ${item.subcode}` : ""} · Ubicación: ${item.location || "Sin definir"}`;
    const cost = fragment.querySelector(".item-card__cost");
    if (cost) {
      cost.textContent = `Costo unitario promedio ${money(item.amount ?? 0)}`;
      const last = lastPurchaseText(item);
      if (last) {
        const small = document.createElement("small");
        small.textContent = last;
        cost.append(small);
      }
    }
    fragment.querySelector(".item-card__notes").textContent =
      `${item.notes || "Sin observaciones."} · Stock mínimo: ${item.stockMinimum ?? 0} · Alta: ${formatDateTime(item.createdAt)}`;

    inventoryList.append(fragment);
  });
  paginateElements(inventoryList.children, { key: "inventory", anchor: inventoryList, pageSize: 12, label: "materiales", signature: JSON.stringify(state.inventoryFilters) });
}

export function renderInventoryFilters(items) {
  const categories = (state.dashboard?.categories || []).map((category) => category.name);
  const locations = (state.dashboard?.locations || []).map((location) => location.name);

  syncSelectOptions(inventoryCategoryFilter, categories, "Todas");
  syncSelectOptions(inventoryLocationFilter, locations, "Todas");
  inventorySearch.value = state.inventoryFilters.search;
  inventoryCategoryFilter.value = state.inventoryFilters.category;
  inventoryLocationFilter.value = state.inventoryFilters.location;
}

export function filterInventoryItems(items) {
  const { search, category, location } = state.inventoryFilters;

  return items.filter((item) => {
    const matchesSearch =
      !search ||
      [
        item.name,
        item.code,
        item.subcode,
        item.location,
        item.notes,
        item.category,
      ]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(search));
    const matchesCategory = !category || item.category === category;
    const matchesLocation = !location || item.location === location;

    return matchesSearch && matchesCategory && matchesLocation;
  });
}

export function renderLowStockFilters(items) {
  const categories = (state.dashboard?.categories || []).map((category) => category.name);
  const locations = (state.dashboard?.locations || []).map((location) => location.name);

  syncSelectOptions(lowStockCategoryFilter, categories, "Todas");
  syncSelectOptions(lowStockLocationFilter, locations, "Todas");
  lowStockSearch.value = state.lowStockFilters.search;
  lowStockCategoryFilter.value = state.lowStockFilters.category;
  lowStockLocationFilter.value = state.lowStockFilters.location;
}

export function filterLowStockItems(items) {
  const { search, category, location } = state.lowStockFilters;

  return items.filter((item) => {
    const minimum = Number(item.stockMinimum ?? 0);
    const matchesSearch =
      !search ||
      [item.name, item.code, item.subcode, item.location, item.notes, item.category]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(search));
    const matchesCategory = !category || item.category === category;
    const matchesLocation = !location || item.location === location;
    const hasLowStock = Number(item.stock) <= minimum;

    return hasLowStock && matchesSearch && matchesCategory && matchesLocation;
  });
}

export function renderLowStockItems(items) {
  lowStockList.innerHTML = "";
  const filteredItems = filterLowStockItems(items);
  const allLowStockItems = items.filter((item) => Number(item.stock) <= Number(item.stockMinimum ?? 0));

  if (allLowStockItems.length === 0) {
    lowStockList.append(createEmptyState("No hay materiales con stock bajo en este momento."));
    clearPager(lowStockList, "lowStock");
    return;
  }

  if (filteredItems.length === 0) {
    lowStockList.append(createEmptyState("No hay materiales con stock bajo que coincidan con los filtros aplicados."));
    clearPager(lowStockList, "lowStock");
    return;
  }

  filteredItems.forEach((item) => {
    const fragment = inventoryTemplate.content.cloneNode(true);
    fragment.querySelector(".pill").textContent = item.category;
    fragment.querySelector(".pill").classList.add("pill--alert");
    fragment.querySelector("h3").textContent = item.name;
    fragment.querySelector(".item-card__stock").textContent = `${item.stock} en stock`;
    fragment.querySelector(".item-card__meta").textContent =
      `${item.code}${item.subcode ? `-${item.subcode}` : ""} · ${item.location || "Sin ubicación"} · Mínimo ${item.stockMinimum ?? 0}`;
    const cost = fragment.querySelector(".item-card__cost");
    if (cost) {
      cost.textContent = `Costo unitario promedio ${money(item.amount ?? 0)}`;
      const last = lastPurchaseText(item);
      if (last) {
        const small = document.createElement("small");
        small.textContent = last;
        cost.append(small);
      }
    }
    fragment.querySelector(".item-card__notes").textContent = item.notes || "Sin observaciones.";
    lowStockList.append(fragment);
  });
  paginateElements(lowStockList.children, { key: "lowStock", anchor: lowStockList, pageSize: 12, label: "materiales", signature: JSON.stringify(state.lowStockFilters) });
}
