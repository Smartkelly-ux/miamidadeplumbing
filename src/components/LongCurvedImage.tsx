import React, { useRef, useState, useEffect } from 'react';
import { IMAGES } from '../assets/images';

export const LongCurvedImage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.18 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#F3EEE6] overflow-hidden flex justify-center items-center">
      <div
        ref={containerRef}
        style={{
          width: 'min(86vw, 1280px)',
          clipPath: inView
            ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
            : 'polygon(0 0, 70% 0, 40% 100%, 0% 100%)',
          transition: 'clip-path 950ms cubic-bezier(0.22, 1, 0.36, 1) 50ms',
        }}
        className="relative mx-auto h-[280px] sm:h-[340px] lg:h-[42vh] rounded-[16px] lg:rounded-[24px] overflow-hidden border border-[#DCD5CC] bg-[#E7E0D6] shadow-sm group"
      >
        {/* Architectural Image */}
        <img
          src={IMAGES.fieldCurved}
          alt="Architectural modern bathroom plumbing craftsmanship in Miami"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700"
          style={{
            transform: inView ? 'scale(1)' : 'scale(1.05)',
            transition: 'transform 950ms cubic-bezier(0.22, 1, 0.36, 1) 50ms',
          }}
        />

        {/* Subtle contrast gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

        {/* Tiny mono label inside */}
        <div className="absolute top-5 left-6 z-10 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B86F50]" />
          <span className="font-geist-mono text-xs text-white/90 uppercase tracking-widest bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/15">
            FIELD / 01
          </span>
        </div>

        {/* Floating bottom caption */}
        <div className="absolute bottom-5 left-6 right-6 z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 text-white">
          <div>
            <p className="font-geist text-lg sm:text-xl font-normal text-white drop-shadow-sm">
              Architectural fixtures & clean residential execution.
            </p>
            <p className="font-geist-mono text-xs text-white/70">
              Pinecrest & South Miami residential plumbing installations
            </p>
          </div>
          <span className="hidden sm:inline-block font-geist-mono text-xs text-[#8EAAA5] uppercase tracking-wider">
            [MIAMI-DADE CERTIFIED]
          </span>
        </div>
      </div>
    </section>
  );
};
