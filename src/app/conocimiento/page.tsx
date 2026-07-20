import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/sections/PageHeader";
import { ARTICULOS } from "@/lib/articulos";

export const metadata: Metadata = {
  title: "Conocimiento — Soporte Digital",
  description:
    "Guías y artículos de tecnología para resolver problemas reales. Captación de tráfico cualificado.",
};

export default function ConocimientoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-ink-900">
        <PageHeader
          title="Conocimiento"
          subtitle="Guías y artículos para entender y resolver tus problemas tecnológicos."
        />

        <section className="py-24">
          <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ARTICULOS.map((a) => (
              <Card
                key={a.slug}
                title={a.titulo}
                description={a.extracto}
                href={`/conocimiento/${a.slug}`}
              />
            ))}
          </div>
        </section>

        <section className="py-24 text-center bg-ink-800">
          <div className="container">
            <h2 className="text-h2 text-white">¿Necesitás que lo resolvamos?</h2>
            <div className="mt-8">
              <Button href="/contacto" variant="primary">Solicitar soporte</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
