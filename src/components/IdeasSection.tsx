'use client'
import { useState } from 'react'
import { useInView } from '@/hooks/useInView'

const ideas = [
  {
    icon: '🧠',
    title: 'Clon Digital de Guimar',
    tag: 'Guimar AI',
    desc: 'Una IA que piensa, responde y recomienda exactamente como Guimar. Disponible 24 horas para cualquier pregunta sobre la industria petrolera.',
    impact: 'Altísimo',
    fase: 'Fase 2',
    tagColor: 'bg-[#D97706]/15 text-[#FBBF24] border-[#D97706]/25',
    dot: 'bg-[#FBBF24]',
  },
  {
    icon: '🗺️',
    title: 'Google Maps del Conocimiento',
    tag: 'Legado Visual',
    desc: 'Mapa mundial interactivo donde cada pin es un proyecto real de Guimar. Al hacer click: documentos, fotos, decisiones y aprendizajes de ese lugar y época.',
    impact: 'Altísimo',
    fase: 'Fase 2',
    tagColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
    dot: 'bg-emerald-400',
  },
  {
    icon: '⏳',
    title: 'Time Machine Energética',
    tag: 'Historia Viva',
    desc: 'La IA recrea escenarios históricos con la voz y el criterio de Guimar. "¿Qué habría hecho Guimar en 1985 frente a la crisis del petróleo?" Aprende del pasado en primera persona.',
    impact: 'Muy alto',
    fase: 'Fase 3',
    tagColor: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25',
    dot: 'bg-yellow-400',
  },
  {
    icon: '🏛️',
    title: 'Museo Petrolero Digital',
    tag: 'Historia LATAM',
    desc: 'Museo interactivo con recorridos inmersivos por la historia energética latinoamericana. Realidad virtual, documentos originales y los proyectos de Guimar como eje narrativo.',
    impact: 'Muy alto',
    fase: 'Fase 5',
    tagColor: 'bg-purple-500/15 text-purple-400 border-purple-500/25',
    dot: 'bg-purple-400',
  },
  {
    icon: '📚',
    title: 'Biblioteca de Errores Millonarios',
    tag: 'Aprendizaje Real',
    desc: 'Colección de errores reales de la industria — los que cuestan millones. La IA los analiza, explica las causas y enseña a evitarlos. Aprender de los fracasos históricos antes de cometerlos.',
    impact: 'Muy alto',
    fase: 'Fase 3',
    tagColor: 'bg-red-500/15 text-red-400 border-red-500/25',
    dot: 'bg-red-400',
  },
  {
    icon: '🎬',
    title: 'Reality Show Ejecutivo',
    tag: 'Entretenimiento Formativo',
    desc: 'Simulación filmada de toma de decisiones: ingenieros y estudiantes enfrentan un caso real. La IA evalúa sus decisiones en tiempo real. Los expertos comentan. Guimar veredicta.',
    impact: 'Alto',
    fase: 'Fase 4',
    tagColor: 'bg-orange-500/15 text-orange-400 border-orange-500/25',
    dot: 'bg-orange-400',
  },
  {
    icon: '🎮',
    title: 'Simulador Ejecutivo Petrolero',
    tag: 'Producto Premium',
    desc: 'Un videojuego profesional donde el usuario dirige una empresa energética y toma decisiones reales. Basado en los casos históricos vividos por Guimar.',
    impact: 'Alto',
    fase: 'Fase 4',
    tagColor: 'bg-orange-500/15 text-orange-400 border-orange-500/25',
    dot: 'bg-orange-400',
  },
  {
    icon: '🎬',
    title: 'Netflix del Petróleo',
    tag: 'Biblioteca Audiovisual',
    desc: 'Plataforma de streaming especializada con videos, cursos, casos reales y conferencias. Suscripción mensual para profesionales de la industria en Latinoamérica.',
    impact: 'Alto',
    fase: 'Fase 4',
    tagColor: 'bg-red-500/15 text-red-400 border-red-500/25',
    dot: 'bg-red-400',
  },
]

const VISIBLE_INIT = 4

export default function IdeasSection() {
  const { ref, inView } = useInView(0.05)
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? ideas : ideas.slice(0, VISIBLE_INIT)

  return (
    <section id="ideas" className="py-24 md:py-36 bg-[#060300]">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D97706] text-xs font-bold tracking-[0.3em] uppercase">Ideas Disruptivas</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-3 mb-4">
            Las Ideas que Cambian la Industria
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-sm md:text-base">
            Un universo de productos posibles, cada uno capaz de ser un negocio independiente.
          </p>
        </div>

        {/* Ideas list */}
        <div ref={ref} className="space-y-4">
          {visible.map((idea, i) => (
            <div
              key={idea.title}
              className={`group bg-white/[0.025] border border-white/8 rounded-2xl p-6 hover:bg-white/[0.04] hover:border-[#D97706]/20 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${Math.min(i, VISIBLE_INIT - 1) * 80}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                {/* Icon */}
                <span className="text-3xl flex-shrink-0">{idea.icon}</span>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-white font-black text-base group-hover:text-[#FBBF24] transition-colors duration-300">
                      {idea.title}
                    </h3>
                    <span className={`text-[10px] font-bold tracking-widest uppercase border rounded-full px-2.5 py-0.5 ${idea.tagColor}`}>
                      {idea.tag}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{idea.desc}</p>
                </div>

                {/* Meta */}
                <div className="flex md:flex-col gap-6 md:gap-2 flex-shrink-0 md:text-right">
                  <div>
                    <p className="text-[10px] text-white/25 font-bold uppercase tracking-wider">Impacto</p>
                    <p className="text-sm font-bold text-white/65">{idea.impact}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/25 font-bold uppercase tracking-wider">Horizonte</p>
                    <p className="text-sm font-bold text-white/65">{idea.fase}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more */}
        {!showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-white/[0.04] border border-[#D97706]/20 hover:border-[#D97706]/40 hover:bg-[#D97706]/[0.06] text-white/60 hover:text-white rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300"
            >
              <span>Ver {ideas.length - VISIBLE_INIT} ideas más</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {showAll && (
          <p className="text-center text-white/20 text-sm mt-8">
            + más ideas en desarrollo — universo en expansión
          </p>
        )}
      </div>
    </section>
  )
}
