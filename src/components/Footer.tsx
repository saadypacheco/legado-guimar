export default function Footer() {
  return (
    <footer className="bg-[#040200] border-t border-[#D97706]/8 py-10">
      <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#D97706] rounded-full" />
          <span className="text-white/50 font-bold tracking-wider text-sm">
            LEGADO <span className="text-[#D97706]">GUIMAR</span>
          </span>
        </div>
        <p className="text-white/25 text-xs text-center">
          Guimar Vaca Coca · 50+ años en la industria del petróleo y gas
        </p>
        <p className="text-white/20 text-xs">2026 — Propuesta confidencial</p>
      </div>
    </footer>
  )
}
