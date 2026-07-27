import NegocioDemo from "@/components/sections/NegocioDemo";

const theme = {
  bg: "#0c0c0c",
  surface: "#161616",
  border: "#2a2a2a",
  text: "#f2f2f2",
  muted: "#b3b3b3",
  accent: "#c9a227",
  accentText: "#f3e6b8",
  overlay: "#1a1a1a",
};

export const metadata = { title: "Barbería Norte — Demo Studio" };
export default function Page() {
  return (
    <NegocioDemo
      nombre="Barbería Norte"
      rubro="Barbería"
      slogan="Corte clásico y barba prolija. El lugar para estar bien arriba."
      theme={theme}
      seed="barberia-barba"
      telefono="2284 33 9090"
      whatsapp="542284339090"
      direccion="Calle Moreno 77, Olavarría"
      horario="Mar a Sáb 9:00–20:00"
      servicios={[
        { titulo: "Corte de pelo", desc: "Estilo clásico o moderno, lo que busques." },
 { titulo: "Arreglo de barba", desc: "Perfilado, afeitado a navaja y cuidado." },
        { titulo: "Combo completo", desc: "Corte + barba + toalla caliente." },
        { titulo: "Turnos por WhatsApp", desc: "Reservá tu horario y evitá esperar." },
      ]}
      sobre="Barbería de barrio con ambiente de casa. Nos gusta que salgas contento y quieras volver. Café mientras esperás."
    />
  );
}
