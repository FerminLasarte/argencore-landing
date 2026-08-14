import type { Metadata } from "next";
import AnimatedButton from "../components/animated-button";
import Reveal from "../components/reveal";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { ArrowIcon, CheckIcon, WhatsAppIcon } from "../components/icons";
import { PROJECTS } from "../lib/projects";
import { WHATSAPP_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Proyectos | Argencore Solutions",
  description:
    "Los proyectos que desarrollamos en Argencore Solutions: ArgencoreAI, nuestra plataforma de chatbots con IA para WhatsApp, y el resto de nuestros trabajos.",
  alternates: { canonical: "/proyectos" },
};

function ChatPreview() {
  return (
    <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur">
      <div className="mb-4 flex items-center gap-2.5 border-b border-white/10 pb-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
          <WhatsAppIcon className="h-4 w-4" />
        </div>
        <div>
          <p className="text-sm font-medium">WhatsApp Business</p>
          <p className="text-xs text-white/50">Atendido por ArgencoreAI</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-2.5 text-sm text-white/85">
          Hola, ¿hasta qué hora atienden hoy?
        </div>
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-blue px-4 py-2.5 text-sm text-white">
          ¡Hola! Hoy atendemos hasta las 19 h. ¿Querés que te reserve un turno?
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
  );
}

export default function ProyectosPage() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        {/* Encabezado */}
        <section className="relative overflow-hidden px-6 pt-20 pb-16 sm:pt-24">
          <div
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            aria-hidden="true"
          >
            <div className="aurora absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <p
              className="rise mb-5 inline-block rounded-full border border-border bg-white/60 px-4 py-1.5 text-sm font-medium text-blue backdrop-blur"
              style={{ animationDelay: "0.05s" }}
            >
              Proyectos
            </p>
            <h1
              className="rise text-4xl font-semibold leading-[1.1] tracking-tight text-navy sm:text-5xl"
              style={{ animationDelay: "0.15s" }}
            >
              Lo que construimos
            </h1>
            <p
              className="rise mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
              style={{ animationDelay: "0.25s" }}
            >
              Además del trabajo a medida para clientes, desarrollamos productos
              propios. Acá está el detalle de cada uno.
            </p>
          </div>
        </section>

        {/* Listado */}
        <section className="px-6 pb-24">
          <div className="mx-auto flex max-w-5xl flex-col gap-8">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.slug} delay={i * 100}>
                <article
                  id={project.slug}
                  className={
                    project.featured
                      ? "sheen relative overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-12"
                      : "lift relative overflow-hidden rounded-3xl border border-border bg-white p-8 sm:p-12"
                  }
                >
                  {project.featured && (
                    <div
                      className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue/25 blur-3xl"
                      aria-hidden="true"
                    />
                  )}

                  <div
                    className={
                      project.featured
                        ? "relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
                        : "relative"
                    }
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={
                            project.featured
                              ? "inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/90 ring-1 ring-white/15"
                              : "inline-flex items-center gap-2 rounded-full bg-blue/8 px-3.5 py-1.5 text-xs font-medium tracking-wide text-blue"
                          }
                        >
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          </span>
                          {project.status}
                        </span>
                        <span
                          className={
                            project.featured
                              ? "text-xs font-medium uppercase tracking-[0.16em] text-white/40"
                              : "text-xs font-medium uppercase tracking-[0.16em] text-muted/70"
                          }
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h2
                        className={
                          project.featured
                            ? "mt-6 text-3xl font-semibold tracking-tight sm:text-4xl"
                            : "mt-6 text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
                        }
                      >
                        {project.name}
                      </h2>
                      <p
                        className={
                          project.featured
                            ? "mt-2 text-blue-soft"
                            : "mt-2 text-blue"
                        }
                      >
                        {project.tagline}
                      </p>

                      <p
                        className={
                          project.featured
                            ? "mt-5 max-w-lg leading-relaxed text-white/70"
                            : "mt-5 max-w-2xl leading-relaxed text-muted"
                        }
                      >
                        {project.description}
                      </p>

                      <ul className="mt-8 space-y-3">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className={
                              project.featured
                                ? "flex gap-3 text-white/80"
                                : "flex gap-3 text-muted"
                            }
                          >
                            <CheckIcon
                              className={
                                project.featured
                                  ? "mt-0.5 h-5 w-5 shrink-0 text-blue-soft"
                                  : "mt-0.5 h-5 w-5 shrink-0 text-blue"
                              }
                            />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={
                              project.featured
                                ? "rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
                                : "rounded-full bg-surface px-3 py-1 text-xs text-muted ring-1 ring-border"
                            }
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue"
                        >
                          Visitar el sitio
                          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                      )}
                    </div>

                    {project.featured && <ChatPreview />}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Cierre */}
        <section className="px-6 pb-24">
          <Reveal>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center">
              <div
                className="aurora pointer-events-none absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <h2 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                  ¿Tenés un proyecto en mente?
                </h2>
                <p className="mx-auto mt-4 max-w-md text-muted">
                  Contanos qué necesitás y vemos juntos cómo llevarlo adelante.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <AnimatedButton
                    href={WHATSAPP_URL}
                    text="Hablemos por WhatsApp"
                    icon={<WhatsAppIcon className="h-5 w-5" />}
                    size="lg"
                  />
                  <AnimatedButton
                    href="/"
                    text="Volver al inicio"
                    variant="outline"
                    size="lg"
                  />
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
