import { useNavigate } from 'react-router-dom'

export default function DemoPage() {
  const navigate = useNavigate()
  return (
    <section className="py-8 text-black">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Solicitar una Demo</h1>
        <p className="mb-6 max-w-2xl text-black/60">
          Cuéntenos sobre su empresa y coordinaremos una demostración personalizada.
        </p>
        <form
          className="mx-auto grid max-w-xl gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            navigate('/thank-you')
          }}
        >
          <div className="grid gap-1.5">
            <label htmlFor="company">Empresa</label>
            <input id="company" name="company" required className="rounded-lg border border-neutral-300 bg-white px-3 py-2" placeholder="Nombre de la empresa" />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" required className="rounded-lg border border-neutral-300 bg-white px-3 py-2" placeholder="Tu nombre" />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="rounded-lg border border-neutral-300 bg-white px-3 py-2" placeholder="nombre@empresa.com" />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="note">Notas</label>
            <textarea id="note" name="note" rows={4} className="rounded-lg border border-neutral-300 bg-white px-3 py-2" placeholder="Cuéntanos qué te interesa evaluar"></textarea>
          </div>
          <button className="rounded-lg bg-[#038dff] px-4 py-2 font-semibold text-white hover:brightness-105" type="submit">
            Enviar solicitud
          </button>
        </form>
      </div>
    </section>
  )
}


