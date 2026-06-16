export const metadata = {
  title: 'Para Marcos — Cómo presentarle el proyecto a Guimar',
}

export default function GuiaPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#1C1400]">
      {/* Header */}
      <div className="bg-[#D97706] px-6 py-4 flex items-center gap-3">
        <div className="w-2.5 h-2.5 bg-white rounded-full" />
        <span className="text-white font-black tracking-wider text-sm">
          LEGADO GUIMAR — Guía para Marcos
        </span>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-14">

        {/* Intro badge */}
        <div className="inline-flex items-center gap-2 bg-[#D97706]/12 border border-[#D97706]/30 rounded-full px-4 py-2 mb-10">
          <span className="w-2 h-2 bg-[#D97706] rounded-full" />
          <span className="text-[#92400E] text-sm font-semibold">
            Esto es para vos, Marcos — para que puedas explicarle el proyecto a Guimar
          </span>
        </div>

        {/* Block 1 */}
        <Block
          num="01"
          title="Lo que tiene Guimar es único"
        >
          <P>
            Guimar tiene algo que muy pocas personas en el mundo tienen.
          </P>
          <P>
            No es dinero. No es una casa. Es algo que no se puede comprar.
          </P>
          <P>
            Son <strong>50 años trabajando en el petróleo</strong>. En Bolivia, en Argentina, en Venezuela, en países de todo el mundo. Negociando con gobiernos. Descubriendo campos petroleros. Tomando decisiones que movían millones de dólares.
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
            No le pedimos que escriba un libro. No le pedimos un esfuerzo enorme. Solo que cuente sus historias. Como si estuviera tomando un café con un amigo.
          </P>
          <QuoteBox>
            "¿Cómo fue ese proyecto en Venezuela?"<br />
            "¿Qué hiciste cuando los precios del petróleo cayeron?"<br />
            "¿Cuál fue la decisión más difícil que tomaste?"
          </QuoteBox>
          <P>
            Eso es todo lo que necesitamos al principio. Vos hacés las preguntas, Marcos. Grabás la conversación. Y con eso arrancamos.
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
            title="Un libro digital"
            desc="La historia de Guimar, en palabras de Guimar. Con fotos, con mapas, con los países donde estuvo. Algo que su familia, sus amigos y los ingenieros jóvenes puedan leer."
          />
          <StepCard
            icon="🤖"
            title="Una inteligencia artificial que piensa como Guimar"
            desc='Cualquier ingeniero joven en Bolivia va a poder preguntarle a una computadora: "¿Cómo evaluarías este proyecto?" Y la computadora responde con el criterio y la experiencia de Guimar. Como si él estuviera ahí.'
          />
          <StepCard
            icon="🗺️"
            title="Un museo digital"
            desc="Todos los proyectos de Guimar en un mapa del mundo. Hacés click en Bolivia y ves qué hizo ahí. Hacés click en Venezuela y ves sus documentos, sus fotos, sus decisiones."
          />
          <StepCard
            icon="🎙️"
            title="Un podcast con sus historias"
            desc="Sus experiencias en audio, disponibles para ingenieros de Argentina, Bolivia, Venezuela y más países donde Guimar dejó huella."
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
            Guimar vivió cosas que nadie más vivió. Tomó decisiones que nadie más tomó. Ese conocimiento, si no lo capturamos hoy, se pierde. Y sería una pérdida enorme para la industria del petróleo en toda Latinoamérica.
          </P>
          <Highlight>
            Los ingenieros jóvenes de Bolivia, Argentina y Venezuela necesitan a alguien como Guimar. Y nosotros podemos hacer que Guimar esté disponible para ellos, para siempre.
          </Highlight>
        </Block>

        <Divider />

        {/* Block 5 */}
        <Block num="05" title="¿Qué le pedimos a Guimar?">
          <P>
            Muy poco al principio.
          </P>
          <P>
            <strong>Una o dos horas a la semana</strong>, cuando quiera y tenga ganas. Sentado cómodo, en su silla. Contando historias.
          </P>
          <P>
            Marcos va a estar con él para hacer las preguntas. Va a grabar la conversación. Y eso es todo.
          </P>
          <P>
            El resto lo hacemos nosotros.
          </P>
        </Block>

        <Divider />

        {/* Block 6 */}
        <Block num="06" title="¿Qué va a quedar cuando esto esté terminado?">
          <P>
            Va a quedar el nombre de Guimar. Su voz. Su conocimiento.
          </P>
          <P>
            Disponible para siempre, para ingenieros de todo el mundo.
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

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-[#D97706]/20 text-center">
          <p className="text-[#92400E]/60 text-sm">
            Proyecto Legado Guimar — 2026
          </p>
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
