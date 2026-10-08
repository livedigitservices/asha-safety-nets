import React from 'react';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { getWhatsAppQuoteLink } from '../../utils/whatsapp';

export default function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppQuoteLink({ service: 'General Safety Net Inquiry', area: 'Vizag' });

  return (
    <div className="fixed bottom-20 md:bottom-8 right-5 z-40 flex items-center gap-3">
      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Asha Safety Nets Vizag"
        className="relative group w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30"></span>
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
