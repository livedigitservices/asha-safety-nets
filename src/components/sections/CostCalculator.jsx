import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { PHONE_NUMBER } from '../../utils/whatsapp';
import { vizagAreasData } from '../../data/vizagAreasData';

export default function CostCalculator({ onOpenQuoteModal }) {
  const [netType, setNetType] = useState('balcony');
  const [length, setLength] = useState(15);
  const [height, setHeight] = useState(8);
  const [selectedArea, setSelectedArea] = useState('MVP Colony');

  const netRates = {
    balcony: { name: 'Balcony Safety Net (Garware HDPE)', rateMin: 22, rateMax: 32 },
    pigeon: { name: 'Pigeon Anti-Bird Netting', rateMin: 18, rateMax: 28 },
    children: { name: 'Children & Kids Safety Net', rateMin: 25, rateMax: 36 },
    invisible: { name: 'Invisible Stainless Steel 316 Net', rateMin: 140, rateMax: 200 },
    pet: { name: 'Cat & Pet Safety Net', rateMin: 28, rateMax: 40 },
    sports: { name: 'Sports & Cricket Box Net', rateMin: 20, rateMax: 34 },
  };

  const currentNet = netRates[netType] || netRates.balcony;
  const totalSqFt = Math.max(1, (parseFloat(length) || 0) * (parseFloat(height) || 0));
  const minCost = Math.round(totalSqFt * currentNet.rateMin);
  const maxCost = Math.round(totalSqFt * currentNet.rateMax);

  const whatsappMsg = `Hi Asha Safety Nets Vizag! I calculated my estimated balcony area on your website:\n- *Service*: ${currentNet.name}\n- *Area*: ${length} ft x ${height} ft = ${totalSqFt} sq. ft.\n- *Location*: ${selectedArea}, Visakhapatnam\n- *Estimated Quote*: ₹${minCost.toLocaleString('en-IN')} - ₹${maxCost.toLocaleString('en-IN')}\nPlease confirm free site measurement.`;

  return (
    <section id="calculator" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <SectionHeading
        badge="Instant Vizag Price Estimator"
        title="Calculate Your"
        titleGradient="Safety Net Cost"
        subtitle="Get a transparent instant cost estimate based on your balcony or terrace dimensions in Visakhapatnam."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-sans">
        {/* Left Column: Inputs */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-[#EBAC57]/10 border border-[#EBAC57]/30 flex items-center justify-center text-[#264595] font-bold">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Select Net Specifications</h3>
              <p className="text-xs text-slate-500">Adjust dimensions to see live Vizag rates</p>
            </div>
          </div>

          {/* Net Type Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              1. Select Net Type:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.entries(netRates).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setNetType(key)}
                  className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                    netType === key
                      ? 'bg-[#EBAC57] border-[#EB7D1D] text-slate-950 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-[#EBAC57]'
                  }`}
                >
                  {item.name.split('(')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Dimensions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700">Length / Width (Feet):</span>
                <span className="text-[#264595]">{length} FT</span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full accent-[#EBAC57] bg-slate-200 rounded-lg cursor-pointer h-2"
              />
              <input
                type="number"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-900"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700">Height (Feet):</span>
                <span className="text-[#264595]">{height} FT</span>
              </div>
              <input
                type="range"
                min="3"
                max="30"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full accent-[#EBAC57] bg-slate-200 rounded-lg cursor-pointer h-2"
              />
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-900"
              />
            </div>
          </div>

          {/* Vizag Location Dropdown */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              3. Select Your Vizag Area:
            </label>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 focus:border-[#EBAC57] focus:outline-none"
            >
              {vizagAreasData.map((area) => (
                <option key={area.name} value={area.name}>
                  {area.name} ({area.tag}) - Free Site Visit
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right Column: Estimate Card */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#EBAC57]/10 to-white border border-[#EBAC57]/30 shadow-xl space-y-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-[11px] font-bold text-[#264595] uppercase tracking-wider">
              Estimated Area: {totalSqFt} Sq. Ft.
            </span>
            <h4 className="text-xl font-extrabold text-slate-900 font-heading">
              Estimated Price Range
            </h4>
          </div>

          {/* Price Range */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-2 shadow-xs">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#EBAC57]">
              ₹{minCost.toLocaleString('en-IN')} - ₹{maxCost.toLocaleString('en-IN')}
            </span>
            <p className="text-xs text-slate-500">
              *Includes Garware high-density material, SS 304 anchor hooks & precision installation in Visakhapatnam.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-2 text-xs text-slate-700 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>10 Years Official Warranty Card included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Free On-Site Inspection in {selectedArea}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Same-day or 24-hr express installation</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-2 font-sans">
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Send Estimate via WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal && onOpenQuoteModal(currentNet.name)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#EBAC57] hover:bg-[#EB7D1D] text-slate-950 font-extrabold text-sm transition-colors shadow-md"
            >
              <span>Book Exact Free On-Site Measurement</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
