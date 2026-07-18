import Card from "@/components/ui/Card";
import { AREAS } from "@/lib/servicios";

// Resumen de áreas en la Home — Arquitectura §4 Nivel 2 + Documento Maestro §10
export default function Servicios() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-h2 text-gray-900 text-center">Nuestras soluciones</h2>
        <p className="text-body-lg text-gray-600 text-center mt-4 max-w-2xl mx-auto">
          Agrupadas por el problema que resuelven, no por productos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {AREAS.map((area) => (
            <Card
              key={area.slug}
              title={area.titulo}
              description={area.descripcion}
              href={`/servicios/${area.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
