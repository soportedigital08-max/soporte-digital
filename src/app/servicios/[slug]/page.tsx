import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FAQ from "@/components/sections/FAQ";
import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/ui/Reveal";
import {
  AREAS,
  PROBLEMAS,
  getArea,
  getProblema,
  getProblemasDeArea,
} from "@/lib/servicios";

// Pre-render de áreas (Nivel 2) + problemas (Nivel 3)
export function generateStaticParams() {
  return [
    ...AREAS.map((a) => ({ slug: a.slug })),
    ...PROBLEMAS.map((p) => ({ slug: p.slug })),
  ];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const area = getArea(params.slug);
  if (area) return { title: `${area.titulo} — Soporte Digital`, description: area.descripcion };
  const p = getProblema(params.slug);
  if (p) return { title: `${p.titulo} — Soporte Digital`, description: p.situacion };
  return { title: "Servicio — Soporte Digital" };
}

export default function ServicioSlugPage({ params }: { params: { slug: string } }) {
  const area = getArea(params.slug);
  const problema = getProblema(params.slug);

  if (!area && !problema) notFound();

  // --- Página de ÁREA: lista los problemas de esa área ---
  if (area) {
    const problemas = getProblemasDeArea(area.slug);
    return (
      <>
        <Navbar />
        <main className="flex-1 bg-ink-900">
          <PageHeader title={area.titulo} subtitle={area.descripcion} eyebrow="Área" />

          <section className="py-24">
            <div className="container">
              <h2 className="text-h2 text-white text-center">
                Problemas que resolvemos en esta área
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                {problemas.map((p) => (
                  <Reveal key={p.slug}>
                    <Card
                      title={p.titulo}
                      description={p.situacion}
                      href={`/servicios/${p.slug}`}
                      variant="dark"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 text-center bg-ink-800">
            <div className="container">
              <h2 className="text-h2 text-white">¿Tenés otro problema?</h2>
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

  // --- Página de PROBLEMA ---
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-ink-900">
        <PageHeader
          title={problema!.titulo}
          subtitle={problema!.situacion}
          eyebrow={getArea(problema!.area)?.titulo}
        >
          <div className="mt-8">
            <Button href="/contacto" variant="primary">Lo resolvemos</Button>
          </div>
        </PageHeader>

        <section className="py-24">
          <div className="container max-w-3xl flex flex-col gap-12">
            <div>
              <h2 className="text-h2 text-white">Qué hacemos</h2>
              <p className="text-body-lg text-primary-100 mt-4">{problema!.solucion}</p>
            </div>
            <div className="bg-ink-800 border border-white/10 text-white rounded-card p-8">
              <h3 className="text-h3">Resultado</h3>
              <p className="text-body-lg text-primary-100 mt-3">{problema!.resultado}</p>
            </div>
          </div>
        </section>

        <FAQ faqs={problema!.faqs} />

        <section className="py-24 text-center bg-ink-800">
          <div className="container">
            <h2 className="text-h2 text-white">¿Lo pasás?</h2>
            <p className="text-body-lg text-primary-100 mt-4">Escribinos y lo arreglamos.</p>
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
