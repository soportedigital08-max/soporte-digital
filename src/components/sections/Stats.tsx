// Sección de estadísticas de confianza — aporta capa visual y credibilidad.
const STATS = [
  { valor: "500+", label: "Equipos reparados" },
  { valor: "10 años", label: "de experiencia" },
  { valor: "100%", label: "Olavarría y Argentina" },
  { valor: "24/7", label: "Soporte remoto" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-primary-900 text-white">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="text-h2 font-bold text-white">{s.valor}</div>
            <div className="text-small text-primary-200 mt-1 uppercase tracking-wide">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
