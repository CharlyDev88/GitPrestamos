// Paginador común para listas y tablas: muestra una página y oculta el resto (sin quitarlo del DOM,
// así las listas que forman parte de un formulario siguen enviando lo que está en otras páginas).
// La página se recuerda por lista y vuelve a 1 cuando cambian los filtros (signature).

const pages = new Map();

function pagerFor(anchor, key) {
  let pager = anchor.nextElementSibling;
  if (!pager || pager.dataset.pager !== key) {
    pager = document.createElement("div");
    pager.className = "returns-pagination js-pager";
    pager.dataset.pager = key;

    const prev = document.createElement("button");
    prev.type = "button";
    prev.className = "button button--ghost";
    prev.textContent = "Anterior";
    prev.dataset.step = "-1";

    const info = document.createElement("span");
    info.className = "js-pager-info";

    const next = document.createElement("button");
    next.type = "button";
    next.className = "button button--ghost";
    next.textContent = "Siguiente";
    next.dataset.step = "1";

    pager.append(prev, info, next);
    anchor.after(pager);
  }
  return pager;
}

/**
 * @param {Element[]} elements  elementos de la lista (tarjetas o filas)
 * @param {object} options
 *   key: nombre único de la lista
 *   anchor: elemento después del cual va el paginador
 *   pageSize: elementos por página
 *   label: texto del total ("materiales", "movimientos", ...)
 *   signature: filtros actuales; si cambian, se vuelve a la página 1
 */
export function paginateElements(elements, { key, anchor, pageSize = 10, label = "elementos", signature = "" }) {
  if (!anchor) return;
  const list = Array.from(elements);
  const saved = pages.get(key);
  const state = saved && saved.signature === signature ? saved : { page: 1, signature };
  const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
  state.page = Math.min(Math.max(1, state.page), totalPages);
  pages.set(key, state);

  const existing = anchor.nextElementSibling?.dataset?.pager === key ? anchor.nextElementSibling : null;
  if (list.length <= pageSize) {
    list.forEach((element) => { element.hidden = false; });
    existing?.remove();
    return;
  }

  const pager = pagerFor(anchor, key);
  const apply = () => {
    const start = (state.page - 1) * pageSize;
    list.forEach((element, index) => {
      element.hidden = index < start || index >= start + pageSize;
    });
    pager.querySelector('[data-step="-1"]').disabled = state.page <= 1;
    pager.querySelector('[data-step="1"]').disabled = state.page >= totalPages;
    pager.querySelector(".js-pager-info").textContent = `Página ${state.page} de ${totalPages} · ${list.length} ${label}`;
  };
  pager.onclick = (event) => {
    const button = event.target.closest("button[data-step]");
    if (!button || button.disabled) return;
    state.page += Number(button.dataset.step);
    apply();
    anchor.scrollTop = 0;
  };
  apply();
}

export function clearPager(anchor, key) {
  if (anchor?.nextElementSibling?.dataset?.pager === key) anchor.nextElementSibling.remove();
}
