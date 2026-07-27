import NegocioDemo from "@/components/sections/NegocioDemo";
import VolverSD from "@/components/sections/VolverSD";

const theme = {
  bg: "#140d08",
  surface: "#1d140d",
  border: "#332415",
  text: "#f7ede2",
  muted: "#cbb29c",
  accent: "#f97316",
  accentText: "#fff1e6",
  overlay: "#9a3412",
};

export const metadata = { title: "Fit Gym Olavarría — Demo Studio" };
export default function Page() {
  return (
    <>
      <VolverSD />
      <NegocioDemo
      nombre="Fit Gym"
      rubro="Gimnasio · Musculación"
      slogan="Entrená fuerte, sentite mejor. Para todos los niveles."
      theme={theme}
      seed="gimnasio-fit"
      telefono="2284 66 7777"
      whatsapp="542284667777"
      direccion="Av. Pellegrini 120, Olavarría"
      horario="Lun a Sáb 6:00–23:00"
      servicios={[
        { titulo: "Musculación", desc: "Sala completa de pesas y máquinas." },
        { titulo: "Funcional", desc: "Clases de alto rendimiento en grupo." },
        { titulo: "Personal trainer", desc: "Plan a medida para tu objetivo." },
        { titulo: "Primera clase gratis", desc: "Probá sin compromiso." },
      ]}
      sobre="Gimnasio de Olavarría con 8 años acompañando a la gente a estar en forma. Sea tu primer día o el milésimo, te recibimos igual."
    />
    </>
  );
}
