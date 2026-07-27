import Link from "next/link";

// Landing premium dark editorial para Carnicería López (estilo steakhouse).
// Construible en Next.js + Tailwind. Fotos reales de carne (Unsplash).

const FOTO = {
  hero: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=1600&q=70",
  corte: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=70",
  carnicero: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&q=70",
  parrilla: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=70",
  cta: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1600&q=70",
  milanesas: "/descargas/milanesas-lopez.png",
};

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Cortes", href: "#cortes" },
  { label: "Por qué", href: "#porque" },
  { label: "Cómo comprar", href: "#proceso" },
  { label: "Opinan", href: "#opinan" },
];

export const metadata = {
  title: "Carnicería López — Cortes de calidad en Olavarría",
  description:
    "Carnes seleccionadas, corte exacto y entrega a domicilio. Carnicería López, Olavarría.",
};

export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100 font-sans antialiased">
      {/* NAV fija con CTA siempre visible */}
      <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight text-neutral-50">
            Carnicería <span className="text-rose-500">López</span>
          </span>
          <nav className="hidden md:flex gap-7 text-sm text-neutral-300">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-rose-400 transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#comprar"
            className="px-4 py-2 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-sm font-semibold transition-colors"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden">
        <img
          src={FOTO.hero}
          alt="Corte de carne"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/40" />
        <div className="absolute inset-0 bg-neutral-950/30" />
        <div className="relative max-w-6xl mx-auto px-4 py-28 md:py-40">
          <p className="text-rose-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Carnicería de barrio · Olavarría
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight max-w-2xl text-neutral-50">
            El corte justo,
            <br />
            <span className="text-rose-500">la carne que se nota.</span>
          </h1>
          <p className="mt-6 text-lg text-neutral-300 max-w-xl">
            Seleccionamos, cortamos a medida y llevamos tu asado a casa. Sin
            filas, sin dudas, con el respaldo de 20 años en el barrio.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#comprar"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold transition-colors"
            >
              Pedir mi corte
            </a>
            <a
              href="#cortes"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-neutral-700 text-neutral-200 hover:border-neutral-500 transition-colors"
            >
              Ver cortes
            </a>
          </div>
        </div>
      </section>

      {/* CORTES / SERVICIOS */}
      <section id="cortes" className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Lo que encontrás
            </h2>
            <p className="mt-2 text-neutral-400">
              Cortes y servicio pensados para quien se toma en serio el asado.
            </p>
          </div>
          <span className="hidden md:block text-rose-500 text-sm font-semibold">
            20 años en Olavarría
          </span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { t: "Cortes al vacío", d: "Envasamos al vacío para que dure más en tu freezer, listo para usar.", img: FOTO.corte },
            { t: "Corte a medida", d: "Milanesas, matambre, asado: lo cortamos como lo necesitás.", img: FOTO.carnicero },
            { t: "Milanesas de ternera, cerdo y pollo", d: "Rebozadas a medida, listas para el horno o la sartén.", img: FOTO.milanesas },
          ].map((c) => (
            <article
              key={c.t}
              className="group rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.t}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-50">{c.t}</h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  {c.d}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* POR QUÉ / PROBLEMAS QUE RESUELVE */}
      <section id="porque" className="bg-neutral-900/60 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={FOTO.carnicero}
            alt="Carnicero trabajando"
            className="rounded-2xl shadow-2xl w-full object-cover h-[360px]"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Por qué elegirnos
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                ["Carne que se nota", "Trabajamos con productores locales y cortamos el mismo día."],
                ["Sin esperar", "Encargás por WhatsApp y retirás o recibís en tu casa."],
                ["Asesoramiento real", "Te decimos qué corte según la ocasión, sin vendértela."],
                ["Precio de barrio", "Calidad de steakhouse, precio de esquina."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-100">{t}</p>
                    <p className="text-sm text-neutral-400">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESO / CÓMO COMPRAR */}
      <section id="proceso" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
          Cómo comprar
        </h2>
        <p className="mt-2 text-neutral-400 text-center max-w-xl mx-auto">
          Tres pasos, sin complicaciones.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            ["1", "Elegís tu corte", "Nos decís qué necesitás por WhatsApp o vienes al local."],
            ["2", "Cortamos a medida", "Preparamos tu pedido en el momento, al vacío si querés."],
            ["3", "Retirás o recibís", "Lo retirás sin fila o lo llevamos a tu casa el mismo día."],
          ].map(([n, t, d]) => (
            <div
              key={n}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-lg"
            >
              <div className="text-rose-500 text-2xl font-bold">{n}</div>
              <h3 className="mt-3 text-lg font-semibold text-neutral-50">{t}</h3>
              <p className="mt-2 text-sm text-neutral-400">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRUEBA SOCIAL */}
      <section id="opinan" className="bg-neutral-900/60 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
            Quienes compran, repiten
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              ["La carne llega perfecta al vacío, dura semanas.", "Marta G. · Olavarría"],
              ["Por fin un carnicero que te asesora de verdad.", "Diego R. · Sierras Bayas"],
              ["Pedí el asado un sábado y me lo trajeron a la tarde. Impecable.", "Lucía M. · Olavarría"],
            ].map(([t, a]) => (
              <figure
                key={a}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 shadow-lg"
              >
                <p className="text-neutral-200 leading-relaxed">“{t}”</p>
                <figcaption className="mt-4 text-sm text-rose-400 font-medium">
                  {a}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="comprar" className="relative overflow-hidden">
        <img
          src={FOTO.cta}
          alt="Carnes"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-neutral-950/70" />
        <div className="relative max-w-3xl mx-auto px-4 py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-50">
            Tu próximo asado empieza acá
          </h2>
          <p className="mt-4 text-neutral-300">
            Escribinos por WhatsApp y te lo dejamos listo.
          </p>
          <a
            href="https://wa.me/542284456789"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center px-8 py-4 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-lg transition-colors"
          >
            Pedir mi corte por WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-neutral-400 text-sm">
            Carnicería López · Av. San Martín 234, Olavarría
          </span>
          <span className="text-rose-500 text-sm font-semibold">
            Demo · Soporte Digital
          </span>
          <Link href="/studio" className="text-neutral-400 text-sm hover:text-rose-400">
            Conocé el Studio →
          </Link>
        </div>
      </footer>
    </main>
  );
}
