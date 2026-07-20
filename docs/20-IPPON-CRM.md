# CRM IPPON GROUP — Sistema de Gestión de Dojo

> Proyecto SEPARADO de Soporte Digital. Alojado en hosting propio del cliente.
> Revisión técnica: 2026-07-18 (acceso de administrador, solo lectura para documentar).

---

## 1. Identidad

- **Nombre:** Ippon Group — Judo Olavarría — Sistema de Gestión
- **URL:** https://ippongroup.com.ar
- **Tipo:** Sistema web de gestión para un dojo de artes marciales (Judo / Taekwondo / Gimnasio / Acondicionamiento).
- **Acceso:** login con email + contraseña. Dos perfiles: **Administrador** y **Socio**.
- **Integración de pago:** **Mercado Pago conectado** (los socios pagan online desde su panel; los pagos se integran automáticamente al registro).

---

## 2. Perfil ADMINISTRADOR

Panel con barra lateral y 8 secciones:

### 2.1 Socios
- Lista de miembros (nombre, email, plan, estado ACTIVO/INACTIVO, clases disponibles).
- Búsqueda por nombre o email.
- Botón **"+ Nuevo socio"** y **"Ver"** por socio (ficha individual).
- Planes observados en producción:
  - Plan Classic (tkd/judo) — $36.000
  - Plan Premium (judo) — 12 clases
  - Plan familiar x2 (10% desc) — $64.800
  - Gym + Arte marcial (10% desc) — $61.200
  - Pase libre de gym — $36.000
  - Acondicionamiento físico / Mix de movimiento — $32.000–$40.000
  - Sin plan (prospectos)

### 2.2 Profesores
- Gestión de profesores (sección presente en el menú; detalle no documentado en esta revisión).

### 2.3 Pagos
- Registro de cobros con: socio, plan/concepto, monto, método (Transferencia / Efectivo / Mercadopago), estado (Pendiente / Aprobado / Anulado), fecha.
- **Botón "Exportar Excel"** y **"+ Registrar pago"**.
- Filtros por estado.
- Totales en vivo: Registros, Total cobrado (vista actual), Pendientes.
- Ejemplo observado: 34 registros, $1.136.000 cobrado, 0 pendientes (corte de revisión).

### 2.4 Clases
- Gestión de horarios / clases (sección presente; detalle no documentado en esta revisión).

### 2.5 Finanzas
- Panel de salud financiera:
  - **HOY:** Caja Diaria.
  - **MES ACTUAL:** Ingresos del mes.
  - **HISTÓRICO:** Total recaudado.
  - **RENDIMIENTO MENSUAL:** promedio por pago y transacciones.
- Integra Mercado Pago automáticamente.

### 2.6 Asistencia
- Registros de presencia por fecha (selector día/mes/año + botón "Filtrar" y "+ Registrar").

### 2.7 Rutinas
- Gestión de rutinas (sección presente; detalle no documentado en esta revisión).

### 2.8 Configuración
- Ajustes generales del sistema (sección presente; detalle no documentado en esta revisión).

---

## 3. Perfil SOCIO (portal del alumno)

Accesible desde "Ver como socio". El alumno ve:
- **Reservar una clase** (ver horarios disponibles).
- **Mis reservas** (ver todas sus clases).
- **Mis pagos** (historial de pagos, con pago online vía Mercado Pago).
- **Mi perfil** (editar sus datos).

---

## 4. Arquitectura (inferida desde el frontend)

- Aplicación web SPA (single page app) con navegación por secciones.
- Backend con base de datos relacional (socios, pagos, asistencia, clases, rutinas, profesores).
- Pasarela de pago: Mercado Pago (webhooks / API para sincronizar cobros).
- Roles: Administrador (CRUD completo) y Socio (solo lectura de sus datos + reservas + pagos).
- Alojado en hosting compartido (cPanel-style) en ippongroup.com.ar.

---

## 5. Estado de la revisión 2026-07-18

- [x] Acceso de admin funcional (credenciales provistas correctas tras corregir dominio a ippongroup.com.ar).
- [x] Mapeadas secciones: Socios, Pagos, Finanzas, Asistencia, y portal de Socio.
- [ ] Detalle fino de: Profesores, Clases, Rutinas, Configuración (no explorado a fondo).
- [ ] No se modificó ningún dato; revisión solo lectura.

---

## 6. Notas de seguridad

- La contraseña de admin fue compartida por chat. **Recomendado rotarla** tras esta revisión.
- El dominio del usuario provisto originalmente traía doble "g" (ipponggroup.com.ar); el correcto es ippongroup.com.ar (una g). Verificar que no haya cuentas duplicadas.

---

## 7. DECISIÓN FIJA — Evidencia visual en el sitio de Soporte Digital

Acordado 2026-07-19 (prioridad: percepción premium, sin exponer datos reales del cliente):

- **Panel ADMIN (Ippon Group):** se muestra como **mockup recreado con datos 100% ficticios**.
  Mismo look/estilo real del sistema (barra lateral, secciones, Mercado Pago), pero
  **cero datos ni estructura reales expuestos** (no se usan capturas del admin real, no se
  muestran nombres, montos ni planes reales del cliente).
- **Portal del CLIENTE final (socio):** se usa **captura real anonimizada**, solo con
  **consentimiento** del cliente. Toda información identificable debe difuminarse/borrarse
  antes de publicar. Si no hay consentimiento explícito o anonimización verificable, NO se
  publica captura del portal real; se usa mockup.
- **Origen de las imágenes:** `public/ippon/` — mockups propios (SVG/HTML) recreados, no
  capturas de producción con datos vivos.
- Esta decisión prevalece sobre cualquier otro criterio de "mostrar el sistema real".

### Estado de implementación
- [x] Decisión registrada.
- [x] Mockup del panel admin recreado (datos ficticios) en Desarrollo a medida.
- [ ] Captura real del portal socio: pendiente de consentimiento + anonimización.
