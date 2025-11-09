import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import Hero from '../components/Hero'

export function MainLayout() {
  const { pathname } = useLocation()
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Navbar />
      <main className=" text-black ">
        {pathname === '/' && <Hero />}
        <Outlet />
      </main>
      <footer className="text-black border-t border-black">
        <div className="mx-auto max-w-[1100px] px-4 py-5 text-sm/6 opacity-90">
          <p>© {new Date().getFullYear()} ScoreUp. Todos los derechos reservados.</p>
          <p>Desarrollado para la materia "diseño de productos e innovacion en TI"</p>
        </div>
      </footer>
    </div>
  )
}
