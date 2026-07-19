import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href: string;
}

// Características — 04-DESIGN-SYSTEM.md 2.2 Cards
// fondo blanco, borde sutil, sombra premium, hover azul
export default function Card({ title, description, href }: CardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-gray-100 rounded-card p-6 shadow-card hover:shadow-premium hover:border-primary-300 transition-all"
    >
      <h3 className="text-h4 text-gray-900 group-hover:text-primary-700 transition-colors">
        {title}
      </h3>
      <p className="text-body text-gray-600 mt-2">{description}</p>
    </Link>
  );
}
