import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Star, CheckCircle2, MapPin, Quote, ThumbsUp } from 'lucide-react';
import { reviewsData } from '../../data/reviewsData';

export default function CustomerReviews() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'All Reviews (6)' },
    { id: 'balcony', label: 'Balcony Nets' },
    { id: 'pigeon', label: 'Pigeon Nets' },
    { id: 'invisible', label: 'Invisible SS Nets' },
    { id: 'child', label: 'Children Safety' },
    { id: 'pet', label: 'Pet Safety' }
  ];

  const filteredReviews = activeFilter === 'all'
    ? reviewsData
    : reviewsData.filter(r => r.category === activeFilter || (activeFilter === 'child' && (r.category === 'child' || r.category === 'pet')));

  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 font-sans">
      
      {/* Section Heading */}
      <SectionHeading
        badge="Verified Customer Feedback"
        title="What Vizag Homeowners Say About"
        titleGradient="Asha Safety Nets"
        subtitle="Real reviews from apartment society presidents, parents, and pet owners across Visakhapatnam."
      />

      {/* Top Rating Summary Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5 text-center md:text-left">
          <div className="w-16 h-16 rounded-2xl bg-[#EBAC57] text-slate-950 flex flex-col items-center justify-center font-extrabold shadow-lg shrink-0">
            <span className="text-2xl leading-none font-heading">4.9</span>
            <span className="text-[10px] uppercase tracking-wider">Out of 5</span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-1 text-[#EBAC57]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#EBAC57] stroke-none" />
              ))}
            </div>
            <h3 className="text-lg font-bold text-white font-heading">
              1,500+ Verified Apartment Installations in Vizag
            </h3>
            <p className="text-xs text-slate-400">
              100% Satisfied High-Rise Families • Garware Wall Ropes Certified Partner
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold text-slate-200 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% Genuine Reviews</span>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {filterCategories.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeFilter === tab.id
                ? 'bg-[#EBAC57] text-slate-950 shadow-md scale-105'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-[#264595]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-[#EBAC57] transition-all duration-300 flex flex-col justify-between hover:shadow-2xl group relative overflow-hidden"
          >
            {/* Top Card Accent Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EBAC57] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="space-y-4">
              {/* Header: Rating & Verified Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#EBAC57]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#EBAC57] stroke-none" />
                  ))}
                </div>

                <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified Client
                </span>
              </div>

              {/* Quote Mark */}
              <Quote className="w-8 h-8 text-[#EBAC57]/20 group-hover:text-[#EBAC57]/40 transition-colors" />

              {/* Review Text */}
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                "{review.comment}"
              </p>
            </div>

            {/* Profile Footer with Indian Customer Photo */}
            <div className="pt-5 mt-6 border-t border-slate-100 space-y-3">
              <div className="flex items-center gap-3.5">
                <div className="relative shrink-0">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#EBAC57]/40 group-hover:border-[#EBAC57] shadow-sm transition-colors"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                    <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>

                <div className="overflow-hidden space-y-0.5">
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#264595] transition-colors truncate font-heading">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate font-medium">{review.role}</p>
                </div>
              </div>

              {/* Location & Service Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold">
                  <MapPin className="w-3 h-3 text-[#EBAC57]" />
                  <span>{review.location}</span>
                </span>

                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-amber-50 text-[#264595] border border-amber-200/60 text-[10px] font-bold">
                  <span>{review.service}</span>
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
