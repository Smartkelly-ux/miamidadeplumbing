import React, { useState } from 'react';

export const ServiceStrip: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const primaryServices = [
    { name: 'DRAINS', code: '01', desc: 'Main Line & Hydro Jetting' },
    { name: 'WATER HEATERS', code: '02', desc: 'Tankless & Traditional' },
    { name: 'SHOWERS', code: '03', desc: 'Custom Valves & Rainfall' },
    { name: 'FAUCETS', code: '04', desc: 'Architectural Fixtures' },
    { name: 'SEWER', code: '05', desc: 'Camera Diagnostics' },
    { name: 'GAS LINES', code: '06', desc: 'Certified Connections' },
    { name: 'TOILETS', code: '07', desc: 'Repairs & Installations' },
    { name: 'REPIPING', code: '08', desc: 'Seamless Copper Supply' },
    { name: 'EMERGENCY', code: '09', desc: '24/7 Priority Dispatch' },
  ];

  const secondaryTags = [
    'PINECREST RESIDENTIAL',
    'MIAMI-DADE LICENSED',
    'CLEAN WORKSPACE GUARANTEE',
    'DIRECT OWNER SERVICE',
    '20+ YEARS TRADE EXPERTISE',
    'HYDROSTATIC PRESSURE TESTING',
    'SAME-DAY RAPID DISPATCH',
    'NO HIDDEN COMMISSIONS',
  ];

  return (
    <section
      className="w-full py-12 sm:py-20 bg-[#F3EEE6] border-y border-[#DCD5CC] overflow-hidden select-none relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Moving Services Carousel"
    >
      {/* Top Section Label */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8 flex items-center justify-between text-xs font-geist-mono text-[#667C7A]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B86F50] animate-pulse" />
          <span className="uppercase tracking-widest text-[#171717] font-medium">
            CONTINUOUS SERVICE INDEX
          </span>
        </div>
      </div>

      {/* Top Hairline Accent Line with counter-animation */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#8EAAA5]/50 to-transparent mb-6 sm:mb-8" />

      {/* Primary Moving Carousel Track (Moves Left) */}
      <div className="flex overflow-hidden relative w-full mb-6">
        <div
          className={`flex whitespace-nowrap will-change-transform ${
            isPaused ? 'carousel-paused' : ''
          }`}
          style={{
            animation: 'marqueeLeft 38s linear infinite',
          }}
        >
          {/* Loop twice for seamless infinite scroll */}
          {[...primaryServices, ...primaryServices].map((item, idx) => (
            <div
              key={`primary-${idx}`}
              className="inline-flex items-center mx-4 sm:mx-8 group/item cursor-pointer"
            >
              <span className="font-geist font-normal text-4xl sm:text-6xl lg:text-[72px] tracking-tighter text-[#171717] group-hover/item:text-[#8EAAA5] transition-colors duration-300">
                {item.name}
              </span>
              <span className="font-geist-mono text-xs sm:text-sm text-[#8EAAA5] group-hover/item:text-[#B86F50] font-normal ml-3 sm:ml-4 align-top tracking-wider">
                [{item.code}]
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#8EAAA5] ml-8 sm:ml-14 shrink-0 opacity-70 group-hover/item:scale-125 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Sub-Ticker Carousel Track (Moves Right for dynamic counter-depth) */}
      <div className="flex overflow-hidden relative w-full pt-2">
        <div
          className={`flex whitespace-nowrap will-change-transform ${
            isPaused ? 'carousel-paused' : ''
          }`}
          style={{
            animation: 'marqueeRight 44s linear infinite',
          }}
        >
          {/* Loop twice for seamless infinite scroll */}
          {[...secondaryTags, ...secondaryTags].map((tag, idx) => (
            <div
              key={`secondary-${idx}`}
              className="inline-flex items-center mx-3 sm:mx-5 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#DCD5CC] hover:border-[#8EAAA5] shadow-2xs transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B86F50] mr-2.5" />
              <span className="font-geist-mono text-xs text-[#171717] uppercase tracking-wider">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Hairline Accent Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#8EAAA5]/50 to-transparent mt-6 sm:mt-8" />

      {/* Carousel Keyframe Styles */}
      <style>{`
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .carousel-paused {
          animation-play-state: paused !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .will-change-transform {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};
