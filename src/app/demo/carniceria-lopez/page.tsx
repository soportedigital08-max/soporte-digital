import NegocioDemo from "@/components/sections/NegocioDemo";

const theme = {
  bg: "#1a0e0c",
  surface: "#241513",
  border: "#3a2018",
  text: "#f5e9e6",
  muted: "#c9a89f",
  accent: "#e11d48",
  accentText: "#ffe9e0",
  heroFrom: "#7f1d1d",
  heroTo: "#1a0e0c",
};

export const metadata = { title: "Carnicería López — Demo Studio" };
export default function Page() {
  return (
    <NegocioDemo
      nombre="Carnicería López"
      rubro="Carnicería"
      slogan="Cortes frescos todos los días, directo de la tranquera a tu mesa."
      theme={theme}
      telefono="2284 45 6789"
      whatsapp="542284456789"
      direccion="Av. San Martín 234, Olavarría"
      horario="Lun a Sáb 8:00–13:00 y 16:00–20:00"
      servicios={[
        { titulo: "Cortes al vacío", desc: "Envasamos al vacío para que dure más en tu freezer." },
        { titulo: "Pedidos por WhatsApp", desc: "Encargá tu asado y lo retirás sin fila." },
        { titulo: "Picadas y salchichas", desc: "Elaboración propia, sin conservantes." },
        { titulo: "Envíos a domicilio", desc: "Llevamos tu compra en el día dentro de Olavarría." },
      ]}
      sobre="Somos una carnicería de barrio con 20 años en Olavarría. Trabajamos con productores locales y te asesoramos para el mejor corte según la ocasión."
    />
  );
}
