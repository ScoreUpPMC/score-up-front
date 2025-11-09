import { CheckCircle2 } from 'lucide-react'

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-black mb-4 text-3xl font-bold md:text-4xl">Planes y Precios</h2>
          <p className="mx-auto max-w-2xl text-lg text-black/60">
            Contáctenos para asesorarle en la compra y recibir una propuesta a medida.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-neutral-50 p-8 shadow">
            <h3 className="text-black mb-2 text-2xl font-bold">Starter</h3>
            <p className="mb-6 text-black/60">Ideal para equipos pequeños que comienzan.</p>
            <p className="mb-6 text-xl font-semibold text-black/70">Contáctenos para asesorar la compra</p>
            <ul className="text-black mb-8 space-y-2 text-left">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#038dff]" /> 500 evaluaciones/mes</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#038dff]" /> API básica</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#038dff]" /> Soporte por email</li>
            </ul>
            <a href="/#contact" className="inline-block w-full rounded-lg bg-[#038dff] px-6 py-3 text-center font-semibold text-white hover:brightness-105">
              Solicitar asesoría
            </a>
          </div>
          <div className=" overflow-hidden rounded-xl border-2 border-[#00a99d] bg-white p-8 shadow">
            <span className=" right-4 top-4 rounded-full bg-[#038dff] px-2 py-1 text-xs font-bold text-white">Popular</span>
            <h3 className="text-black mb-2 text-2xl font-bold">Pro</h3>
            <p className="mb-6 text-black/60">Para equipos en expansión y pymes.</p>
            <p className="mb-6 text-xl font-semibold text-black/70">Contáctenos para asesorar la compra</p>
            <ul className=" text-black mb-8 space-y-2 text-left">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#038dff]" /> 50k evaluaciones/mes</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#038dff]" /> Enriquecimiento de datos alternativos</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#038dff]" /> Webhooks y SLA estándar</li>
            </ul>
            <a href="/#contact" className="inline-block w-full rounded-lg bg-[#038dff] px-6 py-3 text-center font-semibold text-white hover:brightness-105">
              Hablar con ventas
            </a>
          </div>
          <div className="rounded-xl bg-neutral-50 p-8 shadow">
            <h3 className="text-black mb-2 text-2xl font-bold">Enterprise</h3>
            <p className="mb-6 text-black/60">Soluciones personalizadas a escala.</p>
            <p className="mb-6 text-xl font-semibold text-black/70">Contáctenos para asesorar la compra</p>
            <ul className="text-black mb-8 space-y-2 text-left">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#038dff]" /> Límites personalizados</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#038dff]" /> Soporte dedicado 24/7</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#038dff]" /> SSO, auditoría y cumplimiento</li>
            </ul>
            <a href="/#contact" className="inline-block w-full rounded-lg bg-[#038dff] px-6 py-3 text-center font-semibold text-white hover:brightness-105">
              Hablar con ventas
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


