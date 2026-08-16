import Card from "@/components/ui/Card";
import { PROBLEMAS_DESTACADOS } from "@/lib/servicios";

// Problemas destacados en la Home — deben coincidir con 03-ARQUITECTURA.md §4 Nivel 3
export default function Problemas() {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      {/* Aurora radial de profundidad (Fase B — Patrón 4) */}
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-[420px] w-[720px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
      <div className="container relative">
        <h2 className="text-h2 text-white text-center">
          ¿Qué problema estás teniendo?
        </h2>
        <p className="text-body-lg text-primary-100 text-center mt-4 max-w-2xl mx-auto">
          Elegí tu dolor. Nosotros lo resolvemos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {PROBLEMAS_DESTACADOS.map((problema) => (
            <Card
              key={problema.slug}
              title={problema.titulo}
              description={problema.situacion}
              href={`/servicios/${problema.slug}`}
              variant="dark"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
