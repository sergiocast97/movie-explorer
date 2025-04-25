import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>

        <div className="">
          <Link to="/favorites">Favorites</Link>
        </div>
      </nav>
    </header>
  )
}
