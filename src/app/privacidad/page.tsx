import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { CONTACTO } from "@/lib/servicios";

export const metadata: Metadata = {
  title: "Política de Privacidad — Soporte Digital",
  description:
    "Cómo Soporte Digital recolecta, usa y protege tus datos personales.",
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-ink-900">
        <div className="container max-w-3xl mx-auto prose">
          <h1 className="text-h1 text-white">Política de Privacidad</h1>
          <p className="text-body text-primary-300 mt-2">
            Última actualización: 18 de julio de 2026.
          </p>

          <h2 className="text-h2 text-white mt-10">1. Quiénes somos</h2>
          <p className="text-body text-primary-200 mt-3">
            Soporte Digital (en adelante, "nosotros") es un emprendimiento de
            soluciones tecnológicas con base en Olavarría, Argentina. Podés
            contactarnos en{" "}
            <a className="text-primary-300 underline" href={`mailto:${CONTACTO.email}`}>
              {CONTACTO.email}
            </a>
            .
          </p>

          <h2 className="text-h2 text-white mt-10">2. Datos que recolectamos</h2>
          <p className="text-body text-primary-200 mt-3">
            A través de nuestro formulario de contacto recolectamos el nombre,
            medio de contacto y mensaje que nos envías voluntariamente. Si contratás
            un servicio, podemos solicitar datos necesarios para prestarlo (equipo,
            ubicación, etc.).
          </p>

          <h2 className="text-h2 text-white mt-10">3. Cómo usamos tus datos</h2>
          <ul className="text-body text-primary-200 mt-3 list-disc pl-6 space-y-1">
            <li>Responder a tu consulta o solicitud de soporte.</li>
            <li>Coordinar y prestar el servicio contratado.</li>
            <li>Enviarte comunicaciones relacionadas con tu solicitud.</li>
          </ul>

          <h2 className="text-h2 text-white mt-10">4. Pasarelas de pago</h2>
          <p className="text-body text-primary-200 mt-3">
            Los pagos que se realicen a través de nuestros sistemas pueden procesarse
            mediante Mercado Pago u otras pasarelas. Esos servicios tienen su propia
            política de privacidad, sobre la cual nosotros no tenemos control.
          </p>

          <h2 className="text-h2 text-white mt-10">5. Conservación</h2>
          <p className="text-body text-primary-200 mt-3">
            Conservamos tus datos solo el tiempo necesario para cumplir con la
            finalidad para la que fueron recolectados o según lo exija la ley.
          </p>

          <h2 className="text-h2 text-white mt-10">6. Tus derechos</h2>
          <p className="text-body text-primary-200 mt-3">
            Podés solicitar en cualquier momento el acceso, corrección o eliminación
            de tus datos escribiéndonos a {CONTACTO.email}.
          </p>

          <h2 className="text-h2 text-white mt-10">7. Contacto</h2>
          <p className="text-body text-primary-200 mt-3">
            Cualquier duda sobre esta política, escribinos a {CONTACTO.email}.
          </p>

          <div className="mt-10">
            <Button href="/contacto" variant="primary">
              Ir al formulario de contacto
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
