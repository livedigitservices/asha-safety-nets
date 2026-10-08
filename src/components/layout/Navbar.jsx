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
    <header className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
      scrolled 
        ? 'border-b border-slate-200/90 shadow-md py-2.5' 
        : 'border-b border-slate-100 py-3 sm:py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#264595] via-slate-900 to-[#EBAC57] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-amber-400/30">
            <Shield className="w-6 h-6 text-[#EBAC57] stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-sans">
              <span className="text-xl font-extrabold text-slate-950 tracking-tight font-heading">ASHA</span>
              <span className="text-xl font-extrabold text-[#264595] tracking-tight font-heading">SAFETY NETS</span>
            </div>
            <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase">VIZAG • VISAKHAPATNAM</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-sans">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold text-slate-700 hover:text-[#264595] hover:bg-slate-50 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3 font-sans">
          <a
            href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#264595]" />
            <span>Call Now</span>
          </a>

          <button
            onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : handleNavClick({ preventDefault: () => {} }, '#contact')}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 bg-[#EBAC57] hover:bg-[#EB7D1D] hover:text-white shadow-md shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Get Free Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button (Dark Square matching reference UI) */}
        <div className="flex items-center gap-2 lg:hidden font-sans">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-md bg-[#18181B] text-white hover:bg-black focus:outline-none shadow-sm transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl font-sans animate-fadeIn">
          <div className="grid grid-cols-2 gap-1.5 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-100 transition-colors"
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
              <Phone className="w-4 h-4 text-[#264595]" />
              <span>Call {DISPLAY_PHONE}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuoteModal) onOpenQuoteModal();
                else handleNavClick({ preventDefault: () => {} }, '#contact');
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-extrabold text-slate-950 bg-[#EBAC57] hover:bg-[#EB7D1D] hover:text-white shadow-md"
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
