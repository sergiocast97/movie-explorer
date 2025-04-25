import { useQuery } from '@tanstack/react-query'

const fetchShowById = async (id: number) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export const useShow = (id: number) => {
  return useQuery({
    queryKey: ['show', id],
    queryFn: () => fetchShowById(id),
    enabled: !!id, // Ensures the query only runs if an ID is provided
  })
}
