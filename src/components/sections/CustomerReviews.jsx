import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Star, CheckCircle } from 'lucide-react';
import { reviewsData } from '../../data/reviewsData';

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <SectionHeading
        badge="Verified Customer Feedback"
        title="What Vizag Homeowners Say About"
        titleGradient="Asha Safety Nets"
        subtitle="Real reviews from apartment society presidents, parents, and pet owners across Visakhapatnam."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-sky-300 transition-all duration-300 space-y-6 flex flex-col justify-between hover:shadow-xl group"
          >
            <div className="space-y-4">
              {/* Rating */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-sky-700 bg-sky-50 border border-sky-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-600" /> Verified Client
                </span>
              </div>

              {/* Comment */}
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                "{review.comment}"
              </p>
            </div>

            {/* Profile */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-11 h-11 rounded-full object-cover border border-slate-200 shrink-0"
              />
              <div className="overflow-hidden">
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors truncate">
                  {review.name}
                </h4>
                <p className="text-[11px] text-slate-500 truncate">{review.role}</p>
                <p className="text-[10px] text-sky-600 font-semibold truncate">{review.location} • {review.service}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
