import React from 'react';
import { Shield, Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppQuoteLink } from '../../utils/whatsapp';
import { servicesData } from '../../data/servicesData';
import { vizagAreasData } from '../../data/vizagAreasData';

export default function Footer({ onOpenQuoteModal }) {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-sm pt-16 pb-24 md:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Top Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold text-white tracking-tight">ASHA</span>
                  <span className="text-xl font-extrabold text-sky-400 tracking-tight">SAFETY NETS</span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">VIZAG • VISAKHAPATNAM</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              #1 Trusted safety net installation company serving <strong>Visakhapatnam (Vizag)</strong>. Specializing in high-tensile <strong>Garware HDPE Balcony Safety Nets</strong>, <strong>Pigeon Nets</strong>, <strong>Children Safety Nets</strong>, and <strong>Invisible SS Nets</strong> with 10 Years Guarantee.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs transition-colors hover:border-sky-500"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>{DISPLAY_PHONE}</span>
              </a>

              <a
                href={getWhatsAppQuoteLink({ service: 'Footer Quick Inquiry', area: 'Vizag' })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-xs hover:bg-emerald-500/20 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Instant WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white font-bold text-base tracking-wide">Quick Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'About Asha Safety Nets', href: '#about' },
                { name: 'Our Safety Net Services', href: '#services' },
                { name: 'Cost / Sq. Ft. Calculator', href: '#calculator' },
                { name: 'Why Choose Us', href: '#why-us' },
                { name: 'Technical & Safety Specs', href: '#safety-quality' },
                { name: 'Vizag Service Areas', href: '#vizag-areas' },
                { name: 'Customer Testimonials', href: '#reviews' },
                { name: 'Frequently Asked Questions', href: '#faq' },
                { name: 'Contact & Free Site Visit', href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-sky-400 transition-colors flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-sky-500"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-white font-bold text-base tracking-wide">Safety Net Services in Vizag</h3>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs">
              {servicesData.map((svc) => (
                <a
                  key={svc.id}
                  href="#services"
                  className="hover:text-sky-400 transition-colors text-slate-400 flex items-center gap-1 truncate"
                >
                  <span className="text-sky-500/70">›</span>
                  <span className="truncate">{svc.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Vizag Coverage Tags */}
        <div className="space-y-3 pt-4">
          <h4 className="text-slate-300 font-bold text-xs uppercase tracking-wider">
            Visakhapatnam Neighborhood Service Coverage:
          </h4>
          <div className="flex flex-wrap gap-1.5 text-xs">
            {vizagAreasData.map((area) => (
              <span
                key={area.name}
                className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-sky-300 hover:border-sky-500/40 transition-colors"
              >
                {area.name} Safety Nets
              </span>
            ))}
          </div>
        </div>

        {/* Local SEO Keyword Bar */}
        <div className="p-4 rounded-2xl bg-slate-850 border border-slate-800 text-[11px] text-slate-400 leading-relaxed space-y-1">
          <p className="font-semibold text-slate-300">Top Vizag Local Searches Covered:</p>
          <p>
            Safety Nets in Vizag • Safety Nets in Visakhapatnam • Safety Net Installation Vizag • Balcony Safety Nets Vizag • Pigeon Safety Nets Vizag • Anti Bird Nets Vizag • Children Safety Nets Vizag • Kids Safety Nets Visakhapatnam • Cat Safety Nets Vizag • Pet Safety Nets Visakhapatnam • Invisible Safety Nets Vizag • Building Safety Nets Vizag • Duct Safety Nets Vizag • Sports Nets Vizag • Cricket Practice Nets Vizag
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Asha Safety Nets Vizag. All Rights Reserved. Garware Certified Partner.</p>

          <div className="flex items-center gap-4">
            <a href="#hero" onClick={handleScrollTop} className="hover:text-sky-400 transition-colors flex items-center gap-1">
              <span>Back to top</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
