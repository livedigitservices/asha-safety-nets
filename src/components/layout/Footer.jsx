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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800 font-sans">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-950 via-slate-800 to-[#EBAC57] flex items-center justify-center shadow-lg border border-[#EBAC57]/20">
                <Shield className="w-6 h-6 text-[#EBAC57] stroke-[2.5]" />
              </div>
              <div className="flex flex-col font-sans">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold text-white tracking-tight">ASHA</span>
                  <span className="text-xl font-extrabold text-[#EBAC57] tracking-tight">SAFETY NETS</span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">VIZAG • VISAKHAPATNAM</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed pr-4 font-sans">
              #1 Trusted safety net installation company serving <strong>Visakhapatnam (Vizag)</strong>. Specializing in high-tensile <strong>Garware HDPE Balcony Safety Nets</strong>, <strong>Pigeon Nets</strong>, <strong>Children Safety Nets</strong>, and <strong>Invisible SS Nets</strong> with 10 Years Guarantee.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 font-sans">
              <a
                href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs transition-colors hover:border-[#EBAC57]"
              >
                <Phone className="w-3.5 h-3.5 text-[#EBAC57]" />
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

            {/* Official Social Media Links Bar (Only WhatsApp, Instagram, Facebook) */}
            <div className="space-y-2 pt-3 border-t border-slate-800/80">
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                Follow & Connect With Us:
              </span>
              <div className="flex items-center gap-3 font-sans">
                {/* WhatsApp */}
                <a
                  href={getWhatsAppQuoteLink({ service: 'Footer Social Link', area: 'Vizag' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on WhatsApp"
                  className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center hover:bg-emerald-500 hover:text-slate-950 transition-all shadow-md group cursor-pointer"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 fill-current stroke-none" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/pigeon_safety_nets_in_pune?utm_source=qr&stkn=MmNtdHU4aGN4Yml3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-400 flex items-center justify-center hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all shadow-md group cursor-pointer"
                  title="Instagram"
                >
                  <svg className="w-5 h-5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/19jWK4RCiL/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-transparent transition-all shadow-md group cursor-pointer"
                  title="Facebook"
                >
                  <svg className="w-5 h-5 fill-current stroke-none" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3 font-sans">
            <h3 className="text-white font-bold text-base tracking-wide font-heading">Quick Navigation</h3>
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
                  <a href={item.href} className="hover:text-[#EBAC57] transition-colors flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EBAC57]"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-4 space-y-3 font-sans">
            <h3 className="text-white font-bold text-base tracking-wide font-heading">Safety Net Services in Vizag</h3>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs">
              {servicesData.map((svc) => (
                <a
                  key={svc.id}
                  href="#services"
                  className="hover:text-[#EBAC57] transition-colors text-slate-400 flex items-center gap-1 truncate"
                >
                  <span className="text-[#EBAC57]">›</span>
                  <span className="truncate">{svc.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Vizag Coverage Tags */}
        <div className="space-y-3 pt-4 font-sans">
          <h4 className="text-slate-300 font-bold text-xs uppercase tracking-wider">
            Visakhapatnam Neighborhood Service Coverage:
          </h4>
          <div className="flex flex-wrap gap-1.5 text-xs">
            {vizagAreasData.map((area) => (
              <span
                key={area.name}
                className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-[#EBAC57] hover:border-[#EBAC57]/40 transition-colors"
              >
                {area.name} Safety Nets
              </span>
            ))}
          </div>
        </div>

        {/* Local SEO Keyword Bar */}
        <div className="p-4 rounded-2xl bg-slate-850 border border-slate-800 text-[11px] text-slate-400 leading-relaxed space-y-1 font-sans">
          <p className="font-semibold text-slate-300">Top Vizag Local Searches Covered:</p>
          <p>
            Safety Nets in Vizag • Safety Nets in Visakhapatnam • Safety Net Installation Vizag • Balcony Safety Nets Vizag • Pigeon Safety Nets Vizag • Anti Bird Nets Vizag • Children Safety Nets Vizag • Kids Safety Nets Visakhapatnam • Cat Safety Nets Vizag • Pet Safety Nets Visakhapatnam • Invisible Safety Nets Vizag • Building Safety Nets Vizag • Duct Safety Nets Vizag • Sports Nets Vizag • Cricket Practice Nets Vizag
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-sans">
          <p>© {currentYear} Asha Safety Nets Vizag. All Rights Reserved. Garware Certified Partner.</p>

          <div className="flex items-center gap-4">
            <a href="#hero" onClick={handleScrollTop} className="hover:text-[#EBAC57] transition-colors flex items-center gap-1">
              <span>Back to top</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
