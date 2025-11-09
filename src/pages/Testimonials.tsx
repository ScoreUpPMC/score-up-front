import TestimonialsSection from '../components/sections/TestimonialsSection'

export default function TestimonialsPage() {
  return (
    <section className="py-8 text-black">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Testimonios</h1>
        <p className="mb-6 max-w-2xl text-black/60">
          Historias reales de clientes que ya mejoran su evaluación de riesgo con ScoreUp.
        </p>
      </div>
      <TestimonialsSection />
    </section>
  )
}


