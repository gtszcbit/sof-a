import React from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

interface ImagePlaceholderProps {
  identifier: string;
  label?: string;
  aspectRatio?: '1:1' | '4:3' | '16:9' | '3:4';
  className?: string;
  theme?: 'light' | 'blue' | 'card';
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  identifier,
  label,
  aspectRatio = '1:1',
  className = '',
  theme = 'light',
}) => {
  // Si en el futuro el usuario coloca una URL real (http://, https://, o ruta local /...), la renderizamos directamente
  const isRealImage =
    identifier &&
    !identifier.startsWith('[') &&
    (identifier.startsWith('http') || identifier.startsWith('/') || identifier.startsWith('data:'));

  if (isRealImage) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${className}`}>
        <img
          src={identifier}
          alt={label || '100 Marcapáginas Cristianos'}
          className="w-full h-auto object-cover rounded-2xl block shadow-sm"
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Estilos según el tema (fondo blanco, azul del Hero, o gris claro de card)
  const themeStyles = {
    light: 'bg-white border-2 border-dashed border-slate-300 text-slate-700 shadow-sm',
    blue: 'bg-blue-800/40 border-2 border-dashed border-blue-300/40 text-white backdrop-blur-sm shadow-xl',
    card: 'bg-slate-100/90 border-2 border-dashed border-slate-300/80 text-slate-700',
  };

  const ratioStyles = {
    '1:1': 'aspect-square',
    '4:3': 'aspect-[4/3]',
    '16:9': 'aspect-video',
    '3:4': 'aspect-[3/4]',
  };

  return (
    <div
      className={`group relative flex flex-col items-center justify-center p-6 text-center transition-all duration-200 select-none overflow-hidden rounded-2xl ${themeStyles[theme]} ${ratioStyles[aspectRatio]} ${className}`}
      aria-label={`Espacio reservado para imagen: ${identifier}`}
    >
      {/* Patrón de fondo geométrico sutil */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(currentColor 1.5px, transparent 1.5px)`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* Ícono central */}
      <div className={`mb-3 p-3 rounded-xl transition-transform duration-200 group-hover:scale-105 ${
        theme === 'blue' ? 'bg-white/10 text-yellow-300' : 'bg-blue-50 text-blue-600'
      }`}>
        <ImageIcon className="w-8 h-8 stroke-[1.75]" />
      </div>

      {/* Identificador exacto solicitado */}
      <span className={`font-mono text-xs md:text-sm font-bold tracking-wider px-3 py-1 rounded-md mb-1.5 ${
        theme === 'blue'
          ? 'bg-blue-900/60 text-yellow-300 border border-yellow-300/30'
          : 'bg-slate-200/80 text-blue-700 border border-slate-300'
      }`}>
        {identifier}
      </span>

      {/* Título descriptivo si se proporciona */}
      {label && (
        <span className={`text-xs max-w-[85%] font-medium leading-relaxed ${
          theme === 'blue' ? 'text-blue-100' : 'text-slate-500'
        }`}>
          {label}
        </span>
      )}

      {/* Indicador de reemplazo amigable */}
      <div className={`mt-3 flex items-center gap-1 text-[11px] font-medium opacity-80 ${
        theme === 'blue' ? 'text-blue-200' : 'text-slate-400'
      }`}>
        <Sparkles className="w-3 h-3 text-amber-400" />
        <span>Espacio reservado para tu imagen</span>
      </div>
    </div>
  );
};
