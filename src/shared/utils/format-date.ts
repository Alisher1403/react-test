export function formatDate(date?: string) {
  if (!date) return "";
  return new Date(date).toLocaleString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
