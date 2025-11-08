export default function Features() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-[1100px] px-4">
        <h2 className="text-2xl font-semibold">Funcionalidades</h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          <li className="list-none rounded-lg border border-white/20 px-4 py-3">Enrutamiento con React Router</li>
          <li className="list-none rounded-lg border border-white/20 px-4 py-3">Componentes reutilizables (Navbar, Layout)</li>
          <li className="list-none rounded-lg border border-white/20 px-4 py-3">Estructura clara de páginas</li>
          <li className="list-none rounded-lg border border-white/20 px-4 py-3">Estilos simples y responsivos</li>
        </ul>
      </div>
    </section>
  )
}
