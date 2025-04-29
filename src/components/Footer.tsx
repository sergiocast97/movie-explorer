import Logo from '@/components/Logo'
import NavItems from '@/components/NavItems'

export default function FooterOne() {
  return (
    <footer data-theme="dark">
      <div className="bg-dark-darkest text-dark-white">
        <div className="container flex flex-col justify-between gap-8 py-12 lg:py-16 md:flex-row md:items-center">
          <Logo />
          <NavItems />
        </div>
      </div>
    </footer>
  )
}
