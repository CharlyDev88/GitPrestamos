// Unidades de medida y motivos de baja (deben coincidir con src/services/items.js).
// "decimals": admite cantidades con decimales (metros, kilos, litros).
export const UNITS = [
  { value: "unidad", label: "Unidad", short: "u.", decimals: false },
  { value: "par", label: "Par", short: "par(es)", decimals: false },
  { value: "juego", label: "Juego", short: "jgo.", decimals: false },
  { value: "caja", label: "Caja", short: "caja(s)", decimals: false },
  { value: "paquete", label: "Paquete", short: "paq.", decimals: false },
  { value: "bolsa", label: "Bolsa", short: "bolsa(s)", decimals: false },
  { value: "rollo", label: "Rollo", short: "rollo(s)", decimals: false },
  { value: "metro", label: "Metro", short: "m", decimals: true },
  { value: "kilogramo", label: "Kilogramo", short: "kg", decimals: true },
  { value: "gramo", label: "Gramo", short: "g", decimals: true },
  { value: "litro", label: "Litro", short: "l", decimals: true },
  { value: "mililitro", label: "Mililitro", short: "ml", decimals: true },
];

export const WRITE_OFF_REASONS = [
  "Rotura o daño irreparable",
  "Desgaste / fin de vida útil",
  "Pérdida o extravío",
  "Robo o hurto",
  "Vencimiento",
  "Obsolescencia / desuso",
  "Donación o transferencia a otra institución",
  "Otro",
];

export const unitOf = (itemOrUnit) => {
  const value = typeof itemOrUnit === "string" ? itemOrUnit : itemOrUnit?.unit;
  return UNITS.find((unit) => unit.value === value) || UNITS[0];
};

// "12 u.", "2,5 m", "3 caja(s)".
export function formatQuantity(quantity, itemOrUnit) {
  const number = Number(quantity || 0);
  const text = Number.isInteger(number) ? String(number) : number.toLocaleString("es-AR", { maximumFractionDigits: 3 });
  return `${text} ${unitOf(itemOrUnit).short}`;
}

// Paso del campo de cantidad: enteros para unidades contables, decimales para metros, kilos, litros.
export const quantityStep = (itemOrUnit) => (unitOf(itemOrUnit).decimals ? "0.01" : "1");

export const isRetired = (item) => Boolean(item?.retiredAt);

// Completa los <select data-unit-select> con las unidades.
export function fillUnitSelects(root = document) {
  root.querySelectorAll("select[data-unit-select]").forEach((select) => {
    if (select.options.length) return;
    UNITS.forEach((unit) => {
      const option = document.createElement("option");
      option.value = unit.value;
      option.textContent = unit.label;
      select.append(option);
    });
    select.value = "unidad";
  });
}
