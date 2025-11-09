import { Mail, Phone, DollarSign, PlayCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ContactSection() {
  const navigate = useNavigate()
  return (
    <section id="contact" className="py-20 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Contacto</h2>
          <p className="mx-auto max-w-2xl text-lg text-black/60">¿Tiene preguntas? Nuestro equipo está aquí para ayudarle.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow">
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                navigate('/thank-you')
              }}
            >
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="name">Nombre</label>
                <input id="name" name="name" type="text" required className="w-full rounded-lg border border-black/10 bg-neutral-50 px-3 py-2" placeholder="Su nombre" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required className="w-full rounded-lg border border-black/10 bg-neutral-50 px-3 py-2" placeholder="nombre@empresa.com" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows={4} required className="w-full rounded-lg border border-black/10 bg-neutral-50 px-3 py-2" placeholder="Cuéntenos brevemente su caso" />
              </div>
              <button type="submit" className="rounded-lg bg-[#038dff] px-6 py-3 font-semibold text-white">Enviar</button>
            </form>
          </div>
          <div className="rounded-xl bg-neutral-50 p-8">
            <div className="space-y-4">
              <a href="mailto:hola@scoreup.com" className="flex items-center gap-3 transition-colors hover:text-[#038dff]">
                <Mail className="h-5 w-5 text-[#038dff]" /> hola@scoreup.com
              </a>
              <a href="tel:+34900123456" className="flex items-center gap-3 transition-colors hover:text-[#038dff]">
                <Phone className="h-5 w-5 text-[#038dff]" /> +34 900 123 456
              </a>
              <a href="/#pricing" className="flex items-center gap-3 transition-colors hover:text-[#038dff]">
                <DollarSign className="h-5 w-5 text-[#038dff]" /> Ver precios
              </a>
              <a href="/#how-it-works" className="flex items-center gap-3 transition-colors hover:text-[#038dff]">
                <PlayCircle className="h-5 w-5 text-[#038dff]" /> Ver cómo funciona
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


