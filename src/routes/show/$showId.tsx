import { createFileRoute, useParams } from '@tanstack/react-router'
import { useShow } from '../../hooks/useShow'
import { stripHtml } from '../../utils/stripHtml'
import type { Show } from '../../types/show'
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
    return <div>Loading...</div>
  }

  // Error state
  if (isError) {
    return <div>Error fetching shows.</div>
  }

  // In case show is not found
  if (!show) {
    return <div>No show data available.</div>
  }

  return (
    <>
      <div className="mx-auto grid gap-6 md:gap-8 lg:grid-cols-2">
        <div className="">
          <img src={show.image.original} alt={show.name} />
        </div>
        <div>
          <FavoriteButton id={parseInt(showId)} />
          <h1 className="text-5xl font-bold">{show.name}</h1>
          <p>Type: {show.type}</p>
          <p>Language: {show.language}</p>
          <p>Genres: {show.genres.join(', ')}</p>
          <p>Status: {show.status}</p>
          <p>Premiered: {show.premiered}</p>
          <p>Ended: {show.ended}</p>
          <p>Official Site: {show.officialSite}</p>
          <p>Rating: {show.rating.average}</p>
          <p>{stripHtml(show.summary)}</p>
        </div>
      </div>
    </>
  )
}
