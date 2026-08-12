import Image from "next/image";

const WHATSAPP_NUMBER = "5491121711289";
const WHATSAPP_MESSAGE = "Hola, quiero saber más sobre ArgencoreAI.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const FEATURES = [
  {
    title: "Respuestas automáticas con IA",
    description:
      "ArgencoreAI responde a tus clientes por WhatsApp usando la información real de tu negocio (RAG), con respuestas precisas y siempre actualizadas.",
  },
  {
    title: "Disponible las 24 horas",
    description:
      "Tu negocio nunca deja a un cliente esperando. ArgencoreAI atiende consultas todos los días del año, sin importar el horario.",
  },
  {
    title: "Panel de administración",
    description:
      "Gestioná conversaciones, contenidos y la base de conocimiento de tu empresa desde un panel simple, pensado para no técnicos.",
  },
  {
    title: "Multi-cliente",
    description:
      "Una misma plataforma para administrar múltiples cuentas de WhatsApp Business, ideal para empresas con distintas marcas o sucursales.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Conectamos tu WhatsApp Business",
    description:
      "Integramos ArgencoreAI con tu número de WhatsApp Business API de forma segura.",
  },
  {
    number: "02",
    title: "Cargamos el conocimiento de tu negocio",
    description:
      "Entrenamos al chatbot con la información de tus productos, servicios y preguntas frecuentes.",
  },
  {
    number: "03",
    title: "Empezás a responder automáticamente",
    description:
      "Tus clientes escriben por WhatsApp y reciben respuestas precisas al instante, las 24 horas.",
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.763.462 3.483 1.34 4.997L2 22l5.116-1.322a9.96 9.96 0 0 0 4.885 1.318h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.671-1.04-5.182-2.928-7.07a9.93 9.93 0 0 0-7.073-2.926zm0 18.174a8.16 8.16 0 0 1-4.166-1.14l-.299-.177-3.037.785.81-2.96-.194-.304a8.176 8.176 0 0 1-1.257-4.38c0-4.51 3.671-8.181 8.146-8.181 2.175 0 4.219.848 5.757 2.387a8.098 8.098 0 0 1 2.386 5.795c-.003 4.51-3.674 8.175-8.146 8.175z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="Argencore Solutions"
              width={40}
              height={40}
              className="h-9 w-9 rounded object-contain"
              priority
            />
            <span className="text-lg font-semibold tracking-tight text-navy">
              Argencore <span className="text-blue">Solutions</span>
            </span>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Hablar por WhatsApp
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-block rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-blue">
              Inteligencia artificial para WhatsApp Business
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
              Atención al cliente por WhatsApp, potenciada por{" "}
              <span className="text-blue">IA</span>
            </h1>
            <p className="mt-6 text-lg text-muted">
              ArgencoreAI es el chatbot inteligente de Argencore Solutions:
              responde automáticamente a tus clientes por WhatsApp, con
              información real de tu negocio, las 24 horas del día.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3 text-base font-medium text-white transition hover:opacity-90"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Hablar por WhatsApp
              </a>
              <a
                href="#producto"
                className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-6 py-3 text-base font-medium text-navy transition hover:bg-surface"
              >
                Ver qué hace ArgencoreAI
              </a>
            </div>
          </div>
        </section>

        {/* Producto */}
        <section id="producto" className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-navy">
                Qué hace ArgencoreAI
              </h2>
              <p className="mt-4 text-muted">
                Una plataforma de chatbots con inteligencia artificial pensada
                para que las empresas atiendan mejor a sus clientes por
                WhatsApp, sin perder el toque humano.
              </p>
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5"
                >
                  <h3 className="text-lg font-semibold text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-navy">
                Cómo funciona
              </h2>
              <p className="mt-4 text-muted">
                Empezar a usar ArgencoreAI en tu negocio es simple.
              </p>
            </div>
            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              {STEPS.map((step) => (
                <div key={step.number}>
                  <span className="text-3xl font-semibold text-blue">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre nosotros */}
        <section className="bg-navy py-20 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              Sobre Argencore Solutions
            </h2>
            <p className="mt-6 text-lg text-white/80">
              Somos una empresa argentina especializada en soluciones de
              inteligencia artificial para empresas. Desarrollamos
              ArgencoreAI, nuestra plataforma de chatbots inteligentes, para
              ayudar a los negocios a automatizar su atención al cliente por
              WhatsApp de forma simple, rápida y cercana.
            </p>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-navy">
              Hablemos por WhatsApp
            </h2>
            <p className="mt-4 text-muted">
              Contanos sobre tu negocio y te mostramos cómo ArgencoreAI puede
              atender a tus clientes por WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue px-8 py-3.5 text-base font-medium text-white transition hover:opacity-90"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Escribinos por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
          <span>
            © {new Date().getFullYear()} Argencore Solutions. Argentina.
          </span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy hover:text-blue"
          >
            <WhatsAppIcon className="h-4 w-4" />
            +54 9 11 2171-1289
          </a>
        </div>
      </footer>
    </div>
  );
}
