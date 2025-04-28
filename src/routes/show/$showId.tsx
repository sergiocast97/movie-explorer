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
      <div>
        <img src={show.image.original} alt={show.name} />
        <h1 className="">{show.name}</h1>
        <p>{show.type}</p>
        <p>{show.language}</p>
        <p>{show.genres.join(', ')}</p>
        <p>{show.status}</p>
        <p>{show.premiered}</p>
        <p>{show.ended}</p>
        <p>{show.officialSite}</p>
        <p>{show.rating.average}</p>
        <p>{stripHtml(show.summary)}</p>
        <FavoriteButton id={parseInt(showId)} />
      </div>
    </>
  )
}
