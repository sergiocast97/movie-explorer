import { beforeEach, describe, expect, it } from 'vitest'
import {
  addFavoriteShowId,
  getFavoriteShowIds,
  removeFavoriteShowId,
} from '@/utils/localStorage'

describe('localStorage utilities', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
  })

  it('Should ensure list is empty', () => {
    const favorites = getFavoriteShowIds()
    expect(favorites).toEqual([])
  })

  it('Should add favorite to list', () => {
    addFavoriteShowId(1)
    const favorites = getFavoriteShowIds()
    expect(favorites).toEqual([1])
  })

  it('Should remove favorite', () => {
    addFavoriteShowId(1)
    addFavoriteShowId(2)
    removeFavoriteShowId(1)
    const favorites = getFavoriteShowIds()
    expect(favorites).toEqual([2])
  })

  it('Should handle removing non-existing favorite', () => {
    addFavoriteShowId(1)
    removeFavoriteShowId(2) // ID 2 does not exist
    const favorites = getFavoriteShowIds()
    expect(favorites).toEqual([1])
  })
})
