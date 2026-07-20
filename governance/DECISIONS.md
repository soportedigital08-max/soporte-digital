# DECISIONS.md — Registro único de decisiones estratégicas

> Cada decisión: ID · Fecha · Título · Contexto · Decisión · Justificación · Impacto ·
> Estado · Documentos afectados.
> Nunca modificar una decisión aprobada. Solo agregar nuevas o marcar reemplazo.

---

## D-001
- Fecha: 2026-07-19
- Título: Premium como prioridad máxima del proyecto
- Contexto: El sitio funcionaba pero se percibía "de generación anterior" en las rutas
  interiores vs la home rediseñada.
- Decisión: La percepción PREMIUM es la prioridad por encima de cualquier otra ítem. Todas
  las rutas deben alcanzar el estándar de la home (dark #0B0F14, Space Grotesk + Inter, cards
  dark con hover-elevación, Reveal fade-up, WhatsApp flotante, sin overflow).
- Justificación: La autoridad percibida es el principal driver de conversión; incongruencia
  visual resta credibilidad.
- Impacto: Guió Sprint 6 (alineación total) y Sprint 7 (gobernanza). Estándar visual unificado.
- Estado: Aprobada / Vigente
- Documentos afectados: docs/04-DESIGN-SYSTEM.md, docs/10-CHANGELOG.md, todos los componentes
  y páginas, governance/AGENTS.md, governance/PROJECT_STATE.md

## D-002
- Fecha: 2026-07-19
- Título: Evidencia visual del CRM Ippon — mockup ficticio vs captura real
- Contexto: Se requiere evidencia visual del CRM en la sección "Desarrollo a medida", pero
  exponer datos reales de un cliente de terceros es riesgoso.
- Decisión: DECISIÓN FIJA — Panel ADMIN = mockup recreado con datos 100% ficticios (mismo look
  real, cero datos/estructura reales expuestos). Portal del CLIENTE = captura real anonimizada
  SOLO con consentimiento del cliente; si no hay consentimiento/anonimización verificable, se
  usa mockup.
- Justificación: Premium = autoridad sin exponer datos de terceros. Protege al cliente y al
  proyecto legalmente.
- Impacto: Sección Desarrollo a medida usa mockup admin ficticio; portal real pendiente de
  consentimiento. Ver docs/20-IPPON-CRM.md §7.
- Estado: Aprobada / Vigente (decisión fija)
- Documentos afectados: docs/20-IPPON-CRM.md (§7), src/components/sections/DesarrolloMedida.tsx,
  governance/PROJECT_MEMORY.md (restricciones conceptuales)

## D-003
- Fecha: 2026-07-19
- Título: Idioma 100% español (es_ES), incluido el CRM
- Contexto: El usuario detecta y reporta cualquier string en inglés inmediatamente.
- Decisión: Todo el sitio, dashboard CRM, portal y emails en español (es_ES). No usar es_AR
  (solo 1% traducido en el theme Houzez).
- Justificación: El usuario lo exige como hard requirement; coherencia de marca local.
- Impacto: Strings en inglés = bug a corregir. Aplica a todo nuevo contenido.
- Estado: Aprobada / Vigente
- Documentos afectados: todos los archivos de contenido, governance/AGENTS.md (never do)

## D-004
- Fecha: 2026-07-19
- Título: Memoria del proyecto vive en documentación, no en el chat
- Contexto: El trabajo dependía del contexto del chat; riesgo de pérdida de continuidad.
- Decisión: Crear `/governance` (AGENTS, PROJECT_STATE, HANDOFF, PROJECT_MEMORY, CHANGELOG,
  DECISIONS). Toda IA arranca por esos 6 archivos. Nunca leer conversaciones para estado.
- Justificación: Independencia de sesión; cualquier IA continúa en <2 min leyendo la memoria.
- Impacto: Proyecto autónomo de la conversación. Flujo de trabajo obligatorio definido.
- Estado: Aprobada / Vigente
- Documentos afectados: governance/* (todos)

---

*Para decisiones técnicas históricas ver docs/01-DECISIONES.md. Este archivo es la fuente de
verdad estratégica y prevalece en conflicto.*
