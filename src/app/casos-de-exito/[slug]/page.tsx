import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/ui/Reveal";
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
      <main className="flex-1 bg-ink-900">
        <PageHeader title={caso.titulo} subtitle={caso.resumen} eyebrow={caso.area} />

        <section className="py-24">
          <div className="container max-w-3xl flex flex-col gap-12">
            <Reveal>
              <div>
                <h2 className="text-h2 text-white">La situación</h2>
                <p className="text-body-lg text-primary-100 mt-4">{caso.situacion}</p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h2 className="text-h2 text-white">Lo que hicimos</h2>
                <p className="text-body-lg text-primary-100 mt-4">{caso.solucion}</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-ink-800 border border-white/10 text-white rounded-card p-8">
                <h3 className="text-h3">Resultado</h3>
                <p className="text-body-lg text-primary-100 mt-3">{caso.resultado}</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-24 text-center bg-ink-800">
          <div className="container">
            <h2 className="text-h2 text-white">¿Tu caso es parecido?</h2>
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
