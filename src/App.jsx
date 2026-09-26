import React, { useState } from 'react';
import { useLenisGSAP } from './hooks/useLenisGSAP';

// Layout
import TopHeader from './components/layout/TopHeader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import MobileBottomBar from './components/layout/MobileBottomBar';

// Sections
import Hero from './components/sections/Hero';
import QuickStatsBanner from './components/sections/QuickStatsBanner';
import BeforeAfterLens from './components/sections/BeforeAfterLens';
import AboutSection from './components/sections/AboutSection';
import ServicesGrid from './components/sections/ServicesGrid';
import WhyChooseUs from './components/sections/WhyChooseUs';
import SafetyQuality from './components/sections/SafetyQuality';
import ProcessTimeline from './components/sections/ProcessTimeline';
import ServiceAreasVizag from './components/sections/ServiceAreasVizag';
import CustomerReviews from './components/sections/CustomerReviews';
import FAQSection from './components/sections/FAQSection';
import QuoteContactSection from './components/sections/QuoteContactSection';
import FinalCTA from './components/sections/FinalCTA';

export default function App() {
  // Sync GSAP ScrollTrigger with Lenis Smooth Scroll
  useLenisGSAP();

  const [activeQuoteService, setActiveQuoteService] = useState('');

  const handleOpenQuote = (serviceName = '') => {
    setActiveQuoteService(serviceName || 'Balcony Safety Nets');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Top Notification Header */}
      <TopHeader />

      {/* Main Frosted Light Navbar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Page Content */}
      <main className="flex-1 space-y-4">
        <Hero onOpenQuoteModal={() => handleOpenQuote()} />
        <QuickStatsBanner />
        
        {/* Modern Interactive Balcony Visual Inspector */}
        <BeforeAfterLens onOpenQuoteModal={() => handleOpenQuote()} />

        <AboutSection />
        <ServicesGrid onOpenQuoteModal={(svc) => handleOpenQuote(svc)} />
        <WhyChooseUs />
        <SafetyQuality />
        <ProcessTimeline onOpenQuoteModal={() => handleOpenQuote()} />
        <ServiceAreasVizag onOpenQuoteModal={() => handleOpenQuote()} />
        <CustomerReviews />
        <FAQSection />
        <QuoteContactSection presetService={activeQuoteService} />
        <FinalCTA onOpenQuoteModal={() => handleOpenQuote()} />
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Floating Action Widgets */}
      <FloatingWhatsApp />
      <MobileBottomBar onOpenQuoteModal={() => handleOpenQuote()} />
    </div>
  );
}
