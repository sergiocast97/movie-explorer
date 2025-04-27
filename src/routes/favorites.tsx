import { createFileRoute } from '@tanstack/react-router'
import { useFavoriteShows } from '../hooks/useFavoriteShows'
import type { Show } from '../hooks/useShow'

export const Route = createFileRoute('/favorites')({
  component: Favorites,
})

function Favorites() {
  // Favorite shows
  const {
    data: favoriteShows,
    isLoading,
    isError,
  } = useFavoriteShows() as {
    data: Array<Show> | undefined
    isLoading: boolean
    isError: boolean
  }

  // Loading state
  if (isLoading) {
    return <div>Loading favorites...</div>
  }

  // Error state
  if (isError) {
    return <div>Error fetching favorite shows.</div>
  }

  // Empty state
  if (!favoriteShows || favoriteShows.length === 0) {
    return <div>No favorites added yet.</div>
  }

  return (
    <>
      <h1>Favorites</h1>
      <ul>
        {favoriteShows.map((show) => (
          <li key={show.id}>
            <h2>{show.name}</h2>
            <img src={show.image.medium} alt={show.name} />
          </li>
        ))}
      </ul>
    </>
  )
}
