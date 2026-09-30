import React, { useState, useRef, useEffect, useCallback } from 'react';
import { IMAGES } from '../config/siteConfig';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ShowcaseItem {
  identifier: string;
  title: string;
  subtitle: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    identifier: IMAGES.product01,
    title: 'Diseño Muestra 01',
    subtitle: 'Versículos bíblicos de fortaleza y paz',
  },
  {
    identifier: IMAGES.product02,
    title: 'Diseño Muestra 02',
    subtitle: 'Mensajes de gratitud y bendición diaria',
  },
  {
    identifier: IMAGES.product03,
    title: 'Diseño Muestra 03',
    subtitle: 'Oraciones para momentos de necesidad',
  },
  {
    identifier: IMAGES.product04,
    title: 'Diseño Muestra 04',
    subtitle: 'Promesas de fe para la familia y el hogar',
  },
  {
    identifier: IMAGES.product05,
    title: 'Diseño Muestra 05',
    subtitle: 'Detalles especiales para regalar en la iglesia',
  },
];

export const ProductShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? showcaseItems.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === showcaseItems.length - 1 ? 0 : prev + 1));
  }, []);

  // Soporte de Swipe táctil en móvil
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="bg-[#F8FAFC] py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-[650px] mx-auto px-5 sm:px-6 text-center">
        {/* Etiqueta */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#1D4ED8] border border-blue-200/60 mb-3.5">
          <span>👀 MIRA CÓMO QUEDA</span>
        </div>

        {/* H2 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4 text-balance">
          Descubre algunos de los diseños incluidos
        </h2>

        {/* Descripción */}
        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-8 text-balance">
          Una muestra del material que recibirás para imprimir y compartir.
        </p>

        {/* CARRUSEL / GALERÍA */}
        <div
          className="relative w-full max-w-[480px] mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Card Principal de la Muestra */}
          <div className="bg-white rounded-[20px] p-4 sm:p-5 shadow-lg border border-slate-200/80 transition-all duration-300">
            {/* Contenedor del carrusel con animación de deslizamiento lateral (slide) */}
            <div className="overflow-hidden rounded-[16px] bg-slate-50 mb-4 select-none">
              <div
                className="flex transition-transform duration-500 ease-out will-change-transform"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {showcaseItems.map((item, idx) => (
                  <div key={idx} className="w-full shrink-0">
                    <ImagePlaceholder
                      identifier={item.identifier}
                      label={`${item.title} — ${item.subtitle}`}
                      aspectRatio="3:4"
                      theme="light"
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Título del marcapáginas actual */}
            <div className="flex items-center justify-between px-1">
              <div className="text-left transition-opacity duration-300">
                <span className="text-xs font-bold text-blue-600 block">
                  Muestra {currentIndex + 1} de {showcaseItems.length}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-800">
                  {showcaseItems[currentIndex].title}
                </h3>
                <p className="text-xs text-slate-500">
                  {showcaseItems[currentIndex].subtitle}
                </p>
              </div>

              {/* Botones de navegación prev/next */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Diseño anterior"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-xs"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Siguiente diseño"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-xs"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Indicadores de página (Dots) */}
          <div className="flex items-center justify-center gap-2 mt-5" role="tablist" aria-label="Navegación de carrusel">
            {showcaseItems.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ver diseño ${idx + 1}`}
                aria-selected={currentIndex === idx}
                role="tab"
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-7 bg-[#1D4ED8]'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Indicador para deslizar */}
          <p className="mt-3 text-xs text-slate-400 font-medium">
            Desliza hacia el lado para ver más →
          </p>
        </div>
      </div>
    </section>
  );
};
