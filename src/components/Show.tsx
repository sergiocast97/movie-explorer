import { useShow } from '../hooks/useShow'

interface ShowDetailsProps {
  id: number
}

export default function Shows({ id }: ShowDetailsProps) {
  const { data: show, isLoading, isError } = useShow(id)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching shows.</div>
  }

  return (
    <div>
      <h1 className="">{show.name}</h1>
      <p>{show.summary}</p>
      <img src={show.image?.medium} alt={show.name} />
    </div>
  )
}
