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
  price: "170 MXN",
  oldPrice: "[OLD_PRICE]", // Ejemplo: "250 MXN"
  paymentType: "Pago único",

  // Plan Esencial ($65 MXN)
  basicPrice: "65 MXN",
  basicOldPrice: "100 MXN",
  basicCheckoutUrl: "https://xpag.global/pay/xDGTuTl3",

  // Oferta con descuento Order Bump / Downsell al hacer clic en Plan Esencial ($100 MXN)
  downsellPrice: "100 MXN",
  downsellCheckoutUrl: "https://xpag.global/pay/RtudpS9e",

  // Enlaces de Acción (Checkout y Legales)
  checkoutUrl: "https://xpag.global/pay/4AsWJZy9",
  privacyUrl: "[PRIVACY_URL]",
  termsUrl: "[TERMS_URL]",
  contactUrl: "[CONTACT_URL]",

  // Interruptores de visualización de secciones
  showUrgencyBar: true,
  showTestimonials: false, // Cambiar a true para mostrar la sección de pruebas sociales
  showBonuses: true,

  // Valores de la sección de Bonos y Oferta
  originalTotalValue: "$310 MXN",
  currentOfferValue: "170 MXN",

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
  hero: "/src/assets/images/hero_marcapaginas_es_1790727518532.jpg",
  product01: "/src/assets/images/product_sample_one_1790716699532.jpg",
  product02: "/src/assets/images/product_sample_two_v2_1790717050162.jpg",
  product03: "/src/assets/images/product_sample_three_1790717156578.jpg",
  product04: "/src/assets/images/product_sample_four_1790717236799.jpg",
  product05: "/src/assets/images/product_sample_five_1790717349782.jpg",
  mainProduct: "/src/assets/images/main_collection_kit_1790719575540.jpg",
  bonus01: "/src/assets/images/bonus_one_base_1790720086553.jpg",
  bonus02: "/src/assets/images/bonus_two_lectometro_1790720591063.jpg",
  bonus03: "/src/assets/images/bonus_three_marcapaginas_1790720800103.jpg",
  bonus04: "/src/assets/images/bonus_four_planlectura_1790720992938.jpg",
  bonus05: "/src/assets/images/bonus_five_oraciones_1790721005408.jpg",
  testimonial01: "[TESTIMONIAL_IMAGE_01]",
  testimonial02: "[TESTIMONIAL_IMAGE_02]",
  testimonial03: "[TESTIMONIAL_IMAGE_03]",
};
