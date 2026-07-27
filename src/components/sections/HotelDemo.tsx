// src/components/sections/HotelDemo.tsx
// Mockup PREMIUM y themeable para hoteles. Hero con foto real, galería con
// fotos, sello "Demo · Soporte Digital". Paleta propia por hotel.

interface HotelDemoProps {
  nombre: string;
  slogan: string;
  theme: {
    bg: string;
    surface: string;
    border: string;
    text: string;
    muted: string;
    accent: string;
    accentText: string;
    overlay: string;
  };
  seed: string;
  telefono: string;
  whatsapp: string;
  email: string;
  direccion: string;
  reservasUrl?: string;
  hero: string;
  servicios: { titulo: string; desc: string }[];
  habitaciones: { nombre: string; desc: string }[];
  galeria: string[];
}

export default function HotelDemo({
  nombre,
  slogan,
  theme,
  seed,
  telefono,
  whatsapp,
  email,
  direccion,
  reservasUrl,
  hero,
  servicios,
  habitaciones,
  galeria,
}: HotelDemoProps) {
  return (
    <main style={{ background: theme.bg, color: theme.text, minHeight: "100vh" }}>
      {/* HERO con foto real */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: 520 }}>
        <img
          src={`https://picsum.photos/seed/${seed}/1600/1000`}
          alt={nombre}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(180deg, ${theme.overlay}cc 0%, ${theme.overlay}f0 50%, ${theme.bg} 100%)`,
          }}
        />
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
          }}
        >
          Demo · Soporte Digital
        </div>
        <div
          style={{
            position: "relative",
            maxWidth: 880,
            margin: "0 auto",
            padding: "130px 24px 80px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: theme.accentText, opacity: 0.95, marginBottom: 12 }}>
            Hotel Boutique · Olavarría
          </p>
          <h1 style={{ fontSize: "clamp(38px, 7vw, 64px)", fontWeight: 800, lineHeight: 1.05, color: theme.accentText, margin: 0, textShadow: "0 2px 18px rgba(0,0,0,0.4)" }}>
            {nombre}
          </h1>
          <p style={{ fontSize: 19, color: theme.accentText, opacity: 0.95, marginTop: 16, maxWidth: 640, marginLeft: "auto", marginRight: "auto", textShadow: "0 1px 10px rgba(0,0,0,0.4)" }}>
            {slogan}
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={reservasUrl || `https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer"
              style={{ background: theme.accentText, color: theme.overlay, padding: "14px 30px", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: 16 }}>
              Reservar ahora
            </a>
            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer"
              style={{ background: "rgba(255,255,255,0.12)", color: theme.accentText, padding: "14px 28px", borderRadius: 10, border: `2px solid ${theme.accentText}`, textDecoration: "none", fontWeight: 600, fontSize: 16 }}>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 940, margin: "0 auto", padding: "0 24px 96px" }}>
        <section style={{ paddingTop: 64 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 16px" }}>Bienvenido</h2>
          <p style={{ fontSize: 16, color: theme.muted, lineHeight: 1.7, margin: 0 }}>{hero}</p>
        </section>

        <section style={{ paddingTop: 64 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 24px" }}>Todo lo que necesitás</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
            {servicios.map((s, i) => (
              <div key={i} style={{ background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: 14, padding: 22, boxShadow: "0 10px 30px rgba(0,0,0,0.25)" }}>
                <div style={{ width: 8, height: 8, borderRadius: 999, background: theme.accent, marginBottom: 12 }} />
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 6px" }}>{s.titulo}</h3>
                <p style={{ fontSize: 15, color: theme.muted, margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ paddingTop: 64 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 24px" }}>Nuestras habitaciones</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {habitaciones.map((h, i) => (
              <div key={i} style={{ background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: 16, overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.25)" }}>
                <img src={`https://picsum.photos/seed/${seed}-hab-${i}/600/360`} alt={h.nombre} style={{ width: "100%", height: 180, objectFit: "cover" }} />
                <div style={{ padding: 20 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 6px" }}>{h.nombre}</h3>
                  <p style={{ fontSize: 15, color: theme.muted, margin: 0, lineHeight: 1.5 }}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ paddingTop: 64 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 24px" }}>Galería</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
            {galeria.map((g, i) => (
              <div key={i} style={{ borderRadius: 14, overflow: "hidden", border: `1px solid ${theme.border}`, position: "relative", aspectRatio: "1 / 1" }}>
                <img src={`https://picsum.photos/seed/${seed}-gal-${i}/400/400`} alt={g} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <span style={{ position: "absolute", bottom: 8, left: 8, background: "rgba(0,0,0,0.6)", color: "#fff", fontSize: 12, padding: "3px 8px", borderRadius: 6 }}>{g}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ paddingTop: 64 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 16px" }}>Encontranos</h2>
          <div style={{ background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: 16, padding: 24, display: "grid", gap: 8, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
            <p style={{ margin: 0, fontSize: 15 }}><strong>Dirección:</strong> {direccion}</p>
            <p style={{ margin: 0, fontSize: 15 }}><strong>Tel:</strong> {telefono}</p>
            <p style={{ margin: 0, fontSize: 15 }}><strong>WhatsApp:</strong> {whatsapp}</p>
            <p style={{ margin: 0, fontSize: 15 }}><strong>Email:</strong> {email}</p>
          </div>
        </section>

        <section style={{ textAlign: "center", borderTop: `1px solid ${theme.border}`, marginTop: 64, paddingTop: 40 }}>
          <p style={{ fontSize: 14, color: theme.muted, margin: "0 0 10px" }}>Sitio de demostración · Diseñado por Soporte Digital</p>
          <a href="/studio" style={{ color: theme.accent, textDecoration: "underline", fontSize: 16 }}>¿Querés un sitio así para tu hotel? Conocé el Studio →</a>
        </section>
      </div>
    </main>
  );
}
