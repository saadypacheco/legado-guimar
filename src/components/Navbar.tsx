'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Visión', href: '#vision' },
  { label: 'Pilares', href: '#pilares' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Ideas', href: '#ideas' },
]

const ctaLinks = [
  { label: 'La Predicción', href: '/prediccion' },
  { label: 'Guimar AI', href: '/guimar-ai' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060300]/90 backdrop-blur-md border-b border-[#D97706]/10 shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 bg-[#D97706] rounded-full animate-pulse" />
          <span className="text-white font-black tracking-wider text-sm md:text-base">
            LEGADO <span className="text-[#D97706]">GUIMAR</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/50 hover:text-[#FBBF24] text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {ctaLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all ${
                l.href === '/guimar-ai'
                  ? 'bg-[#D97706] hover:bg-[#B45309] text-white shadow-md shadow-[#D97706]/20'
                  : 'border border-[#D97706]/30 text-[#FBBF24] hover:border-[#D97706]/60 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
