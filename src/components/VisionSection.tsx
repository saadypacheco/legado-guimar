'use client'
import { useInView } from '@/hooks/useInView'

const pillars = [
  {
    icon: '🏛️',
    title: 'Preservar',
    desc: 'Documentar y digitalizar 50 años de historia antes de que se pierdan para siempre.',
  },
  {
    icon: '⚡',
    title: 'Amplificar',
    desc: 'Convertir ese conocimiento en IA, cursos y plataformas que escalen a nivel global.',
  },
  {
    icon: '♾️',
    title: 'Perpetuar',
    desc: 'Generar valor durante décadas para la industria, la academia y la historia energética.',
  },
]

export default function VisionSection() {
  const { ref, inView } = useInView(0.2)

  return (
    <section id="vision" className="py-24 md:py-36 bg-gradient-to-b from-[#060300] via-[#080500] to-[#0A0700]">
      <div className="max-w-4xl mx-auto px-4 md:px-8" ref={ref}>
        {/* Label */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-[#D97706] text-xs font-bold tracking-[0.3em] uppercase">La Visión</span>
        </div>

        {/* Statement */}
        <div className={`text-center mb-20 transition-all duration-1000 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-white/30 text-lg md:text-2xl font-light mb-3">El objetivo no es</p>
          <h2 className="text-4xl md:text-6xl font-black text-white/18 line-through decoration-white/20 mb-6">
            escribir una autobiografía.
          </h2>
          <p className="text-white/30 text-lg md:text-2xl font-light mb-3">El objetivo es</p>
          <h2 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#FBBF24] via-[#D97706] to-[#FBBF24]">
            construir un legado vivo.
          </h2>
        </div>

        {/* Three pillars */}
        <div
          className={`grid md:grid-cols-3 gap-5 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {pillars.map((v) => (
            <div
              key={v.title}
              className="bg-white/[0.03] border border-[#D97706]/12 rounded-2xl p-7 text-center hover:border-[#D97706]/30 hover:bg-[#D97706]/[0.04] transition-all duration-300 group"
            >
              <span className="text-4xl mb-4 block">{v.icon}</span>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#FBBF24] transition-colors">{v.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
