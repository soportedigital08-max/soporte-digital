import Button from "@/components/ui/Button";

// Hero — Decisión #014: claridad concreta sobre mensajes genéricos.
// El visitante debe identificarse con su problema en menos de 5 seg (Documento Maestro §14).
export default function Hero() {
  return (
    <section className="py-24 text-center">
      <div className="container max-w-3xl mx-auto">
        <h1 className="text-h1 text-gray-900">
          Tu tecnología no funciona.
          <br />
          Nosotros la arreglamos.
        </h1>

        <p className="text-body-lg text-gray-600 mt-6">
          PC lenta, WiFi que cae, archivos perdidos, sitio que no convierte.
          Y si tu negocio necesita <strong>un sistema o CRM a medida</strong>,
          también lo desarrollamos. Resolvemos problemas reales de tecnología en
          Olavarría y toda Argentina, con diagnóstico claro y soluciones que perduran.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contacto" variant="primary">
            Solicitar soporte
          </Button>
          <Button href="/servicios/sistema-a-medida-crm" variant="secondary">
            Desarrollar mi sistema
          </Button>
        </div>
      </div>
    </section>
  );
}
