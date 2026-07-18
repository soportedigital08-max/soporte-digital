import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { AREAS, PROBLEMAS } from "@/lib/servicios";

export const metadata: Metadata = {
  title: "Servicios — Soporte Digital",
  description:
    "Soluciones a problemas reales de tecnología: servicio técnico, redes, desarollo web, hosting, seguridad y soporte remoto.",
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero del hub */}
        <section className="py-24 text-center bg-surface">
          <div className="container max-w-3xl mx-auto">
            <h1 className="text-h1 text-gray-900">
              ¿Qué necesitás resolver?
            </h1>
            <p className="text-body-lg text-gray-600 mt-6">
              No vendemos servicios sueltos. Agrupamos todo por el problema
              que tenés. Elegí el que te representa.
            </p>
          </div>
        </section>

        {/* Áreas (Nivel 2) */}
        <section className="py-24">
          <div className="container">
            <h2 className="text-h2 text-gray-900 text-center">Áreas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              {AREAS.map((area) => (
                <Card
                  key={area.slug}
                  title={area.titulo}
                  description={area.descripcion}
                  href={`/servicios/${area.slug}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Problemas (Nivel 3) */}
        <section className="py-24 bg-surface">
          <div className="container">
            <h2 className="text-h2 text-gray-900 text-center">
              Problemas frecuentes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              {PROBLEMAS.map((p) => (
                <Card
                  key={p.slug}
                  title={p.titulo}
                  description={p.situacion}
                  href={`/servicios/${p.slug}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
          <div className="container">
            <h2 className="text-h2 text-gray-900">
              ¿No encontrás tu problema?
            </h2>
            <p className="text-body-lg text-gray-600 mt-4">
              Contanos igual. Lo resolvemos.
            </p>
            <div className="mt-8">
              <Button href="/contacto" variant="primary">
                Solicitar soporte
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
