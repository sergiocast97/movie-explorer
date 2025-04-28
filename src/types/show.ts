/**
 * Show object interface
 * Note: These are not all the fields, just the ones used
 * @see https://api.tvmaze.com/shows/:id
 */
export interface Show {
  id: number // Show ID on TV Maze
  url: string // Page URL
  name: string // Show name
  type: string // Type (Scripted, Animated, Reality...)
  language: string // Original language
  genres: Array<string> // List of genres
  status: string // Status (Running, Ended...)
  premiered: string // Premiere date (YYYY-MM-DD)
  ended: string // End date (YYYY-MM-DD)
  officialSite: string // Official site URL
  rating: {
    average: number // Average rating
  }
  image: {
    medium: string // Preview
    original: string // Original
  }
  summary: string // Summary in HTML
}
