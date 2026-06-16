import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Proyecto Legado Guimar | 50 años de experiencia petrolera',
  description: 'Preservar, digitalizar y amplificar el conocimiento acumulado por Guimar Vaca Coca durante más de 50 años en la industria del petróleo y gas.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-[#060300] text-white antialiased">{children}</body>
    </html>
  )
}
