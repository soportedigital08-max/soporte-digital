import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit";
  onClick?: () => void;
}

// Estilos según 04-DESIGN-SYSTEM.md — 2.1 Botones
const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary-700 text-white hover:bg-primary-900",
  secondary: "border border-primary-700 text-primary-700 hover:bg-surface",
  tertiary: "text-primary-700 underline-offset-4 hover:underline",
};

const baseStyles =
  "inline-flex items-center justify-center px-6 py-3 rounded-input text-body font-medium transition-colors";

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
}: ButtonProps) {
  const className = `${baseStyles} ${variantStyles[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
