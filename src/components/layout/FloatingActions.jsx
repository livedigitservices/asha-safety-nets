import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { DISPLAY_PHONE, getWhatsAppQuoteLink } from '../../utils/whatsapp';

export default function FloatingActions() {
  const whatsappUrl = getWhatsAppQuoteLink({ service: 'Floating WhatsApp Click', area: 'Vizag' });
  const rawPhone = DISPLAY_PHONE.replace(/\s+/g, '');

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3.5 items-end pointer-events-auto select-none font-sans">
      
      {/* Floating Call Button */}
      <a
        href={`tel:${rawPhone}`}
        aria-label={`Call Asha Safety Nets at ${DISPLAY_PHONE}`}
        title="Call Now"
        className="group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#264595] hover:bg-[#1b326d] text-white flex items-center justify-center shadow-xl shadow-blue-950/40 border-2 border-white/30 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <span className="absolute right-full mr-2.5 px-2.5 py-1 rounded-lg bg-slate-900/90 text-white text-[11px] font-bold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md hidden sm:block border border-slate-700">
          Call {DISPLAY_PHONE}
        </span>
        <Phone className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300 fill-white/20" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Asha Safety Nets Vizag"
        title="Chat on WhatsApp"
        className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 border-2 border-white/30 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        {/* Subtle Pulse Animation Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30 pointer-events-none"></span>

        <span className="absolute right-full mr-2.5 px-2.5 py-1 rounded-lg bg-slate-900/90 text-white text-[11px] font-bold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md hidden sm:block border border-slate-700">
          Chat on WhatsApp
        </span>
        
        <WhatsAppIcon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
      </a>

    </div>
  );
}
