import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { PhoneCall, Ruler, FileText, CheckCircle } from 'lucide-react';

export default function ProcessTimeline({ onOpenQuoteModal }) {
  const steps = [
    {
      number: '01',
      title: 'Contact Us',
      desc: 'Reach out via phone call, WhatsApp, or instant quote form. Our Vizag customer team responds within minutes.',
      icon: PhoneCall,
      highlight: 'Instant Response',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
    },
    {
      number: '02',
      title: 'Free Site Inspection',
      desc: 'Our certified Vizag technician visits your flat or building within 2 hours to measure exact dimensions and present sample meshes.',
      icon: Ruler,
      highlight: 'Zero Cost Inspection',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=600&q=80'
    },
    {
      number: '03',
      title: 'Transparent Quote',
      desc: 'Receive an all-inclusive factory direct price quote per square foot with zero hidden costs or installation surcharges.',
      icon: FileText,
      highlight: 'Guaranteed Best Price',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    },
    {
      number: '04',
      title: 'Precision Fitting',
      desc: 'Our expert team installs the nets using SS 304 anchor hooks and hands over your official 10-Year warranty card.',
      icon: CheckCircle,
      highlight: '10 Years Written Warranty',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <SectionHeading
        badge="Simple 4-Step Process"
        title="How Asha Safety Nets"
        titleGradient="Works For You"
        subtitle="From initial inquiry to final inspection, experience seamless professional safety net installation in Visakhapatnam."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-white border border-slate-200 hover:border-sky-400 transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Step Image */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
              
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-sky-600 text-white font-extrabold text-xs">
                Step {step.number}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="px-2.5 py-1 rounded-full bg-sky-50 border border-sky-100 text-[10px] font-bold text-sky-700 uppercase tracking-wider inline-block">
                  {step.highlight}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-bold">
                <span>Phase {idx + 1} of 4</span>
                <span className="text-emerald-600">✓</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-4">
        <button
          onClick={onOpenQuoteModal}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-600 to-teal-500 text-white font-bold text-sm shadow-xl hover:scale-105 transition-transform"
        >
          Book Your Free Site Inspection Now
        </button>
      </div>
    </section>
  );
}
