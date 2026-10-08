import React, { useState, useEffect, useRef } from 'react';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { DISPLAY_PHONE } from '../../utils/whatsapp';

export default function Hero({ onOpenQuoteModal }) {
  // High-Definition Banner Images Carousel matching reference UI
  const heroSlides = [
    {
      url: '/images/services/banner_image1.jpeg',
      title: 'High-Rise Balcony Safety Nets'
    },
    {
      url: '/images/services/banner_image2.jpg',
      title: 'Anti-Pigeon & Bird Protection Nets'
    },
    {
      url: '/images/services/after.png',
      title: 'Invisible Stainless Steel Nets'
    },
    {
      url: '/images/services/banner_image4.png',
      title: 'Children & Pet Safety Netting'
    }
  ];

  // Rotating CTA Messages synchronized with image slide transitions
  const callMessages = [
    'Need Help? Call Us',
    'Talk to Our Experts',
    'Have Questions? Call Now',
    'Get in Touch'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Auto slide carousel (5 seconds per slide)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Synchronize rotating text slide-up animation with the image transition
  useEffect(() => {
    setIsAnimating(true);
    const animTimeout = setTimeout(() => {
      setMessageIndex(currentSlide % callMessages.length);
      setIsAnimating(false);
    }, 250);

    return () => clearTimeout(animTimeout);
  }, [currentSlide, callMessages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // Mobile Touch Swipe Handling
  const minSwipeDistance = 45;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  const rawPhone = DISPLAY_PHONE.replace(/\s+/g, '');

  return (
    <section 
      id="hero" 
      className="relative w-full bg-slate-950 overflow-hidden font-sans select-none"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Full-Width Image Carousel Container */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[25/9] max-h-[700px] overflow-hidden bg-slate-900">
        {heroSlides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img 
              src={slide.url} 
              alt={slide.title} 
              className="w-full h-full object-cover object-left"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Hero Call Section: Slide-Up Text is In Sync with Image Slide Transitions */}
        <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 w-auto">
          
          {/* Slide-Up Rotating Text Badge Above Contact Number (Synced with Image Slides) */}
          <div className="px-3.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#EBAC57]/60 shadow-xl flex items-center gap-1.5 pointer-events-none">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EBAC57] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EBAC57]"></span>
            </span>

            <div className="h-6 w-42 sm:w-58 sm:h-7.5 overflow-hidden relative flex items-center">
              <span
                className={`block text-[11px] sm:text-lg font-bold text-[#EBAC57] tracking-tight whitespace-nowrap transition-all duration-400 ease-out transform ${
                  isAnimating
                    ? 'opacity-0 -translate-y-3 scale-95'
                    : 'opacity-100 translate-y-0 scale-100'
                }`}
              >
                {callMessages[messageIndex]}
              </span>
            </div>
          </div>

          {/* Centered Main Call CTA Button on Banner */}
          <a
            href={`tel:${rawPhone}`}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-[#EBAC57] hover:bg-[#EB7D1D] text-slate-950 font-extrabold text-xs sm:text-sm md:text-base shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-amber-300/40 uppercase tracking-wider whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-slate-950 fill-slate-950 shrink-0" />
            <span>CALL : {DISPLAY_PHONE}</span>
          </a>
        </div>

        {/* Left Arrow Navigation Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs border border-white/20 transition-all active:scale-90 shadow-lg cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow Navigation Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs border border-white/20 transition-all active:scale-90 shadow-lg cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Bottom Slide Indicator Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? 'w-6 bg-[#EBAC57]' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
