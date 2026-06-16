'use client'
import { useInView } from '@/hooks/useInView'

const pilares = [
  {
    num: '01',
    icon: '📖',
    title: 'Autobiografía Digital',
    desc: 'Historia en 3 formatos: libro impreso, edición interactiva con fotos, videos y mapas, y serie documental basada en entrevistas.',
    fase: 'Fase 1',
  },
  {
    num: '02',
    icon: '🗂️',
    title: 'Archivo Histórico',
    desc: 'Biblioteca de referencia latinoamericana: contratos, fotografías, estudios, mapas e informes de 50 años, digitalizados y accesibles.',
    fase: 'Fase 1',
  },
  {
    num: '03',
    icon: '🤖',
    title: 'Guimar AI',
    desc: 'IA entrenada con tu conocimiento. Analiza proyectos, evalúa decisiones y responde preguntas exactamente como tú lo harías.',
    fase: 'Fase 2',
  },
  {
    num: '04',
    icon: '🎓',
    title: 'Academia Petrolera',
    desc: 'Cursos online de exploración, producción, liderazgo y negociación. Tu experiencia disponible para ingenieros de todo el mundo.',
    fase: 'Fase 2',
  },
  {
    num: '05',
    icon: '💼',
    title: 'Advisory Board',
    desc: 'Tu criterio como servicio: due diligence, evaluación de inversiones y mentoría ejecutiva para empresas y gobiernos del sector.',
    fase: 'Fase 3',
  },
  {
    num: '06',
    icon: '🎙️',
    title: 'Podcast & Documental',
    desc: 'Tu voz narrando grandes descubrimientos, crisis y negociaciones históricas. Contenido que alimenta toda la plataforma.',
    fase: 'Fase 1',
  },
  {
    num: '07',
    icon: '⚙️',
    title: 'Petroleum Copilot LATAM',
    desc: 'Plataforma IA para operadoras, consultoras y gobiernos: reservas, producción, economía y escenarios energéticos en tiempo real.',
    fase: 'Fase 3',
  },
  {
    num: '08',
    icon: '🧭',
    title: 'Mentor Virtual',
    desc: 'Orientación experta 24/7 para ingenieros jóvenes, gerentes y emprendedores. Tu experiencia guiando a la próxima generación.',
    fase: 'Fase 2',
  },
]

const faseStyles: Record<string, string> = {
  'Fase 1': 'bg-emerald-500/12 text-emerald-400 border-emerald-500/20',
  'Fase 2': 'bg-[#D97706]/12 text-[#FBBF24] border-[#D97706]/25',
  'Fase 3': 'bg-orange-500/12 text-orange-400 border-orange-500/20',
}

export default function PilaresSection() {
  const { ref, inView } = useInView(0.05)

  return (
    <section id="pilares" className="py-24 md:py-36 bg-[#0A0700]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D97706] text-xs font-bold tracking-[0.3em] uppercase">Los Pilares</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-3 mb-4">
            8 Dimensiones del Legado
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Cada pilar genera valor de forma independiente. Juntos, forman la plataforma de conocimiento petrolero más completa de Latinoamérica.
          </p>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pilares.map((p, i) => (
            <div
              key={p.num}
              className={`relative bg-white/[0.025] border border-[#D97706]/12 rounded-2xl p-6 hover:border-[#D97706]/30 hover:bg-[#D97706]/[0.04] transition-all duration-500 group overflow-hidden ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {/* Background number */}
              <span className="absolute top-3 right-4 text-6xl font-black text-[#D97706]/10 leading-none select-none">
                {p.num}
              </span>

              {/* Icon */}
              <span className="text-2xl mb-3 block">{p.icon}</span>

              {/* Title */}
              <h3 className="text-white font-bold text-sm md:text-base mb-2.5 pr-6 group-hover:text-[#FBBF24] transition-colors duration-300">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-white/45 text-sm leading-relaxed mb-5">{p.desc}</p>

              {/* Phase badge */}
              <span className={`inline-flex text-[10px] font-bold tracking-[0.15em] uppercase border rounded-full px-2.5 py-1 ${faseStyles[p.fase]}`}>
                {p.fase}
              </span>

              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D97706]/0 group-hover:via-[#D97706]/30 to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {[
            { fase: 'Fase 1', label: 'Arranque (2026)', style: 'bg-emerald-500' },
            { fase: 'Fase 2', label: 'Crecimiento (2027)', style: 'bg-[#D97706]' },
            { fase: 'Fase 3', label: 'Escala (2027-2028)', style: 'bg-orange-500' },
          ].map((l) => (
            <div key={l.fase} className="flex items-center gap-2 text-sm text-white/50">
              <span className={`w-2 h-2 rounded-full ${l.style}`} />
              <span className="font-semibold text-white/70">{l.fase}</span>
              <span>{l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
