import Counter from "@/components/ui/Counter";

// Sección de estadísticas de confianza — counter-up al entrar en viewport.
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
    <section className="py-16 bg-ink-800 text-white">
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
