import { useShows } from '../hooks/useShows'

export default function Example() {
  const { data: shows, isLoading, isError } = useShows()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching shows.</div>
  }

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">TV Shows</h1>
        <ul>
          {shows.map((show: any) => (
            <li key={show.id} className="my-2">
              {show.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
