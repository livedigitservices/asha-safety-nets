import React, { useState } from 'react';
import { useLenisGSAP } from './hooks/useLenisGSAP';

// Layout
import TopHeader from './components/layout/TopHeader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingActions from './components/layout/FloatingActions';

// Sections
import Hero from './components/sections/Hero';
import BranchesSection from './components/sections/BranchesSection';
import QuickStatsBanner from './components/sections/QuickStatsBanner';
import BeforeAfterLens from './components/sections/BeforeAfterLens';
import AboutSection from './components/sections/AboutSection';
import ServicesGrid from './components/sections/ServicesGrid';
import WhyChooseUs from './components/sections/WhyChooseUs';
import SafetyQuality from './components/sections/SafetyQuality';
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
    <div className="min-h-screen bg-[#FDFBF7] text-slate-900 flex flex-col font-sans selection:bg-[#D4AF37] selection:text-slate-950">
      {/* Top Notification Header */}
      <TopHeader />

      {/* Main Frosted Light Navbar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Page Content */}
      <main className="flex-1 space-y-4">
        <Hero onOpenQuoteModal={() => handleOpenQuote()} />
        <BranchesSection onOpenQuoteModal={(svc) => handleOpenQuote(svc)} />
        <QuickStatsBanner />
        
        {/* Modern Interactive Balcony Visual Inspector */}
        <BeforeAfterLens onOpenQuoteModal={() => handleOpenQuote()} />

        <AboutSection />
        <ServicesGrid onOpenQuoteModal={(svc) => handleOpenQuote(svc)} />
        <WhyChooseUs />
        <SafetyQuality />
        <ServiceAreasVizag onOpenQuoteModal={() => handleOpenQuote()} />
        <CustomerReviews />
        <FAQSection />
        <QuoteContactSection presetService={activeQuoteService} />
        <FinalCTA onOpenQuoteModal={() => handleOpenQuote()} />
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Floating Action Buttons (Floating Call & WhatsApp) */}
      <FloatingActions />
    </div>
  );
}
