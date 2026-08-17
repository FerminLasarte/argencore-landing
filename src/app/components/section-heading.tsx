type SectionHeadingProps = {
  eyebrow?: string;
  /** Primera frase del título, en color pleno. */
  title: string;
  /** Segunda frase del título, en gris. Continúa la misma línea. */
  muted?: string;
  subtitle?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  muted,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-base font-semibold text-blue">{eyebrow}</p>
      )}

      <h2 className="text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.028em] text-navy sm:text-5xl lg:text-[3.25rem]">
        {title}
        {muted && <span className="text-muted"> {muted}</span>}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
