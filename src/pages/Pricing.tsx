import PricingSection from '../components/sections/PricingSection'

export default function PricingPage() {
  return (
    <section className="py-8 text-black">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Planes y Precios</h1>
        <p className="mb-6 max-w-2xl text-black/60">
          Elija el plan que mejor se adapte a su equipo. Podemos personalizarlo según sus necesidades.
        </p>
      </div>
      <PricingSection />
    </section>
  )
}


