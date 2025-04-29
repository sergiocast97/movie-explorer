/**
 * Converts a date string in the format YYYY-MM-DD into a Date object
 * @param dateString - The date string to convert
 * @returns A Date object, or null if the input is invalid
 */
export function parseDate(dateString: string): Date | null {
  if (!dateString) return null
  const [year, month, day] = dateString.split('-').map(Number)

  // Validate the parsed values
  if (!year || !month || !day) return null

  // Create and return the Date object
  return new Date(year, month - 1, day) // Month is 0-indexed in JavaScript Date
}
