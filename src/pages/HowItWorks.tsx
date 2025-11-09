import HowItWorksSection from '../components/sections/HowItWorksSection'

export default function HowItWorksPage() {
  return (
    <section className="py-8 text-black">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Cómo Funciona</h1>
        <p className="mb-6 max-w-2xl text-black/60">
          Descubra nuestro proceso de calificación crediticia impulsado por datos alternativos y modelos de IA.
        </p>
      </div>
      <HowItWorksSection />
    </section>
  )
}


