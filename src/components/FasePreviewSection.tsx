'use client'
import { useState } from 'react'
import { useInView } from '@/hooks/useInView'

const fases = [
  {
    num: '01',
    period: 'Jul — Sep 2026',
    title: 'Archivo & Autobiografía',
    label: 'text-emerald-400',
    badge: 'bg-emerald-500/15 border-emerald-500/25 text-emerald-400',
    mockup: 'archivo',
  },
  {
    num: '02',
    period: 'Oct 2026 — Mar 2027',
    title: 'Guimar AI / Mentor Virtual',
    label: 'text-[#FBBF24]',
    badge: 'bg-[#D97706]/15 border-[#D97706]/25 text-[#FBBF24]',
    mockup: 'ai',
  },
  {
    num: '03',
    period: 'Abr 2027 en adelante',
    title: 'Podcast & Distribución Regional',
    label: 'text-orange-400',
    badge: 'bg-orange-500/15 border-orange-500/25 text-orange-400',
    mockup: 'podcast',
  },
  {
    num: '04',
    period: '2028',
    title: 'Academia & Plataforma',
    label: 'text-purple-400',
    badge: 'bg-purple-500/15 border-purple-500/25 text-purple-400',
    mockup: 'academia',
  },
]

function MockupArchivo() {
  return (
    <div className="bg-[#0C0800] rounded-xl border border-white/8 overflow-hidden text-xs font-mono">
      {/* Browser bar */}
      <div className="bg-[#141008] px-4 py-2.5 flex items-center gap-2 border-b border-white/6">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 bg-white/5 rounded px-3 py-1 text-white/30 text-[10px] ml-2">
          legadoguimar.com/archivo
        </div>
      </div>
      {/* Content */}
      <div className="p-4">
        <p className="text-[#D97706]/70 text-[10px] font-bold uppercase tracking-wider mb-3">Archivo Histórico — 1974 a 2026</p>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {['📄 Contrato 1976', '📷 Campo 1982', '📊 Estudio 1990', '🗺️ Mapa 1985', '📄 Informe 1998', '📷 Obra 2003'].map((item) => (
            <div key={item} className="bg-white/[0.04] border border-white/8 rounded-lg p-2 text-[9px] text-white/50 text-center">
              {item}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 bg-[#D97706]/10 border border-[#D97706]/20 rounded-lg px-3 py-2">
          <span className="text-[#FBBF24] text-[10px]">🔍</span>
          <span className="text-white/30 text-[10px]">Buscar en 50 años de documentos...</span>
        </div>
      </div>
    </div>
  )
}

function MockupAI() {
  return (
    <div className="bg-[#0C0800] rounded-xl border border-white/8 overflow-hidden text-xs">
      {/* Browser bar */}
      <div className="bg-[#141008] px-4 py-2.5 flex items-center gap-2 border-b border-white/6">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 bg-white/5 rounded px-3 py-1 text-white/30 text-[10px] ml-2">
          legadoguimar.com/ai
        </div>
      </div>
      {/* Chat */}
      <div className="p-4 space-y-3">
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full bg-[#D97706]/30 flex items-center justify-center text-[10px] flex-shrink-0">G</div>
          <div className="bg-[#D97706]/10 border border-[#D97706]/20 rounded-xl rounded-tl-none px-3 py-2 text-[10px] text-white/70 max-w-[80%]">
            Basado en mi experiencia en Venezuela y Argentina, en ese tipo de concesión yo primero analizaría...
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="bg-white/5 border border-white/8 rounded-xl rounded-tr-none px-3 py-2 text-[10px] text-white/55 max-w-[80%]">
            ¿Cómo evaluarías este proyecto en Bolivia?
          </div>
          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] flex-shrink-0">👤</div>
        </div>
        <div className="flex items-center gap-2 bg-white/[0.03] border border-white/8 rounded-lg px-3 py-2">
          <span className="text-white/20 text-[10px] flex-1">Preguntale a Guimar...</span>
          <div className="w-5 h-5 rounded-full bg-[#D97706]/40 flex items-center justify-center">
            <div className="w-2 h-2 bg-[#D97706] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

function MockupPodcast() {
  return (
    <div className="bg-[#0C0800] rounded-xl border border-white/8 overflow-hidden text-xs">
      {/* Browser bar */}
      <div className="bg-[#141008] px-4 py-2.5 flex items-center gap-2 border-b border-white/6">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 bg-white/5 rounded px-3 py-1 text-white/30 text-[10px] ml-2">
          legadoguimar.com/podcast
        </div>
      </div>
      {/* Player */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-[#D97706]/15 to-orange-600/10 border border-[#D97706]/20 rounded-xl p-4 mb-3">
          <p className="text-[#FBBF24] text-[9px] font-bold uppercase tracking-wider mb-1">Episodio 1</p>
          <p className="text-white/80 text-[11px] font-semibold mb-3">El gran descubrimiento que nadie conoce</p>
          {/* Waveform fake */}
          <div className="flex items-center gap-0.5 h-8 mb-3">
            {[3,6,4,8,5,9,7,4,6,8,5,3,7,9,6,4,8,5,7,3,6,9,4,7,5,8,3,6].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-full ${i < 12 ? 'bg-[#D97706]' : 'bg-white/15'}`}
                style={{ height: `${h * 10}%` }}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/30 text-[9px]">12:34</span>
            <div className="flex-1 h-0.5 bg-white/10 rounded-full">
              <div className="w-2/5 h-full bg-[#D97706] rounded-full" />
            </div>
            <span className="text-white/30 text-[9px]">32:10</span>
          </div>
        </div>
        <div className="space-y-1.5">
          {['Ep.2 — La crisis del 73 vista desde adentro', 'Ep.3 — Negociar con gobiernos'].map((ep) => (
            <div key={ep} className="flex items-center gap-2 text-[9px] text-white/40 bg-white/[0.02] rounded-lg px-3 py-2">
              <div className="w-3 h-3 rounded-full border border-white/20 flex-shrink-0" />
              {ep}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MockupAcademia() {
  return (
    <div className="bg-[#0C0800] rounded-xl border border-white/8 overflow-hidden text-xs">
      {/* Browser bar */}
      <div className="bg-[#141008] px-4 py-2.5 flex items-center gap-2 border-b border-white/6">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 bg-white/5 rounded px-3 py-1 text-white/30 text-[10px] ml-2">
          academia.legadoguimar.com
        </div>
      </div>
      {/* Courses */}
      <div className="p-4">
        <p className="text-purple-400 text-[9px] font-bold uppercase tracking-wider mb-3">Academia Petrolera — Cursos</p>
        <div className="space-y-2">
          {[
            { title: 'Evaluación de Proyectos Petroleros', level: 'Avanzado', progress: 75 },
            { title: 'Negociación de Concesiones', level: 'Experto', progress: 0 },
            { title: 'Economía del Petróleo', level: 'Intermedio', progress: 30 },
          ].map((course) => (
            <div key={course.title} className="bg-white/[0.03] border border-white/8 rounded-xl p-3">
              <div className="flex items-start justify-between gap-2 mb-2">
                <p className="text-white/70 text-[10px] font-semibold">{course.title}</p>
                <span className="text-[9px] text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full px-2 py-0.5 flex-shrink-0">{course.level}</span>
              </div>
              {course.progress > 0 && (
                <div className="h-1 bg-white/8 rounded-full">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: `${course.progress}%` }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mockupComponents: Record<string, React.FC> = {
  archivo: MockupArchivo,
  ai: MockupAI,
  podcast: MockupPodcast,
  academia: MockupAcademia,
}

export default function FasePreviewSection() {
  const [active, setActive] = useState(0)
  const { ref, inView } = useInView(0.1)

  const ActiveMockup = mockupComponents[fases[active].mockup]

  return (
    <section className="py-24 md:py-36 bg-[#060300]">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-[#D97706] text-xs font-bold tracking-[0.3em] uppercase">Vista Previa</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-3 mb-3">
            Así se Vería Cada Fase
          </h2>
          <p className="text-white/35 text-sm max-w-md mx-auto">
            Mockups ilustrativos — diseño final a definir con Guimar
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/8 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 bg-[#D97706] rounded-full animate-pulse" />
            <span className="text-white/35 text-xs">Vista tentativa — para ilustrar el concepto</span>
          </div>
        </div>

        <div ref={ref} className={`grid md:grid-cols-[1fr_1.4fr] gap-8 items-start transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left: phase selector */}
          <div className="space-y-3">
            {fases.map((f, i) => (
              <button
                key={f.num}
                onClick={() => setActive(i)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                  active === i
                    ? 'bg-white/[0.06] border-[#D97706]/30'
                    : 'bg-white/[0.02] border-white/6 hover:border-white/15'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-black ${active === i ? f.label : 'text-white/25'}`}>
                    Fase {f.num}
                  </span>
                  <span className={`text-[10px] border rounded-full px-2 py-0.5 ${active === i ? f.badge : 'bg-white/3 border-white/8 text-white/25'}`}>
                    {f.period}
                  </span>
                </div>
                <p className={`text-sm font-bold mt-1.5 ${active === i ? 'text-white' : 'text-white/40'}`}>
                  {f.title}
                </p>
              </button>
            ))}
          </div>

          {/* Right: mockup */}
          <div className="sticky top-20">
            <ActiveMockup />
            <p className="text-center text-white/20 text-[10px] mt-4 uppercase tracking-wider">
              Vista previa ilustrativa — {fases[active].title}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
