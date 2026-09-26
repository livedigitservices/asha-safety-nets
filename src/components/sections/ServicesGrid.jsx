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
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
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
                ? 'bg-sky-600 text-white shadow-md shadow-sky-500/20 scale-105'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Services Grid (10 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="group relative rounded-3xl bg-white border border-slate-200 hover:border-sky-400 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1"
          >
            {/* Image Container */}
            <div className="relative h-48 sm:h-52 overflow-hidden">
              <img
                src={service.image}
                alt={`${service.title} in Vizag`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3" />
                  <span>Popular in Vizag</span>
                </div>
              )}  
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              {/* Mini Features */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                {service.features.slice(0, 2).map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 flex items-center gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-1"
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
