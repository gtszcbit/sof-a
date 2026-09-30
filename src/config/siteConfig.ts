/**
 * ===================================================================
 * CONFIGURACIÓN CENTRALIZADA DE LA LANDING PAGE
 * Modifica estos valores para personalizar precio, enlaces e imágenes
 * ===================================================================
 */

export const SITE_CONFIG = {
  // Información del Producto
  productName: "100 Marcapáginas Cristianos",
  headlineFirst: "100 Marcapáginas Cristianos",
  headlineSecond: "para llevar fe y esperanza a cualquier persona",
  subheadline:
    "Un hermoso recurso digital con versículos, oraciones y mensajes de esperanza, listo para imprimir y compartir.",

  // Precios y Moneda (Pesos Mexicanos - MXN)
  price: "70 MXN",
  oldPrice: "[OLD_PRICE]", // Ejemplo: "250 MXN"
  paymentType: "Pago único",

  // Plan Esencial ($50 MXN)
  basicPrice: "50 MXN",
  basicOldPrice: "100 MXN",
  basicCheckoutUrl: "https://xpag.global/pay/DVqUbaP9",

  // Oferta con descuento Order Bump / Downsell al hacer clic en Plan Esencial ($60 MXN)
  downsellPrice: "60 MXN",
  downsellCheckoutUrl: "https://xpag.global/pay/XN6OkB0i",

  // Enlaces de Acción (Checkout y Legales)
  checkoutUrl: "https://xpag.global/pay/QksdCqDD",
  privacyUrl: "[PRIVACY_URL]",
  termsUrl: "[TERMS_URL]",
  contactUrl: "[CONTACT_URL]",

  // Interruptores de visualización de secciones
  showUrgencyBar: true,
  showTestimonials: false, // Cambiar a true para mostrar la sección de pruebas sociales
  showBonuses: true,

  // Valores de la sección de Bonos y Oferta
  originalTotalValue: "$310 MXN",
  currentOfferValue: "70 MXN",

  bonusValues: {
    bonus01: "MXN$ 28,90 MXN$ 0,00",
    bonus02: "MXN$ 28,90 MXN$ 0,00",
    bonus03: "MXN$ 28,90 MXN$ 0,00",
    bonus04: "MXN$ 28,90 MXN$ 0,00",
    bonus05: "MXN$ 28,90 MXN$ 0,00",
  },
};

// Constantes directas requeridas
export const CHECKOUT_URL = SITE_CONFIG.checkoutUrl;
export const PRODUCT_PRICE = SITE_CONFIG.price;
export const OLD_PRICE = SITE_CONFIG.oldPrice;
export const BASIC_PRICE = SITE_CONFIG.basicPrice;
export const BASIC_OLD_PRICE = SITE_CONFIG.basicOldPrice;
export const BASIC_CHECKOUT_URL = SITE_CONFIG.basicCheckoutUrl;
export const DOWNSELL_PRICE = SITE_CONFIG.downsellPrice;
export const DOWNSELL_CHECKOUT_URL = SITE_CONFIG.downsellCheckoutUrl;
export const SHOW_TESTIMONIALS = SITE_CONFIG.showTestimonials;

/**
 * ===================================================================
 * PLACEHOLDERS Y RUTAS DE IMÁGENES
 * Para usar tus imágenes reales, simplemente cambia el string por la URL
 * o ruta local (ej. "/images/hero.png" o "https://...")
 * ===================================================================
 */
export const IMAGES = {
  hero: "/hero-product.jpg",
  product01: "/product-sample-01.jpg",
  product02: "/product-sample-02.jpg",
  product03: "/product-sample-03.jpg",
  product04: "/product-sample-04.jpg",
  product05: "/product-sample-05.jpg",
  mainProduct: "/main-collection-kit.jpg",
  bonus01: "/bonus-01.jpg",
  bonus02: "/bonus-02.jpg",
  bonus03: "/bonus-03.jpg",
  bonus04: "/bonus-04.jpg",
  bonus05: "/bonus-05.jpg",
  testimonial01: "[TESTIMONIAL_IMAGE_01]",
  testimonial02: "[TESTIMONIAL_IMAGE_02]",
  testimonial03: "[TESTIMONIAL_IMAGE_03]",
};
