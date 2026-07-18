// Datos compartidos del sistema de servicios.
// Slugs alineados con 03-ARQUITECTURA.md §4 (Nivel 2 y Nivel 3).

export interface Area {
  titulo: string;
  descripcion: string;
  href: string;
}

export interface Problema {
  titulo: string;
  descripcion: string;
  href: string;
}

// Áreas (Nivel 2 del sistema de servicios)
export const AREAS: Area[] = [
  { titulo: "Servicio técnico", descripcion: "Reparación y mantenimiento de equipos.", href: "/servicios/soporte-tecnico" },
  { titulo: "Redes y WiFi", descripcion: "Cobertura y estabilidad de red.", href: "/servicios/redes-wifi" },
  { titulo: "Desarrollo web", descripcion: "Sitios y tiendas online.", href: "/servicios/desarrollo-web" },
  { titulo: "Hosting", descripcion: "Alojamiento de sitios y correos.", href: "/servicios/hosting" },
  { titulo: "Seguridad y cámaras", descripcion: "Protección y videovigilancia.", href: "/servicios/seguridad-camaras" },
  { titulo: "Soporte remoto", descripcion: "Resolvemos a distancia.", href: "/servicios/soporte-remoto" },
];

// Problemas destacados en la Home (Nivel 3)
export const PROBLEMAS_DESTACADOS: Problema[] = [
  { titulo: "Mi PC está lenta", descripcion: "Diagnóstico y optimización para que vuelva a rendir.", href: "/servicios/pc-lenta" },
  { titulo: "El WiFi no funciona bien", descripcion: "Mejoramos señal y estabilidad de tu red.", href: "/servicios/wifi-lento" },
  { titulo: "Perdí archivos importantes", descripcion: "Recuperación de datos perdidos o dañados.", href: "/servicios/recuperacion-de-datos" },
  { titulo: "Necesito una página web", descripcion: "Creamos tu sitio a medida.", href: "/servicios/crear-pagina-web" },
];

// Catálogo completo de problemas (para el hub /servicios)
export const PROBLEMAS: Problema[] = [
  ...PROBLEMAS_DESTACADOS,
  { titulo: "No tengo internet", descripcion: "Detectamos y restablecemos tu conexión.", href: "/servicios/no-tengo-internet" },
  { titulo: "Quiero una tienda online", descripcion: "Vendé online con una tienda que funciona.", href: "/servicios/tienda-online" },
  { titulo: "Necesito correo empresarial", descripcion: "Correo con tu dominio, profesional y seguro.", href: "/servicios/correo-empresarial" },
  { titulo: "Quiero instalar cámaras", descripcion: "Videovigilancia para tu hogar o negocio.", href: "/servicios/instalacion-camaras" },
  { titulo: "Reparación de PC", descripcion: "Arreglo de hardware y software.", href: "/servicios/reparacion-pc" },
];
