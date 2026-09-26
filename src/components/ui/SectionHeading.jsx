import React from 'react';

export default function SectionHeading({
  badge,
  title,
  titleGradient,
  subtitle,
  center = true,
  className = ''
}) {
  return (
    <div className={`space-y-3.5 ${center ? 'text-center max-w-3xl mx-auto' : ''} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold tracking-wide uppercase shadow-xs">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
        {title}{' '}
        {titleGradient && (
          <span className="text-gradient-primary block sm:inline mt-1 sm:mt-0">
            {titleGradient}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
