import { useEffect, useState } from 'react'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import {
  addFavoriteShowId,
  getFavoriteShowIds,
  removeFavoriteShowId,
} from '@/utils/localStorage'

export default function FavoriteButton({ id }: { id: number }) {
  // Favorite status
  const [isFavorite, setIsFavorite] = useState(false)

  // Check if show is favorite when ID changes
  useEffect(() => {
    const favorites = getFavoriteShowIds()
    setIsFavorite(favorites.includes(id))
  }, [id])

  // Toggle
  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteShowId(id)
    } else {
      addFavoriteShowId(id)
    }
    setIsFavorite(!isFavorite)
  }

  return (
    <button className="cursor-pointer p-1" onClick={toggleFavorite}>
      {isFavorite ? (
        <HeartIconSolid className="size-8 text-light-darkest dark:text-dark-lightest" />
      ) : (
        <HeartIconOutline className="size-8 text-light-darkest dark:text-dark-lightest" />
      )}
    </button>
  )
}
