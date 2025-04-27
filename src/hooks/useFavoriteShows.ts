import { useQuery } from '@tanstack/react-query'
import { getFavoriteShowIds } from '../utils/localStorage'
import type { Show } from './useShow'

/**
 * Function to fetch favorite shows by ID from TVMaze
 * @param ids Array of IDs
 * @returns Array of shows
 */
const fetchFavoriteShows = async (ids: Array<number>) => {
  // List of shows as promises
  const shows = await Promise.all(
    ids.map(async (id) => {
      // Fetch show by ID
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
      // Handle error
      if (!response.ok) throw new Error('Network response was not ok')
      // Return show
      return await response.json()
    }),
  )
  // Return list of shows
  return (await shows) as Array<Show>
}

/**
 * Hook to fetch favorite shows
 * @returns Favorite shows query
 */
export const useFavoriteShows = () => {
  const favoriteIds = getFavoriteShowIds()

  return useQuery({
    queryKey: ['favoriteShows', favoriteIds],
    queryFn: () => fetchFavoriteShows(favoriteIds),
    enabled: favoriteIds.length > 0, // Only fetch if there are favorite IDs
  })
}
