export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Con la confianza de empresas innovadoras</h2>
          <p className="mx-auto max-w-2xl text-lg text-black/60">
            Vea cómo empresas como la suya están reduciendo el riesgo y aumentando las tasas de aprobación.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border-l-4 border-[#00a99d] bg-white p-8 shadow">
            <p className="mb-6 text-lg italic">
              "scoreUp ha revolucionado nuestro proceso de suscripción. Hemos visto una reducción del 25% en los impagos."
            </p>
            <div className="flex items-center">
              <div className="mr-4 h-12 w-12 rounded-full bg-neutral-200" />
              <div>
                <p className="font-bold">Sofía López</p>
                <p className="text-black/60">CFO, PrestaYa</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border-l-4 border-[#00a99d] bg-white p-8 shadow">
            <p className="mb-6 text-lg italic">
              "Una plataforma que entiende la economía moderna. La integración fue simple y los resultados hablan por sí solos."
            </p>
            <div className="flex items-center">
              <div className="mr-4 h-12 w-12 rounded-full bg-neutral-200" />
              <div>
                <p className="font-bold">Carlos Mendoza</p>
                <p className="text-black/60">Jefe de Riesgos, FlujoPago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


