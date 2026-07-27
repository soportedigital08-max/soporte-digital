// src/components/sections/ComercioDemo.tsx
// Plantilla reutilizable para mockups de sitios de comercios (Studio Web Soporte Digital).
// Se usa en /demo/[slug] con datos distintos por comercio.

interface ComercioDemoProps {
  nombre: string;
  rubro: string;
  slogan?: string;
  color: string; // color de acento del comercio (ej. "#E11D48")
  telefono: string; // formato 11 2345 6789
  whatsapp: string; // solo números
  direccion: string;
  horario: string;
  servicios: { titulo: string; desc: string }[];
  sobre: string;
}

export default function ComercioDemo({
  nombre,
  rubro,
  slogan,
  color,
  telefono,
  whatsapp,
  direccion,
  horario,
  servicios,
  sobre,
}: ComercioDemoProps) {
  return (
    <main className="min-h-screen bg-ink-900 text-white">
      {/* Header estilo sitio con branding SD */}
      <section className="relative overflow-hidden bg-ink-900">
        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl"
          style={{ background: `${color}33` }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container relative pt-20 pb-12 text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-wide mb-3" style={{ color }}>
            {rubro}
          </p>
          <h1 className="text-h1 font-extrabold leading-[1.05]">{nombre}</h1>
          {slogan && (
            <p className="text-body-lg text-primary-100 mt-4">{slogan}</p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-input text-body font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: color }}
            >
              Escribinos por WhatsApp
            </a>
            <a
              href={`tel:${telefono.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-input text-body font-medium border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              Llamar
            </a>
          </div>
        </div>
      </section>

      <div className="container max-w-4xl mx-auto pb-20 px-4 space-y-12">
        {/* Servicios */}
        <section>
          <h2 className="text-h2 text-white font-bold mb-6">Qué ofrecemos</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {servicios.map((s, i) => (
              <div
                key={i}
                className="rounded-card border border-white/10 bg-ink-800 p-5"
              >
                <h3 className="text-h4 text-white">{s.titulo}</h3>
                <p className="text-body text-primary-100 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre nosotros */}
        <section>
          <h2 className="text-h2 text-white font-bold mb-6">Sobre nosotros</h2>
          <p className="text-body text-primary-100 leading-relaxed">{sobre}</p>
        </section>

        {/* Contacto */}
        <section>
          <h2 className="text-h2 text-white font-bold mb-6">Dónde encontrarnos</h2>
          <div className="rounded-card border border-white/10 bg-ink-800 p-6 space-y-2">
            <p className="text-body text-primary-100">
              <span className="text-white font-semibold">Dirección:</span>{" "}
              {direccion}
            </p>
            <p className="text-body text-primary-100">
              <span className="text-white font-semibold">Horario:</span>{" "}
              {horario}
            </p>
            <p className="text-body text-primary-100">
              <span className="text-white font-semibold">Tel:</span> {telefono}
            </p>
            <p className="text-body text-primary-100">
              <span className="text-white font-semibold">WhatsApp:</span>{" "}
              {whatsapp}
            </p>
          </div>
        </section>

        {/* CTA Studio */}
        <section className="text-center border-t border-white/10 pt-10">
          <p className="text-body text-gray-400 mb-3">
            Sitio de demostración · Diseñado por Soporte Digital
          </p>
          <a
            href="/studio"
            className="text-accent underline-offset-4 hover:underline text-body"
          >
            ¿Querés un sitio así para tu comercio? Conocé el Studio →
          </a>
        </section>
      </div>
    </main>
  );
}
