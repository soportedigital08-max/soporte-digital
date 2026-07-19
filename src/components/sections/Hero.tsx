import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Terminal from "@/components/sections/Terminal";

// Hero — estética TECH PREMIUM (opción A): azul profundo + glassmorphism +
// terminal animada (efecto tipeo) como elemento visual. Sin foto de stock.
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-900">
      {/* Aurora de gradientes */}
      <div className="absolute -top-32 -left-24 w-[34rem] h-[34rem] rounded-full bg-primary-600/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-24 w-[34rem] h-[34rem] rounded-full bg-primary-400/20 blur-3xl" />
      {/* Grilla técnica sutil */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-400/40 bg-primary-800/40 px-3 py-1 text-small font-medium text-primary-100">
            <span className="h-2 w-2 rounded-full bg-primary-300" />
            Soporte técnico & Desarrollo a medida
          </span>

          <h1 className="text-h1 text-white font-extrabold mt-5 leading-[1.05]">
            Tu tecnología no funciona.
            <span className="block text-primary-300">Nosotros la arreglamos.</span>
          </h1>

          <p className="text-body-lg text-primary-100 mt-5 max-w-xl">
            PC lenta, WiFi que cae, archivos perdidos, sitio que no convierte.
            Y si tu negocio necesita <strong>un sistema o CRM a medida</strong>,
            también lo desarrollamos. Tecnología real, en Olavarría y toda Argentina.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/contacto" variant="primary">
              Solicitar soporte
            </Button>
            <Button
              href="/servicios/sistema-a-medida-crm"
              variant="secondary"
              className="border border-white bg-white text-primary-800 font-semibold hover:bg-primary-50"
            >
              Desarrollar mi sistema
            </Button>
          </div>
        </div>

        <Reveal className="relative">
          <Terminal />
          <div className="absolute -z-10 -bottom-6 -right-6 h-40 w-40 rounded-card bg-primary-500/20 blur-2xl" />
        </Reveal>
      </div>
    </section>
  );
}
