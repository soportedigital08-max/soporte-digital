// Sección de stack tecnológico — refuerza credibilidad "tech premium".
const STACK = [
  "Windows",
  "Linux",
  "macOS",
  "Redes WiFi",
  "Cámaras IP",
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Mercado Pago",
  "Hosting cPanel",
];

export default function Stack() {
  return (
    <section className="py-20 bg-primary-900">
      <div className="container text-center">
        <h2 className="text-h2 text-white">Tecnología que dominamos</h2>
        <p className="text-body-lg text-primary-200 mt-3 max-w-2xl mx-auto">
          Trabajamos con lo que tu equipo y tu negocio ya usan. Sin humo.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {STACK.map((t) => (
            <span
              key={t}
              className="rounded-full border border-primary-400/30 bg-primary-800/40 px-4 py-2 text-small font-medium text-primary-100"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
