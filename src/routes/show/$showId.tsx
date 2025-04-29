import { createFileRoute, useParams } from '@tanstack/react-router'
import type { Show } from '@/types/show'
import { useShow } from '@/hooks/useShow'
import { stripHtml } from '@/utils/stripHtml'
import FavoriteButton from '@/components/FavoriteButton'

export const Route = createFileRoute('/show/$showId')({
  component: RouteComponent,
})

function RouteComponent() {
  // Get ID from URL
  const { showId } = useParams({ from: '/show/$showId' })

  const {
    data: show, // Show data
    isLoading, // Loading state
    isError, // Error state
  } = useShow(parseInt(showId)) as {
    data: Show | undefined
    isLoading: boolean
    isError: boolean
  }

  // Loading state
  if (isLoading) {
    return <div className="container py-8">Loading...</div>
  }

  // Error state
  if (isError) {
    return <div className="container py-8">Error fetching shows.</div>
  }

  // In case show is not found
  if (!show) {
    return <div className="container py-8">No show data available.</div>
  }

  return (
    <section className="container mx-auto py-8 lg:py-16">
      <div className="mx-auto grid gap-6 md:gap-8 lg:grid-cols-12">
        <div className="col-span-5">
          <img
            className="w-full h-auto rounded-large"
            src={show.image.original}
            alt={show.name}
          />
        </div>
        <div className="col-span-7 flex flex-col gap-4">
          {/*
          <FavoriteButton id={parseInt(showId)} />
          <p>Type: {show.type}</p>
          <p>Language: {show.language}</p>
          <p>Genres: {show.genres.join(', ')}</p>
          <p>Status: {show.status}</p>
          <p>Premiered: {show.premiered}</p>
          <p>Ended: {show.ended}</p>
          <p>Official Site: {show.officialSite}</p>
          <p>Rating: {show.rating.average}</p>
          */}
          <h1 className="text-5xl font-bold text-balance">{show.name}</h1>
          <p className="text-lg text-light-dark dark:text-dark-lightest">
            {stripHtml(show.summary)}
          </p>
        </div>
      </div>
    </section>
  )
}
