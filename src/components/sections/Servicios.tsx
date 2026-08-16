import Card from "@/components/ui/Card";
import { ICONOS } from "@/components/ui/Iconos";
import { AREAS } from "@/lib/servicios";

// Resumen de áreas en la Home — Arquitectura §4 Nivel 2 + Documento Maestro §10
export default function Servicios() {
  return (
    <section className="relative rounded-t-[2.5rem] bg-transparent pt-24 pb-24">
      {/* Línea de glow superior para continuidad con la sección oscura previa */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
      <div className="container">
        <h2 className="text-h2 text-white text-center">Nuestras soluciones</h2>
        <p className="text-body-lg text-primary-200 text-center mt-4 max-w-2xl mx-auto">
          Agrupadas por el problema que resuelven, no por productos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {AREAS.map((area) => (
            <Card
              key={area.slug}
              title={area.titulo}
              description={area.descripcion}
              href={`/servicios/${area.slug}`}
              icon={ICONOS[area.slug]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
