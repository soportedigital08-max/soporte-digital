interface Diferencial {
  titulo: string;
  descripcion: string;
}

// Diferencial — Documento Maestro §17 (compite por claridad, confianza, resolución real)
const DIFERENCIALES: Diferencial[] = [
  {
    titulo: "Diagnóstico correcto",
    descripcion:
      "No improvisamos. Identificamos la causa real del problema antes de tocar nada.",
  },
  {
    titulo: "Resolución eficiente",
    descripcion:
      "Trabajamos para que tu tecnología vuelva a funcionar, no para venderte más.",
  },
  {
    titulo: "Comunicación simple",
    descripcion:
      "Te explicamos qué pasa y qué hacemos, en lenguaje claro y sin tecnicismos.",
  },
  {
    titulo: "Acompañamiento",
    descripcion:
      "Seguimiento real después de la solución. No te dejamos solo con la duda.",
  },
];

export default function Confianza() {
  return (
    <section className="py-24 bg-surface">
      <div className="container">
        <h2 className="text-h2 text-gray-900 text-center">
          Por qué confiar en nosotros
        </h2>
        <p className="text-body-lg text-gray-600 text-center mt-4 max-w-2xl mx-auto">
          No competimos por precio. Competimos por claridad, confianza y
          resolución real.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {DIFERENCIALES.map((item) => (
            <div
              key={item.titulo}
              className="bg-background border border-gray-200 rounded-card p-6"
            >
              <h3 className="text-h4 text-primary-900">{item.titulo}</h3>
              <p className="text-body text-gray-600 mt-2">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
