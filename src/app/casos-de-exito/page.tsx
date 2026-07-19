import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/sections/PageHeader";
import { CASOS } from "@/lib/casos";

export const metadata: Metadata = {
  title: "Casos de éxito — Soporte Digital",
  description:
    "Situaciones reales, soluciones aplicadas y resultados concretos de Soporte Digital.",
};

export default function CasosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-primary-900">
        <PageHeader
          title="Casos de éxito"
          subtitle="Problemas reales, resueltos de verdad. Así trabajamos."
        />

        <section className="py-24">
          <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {CASOS.map((caso) => (
              <Card
                key={caso.slug}
                title={caso.titulo}
                description={caso.resumen}
                href={`/casos-de-exito/${caso.slug}`}
              />
            ))}
          </div>
        </section>

        <section className="py-24 text-center bg-primary-800/40">
          <div className="container">
            <h2 className="text-h2 text-white">El próximo caso puede ser el tuyo</h2>
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
