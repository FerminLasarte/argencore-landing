import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Argencore Solutions | ArgencoreAI - Chatbot IA para WhatsApp",
  description:
    "ArgencoreAI es el chatbot de inteligencia artificial de Argencore Solutions: atención automática por WhatsApp con IA, disponible las 24 horas para tu negocio.",
  metadataBase: new URL("https://argencoresolutions.com.ar"),
  openGraph: {
    title: "Argencore Solutions | ArgencoreAI",
    description:
      "Chatbot de inteligencia artificial para atención por WhatsApp, con panel de administración y respuestas automáticas basadas en la información real de tu negocio.",
    url: "https://argencoresolutions.com.ar",
    siteName: "Argencore Solutions",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
