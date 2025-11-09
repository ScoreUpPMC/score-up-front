export default function Hero() {
  return (
    <section className="bg-[#f8f9fa] text-black">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center md:py-28">
        <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          Una nueva dimensión del análisis de crédito.
        </h1>
        <p className="mx-auto mt-6 max-w-4xl text-lg text-neutral-600 md:text-xl">
          Vaya más allá de los puntajes de crédito tradicionales. Aproveche los datos alternativos
          para obtener una visión holística de la salud financiera de sus clientes y tome decisiones
          de crédito más inteligentes y rápidas.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="/demo" className="rounded-full bg-[#038dff] px-6 py-3 font-semibold text-white shadow-sm transition hover:brightness-105">Solicitar una Demo</a>
          <a href="/pricing" className="rounded-full border border-neutral-300 bg-white px-6 py-3 font-semibold text-black transition hover:border-neutral-400">Ver Precios</a>
        </div>
      </div>
    </section>
  )
}