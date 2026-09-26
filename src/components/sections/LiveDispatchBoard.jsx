import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Truck, MapPin, Clock, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';

export default function LiveDispatchBoard({ onOpenQuoteModal }) {
  const activeJobs = [
    { team: 'Vizag Unit 1', area: 'Madhurawada (Gated Society)', status: 'In Progress', service: 'Invisible SS Netting', time: '10 mins ago' },
    { team: 'Vizag Unit 2', area: 'MVP Colony (Sector 4)', status: 'Completed', service: 'Garware Balcony Safety Net', time: '45 mins ago' },
    { team: 'Vizag Unit 3', area: 'Seethammadhara', status: 'En Route', service: 'Pigeon Anti-Bird Protection', time: 'Just Dispatched' },
    { team: 'Vizag Unit 4', area: 'Rushikonda Beach Road', status: 'Inspection', service: 'Terrace Cricket Box Net', time: 'Active On Site' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <SectionHeading
        badge="Live Operations Tracker"
        title="Active Service Teams Across"
        titleGradient="Visakhapatnam Right Now"
        subtitle="Our local installation squads are on the move daily across Vizag. Request your free site visit in under 2 hours!"
      />

      <div className="bg-[#080D1A] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
        {/* Top Header Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
            <span className="text-xs sm:text-sm font-bold text-white font-display tracking-wider uppercase">
              LIVE VIZAG DISPATCH SYSTEM • 4 TEAMS ACTIVE
            </span>
          </div>

          <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
            Average Site Arrival: 42 Mins
          </span>
        </div>

        {/* Dispatch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {activeJobs.map((job, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 relative group hover:border-amber-500/40 transition-colors">
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-amber-400 font-bold">{job.team}</span>
                <span className="text-[10px] text-slate-500">{job.time}</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-white font-bold text-sm">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">{job.area}</span>
                </div>
                <p className="text-xs text-slate-400">{job.service}</p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                  job.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-cyan-500/20 text-cyan-300'
                }`}>
                  {job.status}
                </span>

                <button
                  onClick={onOpenQuoteModal}
                  className="text-[11px] font-bold text-amber-400 hover:underline"
                >
                  Book In My Area →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
