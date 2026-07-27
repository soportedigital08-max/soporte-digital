import Link from "next/link";

// Landing premium emocional para Lleras Park Hotel Boutique (Olavarría).
// Hero fullscreen inmersivo, CTA "Reservar" fijo, storytelling visual.
// Construible en Next.js + Tailwind.

const FOTO = {
  hero: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1920&q=75",
  habitacion: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=75",
  piscina: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=75",
  desayuno: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=75",
  detalle: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=75",
};

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "El lugar", href: "#lugar" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Cómo llegar", href: "#llegar" },
];

export const metadata = {
  title: "Lleras Park Hotel Boutique — Olavarría",
  description:
    "Hotel boutique en Olavarría. Descanso, exclusividad y experiencia. 25 habitaciones, hidromasaje, piscina y desayuno.",
};

export default function Page() {
  return (
    <main className="bg-stone-950 text-stone-100 font-sans antialiased">
      {/* NAV fija con CTA Reservar siempre visible */}
      <header className="fixed top-0 inset-x-0 z-50 bg-stone-950/70 backdrop-blur border-b border-stone-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-base font-semibold tracking-tight text-stone-50">
            Lleras Park <span className="text-amber-400">Hotel</span>
          </span>
          <nav className="hidden md:flex gap-7 text-sm text-stone-300">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-amber-300 transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/542284460590"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 text-sm font-semibold transition-colors"
          >
            Reservar
          </a>
        </div>
      </header>

      {/* HERO fullscreen inmersivo */}
      <section id="inicio" className="relative h-screen min-h-[600px] overflow-hidden">
        <img
          src={FOTO.hero}
          alt="Hotel boutique"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/30 to-stone-950" />
        <div className="relative h-full max-w-6xl mx-auto px-4 flex flex-col justify-end pb-24 md:pb-32">
          <p className="text-amber-300/90 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Olavarría · Hotel Boutique
          </p>
          <h1 className="text-4xl md:text-7xl font-extralight leading-[1.02] tracking-tight max-w-3xl text-stone-50">
            Descansá como
            <br />
            <span className="font-semibold text-amber-200">te merecés.</span>
          </h1>
          <p className="mt-5 text-lg text-stone-200/90 max-w-xl font-light">
            25 habitaciones, hidromasaje en cada una, piscina y desayuno con
            vista. Un hotel para sentir, no solo dormir.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/542284460590"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold transition-colors"
            >
              Reservar ahora
            </a>
            <a
              href="#lugar"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-stone-400/60 text-stone-100 hover:border-amber-300 hover:text-amber-200 transition-colors"
            >
              Conocé el lugar
            </a>
          </div>
        </div>
      </section>

      {/* EL LUGAR — storytelling visual */}
      <section id="lugar" className="max-w-6xl mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img
              src={FOTO.habitacion}
              alt="Habitación"
              className="rounded-3xl shadow-2xl w-full h-[420px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-stone-900 border border-stone-800 rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-amber-300 text-2xl font-semibold">25</p>
              <p className="text-stone-400 text-xs">habitaciones</p>
            </div>
          </div>
          <div>
            <p className="text-amber-300/80 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              El lugar
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-50">
              Un refugio a 200 metros del casino
            </h2>
            <p className="mt-5 text-stone-300/90 leading-relaxed font-light">
              Cada habitación fue pensada para que entres y respirés. Luz
              cálida, detalles reales y el silencio que la ciudad no te da.
              A cinco minutos del centro, pero lejos de todo.
            </p>
            <p className="mt-4 text-stone-300/90 leading-relaxed font-light">
              Desayuno continental incluido, estacionamiento privado y WiFi en
              todo el hotel. Lo esencial, hecho bien.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA — storytelling por imágenes (no catálogo) */}
      <section id="experiencia" className="bg-stone-900/60 border-y border-stone-800">
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-amber-300/80 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              La experiencia
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-50">
              Pequeños momentos que se quedan
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { img: FOTO.piscina, t: "La piscina", d: "Sol, agua y el deck de lectura. Tu tarde, sin apuro." },
              { img: FOTO.desayuno, t: "El desayuno", d: "Con vista, tranquilo, para arrancar bien el día." },
              { img: FOTO.detalle, t: "El detalle", d: "Hidromasaje en tu habitación. El lujo de lo simple." },
            ].map((x) => (
              <figure key={x.t} className="group rounded-3xl overflow-hidden shadow-xl">
                <div className="h-64 overflow-hidden">
                  <img
                    src={x.img}
                    alt={x.t}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <figcaption className="bg-stone-950 p-5">
                  <h3 className="text-lg font-medium text-stone-50">{x.t}</h3>
                  <p className="mt-1 text-sm text-stone-400 font-light">{x.d}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO LLEGAR / CONFIANZA */}
      <section id="llegar" className="max-w-6xl mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-amber-300/80 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Cómo llegar
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-50">
              Fácil de encontrar, difícil de dejar
            </h2>
            <p className="mt-5 text-stone-300/90 leading-relaxed font-light">
              Ruta 226 (Km 297) esquina España. A 200 metros del único casino de
              Olavarría y 5 minutos del centro. Llamanos o escribinos y te
              dejamos todo listo.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://wa.me/542284460590"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold transition-colors"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-stone-800 bg-stone-900 p-8 shadow-xl">
            <p className="text-stone-400 text-sm uppercase tracking-widest">
              Lo que incluye tu estadía
            </p>
            <ul className="mt-5 space-y-3 text-stone-200 font-light">
              {[
                "Hidromasaje en todas las habitaciones",
                "Desayuno continental incluido",
                "Piscina al aire libre y deck",
                "Gimnasio propio",
                "Estacionamiento y WiFi",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden">
        <img
          src={FOTO.habitacion}
          alt="Habitación"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/90 to-stone-950/70" />
        <div className="relative max-w-3xl mx-auto px-4 py-28 text-center">
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-stone-50">
            Tu próxima estadía
            <br />
            <span className="font-semibold text-amber-200">empieza con un click.</span>
          </h2>
          <a
            href="https://wa.me/542284460590"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center px-9 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-lg transition-colors"
          >
            Reservar ahora
          </a>
        </div>
      </section>

      <footer className="border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-stone-400 text-sm">
            Lleras Park Hotel · Ruta 226 (Km 297) esq. España, Olavarría
          </span>
          <span className="text-amber-400 text-sm font-semibold">Demo · Soporte Digital</span>
          <Link href="/studio" className="text-stone-400 text-sm hover:text-amber-300">
            Conocé el Studio →
          </Link>
        </div>
      </footer>
    </main>
  );
}
