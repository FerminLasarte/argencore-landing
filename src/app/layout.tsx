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
  title: "Argencore Solutions | Software e inteligencia artificial",
  description:
    "Empresa argentina de desarrollo de software e inteligencia artificial. Creamos soluciones a medida y productos propios como ArgencoreAI, nuestra plataforma de chatbots para WhatsApp.",
  metadataBase: new URL("https://argencoresolutions.com.ar"),
  openGraph: {
    title: "Argencore Solutions",
    description:
      "Empresa argentina de desarrollo de software e inteligencia artificial. Soluciones a medida y productos propios como ArgencoreAI.",
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
