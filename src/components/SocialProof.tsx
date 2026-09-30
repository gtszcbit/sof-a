import React, { useState } from 'react';
import { IMAGES, SHOW_TESTIMONIALS } from '../config/siteConfig';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SocialProofProps {
  forceShow?: boolean;
}

const testimonialPlaceholders = [
  {
    identifier: IMAGES.testimonial01,
    label: 'Captura de pantalla de mensaje / testimonio de WhatsApp 01',
  },
  {
    identifier: IMAGES.testimonial02,
    label: 'Captura de pantalla de mensaje / testimonio de WhatsApp 02',
  },
  {
    identifier: IMAGES.testimonial03,
    label: 'Captura de pantalla de mensaje / testimonio de WhatsApp 03',
  },
];

export const SocialProof: React.FC<SocialProofProps> = ({ forceShow = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si SHOW_TESTIMONIALS es false y no está forzado en previsualización, no se renderiza nada
  if (!SHOW_TESTIMONIALS && !forceShow) {
    return null;
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialPlaceholders.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonialPlaceholders.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-16 md:py-20 border-b border-slate-100">
      <div className="max-w-[650px] mx-auto px-5 sm:px-6 text-center">
        {/* Etiqueta */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 mb-3.5">
          <span>⭐ EXPERIENCIAS REALES</span>
        </div>

        {/* H2 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4 text-balance">
          Personas compartiendo mensajes de fe
        </h2>

        {/* Descripción */}
        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-10 text-balance">
          Descubre algunos comentarios y experiencias de personas que ya recibieron el material.
        </p>

        {/* Carrusel de testimonios */}
        <div className="relative max-w-[440px] mx-auto">
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-[20px] p-4 shadow-sm">
            <ImagePlaceholder
              identifier={testimonialPlaceholders[currentIndex].identifier}
              label={testimonialPlaceholders[currentIndex].label}
              aspectRatio="4:3"
              theme="card"
              className="w-full"
            />
          </div>

          {/* Navegación */}
          <div className="flex items-center justify-between mt-4 px-2">
            <button
              onClick={prev}
              aria-label="Testimonio anterior"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-50 transition-colors shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonialPlaceholders.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Testimonio ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === i ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Siguiente testimonio"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-50 transition-colors shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
