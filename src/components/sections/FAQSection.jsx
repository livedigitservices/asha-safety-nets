import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../../data/faqData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      <SectionHeading
        badge="Got Questions?"
        title="Frequently Asked"
        titleGradient="Questions"
        subtitle="Find answers to common questions about safety net installation, durability, warranty, and pricing in Visakhapatnam."
      />

      <div className="space-y-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? 'bg-white border-sky-300 shadow-md' 
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-sky-50 border border-sky-100 text-sky-700 text-[10px] font-bold uppercase tracking-wider hidden sm:inline-block">
                    {faq.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </h3>
                </div>

                <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-300 shrink-0 ${
                  isOpen ? 'rotate-180 text-sky-600 bg-sky-50' : ''
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 mt-2">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
