'use client'
import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const STARTERS = [
  '¿Cuándo supiste que Vaca Muerta iba a ser el próximo gran yacimiento?',
  '¿Cómo fue cerrar el acuerdo con ExxonMobil?',
  '¿Qué le dirías a un ingeniero joven que empieza hoy en la industria?',
  '¿Cuál fue el momento más difícil de tu carrera?',
  '¿Cuánto vale realmente un buen olfato técnico en esta industria?',
]

export default function GuimarAIPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [streaming, setStreaming] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, streaming])

  async function send(text: string) {
    if (!text.trim() || streaming) return
    const userMsg: Message = { role: 'user', content: text.trim() }
    const nextMessages = [...messages, userMsg]
    setMessages(nextMessages)
    setInput('')
    setStreaming(true)

    const assistantMsg: Message = { role: 'assistant', content: '' }
    setMessages([...nextMessages, assistantMsg])

    try {
      const res = await fetch('/api/guimar-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })

      if (!res.ok || !res.body) throw new Error('Error de red')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let full = ''

      while (true) {
        const { value, done } = await reader.read()
        if (done) break
        full += decoder.decode(value, { stream: true })
        setMessages([...nextMessages, { role: 'assistant', content: full }])
      }
    } catch {
      setMessages([...nextMessages, { role: 'assistant', content: 'Hubo un error al conectar. Intenta de nuevo.' }])
    } finally {
      setStreaming(false)
      inputRef.current?.focus()
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  const isEmpty = messages.length === 0

  return (
    <div className="min-h-screen bg-[#050200] text-white flex flex-col">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-20 border-b border-white/5 bg-[#050200]/95 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="text-white/30 hover:text-white/60 transition-colors text-sm">←</a>
            <div className="w-px h-4 bg-white/10" />
            <span className="text-white/60 text-sm font-medium">Guimar AI</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400/80 text-xs font-medium">En línea</span>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 pt-14 pb-36 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4">

          {/* Profile card — only shown when empty */}
          {isEmpty && (
            <div className="pt-16 pb-10 text-center">
              <div className="inline-flex flex-col items-center gap-4">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D97706] to-[#92400E] flex items-center justify-center text-3xl font-black text-white shadow-xl shadow-[#D97706]/20">
                    GV
                  </div>
                  <span className="absolute -bottom-1 -right-1 text-lg">⚡</span>
                </div>

                <div>
                  <h1 className="text-2xl font-black text-white">Guimar Vaca Coca</h1>
                  <p className="text-white/40 text-sm mt-1">Ingeniero en Petróleo · 50+ años en la industria</p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 text-center mt-2">
                  {[
                    { v: 'USD 675M', l: 'Pioneer → Apache' },
                    { v: 'ExxonMobil', l: 'Socio estratégico' },
                    { v: '2012', l: 'Predijo Vaca Muerta' },
                  ].map(s => (
                    <div key={s.l}>
                      <p className="text-[#FBBF24] text-sm font-bold">{s.v}</p>
                      <p className="text-white/30 text-[10px]">{s.l}</p>
                    </div>
                  ))}
                </div>

                <p className="text-white/30 text-sm max-w-xs text-center mt-2 leading-relaxed">
                  Hacé tus preguntas. Este prototipo usa IA para responder como Guimar, basado en su trayectoria real.
                </p>
              </div>

              {/* Starter chips */}
              <div className="mt-10 flex flex-wrap gap-2 justify-center max-w-xl mx-auto">
                {STARTERS.map(s => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="bg-white/[0.04] border border-white/8 hover:border-[#D97706]/40 hover:bg-[#D97706]/10 text-white/60 hover:text-white text-sm px-4 py-2.5 rounded-xl transition-all text-left"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="space-y-6 py-6">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#D97706] to-[#92400E] flex items-center justify-center text-xs font-black text-white flex-shrink-0 mt-0.5">
                    GV
                  </div>
                )}
                <div className={`max-w-[80%] ${m.role === 'user' ? 'order-first' : ''}`}>
                  <div
                    className={`rounded-2xl px-5 py-3.5 text-sm leading-relaxed whitespace-pre-wrap ${
                      m.role === 'user'
                        ? 'bg-[#D97706]/20 border border-[#D97706]/20 text-white ml-auto'
                        : 'bg-white/[0.04] border border-white/5 text-white/85'
                    }`}
                  >
                    {m.content}
                    {/* Typing cursor */}
                    {streaming && i === messages.length - 1 && m.role === 'assistant' && (
                      <span className="inline-block w-0.5 h-4 bg-[#D97706] ml-0.5 align-middle animate-pulse" />
                    )}
                  </div>
                </div>
                {m.role === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center text-xs text-white/50 flex-shrink-0 mt-0.5">
                    Tú
                  </div>
                )}
              </div>
            ))}
          </div>

          <div ref={bottomRef} />
        </div>
      </main>

      {/* Input bar — fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#050200] via-[#050200]/95 to-transparent pt-8 pb-6 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-end gap-3 bg-white/[0.04] border border-white/10 focus-within:border-[#D97706]/50 rounded-2xl p-3 transition-colors">
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Preguntale algo a Guimar..."
              rows={1}
              disabled={streaming}
              className="flex-1 bg-transparent text-white placeholder-white/25 text-sm resize-none outline-none max-h-32 min-h-[24px] leading-relaxed disabled:opacity-40"
              style={{ height: 'auto' }}
              onInput={e => {
                const el = e.currentTarget
                el.style.height = 'auto'
                el.style.height = el.scrollHeight + 'px'
              }}
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim() || streaming}
              className="w-9 h-9 rounded-xl bg-[#D97706] hover:bg-[#B45309] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all flex-shrink-0"
            >
              {streaming ? (
                <span className="w-3 h-3 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              )}
            </button>
          </div>
          <p className="text-center text-white/15 text-[10px] mt-3">
            Prototipo experimental · Las respuestas son generadas por IA basadas en la trayectoria real de Guimar
          </p>
        </div>
      </div>
    </div>
  )
}
