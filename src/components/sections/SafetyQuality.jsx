import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { ShieldCheck, Sun, Anchor, Award } from 'lucide-react';
import { safetySpecs } from '../../data/statsData';

export default function SafetyQuality() {
  const [activeTab, setActiveTab] = useState(0);

  const techDetails = [
    {
      title: 'Garware Monofilament Polymer',
      subtitle: 'High Density Polyethylene (HDPE)',
      desc: 'Our monofilament nets are spun from 100% virgin HDPE polymer manufactured by Garware Wall Ropes. The double square knot matrix prevents string slippage under extreme tension.',
      specs: [
        { key: 'Filament Type', val: 'Virgin Monofilament HDPE' },
        { key: 'Melting Point', val: '135°C High Temperature Resistance' },
        { key: 'Aperture Geometry', val: '25mm - 50mm Diamond Weave' },
        { key: 'Chemical Inertness', val: '100% Acid & Acid Rain Resistant' }
      ],
      image: '/images/services/service_1.jpg'
    },
    {
      title: 'SS 304 Anchoring Hardware',
      subtitle: 'Heavy Duty Coastal Corrosion Resistance',
      desc: 'Vizag seaside moisture easily corrodes standard iron hooks. Asha Safety Nets exclusively utilizes SS 304 marine stainless steel expansion fasteners and open eye hooks.',
      specs: [
        { key: 'Hook Material', val: 'AISI SS 304 Stainless Steel' },
        { key: 'Pull Out Force', val: '350 kg per anchor point' },
        { key: 'Drilling Technology', val: 'Dustless Rotary Hammer Drill' },
        { key: 'Border Cable', val: '6mm Braided Lead Core Wire' }
      ],
      image: '/images/services/service_6.jpg'
    },
    {
      title: 'UV 50+ Sunlight Shield',
      desc: 'Direct coastal ultraviolet rays break down standard cheap nylon nets in 6 months. Our nets feature embedded UV stabilizers during extrusions to guarantee a 10-year lifespan.',
      specs: [
        { key: 'UV Rating', val: 'UV 50+ Certified Formula' },
        { key: 'Tensile Retention', val: '95%+ after 5000 hrs solar exposure' },
        { key: 'Color Stability', val: 'Non-yellowing crystal / black finish' },
        { key: 'Warranty', val: '10 Years Replacement Guarantee' }
      ],
      image: '/images/services/service_8.jpg'
    }
  ];

  return (
    <section id="safety-quality" className="py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <SectionHeading
        badge="Engineering & Safety Standards"
        title="Uncompromised Durability &"
        titleGradient="Technical Specs"
        subtitle="Inside the technology that makes Asha Safety Nets the gold standard for high-rise balcony protection in Visakhapatnam."
      />

      {/* Top 4 Spec Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
        {safetySpecs.map((spec, i) => (
          <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-amber-300 transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#264595] font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">{spec.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{spec.desc}</p>
          </div>
        ))}
      </div>

      {/* Tech Specs Showcase */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-8 font-sans">
        <div className="flex flex-wrap items-center gap-3 border-b border-slate-100 pb-4">
          {techDetails.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === idx
                  ? 'bg-[#EBAC57] text-slate-950 shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:text-[#264595] hover:bg-slate-200'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                {techDetails[activeTab].subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {techDetails[activeTab].title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {techDetails[activeTab].desc}
              </p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {techDetails[activeTab].specs.map((item, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <span className="text-slate-500 block">{item.key}:</span>
                  <span className="text-slate-900 font-bold">{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md h-64 sm:h-80">
              <img
                src={techDetails[activeTab].image}
                alt={techDetails[activeTab].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
