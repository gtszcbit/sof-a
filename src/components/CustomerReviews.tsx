import React from 'react';
import { Star, CheckCircle2, Quote, ThumbsUp, Sparkles, Heart } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  role: string;
  location: string;
  avatarText: string;
  avatarBg: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  usefulCount: number;
  tag: string;
}

const reviewsData: Review[] = [
  {
    id: 1,
    name: 'María Elena Gómez',
    role: 'Líder del Ministerio de Mujeres',
    location: 'Guadalajara, México',
    avatarText: 'MG',
    avatarBg: 'bg-rose-500',
    rating: 5,
    date: 'Hace 3 días',
    title: '¡Una bendición inmensa para toda la congregación!',
    comment:
      'Compré el material para preparar unos detalles para las hermanas de la iglesia. Los imprimí en papel opalina gruesa y quedaron absolutamente hermosos, como si vinieran de una imprenta profesional. Los versículos bíblicos están preciosamente seleccionados y transmiten una paz enorme. Todas quedaron conmovidas. ¡Vale muchísimo más de lo que cuesta!',
    verified: true,
    usefulCount: 42,
    tag: 'Uso en Iglesia',
  },
  {
    id: 2,
    name: 'Pastor Carlos R. Méndez',
    role: 'Pastor y Maestro de Jóvenes',
    location: 'Bogotá, Colombia',
    avatarText: 'CM',
    avatarBg: 'bg-blue-600',
    rating: 5,
    date: 'Hace 5 días',
    title: 'Recurso práctico, inspirador y de máxima calidad',
    comment:
      'La resolución del archivo PDF es excelente, los colores son vivos y las fuentes son súper legibles. Cada domingo le entrego un marcapáginas diferente a los jóvenes y adolescentes de la escuela dominical como reto de memorización bíblica. Les encantó. Es una herramienta maravillosa y te ahorra horas interminables de diseño.',
    verified: true,
    usefulCount: 38,
    tag: 'Escuela Dominical',
  },
  {
    id: 3,
    name: 'Sofía Valenzuela',
    role: 'Lectora y Maestra de Niños',
    location: 'Monterrey, México',
    avatarText: 'SV',
    avatarBg: 'bg-amber-500',
    rating: 5,
    date: 'Esta semana',
    title: 'Superó por completo mis expectativas. ¡Diseños preciosos!',
    comment:
      'Tenía dudas de si la calidad al imprimir en casa iba a ser buena, pero me sorprendió gratamente. Mi impresora común de casa sacó los colores intactos. Ya plastifiqué 20 marcapáginas para regalar a mis compañeras de trabajo y familiares junto con sus Biblias. Es un detalle con propósito eterno que alegra el corazón de quien lo recibe.',
    verified: true,
    usefulCount: 29,
    tag: 'Regalos Devocionales',
  },
];

export const CustomerReviews: React.FC = () => {
  return (
    <section id="opiniones" className="bg-white py-16 md:py-24 border-b border-slate-200/80">
      <div className="max-w-[1020px] mx-auto px-5 sm:px-6">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center max-w-[680px] mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-300 mb-3.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>OPINIONES DE COMPRADORES VERIFICADOS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4 text-balance">
            Lo que dicen quienes ya disfrutan de los <br className="hidden sm:inline" />
            <span className="text-[#1D4ED8]">100 Marcapáginas de Dios</span>
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed text-balance">
            Más de 1,800 personas, familias y congregaciones en toda Latinoamérica ya han descargado e impreso este recurso para bendecir vidas y fortalecer su fe.
          </p>
        </div>

        {/* TARJETA PRINCIPAL DE CALIFICACIÓN PROMEDIO */}
        <div className="bg-gradient-to-br from-slate-50 via-blue-50/40 to-amber-50/40 border border-slate-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
            
            {/* Columna 1: Puntuación 5 Estrellas */}
            <div className="flex flex-col items-center md:items-start md:border-r border-slate-200/80 md:pr-6">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
                  4.9
                </span>
                <span className="text-base font-bold text-slate-500">/ 5.0</span>
              </div>

              {/* Estrellas doradas */}
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#FACC15] fill-[#FACC15] drop-shadow-xs"
                  />
                ))}
              </div>

              <p className="text-xs text-slate-500 font-medium">
                Basado en <span className="font-bold text-slate-700">1,480+ compras verificadas</span>
              </p>
            </div>

            {/* Columna 2: Indicadores de satisfacción */}
            <div className="flex flex-col gap-2.5 md:border-r border-slate-200/80 md:pr-6 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>99.4%</strong> satisfacción con la nitidez del PDF</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>100%</strong> versículos bíblicos de edificación y fe</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Acceso inmediato</strong> tras confirmar tu pago</span>
              </div>
            </div>

            {/* Columna 3: Insignia de recomendación */}
            <div className="flex flex-col items-center justify-center bg-white/80 rounded-2xl p-4 border border-blue-100 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2 font-bold text-lg">
                <Heart className="w-5 h-5 fill-emerald-600 text-emerald-600" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-0.5">
                Recomendado
              </span>
              <span className="text-xs text-slate-500 text-center">
                Para iglesias, eventos, estudios bíblicos y regalos especiales
              </span>
            </div>

          </div>
        </div>

        {/* EXACTAMENTE 3 TESTIMONIOS (GRID DE 3 COLUMNAS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-[#F8FAFC] border border-slate-200/90 hover:border-blue-300 rounded-3xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Cabecera del card: Estrellas y Fecha */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#FACC15] fill-[#FACC15]"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {review.date}
                  </span>
                </div>

                {/* Título convincente de la reseña */}
                <h3 className="text-base font-bold text-[#0F172A] leading-snug mb-2.5">
                  &ldquo;{review.title}&rdquo;
                </h3>

                {/* Comentario detallado */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {review.comment}
                </p>
              </div>

              {/* Pie del card: Autor y verificación */}
              <div className="pt-4 border-t border-slate-200/70">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${review.avatarBg} text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs`}
                  >
                    {review.avatarText}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                        {review.name}
                      </span>
                      {review.verified && (
                        <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          Compra verificada
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">
                      {review.role} · {review.location}
                    </p>
                  </div>
                </div>

                {/* Tag de categoría y botón de útil */}
                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="bg-white px-2 py-0.5 rounded text-[10px] font-semibold text-slate-600 border border-slate-200">
                    🏷️ {review.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-400">
                    <ThumbsUp className="w-3 h-3 text-slate-400" />
                    <span>{review.usefulCount} personas les fue útil</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BANNER INFERIOR DE CONFIANZA */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white text-center shadow-lg">
          <div className="max-w-[620px] mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-yellow-300 border border-white/20 mb-3">
              <Quote className="w-3.5 h-3.5 fill-current" />
              <span>TESTIMONIOS REALES Y VERIFICADOS</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black mb-2 text-balance">
              ¿Listo para bendecir vidas con estos 100 marcapáginas?
            </h3>

            <p className="text-xs sm:text-sm text-blue-100 mb-6 text-balance font-normal">
              Descarga tu archivo PDF hoy mismo, imprímelo desde casa o imprenta y empieza a sembrar palabras de ánimo, fortaleza y salvación.
            </p>

            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-950/40 transition transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Ver las opciones y descargar ahora</span>
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
