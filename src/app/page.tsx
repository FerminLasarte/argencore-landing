import Image from "next/image";
import Reveal from "./components/reveal";

const WHATSAPP_NUMBER = "5491162799371";
const WHATSAPP_DISPLAY = "+54 9 11 6279-9371";
const WHATSAPP_MESSAGE = "Hola, quiero saber más sobre Argencore Solutions.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const EMAIL = "argencoresolutions@gmail.com";
const EMAIL_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Consulta desde argencoresolutions.com.ar"
)}`;

const INSTAGRAM_URL = "https://www.instagram.com/argencoresolutions/";

const CAPABILITIES = [
  {
    title: "Páginas web",
    description:
      "Sitios institucionales, landings y tiendas online: diseño propio, carga rápida, pensados para verse bien en celular y aparecer en Google.",
  },
  {
    title: "Desarrollo de software a medida",
    description:
      "Diseñamos y construimos aplicaciones web y plataformas pensadas para el problema concreto de cada empresa, no para un molde genérico.",
  },
  {
    title: "Inteligencia artificial aplicada",
    description:
      "Integramos modelos de IA a procesos reales de negocio: asistentes conversacionales, búsqueda sobre documentación propia y automatización de respuestas.",
  },
  {
    title: "Automatización de procesos",
    description:
      "Identificamos tareas repetitivas dentro de la operación y las convertimos en flujos automáticos, para que el equipo dedique su tiempo a lo importante.",
  },
  {
    title: "Integraciones y APIs",
    description:
      "Conectamos los sistemas que ya usás —WhatsApp, CRMs, bases de datos y servicios externos— para que la información fluya sin cargas manuales.",
  },
];

const PROJECT_FEATURES = [
  "Respuestas automáticas con IA sobre la información real de cada negocio",
  "Panel de administración para gestionar clientes y contenidos",
  "Arquitectura multi-tenant: varias cuentas desde una sola plataforma",
  "Integración directa con WhatsApp Business API",
];

const PROCESS = [
  {
    number: "01",
    title: "Entendemos el problema",
    description:
      "Arrancamos escuchando cómo trabaja tu empresa hoy y dónde se pierde tiempo o se caen oportunidades.",
  },
  {
    number: "02",
    title: "Diseñamos la solución",
    description:
      "Definimos el alcance y proponemos una solución concreta, con tecnología elegida según el caso y no por moda.",
  },
  {
    number: "03",
    title: "Desarrollamos y acompañamos",
    description:
      "Construimos, ponemos en producción y seguimos acompañando la evolución del producto una vez que está funcionando.",
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.763.462 3.483 1.34 4.997L2 22l5.116-1.322a9.96 9.96 0 0 0 4.885 1.318h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.671-1.04-5.182-2.928-7.07a9.93 9.93 0 0 0-7.073-2.926zm0 18.174a8.16 8.16 0 0 1-4.166-1.14l-.299-.177-3.037.785.81-2.96-.194-.304a8.176 8.176 0 0 1-1.257-4.38c0-4.51 3.671-8.181 8.146-8.181 2.175 0 4.219.848 5.757 2.387a8.098 8.098 0 0 1 2.386 5.795c-.003 4.51-3.674 8.175-8.146 8.175z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3 7l8.13 5.42a1.6 1.6 0 0 0 1.74 0L21 7" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="group flex items-center gap-2.5">
            <Image
              src="/logo-mark.png"
              alt="Argencore Solutions"
              width={112}
              height={112}
              className="h-8 w-8 object-contain transition-transform duration-500 group-hover:scale-110"
              priority
            />
            <span className="text-[17px] font-semibold tracking-tight text-navy">
              Argencore <span className="text-blue">Solutions</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["Qué hacemos", "#servicios"],
              ["Proyectos", "#proyectos"],
              ["Nosotros", "#nosotros"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="relative text-sm text-muted transition-colors hover:text-navy after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-blue after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-navy p-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue hover:shadow-lg hover:shadow-blue/25 sm:px-5 sm:py-2.5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Contacto</span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          {/* Aurora de fondo */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            aria-hidden="true"
          >
            <div className="aurora absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue/10 blur-3xl" />
            <div
              className="aurora absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-blue-soft/10 blur-3xl"
              style={{ animationDelay: "-8s" }}
            />
            <div
              className="aurora absolute -left-32 top-40 h-[380px] w-[380px] rounded-full bg-navy/5 blur-3xl"
              style={{ animationDelay: "-14s" }}
            />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <div className="rise" style={{ animationDelay: "0.05s" }}>
              <div className="relative mx-auto mb-10 flex h-24 w-24 items-center justify-center">
                <span
                  className="pulse-ring absolute inset-0 rounded-full border border-blue/25"
                  aria-hidden="true"
                />
                <span
                  className="pulse-ring absolute inset-0 rounded-full border border-blue/20"
                  style={{ animationDelay: "1.2s" }}
                  aria-hidden="true"
                />
                <Image
                  src="/logo-mark.png"
                  alt="Isotipo de Argencore Solutions"
                  width={224}
                  height={224}
                  className="float-slow relative h-20 w-20 object-contain"
                  priority
                />
              </div>
            </div>

            <p
              className="rise mb-5 inline-block rounded-full border border-border bg-white/60 px-4 py-1.5 text-sm font-medium text-blue backdrop-blur"
              style={{ animationDelay: "0.15s" }}
            >
              Páginas web · Software · Inteligencia artificial
            </p>

            <h1
              className="rise text-4xl font-semibold leading-[1.1] tracking-tight text-navy sm:text-[3.4rem]"
              style={{ animationDelay: "0.25s" }}
            >
              Tecnología que resuelve
              <br />
              problemas{" "}
              <span className="relative inline-block text-blue">
                reales
                <svg
                  className="accent-swash absolute -bottom-3 left-0 w-full sm:-bottom-4"
                  height="14"
                  viewBox="0 0 200 14"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9.5C38 4 78 2.6 118 4.2C144 5.2 172 7.4 197 5"
                    pathLength={1}
                    stroke="url(#swash)"
                    strokeWidth="3.4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="swash"
                      x1="0"
                      y1="0"
                      x2="200"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="var(--blue)" />
                      <stop offset="1" stopColor="var(--blue-soft)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p
              className="rise mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted"
              style={{ animationDelay: "0.35s" }}
            >
              Argencore Solutions es una empresa argentina de tecnología.
              Hacemos páginas web, software a medida e inteligencia artificial
              para que las empresas trabajen mejor.
            </p>

            <div
              className="rise mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
              style={{ animationDelay: "0.45s" }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-base font-medium text-white transition-all duration-300 hover:shadow-xl hover:shadow-blue/30 hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                Hablemos de tu proyecto
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-7 py-3.5 text-base font-medium text-navy transition-all duration-300 hover:border-blue/40 hover:bg-surface"
              >
                Ver nuestros proyectos
              </a>
            </div>
          </div>
        </section>

        {/* Qué hacemos */}
        <section id="servicios" className="border-y border-border bg-surface py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-sm font-medium uppercase tracking-[0.18em] text-blue">
                  Qué hacemos
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                  Capacidades de la empresa
                </h2>
                <p className="mt-4 text-muted">
                  Trabajamos de punta a punta: desde entender el problema hasta
                  dejar el producto funcionando en producción.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-6 sm:grid-cols-2">
              {CAPABILITIES.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 90}
                  className={
                    // con una cantidad impar, la última tarjeta ocupa el ancho completo
                    CAPABILITIES.length % 2 === 1 && i === CAPABILITIES.length - 1
                      ? "sm:col-span-2"
                      : ""
                  }
                >
                  <div className="lift group h-full rounded-2xl border border-border bg-white p-8">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue/8 text-blue transition-all duration-500 group-hover:bg-blue group-hover:text-white">
                      <span className="text-sm font-semibold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-sm font-medium uppercase tracking-[0.18em] text-blue">
                  Proyectos
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                  Lo que estamos construyendo
                </h2>
                <p className="mt-4 text-muted">
                  Además del trabajo a medida, desarrollamos productos propios.
                  Este es el primero.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="sheen relative mt-16 overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-12">
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue/25 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/90 ring-1 ring-white/15">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </span>
                      Proyecto activo
                    </span>

                    <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                      ArgencoreAI
                    </h3>
                    <p className="mt-4 max-w-lg leading-relaxed text-white/70">
                      Nuestra plataforma de chatbots con inteligencia artificial
                      para atención por WhatsApp. Responde de forma automática
                      usando la información real de cada negocio, las 24 horas.
                    </p>

                    <ul className="mt-8 space-y-3">
                      {PROJECT_FEATURES.map((feature) => (
                        <li key={feature} className="flex gap-3 text-white/80">
                          <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-soft" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Simulación de conversación */}
                  <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur">
                    <div className="mb-4 flex items-center gap-2.5 border-b border-white/10 pb-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        <WhatsAppIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">WhatsApp Business</p>
                        <p className="text-xs text-white/50">
                          Atendido por ArgencoreAI
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-2.5 text-sm text-white/85">
                        Hola, ¿hasta qué hora atienden hoy?
                      </div>
                      <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-blue px-4 py-2.5 text-sm text-white">
                        ¡Hola! Hoy atendemos hasta las 19 h. ¿Querés que te
                        reserve un turno?
                      </div>
                      <div className="flex w-fit items-center gap-1.5 rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3">
                        {[0, 1, 2].map((d) => (
                          <span
                            key={d}
                            className="typing-dot h-1.5 w-1.5 rounded-full bg-white/70"
                            style={{ animationDelay: `${d * 0.18}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-8 text-center text-sm text-muted">
                Estamos desarrollando nuevos productos.{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue underline-offset-4 hover:underline"
                >
                  Escribinos
                </a>{" "}
                si querés que construyamos algo para tu empresa.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Cómo trabajamos */}
        <section className="border-y border-border bg-surface py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-sm font-medium uppercase tracking-[0.18em] text-blue">
                  Cómo trabajamos
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                  Un proceso simple y transparente
                </h2>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-10 sm:grid-cols-3">
              {PROCESS.map((step, i) => (
                <Reveal key={step.number} delay={i * 110}>
                  <div className="group relative">
                    <span className="block text-4xl font-semibold text-blue/25 transition-colors duration-500 group-hover:text-blue">
                      {step.number}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <Image
                src="/logo-mark.png"
                alt=""
                width={140}
                height={140}
                className="mx-auto mb-8 h-14 w-14 object-contain opacity-90"
              />
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-blue">
                Nosotros
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Sobre Argencore Solutions
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Somos una empresa argentina de tecnología con base en Capital
                Federal. Hacemos páginas web, desarrollo de software a medida e
                inteligencia artificial, y combinamos el trabajo por proyectos
                con productos propios como ArgencoreAI. Buscamos siempre el
                mismo resultado: soluciones claras, bien construidas y que le
                sirvan de verdad a quien las usa.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="px-6 pb-24">
          <Reveal>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center">
              <div
                className="aurora pointer-events-none absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                  Hablemos
                </h2>
                <p className="mx-auto mt-4 max-w-md text-muted">
                  Contanos qué necesita tu empresa. Escribinos por WhatsApp o
                  por mail y te respondemos a la brevedad.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-blue px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue/30"
                  >
                    <WhatsAppIcon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                    WhatsApp
                  </a>
                  <a
                    href={EMAIL_URL}
                    className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-8 py-4 text-base font-medium text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/40 hover:shadow-lg"
                  >
                    <MailIcon className="h-5 w-5 text-blue transition-transform duration-300 group-hover:-translate-y-0.5" />
                    Enviar un mail
                  </a>
                </div>

                <div className="mt-8 flex flex-col items-center gap-2 text-sm text-muted sm:flex-row sm:justify-center sm:gap-6">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-blue"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                  <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
                  <a
                    href={EMAIL_URL}
                    className="transition-colors hover:text-blue"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border bg-surface/60 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            {/* Marca y ubicación */}
            <div>
              <div className="flex items-center gap-2.5">
                <Image
                  src="/logo-mark.png"
                  alt=""
                  width={64}
                  height={64}
                  className="h-7 w-7 object-contain"
                />
                <span className="text-base font-semibold tracking-tight text-navy">
                  Argencore <span className="text-blue">Solutions</span>
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">
                HQ Capital Federal, Argentina
              </p>
            </div>

            {/* Contacto */}
            <div className="flex flex-col gap-3 text-sm">
              <span className="font-medium text-navy">Contacto</span>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-muted transition-colors hover:text-blue"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {WHATSAPP_DISPLAY}
              </a>
              <a
                href={EMAIL_URL}
                className="inline-flex items-center gap-2.5 text-muted transition-colors hover:text-blue"
              >
                <MailIcon className="h-4 w-4" />
                {EMAIL}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-muted transition-colors hover:text-blue"
              >
                <InstagramIcon className="h-4 w-4" />
                @argencoresolutions
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted sm:flex-row">
            <span>
              © {new Date().getFullYear()} Argencore Solutions. Todos los
              derechos reservados.
            </span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Argencore Solutions"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/40 hover:text-blue"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
