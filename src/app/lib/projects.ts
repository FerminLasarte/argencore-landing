export type Project = {
  slug: string;
  name: string;
  tagline: string;
  /** Estado visible en la etiqueta de la tarjeta. */
  status: string;
  /** Marca el proyecto principal, que se muestra con tratamiento destacado. */
  featured?: boolean;
  description: string;
  features: string[];
  tags: string[];
  url?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "argencoreai",
    name: "ArgencoreAI",
    tagline: "Chatbot de IA para atención por WhatsApp",
    status: "Proyecto activo",
    featured: true,
    description:
      "Nuestra plataforma de chatbots con inteligencia artificial para atención por WhatsApp. Responde de forma automática usando la información real de cada negocio, las 24 horas, y permite gestionar varias cuentas desde un mismo panel.",
    features: [
      "Respuestas automáticas con IA sobre la información real de cada negocio",
      "Panel de administración para gestionar clientes y contenidos",
      "Arquitectura multi-tenant: varias cuentas desde una sola plataforma",
      "Integración directa con WhatsApp Business API",
    ],
    tags: [
      "Inteligencia artificial",
      "RAG",
      "WhatsApp Business API",
      "Multi-tenant",
      "Panel de administración",
    ],
  },
  {
    slug: "sitio-argencore",
    name: "argencoresolutions.com.ar",
    tagline: "Sitio institucional de la empresa",
    status: "En línea",
    description:
      "El sitio que estás viendo. Una landing institucional liviana, con foco en velocidad de carga, diseño propio y buena lectura en celular. Construida como sitio estático y desplegada con HTTPS automático.",
    features: [
      "Diseño propio a partir de la identidad visual de la marca",
      "Generación estática: carga rápida y buen posicionamiento",
      "Adaptada a celular, tablet y escritorio",
      "Animaciones que respetan las preferencias de accesibilidad",
    ],
    tags: ["Next.js", "Tailwind CSS", "Vercel", "Diseño responsive", "SEO"],
    url: "https://argencoresolutions.com.ar",
  },
];

export const FEATURED_PROJECT =
  PROJECTS.find((project) => project.featured) ?? PROJECTS[0];
