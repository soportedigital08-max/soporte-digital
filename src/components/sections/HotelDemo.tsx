// src/components/sections/HotelDemo.tsx
// Plantilla de mockup para hoteles (Studio Web Soporte Digital).
// Estilo cálido/premium, hero con foto, botón Reservar destacado.

interface HotelDemoProps {
  nombre: string;
  slogan: string;
  color: string; // acento del hotel
  telefono: string;
  whatsapp: string;
  email: string;
  direccion: string;
  reservasUrl?: string; // link de reserva real si lo tuviera
  hero: string; // texto de bienvenida
  servicios: { titulo: string; desc: string }[];
  habitaciones: { nombre: string; desc: string }[];
  galeria: string[]; // textos de piezas (placeholder)
}

export default function HotelDemo({
  nombre,
  slogan,
  color,
  telefono,
  whatsapp,
  email,
  direccion,
  reservasUrl,
  hero,
  servicios,
  habitaciones,
  galeria,
}: HotelDemoProps) {
  return (
    <main className="min-h-screen bg-ink-900 text-white">
      {/* HERO con foto de portada (placeholder cálido) */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${color}cc 0%, #0B0F14 70%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container relative pt-24 pb-16 text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-wide mb-3" style={{ color }}>
            Hotel Boutique · Olavarría
          </p>
          <h1 className="text-h1 font-extrabold leading-[1.05]">{nombre}</h1>
          <p className="text-body-lg text-primary-100 mt-4">{slogan}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={reservasUrl || `https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-input text-body-lg font-bold text-ink-900 transition-opacity hover:opacity-90"
              style={{ background: color }}
            >
              Reservar ahora
            </a>
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-4 rounded-input text-body font-medium border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="container max-w-4xl mx-auto pb-20 px-4 space-y-14">
        {/* Bienvenida */}
        <section>
          <h2 className="text-h2 text-white font-bold mb-4">Bienvenido</h2>
          <p className="text-body text-primary-100 leading-relaxed">{hero}</p>
        </section>

        {/* Servicios */}
        <section>
          <h2 className="text-h2 text-white font-bold mb-6">
            Todo lo que necesitás
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
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

        {/* Habitaciones */}
        <section>
          <h2 className="text-h2 text-white font-bold mb-6">
            Nuestras habitaciones
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {habitaciones.map((h, i) => (
              <div
                key={i}
                className="rounded-card border border-white/10 bg-ink-800 p-5"
              >
                <h3 className="text-h4 text-white">{h.nombre}</h3>
                <p className="text-body text-primary-100 mt-2">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Galería placeholder */}
        <section>
          <h2 className="text-h2 text-white font-bold mb-6">Galería</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {galeria.map((g, i) => (
              <div
                key={i}
                className="aspect-square rounded-card border border-white/10 bg-ink-800 flex items-center justify-center text-center px-2"
              >
                <span className="text-body text-gray-500">{g}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section>
          <h2 className="text-h2 text-white font-bold mb-6">Encontranos</h2>
          <div className="rounded-card border border-white/10 bg-ink-800 p-6 space-y-2">
            <p className="text-body text-primary-100">
              <span className="text-white font-semibold">Dirección:</span>{" "}
              {direccion}
            </p>
            <p className="text-body text-primary-100">
              <span className="text-white font-semibold">Tel:</span> {telefono}
            </p>
            <p className="text-body text-primary-100">
              <span className="text-white font-semibold">WhatsApp:</span>{" "}
              {whatsapp}
            </p>
            <p className="text-body text-primary-100">
              <span className="text-white font-semibold">Email:</span> {email}
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
            ¿Querés un sitio así para tu hotel? Conocé el Studio →
          </a>
        </section>
      </div>
    </main>
  );
}
