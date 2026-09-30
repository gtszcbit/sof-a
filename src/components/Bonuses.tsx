import React from 'react';
import { SITE_CONFIG, IMAGES } from '../config/siteConfig';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Sparkles, Gift } from 'lucide-react';

interface BonusItem {
  number: number;
  tag: string;
  imageIdentifier: string;
  title: string;
  description: string;
  value: string;
}

const bonusesData: BonusItem[] = [
  {
    number: 1,
    tag: '1° BONO',
    imageIdentifier: IMAGES.bonus01,
    title: '1° bono',
    description: 'Base para marcapáginas: plantillas listas para personalizar y regalar en PDF de alta resolución.',
    value: SITE_CONFIG.bonusValues.bonus01,
  },
  {
    number: 2,
    tag: '2° BONO',
    imageIdentifier: IMAGES.bonus02,
    title: '2° bono',
    description: 'Lectómetro marcapáginas: acompaña tu lectura diaria y transforma cada página en un hábito constante.',
    value: SITE_CONFIG.bonusValues.bonus02,
  },
  {
    number: 3,
    tag: '3° BONO',
    imageIdentifier: IMAGES.bonus03,
    title: '3° bono',
    description: 'Marca páginas inspiracionales: lleva contigo palabras de fe, ánimo y esperanza en cada una de tus lecturas.',
    value: SITE_CONFIG.bonusValues.bonus03,
  },
  {
    number: 4,
    tag: '4° BONO',
    imageIdentifier: IMAGES.bonus04,
    title: '4° bono',
    description: 'Plan de lectura bíblica en 30 días: guía devocional imprimible con versículos y reflexiones para renovar tu fe.',
    value: SITE_CONFIG.bonusValues.bonus04,
  },
  {
    number: 5,
    tag: '5° BONO',
    imageIdentifier: IMAGES.bonus05,
    title: '5° bono',
    description: 'Tarjetas de oración y promesas: colección de promesas bíblicas de bolsillo listas para orar y compartir en familia.',
    value: SITE_CONFIG.bonusValues.bonus05,
  },
];

export const Bonuses: React.FC = () => {
  if (!SITE_CONFIG.showBonuses) return null;

  return (
    <section className="bg-white py-16 md:py-20 border-b border-slate-100">
      <div className="max-w-[650px] mx-auto px-5 sm:px-6 text-center">
        {/* Etiqueta */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3.5">
          <span>🎁 OFERTA ESPECIAL</span>
        </div>

        {/* H2 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4 text-balance">
          Bonos exclusivos
        </h2>

        {/* Descripción */}
        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-10 text-balance">
          Materiales adicionales para complementar tu experiencia.
        </p>

        {/* 3 CARDS DE BONOS EDITABLES */}
        <div className="flex flex-col gap-6 text-left mb-10">
          {bonusesData.map((bonus) => (
            <div
              key={bonus.number}
              className="bg-[#F8FAFC] border border-slate-200/90 rounded-[20px] p-5 sm:p-6 shadow-sm relative overflow-hidden"
            >
              {/* Etiqueta verde BONO X */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1 bg-[#22C55E] text-white text-xs font-extrabold px-3 py-1 rounded-lg tracking-wide shadow-xs">
                  <Gift className="w-3.5 h-3.5" />
                  {bonus.tag}
                </span>

                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block font-medium">Valor del bono:</span>
                  <span className="text-xs sm:text-sm font-bold font-mono text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200 inline-flex items-center gap-1.5">
                    <span className="line-through text-slate-400 font-medium">MXN$ 28,90</span>
                    <span className="text-emerald-600 font-extrabold">MXN$ 0,00</span>
                  </span>
                </div>
              </div>

              {/* Imagen grande del bono */}
              <div className="bg-white rounded-xl p-2 mb-4 border border-slate-200/80">
                <ImagePlaceholder
                  identifier={bonus.imageIdentifier}
                  label={`Material descargable: ${bonus.title}`}
                  aspectRatio="16:9"
                  theme="light"
                  className="w-full"
                />
              </div>

              {/* Título y descripción */}
              <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-1.5 font-mono">
                {bonus.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-mono">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>

        {/* SECCIÓN 15: CAJA DESTACADA DE VALOR */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-[20px] p-6 sm:p-8 text-center shadow-md">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white mb-3">
            <Sparkles className="w-3 h-3 text-yellow-300" />
            <span>VALOR TOTAL DE LOS EXTRAS</span>
          </div>

          <p className="text-sm sm:text-base font-semibold text-slate-700 mb-4 text-balance">
            Recibe todo junto dentro de esta oferta especial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 pt-2 border-t border-blue-200/60 font-mono">
            <div className="text-slate-500 text-sm">
              <span>Valor original: </span>
              <span className="line-through font-bold text-slate-600">
                {SITE_CONFIG.originalTotalValue}
              </span>
            </div>
            <div className="text-base sm:text-lg font-extrabold text-[#1D4ED8] bg-white px-4 py-1.5 rounded-xl border border-blue-200 shadow-xs">
              <span className="text-xs text-slate-500 font-sans font-medium mr-1.5">
                Hoy incluido con tu compra de:
              </span>
              <span>{SITE_CONFIG.currentOfferValue}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
