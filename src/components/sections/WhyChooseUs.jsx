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
      icon: ShieldCheck
    },
    {
      title: 'Professional High-Rise Fitters',
      desc: 'Trained and insured technicians equipped with safety harnesses and dust-free SS drilling technology for clean installation.',
      icon: Wrench
    },
    {
      title: '10+ Years Vizag Experience',
      desc: 'Over a decade serving high-rise gated communities, villas, and commercial complexes across Visakhapatnam.',
      icon: Users
    },
    {
      title: '180+ kg Break Load Capacity',
      desc: 'Engineered for extreme tensile strength to prevent toddler, pet, or heavy accidental falls from high altitudes.',
      icon: ShieldAlert
    },
    {
      title: 'Factory-Direct Affordable Rates',
      desc: 'No middleman commissions. Get genuine Garware material quality at guaranteed lowest per-sqft rates in Vizag.',
      icon: BadgeIndianRupee
    },
    {
      title: '2-Hour Express Fitting',
      desc: 'Same-day measurement and installation service available for emergency bird control and balcony child safety.',
      icon: Zap
    },
    {
      title: '100% Customer Satisfaction',
      desc: 'Official 10-Year written warranty card, zero hidden charges, and dedicated local customer care in Vizag.',
      icon: ThumbsUp
    }
  ];

  return (
    <section id="why-us" className="relative py-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950 text-white my-12 font-sans">
      {/* Section Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/services/service_3.jpg"
          alt="Safety Netting Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        <SectionHeading
          dark={true}
          badge="Why Choose Asha Safety Nets"
          title="Built For Superior"
          titleGradient="Safety & Durability"
          subtitle="Discover why over 15,000 homeowners and apartment associations across Visakhapatnam trust Asha Safety Nets."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-[#EBAC57] backdrop-blur-md transition-all duration-300 space-y-4 hover:shadow-2xl group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 text-[#EBAC57] flex items-center justify-center group-hover:scale-110 transition-transform font-bold">
                <item.icon className="w-6 h-6 stroke-[2.2]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-[#EBAC57] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
