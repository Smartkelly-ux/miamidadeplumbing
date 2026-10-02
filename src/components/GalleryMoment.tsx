import React, { useRef, useState, useEffect } from 'react';
import { IMAGES } from '../assets/images';

export const GalleryMoment: React.FC = () => {
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
      ref={containerRef}
      className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#F3EEE6] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative pb-16 sm:pb-24">
          {/* Main Large Horizontal Image */}
          <div
            style={{
              transform: inView ? 'translateY(0) scale(1)' : 'translateY(20px) scale(1.04)',
              transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            className="w-full sm:w-[82%] h-[320px] sm:h-[460px] lg:h-[520px] rounded-[24px] overflow-hidden border border-[#DCD5CC] bg-[#E7E0D6] relative shadow-sm"
          >
            <img
              src={IMAGES.storyBath}
              alt="Miami home luxury bathroom plumbing craft"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-6 left-6 font-geist-mono text-xs text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/10 uppercase tracking-widest">
              RESIDENTIAL CRAFT / MIAMI
            </div>
          </div>

          {/* Secondary Small Vertical Image (Overlapping lower right corner) */}
          <div
            style={{
              transform: inView ? 'translateY(0)' : 'translateY(-25px)',
              opacity: inView ? 1 : 0,
              transition: 'transform 650ms cubic-bezier(0.22, 1, 0.36, 1) 140ms, opacity 650ms cubic-bezier(0.22, 1, 0.36, 1) 140ms',
            }}
            className="sm:absolute sm:bottom-0 sm:right-4 w-full sm:w-[280px] lg:w-[320px] h-[300px] sm:h-[380px] rounded-[24px] overflow-hidden border border-[#DCD5CC] bg-[#E7E0D6] mt-6 sm:mt-0 shadow-lg shadow-black/10"
          >
            <img
              src={IMAGES.galleryDetail}
              alt="Brushed nickel faucet streaming pure water into stone basin"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 text-white font-geist-mono text-xs">
              <span className="text-[#8EAAA5] block mb-1">DETAIL · 02</span>
              <span className="text-white/90">Hydraulic balance & precision finish</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
