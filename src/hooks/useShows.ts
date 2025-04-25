import { useQuery } from '@tanstack/react-query'

const fetchShows = async () => {
  const response = await fetch('https://api.tvmaze.com/shows')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export const useShows = () => {
  return useQuery({
    queryKey: ['shows'],
    queryFn: fetchShows,
  })
}
