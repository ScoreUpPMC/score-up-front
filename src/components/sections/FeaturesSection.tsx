import { BarChart3, Cpu, PlugZap } from 'lucide-react'

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Desbloquee una Visión más Profunda del Cliente</h2>
          <p className="mx-auto max-w-2xl text-lg text-black/60">
            scoreUp le brinda un conjunto de herramientas completo para evaluar la solvencia con precisión.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-neutral-50 p-8 shadow">
            <BarChart3 className="mb-4 h-10 w-10 text-[#038dff]" />
            <h3 className="mb-2 text-2xl font-bold">Datos Alternativos</h3>
            <p className="text-black/60">
              Analice ingresos recurrentes, pagos de servicios públicos y facturas comerciales para obtener una imagen financiera más precisa.
            </p>
          </div>
          <div className="rounded-xl bg-neutral-50 p-8 shadow">
            <Cpu className="mb-4 h-10 w-10 text-[#038dff]" />
            <h3 className="mb-2 text-2xl font-bold">Puntuación con IA</h3>
            <p className="text-black/60">
              Algoritmos inteligentes procesan conjuntos de datos complejos para proporcionar un puntaje de crédito dinámico y en tiempo real.
            </p>
          </div>
          <div className="rounded-xl bg-neutral-50 p-8 shadow">
            <PlugZap className="mb-4 h-10 w-10 text-[#038dff]" />
            <h3 className="mb-2 text-2xl font-bold">Integración Perfecta</h3>
            <p className="text-black/60">
              Integre fácilmente scoreUp en sus flujos de trabajo existentes con nuestra robusta API y plugins de plataforma.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


