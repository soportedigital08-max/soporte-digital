import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Tipografía del Design System (04-DESIGN-SYSTEM.md §1.2):
// Inter para cuerpo, Space Grotesk (display) para títulos -> look tech premium.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Soporte Digital — Tecnología que funciona. Soluciones que perduran.",
  description:
    "Soluciones tecnológicas claras y confiables para personas, profesionales y empresas. Resolvemos problemas reales de tecnología en Olavarría y toda Argentina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
