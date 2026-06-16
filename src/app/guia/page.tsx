export const metadata = {
  title: 'Guía — Proyecto Legado Guimar',
}

export default function GuiaPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#1C1400]">
      {/* Header */}
      <div className="bg-[#D97706] px-6 py-4 flex items-center gap-3">
        <div className="w-2.5 h-2.5 bg-white rounded-full" />
        <span className="text-white font-black tracking-wider text-sm">
          LEGADO GUIMAR — Guía del Proyecto
        </span>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-14">

        {/* Block 1 */}
        <Block num="01" title="Lo que tiene Guimar es único">
          <P>
            Guimar tiene algo que muy pocas personas en el mundo tienen.
          </P>
          <P>
            Son <strong>50 años trabajando en la industria del petróleo</strong>. En distintos países del mundo. Negociando con gobiernos. Descubriendo campos petroleros. Tomando decisiones que movían millones de dólares.
          </P>
          <P>
            Ese conocimiento está en su cabeza. En su memoria. En sus historias.
          </P>
          <Highlight>
            Y el problema es simple: ese conocimiento no existe en ningún otro lugar del mundo. Si no lo capturamos, se pierde para siempre.
          </Highlight>
        </Block>

        <Divider />

        {/* Block 2 */}
        <Block num="02" title="¿Qué queremos hacer?">
          <P>
            La idea es muy simple: <strong>Guimar habla. Nosotros grabamos.</strong>
          </P>
          <P>
            Si Guimar quiere escribir un libro, este proyecto es exactamente el camino para lograrlo. No hay que sentarse a escribir desde una hoja en blanco. Las conversaciones que vamos a tener <strong>son el libro</strong>. Guimar habla, nosotros organizamos, y de ahí sale el libro, más un archivo digital, más mucho más. Es la forma más natural y poderosa de hacerlo.
          </P>
          <QuoteBox>
            "¿Cómo fue ese proyecto en Venezuela?"<br />
            "¿Qué viviste trabajando en el Medio Oriente?"<br />
            "¿Qué harías hoy diferente en aquella negociación?"<br />
            "¿Cuáles fueron los momentos que más te marcaron?"
          </QuoteBox>
          <P>
            Guimar ha trabajado en muchos lugares del mundo. Cada uno tiene una historia. Esas son las preguntas. Las respuestas son el tesoro.
          </P>
          <P>
            Se graba la conversación. Y con eso arrancamos.
          </P>
        </Block>

        <Divider />

        {/* Block 3 */}
        <Block num="03" title="¿Y qué hacemos con esas historias?">
          <P>
            Con esas conversaciones vamos a construir varias cosas, paso a paso.
          </P>

          <StepCard
            icon="📖"
            title="El libro — en las palabras de Guimar"
            desc="La historia de Guimar, tal como él la cuenta. Con fotos, con mapas, con los países donde estuvo. Un libro real, impreso y digital, que puede leer su familia, sus amigos y los profesionales de la industria en todo el mundo."
          />
          <StepCard
            icon="🤖"
            title="Una inteligencia artificial que piensa como Guimar"
            desc='Cualquier ingeniero en cualquier parte del mundo va a poder preguntar: "¿Cómo evaluarías este proyecto?" Y el sistema responde con el criterio y la experiencia de Guimar. Como si él estuviera ahí, disponible siempre.'
          />
          <StepCard
            icon="🗺️"
            title="Un museo digital de su trayectoria"
            desc="Todos los proyectos de Guimar en un mapa del mundo. Hacés click en cualquier país y ves qué hizo ahí: documentos, fotos, decisiones. Un recorrido por 50 años de historia de la industria."
          />
          <StepCard
            icon="🎙️"
            title="Un podcast con sus historias"
            desc="Sus experiencias en audio, disponibles para ingenieros y profesionales de cualquier lugar del mundo que quieran aprender de alguien que estuvo ahí de verdad."
          />

          <P>Y hay muchas cosas más que podemos construir con el tiempo.</P>
        </Block>

        <Divider />

        {/* Block 4 */}
        <Block num="04" title="¿Por qué ahora?">
          <P>
            Porque este tipo de conocimiento no espera.
          </P>
          <P>
            Guimar vivió cosas que nadie más vivió. Tomó decisiones que nadie más tomó. Ese conocimiento, si no lo capturamos hoy, se pierde. Y sería una pérdida enorme para la industria del petróleo en todo el mundo.
          </P>
          <Highlight>
            Los ingenieros jóvenes de cualquier lugar del mundo necesitan a alguien como Guimar. Y nosotros podemos hacer que Guimar esté disponible para ellos, para siempre.
          </Highlight>
        </Block>

        <Divider />

        {/* Block 5 */}
        <Block num="05" title="¿Qué necesitamos de Guimar?">
          <P>
            Necesitamos su tiempo para contar sus historias.
          </P>
          <P>
            Sentado cómodo, cuando quiera y tenga ganas. Sin apuro. Sin estructura rígida. Contando lo que vivió, lo que aprendió, lo que haría diferente.
          </P>
          <P>
            El resto lo hacemos nosotros.
          </P>
        </Block>

        <Divider />

        {/* Block 6 */}
        <Block num="06" title="¿En qué idioma?">
          <P>
            El proyecto puede desarrollarse en el idioma que Guimar prefiera.
          </P>
          <P>
            Si quiere que su legado llegue a ingenieros de habla inglesa, lo hacemos en inglés. Si quiere llegar a toda Latinoamérica, en español. Si quiere los dos, los dos. El conocimiento de Guimar no tiene fronteras, y este proyecto tampoco.
          </P>
        </Block>

        <Divider />

        {/* Block 7 */}
        <Block num="07" title="¿Qué va a quedar cuando esto esté terminado?">
          <P>
            Va a quedar el nombre de Guimar. Su voz. Su conocimiento.
          </P>
          <P>
            Disponible para siempre, para profesionales de todo el mundo.
          </P>
          <P>
            Va a quedar una plataforma que sigue generando valor aunque no estemos.
          </P>

          <div className="bg-[#D97706] rounded-2xl p-7 mt-8 text-center">
            <p className="text-white/80 text-sm font-medium mb-2">El objetivo no es</p>
            <p className="text-white/50 text-2xl font-black line-through mb-4">un homenaje.</p>
            <p className="text-white/80 text-sm font-medium mb-2">El objetivo es</p>
            <p className="text-white text-3xl font-black">un legado vivo.</p>
          </div>
        </Block>

        <Divider />

        {/* Block final — productos */}
        <Block num="08" title="Todo lo que vamos a construir juntos">
          <P>
            Cada conversación con Guimar es la semilla de uno o varios de estos productos. Algunos salen rápido. Otros llevan más tiempo. Pero todos nacen del mismo lugar: su conocimiento y su historia.
          </P>

          <div className="mt-6 space-y-2">
            {[
              { icon: '📖', name: 'El Libro', desc: 'Autobiografía en papel y formato digital — en el idioma que Guimar elija' },
              { icon: '🗂️', name: 'Archivo Histórico Digital', desc: 'Documentos, fotos, contratos y mapas de 50 años, organizados y accesibles' },
              { icon: '🤖', name: 'Guimar AI — Mentor Virtual', desc: 'Inteligencia artificial entrenada con su conocimiento, disponible 24 horas' },
              { icon: '🎙️', name: 'Podcast & Documental', desc: 'Sus historias en audio y video, para profesionales de todo el mundo' },
              { icon: '🗺️', name: 'Google Maps del Conocimiento', desc: 'Mapa interactivo con cada proyecto y país donde Guimar trabajó' },
              { icon: '⏳', name: 'Time Machine Energética', desc: 'La IA recrea escenarios históricos con el criterio de Guimar' },
              { icon: '🎓', name: 'Academia Petrolera', desc: 'Cursos online de exploración, producción, liderazgo y negociación' },
              { icon: '⚙️', name: 'Petroleum Copilot LATAM', desc: 'Plataforma IA para empresas y gobiernos: reservas, producción y escenarios' },
              { icon: '💼', name: 'Advisory Board', desc: 'Su criterio como servicio: due diligence y mentoría ejecutiva' },
              { icon: '📚', name: 'Biblioteca de Errores Millonarios', desc: 'Errores reales de la industria que la IA enseña a evitar' },
              { icon: '🎬', name: 'Reality Show Ejecutivo', desc: 'Simulación filmada donde profesionales toman decisiones reales y Guimar veredicta' },
              { icon: '🎮', name: 'Simulador Ejecutivo Petrolero', desc: 'Videojuego profesional basado en casos históricos reales' },
              { icon: '🎬', name: 'Netflix del Petróleo', desc: 'Biblioteca audiovisual con suscripción para profesionales del sector' },
              { icon: '🏛️', name: 'Museo Petrolero Digital', desc: 'Recorrido inmersivo por la historia energética latinoamericana' },
            ].map((p, i) => (
              <div key={p.name} className="flex items-start gap-4 bg-white border border-[#D97706]/12 rounded-xl px-4 py-3.5 shadow-sm">
                <span className="text-xl flex-shrink-0">{p.icon}</span>
                <div className="flex-1 min-w-0">
                  <span className="font-bold text-[#1C1400] text-sm">{p.name}</span>
                  <span className="text-[#7C5200] text-sm"> — {p.desc}</span>
                </div>
                <span className="text-[10px] font-bold text-[#D97706]/50 flex-shrink-0 self-center">#{String(i + 1).padStart(2, '0')}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#D97706]/10 border border-[#D97706]/20 rounded-2xl p-5 text-center">
            <p className="text-[#7C3A00] text-sm font-semibold">
              14 productos. Todos nacen de la misma fuente: las historias de Guimar.
            </p>
          </div>
        </Block>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[#D97706]/20 text-center">
          <p className="text-[#92400E]/60 text-sm">Proyecto Legado Guimar — 2026</p>
          <a
            href="/"
            className="inline-flex items-center gap-2 mt-4 text-[#D97706] font-semibold text-sm hover:underline"
          >
            ← Ver la presentación completa del proyecto
          </a>
        </div>

      </div>
    </main>
  )
}

/* ── Helpers ── */

function Block({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-4">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[#D97706] text-xs font-black tracking-widest">{num}</span>
        <h2 className="text-2xl md:text-3xl font-black text-[#1C1400]">{title}</h2>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-lg text-[#3D2B00] leading-relaxed">{children}</p>
}

function Divider() {
  return <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#D97706]/30 to-transparent" />
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#D97706]/10 border-l-4 border-[#D97706] rounded-r-xl pl-5 pr-4 py-4 mt-2">
      <p className="text-[#7C3A00] text-base md:text-lg font-semibold leading-relaxed">{children}</p>
    </div>
  )
}

function QuoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#D97706]/20 rounded-2xl px-6 py-5 my-2 shadow-sm">
      <p className="text-[#3D2B00] text-base md:text-lg italic leading-relaxed">{children}</p>
    </div>
  )
}

function StepCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex gap-4 bg-white border border-[#D97706]/15 rounded-2xl p-5 shadow-sm">
      <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
      <div>
        <h3 className="font-bold text-[#1C1400] text-base mb-1">{title}</h3>
        <p className="text-[#5C4200] text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
