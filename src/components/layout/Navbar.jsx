import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Phone, ArrowRight, Calculator } from 'lucide-react';
import { DISPLAY_PHONE } from '../../utils/whatsapp';

export default function Navbar({ onOpenQuoteModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Safety Specs', href: '#safety-quality' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md py-3' 
        : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/60 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-sky-500 to-teal-400 flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <Shield className="w-6 h-6 text-white stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">ASHA</span>
              <span className="text-xl font-extrabold text-sky-600 tracking-tight">SAFETY NETS</span>
            </div>
            <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase">VIZAG • VISAKHAPATNAM</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                link.highlight 
                  ? 'text-sky-700 bg-sky-50 border border-sky-200 hover:bg-sky-100' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {link.highlight && <Calculator className="w-3.5 h-3.5 text-sky-600" />}
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-sky-600" />
            <span>Call Now</span>
          </a>

          <button
            onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : handleNavClick({ preventDefault: () => {} }, '#contact')}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-sky-600 via-sky-500 to-teal-500 hover:from-sky-700 hover:to-teal-600 shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Get Free Quote</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : handleNavClick({ preventDefault: () => {} }, '#contact')}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-sm"
          >
            Free Quote
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-1.5 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                  link.highlight 
                    ? 'text-sky-700 bg-sky-50 border border-sky-200 col-span-2 text-center font-bold' 
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>Call {DISPLAY_PHONE}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuoteModal) onOpenQuoteModal();
                else handleNavClick({ preventDefault: () => {} }, '#contact');
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-600 to-teal-500 shadow-md"
            >
              <span>Book Free On-Site Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
