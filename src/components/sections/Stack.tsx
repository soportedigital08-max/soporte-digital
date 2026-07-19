import Image from "next/image";

// Sección de stack tecnológico — logos reales en grayscale, color al hover.
const STACK: { nombre: string; archivo: string }[] = [
  { nombre: "Windows", archivo: "windows" },
  { nombre: "Linux", archivo: "linux" },
  { nombre: "macOS", archivo: "apple" },
  { nombre: "Redes WiFi", archivo: "wifi" },
  { nombre: "Cámaras IP", archivo: "cameraipp" },
  { nombre: "Next.js", archivo: "nextdotjs" },
  { nombre: "React", archivo: "react" },
  { nombre: "TypeScript", archivo: "typescript" },
  { nombre: "Node.js", archivo: "nodedotjs" },
  { nombre: "PostgreSQL", archivo: "postgresql" },
  { nombre: "Mercado Pago", archivo: "mercadopago" },
  { nombre: "cPanel", archivo: "cpanel" },
];

export default function Stack() {
  return (
    <section className="py-20 bg-ink-800">
      <div className="container text-center">
        <h2 className="text-h2 text-white">Tecnología que dominamos</h2>
        <p className="text-body-lg text-primary-200 mt-3 max-w-2xl mx-auto">
          Trabajamos con lo que tu equipo y tu negocio ya usan. Sin humo.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {STACK.map((t) => (
            <div
              key={t.nombre}
              title={t.nombre}
              className="group flex h-16 w-16 items-center justify-center rounded-card bg-white/5 p-3 transition-transform hover:scale-110"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/tech/${t.archivo}.svg`}
                alt={t.nombre}
                className="h-full w-full object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
