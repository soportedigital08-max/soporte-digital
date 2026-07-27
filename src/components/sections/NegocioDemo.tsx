// src/components/sections/NegocioDemo.tsx
// Plantilla de mockup PREMIUM y themeable para sitios de comercios/servicios.
// Hero con imagen real (picsum por seed de rubro), tarjetas con foto,
// sello "Demo · Soporte Digital". Cada negocio define su paleta.

export interface NegocioTheme {
  bg: string;
  surface: string;
  border: string;
  text: string;
  muted: string;
  accent: string;
  accentText: string;
  overlay: string; // color de overlay sobre la foto del hero (paleta rubro)
}

interface NegocioDemoProps {
  nombre: string;
  rubro: string;
  slogan: string;
  theme: NegocioTheme;
  seed: string; // picsum seed para foto estable del rubro
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
  seed,
  telefono,
  whatsapp,
  direccion,
  horario,
  servicios,
  sobre,
}: NegocioDemoProps) {
  const heroImg = `https://picsum.photos/seed/${seed}/1600/900`;
  return (
    <main style={{ background: theme.bg, color: theme.text, minHeight: "100vh" }}>
      {/* HERO con foto real + overlay de paleta */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: 460 }}>
        <img
          src={heroImg}
          alt={nombre}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(180deg, ${theme.overlay}cc 0%, ${theme.overlay}f0 55%, ${theme.bg} 100%)`,
          }}
        />
        {/* Sello Demo */}
        <div
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            background: "rgba(0,0,0,0.55)",
            color: "#fff",
            fontSize: 12,
            padding: "6px 12px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.3)",
            backdropFilter: "blur(4px)",
          }}
        >
          Demo · Soporte Digital
        </div>
        <div
          style={{
            position: "relative",
            maxWidth: 880,
            margin: "0 auto",
            padding: "120px 24px 72px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: theme.accentText,
              opacity: 0.95,
              marginBottom: 12,
            }}
          >
            {rubro}
          </p>
          <h1
            style={{
              fontSize: "clamp(36px, 6.5vw, 60px)",
              fontWeight: 800,
              lineHeight: 1.05,
              color: theme.accentText,
              margin: 0,
              textShadow: "0 2px 18px rgba(0,0,0,0.4)",
            }}
          >
            {nombre}
          </h1>
          <p
            style={{
              fontSize: 19,
              color: theme.accentText,
              opacity: 0.95,
              marginTop: 16,
              maxWidth: 620,
              marginLeft: "auto",
              marginRight: "auto",
              textShadow: "0 1px 10px rgba(0,0,0,0.4)",
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
                color: theme.overlay,
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
                background: "rgba(255,255,255,0.12)",
                color: theme.accentText,
                padding: "14px 28px",
                borderRadius: 10,
                border: `2px solid ${theme.accentText}`,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 16,
                backdropFilter: "blur(4px)",
              }}
            >
              Llamar
            </a>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 24px 96px" }}>
        {/* Servicios con foto */}
        <section style={{ paddingTop: 64 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 24px" }}>
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
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                }}
              >
                <img
                  src={`https://picsum.photos/seed/${seed}-${i}/600/340`}
                  alt={s.titulo}
                  style={{ width: "100%", height: 160, objectFit: "cover" }}
                />
                <div style={{ padding: 20 }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 999,
                      background: theme.accent,
                      marginBottom: 10,
                    }}
                  />
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 6px" }}>
                    {s.titulo}
                  </h3>
                  <p style={{ fontSize: 15, color: theme.muted, margin: 0, lineHeight: 1.5 }}>
                    {s.desc}
                  </p>
                </div>
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
              borderRadius: 16,
              padding: 24,
              display: "grid",
              gap: 8,
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
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
            style={{ color: theme.accent, textDecoration: "underline", fontSize: 16 }}
          >
            ¿Querés un sitio así para tu comercio? Conocé el Studio →
          </a>
        </section>
      </div>
    </main>
  );
}
