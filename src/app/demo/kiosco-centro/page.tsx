import ComercioDemo from "@/components/sections/ComercioDemo";

export const metadata = {
  title: "Kiosco Centro — Demo Studio Soporte Digital",
  description: "Sitio de demostración para kiosco/diario.",
};

export default function Page() {
  return (
    <ComercioDemo
      nombre="Kiosco Centro"
      rubro="Kiosco y Diario"
      slogan="Lo que necesitás, a la vuelta de tu casa, a cualquier hora."
      color="#F59E0B"
      telefono="2284 12 3456"
      whatsapp="542284123456"
      direccion="Calle Belgrano 89, Olavarría"
      horario="Lun a Dom 7:00–23:00"
      servicios={[
        { titulo: "Diarios y revistas", desc: "Todos los diarios del día, los retirás por la mañana." },
        { titulo: "Bebidas y golosinas", desc: "Lo clásico del kiosco, siempre fresco." },
        { titulo: "Recargas y servicios", desc: "Sube saldo de celular y pagá servicios al instante." },
        { titulo: "Pedidos por WhatsApp", desc: "Hacé tu pedido y lo tenés listo para retirar." },
      ]}
      sobre="Kiosco de barrio desde 2010. Nos conocés por la atención de siempre y porque nunca nos falta lo que buscás."
    />
  );
}
