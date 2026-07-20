import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    // Grid definido en 04-DESIGN-SYSTEM.md — 1.4
    container: {
      center: true,
      padding: "24px",
      screens: {
        DEFAULT: "1200px",
      },
    },
    screens: {
      // Breakpoints — 04-DESIGN-SYSTEM.md 1.4
      sm: "640px", // Tablet inicia en 640
      md: "1024px", // Desktop inicia en 1024
    },
    extend: {
      colors: {
        primary: {
          900: "#0B3C5D",
          700: "#155E8A",
          500: "#1E7FB8",
          300: "#4AA8D8",
          100: "#A7D3F0",
        },
        accent: "#00C2D1",
        ink: {
          900: "#0B0F14",
          800: "#12161C",
        },
        gray: {
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
          500: "#64748B",
          400: "#94A3B8",
          300: "#CBD5E1",
          200: "#E2E8F0",
          100: "#F1F5F9",
          50: "#F8FAFC",
        },
        background: "#FAFAF9",
        surface: "#FAFAF9",
        success: "#16A34A",
        error: "#DC2626",
        warning: "#F59E0B",
        info: "#0284C7",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        // Escala tipográfica — 04-DESIGN-SYSTEM.md 1.2 (tamaño / line-height)
        h1: ["48px", { lineHeight: "56px", fontWeight: "700" }],
        h2: ["36px", { lineHeight: "44px", fontWeight: "600" }],
        h3: ["28px", { lineHeight: "36px", fontWeight: "600" }],
        h4: ["22px", { lineHeight: "30px", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "28px" }],
        body: ["16px", { lineHeight: "24px" }],
        small: ["14px", { lineHeight: "20px" }],
        xs: ["12px", { lineHeight: "16px" }],
      },
      spacing: {
        // Sistema base — 04-DESIGN-SYSTEM.md 1.3
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        6: "24px",
        8: "32px",
        10: "40px",
        12: "48px",
        16: "64px",
        20: "80px",
        24: "96px",
      },
      borderRadius: {
        card: "12px", // 04-DESIGN-SYSTEM.md 2.2
        input: "8px", // 04-DESIGN-SYSTEM.md 9.1
      },
    },
  },
  plugins: [],
};

export default config;
