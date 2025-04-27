// Local Storage key
const FAVORITES_KEY = 'favoriteShows'

/**
 * Get list of fav shows from local storage
 * @returns List of show IDs
 */
export const getFavoriteShowIds = (): Array<number> => {
  // Get list from Local Storage
  const stored = localStorage.getItem(FAVORITES_KEY)
  // Return list of IDs or empty array
  return stored ? JSON.parse(stored) : []
}

/**
 * Add show ID to list
 * @param id Show ID
 */
export const addFavoriteShowId = (id: number) => {
  // Get list from local storage
  const favorites = getFavoriteShowIds()
  // If ID is not in list, add it
  if (!favorites.includes(id)) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites, id]))
  }
}

/**
 * Remove show ID from list
 * @param id Show ID
 */
export const removeFavoriteShowId = (id: number) => {
  // Get list from local storage
  const favorites = getFavoriteShowIds()
  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(favorites.filter((favListId) => favListId !== id)),
  )
}
