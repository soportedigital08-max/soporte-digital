import Button from "@/components/ui/Button";

// Llamado a la acción final — Roadmap Fase 2 / Arquitectura §10 (Home: CTA)
export default function CTA() {
  return (
    <section className="py-24 bg-primary-900">
      <div className="container text-center">
        <h2 className="text-h2 text-white">
          ¿Tenés un problema tecnológico?
        </h2>
        <p className="text-body-lg text-primary-100 mt-4 max-w-2xl mx-auto">
          Contanos qué pasa. Te ayudamos a resolverlo de forma clara y
          duradera.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contacto" variant="primary">
            Solicitar soporte
          </Button>
          <Button
            href="/servicios"
            variant="secondary"
            // variant secundario sobre fondo oscuro
          >
            Ver soluciones
          </Button>
        </div>
      </div>
    </section>
  );
}
