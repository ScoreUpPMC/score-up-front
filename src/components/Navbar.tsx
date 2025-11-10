import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logoScoreUp.png'

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="navbar sticky top-0 z-50 border-b border-black/10 bg-white">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-2">
        <NavLink to="/" className="text-lg font-bold text-black">
          <img className="w-35 h-18 object-contain" src={logo} alt="ScoreUp" />
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
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

        {/* Desktop CTA */}
        <NavLink to="/demo" className="hidden rounded-lg bg-[#038dff] px-4 py-2 font-bold text-white md:inline-flex">Solicitar una Demo</NavLink>

        {/* Mobile toggle */}
        <button
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="inline-flex items-center rounded-md border border-neutral-200 p-2 text-black md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-neutral-200 bg-white shadow-md md:hidden">
          <div className="mx-auto max-w-[1100px] px-4 py-3">
            <nav className="grid gap-3">
              <NavLink to="/features" className="py-2 text-black transition-colors hover:text-[#038dff]" onClick={() => setOpen(false)}>Características</NavLink>
              <NavLink to="/how-it-works" className="py-2 text-black transition-colors hover:text-[#038dff]" onClick={() => setOpen(false)}>Cómo Funciona</NavLink>
              <NavLink to="/testimonials" className="py-2 text-black transition-colors hover:text-[#038dff]" onClick={() => setOpen(false)}>Testimonios</NavLink>
              <NavLink to="/pricing" className="py-2 text-black transition-colors hover:text-[#038dff]" onClick={() => setOpen(false)}>Precios</NavLink>
              <NavLink to="/contact" className="py-2 text-black transition-colors hover:text-[#038dff]" onClick={() => setOpen(false)}>Contacto</NavLink>
              <NavLink
                to="/demo"
                className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[#038dff] px-4 py-2 font-bold text-white"
                onClick={() => setOpen(false)}
              >
                Solicitar una Demo
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
