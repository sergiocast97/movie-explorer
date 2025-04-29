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
      <div className="pb-8 md:pb-12">
        <h1 className="text-5xl font-bold pb-2">Favorites</h1>
        <p className="text-lg text-light-dark dark:text-dark-lightest max-w-prose ">
          Here's a list of your fave shows!
        </p>
      </div>
      <div className="max-w-container-large mx-auto grid gap-x-8 gap-y-12 grid-cols-2 md:grid-cols-3">
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
