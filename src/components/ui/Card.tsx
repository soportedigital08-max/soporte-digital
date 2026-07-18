import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href: string;
}

// Características — 04-DESIGN-SYSTEM.md 2.2 Cards
// fondo blanco, borde sutil, radius 12px, hover suave
export default function Card({ title, description, href }: CardProps) {
  return (
    <Link
      href={href}
      className="block bg-background border border-gray-200 rounded-card p-6 hover:border-primary-500 transition-colors"
    >
      <h3 className="text-h4 text-gray-900">{title}</h3>
      <p className="text-body text-gray-600 mt-2">{description}</p>
    </Link>
  );
}
