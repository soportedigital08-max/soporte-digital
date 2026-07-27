import Link from "next/link";

// Landing masculino moderna para Barbería Trade (estilo estatus, confianza).
// Paleta: negro + dorado / blanco. Fotos reales del local.
// Hero fullscreen, CTA visible, contraste fuerte.

const FOTO = {
  hero: "https://images.unsplash.com/photo-1611892440504-6d0b5e4c5e0b?w=1920&q=75",
  interior: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1200&q=75",
  servicio: "https://images.unsplash.com/photo-1558030006-450675393462?w=1200&q=75",
  detalle: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=75",
};

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Opinan", href: "#opinan" },
  { label: "Reserva", href: "#reserva" },
];

export const metadata = {
  title: "Barbería Trade — Estilo que se nota",
  description:
    "Barbería Trade. Corte, barba y estilo. En Olavarría, con tijera y precisión.",
};

export default function Page() {
  return (
    <main className="bg-black text-white font-sans antialiased">
      {/* NAV fija con CTA Reservar siempre visible */}
      <header className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight text-white">
            Barbería <span className="text-amber-400">Trade</span>
          </span>
          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/542200000000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-colors"
          >
            Reservar
          </a>
        </div>
      </header>

      {/* HERO fullscreen inmersivo */}
      <section id="inicio" className="relative h-screen min-h-[600px] overflow-hidden">
        <img
          src={FOTO.hero}
          alt="Barbería Trade"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.7) 100%)" }} />
        <div className="relative h-full max-w-6xl mx-auto px-4 flex flex-col justify-end pb-24 md:pb-32 text-center">
          <p className="text-amber-300 text-sm font-bold tracking-[0.3em] uppercase mb-4">
            Estilo masculino · Olavarría
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.02] tracking-tight text-white">
            Estilo que se nota.
          </h1>
          <p className="mt-5 text-lg text-gray-200 max-w-xl mx-auto font-light">
            Corte, barba y productos premium. Un lugar donde el tiempo se vuelve
            ritual y el resultado, estatus.
          </p>
          <div className="mt-8">
            <a
              href="https://wa.me/542200000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg transition-colors"
            >
              Reservar cita
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="max-w-6xl mx-auto px-4 py-24">
        <p className="text-amber-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4 text-center">
          Nuestros servicios
        </p>
        <h2 className="text-4xl font-bold text-center mb-12">Cortes premium</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Corte clásico", d: "Tijera y sección exacta para cualquier tipo de cabello." },
            { t: "Barba completa", d: "Perfilado, afeitado a navaja y cuidado de la piel." },
            { t: "Asesoría de estilo", d: "Te recomendamos el corte ideal según tu rostro y estilo." },
          ].map((s) => (
            <div
              key={s.t}
              className="border border-gray-800 bg-gray-900 rounded-2xl p-6 shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center mb-4">
                <span className="text-amber-400 text-2xl">★</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{s.t}</h3>
              <p className="mt-2 text-gray-400">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="bg-gray-900 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <p className="text-amber-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4 text-center">
            El proceso
          </p>
          <h2 className="text-4xl font-bold text-center mb-12">3 pasos, sin complicaciones</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "1", t: "Reservás", d: "Escribinos por WhatsApp o llamá. Contás con tu disponibilidad." },
              { n: "2", t: "Cortamos", d: "Te recibimos con un café. El corte es nuestra especialidad." },
              { n: "3", t: "Te vas", d: "Listo. Volvés con estilo, confianza y un nuevo look." },
            ].map((p) => (
              <div key={p.n} className="text-center border border-gray-800 bg-gray-950 rounded-2xl p-6">
                <div className="w-14 h-14 rounded-full bg-amber-500 text-black font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {p.n}
                </div>
                <h3 className="text-lg font-semibold text-white">{p.t}</h3>
                <p className="mt-2 text-gray-400 text-sm">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPINAN */}
      <section id="opinan" className="max-w-6xl mx-auto px-4 py-24">
        <p className="text-amber-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4 text-center">
          Lo que dicen
        </p>
        <h2 className="text-4xl font-bold text-center mb-12">Quienes ya se quedaron</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            ["El corte me quedó impecable, y la barba como si fuera de barbería de lujo.", "Lucas M. · Olavarría"],
            ["Finalmente encontré un lugar que entiende el estilo. 100% recomendado.", "Martín R. · Olavarría"],
          ].map(([t, a]) => (
            <blockquote className="border-l-4 border-amber-500 bg-gray-900 p-6 rounded-r-2xl shadow-xl">
              <p className="text-gray-200 leading-relaxed">“{t}”</p>
              <footer className="mt-4 text-amber-400 font-semibold">{a}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="reserva" className="relative overflow-hidden">
        <img
          src={FOTO.interior}
          alt="Interior Barbería Trade"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative max-w-3xl mx-auto px-4 py-28 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Tu estilo merece más
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Reservá tu cita hoy. El primer corte es especial.
          </p>
          <a
            href="https://wa.me/542200000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center px-10 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg transition-colors"
          >
            Reservar cita ahora
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-white font-bold">Barbería Trade</span>
            <span className="text-gray-500 block text-sm">Olavarría</span>
          </div>
          <a
            href="https://soportedigital.com.ar"
            className="text-amber-400 hover:text-white transition-colors"
          >
            Volver a soportedigital.com.ar
          </a>
          <Link href="/studio" className="text-gray-400 hover:text-amber-300 text-sm">
            Conocé el Studio →
          </Link>
        </div>
      </footer>
    </main>
  );
}
