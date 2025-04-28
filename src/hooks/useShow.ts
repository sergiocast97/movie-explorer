import { useQuery } from '@tanstack/react-query'
import type { Show } from '../types/show'

/**
 * Function to fetch show by ID from TVMaze
 * @param id ID of the show
 * @returns Individual show data
 */
const fetchShowById = async (id: number) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
  // Handle error
  if (!response.ok) throw new Error('Network response was not ok')
  // Return show
  return (await response.json()) as Show
}

/**
 * Hook to fetch a show by ID
 * @param id ID of the show
 * @returns Favorite shows query
 */
export const useShow = (id: number) => {
  return useQuery({
    queryKey: ['show', id],
    queryFn: () => fetchShowById(id),
    enabled: !!id, // Only fetch if ID
  })
}
