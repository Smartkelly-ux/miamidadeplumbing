import React from 'react';
import { Phone, Mail, Star, ShieldCheck, UserCheck, MessageSquareQuote } from 'lucide-react';

export const DirectService: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#F3EEE6]">
      <div className="max-w-5xl mx-auto">
        {/* Soft rounded container with subtle border */}
        <div className="bg-[#FFFFFF] rounded-[24px] border border-[#DCD5CC] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle decorative background water ripple tint */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8EAAA5]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Main Content */}
            <div className="lg:col-span-7">
              {/* Mono Label */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B86F50]" />
                <span className="mono-label text-[#667C7A] text-xs sm:text-sm">
                  DIRECT SERVICE
                </span>
              </div>

              {/* Headline */}
              <h2 className="large-title text-[#171717] tracking-tight mb-6">
                Talk to a plumber. <br />
                Not a maze.
              </h2>

              {/* Supporting Text */}
              <p className="font-geist text-lg sm:text-xl text-[#667C7A] leading-relaxed mb-6">
                When you reach out to Miami Dade Plumbing, you speak directly with Abe, the owner. No call centers, no dispatch runarounds. You get hands-on trade guidance, transparent advice, and genuine craftsmanship from someone who has served Miami-Dade for over two decades.
              </p>

              {/* Action Buttons: CALL NOW & EMAIL US */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="tel:7867563185"
                  className="eliras-btn group inline-flex"
                  aria-label="Direct call to Abe at Miami Dade Plumbing"
                >
                  <span className="btn-inner-border" />
                  <span className="btn-text">
                    <Phone className="w-4 h-4 text-[#8EAAA5]" />
                    CALL NOW
                  </span>
                </a>

                <a
                  href="mailto:abe@miami-dade-plumbing.com"
                  className="eliras-btn-light group inline-flex"
                  aria-label="Email Abe directly"
                >
                  <span className="btn-inner-border" />
                  <span className="btn-text">
                    <Mail className="w-4 h-4 text-[#8EAAA5]" />
                    EMAIL US
                  </span>
                </a>
              </div>
            </div>

            {/* Right Stat & Verified Trust Card */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Review Proof Box */}
              <div className="p-6 rounded-[16px] bg-[#F3EEE6] border border-[#DCD5CC]">
                <div className="flex items-center gap-1.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#B86F50] text-[#B86F50]"
                    />
                  ))}
                  <span className="font-geist-mono font-medium text-sm text-[#171717] ml-2">
                    4.9 / 5.0
                  </span>
                </div>
                <p className="font-geist text-sm text-[#667C7A] leading-snug">
                  Derived from 148 verified customer ratings across Miami-Dade County.
                </p>
              </div>

              {/* Direct Owner Involvements */}
              <div className="p-6 rounded-[16px] bg-[#F3EEE6] border border-[#DCD5CC] space-y-3 text-xs sm:text-sm font-geist text-[#171717]">
                <div className="flex items-center gap-3">
                  <UserCheck className="w-4 h-4 text-[#8EAAA5] shrink-0" />
                  <span>Direct owner estimation & job execution</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#8EAAA5] shrink-0" />
                  <span>20+ years master trade experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquareQuote className="w-4 h-4 text-[#8EAAA5] shrink-0" />
                  <span>Clear pricing before work begins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
