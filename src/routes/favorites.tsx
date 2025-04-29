import { createFileRoute } from '@tanstack/react-router'
import type { Show } from '@/types/show'
import { useFavoriteShows } from '@/hooks/useFavoriteShows'
import ShowCard from '@/components/ShowCard'

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
    return <div className="container py-8">Loading favorites...</div>
  }

  // Error state
  if (isError) {
    return <div className="container py-8">Error fetching favorite shows.</div>
  }

  // Empty state
  if (!favoriteShows || favoriteShows.length === 0) {
    return <div className="container py-8">No favorites added yet.</div>
  }

  return (
    <section className="container py-8 lg:py-16">
      <h1 className="text-5xl font-bold pb-8">Favorites</h1>
      <div className="max-w-container-large mx-auto grid gap-8 grid-cols-2 md:grid-cols-3">
        {favoriteShows.map((show) => (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image.original}
            summary={show.summary}
          />
        ))}
      </div>
    </section>
  )
}
