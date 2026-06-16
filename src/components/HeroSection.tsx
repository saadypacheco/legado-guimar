'use client'
import { useState, useEffect } from 'react'

const pills = ['Exploración', 'Producción', 'Liderazgo', 'Negociación', 'Legado']

const heroStats = [
  { value: '50+', label: 'Años en la industria' },
  { value: '8', label: 'Pilares del proyecto' },
  { value: '20+', label: 'Ideas innovadoras' },
  { value: '∞', label: 'Años de impacto' },
]

export default function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060300]">
      {/* Amber glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#D97706]/12 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#92400E]/15 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#78350F]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D97706]/8 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(217,119,6,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(217,119,6,0.8) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8 pt-32 pb-20 flex flex-col items-center text-center">
        {/* Badge */}
        <div
          className={`transition-all duration-700 mb-8 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        >
          <div className="inline-flex items-center gap-2 bg-[#D97706]/12 border border-[#D97706]/25 rounded-full px-5 py-2">
            <span className="w-1.5 h-1.5 bg-[#FBBF24] rounded-full animate-pulse" />
            <span className="text-[#FBBF24] text-xs font-semibold tracking-[0.2em] uppercase">
              Propuesta de proyecto — Julio 2026
            </span>
          </div>
        </div>

        {/* Main title */}
        <div
          className={`transition-all duration-1000 delay-200 mb-6 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-[#D97706]/60 text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-5">
            Proyecto
          </p>
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black leading-[0.85] tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#FBBF24] via-[#D97706] to-[#92400E]">
              LEGADO
            </span>
            <br />
            <span className="text-white">GUIMAR</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`transition-all duration-1000 delay-400 mb-10 max-w-2xl ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-xl md:text-2xl font-light text-white/50 mb-3">
            50 años de experiencia internacional.{' '}
            <span className="text-white font-semibold">Una plataforma para siempre.</span>
          </p>
          <p className="text-white/35 text-sm md:text-base leading-relaxed">
            Preservar, digitalizar y amplificar el conocimiento acumulado por Guimar Vaca Coca —
            convirtiéndolo en valor real para las nuevas generaciones, la industria energética y la historia.
          </p>
        </div>

        {/* Pills */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-16 transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {pills.map((p) => (
            <span
              key={p}
              className="flex items-center gap-1.5 bg-white/[0.04] border border-[#D97706]/20 rounded-full px-4 py-1.5 text-sm text-white/65 font-medium hover:border-[#D97706]/45 hover:text-white/90 transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
              {p}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-xl h-px bg-gradient-to-r from-transparent via-[#D97706]/25 to-transparent mb-12" />

        {/* Stats row */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-2xl transition-all duration-1000 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {heroStats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-[#FBBF24] to-[#D97706]">
                {s.value}
              </span>
              <span className="text-white/40 text-xs md:text-sm mt-1.5 font-medium text-center">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-white/20 text-[10px] tracking-widest uppercase">Explorar</span>
        <svg className="w-4 h-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
