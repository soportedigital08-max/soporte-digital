import Button from "@/components/ui/Button";

// Llamado a la acción final — Roadmap Fase 2 / Arquitectura §10 (Home: CTA)
// Mejora premium (Fase B): gradiente azul profundo + curva superior + halo para
// conectar con la sección previa en lugar de un bloque plano que "corta".
export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-900 to-ink-900 pt-28 pb-24">
      {/* Halo superior para continuidad con la sección anterior */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-primary-500/10 to-transparent" />
      {/* Curva de unión (ya no borde recto cortante) */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 rounded-b-[2.5rem] bg-ink-900" />
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
    </section>
  );
}
