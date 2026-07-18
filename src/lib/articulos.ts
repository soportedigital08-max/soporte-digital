// Artículos de conocimiento — Pilar 1 del Documento Maestro (Captación / SEO).
// Contenido de valor que atrae tráfico cualificado desde Google.

export type Bloque =
  | { tipo: "h2"; texto: string }
  | { tipo: "p"; texto: string }
  | { tipo: "ul"; items: string[] };

export interface Articulo {
  slug: string;
  titulo: string;
  extracto: string;
  categoria: string;
  fecha: string; // ISO
  lectura: number; // minutos
  bloques: Bloque[];
}

export const ARTICULOS: Articulo[] = [
  {
    slug: "pc-lenta-que-hacer",
    titulo: "Tu PC está lenta: 5 causas comunes y qué hacer",
    extracto:
      "Si tu computadora tarda en encender y se traba, no siempre hace falta comprar una nueva. Empezá por acá.",
    categoria: "Servicio técnico",
    fecha: "2026-07-18",
    lectura: 4,
    bloques: [
      { tipo: "p", texto: "Una PC lenta es la queja más frecuente que atendemos en Olavarría. Antes de gastar en hardware, conviene entender qué pasa." },
      { tipo: "h2", texto: "1. Demasiados programas al arranque" },
      { tipo: "p", texto: "Muchas apps se activan solas cuando encendés. Cada una resta velocidad. Desactivarlas suele bastar." },
      { tipo: "h2", texto: "2. Disco lleno o viejo" },
      { tipo: "p", texto: "Con el disco casi lleno, el sistema pierde agilidad. Pasar a un SSD es el cambio que más se nota." },
      { tipo: "h2", texto: "3. Malware o basura acumulada" },
      { tipo: "p", texto: "Software no deseado consume recursos sin que lo veas. Una limpieza controlada ayuda." },
      { tipo: "h2", texto: "4. Poco espacio de memoria (RAM)" },
      { tipo: "p", texto: "Si abrís muchas pestañas y programas a la vez, la memoria se llena y todo se traba." },
      { tipo: "h2", texto: "5. Actualizaciones pendientes" },
      { tipo: "p", texto: "Un sistema desactualizado puede volverse inestable. Mantenerlo al día evita sorpresas." },
      { tipo: "p", texto: "¿Querés que lo veamos? Hacemos un diagnóstico claro y te decimos si se arregla con software o conviene mejorar el hardware." },
    ],
  },
  {
    slug: "mejorar-wifi-casa",
    titulo: "WiFi lento en casa: cómo mejorar la señal sin gastar de más",
    extracto:
      "Vacíos de señal y videos cortados suelen tener solución simple. Te contamos por dónde arrancar.",
    categoria: "Redes y WiFi",
    fecha: "2026-07-18",
    lectura: 3,
    bloques: [
      { tipo: "p", texto: "El WiFi no es solo el router: es dónde lo ponés y cómo está configurado." },
      { tipo: "h2", texto: "Ubicación del router" },
      { tipo: "p", texto: "Centro de la casa, elevado y libre de paredes gruesas. Lejos de microondas y espejos." },
      { tipo: "h2", texto: "Canales congestionados" },
      { tipo: "p", texto: "En edificios, todos usan el mismo canal. Cambiarlo puede estabilizar la red." },
      { tipo: "h2", texto: "Puntos de acceso" },
      { tipo: "p", texto: "Si la señal no llega al fondo, un punto de acceso adicional cubre el vacío sin cambiar el plan." },
      { tipo: "ul", items: ["Medí la cobertura antes de comprar nada.", "No repitas equipos iguales: sumá puntos, no routers sueltos.", "Pedí ayuda si no sabés qué medir."] },
      { tipo: "p", texto: "Podemos medir tu red y dejarla pareja en toda la casa." },
    ],
  },
  {
    slug: "hosting-negocio",
    titulo: "Hosting para tu negocio: qué tener en cuenta antes de contratar",
    extracto:
      "No todos los hostings son iguales. Tres puntos clave para no equivocarte al contratar.",
    categoria: "Hosting",
    fecha: "2026-07-18",
    lectura: 4,
    bloques: [
      { tipo: "p", texto: "El hosting es donde vive tu sitio. Elegir mal puede hacerlo lento o caerse en el peor momento." },
      { tipo: "h2", texto: "1. Velocidad y estabilidad" },
      { tipo: "p", texto: "Buscá servidores con buen tiempo de respuesta. Una web lenta espanta clientes." },
      { tipo: "h2", texto: "2. Respaldo incluido" },
      { tipo: "p", texto: "Si algo falla, querés poder volver atrás. El backup no es opcional." },
      { tipo: "h2", texto: "3. Soporte real" },
      { tipo: "p", texto: "Cuando algo se caiga un domingo, querés que alguien responda. Evaluá el soporte antes." },
      { tipo: "p", texto: "Te ayudamos a contratar y dejar tu sitio y correo funcionando sin sorpresas." },
    ],
  },
];

export function getArticulo(slug: string): Articulo | undefined {
  return ARTICULOS.find((a) => a.slug === slug);
}
