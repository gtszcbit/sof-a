import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { ShieldCheck, Zap, Lock, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{ title: string; urlKey: string; urlVal: string } | null>(null);

  const handleLegalClick = (e: React.MouseEvent, title: string, urlKey: string, urlVal: string) => {
    if (urlVal.startsWith('http://') || urlVal.startsWith('https://')) {
      return; // Permite navegación normal
    }
    e.preventDefault();
    setActiveModal({ title, urlKey, urlVal });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-[650px] mx-auto px-5 sm:px-6 text-center">
        {/* Nombre del producto */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2.5">
          {SITE_CONFIG.productName}
        </h3>

        {/* Descripción */}
        <p className="text-xs sm:text-sm text-slate-400 max-w-[480px] mx-auto leading-relaxed mb-7 text-balance">
          Un recurso digital para compartir fe, esperanza y mensajes inspirados en la Palabra de Dios.
        </p>

        {/* Pequeños Badges de Confianza */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs text-slate-300 font-medium mb-8">
          <span className="inline-flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/80">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            Compra segura
          </span>
          <span className="inline-flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/80">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Acceso digital
          </span>
          <span className="inline-flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/80">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            Garantía de 7 días
          </span>
        </div>

        {/* Línea divisoria */}
        <hr className="border-slate-800 mb-7" />

        {/* Links Legales */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400 font-medium mb-6">
          <a
            href={SITE_CONFIG.privacyUrl}
            onClick={(e) =>
              handleLegalClick(e, 'Política de Privacidad', 'privacyUrl', SITE_CONFIG.privacyUrl)
            }
            className="hover:text-white transition-colors"
          >
            Política de Privacidad
          </a>
          <span>·</span>
          <a
            href={SITE_CONFIG.termsUrl}
            onClick={(e) =>
              handleLegalClick(e, 'Términos de Uso', 'termsUrl', SITE_CONFIG.termsUrl)
            }
            className="hover:text-white transition-colors"
          >
            Términos de Uso
          </a>
          <span>·</span>
          <a
            href={SITE_CONFIG.contactUrl}
            onClick={(e) =>
              handleLegalClick(e, 'Contacto', 'contactUrl', SITE_CONFIG.contactUrl)
            }
            className="hover:text-white transition-colors"
          >
            Contacto
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-500">
          © 2026 — Todos los derechos reservados.
        </p>
      </div>

      {/* Modal para links configurables */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="bg-slate-900 border border-slate-700 text-slate-200 rounded-2xl max-w-sm w-full p-6 relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <h4 className="text-white font-bold text-base mb-2">{activeModal.title}</h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Este enlace está actualmente asignado como placeholder:
            </p>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 font-mono text-xs text-yellow-400 mb-4">
              {activeModal.urlVal}
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Puedes actualizar la URL en <code className="text-blue-400">src/config/siteConfig.ts</code> en la propiedad{' '}
              <code className="text-blue-400">{activeModal.urlKey}</code>.
            </p>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
