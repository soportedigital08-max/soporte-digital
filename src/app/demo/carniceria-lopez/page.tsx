import ComercioDemo from "@/components/sections/ComercioDemo";

export const metadata = {
  title: "Carnicería López — Demo Studio Soporte Digital",
  description: "Sitio de demostración para carnicería.",
};

export default function Page() {
  return (
    <ComercioDemo
      nombre="Carnicería López"
      rubro="Carnicería"
      slogan="Cortes frescos todos los días, directo de la tranquera a tu mesa."
      color="#E11D48"
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
