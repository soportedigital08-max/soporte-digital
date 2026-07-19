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

---

## 2026-07-18 — Fase 4: Conocimiento (contenido de valor / SEO)

### /conocimiento (hub) + /conocimiento/[slug]
- Página hub con 3 artículos (cards: título + extracto).
- 3 páginas SSG de artículo (bloques h2/p/ul, categoría + lectura).
- `lib/articulos.ts`: datos de artículos (slug, título, extracto, categoría, bloques).
- Pilar 1 del Documento Maestro (Captación): atrae tráfico cualificado desde Google.
- Artículos: pc-lenta-que-hacer, mejorar-wifi-casa, hosting-negocio.

### Verificación
- Build: 32 páginas. Producción HTTP 200: /conocimiento, /conocimiento/mejorar-wifi-casa, /conocimiento/hosting-negocio.
- Commit `9294a95`.

### Estado de navegación principal (FINAL)
- Inicio ✅ / Servicios ✅ / Casos de Éxito ✅ / Conocimiento ✅ / Nosotros ✅ / Contacto ✅

### Roadmap: FASES 1-5 COMPLETAS
- Falta solo: envío REAL de email en formulario (ver nota abajo).

### Nota: envío REAL a Gmail automático (PENDIENTE de credencial del usuario)
- RESUELTO con Formspree (Opción A, elegida por el usuario).
- Endpoint: `https://formspree.io/f/mqerqyek` (cuenta con soportedigital08@gmail.com).
- `FormularioContacto` hace POST directo a Formspree (sin API route ni nodemailer).
- Verificado: POST de prueba a Formspree devuelve `{"ok":true}` → lead llega al Gmail.
- `src/app/api/contacto/route.ts` y dep `nodemailer` eliminados (código más limpio).
- Commit `647bb52`.

### Estado FINAL del formulario
- Envío 100% funcional: el visitante completa y recibe "Mensaje enviado. Te vamos a
  contactar pronto." en la misma página; el lead cae a soportedigital08@gmail.com.
- Plan Formspree gratis (~50 envíos/mes). Subir plan si se necesita más volumen.

---

## 2026-07-18 — Contenido de valor ampliado

### +3 artículos (Fase 4 / Conocimiento)
- pc-virus-signos: "5 señales de que tu PC tiene un virus"
- recuperar-archivos-borrados: "Borré un archivo por error: cómo recuperarlo"
- correo-con-dominio: "Por qué tu negocio debería tener correo con su dominio"
- Total: 6 artículos en /conocimiento.

### +2 casos de éxito (Fase 3)
- camaras-comercio: "Cámaras que se ven desde el celular" (Seguridad)
- recuperacion-disco-familia: "Fotos de familia recuperadas a tiempo" (Servicio técnico)
- Total: 5 casos en /casos-de-exito.

### Verificación
- Build: 36 páginas. Producción HTTP 200 confirmado para los 3 artículos y 2 casos nuevos.
- Commit `b4108a9`.

---

### Nota: CRM Ippon Group (proyecto SEPARADO de Soporte Digital)
- Sistema de Gestión web para "Ippon Group — Judo Olavarría", alojado en hosting propio
  ippongroup.com.ar (usuario soportedigital@ipponggroup.com.ar).
- Revisión 2026-07-18: frontend login con roles "Administrador" y "Socio" (email + password).
- NO se pudo ingresar al panel con las credenciales provistas (soportedigital@ ni admin@).
  Pendiente confirmar usuario/contraseña correctos para documentar funciones internas.
- Observación: el mail del usuario dice dominio "ipponggroup.com.ar" (doble g) mientras la
  web es "ippongroup.com.ar" (single g). Posible typo o subdominio distinto.
- Este proyecto NO se versiona en el repo de Soporte Digital (son productos distintos).

---

## 2026-07-18 (tarde) — CRM en sitio + Home + Privacidad/SEO + Rediseño premium

### CRM visible en el sitio
- /casos-de-exito/crm-ippon-group (caso real: Dojo de Judo, socios/pagos/asistencia)
- /servicios/sistema-a-medida-crm (nuevo problema en desarrollo-web)
- Hero menciona "desarrollamos sistemas/CRM"; banda "Desarrollo a medida" en Home enlaza ambos.

### Home + legales + SEO
- Hero + sección DesarrolloMedida (caso Ippon destacado en portada).
- /privacidad (Política de Privacidad, obligatoria por MP + datos de contacto).
- app/sitemap.ts + app/robots.ts (SEO, indexación de las 41 rutas).
- Button acepta className.

### Rediseño premium (marca SD)
- Logo recreado como SVG transparente: public/logo-sd.svg (hexágono + SD, degradado teal→celeste).
- Navbar y Footer con logo + paleta azul corporativa (primary-900 footer, blur navbar).
- Hero con gradiente azul (from-primary-800 via-primary-700 to-primary-600) + CTAs blancos.
- Card con sombra premium (shadow-card / shadow-premium).
- globals.css: jerarquía tipográfica (h1-h4, body, small) + paleta primary completa + utilidades
  de gradiente (from/via/to) definidas manualmente (proyecto sin tailwind.config; se usan
  utilidades propias en @layer components).
- Commit `f227286`. Build 41 páginas. Verificado visualmente en producción (hero azul, logo SD).

### Nota de arquitectura
- El proyecto NO tiene tailwind.config.ts; las clases de marca (primary-*, text-h*, rounded-*,
  gradientes) se definen como utilidades propias en globals.css @layer components. Mantener ahí
  cualquier nueva clase de marca.

---

## 2026-07-19 — Logo oficial PNG + favicon + salto visual premium

### Logo oficial
- Confirmado por el usuario: usa el logo `logo-sin-fondo-soporte-digital.png` (hexágono degradado
  azul + SD, transparente). Copiado a public/logo-sd.png y reemplazó el SVG recreado.
- Verificado con PIL: modo RGBA, alpha=0 en esquinas -> transparente real.
- Navbar y Footer usan /logo-sd.png (img nativo). SVG viejo borrado.

### Favicon
- app/icon.png = copia del logo (Next lo sirve como favicon automático).
- IMPORTANTE: el icon debe ir en src/app/icon.png, NO en app/icon.png (raíz). Si se pone en la
  raíz, Next ignora src/app y el build solo genera 3 rutas (icon + 404) -> home 404 en producción.
  Commit f5b4f51 corrigió esto.

### Salto visual premium (Home)
- Hero: 2 columnas con imagen real (Unsplash, públic/images/hero-tech.jpg), patrón de puntos,
  halo decorativo, botón secundario robusto (blanco sólido + texto oscuro, legible siempre).
- Card: acepta `icon` (ReactNode); Servicios muestra íconos SVG inline (Iconos.tsx).
- Nueva sección Stats (franja primary-900 con 500+/10 años/100%/24-7).
- Imágenes libres en public/images (hero-tech.jpg, soporte-pc.jpg, oficina.jpg).
- Build 42 rutas. Verificado visualmente en producción (vision): logo SD azul, hero con foto,
  íconos en servicios, stats, botón legible.

### Nota imágenes
- Fuentes libres (Unsplash, hotlink permitido). Si se cae el CDN, reemplazar por Pixabay/Pexels.
  No requieren atribución para uso web según licencia Unsplash.

---

## 2026-07-19 — Combo premium 1+3+4+5 (sofisticación)

### Tipografía display (5)
- layout.tsx: next/font con Inter (cuerpo, --font-inter) + Space Grotesk (display, --font-display).
- globals.css: .text-h1..h4 usan font-family: var(--font-display) -> jerarquia tipografica tech.

### Navbar sticky + blur (4)
- Ya estaba: header sticky top-0 z-50 bg-white/80 backdrop-blur. El blur se nota al hacer scroll
  sobre secciones claras (arriba del todo se funde con el hero azul, comportamiento correcto).

### Scroll reveal (1)
- globals.css: utilidad .reveal (opacity/translateY + transition) + .is-visible; respeta
  prefers-reduced-motion.
- components/ui/Reveal.tsx: cliente con IntersectionObserver; envuelve secciones de la Home.

### Terminal animada (3)
- components/sections/Terminal.tsx: cliente con efecto de tipeo linea por linea
  (scan --equipo pc-01 ... fix --optimizar --red), cursor parpadeante. Reemplaza el <pre> estatico.
- Hero usa <Terminal/> dentro de <Reveal>.

### Validación visual
- Build 42 rutas. vision confirma: titulos display geometricos, terminal tech como acierto visual,
  look "premium y profesional, no plantilla genérica, con personalidad propia".

### Nota
- next/font descarga fuentes en build (requiere red). Sin bloqueo en Vercel.

---

## 2026-07-19 — Vuelta de rosca: cohesión dark + 20 años + EES N°7

### Corrección de antigüedad
- Stats: "10 años" -> "20 años de experiencia" (dato confirmado por el usuario).
- Refuerzo como diferenciador en Nosotros.

### EES N°7 (secundaria7.com.ar)
- El usuario SOLO aloja y asesora el sitio; el desarrollo es de la escuela.
- Por eso NO es caso de éxito de desarrollo (estilo Ippon). Se menciona en la
  trayectoria de Nosotros como proyecto alojado/asesorado, con datos reales del
  sitio (FM 104.5 Identidad, archivo histórico, depto de prensa).
- Investigado vía navegador: EES N°7 "Fortín de las Puntas del Tapalquén", Desde 1990,
  multimedio con radio en vivo. Noticias 2026 sobre periodismo, memoria, ferias.

### Cohesión dark (punto 2 pendiente)
- Nuevo PageHeader.tsx: encabezado azul profundo + grilla tech (reusa estética Hero).
- Servicios/Casos/Conocimiento usan PageHeader.
- Todas las páginas interiores: bg-surface -> bg-primary-800/40, textos grises ->
  claros (white/primary-200/300). main envuelto en bg-primary-900.
- body background -> primary-900 (sin destellos blancos entre secciones).
- privacidad: text-gray-500/700 -> primary claros.
- Build 42 rutas. Verificado visual: fondo azul cohesivo, legibilidad OK, "20 años".

### Validación visual
- vision: "fondo azul cohesivo, buena legibilidad, 20 años como headline, cohesión 8/10".

### Seguridad (recordatorio permanente)
- `next@14.2.35` (parche crítico), `postcss@8.5.10` (override).
- Queda 1 advisory "high" solo resoluble en `next@16` (breaking, NO aplicable a este sitio). Ver DECISIÓN #015.

### Nota de seguridad (recordatorio)
- Build local verificado: `next@14.2.35` (parche crítico), `postcss@8.5.10` (override).
- Queda 1 advisory "high" solo resoluble en `next@16` (breaking, no aplicable a este sitio). Ver DECISIÓN #015.
