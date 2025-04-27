import { keepPreviousData, useQuery } from '@tanstack/react-query'
import type { Show } from './useShow'

/**
 * Function to fetch a specicic number of shows from the TVmaze API
 * @param offset First show
 * @param limit Last show
 * @returns List of shows
 */
const fetchShows = async (offset: number, limit: number) => {
  const response = await fetch('https://api.tvmaze.com/shows')
  // Handling errors
  if (!response.ok) throw new Error('Network response was not ok')
  // First, get all shows
  const allShows = (await response.json()) as Array<Show>
  // Return a determined number of shows
  return allShows.slice(offset, offset + limit)
}

/**
 * Hook to fetch a list of shows
 * @param offset First show
 * @param limit Last show
 * @returns List of shows query
 */
export const useShows = (offset: number, limit: number) => {
  return useQuery({
    queryKey: ['shows', offset, limit],
    queryFn: () => fetchShows(offset, limit),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
