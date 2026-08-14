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
  title: "Argencore Solutions | Páginas web, software e inteligencia artificial",
  description:
    "Empresa argentina de tecnología con base en Capital Federal. Hacemos páginas web, software a medida e inteligencia artificial, y desarrollamos productos propios como ArgencoreAI.",
  metadataBase: new URL("https://argencoresolutions.com.ar"),
  openGraph: {
    title: "Argencore Solutions",
    description:
      "Empresa argentina de tecnología: páginas web, software a medida e inteligencia artificial. Productos propios como ArgencoreAI.",
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
