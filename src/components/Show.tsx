import { useEffect, useState } from 'react'
import {
  addFavoriteShowId,
  getFavoriteShowIds,
  removeFavoriteShowId,
} from '../utils/localStorage'
import { useShow } from '../hooks/useShow'
import type { Show } from '../hooks/useShow'

export default function Shows({ id }: { id: number }) {
  const {
    data: show, // Show data
    isLoading, // Loading state
    isError, // Error state
  } = useShow(id) as {
    data: Show | undefined
    isLoading: boolean
    isError: boolean
  }

  // Favorite status
  const [isFavorite, setIsFavorite] = useState(false)

  // TODO: Check if needed
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

  // Loading state
  if (isLoading) {
    return <div>Loading...</div>
  }

  // Error state
  if (isError) {
    return <div>Error fetching shows.</div>
  }

  // In case show is not found
  if (!show) {
    return <div>No show data available.</div>
  }

  return (
    <div>
      <h1 className="">{show.name}</h1>
      <p>{show.summary}</p>
      <img src={show.image.medium} alt={show.name} />
      <button onClick={toggleFavorite}>
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </button>
    </div>
  )
}
