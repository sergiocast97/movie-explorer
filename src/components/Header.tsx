import { Link } from '@tanstack/react-router'

export default function Header() {
  const items = [
    { name: 'Home', url: '/' },
    { name: 'Favorites', url: '/favorites' },
  ]

  return (
    <header className="py-6 lg:pt-12">
      <nav className="flex items-center justify-between gap-8">
        <div></div>

        <div className="items-baseline justify-end gap-8 lg:flex lg:gap-12 flex gap-x-6 gap-y-4 md:gap-x-8">
          {items.map((item) => (
            <Link
              className="text-light-darkest dark:text-dark-white text-base font-semibold md:text-lg"
              to={item.url}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
