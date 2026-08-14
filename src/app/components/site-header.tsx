import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "./animated-button";
import { WhatsAppIcon } from "./icons";
import { WHATSAPP_URL } from "../lib/site";

const NAV_LINKS = [
  ["Qué hacemos", "/#servicios"],
  ["Proyectos", "/proyectos"],
  ["Nosotros", "/#nosotros"],
] as const;

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2.5">
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
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="relative text-sm text-muted transition-colors hover:text-navy after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-blue after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* En mobile no entra el texto, así que queda solo el icono */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="inline-flex items-center rounded-full bg-navy p-2.5 text-white transition-colors duration-300 hover:bg-blue sm:hidden"
        >
          <WhatsAppIcon className="h-4 w-4" />
        </a>

        {/* El wrapper controla la visibilidad: el botón ya define su display */}
        <span className="hidden sm:block">
          <AnimatedButton
            href={WHATSAPP_URL}
            text="Contacto"
            icon={<WhatsAppIcon className="h-4 w-4" />}
            variant="dark"
            size="sm"
          />
        </span>
      </div>
    </header>
  );
}
