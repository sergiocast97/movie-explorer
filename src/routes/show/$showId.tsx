import { createFileRoute, useParams } from '@tanstack/react-router'
import { StarIcon } from '@heroicons/react/24/solid'
import type { Show } from '@/types/show'
import { useShow } from '@/hooks/useShow'
import { stripHtml } from '@/utils/stripHtml'
import FavoriteButton from '@/components/FavoriteButton'
import { parseDate } from '@/utils/parseDate'

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
    return (
      <div className="container py-8 grid place-items-center font-semibold text-lg md:text-xl">
        Loading...
      </div>
    )
  }

  // Error state
  if (isError) {
    return (
      <div className="container py-8 grid place-items-center font-semibold text-lg md:text-xl">
        Error fetching shows.
      </div>
    )
  }

  // In case show is not found
  if (!show) {
    return (
      <div className="container py-8 grid place-items-center font-semibold text-lg md:text-xl">
        No show data available.
      </div>
    )
  }

  return (
    <section className="container mx-auto py-8 lg:py-16">
      <div className="mx-auto grid gap-6 md:gap-8 md:grid-cols-12">
        <div className="col-span-4 lg:col-span-5">
          <img
            className="w-full h-auto rounded-large"
            src={show.image.original}
            alt={show.name}
          />
        </div>
        <div className="col-span-8 lg:col-span-7 flex flex-col items-start">
          <div className="flex items-center justify-between w-full mb-2 gap-4">
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {show.genres.map((genre) => (
                <span
                  key={genre}
                  className="text-sm font-semibold text-light-darkest dark:text-dark-white bg-light-light dark:bg-dark-medium rounded-xs px-2 py-1"
                >
                  {genre}
                </span>
              ))}
            </div>

            <FavoriteButton id={parseInt(showId)} />
          </div>

          <h1 className="text-5xl font-bold text-balance mb-4">{show.name}</h1>
          <p className="text-base lg:text-lg text-light-dark dark:text-dark-lightest">
            {stripHtml(show.summary)}
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-1 mt-8">
            <p className="text-base text-light-dark dark:text-dark-lightest">
              Year:{' '}
              <span className="font-semibold text-light-darkest dark:text-dark-white ">
                {parseDate(show.premiered)?.getFullYear() ?? 'N/A'}
              </span>
            </p>
            <p className="text-base text-light-dark dark:text-dark-lightest">
              Language:{' '}
              <span className="font-semibold text-light-darkest dark:text-dark-white">
                {show.language}
              </span>
            </p>
            <div className="flex items-center gap-1">
              <StarIcon className="size-6 text-light-darkest dark:text-dark-white inline-block" />
              <span className="text-base text-light-dark dark:text-dark-lightest">
                <span className="text-light-darkest dark:text-dark-white font-semibold">
                  {show.rating.average ?? 'N/A'}
                </span>
                /10
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
