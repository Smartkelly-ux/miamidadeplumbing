import React, { useRef, useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full pt-8 bg-[#F3EEE6] px-4 sm:px-6 lg:px-8">
      {/* Large Rounded Dark Container embedded within the warm sand page */}
      <div
        ref={footerRef}
        style={{
          transform: inView ? 'translateY(0)' : 'translateY(45px)',
          opacity: inView ? 1 : 0,
          transition: 'transform 750ms cubic-bezier(0.22, 1, 0.36, 1), opacity 750ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        className="max-w-7xl mx-auto bg-[#171717] rounded-t-[24px] sm:rounded-t-[36px] p-8 sm:p-14 lg:p-20 text-white border-t border-x border-white/10"
      >
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 border-b border-white/12">
          <div>
            <h2 className="font-geist text-2xl sm:text-3xl font-medium tracking-tight mb-2">
              MIAMI DADE <br className="hidden sm:inline" />
              PLUMBING
            </h2>
            <p className="font-geist-mono text-xs sm:text-sm text-[#8EAAA5] tracking-wider">
              Miami • Pinecrest • Miami-Dade County
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-3">
            <span className="font-geist-mono text-xs text-white/50 uppercase tracking-widest">
              DIRECT DISPATCH
            </span>
            <div className="flex items-center gap-3">
              <a
                href="mailto:abe@miami-dade-plumbing.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-geist-mono uppercase tracking-wider text-white transition-all duration-200"
              >
                <Mail className="w-3.5 h-3.5 text-[#8EAAA5]" />
                <span>EMAIL US</span>
              </a>

              <a
                href="tel:7867563185"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#171717] hover:bg-white/20 border border-[#8EAAA5]/60 text-xs font-geist-mono uppercase tracking-wider text-white transition-all duration-200 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#8EAAA5]" />
                <span>CALL NOW</span>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Navigation & Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-white/12 text-sm">
          {/* Services Column */}
          <div>
            <div className="font-geist-mono text-xs uppercase tracking-widest text-[#8EAAA5] mb-4">
              SERVICES
            </div>
            <ul className="space-y-2.5 font-geist text-white/70">
              <li>
                <a href="#services" className="hover:text-white transition-colors eliras-link">
                  Drains & Clog Clearing
                </a>
              </li>
              <li>
                <a href="#water-heaters" className="hover:text-white transition-colors eliras-link">
                  Water Heaters (Tankless & Tank)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors eliras-link">
                  Fixtures & Valve Trims
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors eliras-link">
                  Supply Lines & Copper Repiping
                </a>
              </li>
            </ul>
          </div>

          {/* Service Area Column */}
          <div>
            <div className="font-geist-mono text-xs uppercase tracking-widest text-[#8EAAA5] mb-4">
              SERVICE REGION
            </div>
            <ul className="space-y-2.5 font-geist text-white/70">
              <li>Pinecrest, FL</li>
              <li>City of Miami</li>
              <li>Coral Gables & South Miami</li>
              <li>Kendall & Greater Miami-Dade</li>
              <li className="text-[#8EAAA5] text-xs font-geist-mono pt-1">
                24/7 Emergency Dispatch Available
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="sm:col-span-2">
            <div className="font-geist-mono text-xs uppercase tracking-widest text-[#8EAAA5] mb-4">
              CONTACT & SHOP
            </div>
            <div className="space-y-3 font-geist text-white/70">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8EAAA5] shrink-0" />
                <a
                  href="mailto:abe@miami-dade-plumbing.com"
                  className="hover:text-white transition-colors"
                >
                  abe@miami-dade-plumbing.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8EAAA5] shrink-0 mt-0.5" />
                <span>
                  9417 SW 77th Ct <br />
                  Miami, FL 33156
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-geist-mono text-white/50">
          <div>
            © {new Date().getFullYear()} Miami Dade Plumbing. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Licensed & Insured</span>
            <span>·</span>
            <span>Privacy</span>
            <span>·</span>
            <span>Terms</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
