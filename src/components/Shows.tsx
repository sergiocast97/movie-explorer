import { useShows } from '../hooks/useShows'

export default function Shows() {
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
        <ul>
          {shows.map((show: any) => (
            <li key={show.id}>{show.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
