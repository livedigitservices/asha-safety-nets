import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { MapPin, Search, Clock, CheckCircle2 } from 'lucide-react';
import { vizagAreasData, vizagHighlights } from '../../data/vizagAreasData';
import { getWhatsAppQuoteLink } from '../../utils/whatsapp';

export default function ServiceAreasVizag({ onOpenQuoteModal }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAreas = vizagAreasData.filter(area =>
    area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.pin.includes(searchTerm)
  );

  return (
    <section id="vizag-areas" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <SectionHeading
        badge="Visakhapatnam Service Coverage"
        title="We Service All Major Neighborhoods Across"
        titleGradient="Vizag & Surroundings"
        subtitle="Prompt 2-hour response time with free site visits across all residential societies, gated townships, and commercial areas in Visakhapatnam."
      />

      {/* Vizag Coastal Image Header Banner Card */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl h-64 sm:h-80">
        <img
          src="/images/services/service_1.jpg"
          alt="Visakhapatnam High-Rise Balcony Protection Area"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>

        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
          <div className="space-y-1">
            <span className="px-3 py-1 rounded-full bg-[#EBAC57] text-slate-950 text-xs font-extrabold uppercase tracking-wider">
              100% Vizag District Coverage
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold">
              Fastest 2-Hour Arrival in Visakhapatnam
            </h3>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 rounded-xl bg-[#EBAC57] hover:bg-[#EB7D1D] hover:text-white text-slate-950 font-extrabold text-xs shadow-md transition-colors"
          >
            Request Free Site Inspection
          </button>
        </div>
      </div>

      {/* Highlights Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
        {vizagHighlights.map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 hover:border-amber-300 transition-colors">
            <div className="flex items-center gap-2 text-[#264595] font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{item.title}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Search Input */}
      <div className="max-w-md mx-auto relative font-sans">
        <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search your Vizag area (e.g. Madhurawada, MVP Colony, Gajuwaka)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none shadow-md"
        />
      </div>

      {/* Vizag Areas Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans">
        {filteredAreas.map((area, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#EBAC57] transition-all duration-300 space-y-3 group hover:shadow-md"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base group-hover:text-[#264595] transition-colors">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{area.name}</span>
              </div>
              <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                {area.pin}
              </span>
            </div>

            <p className="text-xs text-slate-500 line-clamp-1">{area.tag}</p>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-emerald-600 font-semibold flex items-center gap-1 text-[11px]">
                <Clock className="w-3 h-3" /> Visit {area.responseTime}
              </span>

              <a
                href={getWhatsAppQuoteLink({ service: 'Balcony Safety Net', area: area.name })}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 hover:text-amber-800 font-bold text-[11px] underline flex items-center gap-1"
              >
                <span>Book Visit</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredAreas.length === 0 && (
        <div className="text-center py-8 space-y-2 font-sans">
          <p className="text-slate-600 text-sm">Don't see your area listed? We cover all locations in Visakhapatnam district!</p>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-2.5 rounded-xl bg-[#EBAC57] hover:bg-[#EB7D1D] hover:text-white text-slate-950 font-extrabold text-xs shadow-md"
          >
            Contact Vizag Service Desk
          </button>
        </div>
      )}
    </section>
  );
}
