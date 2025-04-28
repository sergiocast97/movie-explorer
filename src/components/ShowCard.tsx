import { Link } from '@tanstack/react-router'

interface ShowCardProps {
  id: number
  name: string
  image: string
  summary: string
}

export default function ShowCard({ id, name, image, summary }: ShowCardProps) {
  return (
    <Link
      to="/show/$showId"
      params={{ showId: id.toString() }}
      className="show-card"
    >
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{summary}</p>
    </Link>
  )
}
