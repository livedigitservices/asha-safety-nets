import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, MessageCircle } from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppQuoteLink } from '../../utils/whatsapp';

export default function TopHeader() {
  return (
    <div className="bg-slate-100 border-b border-slate-200 text-xs text-slate-600 py-2.5 px-4 sm:px-8 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
        {/* Left Side */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sky-700 font-medium">
            <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>Serving All Over <strong>Vizag (Visakhapatnam)</strong> & Surroundings</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Mon - Sun: 8:00 AM - 9:00 PM</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6 font-medium">
          <div className="flex items-center gap-1.5 text-amber-700 bg-amber-50 px-3 py-0.5 rounded-full border border-amber-200 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>10 Years Written Warranty</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 text-slate-700 hover:text-sky-600 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>{DISPLAY_PHONE}</span>
            </a>

            <a 
              href={getWhatsAppQuoteLink({ service: 'General Inquiry', area: 'Vizag' })} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-700 hover:text-emerald-600 transition-colors font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
