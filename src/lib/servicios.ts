// Datos compartidos del sistema de servicios.
// Slugs alineados con 03-ARQUITECTURA.md §4 (Nivel 2 y Nivel 3).

export interface Area {
  slug: string;
  titulo: string;
  descripcion: string;
  icono?: string;
}

export interface Faq {
  pregunta: string;
  respuesta: string;
}

export interface Problema {
  slug: string;
  titulo: string;
  // Situación: el dolor real del usuario (copy concreto, Decisión #014)
  situacion: string;
  // Solución: qué hacemos
  solucion: string;
  // Resultado: estado final tras resolver
  resultado: string;
  // Área a la que pertenece (Nivel 2)
  area: string;
  faqs: Faq[];
}

export const CONTACTO = {
  email: "soportedigital08@gmail.com",
  whatsapp: "5492284520392", // +54 9 2284 520392
  ubicacion: "Olavarría, Buenos Aires — Argentina",
};

// Áreas (Nivel 2 del sistema de servicios)
export const AREAS: Area[] = [
  { slug: "soporte-tecnico", titulo: "Servicio técnico", descripcion: "Reparación y mantenimiento de PCs, notebooks y equipos.", icono: "🛠️" },
  { slug: "redes-wifi", titulo: "Redes y WiFi", descripcion: "Cobertura, estabilidad y velocidad real en tu red.", icono: "📡" },
  { slug: "desarrollo-web", titulo: "Desarrollo web", descripcion: "Sitios y tiendas online que funcionan y convierten.", icono: "💻" },
  { slug: "hosting", titulo: "Hosting", descripcion: "Alojamiento confiable para tu sitio y tus correos.", icono: "☁️" },
  { slug: "seguridad-camaras", titulo: "Seguridad y cámaras", descripcion: "Protección de datos y videovigilancia para tu hogar o negocio.", icono: "🎥" },
  { slug: "soporte-remoto", titulo: "Soporte remoto", descripcion: "Resolvemos a distancia, sin que salgas de tu casa.", icono: "🔧" },
];

// Catálogo de páginas de problema (Nivel 3) — cada una es una página real
export const PROBLEMAS: Problema[] = [
  {
    slug: "pc-lenta",
    titulo: "Mi PC está lenta",
    situacion:
      "Tarda en encender, se traba con cosas simples y todo es más lento de lo que debería. Perdés tiempo todos los días.",
    solucion:
      "Hacemos un diagnóstico completo: limpieza de software, desinstalación de basura, optimización de arranque y, si hace falta, mejora de hardware (SSD, RAM).",
    resultado:
      "Tu equipo vuelve a responder rápido. Menos espera, más trabajo hecho.",
    area: "soporte-tecnico",
    faqs: [
      { pregunta: "¿Puede ser solo el sistema o es el hardware?", respuesta: "Por eso el diagnóstico primero: muchas veces es software y se arregla sin gastar en piezas." },
      { pregunta: "¿Tardo mucho?", respuesta: "Una optimización típica se resuelve en el día. Si lleva hardware, lo coordinamos contigo." },
    ],
  },
  {
    slug: "wifi-lento",
    titulo: "El WiFi no funciona bien",
    situacion:
      "La señal cae en algunas habitaciones, los videos se traban y la velocidad no es la que pagás.",
    solucion:
      "Medimos la cobertura real, reubicamos o agregamos puntos de acceso, configuramos canales y seguridad para una red estable.",
    resultado:
      "WiFi parejo en toda la casa o el negocio, sin cortes y aprovechando tu plan contratado.",
    area: "redes-wifi",
    faqs: [
      { pregunta: "¿Necesito cambiar el router?", respuesta: "No siempre. Primero vemos configuración y cobertura; solo sumamos hardware si de verdad falta." },
      { pregunta: "¿Cubren varias habitaciones?", respuesta: "Sí, diseñamos la red para que llegue donde la necesitás." },
    ],
  },
  {
    slug: "recuperacion-de-datos",
    titulo: "Perdí archivos importantes",
    situacion:
      "Borreste algo por error, el disco falló o el equipo no enciende y ahí estaba lo que no podés perder.",
    solucion:
      "Evaluamos el estado del disco, hacemos una copia de respaldo y aplicamos recuperación sin pisar más el daño.",
    resultado:
      "Recuperás tus datos en la medida de lo posible, con cuidado para no empeorar el caso.",
    area: "soporte-tecnico",
    faqs: [
      { pregunta: "¿Siempre se recupera?", respuesta: "No siempre, pero actuando rápido y sin seguir usando el disco, las chances suben mucho." },
      { pregunta: "¿Es seguro?", respuesta: "Trabajamos sobre copia del disco para no poner en riesgo tus datos originales." },
    ],
  },
  {
    slug: "crear-pagina-web",
    titulo: "Necesito una página web",
    situacion:
      "Tu negocio o proyecto no está en internet, o tiene un sitio viejo que no representa lo que hacés.",
    solucion:
      "Diseñamos y desarrollamos tu sitio a medida: claro, rápido y hecho para que te encuentren en Google.",
    resultado:
      "Tenés presencia web profesional que trabaja por vos las 24 horas.",
    area: "desarrollo-web",
    faqs: [
      { pregunta: "¿Yo puedo actualizarlo?", respuesta: "Sí. Te dejamos un sitio simple de mantener y te explicamos cómo." },
      { pregunta: "¿Incluye el dominio y el hosting?", respuesta: "Lo coordinamos aparte para que controles tus datos (ver área de Hosting)." },
    ],
  },
  {
    slug: "no-tengo-internet",
    titulo: "No tengo internet",
    situacion:
      "La conexión no llega, cayó de golpe o nunca terminó de configurarse y necesitás volver a estar en línea.",
    solucion:
      "Detectamos si el problema es del equipo, de la red interna o del proveedor, y lo restablecemos o derivamos con datos claros.",
    resultado:
      "Volvés a estar conectado, y si era del proveedor, sabés exactamente qué reclamar.",
    area: "redes-wifi",
    faqs: [
      { pregunta: "¿Pueden hablar con mi proveedor?", respuesta: "Te preparamos el reclamo con evidencia técnica para que sea rápido." },
    ],
  },
  {
    slug: "tienda-online",
    titulo: "Quiero una tienda online",
    situacion:
      "Tenés productos para vender y necesitás una tienda que funcione, no un dolor de cabeza.",
    solucion:
      "Armamos tu e-commerce con catálogo, pagos y stock, pensado para que vendas de verdad.",
    resultado:
      "Tu tienda online abierta, lista para recibir clientes.",
    area: "desarrollo-web",
    faqs: [
      { pregunta: "¿Qué medios de pago?", respuesta: "Los que elijas: Mercado Pago, transferencia, tarjeta. Lo configuramos contigo." },
    ],
  },
  {
    slug: "correo-empresarial",
    titulo: "Necesito correo empresarial",
    situacion:
      "Usás un correo personal para tu negocio y querés lucir profesional con tu propio dominio.",
    solucion:
      "Configuramos correo con tu dominio, seguro y conectado a tu celular y computadora.",
    resultado:
      "Escribís desde usuario@tudominio con respaldo y sin spam molesto.",
    area: "hosting",
    faqs: [
      { pregunta: "¿Puedo usarlo en el celular?", respuesta: "Sí, lo dejamos configurado en tu teléfono y tu PC." },
    ],
  },
  {
    slug: "instalacion-camaras",
    titulo: "Quiero instalar cámaras",
    situacion:
      "Querés cuidar tu hogar o negocio y no sabés por dónde arrancar con la videovigilancia.",
    solucion:
      "Asesoramos y dejamos instaladas las cámaras con visión desde tu celular, día y noche.",
    resultado:
      "Mirás lo que importa desde donde estés, con grabación de respaldo.",
    area: "seguridad-camaras",
    faqs: [
      { pregunta: "¿Se ve desde el celular?", respuesta: "Sí, con una app simple que te mostramos cómo usar." },
    ],
  },
  {
    slug: "reparacion-pc",
    titulo: "Reparación de PC",
    situacion:
      "La máquina no enciende, se apaga sola o tiene un fallo que no sabés de dónde sale.",
    solucion:
      "Diagnóstico de hardware y software, reemplazo de piezas si hace falta y reparación con garantía.",
    resultado:
      "El equipo vuelve a funcionar y sabés qué pasó y por qué.",
    area: "soporte-tecnico",
    faqs: [
      { pregunta: "¿Tiene garantía?", respuesta: "Sí, el trabajo de reparación incluye garantía acordada por escrito." },
    ],
  },
];

// Problemas destacados en la Home (subset del catálogo)
export const PROBLEMAS_DESTACADOS = PROBLEMAS.slice(0, 4);

export function getProblema(slug: string): Problema | undefined {
  return PROBLEMAS.find((p) => p.slug === slug);
}

export function getArea(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}
