import Link from "next/link";

// Reutiliza los mismos items de navegación principal como navegación secundaria
// (03-ARQUITECTURA.md 8. NAVEGACIÓN)
const SECONDARY_NAV = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Casos de Éxito", href: "/casos-de-exito" },
  { label: "Conocimiento", href: "/conocimiento" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

// Datos de contacto reales (definidos 2026-07-18)
const CONTACTO = {
  email: "soportedigital08@gmail.com",
  whatsapp: "5492284520392", // +54 9 2284 520392
  ubicacion: "Olavarría, Buenos Aires — Argentina",
};

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-gray-200">
      <div className="container py-12 flex flex-col md:flex-row md:justify-between gap-8">
        {/* Marca */}
        <div>
          <span className="text-h4 font-medium text-primary-900">
            Soporte Digital
          </span>
          <p className="text-small text-gray-500 mt-2">{CONTACTO.ubicacion}</p>
        </div>

        {/* Navegación secundaria */}
        <nav className="flex flex-col gap-2">
          {SECONDARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-body text-gray-700 hover:text-primary-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contacto */}
        <div className="flex flex-col gap-2 text-body text-gray-700">
          <span className="font-medium text-gray-900">Contacto</span>
          <a
            href={`mailto:${CONTACTO.email}`}
            className="hover:text-primary-700"
          >
            {CONTACTO.email}
          </a>
          <a
            href={`https://wa.me/${CONTACTO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-700"
          >
            WhatsApp: +54 9 2284 520392
          </a>
        </div>
      </div>

      {/* Cierre */}
      <div className="border-t border-gray-200">
        <div className="container py-6 text-small text-gray-500">
          © {new Date().getFullYear()} Soporte Digital — Tecnología que funciona.
          Soluciones que perduran.
        </div>
      </div>
    </footer>
  );
}
