import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useShows } from '../hooks/useShows'
import ShowCard from '../components/ShowCard'
import type { Show } from '../types/show'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  // Offset for Pagination
  const [offset, setOffset] = useState(0)
  // Pagination limit
  const limit = 18
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
      <div className="max-w-container-large mx-auto grid gap-8 md:grid-cols-4">
        {allShows.map((show: Show) => (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image.medium}
            summary={show.summary}
          />
        ))}
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
