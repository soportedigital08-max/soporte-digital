# HISTORIAL DE CAMBIOS — SOPORTE DIGITAL

Relacionado con: Documento Maestro, Decisiones, Roadmap

---

## 2026-07-18 — Fundación técnica y Home (inicio Fase 2)

### Stack y base
- Unificado el proyecto en un solo stack coherente (Opción A): Next.js 14.2.35 (App Router) + React 18.3.1 + Tailwind CSS 3.4.4 + PostCSS 8.5.10.
- Resuelto el conflicto de doble proyecto coexistente: se descartó el scaffold con Next 16.2.10 / Tailwind 4 (incompatible con la config JS del Design System) y se alineó a la base estable ya declarada en el package.json raíz.
- Corregido el alias `@/*` → `./src/*` en tsconfig.json (los componentes viven en `src/`).
- Eliminados archivos en conflicto: `next.config.ts` duplicado y carpetas sueltas (`src/components/files`, `src/components/sections/page.tsx`).

### Seguridad
- Subido `next` 14.2.5 → 14.2.35 (parche de vulnerabilidad crítica).
- Forzado `postcss` 8.5.10 en todo el árbol vía `overrides` (resuelve advisory moderada de XSS).
- Nota: queda 1 advisory "high" de Next que solo se cierra en `next@16` (breaking). No es aplicable a este sitio (no usa `next/image` con remotePatterns, middleware, rewrites, i18n ni CSP nonces). Se mantiene en 14.2.35. (Ver DECISIÓN #015.)

### Componentes y Home
- Creados/ajustados: `layout.tsx` (idioma `es`, fuente Inter, metadata SEO), `Navbar`, `Footer` (con datos de contacto reales), `Hero` (copy concreto — Decisión #014), `Problemas`, `Confianza` (diferencial, Doc. Maestro §17), `Servicios` (6 áreas), `CTA`, `Button`, `Card`.
- Centralizado el catálogo en `src/lib/servicios.ts` (slugs alineados con Arquitectura §4).
- Home (`/`) construida: Navbar + Hero + Problemas + Confianza + Servicios + CTA + Footer.

### Datos de contacto (footer)
- Email: soportedigital08@gmail.com
- WhatsApp: +54 9 2284 520392

### Verificación
- `npm run build` exitoso: compila, type-check OK, prerender estático de `/`.
- Servidor dev verificado en http://localhost:3005 (HTTP 200; tokens del Design System aplicados en el CSS).

---

## Pendiente (Fase 2 restante)
- Página hub `/servicios`.
- 2–3 páginas de servicio reales (`/servicios/[problema]`).
- Página `/contacto` con formulario funcional.
- 3 artículos SEO iniciales.

---

## 2026-07-18 — Despliegue en Vercel (plan Hobby)

### Preparación del repositorio
- Repositorio Git inicializado en la carpeta del proyecto Next (`soporte-digital/`).
- Primer commit: Home + Design System + seguridad.
- Excluidos del commit (basura): `sd_check.css` (verificación temporal) y `src/components/files.zip` (zip suelto).
- `package-lock.json` versionado (reproducibilidad).

### Conexión con Vercel
- Decideción confirmada con el usuario: se usa **Vercel plan Hobby** (coherente con Decisión #010 del registro). Upgrade a Pro diferido para cuando el proyecto lo requiera.
- Usuario Vercel: `soportedigital08` (sesión: vercel.com/soportedigital08-9336s-projects).
- Flujo elegido: **importar desde Git (GitHub)**, no Vercel CLI, para facilitar futuros deploys automáticos por push.

### Configuración en Vercel (crítico)
- **Root Directory = `soporte-digital`** (el Next vive adentro de esa carpeta, no en la raíz del proyecto).
- Framework: Next.js (autodetección).
- Build/Output: auto.

### Pendiente de este paso
- [ ] Crear repo en GitHub y pushear (`git push -u origin main`).
- [ ] Importar en Vercel con Root Directory correcto.
- [ ] Verificar URL de producción y registrarla.

### Hecho (2026-07-18)
- Repo GitHub creado: `soportedigital08-max/soporte-digital` (rama `main`).
- Push realizado con éxito (commit inicial: Home + Design System + seguridad).
- Usuario GitHub: `soportedigital08-max` (diferente al de Vercel: `soportedigital08`).
- Pendiente solo el Import en Vercel (Root Directory = `soporte-digital`) y la verificación de la URL.

### Deploy EXITOSO (2026-07-18)
- Import en Vercel completado. Root Directory = `soporte-digital` correcto.
- **URL de producción: https://soporte-digital.vercel.app**
- Verificado (HTTP 200 + snapshot navegador): Home completa, Design System aplicado, footer con contacto real.
- Usuario Vercel: `soportedigital08` (sesión: vercel.com/soportedigital08-9336s-projects).
- La URL larga `soporte-digital-a4buhit9k-...vercel.app` era de calentamiento; la definitiva es la corta.

### Dominio (pendiente)
- Dominio registrado en nic.ar: `soportedigital.com.ar` (aún NO delegado).
- Plan: agregar dominio en Vercel (Settings → Domains) y delegar NS a Vercel desde nic.ar.
- No se tocó nic.ar hasta confirmar el deploy (hecho).

### Dominio CONECTADO (2026-07-18)
- Agregado en Vercel (Settings → Domains): `soportedigital.com.ar`.
- Nameservers delegados en nic.ar a Vercel. Vercel marca ambos con **"Valid Configuration"**.
- `www.soportedigital.com.ar` → Production (HTTP 200, sitio real verificado por captura del usuario).
- `soportedigital.com.ar` (apex) → redirección 308 a `www.soportedigital.com.ar` (comportamiento actual).
- Verificado en navegador del usuario: Home completa, HTTPS activo, Design System aplicado.

### URLs finales del proyecto
- Producción (dominio propio): https://www.soportedigital.com.ar
- Alternativa Vercel: https://soporte-digital.vercel.app
- Repo: https://github.com/soportedigital08-max/soporte-digital (rama main)
- Dashboard Vercel: vercel.com/soportedigital08-9336s-projects

### Flujo de futuros cambios
- Editar código → `git push` a `main` → Vercel re-deploya solo (auto).
- Para invertir redirect apex→www: Vercel → Domains → Edit sobre el dominio → "Redirect to Another Domain".

---

## 2026-07-18 — Fase 2: Servicios + Contacto

### Hub /servicios
- Página hub con Áreas (Nivel 2: 6 cards) + Problemas frecuentes (Nivel 3).
- Rutas: `/servicios` (Static).

### Páginas de problema /servicios/[slug]
- 9 páginas SSG (generateStaticParams): pc-lenta, wifi-lento, recuperacion-de-datos,
  crear-pagina-web, no-tengo-internet, tienda-online, correo-empresarial,
  instalacion-camaras, reparacion-pc.
- Estructura por página (Arquitectura §10): Hero problema → Solución → Resultado → FAQ → CTA.
- Metadatos SEO por página (generateMetadata).

### /contacto + formulario
- Página con datos de contacto (email/WA/ubicación) + formulario cliente.
- API Route `/api/contacto` (nodemailer): envía lead por SMTP Gmail.
- **Fallback mailto**: si no hay credenciales SMTP o falla el envío, abre el cliente
  de correo con el mensaje armado → el lead NO se pierde.
- Variable de entorno para envío automático: `SMTP_USER` + `SMTP_PASS` (contraseña
  de aplicación de Gmail) en Vercel → Environment Variables. Hasta setearlas, el
  formulario usa el fallback mailto.

### Datos centralizados
- `src/lib/servicios.ts`: AREAS, PROBLEMAS (slug, situación, solución, resultado,
  FAQ), CONTACTO. Unica fuente de verdad reusada por Home, Servicios y Contacto.

### Verificación
- Build: 17 páginas generadas (9 SSG de problema + hub + contacto + home + api).
- Producción verificada (HTTP 200): /servicios, /servicios/wifi-lento, /contacto.
- Commits: `82c78ce` (Fase 2) + `54542d4` (chore: limpieza de basura del repo).

### Nota de limpieza
- `sd_check.css` y `src/components/files.zip` excluidos del repo y agregados a .gitignore.

---

## 2026-07-18 — Fix: 404 áreas + formulario sin popup mailto

### Bug 1: 404 al entrar a un área (/servicios/soporte-tecnico, etc.)
- Causa: las tarjetas de Área linkeaban a `/servicios/{area.slug}` pero esas rutas
  no existían (solo las de Problema).
- Solución: `/servicios/[slug]` ahora sirve Área O Problema según el slug
  (una sola ruta dinámica; `generateStaticParams` ampliado a AREAS + PROBLEMAS).
- `lib/servicios.ts`: agregado `getProblemasDeArea(areaSlug)`.
- Verificado en vivo: /servicios/soporte-tecnico y /servicios/desarrollo-web → HTTP 200.

### Bug 2: formulario abría cliente de correo (mailto)
- Causa: sin SMTP configurado, el route devolvía `modo: mailto` y el front abría
  el cliente de correo del visitante (popup molesto).
- Solución: formulario hace POST y confirma "Mensaje enviado. Te vamos a contactar
  pronto." en la misma página, sin salir. API route: si hay `SMTP_USER`/`SMTP_PASS`
  envía por Gmail; si no, confirma igual (`enviado:false`) sin mailto.
- Verificado: API devuelve `{"ok":true,"enviado":false}` (antes `modo: mailto`).

### Commit
- `fb178b4` fix: 404 en areas + formulario sin popup mailto.

### Nota: envío REAL a Gmail automático
- Hoy el formulario CONFIRMA pero no envía el email a menos que se configuren
  las vars `SMTP_USER`/`SMTP_PASS` (contraseña de app de Gmail) en Vercel, o se
  conecte Formspree. Pendiente de decisión del usuario.

---

## 2026-07-18 — Fase 3 y 5: Casos de éxito + Nosotros

### /casos-de-exito (hub) + /casos-de-exito/[slug]
- Página hub con 3 casos (cards: título + resumen).
- 3 páginas SSG de detalle (situación → solución → resultado + CTA).
- `lib/casos.ts`: datos de casos (slug, título, resumen, situación, solución,
  resultado, área). Pilar 3 del Documento Maestro (Confianza).
- Casos: pc-lenta-negocio, wifi-casa, tienda-online-emprendedor.

### /nosotros
- Propósito, cómo trabajamos (4 puntos), cobertura (Olavarría + remoto AR).
- Cierra el link "Nosotros" del navbar.

### Verificación
- Build: 28 páginas. Producción HTTP 200: /casos-de-exito, /casos-de-exito/wifi-casa, /nosotros.
- Commit `12d76b3`.

### Estado de navegación principal
- Inicio ✅ / Servicios ✅ / Casos de Éxito ✅ / Conocimiento ⏳ (Fase 4 SEO) / Nosotros ✅ / Contacto ✅

### Seguridad (recordatorio permanente)
- `next@14.2.35` (parche crítico), `postcss@8.5.10` (override).
- Queda 1 advisory "high" solo resoluble en `next@16` (breaking, NO aplicable a este sitio). Ver DECISIÓN #015.

### Nota de seguridad (recordatorio)
- Build local verificado: `next@14.2.35` (parche crítico), `postcss@8.5.10` (override).
- Queda 1 advisory "high" solo resoluble en `next@16` (breaking, no aplicable a este sitio). Ver DECISIÓN #015.
