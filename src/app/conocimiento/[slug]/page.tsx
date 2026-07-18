import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
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
      <main className="flex-1">
        <article className="py-24">
          <div className="container max-w-3xl mx-auto">
            <p className="text-small text-primary-700 uppercase tracking-wide">
              {articulo.categoria} · {articulo.lectura} min de lectura
            </p>
            <h1 className="text-h1 text-gray-900 mt-2">{articulo.titulo}</h1>
            <p className="text-body-lg text-gray-600 mt-6">{articulo.extracto}</p>

            <div className="mt-12 flex flex-col gap-6">
              {articulo.bloques.map((b, i) => {
                if (b.tipo === "h2") return <h2 key={i} className="text-h2 text-gray-900 mt-4">{b.texto}</h2>;
                if (b.tipo === "ul")
                  return (
                    <ul key={i} className="text-body-lg text-gray-600 list-disc list-inside flex flex-col gap-2">
                      {b.items.map((it, j) => <li key={j}>{it}</li>)}
                    </ul>
                  );
                return <p key={i} className="text-body-lg text-gray-600">{b.texto}</p>;
              })}
            </div>
          </div>
        </article>

        <section className="py-24 text-center bg-surface">
          <div className="container">
            <h2 className="text-h2 text-gray-900">¿Seguís con dudas?</h2>
            <p className="text-body-lg text-gray-600 mt-4">Te lo resolvemos.</p>
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
