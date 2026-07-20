import Reveal from "@/components/ui/Reveal";

interface Diferencial {
  titulo: string;
  descripcion: string;
  icon: React.ReactNode;
}

const IconBase = ({ children }: { children: React.ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    {children}
  </svg>
);

// Diferencial — Documento Maestro §17 (compite por claridad, confianza, resolución real)
const DIFERENCIALES: Diferencial[] = [
  {
    titulo: "Diagnóstico correcto",
    descripcion:
      "No improvisamos. Identificamos la causa real del problema antes de tocar nada.",
    icon: (
      <IconBase>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </IconBase>
    ),
  },
  {
    titulo: "Resolución eficiente",
    descripcion:
      "Trabajamos para que tu tecnología vuelva a funcionar, no para venderte más.",
    icon: (
      <IconBase>
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </IconBase>
    ),
  },
  {
    titulo: "Comunicación simple",
    descripcion:
      "Te explicamos qué pasa y qué hacemos, en lenguaje claro y sin tecnicismos.",
    icon: (
      <IconBase>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </IconBase>
    ),
  },
  {
    titulo: "Acompañamiento",
    descripcion:
      "Seguimiento real después de la solución. No te dejamos solo con la duda.",
    icon: (
      <IconBase>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </IconBase>
    ),
  },
];

export default function Confianza() {
  return (
    <section className="py-24 bg-ink-900">
      <div className="container">
        <h2 className="text-h2 text-white text-center">
          Por qué confiar en nosotros
        </h2>
        <p className="text-body-lg text-primary-200 text-center mt-4 max-w-2xl mx-auto">
          No competimos por precio. Competimos por claridad, confianza y
          resolución real.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {DIFERENCIALES.map((item) => (
            <Reveal key={item.titulo}>
              <div className="group h-full rounded-card border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-primary-400 hover:bg-white/[0.07]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-card bg-primary-600/20 text-primary-300 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="text-h4 text-white">{item.titulo}</h3>
                <p className="text-body text-primary-200 mt-2">
                  {item.descripcion}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
