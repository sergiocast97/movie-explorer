import { createFileRoute } from '@tanstack/react-router'
import { useFavoriteShows } from '../hooks/useFavoriteShows'
import ShowCard from '../components/ShowCard'
import type { Show } from '../types/show'

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
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image.medium}
            summary={show.summary}
          />
        ))}
      </ul>
    </>
  )
}
