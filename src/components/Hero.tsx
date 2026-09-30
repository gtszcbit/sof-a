import React from 'react';
import { IMAGES, PRODUCT_PRICE } from '../config/siteConfig';
import { ImagePlaceholder } from './ImagePlaceholder';
import { CheckoutButton } from './CheckoutButton';
import { Sparkles, Download, Check } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#1D4ED8] text-white pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Patrón de fondo muy sutil de puntos/cruces */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.45) 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-[650px] mx-auto px-5 sm:px-6 flex flex-col items-center text-center">

        {/* HEADLINE PRINCIPAL */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance mb-5">
          100 Marcapáginas Cristianos{' '}
          <span className="text-[#FACC15] block sm:inline font-extrabold">
            para llevar fe y esperanza
          </span>{' '}
          a cualquier persona
        </h1>

        {/* SUBHEADLINE */}
        <p className="text-base sm:text-lg text-blue-100 font-normal leading-relaxed max-w-[540px] text-balance mb-8">
          Un hermoso recurso digital con versículos, oraciones y mensajes de esperanza, listo para imprimir y compartir.
        </p>

        {/* IMAGEN PRINCIPAL (HERO_PRODUCT_IMAGE) */}
        <div className="w-full max-w-[420px] mb-8">
          <div className="relative p-2 sm:p-2.5 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
            <ImagePlaceholder
              identifier={IMAGES.hero}
              label="100 Marcapáginas Cristianos - Colección Digital en PDF lista para imprimir"
              aspectRatio="1:1"
              theme="blue"
              className="w-full shadow-inner"
            />
          </div>
        </div>

        {/* BADGES RÁPIDOS DE CONFIANZA */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-blue-100 font-medium mb-7">
          <span className="inline-flex items-center gap-1.5 bg-blue-900/50 backdrop-blur-xs px-3 py-1 rounded-full border border-blue-400/30">
            <Download className="w-3.5 h-3.5 text-[#FACC15]" />
            Descarga Inmediata en PDF
          </span>
          <span className="inline-flex items-center gap-1.5 bg-blue-900/50 backdrop-blur-xs px-3 py-1 rounded-full border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
            Solo ${PRODUCT_PRICE}
          </span>
        </div>

        {/* CTA PRINCIPAL */}
        <div className="w-full max-w-[460px]">
          <CheckoutButton scrollToId="oferta" variant="green" className="w-full py-4 text-lg">
            Quiero mis 100 Marcapáginas
          </CheckoutButton>
        </div>

        {/* Micro-texto de tranquilidad */}
        <p className="mt-3.5 text-xs text-blue-200/90 flex items-center justify-center gap-2">
          <span>🔒 Pago 100% seguro</span>
          <span>·</span>
          <span>⚡ Acceso instantáneo</span>
          <span>·</span>
          <span>🛡️ Garantía de 7 días</span>
        </p>
      </div>
    </section>
  );
};
