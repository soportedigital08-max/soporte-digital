// src/components/sections/NegocioDemo.tsx
// Plantilla de mockup PREMIUM y themeable para sitios de comercios/servicios.
// Cada negocio define su propia paleta (theme) para que el diseño corresponda
// a su rubro, no al de Soporte Digital. Usado en /demo/[slug].

export interface NegocioTheme {
  bg: string;
  surface: string;
  border: string;
  text: string;
  muted: string;
  accent: string;
  accentText: string;
  heroFrom: string;
  heroTo: string;
}

interface NegocioDemoProps {
  nombre: string;
  rubro: string;
  slogan: string;
  theme: NegocioTheme;
  telefono: string;
  whatsapp: string;
  direccion: string;
  horario: string;
  servicios: { titulo: string; desc: string }[];
  sobre: string;
}

export default function NegocioDemo({
  nombre,
  rubro,
  slogan,
  theme,
  telefono,
  whatsapp,
  direccion,
  horario,
  servicios,
  sobre,
}: NegocioDemoProps) {
  return (
    <main style={{ background: theme.bg, color: theme.text, minHeight: "100vh" }}>
      {/* HERO con paleta del rubro */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, ${theme.heroFrom} 0%, ${theme.heroTo} 100%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 880,
            margin: "0 auto",
            padding: "96px 24px 72px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: theme.accentText,
              opacity: 0.9,
              marginBottom: 12,
            }}
          >
            {rubro}
          </p>
          <h1
            style={{
              fontSize: "clamp(34px, 6vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.05,
              color: theme.accentText,
              margin: 0,
            }}
          >
            {nombre}
          </h1>
          <p
            style={{
              fontSize: 19,
              color: theme.accentText,
              opacity: 0.92,
              marginTop: 16,
              maxWidth: 620,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {slogan}
          </p>
          <div
            style={{
              marginTop: 32,
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: theme.accentText,
                color: theme.heroFrom,
                padding: "14px 28px",
                borderRadius: 10,
                fontWeight: 700,
                textDecoration: "none",
                fontSize: 16,
              }}
            >
              Escribinos por WhatsApp
            </a>
            <a
              href={`tel:${telefono.replace(/\s/g, "")}`}
              style={{
                background: "transparent",
                color: theme.accentText,
                padding: "14px 28px",
                borderRadius: 10,
                border: `2px solid ${theme.accentText}`,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              Llamar
            </a>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 24px 96px" }}>
        {/* Servicios */}
        <section style={{ paddingTop: 64 }}>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              margin: "0 0 24px",
            }}
          >
            Qué ofrecemos
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {servicios.map((s, i) => (
              <div
                key={i}
                style={{
                  background: theme.surface,
                  border: `1px solid ${theme.border}`,
                  borderRadius: 14,
                  padding: 22,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    background: theme.accent,
                    marginBottom: 12,
                  }}
                />
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 6px" }}>
                  {s.titulo}
                </h3>
                <p style={{ fontSize: 15, color: theme.muted, margin: 0, lineHeight: 1.5 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre */}
        <section style={{ paddingTop: 64 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 16px" }}>
            Sobre nosotros
          </h2>
          <p style={{ fontSize: 16, color: theme.muted, lineHeight: 1.7, margin: 0 }}>
            {sobre}
          </p>
        </section>

        {/* Contacto */}
        <section style={{ paddingTop: 64 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 16px" }}>
            Dónde encontrarnos
          </h2>
          <div
            style={{
              background: theme.surface,
              border: `1px solid ${theme.border}`,
              borderRadius: 14,
              padding: 24,
              display: "grid",
              gap: 8,
            }}
          >
            <p style={{ margin: 0, fontSize: 15 }}>
              <strong>Dirección:</strong> {direccion}
            </p>
            <p style={{ margin: 0, fontSize: 15 }}>
              <strong>Horario:</strong> {horario}
            </p>
            <p style={{ margin: 0, fontSize: 15 }}>
              <strong>Tel:</strong> {telefono}
            </p>
            <p style={{ margin: 0, fontSize: 15 }}>
              <strong>WhatsApp:</strong> {whatsapp}
            </p>
          </div>
        </section>

        {/* CTA Studio */}
        <section
          style={{
            textAlign: "center",
            borderTop: `1px solid ${theme.border}`,
            marginTop: 64,
            paddingTop: 40,
          }}
        >
          <p style={{ fontSize: 14, color: theme.muted, margin: "0 0 10px" }}>
            Sitio de demostración · Diseñado por Soporte Digital
          </p>
          <a
            href="/studio"
            style={{
              color: theme.accent,
              textDecoration: "underline",
              fontSize: 16,
            }}
          >
            ¿Querés un sitio así para tu comercio? Conocé el Studio →
          </a>
        </section>
      </div>
    </main>
  );
}
