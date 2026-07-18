import Card from "@/components/ui/Card";
import { PROBLEMAS_DESTACADOS } from "@/lib/servicios";

// Problemas destacados en la Home — deben coincidir con 03-ARQUITECTURA.md §4 Nivel 3
export default function Problemas() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-h2 text-gray-900 text-center">
          ¿Qué problema estás teniendo?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {PROBLEMAS_DESTACADOS.map((problema) => (
            <Card
              key={problema.href}
              title={problema.titulo}
              description={problema.descripcion}
              href={problema.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
