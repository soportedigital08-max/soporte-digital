import Button from "@/components/ui/Button";

// Hero — Decisión #014: claridad concreta sobre mensajes genéricos.
// Rediseño premium: fondo con gradiente azul corporativo (reflecta marca SD).
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600">
      {/* Halo decorativo sutil */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-400/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-primary-900/20 blur-3xl" />

      <div className="container max-w-3xl mx-auto text-center py-28 relative">
        <h1 className="text-h1 text-white font-bold">
          Tu tecnología no funciona.
          <br />
          Nosotros la arreglamos.
        </h1>

        <p className="text-body-lg text-primary-100 mt-6">
          PC lenta, WiFi que cae, archivos perdidos, sitio que no convierte.
          Y si tu negocio necesita <strong>un sistema o CRM a medida</strong>,
          también lo desarrollamos. Resolvemos problemas reales de tecnología en
          Olavarría y toda Argentina, con diagnóstico claro y soluciones que perduran.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
            className="border-white text-white hover:bg-white/10"
          >
            Desarrollar mi sistema
          </Button>
        </div>
      </div>
    </section>
  );
}
