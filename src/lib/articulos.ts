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
  {
    slug: "pc-virus-signos",
    titulo: "5 señales de que tu PC tiene un virus (y qué hacer)",
    extracto:
      "Lentitud rara, ventanas que no pediste, cuentas raras. Te decimos cómo detectar y reaccionar.",
    categoria: "Seguridad y cámaras",
    fecha: "2026-07-18",
    lectura: 4,
    bloques: [
      { tipo: "p", texto: "Un virus no siempre apaga la PC. A menudo actúa en silencio y te lo advierte el comportamiento." },
      { tipo: "h2", texto: "1. Lentitud repentina sin motivo" },
      { tipo: "p", texto: "Si todo se volvió lento de un día para el otro, algo está consumiendo recursos." },
      { tipo: "h2", texto: "2. Pop-ups y ventanas extrañas" },
      { tipo: "p", texto: "Anuncios que aparecen solos o en sitios que no los tienen son señal clara." },
      { tipo: "h2", texto: "3. Tu cuenta envía spam" },
      { tipo: "p", texto: "Te avisan que tus contactos reciben mensajes raros desde tu email o redes." },
      { tipo: "h2", texto: "4. Cambios en el navegador" },
      { tipo: "p", texto: "Página de inicio distinta o buscador que no elegiste." },
      { tipo: "h2", texto: "5. Archivos que desaparecen o se renombran" },
      { tipo: "p", texto: "El ransomware cambia o bloquea tus archivos. Actuá rápido." },
      { tipo: "p", texto: "Ante la duda, no descargues soluciones al azar. Diagnóstico real primero: evitás empeorar el daño." },
    ],
  },
  {
    slug: "recuperar-archivos-borrados",
    titulo: "Borré un archivo por error: cómo recuperarlo",
    extracto:
      "Antes de panicar, hay pasos que aumentan las chances de recuperar lo perdido. Te los contamos.",
    categoria: "Servicio técnico",
    fecha: "2026-07-18",
    lectura: 3,
    bloques: [
      { tipo: "p", texto: "Lo primero: deja de usar el disco. Mientras más escribas, más pisás lo que querés recuperar." },
      { tipo: "h2", texto: "Revisá la papelera" },
      { tipo: "p", texto: "Suena obvio, pero el archivo suele estar ahí. Mirá también versiones anteriores si tu sistema las guarda." },
      { tipo: "h2", texto: "No instales recuperadores a lo loco" },
      { tipo: "p", texto: "Instalar programas en el mismo disco puede pisar los datos a recuperar. Mejor desde otra unidad." },
      { tipo: "h2", texto: "Tenés backup?" },
      { tipo: "p", texto: "Si tenías copia en la nube o disco externo, ahí está tu archivo sin complicaciones." },
      { tipo: "ul", items: ["Actuá rápido, sin escribir en el disco.", "Evitá recoveredores sobre el mismo disco.", "Consultanos antes de forzar nada."] },
      { tipo: "p", texto: "Podemos intentar la recuperación con cuidado para no empeorar el caso." },
    ],
  },
  {
    slug: "correo-con-dominio",
    titulo: "Por qué tu negocio debería tener correo con su dominio",
    extracto:
      "Un correo @tunegocio.com.ar transmite confianza y profesionalismo. Te explicamos por qué.",
    categoria: "Hosting",
    fecha: "2026-07-18",
    lectura: 3,
    bloques: [
      { tipo: "p", texto: "Escribir desde un correo personal a clientes resta seriedad. El correo con dominio cambia esa percepción." },
      { tipo: "h2", texto: "Confianza desde el primer mail" },
      { tipo: "p", texto: "usuario@tudominio.com.ar dice 'esto es una empresa', no un proyecto personal." },
      { tipo: "h2", texto: "Marca consistente" },
      { tipo: "p", texto: "El correo, la web y las redes comparten el mismo nombre. Todo encaja." },
      { tipo: "h2", texto: "Control y respaldo" },
      { tipo: "p", texto: "Configurado bien, tenés copia y podés recuperar historial si cambiás de equipo." },
      { tipo: "p", texto: "Te dejamos el correo con tu dominio funcionando en tu celular y tu PC." },
    ],
  },
];

export function getArticulo(slug: string): Articulo | undefined {
  return ARTICULOS.find((a) => a.slug === slug);
}
