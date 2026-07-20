import Link from "next/link";
import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
  variant?: "light" | "dark";
}

// Características — 04-DESIGN-SYSTEM.md 2.2 Cards
// light: fondo blanco sobre secciones claras. dark: ink-800 sobre ink-900.
export default function Card({
  title,
  description,
  href,
  icon,
  variant = "light",
}: CardProps) {
  if (variant === "dark") {
    return (
      <Link
        href={href}
        className="group flex flex-col rounded-card border border-white/10 bg-ink-800 p-6 shadow-premium transition-all hover:-translate-y-1 hover:border-primary-400 hover:bg-white/[0.06]"
      >
        {icon && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-card bg-primary-600/20 text-primary-300 transition-colors group-hover:bg-primary-600 group-hover:text-white">
            {icon}
          </div>
        )}
        <h3 className="text-h4 text-white">{title}</h3>
        <p className="text-body text-primary-100 mt-2">{description}</p>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group flex flex-col bg-white border border-gray-100 rounded-card p-6 shadow-card hover:shadow-premium hover:border-primary-400 hover:-translate-y-1 transition-all"
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
