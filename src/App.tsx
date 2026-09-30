import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { ProductShowcase } from './components/ProductShowcase';
import { HowItWorks } from './components/HowItWorks';
import { IncludedContent } from './components/IncludedContent';
import { SocialProof } from './components/SocialProof';
import { Bonuses } from './components/Bonuses';
import { Offer } from './components/Offer';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AdminConfigBar } from './components/AdminConfigBar';
import { SITE_CONFIG } from './config/siteConfig';

export default function App() {
  const [showTestimonials, setShowTestimonials] = useState<boolean>(SITE_CONFIG.showTestimonials);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans antialiased overflow-x-hidden selection:bg-[#2563EB]/20 selection:text-[#1D4ED8]">
      {/* 1. TOP BAR DE URGENCIA */}
      <TopBar />

      <main className="flex-1 w-full">
        {/* 2. HERO AZUL */}
        <Hero />

        {/* 3. SECCIÓN DE BENEFICIOS (BLANCO) */}
        <Benefits />

        {/* 4. MIRA CÓMO QUEDA - CARRUSEL GALERÍA (#F8FAFC) */}
        <ProductShowcase />

        {/* 5. PASO A PASO - TIMELINE VERTICAL (BLANCO) */}
        <HowItWorks />

        {/* 6. DENTRO DEL KIT - LISTA Y DEMO (#F8FAFC) */}
        <IncludedContent />

        {/* 7. PRUEBA SOCIAL - CONDICIONAL CON SHOW_TESTIMONIALS (BLANCO) */}
        <SocialProof forceShow={showTestimonials} />

        {/* 8 & 9. BONOS EXCLUSIVOS Y CAJA DE VALOR (BLANCO) */}
        <Bonuses />

        {/* 10. PLANES DE CHECKOUT ($50 MXN Y $70 MXN) CON ORDER BUMP (#F8FAFC) */}
        <Offer />

        {/* 11. GARANTÍA DE 7 DÍAS (BLANCO) */}
        <Guarantee />

        {/* 12. DUDAS FRECUENTES (FAQ) (#F8FAFC) */}
        <FAQ />

        {/* 13. CTA FINAL (AZUL) */}
        <FinalCTA />
      </main>

      {/* 14. FOOTER OSCURO (#0F172A) */}
      <Footer />

      {/* Botón flotante discreto de ajustes de configuración */}
      <AdminConfigBar
        showTestimonialsState={showTestimonials}
        onToggleTestimonials={() => setShowTestimonials((prev) => !prev)}
      />
    </div>
  );
}
