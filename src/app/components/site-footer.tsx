import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "./icons";
import {
  EMAIL,
  EMAIL_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LOCATION,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "../lib/site";

const LEGAL_LINKS = [
  ["Política de privacidad", "/politica-de-privacidad"],
  ["Términos y condiciones", "/terminos-y-condiciones"],
] as const;

export default function SiteFooter() {
  return (
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
            <p className="mt-3 text-sm text-muted">{LOCATION}</p>
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
              {INSTAGRAM_HANDLE}
            </a>
          </div>

          {/* Legales */}
          <div className="flex flex-col gap-3 text-sm">
            <span className="font-medium text-navy">Legales</span>
            {LEGAL_LINKS.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-muted transition-colors hover:text-blue"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted sm:flex-row">
          <span>
            © {new Date().getFullYear()} Argencore Solutions. Todos los derechos
            reservados.
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
  );
}
