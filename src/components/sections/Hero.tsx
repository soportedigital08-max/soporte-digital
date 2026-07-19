import Button from "@/components/ui/Button";

// Hero — Decisión #014: claridad concreta. Rediseño premium con imagen real.
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600">
      {/* Patrón de puntos sutil */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-400/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-primary-900/20 blur-3xl" />

      <div className="container relative grid md:grid-cols-2 gap-10 items-center py-24">
        <div>
          <span className="inline-block text-sm font-semibold tracking-wide text-primary-100 uppercase">
            Soporte técnico & Desarrollo a medida
          </span>
          <h1 className="text-h1 text-white font-bold mt-3">
            Tu tecnología no funciona.
            <br />
            Nosotros la arreglamos.
          </h1>

          <p className="text-body-lg text-primary-100 mt-5">
            PC lenta, WiFi que cae, archivos perdidos, sitio que no convierte.
            Y si tu negocio necesita <strong>un sistema o CRM a medida</strong>,
            también lo desarrollamos. Resolvemos problemas reales de tecnología en
            Olavarría y toda Argentina.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              href="/contacto"
              variant="primary"
              className="bg-white text-primary-800 hover:bg-primary-50"
            >
              Solicitar soporte
            </Button>
            <Button
              href="/servicios/sistema-a-medida-crm"
              variant="secondary"
              className="border-2 border-white bg-white text-primary-800 font-semibold hover:bg-primary-50"
            >
              Desarrollar mi sistema
            </Button>
          </div>
        </div>

        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-tech.jpg"
            alt="Soporte tecnológico profesional"
            className="rounded-card shadow-premium w-full object-cover h-72 md:h-80"
          />
          <div className="absolute inset-0 rounded-card ring-1 ring-white/20" />
        </div>
      </div>
    </section>
  );
}
