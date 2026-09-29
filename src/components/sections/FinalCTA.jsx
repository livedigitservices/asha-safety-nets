import React from 'react';
import { ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppQuoteLink } from '../../utils/whatsapp';

export default function FinalCTA({ onOpenQuoteModal }) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-14 overflow-hidden shadow-2xl space-y-8 text-center text-white">
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-4 font-sans">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBAC57] text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-md">
            <ShieldCheck className="w-4 h-4 text-slate-950" />
            <span>Don't Compromise On High-Rise Safety</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
            Protect Your Balcony, Family & Pets Today
          </h2>

          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            Join 15,000+ satisfied families across <strong>Visakhapatnam (Vizag)</strong>. Book your free on-site inspection now and get <strong>Garware 100% Virgin Nylon Safety Nets</strong> with a 10-Year Written Guarantee.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 font-sans">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#EBAC57] hover:bg-[#EB7D1D] text-slate-950 font-extrabold text-base shadow-xl hover:scale-105 transition-transform"
          >
            <span>Book Free Site Visit Now</span>
            <ArrowRight className="w-5 h-5 text-slate-950" />
          </button>

          <a
            href={getWhatsAppQuoteLink({ service: 'Final CTA Quote', area: 'Vizag' })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition-colors shadow-lg"
          >
            <MessageCircle className="w-5 h-5 fill-white stroke-none" />
            <span>WhatsApp Instant Quote</span>
          </a>
        </div>
      </div>
    </section>
  );
}
