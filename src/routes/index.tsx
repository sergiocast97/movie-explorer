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
    return (
      <div className="container py-8 grid place-items-center font-semibold text-lg md:text-xl">
        Loading...
      </div>
    )
  }

  // Display error
  if (isError) {
    return (
      <div className="container py-8 grid place-items-center font-semibold text-lg md:text-xl">
        Error fetching shows.
      </div>
    )
  }

  return (
    <section className="container py-8 lg:py-16">
      <div className="max-w-container-large mx-auto grid gap-x-8 gap-y-12 grid-cols-2 md:grid-cols-3">
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
      <div className="grid place-items-center p-4 pt-8">
        <button
          className="cursor-pointer inline-flex items-center gap-1 text-base font-semibold text-nowrap transition focus:outline-0 md:text-lg rounded-medium active:border-neutral-weak border-box border-2 px-4 py-2 border-neutral-900 text-neutral-900 dark:border-neutral-000 dark:text-neutral-000"
          onClick={() => setOffset((prev) => prev + limit)}
          disabled={isFetching}
        >
          {isFetching ? 'Loading...' : 'Show more'}
        </button>
      </div>
    </section>
  )
}
