import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { DISPLAY_PHONE, getWhatsAppQuoteLink } from '../../utils/whatsapp';

export default function MobileBottomBar({ onOpenQuoteModal }) {
  const whatsappUrl = getWhatsAppQuoteLink({ service: 'Quick Quote', area: 'Vizag' });

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-slate-800 p-2.5 backdrop-blur-lg flex items-center gap-2 shadow-2xl font-sans">
      <a
        href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-bold text-sm hover:bg-slate-700 transition-colors"
      >
        <Phone className="w-4 h-4 text-[#EBAC57]" />
        <span>Call Now</span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/30"
      >
        <WhatsAppIcon className="w-4 h-4 text-white" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenQuoteModal}
        className="px-3.5 py-3 rounded-xl bg-[#EBAC57] hover:bg-[#EB7D1D] text-slate-950 font-extrabold text-xs shadow-md"
      >
        Quote
      </button>
    </div>
  );
}
