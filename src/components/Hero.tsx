import React, { useState, useEffect } from 'react';
import { IMAGES } from '../assets/images';
import { Phone, Mail, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Start hero load choreography immediately without preloader
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex items-end sm:items-center justify-start overflow-hidden pt-24 pb-12 sm:py-24 px-4 sm:px-6 lg:px-12">
      {/* Full-bleed background photography */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#171717]">
        <img
          src={IMAGES.hero}
          alt="Sunlit modern Miami residential interior with architectural plumbing"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          style={{
            opacity: loaded ? 1 : 0.65,
            transform: loaded ? 'scale(1)' : 'scale(1.04)',
            transition: 'opacity 1100ms cubic-bezier(0.22, 1, 0.36, 1), transform 1100ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
        {/* Soft atmospheric gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-[#171717]/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Foreground Container: Dark translucent rounded panel */}
      <div className="relative z-10 w-full max-w-2xl mx-auto sm:mx-0">
        <div
          style={{
            backgroundColor: 'rgba(23, 23, 23, 0.84)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
            transform: loaded ? 'translateY(0) scale(1)' : 'translateY(35px) scale(0.985)',
            opacity: loaded ? 1 : 0,
            transition: 'transform 850ms cubic-bezier(0.22, 1, 0.36, 1) 150ms, opacity 850ms cubic-bezier(0.22, 1, 0.36, 1) 150ms',
          }}
          className="p-6 sm:p-10 lg:p-12 text-white"
        >
          {/* Small Mono Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F50]" />
            <span className="mono-label text-white/70 text-xs sm:text-sm">
              MIAMI / PLUMBING
            </span>
          </div>

          {/* Headline revealed line-by-line */}
          <h1 className="display-title text-white tracking-tight mb-6 overflow-hidden">
            <div className="overflow-hidden">
              <span
                className="block"
                style={{
                  transform: loaded ? 'translateY(0)' : 'translateY(55px)',
                  transition: 'transform 850ms cubic-bezier(0.22, 1, 0.36, 1) 260ms',
                }}
              >
                Plumbing,
              </span>
            </div>
            <div className="overflow-hidden">
              <span
                className="block"
                style={{
                  transform: loaded ? 'translateY(0)' : 'translateY(55px)',
                  transition: 'transform 850ms cubic-bezier(0.22, 1, 0.36, 1) 380ms',
                }}
              >
                without
              </span>
            </div>
            <div className="overflow-hidden">
              <span
                className="block text-[#8EAAA5]"
                style={{
                  transform: loaded ? 'translateY(0)' : 'translateY(55px)',
                  transition: 'transform 850ms cubic-bezier(0.22, 1, 0.36, 1) 500ms',
                }}
              >
                the stress.
              </span>
            </div>
          </h1>

          {/* Supporting Text */}
          <p
            className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-lg font-geist font-light"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 550ms cubic-bezier(0.22, 1, 0.36, 1) 520ms, transform 550ms cubic-bezier(0.22, 1, 0.36, 1) 520ms',
            }}
          >
            Repairs, water heaters, drains and emergency plumbing across Miami-Dade.
          </p>

          {/* Action CTAs: CALL NOW, EMAIL US, VIEW SERVICES */}
          <div
            className="flex flex-wrap items-center gap-3.5"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateX(0)' : 'translateX(12px)',
              transition: 'opacity 450ms cubic-bezier(0.22, 1, 0.36, 1) 620ms, transform 450ms cubic-bezier(0.22, 1, 0.36, 1) 620ms',
            }}
          >
            <a
              href="tel:7867563185"
              className="eliras-btn group text-center"
              aria-label="Call Miami Dade Plumbing"
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
              aria-label="Email Miami Dade Plumbing"
            >
              <Mail className="w-3.5 h-3.5 text-[#8EAAA5]" />
              <span>EMAIL US</span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-3 py-3 text-xs uppercase tracking-wider font-geist-mono text-white/70 hover:text-white transition-colors duration-200 eliras-link"
            >
              <span>SERVICES</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8EAAA5]" />
            </a>
          </div>

          {/* Subtle Trust Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-geist-mono text-white/60">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8EAAA5]" />
              <span>Direct Owner Service</span>
            </div>
            <span className="text-white/20">·</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#8EAAA5]" />
              <span>24/7 Emergency</span>
            </div>
            <span className="text-white/20">·</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#8EAAA5]" />
              <span>Miami & Pinecrest</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
