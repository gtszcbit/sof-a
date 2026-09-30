# Guía de Edición y Personalización — 100 Marcapáginas Cristianos

Esta landing page fue construida con una arquitectura limpia, modular y centralizada para que puedas personalizar cualquier aspecto sin tocar código complejo.

---

## 1. Configuración Central (`src/config/siteConfig.ts`)

En el archivo `src/config/siteConfig.ts` encontrarás todas las variables principales del sitio:

```typescript
export const SITE_CONFIG = {
  productName: "100 Marcapáginas Cristianos",
  
  // Precio y Moneda (Pesos Mexicanos)
  price: "99 MXN",
  oldPrice: "$199 MXN", // o tu precio anterior deseado
  paymentType: "Pago único",

  // Enlace a tu pasarela de pago (Hotmart, Stripe, Mercado Pago, etc.)
  checkoutUrl: "https://tu-enlace-de-pago-aqui.com",

  // Enlaces legales del footer
  privacyUrl: "https://tusitio.com/privacidad",
  termsUrl: "https://tusitio.com/terminos",
  contactUrl: "mailto:soporte@tucorreo.com",

  // Control de secciones
  showUrgencyBar: true,       // Barra superior de urgencia
  showTestimonials: false,     // Cambia a true para mostrar testimonios reales
  showBonuses: true,          // Sección de bonos adicionales

  // Valores de los bonos
  originalTotalValue: "$299 MXN",
  currentOfferValue: "99 MXN",
  bonusValues: {
    bonus01: "$99 MXN",
    bonus02: "$79 MXN",
    bonus03: "$99 MXN",
  },
};
```

---

## 2. Reemplazo de Imágenes

Todas las imágenes se gestionan desde el objeto `IMAGES` en `src/config/siteConfig.ts`. 

Para colocar tus propias imágenes reales, simplemente reemplaza los placeholders por la URL pública o la ruta local en la carpeta `/public`:

```typescript
export const IMAGES = {
  hero: "https://tusitio.com/marcapaginas-portada.jpg", // o "/images/hero.jpg"
  product01: "/images/muestra-01.jpg",
  product02: "/images/muestra-02.jpg",
  product03: "/images/muestra-03.jpg",
  product04: "/images/muestra-04.jpg",
  product05: "/images/muestra-05.jpg",
  mainProduct: "/images/kit-completo.jpg",
  bonus01: "/images/bono-01.jpg",
  bonus02: "/images/bono-02.jpg",
  bonus03: "/images/bono-03.jpg",
  testimonial01: "/images/whatsapp-review-1.jpg",
  testimonial02: "/images/whatsapp-review-2.jpg",
  testimonial03: "/images/whatsapp-review-3.jpg",
};
```

El componente `ImagePlaceholder` detectará automáticamente que es una imagen real y la renderizará con proporciones y bordes perfectos.

---

## 3. Enlace de Checkout

Todos los botones de compra de la página están conectados automáticamente a `CHECKOUT_URL`. Una vez que coloques tu link en `checkoutUrl`, todos los botones redirigirán a tus compradores instantáneamente a la pantalla de pago.

---

## 4. Estructura de Secciones

1. **TopBar**: Barra superior de urgencia discreta con temporizador/aviso.
2. **Hero**: Encabezado de alto impacto con fondo azul `#1D4ED8`, placeholder para tu logotipo, llamada principal y CTA.
3. **Benefits**: 3 tarjetas de beneficios clave con diseño limpio.
4. **ProductShowcase**: Carrusel interactivo "Mira cómo queda" con swipe en móvil, flechas y puntos de navegación.
5. **HowItWorks**: Línea de tiempo vertical de 3 pasos ("Descarga", "Imprime", "Regala y comparte").
6. **IncludedContent**: Detalle de todo lo que incluye el kit con lista de checkmarks y botón de compra.
7. **SocialProof**: Sección preparada para capturas de WhatsApp o reseñas reales (activable con `showTestimonials: true`).
8. **Bonuses & Value**: Tarjetas de bonos editables y resumen de valor total de los extras.
9. **Offer**: Tarjeta grande de oferta destacada con el precio oficial de **$99 MXN**.
10. **Guarantee**: Garantía incondicional de satisfacción de 7 días.
11. **FAQ**: 8 preguntas frecuentes con acordeones interactivos y fluidos.
12. **FinalCTA**: Última oportunidad de conversión antes del pie de página.
13. **Footer**: Pie de página oscuro con badges de compra segura, enlaces legales y copyright 2026.
