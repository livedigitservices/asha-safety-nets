import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { ShieldAlert, ShieldCheck, Activity, RotateCcw, AlertTriangle, ArrowRight } from 'lucide-react';

export default function TensionSimulator({ onOpenQuoteModal }) {
  const [selectedLoad, setSelectedLoad] = useState(120); // 50, 120, 180 kg
  const [meshType, setMeshType] = useState('garware'); // 'garware' vs 'local'

  const loads = [
    { value: 50, label: '50 kg (Toddler/Child Impact)' },
    { value: 120, label: '120 kg (Adult Body Weight)' },
    { value: 180, label: '180 kg (Extreme Storm & High Velocity)' }
  ];

  const getDeflection = () => {
    if (meshType === 'garware') {
      return (selectedLoad / 180) * 18; // minimal controlled elasticity (max 18mm)
    } else {
      return (selectedLoad / 180) * 85; // extreme dangerous stretch or snap
    }
  };

  const isSnapped = meshType === 'local' && selectedLoad >= 120;
  const deflection = getDeflection();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <SectionHeading
        badge="Interactive Durability Lab"
        title="Simulate Real-World Net"
        titleGradient="Impact & Tension Load"
        subtitle="Test the breaking point of Garware 100% Virgin HDPE mesh versus standard cheap local netting before installing at your home."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#090D16] border border-amber-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Left Column: Interactive Controls */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-display">
              1. Select Test Weight Load:
            </span>
            <div className="space-y-2">
              {loads.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setSelectedLoad(item.value)}
                  className={`w-full p-3.5 rounded-xl text-xs font-bold text-left transition-all flex items-center justify-between border ${
                    selectedLoad === item.value
                      ? 'bg-amber-500/15 border-amber-400 text-amber-300 shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs">{item.value} KG</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-display">
              2. Choose Mesh Material Grade:
            </span>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setMeshType('garware')}
                className={`p-3.5 rounded-xl border text-xs font-bold text-center transition-all ${
                  meshType === 'garware'
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}
              >
                Asha Garware HDPE
              </button>
              <button
                onClick={() => setMeshType('local')}
                className={`p-3.5 rounded-xl border text-xs font-bold text-center transition-all ${
                  meshType === 'local'
                    ? 'bg-rose-500/20 border-rose-400 text-rose-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}
              >
                Cheap Local Net
              </button>
            </div>
          </div>

          {/* Test Readout Box */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Tested Tensile Strain:</span>
              <span className={isSnapped ? 'text-rose-400 font-bold' : 'text-cyan-400 font-bold'}>
                {isSnapped ? 'CRITICAL STRUCTURAL FAILURE (SNAPPED)' : `${deflection.toFixed(1)} mm Max Flex`}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Garware Safety Rating:</span>
              <span className="text-amber-400 font-bold">IS / ISO Certified Grade</span>
            </div>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 text-slate-950 font-extrabold text-xs sm:text-sm font-display shadow-xl shadow-amber-500/20 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
          >
            <span>Install Certified Garware Mesh in Vizag</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

        {/* Right Column: Visual Mesh Physics Canvas / Graphic */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 bg-slate-950/80 rounded-2xl border border-slate-800 relative min-h-[340px]">
          <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-bold font-mono">
            <Activity className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-slate-300">LIVE IMPACT SIMULATOR</span>
          </div>

          {/* Interactive Mesh Visual Box */}
          <div className="w-full max-w-md h-56 relative flex items-center justify-center border-2 border-slate-800 rounded-xl overflow-hidden bg-safety-grid">
            {/* Top Anchor Rail */}
            <div className="absolute top-0 inset-x-0 h-3 bg-amber-500/30 border-b border-amber-500/50 flex justify-around">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-0.5"></div>
              ))}
            </div>

            {/* Mesh Lines SVG */}
            <svg className="w-full h-full text-slate-700" viewBox="0 0 300 180">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke={meshType === 'garware' ? '#00e5ff' : '#f43f5e'} strokeWidth="0.8" strokeOpacity="0.4" />
                </pattern>
              </defs>
              <rect width="300" height="180" fill="url(#grid)" />
            </svg>

            {/* Impact Weight Object */}
            <div
              className={`absolute transition-all duration-500 flex flex-col items-center justify-center p-3 rounded-full font-mono text-xs font-extrabold shadow-2xl ${
                isSnapped
                  ? 'bg-rose-600 text-white translate-y-24 border-2 border-rose-300 animate-bounce'
                  : 'bg-amber-400 text-slate-950 shadow-amber-500/50 border-2 border-white'
              }`}
              style={{
                transform: isSnapped ? 'translateY(80px)' : `translateY(${deflection * 1.5}px)`
              }}
            >
              <span>{selectedLoad} KG</span>
              <span className="text-[9px] uppercase">{isSnapped ? 'BROKEN!' : 'SECURE'}</span>
            </div>
          </div>

          {/* Status Alert Banner */}
          <div className="mt-4 w-full text-center">
            {isSnapped ? (
              <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center justify-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>Cheap recycled local nets snap under 120kg weight! Dangerous for balconies.</span>
              </div>
            ) : (
              <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Garware High-Density Net absorbs {selectedLoad}kg impact with ZERO structural deformation.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
