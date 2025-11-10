import { CheckCircle2 } from 'lucide-react'

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-black mb-4 text-3xl font-bold md:text-4xl">Planes y Precios</h2>
          <p className="mx-auto max-w-2xl text-lg text-black/60">
            Un pago único por el producto + una suscripción mensual por uso de API. Escale sólo cuando crezca su volumen.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Starter */}
          <div className="rounded-xl bg-neutral-50 p-8 shadow ring-1 ring-neutral-200">
            <h3 className="mb-1 text-2xl font-bold">Starter</h3>
            <p className="mb-6 text-black/60">Ideal para validar y salir al mercado.</p>
            <div className="mb-4 rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-sm font-semibold text-black/60">Pago único del producto</p>
              <p className="text-3xl font-extrabold">$$</p>
            </div>
            <div className="mb-6 rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-sm font-semibold text-black/60">Uso de API (mensual)</p>
              <p className="text-xl font-bold">US$ 99/mes</p>
              <p className="text-sm text-black/60">Incluye 10.000 requests • Extra: US$ 9 por 1.000</p>
            </div>
            <ul className="mb-8 space-y-2 text-left">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#038dff]" /> 1 ambiente (prod)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#038dff]" /> SDK y documentación</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#038dff]" /> Soporte por email</li>
            </ul>
            <a href="/demo" className="inline-block w-full rounded-lg bg-[#038dff] px-6 py-3 text-center font-semibold text-white hover:brightness-105">Empezar con Starter</a>
          </div>

          {/* Pro */}
          <div className=" rounded-xl border-2 border-[#038dff] bg-white p-8 shadow">
            <span className="right-4 top-4 rounded-full bg-[#038dff] px-2 py-1 text-xs font-bold text-white">Popular</span>
            <h3 className="mb-1 text-2xl font-bold">Pro</h3>
            <p className="mb-6 text-black/60">Para equipos en expansión y pymes.</p>
            <div className="mb-4 rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-sm font-semibold text-black/60">Pago único del producto</p>
              <p className="text-3xl font-extrabold">$$$</p>
            </div>
            <div className="mb-6 rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-sm font-semibold text-black/60">Uso de API (mensual)</p>
              <p className="text-xl font-bold">US$ 399/mes</p>
              <p className="text-sm text-black/60">Incluye 100.000 requests • Extra: US$ 5 por 1.000</p>
            </div>
            <ul className="mb-8 space-y-2 text-left">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#038dff]" /> 2 ambientes (stg + prod)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#038dff]" /> Webhooks y SLA estándar</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#038dff]" /> Soporte prioritario</li>
            </ul>
            <a href="/demo" className="inline-block w-full rounded-lg bg-[#038dff] px-6 py-3 text-center font-semibold text-white hover:brightness-105">Escalar con Pro</a>
          </div>

          {/* Enterprise */}
          <div className="rounded-xl bg-neutral-50 p-8 shadow ring-1 ring-neutral-200">
            <h3 className="mb-1 text-2xl font-bold">Enterprise</h3>
            <p className="mb-6 text-black/60">Para operaciones a gran escala.</p>
            <div className="mb-4 rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-sm font-semibold text-black/60">Pago único del producto</p>
              <p className="text-3xl font-extrabold">A medida</p>
            </div>
            <div className="mb-6 rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-sm font-semibold text-black/60">Uso de API (mensual)</p>
              <p className="text-xl font-bold">A medida</p>
              <p className="text-sm text-black/60">Millones de requests • Descuentos por volumen</p>
            </div>
            <ul className="mb-8 space-y-2 text-left">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#038dff]" /> Límites y regiones personalizados</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#038dff]" /> SSO, auditoría y cumplimiento</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#038dff]" /> Soporte dedicado 24/7</li>
            </ul>
            <a href="/demo" className="inline-block w-full rounded-lg bg-[#038dff] px-6 py-3 text-center font-semibold text-white hover:brightness-105">Hablar con ventas</a>
          </div>
        </div>
      </div>
    </section>
  )
}


