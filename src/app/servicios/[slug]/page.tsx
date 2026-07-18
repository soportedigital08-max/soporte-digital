import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import FAQ from "@/components/sections/FAQ";
import { PROBLEMAS, getProblema, getArea } from "@/lib/servicios";

// Pre-render de todas las páginas de problema (SSG)
export function generateStaticParams() {
  return PROBLEMAS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProblema(params.slug);
  if (!p) return { title: "Servicio — Soporte Digital" };
  return {
    title: `${p.titulo} — Soporte Digital`,
    description: p.situacion,
  };
}

export default function ProblemaPage({ params }: { params: { slug: string } }) {
  const problema = getProblema(params.slug);
  if (!problema) notFound();

  const area = getArea(problema.area);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero: el problema concreto */}
        <section className="py-24 bg-surface">
          <div className="container max-w-3xl mx-auto text-center">
            <p className="text-small text-primary-700 uppercase tracking-wide">
              {area?.titulo}
            </p>
            <h1 className="text-h1 text-gray-900 mt-2">{problema.titulo}</h1>
            <p className="text-body-lg text-gray-600 mt-6">{problema.situacion}</p>
            <div className="mt-8">
              <Button href="/contacto" variant="primary">
                Lo resolvemos
              </Button>
            </div>
          </div>
        </section>

        {/* Solución + Resultado */}
        <section className="py-24">
          <div className="container max-w-3xl flex flex-col gap-12">
            <div>
              <h2 className="text-h2 text-gray-900">Qué hacemos</h2>
              <p className="text-body-lg text-gray-600 mt-4">{problema.solucion}</p>
            </div>
            <div className="bg-primary-900 text-white rounded-card p-8">
              <h3 className="text-h3">Resultado</h3>
              <p className="text-body-lg text-primary-100 mt-3">{problema.resultado}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ faqs={problema.faqs} />

        {/* CTA */}
        <section className="py-24 text-center bg-surface">
          <div className="container">
            <h2 className="text-h2 text-gray-900">¿Lo pasás?</h2>
            <p className="text-body-lg text-gray-600 mt-4">
              Escribinos y lo arreglamos.
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
