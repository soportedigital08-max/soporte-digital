import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FormularioContacto from "@/components/sections/FormularioContacto";
import { CONTACTO } from "@/lib/servicios";

export const metadata: Metadata = {
  title: "Contacto — Soporte Digital",
  description:
    "Contanos tu problema tecnológico. Te ayudamos en Olavarría y toda Argentina.",
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-ink-900">
        <section className="py-24">
          <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Izquierda: copy + datos */}
            <div>
              <h1 className="text-h1 text-white">Hablemos</h1>
              <p className="text-body-lg text-primary-200 mt-6">
                Contanos qué pasa. Te respondemos con claridad y sin
                vueltas.
              </p>

              <div className="mt-12 flex flex-col gap-4">
                <a
                  href={`mailto:${CONTACTO.email}`}
                  className="text-h4 text-primary-300 hover:underline"
                >
                  {CONTACTO.email}
                </a>
                <a
                  href={`https://wa.me/${CONTACTO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-h4 text-primary-300 hover:underline"
                >
                  WhatsApp: +54 9 2284 520392
                </a>
                <span className="text-body text-primary-200">
                  {CONTACTO.ubicacion}
                </span>
              </div>
            </div>

            {/* Derecha: formulario */}
            <div className="bg-ink-800 border border-white/10 rounded-card p-8">
              <h2 className="text-h3 text-white mb-6">
                Dejanos tu consulta
              </h2>
              <FormularioContacto />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
