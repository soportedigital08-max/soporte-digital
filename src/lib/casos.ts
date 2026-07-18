// Casos de éxito — Pilar 3 del Documento Maestro (Confianza).
// Situaciones reales, soluciones aplicadas, resultados concretos.

export interface Caso {
  slug: string;
  titulo: string;
  // Resumen corto para la card del hub
  resumen: string;
  // Situación: el problema real
  situacion: string;
  // Solución: qué se hizo
  solucion: string;
  // Resultado: estado final
  resultado: string;
  // Etiqueta de área para filtrar/mostrar
  area: string;
}

export const CASOS: Caso[] = [
  {
    slug: "pc-lenta-negocio",
    titulo: "PC de un comercio que no daba más",
    resumen: "Equipo lento en un local; recuperamos velocidad y ventas.",
    situacion:
      "Un comercio de Olavarría tenía la PC de ventas tan lenta que cada cobro demoraba. Perdían clientes en la cola.",
    solucion:
      "Diagnóstico, limpieza de software, desinstalación de programas innecesarios y mejora de arranque. Sin gastar en hardware nuevo.",
    resultado:
      "La PC volvió a responder rápido. Cobros ágiles y clientes contentos.",
    area: "Servicio técnico",
  },
  {
    slug: "wifi-casa",
    titulo: "WiFi que no llegaba al fondo de la casa",
    resumen: "Señal muerta en habitaciones; cubrimos toda la casa.",
    situacion:
      "En una casa, el WiFi llegaba mal al fondo: videos cortados y reunionos caídas. El router de fábrica no alcanzaba.",
    solucion:
      "Medimos la cobertura, ubicamos puntos muertos y sumamos un punto de acceso para extender la señal de forma estable.",
    resultado:
      "WiFi parejo en toda la casa, sin cortes. Reuniones y streaming fluidos.",
    area: "Redes y WiFi",
  },
  {
    slug: "tienda-online-emprendedor",
    titulo: "Su primer tienda online funcionando",
    resumen: "Emprendedor vendiendo online en una semana.",
    situacion:
      "Un emprendedor quería vender sus productos pero no sabía por dónde arrancar con la web.",
    solucion:
      "Armamos su tienda online con catálogo y medios de pago, y le explicamos cómo cargar productos.",
    resultado:
      "Tienda abierta y recibiendo pedidos, con control total desde su celular.",
    area: "Desarrollo web",
  },
];

export function getCaso(slug: string): Caso | undefined {
  return CASOS.find((c) => c.slug === slug);
}
