import { NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <header className="navbar border-b border-black/10 bg-white sticky top-0">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-4  ">
        <NavLink to="/" className="text-lg font-bold text-black">
        <img className="w-35 h-18 object-contain" src={`${import.meta.env.BASE_URL}/logoScoreUp.png`} alt="ScoreUp" />

        </NavLink>

        <ul className="flex gap-8">
          <li>
            <a href="/features" className="text-black transition-colors hover:text-[#038dff]">Características</a>
          </li>
          <li>
            <a href="/how-it-works" className="text-black transition-colors hover:text-[#038dff]">Cómo Funciona</a>
          </li>
          <li>
            <a href="/testimonials" className="text-black transition-colors hover:text-[#038dff]">Testimonios</a>
          </li>
          <li>
            <a href="/pricing" className="text-black transition-colors hover:text-[#038dff]">Precios</a>
          </li>
          <li>
            <a href="/contact" className="text-black transition-colors hover:text-[#038dff]">Contacto</a>
          </li>
        </ul>

        <a href="/demo" className="rounded-lg bg-[#038dff] px-4 py-2 font-bold text-white">Solicitar una Demo</a>
      </nav>
    </header>
  )
}
