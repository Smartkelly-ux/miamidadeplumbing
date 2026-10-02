import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ReviewsCarousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const reviews = [
    {
      author: 'Carlos M.',
      location: 'Pinecrest, FL',
      service: 'Tankless Water Heater Repair',
      rating: 5,
      date: '2 weeks ago',
      quote:
        'Abe came out personally on a Saturday morning when our tankless water heater shut off. Diagnosed the sensor issue in 10 minutes and had hot water restored before noon. Clean, polite, and extremely knowledgeable.',
    },
    {
      author: 'Elena R.',
      location: 'Coral Gables, FL',
      service: 'Kitchen Vanity & Copper Lines',
      rating: 5,
      date: '1 month ago',
      quote:
        'Finally a plumber in Miami who communicates directly and doesn’t send junior subcontractors. Clean soldering under our kitchen vanity and zero mess left behind. Truly refreshing.',
    },
    {
      author: 'David S.',
      location: 'South Miami, FL',
      service: 'Main Sewer Line Scope & Hydro Jetting',
      rating: 5,
      date: '3 weeks ago',
      quote:
        'Main sewer line was backing up into the master bath. Abe scoped the line with a camera, showed me the tree root blockage on screen, and cleared it cleanly without tearing up our yard.',
    },
    {
      author: 'Marcus T.',
      location: 'Kendall, FL',
      service: 'Shower Valve & Pressure Restoration',
      rating: 5,
      date: '2 months ago',
      quote:
        'Replaced our entire shower valve set and copper supply line. Precise craftsmanship and reasonable pricing upfront. Highly recommend Miami Dade Plumbing to anyone in the area.',
    },
    {
      author: 'Sofia & Daniel V.',
      location: 'Miami, FL (Brickell / South)',
      service: '24/7 Emergency Valve Replacement',
      rating: 5,
      date: 'Last month',
      quote:
        'Rapid emergency response at 11 PM for a burst supply valve under the sink. Abe guided us over the phone to shut the main while heading over. Genuine master plumber.',
    },
    {
      author: 'Jessica B.',
      location: 'Palmetto Bay, FL',
      service: 'Bathroom Fixture Installation',
      rating: 5,
      date: '1 month ago',
      quote:
        'Installed high-end architectural fixtures for our master bath renovation. Flawless alignment, tight joints, and impeccable respect for our home.',
    },
  ];

  return (
    <section
      className="w-full py-16 sm:py-24 bg-[#F3EEE6] overflow-hidden select-none"
      aria-label="Verified Customer Reviews"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 mb-10 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#DCD5CC]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B86F50]" />
              <span className="mono-label text-[#667C7A] text-xs sm:text-sm">
                LOCAL FEEDBACK
              </span>
            </div>
            <h2 className="large-title text-[#171717] tracking-tight">
              What homeowners say.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#B86F50] text-[#B86F50]"
                />
              ))}
            </div>
            <span className="font-geist font-medium text-sm text-[#171717]">
              4.9 / 5.0
            </span>
            <span className="text-[#667C7A] text-xs font-geist-mono">
              (148 Google Reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Moving Row Carousel */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex gap-6 will-change-transform ${
            isPaused ? 'carousel-paused' : ''
          }`}
          style={{
            animation: 'reviewsMarquee 42s linear infinite',
            width: 'max-content',
          }}
        >
          {/* Duplicate list twice for seamless infinite moving loop */}
          {[...reviews, ...reviews].map((review, idx) => (
            <div
              key={idx}
              className="w-[340px] sm:w-[420px] shrink-0 bg-[#FFFFFF] rounded-[20px] border border-[#DCD5CC] hover:border-[#8EAAA5] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-2xs group"
            >
              <div>
                {/* Card Top: Stars & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#B86F50] text-[#B86F50]"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-geist-mono text-[#8EAAA5] uppercase tracking-wider">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Quote Prose */}
                <p className="font-geist text-sm sm:text-base text-[#171717] leading-relaxed mb-6 font-normal">
                  "{review.quote}"
                </p>
              </div>

              {/* Card Footer: Author & Location */}
              <div className="pt-4 border-t border-[#DCD5CC]/60 flex items-center justify-between">
                <div>
                  <div className="font-geist font-medium text-sm text-[#171717]">
                    {review.author}
                  </div>
                  <div className="font-geist-mono text-xs text-[#667C7A]">
                    {review.location}
                  </div>
                </div>
                <span className="font-geist-mono text-[11px] text-[#8EAAA5] bg-[#F3EEE6] px-2.5 py-1 rounded-md border border-[#DCD5CC]">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes reviewsMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .carousel-paused {
          animation-play-state: paused !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .will-change-transform {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};
