/**
 * Function to strip HTML tags from the summary
 * @param html Html string
 * @returns Plain text
 */
export const stripHtml = (html: string) => {
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = html
  return tempDiv.textContent || tempDiv.innerText || ''
}
