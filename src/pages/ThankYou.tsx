import { Link } from 'react-router-dom'

export default function ThankYouPage() {
  return (
    <section className="py-16 text-center text-black">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="mb-3 text-4xl font-bold">¡Gracias! Hemos recibido tu solicitud</h1>
        <p className="mx-auto mb-6 max-w-xl text-black/70">
          Nuestro equipo se pondrá en contacto en las próximas 24-48 horas para coordinar tu demo personalizada.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <Link to="/" className="rounded-lg border border-neutral-300 bg-white px-4 py-2 font-semibold">
            Volver al inicio
          </Link>
          <Link to="/pricing" className="rounded-lg bg-[#038dff] px-4 py-2 font-semibold text-white hover:brightness-105">
            Ver planes
          </Link>
        </div>
      </div>
    </section>
  )
}


