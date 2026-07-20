import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

// Banda "Desarrollo a medida / CRM" — identidad visual propia (acento violeta),
// checklist visual e ilustración tipo mockup del panel (datos 100% ficticios).
const CHECKS = [
  "Socios, planes y cobros bajo control",
  "Mercado Pago integrado para pagos online",
  "Portal donde tu cliente reserva y paga desde el celular",
  "Tus datos, en tu dominio",
];

// Mockup del panel admin — datos FICTICIOS (no exponer info real del cliente).
function AdminMockup() {
  return (
    <div className="rounded-card border border-violet-500/30 bg-[#0b0f14] shadow-premium overflow-hidden">
      {/* barra superior */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-3 text-small text-white/60">panel.empresa.com.ar</span>
      </div>
      <div className="flex">
        {/* sidebar */}
        <aside className="w-32 border-r border-white/10 bg-white/5 p-3 text-small text-white/70">
          <p className="font-semibold text-violet-300">Gestión</p>
          <p className="mt-2">Socios</p>
          <p>Pagos</p>
          <p>Finanzas</p>
          <p>Asistencia</p>
          <p className="mt-2 font-semibold text-violet-300">Portal</p>
          <p>Reservas</p>
          <p>Mis pagos</p>
        </aside>
        {/* contenido */}
        <div className="flex-1 p-4 text-small text-white/80">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-white">Socios</p>
            <span className="rounded bg-violet-600 px-2 py-0.5 text-white">
              + Nuevo
            </span>
          </div>
          <div className="mt-3 space-y-2">
            {[
              ["Ana Pérez", "Plan Classic", "$36.000", "ACTIVO"],
              ["Juan Gómez", "Plan Premium", "$48.000", "ACTIVO"],
              ["Lucía Fernández", "Familiar x2", "$64.800", "PENDIENTE"],
            ].map(([n, p, m, e]) => (
              <div
                key={n}
                className="flex items-center justify-between rounded bg-white/5 px-3 py-2"
              >
                <span>{n}</span>
                <span className="text-white/50">{p}</span>
                <span>{m}</span>
                <span
                  className={
                    e === "ACTIVO"
                      ? "rounded bg-green-500/20 px-2 text-green-300"
                      : "rounded bg-yellow-500/20 px-2 text-yellow-300"
                  }
                >
                  {e}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-violet-300">
            Mercado Pago conectado · 3 socios · $148.800 cobrado
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DesarrolloMedida() {
  return (
    <section className="py-24 bg-ink-900">
      {/* franja de acento violeta */}
      <div className="container max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-sm font-semibold tracking-wide text-violet-300 uppercase">
              Desarrollo a medida
            </span>
            <h2 className="text-h2 text-white mt-3">
              ¿Necesitás un sistema o CRM como el que hicimos para Ippon Group?
            </h2>
            <p className="text-body-lg text-primary-200 mt-4">
              No todas las empresas funcionan igual. Si anotás socios, turnos, stock
              o cobros en planillas sueltas, te desarrollamos un sistema web propio:
              altas, pagos (incluido Mercado Pago) y un portal para tus clientes.
              Todo en tu dominio.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {CHECKS.map((c) => (
                <li key={c} className="flex items-start gap-3 text-body text-primary-100">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/servicios/sistema-a-medida-crm" variant="primary">
                Quiero mi sistema a medida
              </Button>
              <Button href="/casos-de-exito/crm-ippon-group" variant="secondary"
                className="border border-violet-400 text-violet-200 hover:bg-violet-600/20">
                Ver caso real: Ippon Group
              </Button>
            </div>
          </div>

          <Reveal>
            <AdminMockup />
            <p className="mt-2 text-center text-small text-primary-300">
              Ilustración del panel (datos de ejemplo)
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
