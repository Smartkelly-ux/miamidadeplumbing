import React, { useRef, useState, useEffect } from 'react';
import { IMAGES } from '../assets/images';

export const BackgroundStory: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden my-8 sm:my-16 px-4 sm:px-6 lg:px-12"
    >
      {/* Parallax / Scaled Photographic Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#171717]">
        <img
          src={IMAGES.storyBath}
          alt="Warm master bathroom plumbing in Miami"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
          style={{
            transform: inView ? 'translateY(-2%) scale(1)' : 'translateY(6%) scale(1.06)',
            transition: 'transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
        {/* Soft overlay matching specs: rgba(23, 23, 23, 0.30) */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(23, 23, 23, 0.38)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F3EEE6] via-transparent to-[#F3EEE6] opacity-30" />
      </div>

      {/* Editorial Content Card */}
      <div
        className="relative z-10 max-w-3xl mx-auto text-center px-6 py-12 sm:p-16 rounded-[24px] bg-[#171717]/75 backdrop-blur-md border border-white/10 text-white"
        style={{
          transform: inView ? 'translateY(0)' : 'translateY(30px)',
          opacity: inView ? 1 : 0,
          transition: 'transform 650ms cubic-bezier(0.22, 1, 0.36, 1) 150ms, opacity 650ms cubic-bezier(0.22, 1, 0.36, 1) 150ms',
        }}
      >
        {/* Mono Label */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B86F50]" />
          <span className="mono-label text-white/80 text-xs sm:text-sm">
            01 / EVERYDAY PLUMBING
          </span>
        </div>

        {/* Large Heading */}
        <h2 className="display-title text-white tracking-tight mb-6 max-w-xl mx-auto">
          Small problems <br className="hidden sm:inline" />
          don't stay small.
        </h2>

        {/* Supporting text */}
        <p className="font-geist text-lg sm:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
          Leaks, clogs and fixture problems can interrupt the whole day. We arrive with the right tools, diagnose immediately, and restore your home’s flow without unnecessary disruption.
        </p>

        {/* Tiny metadata strip */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-6 text-xs font-geist-mono text-white/60">
          <span>FAST DIAGNOSTICS</span>
          <span>·</span>
          <span>CLEAN WORKSPACE</span>
          <span>·</span>
          <span>CLEAR COMMUNICATION</span>
        </div>
      </div>
    </section>
  );
};
