import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import type { Show } from '@/types/show'
import { useShowList } from '@/hooks/useShowList'
import ShowCard from '@/components/ShowCard'

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
  } = useShowList(offset, limit)

  // Add new shows to existing list
  useEffect(() => {
    if (shows) {
      setAllShows((prev) => [...prev, ...shows])
    }
  }, [shows])

  // Loading initial shows
  if (isLoading && offset === 0) {
    return <div className="container py-8">Loading...</div>
  }

  // Display error
  if (isError) {
    return <div className="container py-8">Error fetching shows.</div>
  }

  return (
    <section className="container py-8 lg:py-16">
      <div className="max-w-container-large mx-auto grid gap-8 grid-cols-2 md:grid-cols-3">
        {allShows.map((show: Show) => (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image.original}
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
    </section>
  )
}
