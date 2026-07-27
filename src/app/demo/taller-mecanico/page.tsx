import NegocioDemo from "@/components/sections/NegocioDemo";

const theme = {
  bg: "#0a0f1a",
  surface: "#101826",
  border: "#1e2d44",
  text: "#e6edf7",
  muted: "#9fb2cc",
  accent: "#0ea5e9",
  accentText: "#e0f2fe",
  overlay: "#0c4a6e",
};

export const metadata = { title: "Taller Mecánico Ruta 3 — Demo Studio" };
export default function Page() {
  return (
    <NegocioDemo
      nombre="Taller Mecánico Ruta 3"
      rubro="Taller Mecánico"
      slogan="Mecánica general y preparación. Tu auto en buenas manos."
      theme={theme}
      seed="taller-auto"
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
