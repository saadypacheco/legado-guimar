'use client'
import { useInView } from '@/hooks/useInView'

export default function CTASection() {
  const { ref, inView } = useInView(0.3)

  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-[#060300] to-[#040200]">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-4 md:px-8 text-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Glow */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#D97706]/8 blur-3xl rounded-full scale-150" />

          <div className="relative">
            <span className="text-[#D97706] text-xs font-bold tracking-[0.3em] uppercase block mb-6">
              El momento es ahora
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              No construiremos<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FBBF24] via-[#D97706] to-[#FBBF24]">
                un homenaje.
              </span>
            </h2>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-10">
              Construiremos<br />
              <span className="text-white">un legado escalable.</span>
            </h2>

            <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
              50 años de experiencia internacional merecen algo más que recuerdos.
              Merecen una plataforma viva que siga generando valor cuando ya no estemos.
            </p>

            {/* Quote */}
            <div className="border border-[#D97706]/20 rounded-2xl p-7 bg-[#D97706]/[0.04] mb-12">
              <p className="text-white/60 text-sm md:text-base italic leading-relaxed">
                "¿Cómo evaluarías este proyecto petrolero?"
                <br />
                "¿Cómo negociarías una concesión?"
                <br />
                "¿Qué errores evitarías?"
              </p>
              <p className="text-[#D97706]/70 text-sm mt-4 font-semibold">
                — Preguntas que Guimar AI responderá con tu voz y tu criterio.
              </p>
            </div>

            {/* Final line */}
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#D97706]/40 to-transparent mb-8" />
            <p className="text-white/25 text-sm font-medium tracking-widest uppercase">
              Proyecto Legado Guimar — 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
