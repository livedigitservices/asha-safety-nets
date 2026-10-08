import React from 'react';
import { Phone, Mail } from 'lucide-react';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { DISPLAY_PHONE, EMAIL_ADDRESS, INSTAGRAM_URL, FACEBOOK_URL, getWhatsAppQuoteLink } from '../../utils/whatsapp';

export default function TopHeader() {
  const whatsappUrl = getWhatsAppQuoteLink({ service: 'Top Header Inquiry', area: 'Vizag' });
  const rawPhone = DISPLAY_PHONE.replace(/\s+/g, '');

  return (
    <div className="bg-gradient-to-r from-[#200A28] via-[#0B0F19] to-[#200A28] text-[#EBAC57] text-xs font-sans relative z-50 border-b border-purple-950/40">
      
      {/* Mobile Layout (Stacked identical to reference screenshot) */}
      <div className="md:hidden px-4 py-2.5 space-y-1.5 text-center">
        {/* Row 1: Phone and WhatsApp */}
        <div className="flex items-center justify-center gap-5 text-[12px] font-bold">
          <a 
            href={`tel:${rawPhone}`}
            className="flex items-center gap-1.5 hover:text-[#EB7D1D] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#EBAC57] fill-[#EBAC57]" />
            <span>{DISPLAY_PHONE}</span>
          </a>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#EB7D1D] transition-colors"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#EBAC57]" />
            <span>8446144610</span>
          </a>
        </div>

        {/* Row 2: Email Address */}
        <div className="text-[12px] font-medium">
          <a 
            href={`mailto:${EMAIL_ADDRESS}`}
            className="flex items-center justify-center gap-1.5 hover:text-[#EB7D1D] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#EBAC57]" />
            <span>{EMAIL_ADDRESS}</span>
          </a>
        </div>

        {/* Row 3: Centered Social Icon Buttons */}
        <div className="flex items-center justify-center gap-2 pt-0.5">
          {/* Facebook */}
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-6 h-6 rounded bg-black/80 hover:bg-[#EBAC57] text-white hover:text-black flex items-center justify-center transition-colors shadow-sm"
          >
            <svg className="w-3.5 h-3.5 fill-current stroke-none" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-6 h-6 rounded bg-black/80 hover:bg-[#EBAC57] text-white hover:text-black flex items-center justify-center transition-colors shadow-sm"
          >
            <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* YouTube / WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-6 h-6 rounded bg-black/80 hover:bg-[#EBAC57] text-white hover:text-black flex items-center justify-center transition-colors shadow-sm"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Desktop / Tablet Layout (md and up) */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center gap-4">
          
          {/* Left Contacts */}
          <div className="flex items-center gap-6 text-xs font-semibold">
            <a 
              href={`tel:${rawPhone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#EBAC57] fill-[#EBAC57]" />
              <span>{DISPLAY_PHONE}</span>
            </a>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#EBAC57]" />
              <span>8446144610 (WhatsApp)</span>
            </a>

            <a 
              href={`mailto:${EMAIL_ADDRESS}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#EBAC57]" />
              <span>{EMAIL_ADDRESS}</span>
            </a>
          </div>

          {/* Right Social Icons */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-400 mr-1 font-medium">Follow Us:</span>
            
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-6 h-6 rounded bg-black/80 hover:bg-[#EBAC57] text-white hover:text-black flex items-center justify-center transition-colors shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current stroke-none" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-6 h-6 rounded bg-black/80 hover:bg-[#EBAC57] text-white hover:text-black flex items-center justify-center transition-colors shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-6 h-6 rounded bg-black/80 hover:bg-[#EBAC57] text-white hover:text-black flex items-center justify-center transition-colors shadow-sm"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}
