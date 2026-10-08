
import { statsData } from '../../data/statsData';

export default function QuickStatsBanner() {
  return (
    <section className="relative z-20 mt-4 sm:mt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl bg-white border border-slate-200 shadow-xl">
        {statsData.map((stat, index) => (
          <div 
            key={index}
            className={`flex flex-col items-center text-center p-3 ${
              index !== statsData.length - 1 ? 'lg:border-r lg:border-slate-100' : ''
            }`}
          >
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gradient-primary tracking-tight">
              {stat.value}
            </span>
            <span className="text-sm font-bold text-slate-900 mt-1">
              {stat.label}
            </span>
            <span className="text-xs text-slate-500 mt-0.5">
              {stat.sub}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
