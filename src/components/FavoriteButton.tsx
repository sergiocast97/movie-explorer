import { useEffect, useState } from 'react'
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
    <button onClick={toggleFavorite}>
      {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    </button>
  )
}
