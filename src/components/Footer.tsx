import Logo from '@/components/Logo'
import NavItems from '@/components/NavItems'

export default function FooterOne() {
  return (
    <footer data-theme="dark">
      <div className="bg-dark-dark text-dark-white">
        <div className="container flex justify-between gap-8 py-12 lg:py-16 flex-row md:items-center">
          <Logo />
          <NavItems />
        </div>
      </div>
    </footer>
  )
}
