import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Phone, ArrowRight, Award, MapPin, CheckCircle, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { DISPLAY_PHONE } from '../../utils/whatsapp';

export default function Hero({ onOpenQuoteModal }) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);

  // Background Slide Images Carousel Array with Authentic Real Installation Photos
  const heroSlides = [
    {
      url: '/images/services/service_1.jpg',
      title: 'High-Rise Balcony Safety Nets in Vizag',
      caption: '100% Garware Virgin HDPE Nylon Netting'
    },
    {
      url: '/images/services/service_2.jpg',
      title: 'Pigeon & Anti-Bird Protection Nets',
      caption: 'Non-Harmful Bird Barrier for Apartments'
    },
    {
      url: '/images/services/service_6.jpg',
      title: 'Invisible 316 Marine SS Wire Nets',
      caption: 'Luxury Architectural View Preservation'
    },
    {
      url: '/images/services/service_4.jpg',
      title: 'Children & Toddler Fall Protection',
      caption: '200+ kg Tested Impact Load Capacity'
    },
    {
      url: '/images/services/service_10.jpg',
      title: 'Sports & Cricket Box Enclosures',
      caption: 'Custom Terrace & Ground Pitch Installation'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // GSAP initial text entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(badgeRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.from(headlineRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.from(ctaRef.current?.children || [], {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.6
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center pt-12 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950"
    >
      {/* Smooth Horizontal Sliding Carousel Background Track */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="flex w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div key={index} className="w-full h-full shrink-0 relative overflow-hidden bg-slate-900">
              <img 
                src={slide.url} 
                alt={slide.title} 
                className="w-full h-full object-cover object-center opacity-50 scale-105"
              />
            </div>
          ))}
        </div>

        {/* Readability Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-950/70 pointer-events-none"></div>
        <div className="absolute inset-0 bg-light-dots opacity-20 pointer-events-none"></div>
      </div>

      {/* Manual Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-lg hidden sm:flex"
        aria-label="Previous image slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-lg hidden sm:flex"
        aria-label="Next image slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators Pills */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              idx === currentSlide ? 'w-9 bg-sky-400 shadow-md shadow-sky-400/50' : 'w-2.5 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Content Overlay Container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 py-8">
        
        {/* Top Trust Pill */}
        <div ref={badgeRef} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/85 border border-sky-400/30 text-white shadow-xl backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping"></span>
          <MapPin className="w-4 h-4 text-sky-400" />
          <span className="text-xs sm:text-sm font-semibold">
            #1 Safety Net Installer in <strong>Vizag (Visakhapatnam)</strong>
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden sm:inline text-xs text-amber-400 font-bold flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" /> 4.9 Rating (1,200+ Reviews)
          </span>
        </div>

        {/* Main Headline */}
        <div ref={headlineRef} className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            Protect Your Balcony & Family With{' '}
            <span className="text-gradient-primary block sm:inline mt-1 sm:mt-0">
              Garware Premium Nets
            </span>
          </h1>

          <p className="text-slate-200 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-sm">
            100% High-Tensile Garware HDPE Nylon & Invisible Stainless Steel Nets for high-rise apartments across <strong>Visakhapatnam</strong>. 100% child safe, bird resistant, with <strong>10 Years Written Warranty & Free Site Visit</strong>.
          </p>

          {/* Dynamic Active Slide Caption Pill */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/40 backdrop-blur-md text-sky-300 text-xs font-semibold shadow-md">
            <span>Featured: {heroSlides[currentSlide].title}</span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-600 to-teal-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <span>Get Free Quote Today</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm sm:text-base border border-slate-700 backdrop-blur-md shadow-lg transition-all duration-300"
          >
            <Phone className="w-5 h-5 text-sky-400" />
            <span>Call Now: {DISPLAY_PHONE}</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="pt-8 border-t border-slate-800/80 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {[
            { title: 'Garware Grade', desc: '100% Virgin HDPE Yarn', icon: Award },
            { title: '10 Years Warranty', desc: 'Official Written Card', icon: ShieldCheck },
            { title: '2-Hour Site Visit', desc: 'Free Measurement in Vizag', icon: MapPin },
            { title: 'Same-Day Fitting', desc: 'SS 304 Anchor Drilling', icon: CheckCircle }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
              <item.icon className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white">{item.title}</h4>
                <p className="text-[11px] text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
