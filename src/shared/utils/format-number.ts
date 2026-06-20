export function formatPrice(number?: number) {
  if (!number) return;
  return number.toLocaleString("ru-RU");
}
