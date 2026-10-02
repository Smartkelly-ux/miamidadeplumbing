import React, { useRef, useState, useEffect } from 'react';
import { IMAGES } from '../assets/images';
import { Phone, Mail } from 'lucide-react';

export const EmergencySection: React.FC = () => {
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
      id="emergency"
      ref={containerRef}
      className="w-full py-16 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#F3EEE6] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Dark Container */}
        <div className="bg-[#171717] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/10 p-6 sm:p-12 lg:p-16 text-white relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Emergency Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Mono Label */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#B86F50] animate-ping" />
                <span className="mono-label text-[#8EAAA5] text-xs sm:text-sm">
                  24 / 7 EMERGENCY
                </span>
              </div>

              {/* Headline */}
              <h2 className="display-title text-white tracking-tight mb-6">
                When it can't wait.
              </h2>

              {/* Supporting Text */}
              <p className="font-geist text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-lg">
                Emergency plumbing service is currently advertised 24/7. Water leaks, burst supply valves, sewer backups, and urgent water heater failures across Miami, Pinecrest, and Miami-Dade County.
              </p>

              {/* Action Buttons: CALL NOW & EMAIL */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a
                  href="tel:7867563185"
                  className="eliras-btn group text-center"
                  aria-label="Call emergency plumbing hotline"
                >
                  <span className="btn-inner-border" />
                  <span className="btn-text">
                    <Phone className="w-4 h-4 text-[#8EAAA5]" />
                    CALL NOW
                  </span>
                </a>

                <a
                  href="mailto:abe@miami-dade-plumbing.com"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-white/20 hover:border-[#8EAAA5] text-xs font-geist-mono uppercase tracking-wider text-white hover:bg-white/10 transition-all duration-200"
                  aria-label="Email emergency inquiry"
                >
                  <Mail className="w-3.5 h-3.5 text-[#8EAAA5]" />
                  <span>EMAIL US</span>
                </a>
              </div>

              {/* Emergency Service Specs */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs font-geist-mono text-white/70">
                <div>
                  <div className="text-[#8EAAA5] font-semibold mb-0.5">24/7</div>
                  <div>Availability</div>
                </div>
                <div>
                  <div className="text-[#8EAAA5] font-semibold mb-0.5">MIAMI-DADE</div>
                  <div>Service Area</div>
                </div>
                <div>
                  <div className="text-[#8EAAA5] font-semibold mb-0.5">DIRECT</div>
                  <div>Owner Dispatch</div>
                </div>
              </div>
            </div>

            {/* Right Column: Large Image with Inset Clip-path reveal */}
            <div className="lg:col-span-6">
              <div
                style={{
                  clipPath: inView
                    ? 'inset(0 0 0 0)'
                    : 'inset(0 0 100% 0)',
                  transition: 'clip-path 850ms cubic-bezier(0.22, 1, 0.36, 1)',
                }}
                className="relative h-[320px] sm:h-[440px] rounded-[20px] overflow-hidden border border-white/15 bg-black/40"
              >
                <img
                  src={IMAGES.emergency}
                  alt="24/7 Emergency plumbing repair and precision pipe connection in Miami"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  style={{
                    transform: inView ? 'scale(1)' : 'scale(1.06)',
                    transition: 'transform 1000ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-end text-white font-geist-mono text-xs">
                  <span className="text-white/70">
                    PINECREST · MIAMI · DADE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
