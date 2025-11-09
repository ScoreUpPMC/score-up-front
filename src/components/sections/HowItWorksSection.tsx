import { FileSpreadsheet, Brain, TrendingUp } from 'lucide-react'

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black/90 md:text-4xl">Cómo Funciona</h2>
          <p className="mx-auto max-w-2xl text-lg text-black/60">
            Nuestro proceso simplificado convierte datos complejos en puntuaciones claras y accionables en solo tres pasos.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          <div className="z-10 flex flex-col items-center text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#038dff] bg-[#038dff]/10">
              <FileSpreadsheet className="h-10 w-10 text-[#038dff]" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Paso 1: Recopilación de Datos</h3>
            <p className="text-black/60">
              Conectamos diversas fuentes de datos alternativos como facturas, servicios públicos y suscripciones.
            </p>
          </div>
          <div className="z-10 flex flex-col items-center text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#ff6f61] bg-[#ff6f61]/10">
              <Brain className="h-10 w-10 text-[#ff6f61]" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Paso 2: Análisis con IA</h3>
            <p className="text-black/60">
              Modelos de IA analizan los datos en tiempo real, identificando patrones que los modelos tradicionales no ven.
            </p>
          </div>
          <div className="z-10 flex flex-col items-center text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#038dff] bg-[#038dff]/10">
              <TrendingUp className="h-10 w-10 text-[#038dff]" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Paso 3: Puntuación Mejorada</h3>
            <p className="text-black/60">
              Generamos una puntuación mejorada y fácil de entender para decisiones de crédito más justas y precisas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


