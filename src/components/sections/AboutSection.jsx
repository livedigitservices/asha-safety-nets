import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { ShieldCheck, Award, Wrench, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const points = [
    {
      title: 'Garware Virgin HDPE Material',
      desc: 'We use high-tensile, UV-stabilized 100% virgin monofilament yarn engineered to withstand Vizag coastal saline humidity, strong sea winds, and intense tropical heat.',
      icon: Award
    },
    {
      title: 'Precision SS 304 Anchoring',
      desc: 'Fixed using high-grade SS 304 stainless steel anchor hooks and expansion bolts that never rust, crack, or loosen over time.',
      icon: Wrench
    },
    {
      title: 'Experienced Vizag Installers',
      desc: 'Our certified installation crew brings 10+ years of high-rise rigging expertise, ensuring zero damage to building walls or balcony railings.',
      icon: ShieldCheck
    },
    {
      title: 'Customer Satisfaction First',
      desc: 'Transparent upfront pricing with zero hidden charges, 10-year official warranty cards, and 24/7 post-installation customer support in Visakhapatnam.',
      icon: HeartHandshake
    }
  ];

  return (
    <section id="about" className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <SectionHeading
        badge="About Asha Safety Nets"
        title="Welcome To Asha Safety Nets"
        titleGradient="Vizag !"
        subtitle="Asha Safety Nets Vizag is one of the best and leading companies in providing high quality safety netting solutions along with valuable services across Visakhapatnam."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Multi-Image Collage Grid */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white p-1.5 hover:shadow-xl transition-shadow">
              <img
                src="/images/services/service_2.png"
                alt="Balcony safety net installation in Vizag"
                className="w-full h-48 sm:h-60 object-cover rounded-2xl"
              />
            </div>
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white p-1.5 hover:shadow-xl transition-shadow">
              <img
                src="/images/services/service_4.jpg"
                alt="Children safety net fitting in Visakhapatnam"
                className="w-full h-48 sm:h-60 object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white p-2">
            <img
              src="/images/services/service_6.jpg"
              alt="Invisible SS Wire Safety Netting in Visakhapatnam"
              className="w-full h-48 sm:h-64 object-cover rounded-2xl"
            />
            {/* Floating Experience Badge */}
            <div className="absolute bottom-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/20 shadow-xl max-w-xs space-y-1 font-sans">
              <div className="flex items-center gap-2 text-[#EBAC57] font-extrabold text-xl font-heading">
                <span>10+ Years</span>
              </div>
              <p className="text-white text-xs font-bold font-heading">Safety Excellence in Vizag</p>
              <p className="text-slate-400 text-[11px]">15,000+ satisfied apartment clients</p>
            </div>
          </div>
        </div>

        {/* Right Column: Copy & Feature Grid */}
        <div className="lg:col-span-6 space-y-6 font-sans">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug font-heading">
              Uncompromising Safety Standards for Every High-Rise Home
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At <strong>Asha Safety Nets Vizag</strong>, we understand that your balcony should be a place of relaxation—not worry. Living in high-rise apartments across Visakhapatnam brings breathtaking coastal views, but also severe safety risks for curious toddlers, active pets, and persistent pigeon invasions.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our mission is to provide invisible, ultra-strong, weather-resistant protection that keeps your loved ones secure without spoiling your home's aesthetics or sea breeze.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {points.map((point, index) => (
              <div 
                key={index} 
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#EBAC57] transition-all duration-300 space-y-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#264595] group-hover:scale-110 transition-transform font-bold">
                  <point.icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#264595] transition-colors font-heading">
                  {point.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
