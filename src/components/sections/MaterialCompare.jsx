import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Check, X, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function MaterialCompare({ onOpenQuoteModal }) {
  const comparisons = [
    {
      feature: 'Yarn Polymer Material',
      asha: '100% Virgin Garware HDPE (High Tensile)',
      local: 'Recycled Plastic Scrap Yarn',
      ashaGood: true
    },
    {
      feature: 'UV Sunlight Resistance',
      asha: 'UV 50+ Embedded Protection (Coastal Formula)',
      local: 'Zero UV Treatment (Becomes Brittle in 6 Months)',
      ashaGood: true
    },
    {
      feature: 'Anchor Hook Hardware',
      asha: 'SS 304 Stainless Steel (Rust-Proof Marine Grade)',
      local: 'Cheap Iron Hooks (Rusts & Stains Wall)',
      ashaGood: true
    },
    {
      feature: 'Breaking Load Capacity',
      asha: '180 kg per mesh string (Child & Impact Proof)',
      local: '30 - 45 kg (Dangerous Snap Risk)',
      ashaGood: true
    },
    {
      feature: 'Warranty & Guarantee',
      asha: '10 Years Written Official Guarantee Card',
      local: 'No Written Warranty or Support',
      ashaGood: true
    },
    {
      feature: 'Vizag Weather Life',
      asha: '10 to 12 Years Uninterrupted Durability',
      local: 'Fails within 8 to 12 Months',
      ashaGood: true
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <SectionHeading
        badge="Quality Comparison Matrix"
        title="Why 100% Garware Virgin Netting"
        titleGradient="Outperforms Cheap Alternatives"
        subtitle="Don't risk high-rise balcony safety with cheap local nets that break under coastal sun and wind."
      />

      <div className="overflow-x-auto rounded-3xl border border-amber-500/20 shadow-2xl bg-[#080D1A]">
        <table className="w-full text-left text-xs sm:text-sm font-sans border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950 font-display">
              <th className="p-5 sm:p-6 text-slate-300 font-bold w-1/3">Safety Net Specification</th>
              <th className="p-5 sm:p-6 text-amber-400 font-black bg-amber-500/10 border-x border-amber-500/20 text-base">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <span>Asha Garware Mesh</span>
                </div>
              </th>
              <th className="p-5 sm:p-6 text-slate-400 font-bold">Standard Cheap Local Nets</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80">
            {comparisons.map((row, i) => (
              <tr key={i} className="hover:bg-slate-900/50 transition-colors">
                <td className="p-5 sm:p-6 text-white font-bold font-display">{row.feature}</td>
                
                <td className="p-5 sm:p-6 bg-amber-500/5 border-x border-amber-500/20 text-slate-100 font-semibold">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[3]" />
                    <span>{row.asha}</span>
                  </div>
                </td>

                <td className="p-5 sm:p-6 text-slate-400">
                  <div className="flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0 stroke-[3]" />
                    <span>{row.local}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center pt-2">
        <button
          onClick={onOpenQuoteModal}
          className="px-8 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm font-display shadow-xl shadow-amber-500/20 transition-all"
        >
          Choose Genuine Garware Quality — Book Site Measurement
        </button>
      </div>
    </section>
  );
}
