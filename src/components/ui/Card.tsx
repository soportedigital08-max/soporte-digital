import Link from "next/link";
import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
}

// Características — 04-DESIGN-SYSTEM.md 2.2 Cards
// fondo blanco, borde sutil, sombra premium, hover azul
export default function Card({ title, description, href, icon }: CardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-white border border-gray-100 rounded-card p-6 shadow-card hover:shadow-premium hover:border-primary-300 transition-all"
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-card bg-primary-50 text-primary-700 group-hover:bg-primary-700 group-hover:text-white transition-colors">
          {icon}
        </div>
      )}
      <h3 className="text-h4 text-gray-900 group-hover:text-primary-700 transition-colors">
        {title}
      </h3>
      <p className="text-body text-gray-600 mt-2">{description}</p>
    </Link>
  );
}
