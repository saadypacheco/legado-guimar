'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { useCountUp } from '@/hooks/useCountUp'

export default function PrediccionPage() {
  return (
    <main className="bg-[#050200] text-white overflow-x-hidden">
      <HeroBlock />
      <OrigenBlock />
      <PioneerBlock />
      <PrediccionBlock />
      <ExxonBlock />
      <DescubrimientoBlock />
      <RealidadBlock />
      <LegadoBlock />
    </main>
  )
}

/* ─── HERO ─── */
function HeroBlock() {
  const [vis, setVis] = useState(false)
  useEffect(() => { setTimeout(() => setVis(true), 200) }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D97706]/10 rounded-full blur-[120px]" />
      </div>

      <div className={`transition-all duration-1000 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-[#D97706]/60 text-xs font-bold tracking-[0.4em] uppercase mb-8">Proyecto Legado Guimar</p>
        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black leading-[0.85] mb-8">
          <span className="block text-white/20 text-2xl md:text-3xl font-light tracking-widest mb-4 uppercase">La historia de</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#FBBF24] via-[#D97706] to-[#92400E]">ANTES</span>
          <br />
          <span className="text-white">QUE TODOS.</span>
        </h1>
        <p className="text-white/40 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mt-6">
          Un ingeniero boliviano que predijo el futuro del petróleo argentino — antes de que nadie lo creyera.
        </p>
      </div>

      <div className={`absolute bottom-10 flex flex-col items-center gap-2 animate-bounce transition-opacity duration-1000 delay-1000 ${vis ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-white/20 text-[10px] tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

/* ─── ORIGEN ─── */
function OrigenBlock() {
  const { ref, inView } = useInView(0.3)
  return (
    <section ref={ref} className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-4xl mx-auto w-full">
        <Label>El origen</Label>
        <div className="grid md:grid-cols-2 gap-12 items-center mt-10">
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Ingeniero.<br />
              <span className="text-[#D97706]">Boliviano.</span><br />
              Global.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Se graduó en la <strong className="text-white">Universidad Nacional de Cuyo</strong>, Mendoza. Hizo su posgrado en la <strong className="text-white">Universidad de California</strong>. Después, el mundo fue su campo de trabajo.
            </p>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-4">
              {[
                { icon: '🎓', title: 'Ingeniería en Petróleo', sub: 'Universidad Nacional de Cuyo, Mendoza' },
                { icon: '🔬', title: 'Posgrado', sub: 'Universidad de California, EE.UU.' },
                { icon: '🌎', title: '50+ años en la industria', sub: 'América, Medio Oriente, Europa' },
              ].map(item => (
                <div key={item.title} className="flex gap-4 items-start bg-white/[0.03] border border-[#D97706]/12 rounded-2xl p-5">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-white font-bold">{item.title}</p>
                    <p className="text-white/45 text-sm">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── PIONEER ─── */
function PioneerBlock() {
  const { ref, inView } = useInView(0.2)
  const n80 = useCountUp(80, 2000, inView)
  const n650 = useCountUp(650, 2500, inView)
  const n675 = useCountUp(675, 2800, inView)

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-b from-[#050200] to-[#0A0600]">
      <div className="max-w-4xl mx-auto">
        <Label>Pioneer Natural Resources · 2000 — 2006</Label>
        <h2 className={`text-3xl md:text-5xl font-black text-white mt-6 mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          Presidente de Pioneer Argentina.<br />
          <span className="text-[#D97706]">Luego, de toda Latinoamérica.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { num: n80, suffix: 'M', prefix: 'USD ', label: 'Primera inversión — 2000', sub: '70 pozos · 7 concesiones · Neuquén', delay: 0 },
            { num: n650, suffix: 'M', prefix: 'USD ', label: 'Acumulado en Argentina — 2002', sub: '20+ bloques petroleros y gasíferos', delay: 150 },
            { num: n675, suffix: 'M', prefix: 'USD ', label: 'Venta a Apache — 2006', sub: 'El cierre de una era. El inicio de otra.', delay: 300 },
          ].map((s, i) => (
            <div
              key={i}
              className={`bg-white/[0.03] border border-[#D97706]/15 rounded-2xl p-7 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${s.delay}ms` }}
            >
              <div className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-[#FBBF24] to-[#D97706] mb-1">
                {s.prefix}{s.num}{s.suffix}
              </div>
              <p className="text-white font-semibold text-sm mb-2">{s.label}</p>
              <p className="text-white/40 text-xs leading-relaxed">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── LA PREDICCIÓN ─── */
function PrediccionBlock() {
  const { ref, inView } = useInView(0.3)
  const words1 = '"Creemos que el próximo gran desarrollo shale fuera de Norteamérica'.split(' ')
  const words2 = 'ocurrirá en la Cuenca Neuquina."'.split(' ')

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-black overflow-hidden">
      {/* Subtle amber pulse in background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D97706]/5 rounded-full blur-[200px] transition-opacity duration-2000 ${inView ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Year */}
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-[#D97706]/50 text-xs font-bold tracking-[0.5em] uppercase">Americas Petrogas · Cuenca Neuquina</span>
          <p className="text-7xl md:text-9xl font-black text-white/10 mt-2 mb-10">2012</p>
        </div>

        {/* Quote - word by word */}
        <blockquote className="text-2xl md:text-4xl font-black leading-tight text-white mb-8">
          <span className="text-[#D97706]/40 text-5xl leading-none">"</span>
          {words1.map((w, i) => (
            <span
              key={i}
              className={`inline-block mr-[0.25em] transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${400 + i * 80}ms` }}
            >
              {w}
            </span>
          ))}
          <br className="hidden md:block" />
          {words2.map((w, i) => (
            <span
              key={i}
              className={`inline-block mr-[0.25em] text-[#FBBF24] transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${400 + (words1.length + i) * 80}ms` }}
            >
              {w}
            </span>
          ))}
        </blockquote>

        {/* Attribution */}
        <div className={`transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${400 + (words1.length + words2.length) * 80 + 200}ms` }}>
          <p className="text-white/35 text-sm tracking-widest">— Guimar Vaca Coca, 2012</p>
          <div className="mt-8 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#D97706]/40 to-transparent" />
          <p className="text-white/25 text-sm mt-6 italic">En ese momento, nadie apostaba todo por Vaca Muerta.</p>
        </div>
      </div>
    </section>
  )
}

/* ─── EXXON ─── */
function ExxonBlock() {
  const { ref, inView } = useInView(0.3)
  const n76 = useCountUp(76, 2000, inView)

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-b from-black to-[#050200]">
      <div className="max-w-4xl mx-auto">
        <Label>La apuesta — Los Toldos</Label>
        <div className="grid md:grid-cols-2 gap-12 items-center mt-10">
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Cuando ExxonMobil<br />elige a alguien como<br />
              <span className="text-[#D97706]">socio estratégico,</span><br />
              algo saben.
            </h2>
            <p className="text-white/45 text-lg leading-relaxed">
              Americas Petrogas y ExxonMobil. Desarrollo conjunto de shale en los bloques de Los Toldos. Una inversión que validó lo que Guimar venía diciendo.
            </p>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/[0.03] border border-[#D97706]/20 rounded-3xl p-10 text-center">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Inversión inicial ExxonMobil</p>
              <div className="text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-[#FBBF24] to-[#D97706]">
                USD {n76}M
              </div>
              <div className="mt-6 space-y-2 text-left">
                {['Participación en bloques de Los Toldos', 'Desarrollo conjunto de recursos shale', 'Americas Petrogas conservó la operación'].map(t => (
                  <div key={t} className="flex items-center gap-2.5 text-sm text-white/50">
                    <span className="w-1.5 h-1.5 bg-[#D97706] rounded-full flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── DESCUBRIMIENTO ─── */
function DescubrimientoBlock() {
  const { ref, inView } = useInView(0.3)

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050200] to-[#0A0400]" />
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D97706]/30 to-transparent transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`} />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-[#D97706]/50 text-xs font-bold tracking-[0.4em] uppercase">El momento</span>
          <h2 className="text-5xl md:text-7xl font-black text-white mt-4 mb-2">Marzo 2013.</h2>
          <h3 className="text-2xl md:text-3xl font-black text-[#FBBF24] mb-10">Shale oil confirmado en Vaca Muerta.</h3>
        </div>

        <div className={`bg-black/50 border border-[#D97706]/20 rounded-2xl p-8 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-[#D97706]/40 text-4xl leading-none">"</span>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed italic">
            Este descubrimiento demuestra que Vaca Muerta presenta sobrepresión a poca profundidad y podría ampliar significativamente el área productiva conocida.
          </p>
          <p className="text-white/30 text-sm mt-4 tracking-wider">— Guimar Vaca Coca, marzo 2013</p>
        </div>
      </div>
    </section>
  )
}

/* ─── PREDICCIONES VS REALIDAD ─── */
const comparaciones = [
  {
    dijo: '"Argentina tiene recursos shale de clase mundial."',
    paso: 'Vaca Muerta: 2do reservorio shale más grande del mundo fuera de Norteamérica.',
  },
  {
    dijo: '"La producción crecerá de forma explosiva."',
    paso: 'Argentina pasó de cero a exportar GNL a más de 20 países. Producción récord en 2024.',
  },
  {
    dijo: '"Las inversiones superarán los miles de millones."',
    paso: 'Más de USD 30.000 millones invertidos en la Cuenca Neuquina desde 2013.',
  },
  {
    dijo: '"Neuquén se convertirá en un centro energético global."',
    paso: 'Hoy opera con YPF, Shell, TotalEnergies, ExxonMobil, Chevron y más de 50 empresas internacionales.',
  },
]

function RealidadBlock() {
  const { ref, inView } = useInView(0.1)

  return (
    <section ref={ref} className="py-32 px-6 bg-[#060300]">
      <div className="max-w-5xl mx-auto">
        <Label>Predicciones vs Realidad</Label>
        <h2 className={`text-3xl md:text-5xl font-black text-white mt-6 mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          Lo que dijo en 2012.<br />
          <span className="text-[#D97706]">Lo que pasó después.</span>
        </h2>

        <div className="space-y-4">
          {comparaciones.map((c, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/5 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="bg-[#1A0E00] border-r border-white/5 p-6">
                <p className="text-[10px] font-bold text-[#D97706]/60 uppercase tracking-widest mb-3">Guimar dijo · 2012</p>
                <p className="text-white/70 text-sm md:text-base italic leading-relaxed">{c.dijo}</p>
              </div>
              <div className="bg-[#001A05] p-6">
                <p className="text-[10px] font-bold text-emerald-500/60 uppercase tracking-widest mb-3">Lo que pasó</p>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">{c.paso}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── LEGADO ─── */
function LegadoBlock() {
  const { ref, inView } = useInView(0.3)

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 py-32 bg-gradient-to-b from-[#060300] to-[#020100]">
      <div className="max-w-2xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-[#D97706]/50 text-xs font-bold tracking-[0.4em] uppercase">Y sin embargo</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-6 mb-6 leading-tight">
            Hay 50 años más<br />
            <span className="text-white/30">de historia</span><br />
            <span className="text-[#D97706]">que no se contó.</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed mb-12 max-w-lg mx-auto">
            Proyectos en otros países. Negociaciones con gobiernos. Decisiones que movieron más millones. Lecciones que ningún libro tiene todavía.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/guimar-ai"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D97706] to-[#B45309] text-white font-bold px-8 py-4 rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-[#D97706]/20"
            >
              <span>🤖</span>
              Hablar con Guimar AI
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 hover:text-white hover:border-white/30 font-semibold px-8 py-4 rounded-full transition-all"
            >
              Ver el proyecto completo →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Helpers ─── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[#D97706] text-xs font-bold tracking-[0.3em] uppercase">{children}</span>
  )
}
