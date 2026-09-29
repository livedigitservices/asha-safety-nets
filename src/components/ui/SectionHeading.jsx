import React from 'react';

export default function SectionHeading({
  badge,
  title,
  titleGradient,
  subtitle,
  center = true,
  dark = false,
  className = ''
}) {
  return (
    <div className={`space-y-3.5 ${center ? 'text-center max-w-3xl mx-auto' : ''} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-xs ${
          dark 
            ? 'bg-white/10 border border-white/20 text-[#EBAC57]' 
            : 'bg-amber-50 border border-amber-300 text-[#264595]'
        }`}>
          <span className="w-2 h-2 rounded-full bg-[#EBAC57] animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight font-heading ${
        dark ? 'text-white' : 'text-slate-900'
      }`}>
        {title}{' '}
        {titleGradient && (
          <span className="text-gradient-primary block sm:inline mt-1 sm:mt-0">
            {titleGradient}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
