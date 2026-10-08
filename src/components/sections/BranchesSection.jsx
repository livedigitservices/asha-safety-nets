import React from 'react';
import { MapPin } from 'lucide-react';

export default function BranchesSection() {
  const branches = [
    {
      name: 'Vizag',
      label: 'Main Branch',
      sub: 'Head Office • Visakhapatnam'
    },
    {
      name: 'Kakinada',
      label: 'Branch Office',
      sub: 'East Godavari Region'
    },
    {
      name: 'Vijayawada',
      label: 'Branch Office',
      sub: 'Krishna & Capital Region'
    }
  ];

  return (
    <section className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  rounded-2xl bg-white border border-slate-200 shadow-xl font-sans">
        {branches.map((branch, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-3 ${
              index !== branches.length - 1 ? 'md:border-r md:border-slate-100' : ''
            }`}
          >
            <div className="flex items-center gap-1.5">
              <MapPin className="w-5 h-5 text-[#EBAC57] shrink-0" />
              <span className="text-2xl sm:text-3xl font-extrabold text-gradient-primary tracking-tight font-heading">
                {branch.name}
              </span>
            </div>
            <span className="text-sm font-bold text-slate-900 mt-1">
              {branch.label}
            </span>
            <span className="text-xs text-slate-500 mt-0.5">
              {branch.sub}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
