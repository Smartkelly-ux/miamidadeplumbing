import React, { useState } from 'react';
import { IMAGES } from '../assets/images';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const FieldCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      number: '01 / 04',
      tag: '01 / DRAINS',
      title: 'Main Line Scope & Hydro Clearing',
      desc: 'Precision diagnostic camera probes and zero-damage line clearing across residential properties.',
      image: IMAGES.drainService,
      alt: 'Clean drain cleaning and camera inspection equipment in Miami home',
    },
    {
      number: '02 / 04',
      tag: '02 / WATER HEATERS',
      title: 'Tankless & Continuous Flow Conversions',
      desc: 'High-performance heating systems installed with clean copper lines and pressure safety manifolds.',
      image: IMAGES.waterHeater,
      alt: 'Tankless water heater installation and clean piping',
    },
    {
      number: '03 / 04',
      tag: '03 / FIXTURES',
      title: 'Architectural Bath & Kitchen Fixture Craft',
      desc: 'Flawless valve calibration, custom sink faucets, and rainfall showers with lasting integrity.',
      image: IMAGES.fieldCurved,
      alt: 'Architectural bathroom fixture craftsmanship',
    },
    {
      number: '04 / 04',
      tag: '04 / LINES',
      title: 'Copper Repiping & Exterior Water Mains',
      desc: 'Long-term pressure stabilization and comprehensive line restoration throughout Miami-Dade.',
      image: IMAGES.flowRepair,
      alt: 'Water line repair and copper soldering craftsmanship',
    },
  ];

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const slide = slides[currentSlide];

  return (
    <section id="field" className="w-full py-16 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#F3EEE6] scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Carousel Header with compact text controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 pb-6 border-b border-[#DCD5CC]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B86F50]" />
              <span className="mono-label text-[#667C7A] text-xs sm:text-sm">
                DOCUMENTED WORK
              </span>
            </div>
            <h2 className="large-title text-[#171717] tracking-tight">
              In The Field
            </h2>
          </div>

          {/* Compact PREV / NEXT Controls */}
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            {/* Oversized Slide Number */}
            <div className="font-geist-mono text-2xl sm:text-3xl text-[#171717] font-normal tracking-tight">
              {slide.number}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="px-4 py-2 rounded-lg border border-[#DCD5CC] hover:border-[#8EAAA5] bg-white text-xs font-geist-mono uppercase tracking-wider text-[#171717] hover:text-[#8EAAA5] transition-all flex items-center gap-1.5 cursor-pointer"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>PREV</span>
              </button>

              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-lg border border-[#DCD5CC] hover:border-[#8EAAA5] bg-white text-xs font-geist-mono uppercase tracking-wider text-[#171717] hover:text-[#8EAAA5] transition-all flex items-center gap-1.5 cursor-pointer"
                aria-label="Next slide"
              >
                <span>NEXT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slide Visual Presentation */}
        <div className="bg-[#FFFFFF] rounded-[24px] border border-[#DCD5CC] p-6 sm:p-10 lg:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-7">
              <div className="relative h-[300px] sm:h-[420px] rounded-[18px] overflow-hidden border border-[#DCD5CC] bg-[#E7E0D6]">
                <img
                  key={currentSlide}
                  src={slide.image}
                  alt={slide.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center animate-fadeIn"
                  style={{
                    animationDuration: '600ms',
                    animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating pill badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-geist-mono text-xs text-white bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/10 uppercase tracking-widest">
                    {slide.tag}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Slide Text */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="font-geist-mono text-xs text-[#8EAAA5] uppercase tracking-wider mb-3">
                PROJECT CLASSIFICATION
              </div>

              <h3 className="medium-title text-[#171717] text-2xl sm:text-3xl mb-4 font-normal">
                {slide.title}
              </h3>

              <p className="font-geist text-base sm:text-lg text-[#667C7A] leading-relaxed mb-8">
                {slide.desc}
              </p>

              {/* Progress Dots */}
              <div className="flex items-center gap-2 pt-4 border-t border-[#DCD5CC]">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === idx
                        ? 'w-8 bg-[#171717]'
                        : 'w-2 bg-[#DCD5CC] hover:bg-[#8EAAA5]'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
