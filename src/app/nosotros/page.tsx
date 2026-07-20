import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/sections/PageHeader";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Nosotros — Soporte Digital",
  description:
    "20 años resolviendo tecnología en Olavarría y toda Argentina. La historia detrás de Soporte Digital.",
};

const HITOS = [
  {
    año: "2006",
    texto:
      "Soporte Digital arranca en Olavarría resolviendo equipos y redes de hogares y comercios del pueblo.",
  },
  {
    año: "2014",
    texto:
      "Sumamos desarrollo web y hosting propio. Los primeros sistemas a medida para negocios locales.",
  },
  {
    año: "2020",
    texto:
      "El soporte remoto pasa a ser central: seguimos resolviendo sin importar la distancia.",
  },
  {
    año: "Hoy",
    texto:
      "20 años después, alojamos y asesoramos proyectos de Olavarría como la EES N°7 y su multimedio FM 104.5 Identidad, y desarrollamos CRMs como el de Ippon Group.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-ink-900">
        <PageHeader
          title="20 años resolviendo tecnología"
          subtitle="No vendemos productos. Eliminamos la fricción tecnológica de personas y empresas en Olavarría y toda Argentina."
        />

        <section className="py-24">
          <div className="container max-w-3xl flex flex-col gap-12">
            <Reveal>
              <h2 className="text-h2 text-white">Por qué existimos</h2>
              <p className="text-body-lg text-primary-200 mt-4">
                Las personas y empresas tienen problemas tecnológicos que no
                entienden, no saben resolver y les generan frustración. Soporte
                Digital los resuelve con diagnóstico claro, resolución eficiente
                y comunicación simple.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="text-h2 text-white">Cómo trabajamos</h2>
              <ul className="text-body-lg text-primary-200 mt-4 flex flex-col gap-2 list-disc list-inside">
                <li>Diagnóstico correcto antes de tocar nada.</li>
                <li>Resolución eficiente, sin vueltas.</li>
                <li>Comunicación clara, en lenguaje humano.</li>
                <li>Acompañamiento: te explicamos qué pasó y por qué.</li>
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="text-h2 text-white">20 años de trayectoria</h2>
              <div className="mt-6 flex flex-col gap-6">
                {HITOS.map((h) => (
                  <div
                    key={h.año}
                    className="border-l-2 border-primary-500 pl-5"
                  >
                    <div className="text-h4 text-primary-300">{h.año}</div>
                    <p className="text-body-lg text-primary-200 mt-1">
                      {h.texto}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-h2 text-white">Cobertura</h2>
              <p className="text-body-lg text-primary-200 mt-4">
                Presencial en Olavarría y zona. Remoto en toda Argentina.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-24 text-center bg-ink-800">
          <div className="container">
            <h2 className="text-h2 text-white">Hablemos</h2>
            <div className="mt-8">
              <Button href="/contacto" variant="primary">
                Solicitar soporte
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
