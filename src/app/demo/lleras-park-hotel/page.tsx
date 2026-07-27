import HotelDemo from "@/components/sections/HotelDemo";

export const metadata = {
  title: "Lleras Park Hotel — Demo Studio Soporte Digital",
  description: "Mockup de rediseño para Lleras Park Hotel Boutique, Olavarría.",
};

export default function Page() {
  return (
    <HotelDemo
      nombre="Lleras Park Hotel"
      slogan="Un nuevo concepto en hotelería boutique en Olavarría."
      theme={{
        bg: "#0a0f1a",
        surface: "#101826",
        border: "#1e2d44",
        text: "#e6edf7",
        muted: "#9fb2cc",
        accent: "#0ea5e9",
        accentText: "#e0f2fe",
        overlay: "#0c4a6e",
      }}
      telefono="2284 460590"
      seed="lleras-park-hotel"
      whatsapp="542284460590"
      email="info@llerasparkhotel.com"
      direccion="Ruta 226 (Km 297) esq. España, Olavarría"
      hero="Lleras Park Hotel Boutique lidera un nuevo concepto en hotelería en Olavarría y la zona. 25 habitaciones exclusivas cuidadas al detalle para que tu estadía sea perfecta e inolvidable. A 200 metros del casino y 5 minutos del centro."
      servicios={[
        { titulo: "Hidromasaje", desc: "En todas las habitaciones, para relajar después de recorrer la ciudad." },
        { titulo: "Piscina", desc: "Al aire libre, con deck de lectura y comedor con vista." },
        { titulo: "Gimnasio propio", desc: "Equipado con máquinas, pesas y cardio." },
        { titulo: "Desayuno continental", desc: "Incluido, con vista a la piscina." },
        { titulo: "Estacionamiento privado", desc: "Cocheras para tu auto, sin costo." },
        { titulo: "WiFi en todo el hotel", desc: "Conectado donde estés." },
      ]}
      habitaciones={[
        { nombre: "Habitación Doble", desc: "Cama matrimonial o dos individuales, hidromasaje y amenities." },
        { nombre: "Habitación Superior", desc: "Más espacio y vista, ideal para estadías largas." },
        { nombre: "Suite", desc: "Living propio y detalles premium para una experiencia completa." },
      ]}
      galeria={["Lobby", "Piscina", "Habitación", "Desayuno", "Gimnasio", "Deck", "Suite", "Recepcion"]}
    />
  );
}
