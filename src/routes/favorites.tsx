import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/favorites')({
  component: Favorites,
})

function Favorites() {
  return (
    <>
      <h1>Favorites</h1>
    </>
  )
}
