import Button from "@/components/ui/Button";

// Llamado a la acción final — Roadmap Fase 2 / Arquitectura §10 (Home: CTA)
// Mejora premium (Fase B): gradiente azul profundo + curva superior + halo para
// conectar con la sección previa en lugar de un bloque plano que "corta".
export default function CTA() {
  return (
    <section className="relative max-w-7xl mx-auto px-6">
      <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-primary-500/20 bg-gradient-to-br from-primary-800/40 via-primary-900/20 to-ink-900/40 shadow-premium pt-28 pb-24">
        {/* Halo superior para continuidad con la sección anterior */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-primary-500/15 to-transparent" />
        {/* Grilla técnica sutil de fondo */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container relative text-center">
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
            className="border border-white/40 text-white hover:bg-white/10"
          >
            Ver soluciones
          </Button>
        </div>
      </div>
      </div>
    </section>
  );
}
