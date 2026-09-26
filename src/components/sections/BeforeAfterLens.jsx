import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Eye, ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BeforeAfterLens({ onOpenQuoteModal }) {
  const [activeTab, setActiveTab] = useState('protected'); // 'protected' vs 'unprotected'

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <SectionHeading
        badge="Visual Balcony Inspector"
        title="Experience The Difference of"
        titleGradient="Asha Balcony Protection"
        subtitle="See how our invisible mesh and translucent pigeon nets keep your Visakhapatnam apartment clean, safe, and beautiful."
      />

      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
        {/* Toggle Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActiveTab('protected')}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'protected'
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/25 scale-105'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Asha Net Protected (Safe & Clean)</span>
          </button>

          <button
            onClick={() => setActiveTab('unprotected')}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'unprotected'
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-500/25 scale-105'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Unprotected Balcony (Nuisance & Risks)</span>
          </button>
        </div>

        {/* Dynamic Image & Copy Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-72 sm:h-96">
            <img
              src={
                activeTab === 'protected'
                  ? 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80'
                  : 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=80'
              }
              alt="Balcony View in Vizag"
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                activeTab === 'protected' ? 'bg-sky-500 text-white' : 'bg-rose-500 text-white'
              }`}>
                {activeTab === 'protected' ? 'PROPERLY FITTED SAFETY MESH' : 'UNPROTECTED HIGH-RISE RISKS'}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {activeTab === 'protected' ? (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  Peace of Mind with Unobstructed Scenic Views
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our Garware HDPE translucent nets and invisible SS 316 wire nets blend seamlessly into Vizag high-rise architecture. Enjoy 95%+ fresh air flow and sea view while securing your children and pets.
                </p>
                <div className="space-y-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>100% Toddler & Pet fall protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Zero pigeon droppings or health risks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>10 Years Official Warranty Card</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-rose-600">
                  Constant Fall Anxiety & Pigeon Infestations
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Unprotected balconies in Visakhapatnam become breeding grounds for feral pigeons, causing foul odors, acidic droppings, asthma risks, and constant fear of child or pet accidental falls.
                </p>
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 font-medium">
                  Don't leave high-altitude safety to chance. Book your free site inspection now!
                </div>
              </div>
            )}

            <button
              onClick={onOpenQuoteModal}
              className="w-full py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span>Protect Your Balcony Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
