'use client'
import { useInView } from '@/hooks/useInView'

const phases = [
  {
    id: '01',
    period: 'Julio — Septiembre 2026',
    title: 'Fundación',
    subtitle: 'Captura del conocimiento',
    dot: 'bg-emerald-500',
    border: 'border-emerald-500/30',
    label: 'text-emerald-400',
    deliverable: 'Archivo vivo + sitio web del legado en línea',
    items: [
      'Sesiones semanales de entrevista con Guimar',
      'Inicio de digitalización del archivo histórico',
      'Lanzamiento del sitio web del proyecto',
      'Primeras grabaciones de audio y video',
    ],
  },
  {
    id: '02',
    period: 'Octubre 2026 — Marzo 2027',
    title: 'Contenido',
    subtitle: 'Autobiografía & Guimar AI v1',
    dot: 'bg-[#D97706]',
    border: 'border-[#D97706]/30',
    label: 'text-[#FBBF24]',
    deliverable: 'Guimar AI activo + Podcast + Academia con primeros 3 cursos',
    items: [
      'Guimar AI v1: chatbot entrenado con entrevistas y documentos',
      'Primer episodio de Podcast / Documental publicado',
      'Academia Petrolera: primeros 3 cursos online',
      'Autobiografía Digital — primer borrador completo',
    ],
  },
  {
    id: '03',
    period: 'Abril — Diciembre 2027',
    title: 'Plataforma',
    subtitle: 'Escala, Advisory & Mentor',
    dot: 'bg-orange-500',
    border: 'border-orange-500/30',
    label: 'text-orange-400',
    deliverable: 'Plataforma SaaS en operación con primeros clientes pagos',
    items: [
      'Mentor Virtual 24/7 activo para ingenieros y gerentes',
      'Petroleum Copilot LATAM v1 en versión beta',
      'Advisory Board: primeros clientes institucionales',
      'Marketplace de Expertos Senior en operación',
    ],
  },
  {
    id: '04',
    period: '2028',
    title: 'Expansión',
    subtitle: 'Productos premium & mercados',
    dot: 'bg-red-500',
    border: 'border-red-500/30',
    label: 'text-red-400',
    deliverable: 'Ecosistema completo con múltiples fuentes de ingreso',
    items: [
      'Simulador Ejecutivo Petrolero — videojuego de decisiones reales',
      'Netflix del Petróleo: biblioteca audiovisual con suscripción',
      'Due Diligence IA: automatización de semanas de trabajo',
      'Expansión a mercados de México, Colombia y Brasil',
    ],
  },
  {
    id: '05',
    period: '2028 — 2029',
    title: 'Legado Global',
    subtitle: 'Impacto permanente e irreversible',
    dot: 'bg-purple-500',
    border: 'border-purple-500/30',
    label: 'text-purple-400',
    deliverable: 'Referencia histórica del petróleo latinoamericano',
    items: [
      'Museo Petrolero Digital con recorridos en realidad virtual',
      'Energy Wikipedia Validada — base de conocimiento global',
      'Consorcio educativo con universidades internacionales',
      'Reconocimiento como archivo histórico de referencia LATAM',
    ],
  },
]

export default function TimelineSection() {
  const { ref, inView } = useInView(0.05)

  return (
    <section id="timeline" className="py-24 md:py-36 bg-gradient-to-b from-[#0A0700] to-[#060300]">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D97706] text-xs font-bold tracking-[0.3em] uppercase">Hoja de Ruta</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-3 mb-4">
            Timeline del Proyecto
          </h2>
          <p className="text-white/40 max-w-md mx-auto text-sm md:text-base">
            3 años para construir el legado. Cada fase entrega valor concreto e independiente.
          </p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative pl-10 md:pl-14">
          {/* Vertical line */}
          <div className="absolute left-3 md:left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-emerald-500/60 via-[#D97706]/50 via-orange-500/40 to-purple-500/30" />

          <div className="space-y-10">
            {phases.map((phase, i) => (
              <div
                key={phase.id}
                className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Dot */}
                <div className={`absolute -left-10 md:-left-14 top-7 w-5 h-5 ${phase.dot} rounded-full border-2 border-[#060300] shadow-lg z-10`} />

                {/* Card */}
                <div className={`bg-white/[0.03] border ${phase.border} rounded-2xl p-6 hover:bg-white/[0.05] transition-all duration-300`}>
                  {/* Top */}
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${phase.label}`}>
                      Fase {phase.id}
                    </span>
                    <span className={`text-[10px] font-medium ${phase.label} opacity-70`}>{phase.period}</span>
                  </div>

                  <h3 className="text-white font-black text-xl mt-1">{phase.title}</h3>
                  <p className="text-white/45 text-sm mb-5">{phase.subtitle}</p>

                  {/* Items */}
                  <ul className="space-y-2 mb-5">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/55">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${phase.dot} flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Deliverable */}
                  <div className="border-t border-white/[0.06] pt-4">
                    <p className="text-[10px] text-white/30 font-bold tracking-[0.15em] uppercase mb-1">Entregable principal</p>
                    <p className={`text-sm font-semibold ${phase.label}`}>{phase.deliverable}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
