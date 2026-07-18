import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Tipografía del Design System (04-DESIGN-SYSTEM.md §1.2): Inter
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
