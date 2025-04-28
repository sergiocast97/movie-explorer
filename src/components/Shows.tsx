import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useShows } from '../hooks/useShows'
import type { Show } from '../types/show'

export default function Shows() {
  // Offset for Pagination
  const [offset, setOffset] = useState(0)
  // Pagination limit
  const limit = 20
  // Accumulated list of shows
  const [allShows, setAllShows] = useState<Array<Show>>([])

  // Fetch shows through hook
  const {
    data: shows,
    isLoading,
    isError,
    isFetching,
  } = useShows(offset, limit)

  // Add new shows to existing list
  useEffect(() => {
    if (shows) {
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
          {allShows.map((show: Show) => (
            <Link
              to="/show/$showId"
              params={{ showId: show.id.toString() }}
              key={show.id}
            >
              <li>{show.name}</li>
            </Link>
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
