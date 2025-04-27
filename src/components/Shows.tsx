import { useEffect, useState } from 'react'
import { useShows } from '../hooks/useShows'
import type { Show } from '../hooks/useShows'

export default function Shows() {
  // Offset for Pagination
  const [offset, setOffset] = useState(0)
  // Pagination limit
  const limit = 20
  // Fetch shows through hook
  const {
    data: shows,
    isLoading,
    isError,
    isFetching,
  } = useShows(offset, limit)

  const [allShows, setAllShows] = useState<Array<Show>>([]) // Shown shows

  // Add new shows to existing list
  useEffect(() => {
    if (shows && !isFetching) {
      setAllShows((prev) => [...prev, ...shows])
    }
  }, [shows])

  // Loading initial shows
  if (isLoading && offset === 0) {
    return <div>Loading...</div>
  }

  // Display error
  if (isError) {
    return <div>Error fetching shows.</div>
  }

  return (
    <>
      <div>
        <ul>
          {allShows.map((show: any) => (
            <li key={show.id}>{show.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <button
          onClick={() => setOffset((prev) => prev + limit)}
          disabled={isFetching}
        >
          {isFetching ? 'Loading...' : 'Show more'}
        </button>
      </div>
    </>
  )
}
