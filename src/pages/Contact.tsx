export default function Contact() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-[1100px] px-4">
        <h2 className="text-2xl font-semibold">Contacto</h2>
        <p className="mt-2 text-zinc-300">
          ¿Tienes preguntas? Escríbenos y te responderemos pronto.
        </p>
        <form className="mt-4 grid max-w-[560px] gap-3" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-1.5">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Tu nombre"
              className="rounded-lg border border-white/20 bg-neutral-900 px-3 py-2 text-white outline-none ring-0 transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-400/30"
            />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              className="rounded-lg border border-white/20 bg-neutral-900 px-3 py-2 text-white outline-none ring-0 transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-400/30"
            />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="¿Cómo podemos ayudarte?"
              className="rounded-lg border border-white/20 bg-neutral-900 px-3 py-2 text-white outline-none ring-0 transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-400/30"
            />
          </div>
          <button className="inline-flex items-center justify-center rounded-lg border border-indigo-500 bg-indigo-500 px-4 py-2 text-white shadow-sm transition hover:brightness-105" type="submit">Enviar</button>
        </form>
      </div>
    </section>
  )
}
