# HANDOFF.md — ¿Qué debe saber la próxima IA?

> Actualizar al finalizar cada Sprint. Responde: ¿qué se hizo, qué quedó aprobado/pendiente,
> qué decisiones se tomaron, qué documentos revisar primero, qué hacer inmediatamente después?

---

## Qué se hizo (Sprint 6 + 7, hasta 2026-07-19)

- **Alineación premium total:** todas las rutas llevadas al estándar de la home. Cards
  `variant="dark"` (bg-ink-800) + `Reveal` (fade-up) en /servicios, /servicios/[slug] (16),
  /casos-de-exito, /casos-de-exito/[slug] (6), /conocimiento, /conocimiento/[slug] (6).
- **Nosotros:** hitos de 20 años con punto visual accento + Reveal.
- **Privacidad:** removido `prose` (clase inerte, Typography no instalado) → wrapper con
  spacing + Reveal.
- **Fixes premium previos (Sprint 5):** overflow horizontal resuelto (html/body
  `overflow-x:hidden` + `max-width:100%` en media + mockup CRM responsive con `min-w-0`/
  `truncate`/sidebar `hidden sm:block`); contraste en "¿Qué problema estás teniendo?" con
  cards dark (ratios ~18:1 y ~14:1); todas las rutas en `bg-ink-900` + `PageHeader`.
- **Gobernanza (Sprint 7):** creada carpeta `/governance` con AGENTS, PROJECT_STATE, HANDOFF,
  PROJECT_MEMORY, CHANGELOG, DECISIONS.

## Qué quedó aprobado

- Estándar premium dark (#0B0F14 / #12161C) como identidad visual del sitio.
- Cards `variant="dark"` reutilizable en todas las secciones oscuras.
- Mockup del panel admin CRM = datos 100% ficticios (decisión fija en `docs/20-IPPON-CRM.md` §7).
- Idioma 100% español (es_ES), incluido el CRM.

## Qué quedó pendiente

- **Horario real de atención** en footer (hoy placeholder). Requiere dato del usuario.
- **Capturas reales del portal cliente Ippon** (anonimizadas, con consentimiento) para
  reemplazar/complementar el mockup en Desarrollo a medida + case study card.
- Emulación de viewport 360/393/428 en navegador headless no disponible en esta sesión
  (overflow resuelto por construcción; ver riesgo en PROJECT_STATE).

## Qué decisiones se tomaron

- DECISIÓN #016 (en `DECISIONS.md` y `docs/01-DECISIONES.md`): Premium = prioridad máxima;
  counter-up SSR-first con aria-label; evidencia CRM = mockup admin ficticio + portal real
  anonimizado solo con consentimiento; footer con horario/cobertura.
- Base dark `#0B0F14` (ink-900) para hero/headers/secciones dark; azul como acento.

## Qué documentos fueron modificados

- `docs/10-CHANGELOG.md` (alineación premium total + fixes).
- `docs/01-DECISIONES.md` (#016).
- `docs/20-IPPON-CRM.md` (§7 evidencia visual CRM).
- Componentes: Card (variant dark), PageHeader (eyebrow/children), Problemas, Confianza,
  Servicios, DesarrolloMedida, FormularioContacto, globals.css, tailwind.config.ts.
- Páginas: todas las top-level + [slug].

## Qué documentos deberán revisarse primero

1. `governance/AGENTS.md` → `PROJECT_STATE.md` → este `HANDOFF.md` → `DECISIONS.md`.
2. `docs/04-DESIGN-SYSTEM.md` (estándar visual).
3. `docs/03-ARQUITECTURA.md` (rutas/contenido).
4. `docs/20-IPPON-CRM.md` (si tocás la sección CRM).

## Qué deberá hacerse inmimmediatamente después

1. Si el usuario da el **horario real**, reemplazar el placeholder en `Footer.tsx`.
2. Si el usuario autoriza **capturas del portal Ippon** (consentimiento + anonimización),
   tomarlas y crear case study card en Desarrollo a medida.
3. Mantener el build verde (42 rutas) y la cohesión dark en cualquier nueva página.

---

*Próxima IA: no necesitás leer el chat. Con estos 6 archivos de `/governance` + `/docs`
podés continuar sin pérdida de contexto.*
