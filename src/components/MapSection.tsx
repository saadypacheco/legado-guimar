'use client'
import { useInView } from '@/hooks/useInView'

const regions = [
  {
    name: 'América del Sur',
    countries: ['Venezuela', 'Bolivia', 'Argentina', 'Colombia', 'Ecuador', 'Perú', 'Brasil'],
    color: 'border-[#D97706]/40 bg-[#D97706]/8',
    dot: 'bg-[#FBBF24]',
    label: 'text-[#FBBF24]',
    priority: true,
  },
  {
    name: 'América Central & Caribe',
    countries: ['México', 'Trinidad y Tobago', 'Cuba'],
    color: 'border-[#D97706]/25 bg-[#D97706]/4',
    dot: 'bg-[#D97706]',
    label: 'text-[#D97706]',
    priority: false,
  },
  {
    name: 'Medio Oriente',
    countries: ['Emiratos Árabes', 'Arabia Saudita', 'Qatar', 'Irán'],
    color: 'border-orange-500/30 bg-orange-500/5',
    dot: 'bg-orange-400',
    label: 'text-orange-400',
    priority: false,
  },
  {
    name: 'Europa',
    countries: ['España', 'Reino Unido', 'Holanda'],
    color: 'border-yellow-500/25 bg-yellow-500/4',
    dot: 'bg-yellow-400',
    label: 'text-yellow-400',
    priority: false,
  },
  {
    name: 'Norteamérica',
    countries: ['Estados Unidos (Texas)', 'Canadá'],
    color: 'border-white/12 bg-white/3',
    dot: 'bg-white/60',
    label: 'text-white/60',
    priority: false,
  },
  {
    name: 'África',
    countries: ['Nigeria', 'Angola', 'Libia'],
    color: 'border-white/10 bg-white/2',
    dot: 'bg-white/40',
    label: 'text-white/50',
    priority: false,
  },
]

export default function MapSection() {
  const { ref, inView } = useInView(0.1)

  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-[#060300] to-[#0A0700]">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-[#D97706] text-xs font-bold tracking-[0.3em] uppercase">Presencia Internacional</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-3 mb-3">
            Donde Estuvo el Conocimiento
          </h2>
          <p className="text-white/35 text-sm max-w-md mx-auto">
            50 años de trabajo en campo en todos los continentes.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 bg-[#D97706] rounded-full animate-pulse" />
            <span className="text-white/40 text-xs font-medium">Mapa tentativo — países a confirmar con Guimar</span>
          </div>
        </div>

        {/* World map visual */}
        <div
          ref={ref}
          className="relative bg-white/[0.02] border border-[#D97706]/10 rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-[#D97706]/3 blur-3xl" />

          {/* Globe decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#D97706]/5 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-[#D97706]/4 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-[#D97706]/5 rounded-full pointer-events-none" />

          {/* Stats row */}
          <div className="relative grid grid-cols-3 gap-4 mb-10 max-w-lg mx-auto">
            {[
              { val: '6', label: 'Continentes' },
              { val: '15+', label: 'Países' },
              { val: '50+', label: 'Años' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-b from-[#FBBF24] to-[#D97706]">
                  {s.val}
                </div>
                <div className="text-white/35 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Regions grid */}
          <div className="relative grid md:grid-cols-3 gap-4">
            {regions.map((r, i) => (
              <div
                key={r.name}
                className={`border ${r.color} rounded-2xl p-5 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2 h-2 rounded-full ${r.dot} flex-shrink-0`} />
                  <p className={`text-[10px] font-bold tracking-[0.2em] uppercase ${r.label}`}>{r.name}</p>
                  {r.priority && (
                    <span className="ml-auto text-[9px] bg-[#D97706]/20 text-[#FBBF24] border border-[#D97706]/30 rounded-full px-2 py-0.5 font-bold">
                      Prioridad
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {r.countries.map((c) => (
                    <span key={c} className="text-xs text-white/55 bg-white/[0.04] rounded-lg px-2.5 py-1 border border-white/6">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Focus note */}
          <div className="relative mt-8 pt-8 border-t border-white/[0.06] text-center">
            <p className="text-white/30 text-sm">
              <span className="text-[#FBBF24] font-semibold">Fase 1 — Foco inicial:</span>{' '}
              Bolivia · Argentina · Venezuela — donde Guimar tiene mayor credibilidad y red de contactos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
