import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { CASOS, getCaso } from "@/lib/casos";

export function generateStaticParams() {
  return CASOS.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = getCaso(params.slug);
  if (!c) return { title: "Caso de éxito — Soporte Digital" };
  return { title: `${c.titulo} — Soporte Digital`, description: c.resumen };
}

export default function CasoPage({ params }: { params: { slug: string } }) {
  const caso = getCaso(params.slug);
  if (!caso) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="py-24 bg-surface">
          <div className="container max-w-3xl mx-auto text-center">
            <p className="text-small text-primary-700 uppercase tracking-wide">{caso.area}</p>
            <h1 className="text-h1 text-gray-900 mt-2">{caso.titulo}</h1>
            <p className="text-body-lg text-gray-600 mt-6">{caso.resumen}</p>
          </div>
        </section>

        <section className="py-24">
          <div className="container max-w-3xl flex flex-col gap-12">
            <div>
              <h2 className="text-h2 text-gray-900">La situación</h2>
              <p className="text-body-lg text-gray-600 mt-4">{caso.situacion}</p>
            </div>
            <div>
              <h2 className="text-h2 text-gray-900">Lo que hicimos</h2>
              <p className="text-body-lg text-gray-600 mt-4">{caso.solucion}</p>
            </div>
            <div className="bg-primary-900 text-white rounded-card p-8">
              <h3 className="text-h3">Resultado</h3>
              <p className="text-body-lg text-primary-100 mt-3">{caso.resultado}</p>
            </div>
          </div>
        </section>

        <section className="py-24 text-center bg-surface">
          <div className="container">
            <h2 className="text-h2 text-gray-900">¿Tu caso es parecido?</h2>
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
