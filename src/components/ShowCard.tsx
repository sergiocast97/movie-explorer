import { Link } from '@tanstack/react-router'
import { stripHtml } from '@/utils/stripHtml'

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
      className="w-full group"
    >
      <img
        src={image}
        alt={name}
        className="rounded-large aspect-[3/4] w-full object-cover bg-light-light dark:bg-dark-medium group-hover:scale-[103%] transition-transform"
        loading="lazy"
      />
      <div className="text-light-dark dark:text-dark-lightest pt-4">
        <h3 className="text-light-darkest dark:text-dark-white text-lg font-bold md:text-xl">
          {name}
        </h3>
        <p className=" mt-1 text-base md:text-lg line-clamp-3">
          {stripHtml(summary)}
        </p>
      </div>
    </Link>
  )
}
