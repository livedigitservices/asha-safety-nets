import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { 
  ShieldCheck, Wrench, Users, ShieldAlert, 
  BadgeIndianRupee, Zap, ThumbsUp 
} from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Garware Certified Quality Nets',
      desc: '100% virgin high-density monofilament polyethylene with UV 50+ coating. Guaranteed against unraveling, sagging, or sun damage.',
      icon: ShieldCheck,
      color: 'bg-sky-50 text-sky-600 border-sky-200'
    },
    {
      title: 'Professional High-Rise Fitters',
      desc: 'Trained and insured technicians equipped with safety harnesses and dust-free SS drilling technology for clean installation.',
      icon: Wrench,
      color: 'bg-teal-50 text-teal-600 border-teal-200'
    },
    {
      title: '10+ Years Vizag Experience',
      desc: 'Over a decade serving high-rise gated communities, villas, and commercial complexes across Visakhapatnam.',
      icon: Users,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    },
    {
      title: '180+ kg Break Load Capacity',
      desc: 'Engineered for extreme tensile strength to prevent toddler, pet, or heavy accidental falls from high altitudes.',
      icon: ShieldAlert,
      color: 'bg-rose-50 text-rose-600 border-rose-200'
    },
    {
      title: 'Factory-Direct Affordable Rates',
      desc: 'No middleman commissions. Get genuine Garware material quality at guaranteed lowest per-sqft rates in Vizag.',
      icon: BadgeIndianRupee,
      color: 'bg-amber-50 text-amber-600 border-amber-200'
    },
    {
      title: '2-Hour Express Fitting',
      desc: 'Same-day measurement and installation service available for emergency bird control and balcony child safety.',
      icon: Zap,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    },
    {
      title: '100% Customer Satisfaction',
      desc: 'Official 10-Year written warranty card, zero hidden charges, and dedicated local customer care in Vizag.',
      icon: ThumbsUp,
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    }
  ];

  return (
    <section id="why-us" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <SectionHeading
        badge="Why Choose Asha Safety Nets"
        title="Built For Superior"
        titleGradient="Safety & Durability"
        subtitle="Discover why over 15,000 homeowners and apartment associations across Visakhapatnam trust Asha Safety Nets."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-sky-400 transition-all duration-300 space-y-4 hover:shadow-xl group hover:-translate-y-1"
          >
            <div className={`w-12 h-12 rounded-2xl ${item.color} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <item.icon className="w-6 h-6 stroke-[2.2]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
