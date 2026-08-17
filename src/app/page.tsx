import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "./components/animated-button";
import Reveal from "./components/reveal";
import SectionHeading from "./components/section-heading";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import {
  ArrowIcon,
  CheckIcon,
  MailIcon,
  PeakIcon,
  WhatsAppIcon,
} from "./components/icons";
import { FEATURED_PROJECT, PROJECTS } from "./lib/projects";
import {
  EMAIL,
  EMAIL_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "./lib/site";

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

const OTHER_PROJECTS = PROJECTS.filter(
  (project) => project.slug !== FEATURED_PROJECT.slug
);

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <SiteHeader />

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
              <AnimatedButton
                href={WHATSAPP_URL}
                text="Hablemos de tu proyecto"
                icon={<WhatsAppIcon className="h-5 w-5" />}
                size="lg"
              />
              <AnimatedButton
                href="/proyectos"
                text="Ver nuestros proyectos"
                variant="outline"
                size="lg"
              />
            </div>
          </div>
        </section>

        {/* Qué hacemos */}
        <section
          id="servicios"
          className="border-y border-border bg-surface py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <SectionHeading
                eyebrow="Qué hacemos"
                title="Capacidades de la empresa."
                muted="De punta a punta."
                subtitle="Desde entender el problema hasta dejar el producto funcionando en producción."
              />
            </Reveal>

            <div className="mt-16 grid gap-5 sm:grid-cols-2">
              {CAPABILITIES.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 80}
                  className={
                    // con una cantidad impar, la última tarjeta ocupa el ancho completo
                    CAPABILITIES.length % 2 === 1 &&
                    i === CAPABILITIES.length - 1
                      ? "sm:col-span-2"
                      : ""
                  }
                >
                  <article className="group relative h-full overflow-hidden rounded-xl border border-border bg-white p-8 transition-colors duration-500 hover:border-navy/25 sm:p-10">
                    {/* Regla superior que se completa al pasar el mouse */}
                    <span
                      className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-blue to-blue-soft transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
                      aria-hidden="true"
                    />

                    {/* Numeral de fondo, como marca de agua editorial */}
                    <span
                      className="pointer-events-none absolute right-5 top-2 select-none text-[5.5rem] font-semibold leading-none tracking-tight text-navy/[0.045] transition-colors duration-500 group-hover:text-blue/[0.08]"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <PeakIcon className="relative h-4 w-9 text-navy transition-all duration-500 group-hover:-translate-y-0.5 group-hover:text-blue" />

                    <h3 className="relative mt-6 text-xl font-semibold tracking-[-0.02em] text-navy sm:text-[1.4rem]">
                      {item.title}
                    </h3>
                    <p className="relative mt-3 max-w-lg leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Proyectos — vista previa */}
        <section id="proyectos" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <SectionHeading
                eyebrow="Proyectos"
                title="Lo que estamos construyendo."
                muted="Y lo que viene."
                subtitle="Además del trabajo a medida, desarrollamos productos propios. Este es el principal."
              />
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
                      {FEATURED_PROJECT.status}
                    </span>

                    <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                      {FEATURED_PROJECT.name}
                    </h3>
                    <p className="mt-4 max-w-lg leading-relaxed text-white/70">
                      {FEATURED_PROJECT.description}
                    </p>

                    <ul className="mt-8 space-y-3">
                      {FEATURED_PROJECT.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex gap-3 text-white/80">
                          <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-soft" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/proyectos#${FEATURED_PROJECT.slug}`}
                      className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-soft"
                    >
                      Ver el proyecto en detalle
                      <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
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

            {/* Resto de los proyectos, en versión compacta */}
            {OTHER_PROJECTS.length > 0 && (
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {OTHER_PROJECTS.map((project, i) => (
                  <Reveal key={project.slug} delay={160 + i * 90}>
                    <Link
                      href={`/proyectos#${project.slug}`}
                      className="lift group flex h-full flex-col rounded-2xl border border-border bg-white p-8"
                    >
                      <span className="inline-flex w-fit items-center rounded-full bg-blue/8 px-3 py-1 text-xs font-medium text-blue">
                        {project.status}
                      </span>
                      <h3 className="mt-5 text-lg font-semibold text-navy">
                        {project.name}
                      </h3>
                      <p className="mt-2 leading-relaxed text-muted">
                        {project.tagline}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue">
                        Ver detalle
                        <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            )}

            <Reveal delay={220}>
              <div className="mt-12 flex justify-center">
                <AnimatedButton
                  href="/proyectos"
                  text="Ver todos los proyectos"
                  variant="outline"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Cómo trabajamos */}
        <section className="border-y border-border bg-surface py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <SectionHeading
                eyebrow="Cómo trabajamos"
                title="Un proceso simple."
                muted="Y transparente."
              />
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
              <SectionHeading
                eyebrow="Nosotros"
                title="Sobre Argencore Solutions."
              />
              <p className="mt-8 text-lg leading-relaxed text-muted">
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
                <SectionHeading
                  title="Hablemos."
                  muted="Cuando quieras."
                  subtitle="Contanos qué necesita tu empresa. Escribinos por WhatsApp o por mail y te respondemos a la brevedad."
                />

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <AnimatedButton
                    href={WHATSAPP_URL}
                    text="WhatsApp"
                    icon={<WhatsAppIcon className="h-5 w-5" />}
                    size="lg"
                  />
                  <AnimatedButton
                    href={EMAIL_URL}
                    text="Enviar un mail"
                    icon={<MailIcon className="h-5 w-5" />}
                    variant="outline"
                    size="lg"
                  />
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

      <SiteFooter />
    </div>
  );
}
