import React, { useRef, useState, useEffect } from 'react';
import { IMAGES } from '../assets/images';
import { Flame, CheckCircle2, Phone } from 'lucide-react';

export const WaterHeaterFeature: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="water-heaters"
      ref={containerRef}
      className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#F3EEE6] overflow-hidden scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column: enters from top-left */}
          <div
            style={{
              transform: inView ? 'translate(0, 0)' : 'translate(-20px, -20px)',
              opacity: inView ? 1 : 0,
              transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1) 130ms, opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) 130ms',
            }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Mono Label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B86F50]" />
              <span className="mono-label text-[#667C7A] text-xs sm:text-sm">
                02 / WATER HEATERS
              </span>
            </div>

            {/* Headline */}
            <h2 className="large-title text-[#171717] tracking-tight mb-6">
              Hot water, <br />
              without the wait.
            </h2>

            {/* Supporting Prose */}
            <p className="font-geist text-lg sm:text-xl text-[#667C7A] leading-relaxed mb-6">
              Water-heater repair and replacement across Miami-Dade. Whether you need a swift heating element replacement, pressure relief valve servicing, or a continuous-flow tankless conversion, we ensure dependable warmth on demand.
            </p>

            {/* Specs / Bullet points */}
            <div className="space-y-3 mb-8 pt-4 border-t border-[#DCD5CC]">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#8EAAA5] shrink-0" />
                <span className="font-geist text-sm sm:text-base text-[#171717]">
                  Tankless & Traditional Storage Units
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#8EAAA5] shrink-0" />
                <span className="font-geist text-sm sm:text-base text-[#171717]">
                  Same-Day Emergency Diagnostic & Repair
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#8EAAA5] shrink-0" />
                <span className="font-geist text-sm sm:text-base text-[#171717]">
                  Clean Code-Compliant Miami-Dade Installation
                </span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <a
                href="tel:7867563185"
                className="eliras-btn group"
                aria-label="Call for water heater service"
              >
                <span className="btn-inner-border" />
                <span className="btn-text">
                  <Flame className="w-4 h-4 text-[#B86F50]" />
                  SCHEDULE SERVICE
                </span>
              </a>
            </div>
          </div>

          {/* Right Image Column: enters from bottom-right */}
          <div
            style={{
              transform: inView ? 'translate(0, 0) scale(1)' : 'translate(40px, 50px) scale(1.04)',
              opacity: inView ? 1 : 0.7,
              transition: 'transform 950ms cubic-bezier(0.22, 1, 0.36, 1), opacity 950ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-[24px] overflow-hidden border border-[#DCD5CC] bg-[#E7E0D6] shadow-sm">
              <img
                src={IMAGES.waterHeater}
                alt="Modern tankless water heater installation in Miami utility room"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[460px] lg:h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge overlay inside image */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div className="bg-[#171717]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                  <p className="font-geist text-sm font-medium text-white">Tankless & Hybrid Systems</p>
                  <p className="font-geist-mono text-xs text-[#8EAAA5]">Precision piping & safety release valves</p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 font-geist-mono text-xs text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>READY FOR DISPATCH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
