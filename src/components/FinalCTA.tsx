import React from 'react';
import { CheckoutButton } from './CheckoutButton';
import { Sparkles, Heart } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative bg-[#1D4ED8] text-white py-16 md:py-24 overflow-hidden">
      {/* Patrón de puntos sutil */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.45) 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-[650px] mx-auto px-5 sm:px-6 text-center">
        {/* Pequeña insignia superior */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-yellow-300 border border-white/20 mb-4 backdrop-blur-xs">
          <Heart className="w-3.5 h-3.5 fill-current text-rose-400" />
          <span>Lleva bendición y ánimo</span>
        </div>

        {/* Título */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
          Comparte un pequeño mensaje de fe
        </h2>

        {/* Texto */}
        <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed max-w-[520px] mx-auto mb-9 text-balance">
          Recibe tus 100 Marcapáginas Cristianos y empieza a compartir versículos, oraciones y mensajes de esperanza.
        </p>

        {/* Botón Verde */}
        <div className="w-full max-w-[420px] mx-auto">
          <CheckoutButton scrollToId="oferta" variant="green" className="w-full py-4.5 text-lg">
            Quiero mis 100 Marcapáginas
          </CheckoutButton>
        </div>

        {/* Micro-texto de seguridad */}
        <div className="mt-5 flex items-center justify-center gap-3 text-xs text-blue-200/80">
          <span>⚡ Descarga digital inmediata</span>
          <span>·</span>
          <span>🛡️ Garantía de 7 días</span>
        </div>
      </div>
    </section>
  );
};
