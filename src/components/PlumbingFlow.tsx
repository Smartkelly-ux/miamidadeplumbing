import React, { useState } from 'react';
import { IMAGES } from '../assets/images';
import { Search, Wrench, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

export const PlumbingFlow: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: '01',
      title: 'PROBLEM',
      headline: 'Immediate Assessment & Triage',
      desc: 'Whether it is a burst fixture, sudden water heater failure, or a backed-up main drain, we identify the exact root cause rapidly without destructive exploratory demolition.',
      icon: AlertCircle,
      image: IMAGES.hero,
      tag: 'STAGE 01 · IDENTIFY',
    },
    {
      step: '02',
      title: 'DIAGNOSE',
      headline: 'Precision Diagnostic Scopes',
      desc: 'Using high-resolution camera lines and pressure gauges, we inspect the entire conduit system to uncover hidden root intrusion, pipe corrosion, or thermal loss.',
      icon: Search,
      image: IMAGES.drainService,
      tag: 'STAGE 02 · PRECISION',
    },
    {
      step: '03',
      title: 'REPAIR',
      headline: 'Master Craft Execution',
      desc: 'We replace and repair using premium-grade brass, copper, and stainless components with clean, tidy soldering and code-compliant installation.',
      icon: Wrench,
      image: IMAGES.flowRepair,
      tag: 'STAGE 03 · RESTORE',
    },
    {
      step: '04',
      title: 'CHECK',
      headline: 'Hydrostatic Testing & Clean Turnover',
      desc: 'We pressurize the system, double-check all joints against micro-leaks, and leave your residence spotless before wrapping up.',
      icon: CheckCircle,
      image: IMAGES.fieldCurved,
      tag: 'STAGE 04 · VERIFY',
    },
  ];

  return (
    <section id="the-flow" className="w-full py-16 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#F3EEE6] scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F50]" />
            <span className="mono-label text-[#667C7A] text-xs sm:text-sm">
              METHODOLOGY
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="large-title text-[#171717] tracking-tight">
              The Plumbing Flow
            </h2>
            <p className="font-geist text-base sm:text-lg text-[#667C7A] max-w-md">
              A clean, deliberate 4-stage process designed for calm residential clarity from initial call to final pressure check.
            </p>
          </div>
        </div>

        {/* Stage Selector Pills / Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {stages.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-[16px] border text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#171717] border-[#171717] text-white shadow-lg'
                    : 'bg-[#FFFFFF] border-[#DCD5CC] text-[#171717] hover:border-[#8EAAA5]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`font-geist-mono text-xs ${
                      isActive ? 'text-[#8EAAA5]' : 'text-[#667C7A]'
                    }`}
                  >
                    {stage.step}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#B86F50]" />
                  )}
                </div>
                <div className="font-geist text-base sm:text-lg font-medium">
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Active Stage Container */}
        <div className="bg-[#FFFFFF] rounded-[24px] border border-[#DCD5CC] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Area */}
            <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 mb-4 font-geist-mono text-xs text-[#8EAAA5] uppercase tracking-wider">
                <span>{stages[activeStage].tag}</span>
              </div>

              <h3 className="medium-title text-[#171717] text-2xl sm:text-3xl lg:text-4xl mb-4 font-normal">
                {stages[activeStage].headline}
              </h3>

              <p className="font-geist text-base sm:text-lg text-[#667C7A] leading-relaxed mb-8">
                {stages[activeStage].desc}
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    setActiveStage((prev) => (prev + 1) % stages.length)
                  }
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-geist-mono text-[#171717] hover:text-[#8EAAA5] transition-colors eliras-link"
                >
                  <span>NEXT STAGE</span>
                  <ArrowRight className="w-4 h-4 text-[#8EAAA5]" />
                </button>
                <span className="text-[#DCD5CC]">|</span>
                <a
                  href="tel:7867563185"
                  className="text-xs uppercase tracking-wider font-geist-mono text-[#667C7A] hover:text-[#171717] transition-colors"
                >
                  Direct Dispatch (786) 756-3185
                </a>
              </div>
            </div>

            {/* Right Stage Photographic Frame */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative h-[280px] sm:h-[380px] rounded-[18px] overflow-hidden border border-[#DCD5CC] bg-[#E7E0D6]">
                <img
                  key={stages[activeStage].step}
                  src={stages[activeStage].image}
                  alt={stages[activeStage].headline}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center animate-fadeIn"
                  style={{
                    animationDuration: '450ms',
                    animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-geist-mono text-xs">
                  <span className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-md border border-white/10">
                    STAGE {stages[activeStage].step} OF 04
                  </span>
                  <span className="text-[#8EAAA5]">MIAMI DADE STANDARD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
