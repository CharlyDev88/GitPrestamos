import { formatCurrencyNumber, formatDateTime } from "./format.js";

// Cálculos de compra compartidos por "Confirmar pedido" y "Factura de compra".
// Deben coincidir con src/services/purchases.js del servidor.

export const round = (value, decimals = 2) => {
  const factor = 10 ** decimals;
  return Math.round((Number(value) + Number.EPSILON) * factor) / factor;
};

export const money = (value) => `$ ${formatCurrencyNumber(value)}`;

// cantidad × costo − bonificación (porcentaje o importe).
export function computeLine(quantity, unitCost, discountType, discountValue) {
  const gross = round(quantity * unitCost);
  const discount = discountType === "percent" ? round((gross * discountValue) / 100) : round(discountValue);
  return { gross, discount, subtotal: round(gross - discount) };
}

// Aviso (no bloqueante) si el total no es el subtotal ni el subtotal ± retenciones (igual que el servidor).
export function invoiceTotalWarning(subtotal, withholdings, totalText) {
  if (totalText === "" || totalText === null || totalText === undefined) return "";
  const total = round(Number(totalText));
  const minus = round(subtotal - withholdings);
  const plus = round(subtotal + withholdings);
  const matches = [round(subtotal), minus, plus].some((expected) => Math.abs(total - expected) < 0.01);
  if (matches) return "";
  return withholdings
    ? `El total de factura no coincide con el subtotal (${money(subtotal)}), ni con el subtotal menos retenciones (${money(minus)}), ni con el subtotal más retenciones (${money(plus)}). Revisalo antes de guardar.`
    : `El total de factura no coincide con el subtotal (${money(subtotal)}). Revisalo antes de guardar.`;
}

// Texto del último costo de compra de un material (o "" si nunca se compró).
export function lastPurchaseText(item) {
  if (item.lastPurchaseCost === undefined || item.lastPurchaseCost === null) return "";
  const parts = [`Último costo ${money(item.lastPurchaseCost)}`];
  if (item.lastPurchaseAt) parts.push(formatDateTime(item.lastPurchaseAt));
  if (item.lastPurchaseSupplier) parts.push(item.lastPurchaseSupplier);
  if (item.lastPurchaseInvoice) parts.push(`Fact. ${item.lastPurchaseInvoice}`);
  return parts.join(" · ");
}
