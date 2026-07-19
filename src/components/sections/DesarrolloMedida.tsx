import Button from "@/components/ui/Button";
import { AREAS } from "@/lib/servicios";

// Banda "Desarrollo a medida" — visibiliza la capacidad de crear CRMs/sistemas.
// Pide del usuario: el visitante debe saber que Soporte Digital desarrolla sistemas.
export default function DesarrolloMedida() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-sm font-semibold tracking-wide text-primary-700 uppercase">
              Desarrollo a medida
            </span>
            <h2 className="text-h2 text-gray-900 mt-3">
              ¿Necesitás un sistema o CRM como el que hicimos para Ippon Group?
            </h2>
            <p className="text-body-lg text-gray-600 mt-4">
              No todas las empresas funcionan igual. Si anotás socios, turnos, stock o
              cobros en planillas sueltas, te desarrollamos un sistema web propio: altas,
              pagos (incluido Mercado Pago) y un portal para tus clientes. Todo en tu dominio.
            </p>
            <ul className="mt-6 space-y-2 text-body text-gray-700">
              <li>✓ Socios, planes y cobros bajo control</li>
              <li>✓ Mercado Pago integrado para pagos online</li>
              <li>✓ Portal donde tu cliente reserva y paga desde el celular</li>
              <li>✓ Tus datos, en tu dominio</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/servicios/sistema-a-medida-crm" variant="primary">
                Quiero mi sistema a medida
              </Button>
              <Button href="/casos-de-exito/crm-ippon-group" variant="secondary">
                Ver caso real: Ippon Group
              </Button>
            </div>
          </div>
          <div className="rounded-card border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Caso real
            </p>
            <p className="text-body-lg text-gray-900 mt-2 font-medium">
              CRM de gestión para un Dojo de Judo
            </p>
            <p className="text-body text-gray-600 mt-2">
              Socios, pagos y asistencia en un solo lugar. El dojo dejó las planillas sueltas
              y hoy gestiona todo desde su propio sistema web.
            </p>
            <Button
              href="https://ippongroup.com.ar"
              variant="secondary"
              className="mt-4"
            >
              Conocer Ippon Group →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
