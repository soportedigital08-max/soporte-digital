import NegocioDemo from "@/components/sections/NegocioDemo";

const theme = {
  bg: "#0a140e",
  surface: "#0f1f16",
  border: "#1c3326",
  text: "#e9f5ee",
  muted: "#a6c9b3",
  accent: "#22c55e",
  accentText: "#e7fbee",
  heroFrom: "#14532d",
  heroTo: "#0a140e",
};

export const metadata = { title: "Nutrición Saludable — Demo Studio" };
export default function Page() {
  return (
    <NegocioDemo
      nombre="Nutrición Saludable"
      rubro="Nutricionista"
      slogan="Comé mejor, sin dietas locas. Planes reales para tu vida."
      theme={theme}
      telefono="2284 44 3322"
      whatsapp="542284443322"
      direccion="Consultorio virtual y presencial, Olavarría"
      horario="Lun a Vie 9:00–18:00"
      servicios={[
        { titulo: "Plan alimentario", desc: "A tu medida, sin prohibir todo." },
        { titulo: "Seguimiento", desc: "Ajustes mensuales según tus resultados." },
        { titulo: "Nutrición deportiva", desc: "Para rendir más en tu entrenamiento." },
        { titulo: "Consulta online", desc: "Desde tu casa, por video." },
      ]}
      sobre="Nutricionista con enfoque en hábitos, no en promesas mágicas. Te ayudo a comer bien sin volver loca tu rutina."
    />
  );
}
