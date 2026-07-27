import Link from "next/link";

const DEMOS = [
  {
    nombre: "Carnicería López",
    rubro: "Carnicería",
    href: "/demo/carniceria-lopez",
    color: "#E11D48",
  },
  {
    nombre: "Kiosco Centro",
    rubro: "Kiosco y Diario",
    href: "/demo/kiosco-centro",
    color: "#F59E0B",
  },
  {
    nombre: "Taller Mecánico Ruta 3",
    rubro: "Taller Mecánico",
    href: "/demo/taller-mecanico",
    color: "#0EA5E9",
  },
];

export const metadata = {
  title: "Studio Web — Soporte Digital",
  description:
    "Sitios web para comercios de Olavarría. Diseño + hosting mensual.",
};

export default function Page() {
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
        <div className="container relative pt-20 pb-12 text-center max-w-3xl mx-auto">
          <p className="text-sm text-accent uppercase tracking-wide mb-3">
            Studio Web · Soporte Digital
          </p>
          <h1 className="text-h1 font-extrabold leading-[1.05]">
            Tu comercio en internet, bien hecho
          </h1>
          <p className="text-body-lg text-primary-100 mt-4">
            Diseñamos el sitio de tu comercio y lo hosteamos por vos. Sin
            complicaciones técnicas, con el respaldo de Soporte Digital.
          </p>
        </div>
      </section>

      <div className="container max-w-4xl mx-auto pb-20 px-4 space-y-12">
        {/* Planes */}
        <section>
          <h2 className="text-h2 text-white font-bold mb-6">
            Cómo funciona
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-card border border-white/10 bg-ink-800 p-5">
              <div className="text-accent text-2xl font-bold">1</div>
              <h3 className="text-h4 text-white mt-2">Te mostramos el mockup</h3>
              <p className="text-body text-primary-100 mt-2">
                Mirás cómo quedaría el sitio de tu comercio, antes de pagar.
              </p>
            </div>
            <div className="rounded-card border border-white/10 bg-ink-800 p-5">
              <div className="text-accent text-2xl font-bold">2</div>
              <h3 className="text-h4 text-white mt-2">Diseñamos y publicamos</h3>
              <p className="text-body text-primary-100 mt-2">
                Lo dejamos listo y lo alojamos en hosting estable.
              </p>
            </div>
            <div className="rounded-card border border-white/10 bg-ink-800 p-5">
              <div className="text-accent text-2xl font-bold">3</div>
              <h3 className="text-h4 text-white mt-2">Hosting mensual</h3>
              <p className="text-body text-primary-100 mt-2">
                Vos pagás una mensualidad y nosotros nos ocupamos de todo.
              </p>
            </div>
          </div>
        </section>

        {/* Mockups */}
        <section>
          <h2 className="text-h2 text-white font-bold mb-6">
            Ejemplos reales (mockups)
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {DEMOS.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="rounded-card border border-white/10 bg-ink-800 p-5 hover:-translate-y-1 transition-transform"
              >
                <div
                  className="w-10 h-10 rounded-card mb-3"
                  style={{ background: d.color }}
                />
                <h3 className="text-h4 text-white">{d.nombre}</h3>
                <p className="text-body text-primary-100 mt-1">{d.rubro}</p>
                <p className="text-accent text-body mt-3">Ver mockup →</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="text-center border-t border-white/10 pt-10">
          <p className="text-body text-gray-400 mb-3">
            ¿Tenés un comercio en Olavarría? Hablemos.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-6 py-3 rounded-input text-body font-medium bg-primary-700 text-white hover:bg-primary-900 transition-colors"
          >
            Solicitar mi sitio
          </Link>
          <div className="mt-6">
            <Link
              href="/"
              className="text-accent underline-offset-4 hover:underline text-body"
            >
              ← Volver a Soporte Digital
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
