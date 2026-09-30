import React from 'react';
import { Shield } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="bg-white py-14 md:py-18 border-b border-slate-100">
      <div className="max-w-[650px] mx-auto px-5 sm:px-6">
        {/* Tarjeta de Garantía */}
        <div className="bg-emerald-50/70 border-2 border-emerald-300 rounded-[20px] p-6 sm:p-8 text-center shadow-xs">
          {/* Ícono de escudo */}
          <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4 text-3xl shadow-xs">
            🛡️
          </div>

          {/* Título */}
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2.5">
            Garantía de 7 días
          </h3>

          {/* Texto */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-[500px] mx-auto text-balance">
            Tu compra está protegida durante 7 días. Si el producto no es lo que esperabas,
            podrás solicitar la devolución de acuerdo con las condiciones de la oferta.
          </p>
        </div>
      </div>
    </section>
  );
};
