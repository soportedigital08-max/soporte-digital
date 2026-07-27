import HotelDemo from "@/components/sections/HotelDemo";
import VolverSD from "@/components/sections/VolverSD";

export const metadata = {
  title: "Hotel Santa Rosa — Demo Studio Soporte Digital",
  description: "Mockup de rediseño para Hotel Santa Rosa, Olavarría.",
};

export default function Page() {
  return (
    <>
      <VolverSD />
      <HotelDemo
      nombre="Hotel Santa Rosa"
      slogan="Un clásico de Olavarría, ahora con la web que se merece."
      theme={{
        bg: "#1a0e0c",
        surface: "#241513",
        border: "#3a2018",
        text: "#f5e9e6",
        muted: "#c9a89f",
        accent: "#e11d48",
        accentText: "#ffe9e0",
        overlay: "#7f1d1d",
      }}
      telefono="2284 42 0000"
      seed="hotel-santa-rosa"
      whatsapp="542284420000"
      email="info@hotelsantarosa.com"
      direccion="Olavarría, Buenos Aires"
      hero="Hotel Santa Rosa es uno de los hoteles más prestigiosos de Olavarría, con tres propuestas bajo un mismo techo: el Hotel, el Cafe Racer y el Liv Gym & Spa. Una web cálida y clara para que quien busca, se quede."
      servicios={[
        { titulo: "Hotel", desc: "Habitaciones cómodas para descansar y volver." },
        { titulo: "Cafe Racer", desc: "Cafetería con personalidad, para el día a día." },
        { titulo: "Liv Gym & Spa", desc: "Gimnasio y spa para cuidarte durante tu estadía." },
        { titulo: "Eventos", desc: "Espacios para reuniones y celebraciones." },
        { titulo: "Reservas online", desc: "Reservá en segundos, sin llamar." },
        { titulo: "Ubicación central", desc: "En el corazón de Olavarría." },
      ]}
      habitaciones={[
        { nombre: "Preferencial", desc: "Habitación con detalles premium y comodidad." },
        { nombre: "Suite", desc: "Más amplitud y servicios para una estadía completa." },
        { nombre: "Departamento", desc: "Ideal para estadías largas, con cocina." },
      ]}
      galeria={["Lobby", "Habitación", "Cafe Racer", "Liv Gym", "Spa", "Recepcion", "Suite", "Desayuno"]}
    />
    </>
  );
}
