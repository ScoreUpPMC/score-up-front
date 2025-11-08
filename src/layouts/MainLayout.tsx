import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import Hero from '../components/Hero'

export function MainLayout() {
  const { pathname } = useLocation()
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Navbar />
      <main className="">
        {pathname === '/' && <Hero />}
        <Outlet />
      </main>
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-[1100px] px-4 py-5 text-sm/6 opacity-90">
          <p>© {new Date().getFullYear()} ScoreUp. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
