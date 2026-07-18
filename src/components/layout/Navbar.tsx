import Link from "next/link";
import Button from "@/components/ui/Button";

// Navegación principal — 03-ARQUITECTURA.md 8. NAVEGACIÓN
const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Casos de Éxito", href: "/casos-de-exito" },
  { label: "Conocimiento", href: "/conocimiento" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-gray-200">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-h4 font-medium text-primary-900">
          Soporte Digital
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-body text-gray-700 hover:text-primary-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button href="/contacto" variant="primary">
          Solicitar soporte
        </Button>
      </div>
    </header>
  );
}
