export function formatDate(date?: string) {
  if (!date) return "";
  return new Date(date).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
