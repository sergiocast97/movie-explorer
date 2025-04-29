import Logo from '@/components/Logo'
import NavItems from '@/components/NavItems'

export default function Header() {
  return (
    <header className="container py-6 lg:pt-8 lg:pb-16">
      <nav className="flex items-center justify-between gap-8">
        <Logo />
        <NavItems />
      </nav>
    </header>
  )
}
