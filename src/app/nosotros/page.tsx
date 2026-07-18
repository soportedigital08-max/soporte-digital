import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Nosotros — Soporte Digital",
  description:
    "Soporte Digital resuelve problemas tecnológicos reales en Olavarría y toda Argentina.",
};

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="py-24 bg-surface text-center">
          <div className="container max-w-3xl mx-auto">
            <h1 className="text-h1 text-gray-900">Nosotros</h1>
            <p className="text-body-lg text-gray-600 mt-6">
              No vendemos productos. Resolvemos problemas tecnológicos.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container max-w-3xl flex flex-col gap-12">
            <div>
              <h2 className="text-h2 text-gray-900">Por qué existimos</h2>
              <p className="text-body-lg text-gray-600 mt-4">
                Las personas y empresas tienen problemas tecnológicos que no
                entienden, no saben resolver y les generan frustración. Soporte
                Digital elimina esa fricción con diagnóstico claro, resolución
                eficiente y comunicación simple.
              </p>
            </div>
            <div>
              <h2 className="text-h2 text-gray-900">Cómo trabajamos</h2>
              <ul className="text-body-lg text-gray-600 mt-4 flex flex-col gap-2 list-disc list-inside">
                <li>Diagnóstico correcto antes de tocar nada.</li>
                <li>Resolución eficiente, sin vueltas.</li>
                <li>Comunicación clara, en lenguaje humano.</li>
                <li>Acompañamiento: te explicamos qué pasó y por qué.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-h2 text-gray-900">Cobertura</h2>
              <p className="text-body-lg text-gray-600 mt-4">
                Presencial en Olavarría y zona. Remoto en toda Argentina.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 text-center bg-surface">
          <div className="container">
            <h2 className="text-h2 text-gray-900">Hablemos</h2>
            <div className="mt-8">
              <Button href="/contacto" variant="primary">Solicitar soporte</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
