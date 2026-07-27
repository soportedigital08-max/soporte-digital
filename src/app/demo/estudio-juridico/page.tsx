import NegocioDemo from "@/components/sections/NegocioDemo";

const theme = {
  bg: "#0b1020",
  surface: "#121a33",
  border: "#26335c",
  text: "#eef2fb",
  muted: "#a9b6d6",
  accent: "#d4af37",
  accentText: "#f5edcf",
  overlay: "#1e3a8a",
};

export const metadata = { title: "Estudio Jurídico — Demo Studio" };
export default function Page() {
  return (
    <NegocioDemo
      nombre="Estudio Jurídico Díaz"
      rubro="Estudio Jurídico"
      slogan="Acompañamiento legal claro y cercano, para personas y familias."
      theme={theme}
      seed="abogado-estudio"
      telefono="2284 55 1212"
      whatsapp="542284551212"
      direccion="Calle Rivadavia 450, Olavarría"
      horario="Lun a Vie 9:00–13:00 y 15:00–19:00"
      servicios={[
        { titulo: "Derecho de familia", desc: "Divorcios, sucesiones y acuerdos." },
        { titulo: "Civil y comercial", desc: "Contratos, reclamos y cobros." },
        { titulo: "Laboral", desc: "Despidos, indemnizaciones y conflictos." },
        { titulo: "Consulta inicial", desc: "Primera entrevista sin compromiso." },
      ]}
      sobre="Estudio con 12 años en Olavarría. Creemos que el derecho tiene que explicarse en lenguaje claro, no en tecnicismos. Te acompañamos en cada paso."
    />
  );
}
