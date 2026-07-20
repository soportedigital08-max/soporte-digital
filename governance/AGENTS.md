# AGENTS.md — Manual de Operaciones del Proyecto

> Punto de entrada OBLIGATORIO para cualquier IA que trabaje en este proyecto.
> Leé este archivo antes que nada. Si no entendés algo, seguí el orden de lectura.

---

## 1. Qué es el proyecto

**Soporte Digital** es el sitio web de marketing y conversión de un emprendimiento de
tecnología en Olavarría, Argentina (y alcance remoto en todo el país). Posicionamiento:
*"No competimos por precio. Competimos por claridad, confianza y resolución real."*

El sitio vende: soporte técnico, redes/WiFi, recuperación de datos, desarrollo web,
hosting, seguridad/cámaras, soporte remoto, y **desarrollo de sistemas/CRM a medida**
(caso de éxito real: CRM para Ippon Group, dojo de judo).

Stack: **Next.js 14 (App Router) + React 18 + Tailwind CSS 3 + TypeScript**, desplegado en
**Vercel** (Hobby) con dominio `www.soportedigital.com.ar`. Sin backend propio: formulario
vía **Formspree**, contenido estático en `lib/*.ts`.

---

## 2. Objetivo general

Construir y mantener un sitio **premium** (sensación tech de alto nivel, cohesivo, con
autoridad) que convierta visitas en contactos, respetando la calidez y claridad del mensaje.
El estándar visual de referencia es la **home**; toda ruta debe estar al mismo nivel.

---

## 3. Estado actual (resumen)

- Build de producción: **42 rutas estáticas** (OK).
- Estándar visual premium aplicado en TODAS las rutas (dark `#0B0F14`, Space Grotesk +
  Inter, cards dark con hover-elevación, `Reveal` fade-up, WhatsApp flotante, sin overflow).
- Contraste AA/AAA cumplido. Overflow horizontal resuelto por construcción.
- Documentación técnica oficial en `/docs` (00 a 20).
- Pendiente menor: horario real de atención en footer (hoy placeholder).

Estado detallado en `PROJECT_STATE.md`.

---

## 4. Cómo está organizada la documentación

```
/governance/        ← Memoria de mando (esta carpeta). Obligatoria.
  AGENTS.md         ← Este manual.
  PROJECT_STATE.md  ← Estado vivo del proyecto.
  HANDOFF.md        ← Qué debe saber la próxima IA.
  PROJECT_MEMORY.md ← Memoria conceptual (ideas, filosofías, aprendizajes).
  CHANGELOG.md      ← Cronología de cambios.
  DECISIONS.md      ← Registro único de decisiones estratégicas.

/docs/              ← Documentación técnica oficial del proyecto.
  00-PROYECTO.md, 01-DECISIONES.md, 02-ROADMAP.md, 03-ARQUITECTURA.md,
  04-DESIGN-SYSTEM.md, 05-ARQUITECTURA-TECNICA.md, 06-SEO.md, 07-CONTENIDOS.md,
  08-MARKETING.md, 09-CASOS-DE-EXITO.md, 10-CHANGELOG.md, 11-TAREAS.md,
  20-IPPON-CRM.md, README.md
```

Relación: `/governance` manda y da contexto; `/docs` es la especificación técnica de verdad.
Ante conflicto, `/docs/04-DESIGN-SYSTEM.md` y `/docs/03-ARQUITECTURA.md` priman en lo técnico;
`/governance/DECISIONS.md` prima en lo estratégico.

---

## 5. Orden obligatorio de lectura (al iniciar)

1. `governance/AGENTS.md` (este archivo)
2. `governance/PROJECT_STATE.md`
3. `governance/HANDOFF.md`
4. `governance/DECISIONS.md`
5. `docs/00-PROYECTO.md` → `docs/04-DESIGN-SYSTEM.md` → `docs/03-ARQUITECTURA.md`
6. Solo lo demás de `/docs` que la tarea requiera.

**Nunca** leer conversaciones de chat para entender el estado. La memoria vive en `/governance`.

---

## 6. Metodología de trabajo

- Trabajo por **Sprints** (ciclos de trabajo con objetivo acotado). Cada Sprint se aprueba,
  se ejecuta y se cierra actualizando la memoria.
- Prioridad máxima del proyecto: **percepción PREMIUM coherentemente en todas las rutas**.
- Antes de tocar el sitio en vivo: `npm run build` tras cada edición (matar `npm run dev`
  primero en Windows/MSYS para no corromper `.next`).
- Commits atómicos y descriptivos. Push a `main` (GitHub `soportedigital08-max/soporte-digital`).
- Verificación real: build + HTTP 200 en rutas + (cuando aplique) revisión visual por
  captura. No declarar "listo" sin evidencia de build/HTTP.

---

## 7. Cómo registrar decisiones

- Decisiones estratégicas → `governance/DECISIONS.md` (formato: ID, Fecha, Título, Contexto,
  Decisión, Justificación, Impacto, Estado, Documentos afectados). Nunca editar una aprobada;
  solo agregar o marcar reemplazo.
- También espejar en `docs/01-DECISIONES.md` (histórico técnico del proyecto).
- Cambios de código relevantes → `governance/CHANGELOG.md` + `docs/10-CHANGELOG.md`.

---

## 8. Cómo crear nueva documentación

- Nueva especificación técnica → `docs/NN-TEMA.md` (numeración correlativa).
- Nueva decisión → `governance/DECISIONS.md`.
- Nuevo aprendizaje conceptual → `governance/PROJECT_MEMORY.md`.
- Mantener nombres en mayúsculas/guion según este estándar.

---

## 9. Qué NUNCA debe hacer una IA

- **No** depender de la conversación del chat para estado o decisiones.
- **No** preservar credenciales en el repos: usar `[REDACTED]`. Credenciales conocidas:
  ippongroup user/pass y endpoint Formspree (ya redactados en histórico).
- **No** usar plantillas genéricas de SaaS ni componentes que se vean "de librería sin editar".
- **No** dejar el sitio en estado ambiguo (build roto, rutas 404, contraste roto).
- **No** inventar datos de negocio (horarios, testimonios, métricas) — pedirlos al usuario.
- **No** cambiar el idioma del sitio: es **100% español** (es_ES), incluido el CRM.
- **No** correr `npm run build` mientras `npm run dev` corre (Windows/MSYS corrompe `.next`).

---

## 10. Cómo continuar un Sprint

1. Leer `PROJECT_STATE.md` (Sprint actual, objetivo, bloqueos).
2. Leer `HANDOFF.md` (qué quedó pendiente).
3. Leer `DECISIONS.md` (restricciones vigentes).
4. Ejecutar la tarea del Sprint.
5. Verificar (build + HTTP + visual si aplica).
6. Al cerrar: actualizar `PROJECT_STATE`, `HANDOFF`, `CHANGELOG`, y `DECISIONS` si hubo.

---

## 11. Cómo cerrar un Sprint

Al finalizar:
- `PROJECT_STATE.md`: marcar Sprint como aprobado, definir próximo Sprint.
- `HANDOFF.md`: Registrar qué se hizo, qué quedó aprobado/pendiente, decisiones, docs
  modificados, qué revisar primero, qué hacer inmediatamente después.
- `CHANGELOG.md`: entrada cronológica (Fecha, Sprint, Documento, Descripción, Impacto).
- `DECISIONS.md`: nuevas decisiones con ID.
- Commit + push.

---

## 12. Convenciones generales

- Lenguaje del sitio y de la comunicación con el usuario: **español**.
- Resúmenes para el usuario: en español, concretos.
- Código: KISS/DRY, sin tests/lint de UI hasta que el usuario apruebe o se vaya a commit.
- Alias `@/*` → `./src/*`. Dev port `3005`. Prod en Vercel (`www.soportedigital.com.ar`).
- Logo oficial: `public/logo-sd.png` (azul, transparente) en navbar/footer/favicon
  (`src/app/icon.png`). Usar `<img>` nativo (no next/image) para el logo.
- Tokens de color: `ink-900` (#0B0F14) / `ink-800` (#12161C) para fondos dark; `primary-*`
  para acentos azules; `surface`/`background` = #FAFAF9 (blanco-roto, no blanco puro).

---

*Este documento es la fuente de autoridad operativa. Si algo en `/docs` contradice lo aquí
escrito en materia de flujo de trabajo, prevalece este manual.*
