import { Link, useMatchRoute } from '@tanstack/react-router'
import { cn } from '@/utils/cn'

export default function NavItems() {
  const items = [
    { name: 'Home', url: '/' },
    { name: 'Favorites', url: '/favorites' },
  ]

  const matchRoute = useMatchRoute()

  return (
    <div className="items-baseline justify-end gap-8 lg:flex lg:gap-12 flex gap-x-6 gap-y-4 md:gap-x-8">
      {items.map((item) => {
        const isActive = matchRoute({ to: item.url })
        return (
          <Link
            className={cn(
              isActive
                ? 'text-light-darkest dark:text-dark-white hover:text-light-dark hover:dark:text-dark-lightest'
                : 'text-light-dark dark:text-dark-lightest hover:text-light-medium dark:hover:text-dark-light',
              ' transition text-base font-semibold md:text-lg',
            )}
            to={item.url}
          >
            {item.name}
          </Link>
        )
      })}
    </div>
  )
}
