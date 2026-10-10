import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="bg-white py-6 sm:py-8 border-b border-slate-100">
      <div className="max-w-[520px] mx-auto px-5 sm:px-6">
        {/* Tarjeta de Garantía compacta */}
        <div className="bg-emerald-50/70 border border-emerald-300/80 rounded-2xl p-4 sm:p-5 text-center shadow-xs">
          {/* Ícono de escudo */}
          <div className="w-10 h-10 rounded-xl bg-white border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-2.5 shadow-xs">
            <ShieldCheck className="w-5 h-5 text-emerald-600 stroke-[2.5]" />
          </div>

          {/* Título */}
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1.5">
            Garantía incondicional de 7 días
          </h3>

          {/* Texto */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-[440px] mx-auto text-balance">
            Tu compra está 100% protegida durante 7 días. Si el producto no es lo que esperabas,
            podrás solicitar tu reembolso sin complicaciones.
          </p>
        </div>
      </div>
    </section>
  );
};
