import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ServiceModal from '../ui/ServiceModal';
import { servicesData } from '../../data/servicesData';
import { ArrowRight, Check, Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppQuoteLink } from '../../utils/whatsapp';

export default function ServicesGrid({ onOpenQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const categories = [
    { id: 'all', label: 'All Services (10)' },
    { id: 'residential', label: 'Residential Nets' },
    { id: 'commercial', label: 'Commercial & Buildings' },
    { id: 'sports', label: 'Sports & Practice Nets' }
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <SectionHeading
        badge="Comprehensive Protection"
        title="Our Specialized"
        titleGradient="Safety Net Services"
        subtitle="Custom engineered, high-tensile safety netting solutions installed by certified professionals across Visakhapatnam."
      />

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-[#EBAC57] text-slate-950 shadow-md shadow-amber-500/20 scale-105'
                : 'bg-white border border-slate-200 text-slate-700 hover:text-[#264595] hover:border-amber-300'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Services Grid (10 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="group relative rounded-3xl bg-white border border-slate-200 hover:border-[#EBAC57] transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1"
          >
            {/* Image Container */}
            <div className="relative h-52 sm:h-56 overflow-hidden">
              <img
                src={service.image}
                alt={`${service.title} in Vizag`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>

              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#EBAC57] text-slate-950 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3 text-slate-950" />
                  <span>Top Choice in Vizag</span>
                </div>
              )}

              {/* Price Tag Overlay */}
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-slate-900/85 backdrop-blur-md text-white border border-white/20 text-xs font-bold shadow-md">
                <span>{service.startingPrice}</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#264595] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {service.shortDesc}
                </p>
              </div>

              {/* Customer Preference Progress Bar (venkatsafetynets style) */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-semibold">Vizag Customer Preference</span>
                  <span className="font-extrabold text-amber-600">{service.demandPercent}%</span>
                </div>
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                  <div 
                    className="h-full bg-[#EBAC57] rounded-full transition-all duration-1000 shadow-xs"
                    style={{ width: `${service.demandPercent}%` }}
                  />
                </div>
              </div>

              {/* Mini Features */}
              <div className="space-y-1.5">
                {service.features.slice(0, 2).map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-3 flex items-center gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1 shadow-xs"
                >
                  <span>View Details & Specs</span>
                </button>

                <a
                  href={getWhatsAppQuoteLink({ service: service.title, area: 'Vizag' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border border-emerald-200 transition-colors"
                  title="WhatsApp Quote"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectQuote={(title) => {
            if (onOpenQuoteModal) onOpenQuoteModal(title);
          }}
        />
      )}
    </section>
  );
}
