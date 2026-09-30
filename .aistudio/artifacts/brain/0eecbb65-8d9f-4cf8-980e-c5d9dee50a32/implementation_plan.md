# Confirmación y Optimización Visual de la Imagen Principal

Plan de consolidación y verificación para la imagen del producto en la landing page de **100 Marcapáginas Cristianos**, asegurando que todos los textos, imágenes y elementos de conversión permanezcan 100% en español.

## User Review & Critical Decisions

> [!IMPORTANT]
> **Decisión confirmada por el usuario:**
> - Se mantiene la imagen actual cargada por el usuario (`/hero-product.jpg`) debido a que todo su contenido visual, bíblico y tipográfico ya se encuentra redactado completamente en español (*"Marcapáginas Cristianos"*, *"Palabras que fortalecen tu fe, todos los días"*, *"Santa Biblia"*, versículos de Jeremías, Filipenses, Juan, Proverbios y notas inspiradoras).

---

## 1. Overview & Core Concept

- **Objetivo**: Garantizar una presentación visual impecable, nítida y perfectamente alineada al idioma español en el Hero de la landing page.
- **Audiencia Objetivo**: Familias cristianas, iglesias, grupos de oración, ministerios y creyentes en México que buscan recursos de fe digitales listos para imprimir y compartir.
- **Valor Principal**: El visitante entiende en menos de 5 segundos la alta calidad estética del recurso digital descargable que recibirá por **$99 MXN**.

---

## 2. User Experience & Visual Design

- **Hero Framing**:
  - Contenedor con borde suave, efecto de elevación y desenfoque translúcido (`backdrop-blur`) en tono azul ultramar (`#1D4ED8`).
  - Imagen en alta resolución (`/hero-product.jpg`), con proporción natural y carga prioritaria (`loading="eager"`), sin recortes que comprometan la legibilidad de los versículos.
- **Etiquetas y Micro-copys en Español**:
  - Portada: *"100 Marcapáginas Cristianos (Colección Digital en PDF)"*.
  - Badges de confianza: *"Descarga Inmediata en PDF"*, *"Solo $99 MXN"*, *"Pago 100% seguro"*, *"Acceso instantáneo"*, *"Garantía de 7 días"*.
  - Llamado a la acción: *"Quiero mis 100 Marcapáginas"* en verde de alta conversión (`#22C55E`).

---

## 3. Key Product Decisions & Trade-Offs

- **Decisión 1: Conservar el arte provisto por el usuario**
  - *Enfoque*: Vincular permanentemente el archivo local de alta resolución servido por Vite en `/hero-product.jpg`.
  - *Razón*: El diseño cuenta con un arte detallado, portada de Santa Biblia, 5 diseños con flores y paisajes, notas de café y libreta, y versículos en español validados.
  - *Alternativas*: Regenerar mediante IA alteraría el estilo artístico que el usuario ya seleccionó y aprobó.

- **Decisión 2: Configuración centralizada mantenible**
  - *Enfoque*: Mantener la referencia en `src/config/siteConfig.ts` bajo `IMAGES.hero = "/hero-product.jpg"`.
  - *Razón*: Permite al usuario intercambiar la imagen en cualquier momento futuro con solo cambiar una línea de código.

---

## 4. Technical Architecture & Component Diagram

```
┌────────────────────────────────────────────────────────┐
│                   Vite Dev Server                      │
│        (Port 3000 / Cloud Run Proxy Nginx)             │
└───────────────────────────┬────────────────────────────┘
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
┌───────────────────────────┐ ┌──────────────────────────┐
│       public/             │ │   src/config/            │
│    hero-product.jpg       │ │   siteConfig.ts          │
│ (Imagen 1024x1024 en ES)  │ │ (IMAGES.hero = ...)      │
└─────────────┬─────────────┘ └───────────┬──────────────┘
              │                           │
              └─────────────┬─────────────┘
                            ▼
              ┌───────────────────────────┐
              │   src/components/Hero.tsx │
              │  ┌─────────────────────┐  │
              │  │  ImagePlaceholder   │  │
              │  │  (Real Image Mode)  │  │
              │  └─────────────────────┘  │
              │  ┌─────────────────────┐  │
              │  │   CheckoutButton    │  │
              │  └─────────────────────┘  │
              └───────────────────────────┘
```

---

## 5. Verification & Acceptance Criteria

1. **Verificación Visual**: La imagen principal carga de forma inmediata y nítida en el Hero sin parpadeos ni placeholders vacíos.
2. **Consistencia Lingüística**: 100% de los textos de la página y de la imagen están en español neutro para México.
3. **Build & Lint**: Compilación TypeScript limpia sin errores ni advertencias (`compile_applet` y `lint_applet` aprobados).
