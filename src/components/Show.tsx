import { useShow } from '../hooks/useShow'
import type { Show } from '../hooks/useShow'

export default function Shows({ id }: { id: number }) {
  const {
    data: show, // Show data
    isLoading, // Loading state
    isError, // Error state
  } = useShow(id) as {
    data: Show | undefined
    isLoading: boolean
    isError: boolean
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching shows.</div>
  }

  if (!show) {
    return <div>No show data available.</div>
  }

  return (
    <div>
      <h1 className="">{show.name}</h1>
      <p>{show.summary}</p>
      <img src={show.image.medium} alt={show.name} />
    </div>
  )
}
