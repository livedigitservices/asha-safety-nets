import React, { useState, useEffect, useRef } from 'react';
import { Phone, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { DISPLAY_PHONE } from '../../utils/whatsapp';

export default function Hero({ onOpenQuoteModal }) {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const   textRef = useRef(null);
  const ctaRef = useRef(null);

  // Clean Background Images Carousel
  const heroSlides = [
    {
      url: '/images/services/service_1.jpg',
      title: 'High-Rise Balcony Safety Nets'
    },
    {
      url: '/images/services/service_2.jpg',
      title: 'Anti-Pigeon & Bird Protection Nets'
    },
    {
      url: '/images/services/service_6.jpg',
      title: 'Invisible Stainless Steel Nets'
    },
    {
      url: '/images/services/service_4.jpg',
      title: 'Children & Pet Safety Netting'
    }
  ];

  // Dynamic Rotating Keywords for Infinite Seamless Reveal
  const dynamicWords = [
    'Garware Balcony Nets',
    'Anti-Pigeon Nets',
    'Invisible SS Nets',
    'Children Safety Nets'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto slide carousel (5 seconds per slide)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Infinite seamless reveal word rotator (3 seconds per word)
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % dynamicWords.length);
        setIsAnimating(false);
      }, 400);
    }, 3000);
    return () => clearInterval(wordInterval);
  }, [dynamicWords.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // GSAP clean fade entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([titleRef.current, textRef.current, ctaRef.current], {
        y: 25,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power2.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative h-[85vh] sm:h-[82vh] min-h-[560px] flex items-end justify-start pb-14 sm:pb-20 pt-20 px-4 sm:px-8 lg:px-12 overflow-hidden bg-slate-950 text-white font-sans"
    >
      {/* Background Image Carousel Track */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={slide.url} 
              alt={slide.title} 
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-[7000ms] ease-out opacity-45"
            />
          </div>
        ))}
      </div>

      {/* Bottom-Left Aligned Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl space-y-5 text-left">
          {/* Clean Modern Heading with Infinite Reveal Text Animation */}
          <div ref={titleRef} className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] font-heading">
              Protect Your Balcony & Family With{' '}
              <span className="block mt-1 sm:mt-0 sm:inline-block h-[1.3em] overflow-hidden align-bottom relative">
                <span 
                  className={`inline-block text-[#EBAC57] transition-all duration-500 ease-out transform ${
                    isAnimating ? 'opacity-0 translate-y-6 scale-95' : 'opacity-100 translate-y-0 scale-100'
                  }`}
                >
                  {dynamicWords[wordIndex]}
                </span>
              </span>
            </h1>

            {/* Minimal Subtitle */}
            <p ref={textRef} className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed font-normal opacity-90">
              Garware 100% HDPE Nylon & Invisible Stainless Steel Nets for high-rise apartments in Vizag with 10 Years Guarantee.
            </p>
          </div>

          {/* 2 Clean CTA Buttons Aligned Left */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 pt-2">
            <button
              onClick={() => onOpenQuoteModal && onOpenQuoteModal()}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#EBAC57] hover:bg-[#EB7D1D] text-slate-950 font-extrabold text-sm sm:text-base shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Get Free On-Site Quote</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <a
              href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/25 backdrop-blur-md transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-[#EBAC57]" />
              <span>Call {DISPLAY_PHONE}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom-Right Corner Navigation & Slide Indicators */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-20 flex items-center gap-3">
        <div className="flex items-center gap-1.5 mr-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? 'w-7 bg-[#EBAC57]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-md cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-md cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
