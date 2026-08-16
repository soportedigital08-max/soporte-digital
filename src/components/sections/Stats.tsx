import Counter from "@/components/ui/Counter";

// Sección de estadísticas de confianza — counter-up al entrar en viewport.
// Mejora premium (Fase B): gradiente sutil que conecta con el ink-900 de las
// secciones vecinas en lugar de un gris plano que "corta".
type Stat = {
  valor: number;
  prefix?: string;
  suffix?: string;
  label: string;
  static?: string;
};

const STATS: Stat[] = [
  { valor: 500, suffix: "+", label: "Equipos reparados" },
  { valor: 20, label: "años de experiencia" },
  { valor: 100, suffix: "%", label: "Olavarría y Argentina" },
  { valor: 0, label: "Soporte remoto", static: "24/7" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink-900 via-ink-800 to-ink-900 py-20">
      {/* Línea de glow superior para continuidad */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="text-h2 font-bold text-white font-mono tabular-nums">
              {s.static ? s.static : <Counter end={s.valor} prefix={s.prefix} suffix={s.suffix} />}
            </div>
            <div className="text-small text-primary-200 mt-1 uppercase tracking-wide">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
