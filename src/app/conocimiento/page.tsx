import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
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
      <main className="flex-1">
        <section className="py-24 bg-surface text-center">
          <div className="container max-w-3xl mx-auto">
            <h1 className="text-h1 text-gray-900">Conocimiento</h1>
            <p className="text-body-lg text-gray-600 mt-6">
              Guías y artículos para entender y resolver tus problemas tecnológicos.
            </p>
          </div>
        </section>

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

        <section className="py-24 text-center bg-surface">
          <div className="container">
            <h2 className="text-h2 text-gray-900">¿Necesitás que lo resolvamos?</h2>
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
