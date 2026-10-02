import React, { useRef, useState, useEffect } from 'react';
import { IMAGES } from '../assets/images';
import { Phone, Navigation, Mail, MapPin } from 'lucide-react';

interface FinalCtaProps {
  onOpenModal?: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenModal }) => {
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
      id="contact"
      ref={containerRef}
      className="w-full py-16 sm:py-28 px-4 sm:px-6 lg:px-12 bg-[#F3EEE6] scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: CTA Text & Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Mono Label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B86F50]" />
              <span className="mono-label text-[#667C7A] text-xs sm:text-sm">
                DIRECT CONTACT
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{
                transform: inView ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'transform 750ms cubic-bezier(0.22, 1, 0.36, 1) 100ms',
              }}
              className="display-title text-[#171717] tracking-tight mb-4"
            >
              Need a plumber?
            </h2>

            {/* Supporting & Business Information */}
            <p className="font-geist text-xl sm:text-2xl text-[#171717] font-medium mb-1">
              Miami Dade Plumbing
            </p>
            <p className="font-geist text-base sm:text-lg text-[#667C7A] leading-relaxed mb-6">
              Prompt residential plumbing, water heater service, drain line clearing, and 24/7 emergency response throughout Miami, Pinecrest, and surrounding communities.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-3 mb-8 pb-6 border-b border-[#DCD5CC]">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8EAAA5] shrink-0" />
                <a
                  href="tel:7867563185"
                  className="font-geist text-lg sm:text-xl font-medium text-[#171717] hover:text-[#8EAAA5] transition-colors"
                >
                  (786) 756-3185
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#8EAAA5] shrink-0" />
                <a
                  href="mailto:abe@miami-dade-plumbing.com"
                  className="font-geist text-sm sm:text-base text-[#667C7A] hover:text-[#171717] transition-colors"
                >
                  abe@miami-dade-plumbing.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#8EAAA5] shrink-0" />
                <span className="font-geist text-sm sm:text-base text-[#667C7A]">
                  9417 SW 77th Ct, Miami, FL 33156
                </span>
              </div>
            </div>

            {/* CTA Buttons: CALL NOW, EMAIL US, GET DIRECTIONS */}
            <div
              style={{
                transform: inView ? 'translateY(0)' : 'translateY(15px)',
                opacity: inView ? 1 : 0,
                transition: 'transform 450ms cubic-bezier(0.22, 1, 0.36, 1) 220ms, opacity 450ms cubic-bezier(0.22, 1, 0.36, 1) 220ms',
              }}
              className="flex flex-wrap items-center gap-3.5"
            >
              <a
                href="tel:7867563185"
                className="eliras-btn group text-center"
                aria-label="Call Miami Dade Plumbing now"
              >
                <span className="btn-inner-border" />
                <span className="btn-text">
                  <Phone className="w-4 h-4 text-[#8EAAA5]" />
                  CALL NOW
                </span>
              </a>

              <a
                href="mailto:abe@miami-dade-plumbing.com"
                className="eliras-btn-light group text-center"
                aria-label="Email Miami Dade Plumbing"
              >
                <span className="btn-inner-border" />
                <span className="btn-text">
                  <Mail className="w-4 h-4 text-[#8EAAA5]" />
                  EMAIL US
                </span>
              </a>

              <a
                href="https://maps.google.com/?q=9417+SW+77th+Ct,+Miami,+FL+33156"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-geist-mono uppercase tracking-wider text-[#667C7A] hover:text-[#171717] transition-colors"
                aria-label="Get directions to Miami Dade Plumbing"
              >
                <Navigation className="w-3.5 h-3.5 text-[#8EAAA5]" />
                <span>DIRECTIONS</span>
              </a>
            </div>
          </div>

          {/* Right Column: Companion Rounded Image */}
          <div className="lg:col-span-6">
            <div
              style={{
                clipPath: inView
                  ? 'inset(0 0 0 0)'
                  : 'inset(100% 0 0 0)',
                transition: 'clip-path 900ms cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              className="relative h-[340px] sm:h-[440px] rounded-[24px] overflow-hidden border border-[#DCD5CC] bg-[#E7E0D6] shadow-sm"
            >
              <img
                src={IMAGES.fieldCurved}
                alt="Miami Dade residential plumbing interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 text-white font-geist-mono text-xs flex items-center justify-between">
                <span className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                  9417 SW 77TH CT · MIAMI, FL
                </span>
                <span className="text-[#8EAAA5]">LOCAL MASTER PLUMBER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
