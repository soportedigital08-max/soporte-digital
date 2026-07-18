import Card from "@/components/ui/Card";
import type { Area } from "@/lib/servicios";

// Resumen de áreas — Arquitectura §4 Nivel 2 + Documento Maestro §10
export default function Servicios() {
  const areas: Area[] = [
    {
      titulo: "Servicio técnico",
      descripcion: "Reparación y mantenimiento de PCs, notebooks y equipos.",
      href: "/servicios/soporte-tecnico",
    },
    {
      titulo: "Redes y WiFi",
      descripcion: "Cobertura, estabilidad y velocidad real en tu red.",
      href: "/servicios/redes-wifi",
    },
    {
      titulo: "Desarrollo web",
      descripcion: "Sitios y tiendas online que funcionan y convierten.",
      href: "/servicios/desarrollo-web",
    },
    {
      titulo: "Hosting",
      descripcion: "Alojamiento confiable para tu sitio y tus correos.",
      href: "/servicios/hosting",
    },
    {
      titulo: "Seguridad y cámaras",
      descripcion: "Protección de datos y videovigilancia para tu hogar o negocio.",
      href: "/servicios/seguridad-camaras",
    },
    {
      titulo: "Soporte remoto",
      descripcion: "Resolvemos a distancia, sin que salgas de tu casa.",
      href: "/servicios/soporte-remoto",
    },
  ];

  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-h2 text-gray-900 text-center">Nuestras soluciones</h2>
        <p className="text-body-lg text-gray-600 text-center mt-4 max-w-2xl mx-auto">
          Agrupadas por el problema que resuelven, no por productos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {areas.map((area) => (
            <Card
              key={area.href}
              title={area.titulo}
              description={area.descripcion}
              href={area.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
