import React, { useState } from 'react';
import {
  PRODUCT_PRICE,
  OLD_PRICE,
  BASIC_PRICE,
  BASIC_OLD_PRICE,
  BASIC_CHECKOUT_URL,
  DOWNSELL_PRICE,
  SITE_CONFIG,
} from '../config/siteConfig';
import { CheckoutButton } from './CheckoutButton';
import { OrderBumpModal } from './OrderBumpModal';
import { Check, X as XIcon, ShieldCheck } from 'lucide-react';

export const Offer: React.FC = () => {
  const [isOrderBumpOpen, setIsOrderBumpOpen] = useState(false);

  const handleChooseBasic = () => {
    // Siempre muestra la oferta especial de $70 MXN con opción de comprar la de $55 MXN
    setIsOrderBumpOpen(true);
  };

  return (
    <section id="oferta" className="bg-[#F8FAFC] py-16 md:py-24 border-b border-slate-200/80">
      <div className="max-w-[1020px] mx-auto px-5 sm:px-6 text-center">
        {/* Etiqueta */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#1D4ED8] border border-blue-200/60 mb-3.5">
          <span>💙 OFERTA ESPECIAL</span>
        </div>

        {/* H2 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-4 text-balance">
          Elige el plan ideal para ti
        </h2>

        {/* Descripción */}
        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-10 text-balance max-w-[600px] mx-auto">
          Descarga inmediata en PDF de alta resolución, listo para imprimir, regalar y compartir bendición.
        </p>

        {/* CONTENEDOR DE LAS 2 CAJAS DE CHECKOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch text-left mb-10">
          
          {/* CAJA 1: PLAN ESENCIAL ($55 MXN) */}
          <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-dashed border-slate-300 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="mb-5 text-center sm:text-left">
                <h3 className="text-2xl font-black text-[#0F172A] mb-1">
                  Plan Esencial
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Colección de marcapáginas en PDF versión base
                </p>
              </div>

              {/* Bloque de Precio Plan Esencial */}
              <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-5 border border-slate-200/80 mb-6 text-center">
                <div className="text-xs sm:text-sm text-slate-400 font-semibold mb-1">
                  <span>De </span>
                  <span className="line-through font-mono font-bold text-slate-500">
                    ${BASIC_OLD_PRICE}
                  </span>
                </div>

                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-2xl font-extrabold text-blue-600">$</span>
                  <span className="text-4xl sm:text-5xl font-black text-blue-600 tracking-tight">
                    {BASIC_PRICE.replace('MXN', '').replace('$', '').trim()}
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold text-blue-600">MXN</span>
                </div>

                <p className="text-xs font-semibold text-slate-500 mt-1">
                  Pago único con tarjeta
                </p>
              </div>

              {/* Lista de características */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    Colección de 100 marcapáginas en PDF versión base
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    Archivos listos de alta calidad para imprimir
                  </span>
                </div>

                <div className="flex items-start gap-3 opacity-60">
                  <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                    <XIcon className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="text-sm text-slate-500 line-through">
                    Los 5 bonos adicionales de apoyo
                  </span>
                </div>

                <div className="flex items-start gap-3 opacity-60">
                  <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                    <XIcon className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="text-sm text-slate-500 line-through">
                    Acceso a recursos devocionales exclusivos
                  </span>
                </div>

                <div className="flex items-start gap-3 opacity-60">
                  <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                    <XIcon className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="text-sm text-slate-500 line-through">
                    Soporte prioritario por WhatsApp
                  </span>
                </div>
              </div>
            </div>

            {/* Botón Plan Esencial */}
            <div>
              <button
                type="button"
                onClick={handleChooseBasic}
                className="w-full py-4 px-6 rounded-2xl border-2 border-blue-600 bg-white hover:bg-blue-50 text-blue-600 font-bold text-base sm:text-lg transition shadow-xs cursor-pointer flex items-center justify-center"
              >
                Elegir este
              </button>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-400 font-medium text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Pago único · Acceso digital inmediato</span>
              </div>
            </div>
          </div>

          {/* CAJA 2: PLAN COMPLETO VIP ($140 MXN) */}
          <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-blue-600 overflow-hidden flex flex-col justify-between">
            {/* Badge superior derecho */}
            <div className="absolute top-0 right-0 bg-[#1D4ED8] text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider shadow-xs">
              ACCESO COMPLETO
            </div>

            <div>
              <div className="mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  COLECCIÓN DIGITAL EN PDF
                </span>
                <h3 className="text-2xl font-black text-[#0F172A]">
                  100 Marcapáginas de Dios
                </h3>
                <p className="text-xs text-blue-700 font-bold mt-1">
                  ⭐ Paquete VIP Todo Incluido · Máximo Ahorro
                </p>
              </div>

              {/* Bloque de Precio */}
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 mb-6 text-center">
                <div className="text-xs sm:text-sm text-slate-400 font-semibold mb-1">
                  <span>Precio regular: </span>
                  <span className="line-through font-mono font-bold text-slate-500">
                    {OLD_PRICE === '[OLD_PRICE]' ? 'De $250 MXN' : OLD_PRICE}
                  </span>
                </div>

                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-2xl font-extrabold text-[#1D4ED8]">$</span>
                  <span className="text-4xl sm:text-5xl font-black text-[#1D4ED8] tracking-tight">
                    {PRODUCT_PRICE.replace('MXN', '').replace('$', '').trim()}
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#1D4ED8]">MXN</span>
                </div>

                <p className="text-xs font-bold text-emerald-600 mt-1 uppercase tracking-wide">
                  {SITE_CONFIG.paymentType}
                </p>
              </div>

              {/* Lista de características completas */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    <strong>Colección completa:</strong> 100 marcapáginas de Dios listos
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    Versículos, oraciones y mensajes de esperanza
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    PDF de <strong>máxima resolución (300 DPI)</strong> listo para imprimir
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    <span className="text-emerald-700 font-bold">🎁 Los 5 bonos adicionales</span> exclusivos de regalo
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    <strong>Acceso a recursos devocionales</strong> y plan de lectura bíblica
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    <strong>Licencia de uso libre:</strong> iglesias, eventos, jóvenes y regalos
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    <strong>Soporte prioritario por WhatsApp</strong> para tus impresiones
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    <strong>Acceso vitalicio:</strong> descargas ilimitadas e inmediatas
                  </span>
                </div>
              </div>
            </div>

            {/* Botón Verde de Compra Completa */}
            <div>
              <div className="w-full">
                <CheckoutButton
                  checkoutUrl="https://xpag.global/pay/8AqR546H"
                  variant="green"
                  className="w-full py-4 text-base sm:text-lg"
                >
                  Quiero recibir el material
                </CheckoutButton>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Transacción cifrada y protegida · Entrega digital automática</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL DE ORDER BUMP / DOWNSELL CON DESCUENTO */}
      <OrderBumpModal
        isOpen={isOrderBumpOpen}
        onClose={() => setIsOrderBumpOpen(false)}
        vipPrice={DOWNSELL_PRICE}
        vipOldPrice={PRODUCT_PRICE}
        basicPrice={BASIC_PRICE}
      />
    </section>
  );
};
