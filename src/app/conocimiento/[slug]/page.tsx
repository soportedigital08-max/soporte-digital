import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { ARTICULOS, getArticulo } from "@/lib/articulos";

export function generateStaticParams() {
  return ARTICULOS.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticulo(params.slug);
  if (!a) return { title: "Artículo — Soporte Digital" };
  return { title: `${a.titulo} — Soporte Digital`, description: a.extracto };
}

export default function ArticuloPage({ params }: { params: { slug: string } }) {
  const articulo = getArticulo(params.slug);
  if (!articulo) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-ink-900">
        <PageHeader
          title={articulo.titulo}
          subtitle={articulo.extracto}
          eyebrow={`${articulo.categoria} · ${articulo.lectura} min de lectura`}
        />

        <article className="py-24">
          <div className="container max-w-3xl mx-auto">
            <Reveal>
              <div className="flex flex-col gap-6">
                {articulo.bloques.map((b, i) => {
                  if (b.tipo === "h2") return <h2 key={i} className="text-h2 text-white mt-4">{b.texto}</h2>;
                  if (b.tipo === "ul")
                    return (
                      <ul key={i} className="text-body-lg text-primary-100 list-disc list-inside flex flex-col gap-2">
                        {b.items.map((it, j) => <li key={j}>{it}</li>)}
                      </ul>
                    );
                  return <p key={i} className="text-body-lg text-primary-100">{b.texto}</p>;
                })}
              </div>
            </Reveal>
          </div>
        </article>

        <section className="py-24 text-center bg-ink-800">
          <div className="container">
            <h2 className="text-h2 text-white">¿Seguís con dudas?</h2>
            <p className="text-body-lg text-primary-100 mt-4">Te lo resolvemos.</p>
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
