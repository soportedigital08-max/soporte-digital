import ComercioDemo from "@/components/sections/ComercioDemo";

export const metadata = {
  title: "Taller Mecánico Ruta 3 — Demo Studio Soporte Digital",
  description: "Sitio de demostración para taller mecánico.",
};

export default function Page() {
  return (
    <ComercioDemo
      nombre="Taller Mecánico Ruta 3"
      rubro="Taller Mecánico"
      slogan="Mecánica general y preparación. Tu auto en buenas manos."
      color="#0EA5E9"
      telefono="2284 78 9012"
      whatsapp="542284789012"
      direccion="Ruta 3 km 312, Olavarría"
      horario="Lun a Vie 8:30–12:30 y 14:00–18:00"
      servicios={[
        { titulo: "Mecánica general", desc: "Service, frenos, suspensión y más." },
        { titulo: "Diagnóstico electrónico", desc: "Escáner para encontrar fallas rápido." },
        { titulo: "Aire acondicionado", desc: "Carga y reparación de A/C." },
        { titulo: "Turnos por WhatsApp", desc: "Sacá turno y llevamos el seguimiento de tu auto." },
      ]}
      sobre="Taller familiar con 15 años en Olavarría. Trabajamos con transparencia: te mostramos qué se hace y por qué, antes de arrancar."
    />
  );
}
