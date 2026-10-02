import React, { useState, useEffect } from 'react';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Services', href: '#services', index: '01' },
    { label: 'Water Heaters', href: '#water-heaters', index: '02' },
    { label: 'The Flow', href: '#the-flow', index: '03' },
    { label: 'Emergency', href: '#emergency', index: '04' },
    { label: 'In The Field', href: '#field', index: '05' },
    { label: 'Contact', href: '#contact', index: '06' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Floating Bar Container */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Main Floating Rounded Bar */}
          <nav
            style={{
              backgroundColor: 'rgba(23, 23, 23, 0.82)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid rgba(255, 255, 255, 0.10)',
              borderRadius: '24px',
            }}
            className={`w-full py-2.5 px-5 sm:px-6 flex items-center justify-between pointer-events-auto transition-all duration-300 ${
              scrolled ? 'shadow-xl shadow-black/20' : ''
            }`}
            aria-label="Main Navigation"
          >
            {/* Brand Title (Single element) */}
            <a
              href="#"
              className="text-white text-base sm:text-lg font-normal tracking-tight font-geist flex items-center gap-2.5 group"
            >
              <span className="w-2 h-2 rounded-full bg-[#B86F50] group-hover:bg-[#8EAAA5] transition-colors duration-300"></span>
              <span>Miami Dade Plumbing</span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7 text-sm font-light text-white/80">
              <a
                href="#services"
                className="hover:text-white transition-colors duration-200 eliras-link"
              >
                Services
              </a>
              <a
                href="#water-heaters"
                className="hover:text-white transition-colors duration-200 eliras-link"
              >
                Water Heaters
              </a>
              <a
                href="#the-flow"
                className="hover:text-white transition-colors duration-200 eliras-link"
              >
                Flow
              </a>
              <a
                href="#emergency"
                className="hover:text-white transition-colors duration-200 eliras-link flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B86F50] animate-pulse"></span>
                Emergency
              </a>
              <a
                href="#contact"
                className="hover:text-white transition-colors duration-200 eliras-link"
              >
                Contact
              </a>
            </div>

            {/* Desktop Action Buttons: CALL NOW & EMAIL */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href="mailto:abe@miami-dade-plumbing.com"
                className="group flex items-center gap-1.5 text-xs uppercase tracking-wider font-geist-mono text-white/85 hover:text-white bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full border border-white/15 transition-all duration-200"
                title="Email Miami Dade Plumbing"
              >
                <Mail className="w-3.5 h-3.5 text-[#8EAAA5] group-hover:scale-110 transition-transform duration-200" />
                <span>EMAIL</span>
              </a>

              <a
                href="tel:7867563185"
                className="group flex items-center gap-1.5 text-xs uppercase tracking-wider font-geist-mono text-white bg-[#171717] hover:bg-white/20 px-3.5 py-1.5 rounded-full border border-[#8EAAA5]/50 transition-all duration-200"
                title="Call Miami Dade Plumbing"
              >
                <Phone className="w-3.5 h-3.5 text-[#8EAAA5] group-hover:scale-110 transition-transform duration-200" />
                <span>CALL NOW</span>
              </a>
            </div>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8EAAA5] rounded-lg"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span
                style={{
                  width: '22px',
                  height: '1.5px',
                  backgroundColor: '#FFFFFF',
                  transform: mobileMenuOpen
                    ? 'rotate(45deg) translateY(6px)'
                    : 'none',
                  transition: 'transform 320ms cubic-bezier(0.22, 1, 0.36, 1)',
                  transformOrigin: 'center',
                }}
                className="block mb-[5px]"
              />
              <span
                style={{
                  width: '22px',
                  height: '1.5px',
                  backgroundColor: '#FFFFFF',
                  transform: mobileMenuOpen ? 'scaleX(0)' : 'scaleX(1)',
                  transition: 'transform 320ms cubic-bezier(0.22, 1, 0.36, 1)',
                  transformOrigin: 'center',
                }}
                className="block mb-[5px]"
              />
              <span
                style={{
                  width: '22px',
                  height: '1.5px',
                  backgroundColor: '#FFFFFF',
                  transform: mobileMenuOpen
                    ? 'rotate(-45deg) translateY(-6px)'
                    : 'none',
                  transition: 'transform 320ms cubic-bezier(0.22, 1, 0.36, 1)',
                  transformOrigin: 'center',
                }}
                className="block"
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Full-Screen Warm Sand Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#F3EEE6] flex flex-col justify-between p-8 pt-28 overflow-y-auto animate-fadeIn"
          style={{
            transition: 'opacity 300ms ease',
          }}
        >
          {/* Menu links list */}
          <div className="max-w-md mx-auto w-full flex flex-col gap-5">
            <div className="font-geist-mono text-xs uppercase tracking-widest text-[#667C7A] pb-2 border-b border-[#DCD5CC]">
              Navigation Directory
            </div>
            {navLinks.map((link, idx) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                style={{
                  animation: `diagonalEnter 450ms cubic-bezier(0.22, 1, 0.36, 1) forwards ${
                    idx * 70
                  }ms`,
                  opacity: 0,
                  transform: 'translate(22px, 20px)',
                }}
                className="flex items-baseline justify-between text-left group cursor-pointer border-b border-[#DCD5CC]/50 pb-2.5"
              >
                <span className="font-geist text-3xl sm:text-4xl text-[#171717] group-hover:text-[#667C7A] transition-colors">
                  {link.label}
                </span>
                <span className="font-geist-mono text-xs text-[#8EAAA5] tracking-wider">
                  [{link.index}]
                </span>
              </button>
            ))}
          </div>

          {/* Bottom Direct Contact & Email buttons on Mobile */}
          <div className="max-w-md mx-auto w-full pt-6 border-t border-[#DCD5CC] flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-geist-mono text-[#667C7A]">
              <span>DIRECT DISPATCH</span>
              <span>MIAMI-DADE COUNTY</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="tel:7867563185"
                className="eliras-btn text-center justify-center min-w-0"
              >
                <span className="btn-inner-border" />
                <span className="btn-text">
                  <Phone className="w-4 h-4 text-[#8EAAA5]" />
                  CALL NOW
                </span>
              </a>

              <a
                href="mailto:abe@miami-dade-plumbing.com"
                className="eliras-btn-light text-center justify-center min-w-0"
              >
                <span className="btn-inner-border" />
                <span className="btn-text">
                  <Mail className="w-4 h-4 text-[#8EAAA5]" />
                  EMAIL US
                </span>
              </a>
            </div>

            <p className="text-xs text-[#667C7A] font-geist-mono mt-1">
              9417 SW 77th Ct, Miami, FL 33156 · 24/7 Emergency Available
            </p>
          </div>
        </div>
      )}

      {/* Keyframe animations for diagonal mobile entry */}
      <style>{`
        @keyframes diagonalEnter {
          from {
            opacity: 0;
            transform: translate(22px, 20px);
          }
          to {
            opacity: 1;
            transform: translate(0, 0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
};
