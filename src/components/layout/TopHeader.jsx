import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, MessageCircle } from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppQuoteLink } from '../../utils/whatsapp';

export default function TopHeader() {
  return (
    <div className="bg-[#0B0F19] text-white text-xs py-2.5 px-4 sm:px-8 hidden md:block border-b border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
        {/* Left Side */}
        <div className="flex items-center gap-6 font-sans">
          <div className="flex items-center gap-2 text-[#EBAC57] font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#EBAC57] shrink-0" />
            <span>Serving All Over <strong>Vizag (Visakhapatnam)</strong> & Surroundings</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Mon - Sun: 8:00 AM - 9:00 PM</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6 font-sans font-medium">
          <div className="flex items-center gap-1.5 bg-[#EBAC57] text-slate-950 px-3.5 py-1 rounded-full font-extrabold shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-950" />
            <span>10 Years Written Warranty</span>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 text-white hover:text-[#EBAC57] transition-colors font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-[#EBAC57]" />
              <span>{DISPLAY_PHONE}</span>
            </a>

            <a 
              href={getWhatsAppQuoteLink({ service: 'General Inquiry', area: 'Vizag' })} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
