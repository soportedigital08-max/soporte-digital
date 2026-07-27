// src/components/sections/CatalogoTienda.tsx
// Catálogo: muestra los ebooks disponibles con resumen + precio.
// Cada tarjeta linkea a la ficha completa del producto (/tienda/[slug]).
import Link from "next/link";

type Producto = {
  slug: string;
  titulo: string;
  resumen: string;
  precio: string;
  portada: string;
};

const PRODUCTOS: Producto[] = [
  {
    slug: "no-caigas",
    titulo: "NO CAIGAS",
    resumen:
      "Reconocé las estafas más comunes en internet, cripto y WhatsApp. Checklist antes de pagar y qué hacer si te roban la cuenta.",
    precio: "$1.998 ARS",
    portada: "/descargas/portada-no-caigas.png",
  },
  {
    slug: "backup",
    titulo: "BACKUP QUE SÍ FUNCIONA",
    resumen:
      "Cómo evitar perder tus fotos y documentos en un segundo. La regla 3-2-1 explicada paso a paso, con opciones reales y sin tecnicismos.",
    precio: "$1.998 ARS",
    portada: "/descargas/portada-backup.png",
  },
];

export default function CatalogoTienda() {
  return (
    <main className="min-h-screen bg-ink-900 text-white">
      <section className="relative overflow-hidden bg-ink-900">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary-600/30 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container relative pt-16 pb-8 text-center max-w-5xl mx-auto">
          <p className="text-sm text-accent uppercase tracking-wide mb-3">
            Tienda · Soporte Digital
          </p>
          <h1 className="text-h1 font-extrabold leading-[1.05]">
            Guías digitales
          </h1>
          <p className="text-body-lg text-primary-100 mt-4">
            Elegí la que necesitás. Cada una es corta, clara y para cualquiera.
          </p>
        </div>
      </section>

      <div className="container max-w-5xl mx-auto pb-20 px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTOS.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col rounded-card border border-white/10 bg-ink-800 overflow-hidden shadow-premium hover:border-accent/50 transition-colors"
            >
              <Link href={`/tienda/${p.slug}`} className="block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.portada}
                  alt={`Portada ${p.titulo}`}
                  className="w-full h-auto"
                />
              </Link>
              <div className="flex flex-col flex-1 p-5">
                <h2 className="text-h4 font-bold text-white mb-2">{p.titulo}</h2>
                <p className="text-body text-primary-100 mb-4 flex-1">
                  {p.resumen}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-extrabold text-accent">
                    {p.precio}
                  </span>
                  <Link
                    href={`/tienda/${p.slug}`}
                    className="px-4 py-2 rounded-input bg-primary-700 text-white text-body font-medium hover:bg-primary-900 transition-colors"
                  >
                    Ver producto
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="text-accent underline-offset-4 hover:underline text-body"
          >
            ← Volver a Soporte Digital
          </Link>
        </div>
      </div>
    </main>
  );
}
