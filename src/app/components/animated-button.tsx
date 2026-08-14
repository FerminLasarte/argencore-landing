import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "glass";
type Size = "sm" | "md" | "lg";

interface AnimatedButtonProps {
  href: string;
  text: string;
  icon?: ReactNode;
  size?: Size;
  variant?: Variant;
  /** Ocupa todo el ancho en mobile y se ajusta al contenido desde `md`. */
  block?: boolean;
  /**
   * Clases extra. No incluir utilidades de `display` (`hidden`, `flex`…):
   * el botón ya define la suya y ganaría según el orden del CSS. Para
   * mostrarlo u ocultarlo por breakpoint, envolverlo en un contenedor.
   */
  className?: string;
  "aria-label"?: string;
}

const SIZES: Record<Size, string> = {
  sm: "h-10 px-5 text-xs",
  md: "h-[50px] px-8 text-sm",
  lg: "h-[60px] px-10 text-base",
};

const VARIANTS: Record<
  Variant,
  { base: string; panel: string; hoverText: string }
> = {
  // Acción principal
  primary: {
    base: "border-blue bg-blue text-white",
    panel: "bg-white",
    hoverText: "text-navy",
  },
  // Acción sobria, sobre fondo claro
  dark: {
    base: "border-navy bg-navy text-white",
    panel: "bg-white",
    hoverText: "text-navy",
  },
  // Acción secundaria: al pasar el mouse se invierte a navy
  outline: {
    base: "border-border bg-white text-navy",
    panel: "bg-navy",
    hoverText: "text-white",
  },
  // Para usar sobre secciones oscuras
  glass: {
    base: "border-white/20 bg-white/10 backdrop-blur-md text-white",
    panel: "bg-white",
    hoverText: "text-navy",
  },
};

export default function AnimatedButton({
  href,
  text,
  icon,
  size = "md",
  variant = "primary",
  block = false,
  className = "",
  "aria-label": ariaLabel,
}: AnimatedButtonProps) {
  const { base, panel, hoverText } = VARIANTS[variant];

  const classes = [
    "anim-btn group relative inline-flex items-center justify-center overflow-hidden rounded-full border font-semibold",
    "transition-transform duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02]",
    block ? "flex w-full md:inline-flex md:w-auto" : "",
    SIZES[size],
    base,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {/* Capa que cae desde arriba al pasar el mouse */}
      <span className="absolute inset-0 z-0 overflow-hidden rounded-full">
        <span
          className={`absolute inset-0 h-full w-full -translate-y-[101%] rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0,1)] group-hover:translate-y-0 group-hover:rounded-none ${panel}`}
        />
      </span>

      {/* Texto e icono */}
      <span className="relative z-10 flex items-center gap-2.5 overflow-hidden">
        {/* El contenido original baja y sale de escena */}
        <span className="flex items-center gap-2.5 whitespace-nowrap transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[160%]">
          {icon}
          {text}
        </span>

        {/* La copia entra desde arriba y ocupa su lugar */}
        <span
          className={`absolute inset-0 flex items-center justify-center gap-2.5 whitespace-nowrap -translate-y-[160%] transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 ${hoverText}`}
          aria-hidden="true"
        >
          {icon}
          {text}
        </span>
      </span>
    </>
  );

  // WhatsApp, mailto y demás destinos externos no pasan por el router
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {content}
    </Link>
  );
}
