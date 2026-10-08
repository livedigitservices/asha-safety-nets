import React from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { getWhatsAppQuoteLink } from '../../utils/whatsapp';

export default function ServiceModal({ service, onClose, onSelectQuote }) {
  if (!service) return null;

  const whatsappUrl = getWhatsAppQuoteLink({
    service: service.title,
    area: 'Vizag',
    message: `I'm interested in ${service.title}. Please provide a quote.`
  });

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-3xl shadow-2xl p-5 sm:p-8 space-y-6 scrollbar-thin"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header & Image with High-Contrast Close Button */}
        <div className="space-y-4">
          <div className="relative h-52 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <img 
              src={service.image} 
              alt={`${service.title} in Vizag`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent"></div>

            {/* Prominent High-Contrast Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-30 w-10 h-10 rounded-full bg-slate-950/90 hover:bg-slate-900 text-white border border-[#EBAC57]/40 shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#EBAC57]"
              aria-label="Close details"
              title="Close (Esc)"
            >
              <X className="w-5 h-5 text-[#EBAC57] group-hover:rotate-90 transition-transform duration-300 stroke-[2.5]" />
            </button>
            
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-sans">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#EBAC57] text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-sm">
                  {service.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5 drop-shadow-sm font-heading">
                  {service.title}
                </h3>
              </div>
              
              <div className="bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 text-right shadow-md font-sans">
                <span className="text-[10px] text-[#EBAC57] block uppercase font-bold">Estimated Cost</span>
                <span className="text-white font-extrabold text-sm sm:text-base">{service.startingPrice}</span>
              </div>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            {service.fullDesc}
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 font-sans">
          <h4 className="text-slate-900 font-bold text-sm flex items-center gap-2 font-heading">
            <ShieldCheck className="w-4 h-4 text-[#EBAC57]" />
            <span>Technical Specifications</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {service.specs.map((spec, i) => (
              <div key={i} className="flex justify-between items-center p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                <span className="text-slate-500 font-medium">{spec.label}:</span>
                <span className="text-slate-900 font-bold">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features List */}
        <div className="space-y-2 font-sans">
          <h4 className="text-slate-900 font-bold text-sm font-heading">Key Installation Benefits:</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Action Buttons */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3 font-sans">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors shadow-md"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Request WhatsApp Quote</span>
          </a>

          <button
            onClick={() => {
              onClose();
              if (onSelectQuote) onSelectQuote(service.title);
            }}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#EBAC57] hover:bg-[#EB7D1D] text-slate-950 font-extrabold text-sm transition-colors shadow-md"
          >
            <span>Book Free Site Visit</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>
    </div>
  );
}
