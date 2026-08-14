import Link from "next/link";
import Reveal from "./reveal";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { ArrowIcon } from "./icons";
import { LEGAL_UPDATED } from "../lib/site";

type LegalPageProps = {
  title: string;
  intro: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, intro, children }: LegalPageProps) {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden px-6 pt-20 pb-12 sm:pt-24">
          <div
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            aria-hidden="true"
          >
            <div className="aurora absolute -top-40 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-blue/8 blur-3xl" />
          </div>

          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-blue"
            >
              <ArrowIcon className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
              Volver al inicio
            </Link>

            <h1
              className="rise mt-8 text-4xl font-semibold leading-[1.15] tracking-tight text-navy sm:text-5xl"
              style={{ animationDelay: "0.05s" }}
            >
              {title}
            </h1>
            <p
              className="rise mt-5 text-lg leading-relaxed text-muted"
              style={{ animationDelay: "0.15s" }}
            >
              {intro}
            </p>
            <p
              className="rise mt-6 inline-block rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted"
              style={{ animationDelay: "0.25s" }}
            >
              Última actualización: {LEGAL_UPDATED}
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="legal rounded-3xl border border-border bg-white p-8 sm:p-12">
                {children}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
