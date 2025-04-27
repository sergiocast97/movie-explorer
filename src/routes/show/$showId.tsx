import { createFileRoute, useParams } from '@tanstack/react-router'
import { useShow } from '../../hooks/useShow'
import type { Show } from '../../hooks/useShow'

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

  if (isLoading) {
    return <div>Loading show details...</div>
  }

  if (isError) {
    return <div>Error fetching show details.</div>
  }

  if (!show) {
    return <div>Show not found.</div>
  }

  return (
    <div>
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
      <img src={show.image.medium} alt={show.name} />
    </div>
  )
}
