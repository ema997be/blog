/**
 * Format a date to a human-readable string
 * @param date The date to format
 * @returns Formatted date string (e.g., "February 26, 2025")
 */
export function formatDate(date: Date | string) {
  const d = typeof date === "string" ? new Date(date) : date;
  return d
    .toLocaleDateString("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(/^\d+ ([a-z])/, (m, l) => m.replace(l, l.toUpperCase()));
}
