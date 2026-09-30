import React from 'react';
import { IMAGES } from '../config/siteConfig';
import { ImagePlaceholder } from './ImagePlaceholder';
import { CheckoutButton } from './CheckoutButton';
import { Check } from 'lucide-react';

const includedList: string[] = [
  '100 marcapáginas cristianos',
  'Versículos inspirados en la Biblia',
  'Oraciones y mensajes de esperanza',
  'Diferentes diseños para imprimir',
  'Archivo digital en PDF',
  'Material listo para utilizar',
  'Ideal para regalar',
  'Ideal para iglesias y grupos de oración',
];

export const IncludedContent: React.FC = () => {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-[650px] mx-auto px-5 sm:px-6 text-center">
        {/* Etiqueta amarilla */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 mb-3.5">
          <span>📦 DENTRO DEL KIT</span>
        </div>

        {/* H2 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4 text-balance">
          Todo lo que recibirás
        </h2>

        {/* Descripción */}
        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-8 text-balance">
          Un material digital preparado para que puedas imprimir y compartir fácilmente.
        </p>

        {/* Imagen grande del kit */}
        <div className="w-full max-w-[480px] mx-auto mb-9">
          <div className="bg-white p-3 rounded-2xl shadow-md border border-slate-200/90">
            <ImagePlaceholder
              identifier={IMAGES.mainProduct}
              label="Colección Completa de 100 Marcapáginas en PDF de Alta Resolución"
              aspectRatio="4:3"
              theme="light"
              className="w-full"
            />
          </div>
        </div>

        {/* Lista de elementos con checkmarks circulares */}
        <div className="bg-white rounded-[20px] p-6 sm:p-7 shadow-xs border border-slate-200/80 mb-9 text-left">
          <div className="grid grid-cols-1 gap-3.5">
            {includedList.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-800">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="w-full max-w-[420px] mx-auto">
          <CheckoutButton scrollToId="oferta" variant="green" className="w-full">
            Quiero tener acceso
          </CheckoutButton>
        </div>
      </div>
    </section>
  );
};
