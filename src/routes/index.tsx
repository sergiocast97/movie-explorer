import { createFileRoute } from '@tanstack/react-router'

import Shows from '../components/Shows'
import Show from '../components/Show'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <Show id={3} />
      <Shows />
    </div>
  )
}
