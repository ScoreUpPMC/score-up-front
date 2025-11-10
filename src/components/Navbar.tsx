import { NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <header className="navbar border-b border-black/10 bg-white sticky top-0">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-4  ">
        <NavLink to="/" className="text-lg font-bold text-black">
        <img className="w-35 h-18 object-contain" src='src/assets/logoScoreUp.png' alt="ScoreUp" />

        </NavLink>

        <ul className="flex gap-8">
          <li>
            <NavLink to="/features" className="text-black transition-colors hover:text-[#038dff]">Características</NavLink>
          </li>
          <li>
            <NavLink to="/how-it-works" className="text-black transition-colors hover:text-[#038dff]">Cómo Funciona</NavLink>
          </li>
          <li>
            <NavLink to="/testimonials" className="text-black transition-colors hover:text-[#038dff]">Testimonios</NavLink>
          </li>
          <li>
            <NavLink to="/pricing" className="text-black transition-colors hover:text-[#038dff]">Precios</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-black transition-colors hover:text-[#038dff]">Contacto</NavLink>
          </li>
        </ul>

        <NavLink to="/demo" className="rounded-lg bg-[#038dff] px-4 py-2 font-bold text-white">Solicitar una Demo</NavLink>
      </nav>
    </header>
  )
}
