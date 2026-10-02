import React, { useRef, useState, useEffect } from 'react';
import { IMAGES } from '../assets/images';
import { ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const serviceItems = [
    {
      index: '01 / DRAINS',
      title: 'Drains',
      desc: 'Cleaning, camera inspections, and stubborn clog removal.',
      image: IMAGES.drainService,
      alt: 'Drain line clearing and pipe inspection in Miami home',
      items: ['Main line clearing', 'Hydro jetting', 'Camera scopes'],
    },
    {
      index: '02 / WATER HEATERS',
      title: 'Water Heaters',
      desc: 'Repair and replacement for tankless & traditional systems.',
      image: IMAGES.waterHeater,
      alt: 'Precision water heater installation and repair',
      items: ['Tankless conversions', 'Rapid element repair', 'Annual flushing'],
    },
    {
      index: '03 / FIXTURES',
      title: 'Fixtures',
      desc: 'Sinks, faucets, showers, valves, and toilet replacements.',
      image: IMAGES.fieldCurved,
      alt: 'Luxury architectural bathroom fixtures and faucets',
      items: ['Designer fixtures', 'Shower valve repair', 'Leak elimination'],
    },
    {
      index: '04 / LINES',
      title: 'Lines',
      desc: 'Water, sewer, exterior supply lines, and pressure restoration.',
      image: IMAGES.flowRepair,
      alt: 'Copper water supply line and pipe repiping work',
      items: ['Sewer line repair', 'Copper repiping', 'Pressure regulators'],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#F3EEE6] scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#DCD5CC]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B86F50]" />
              <span className="mono-label text-[#667C7A] text-xs sm:text-sm">
                PRIMARY CAPABILITIES
              </span>
            </div>
            <h2 className="large-title text-[#171717] tracking-tight">
              What needs attention?
            </h2>
          </div>
          <p className="font-geist text-base sm:text-lg text-[#667C7A] max-w-sm mt-4 md:mt-0">
            Four core specializations tailored for Miami-Dade residences and property owners.
          </p>
        </div>

        {/* Four Soft Rounded Service Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItems.map((item, idx) => (
            <div
              key={item.index}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(35px)',
                transition: `opacity 650ms cubic-bezier(0.22, 1, 0.36, 1) ${
                  idx * 120
                }ms, transform 650ms cubic-bezier(0.22, 1, 0.36, 1) ${idx * 120}ms`,
              }}
              className="service-card flex flex-col justify-between group cursor-pointer"
              onClick={() => onSelectService?.(item.title)}
            >
              {/* Corner Line Animated Accent */}
              <div className="corner-line" />

              <div>
                {/* Large Image Crop at Top */}
                <div className="w-full h-48 sm:h-52 rounded-[12px] overflow-hidden bg-[#E7E0D6] mb-5 border border-[#DCD5CC]/60 relative">
                  <img
                    src={item.image}
                    alt={item.alt}
                    referrerPolicy="no-referrer"
                    className="card-img w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Mono Label */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-geist-mono text-xs text-[#8EAAA5] tracking-wider uppercase">
                    {item.index}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#8EAAA5] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>

                {/* Heading */}
                <h3 className="medium-title text-[#171717] mb-2 font-normal text-2xl sm:text-3xl">
                  {item.title}
                </h3>

                {/* Short Description */}
                <p className="font-geist text-sm sm:text-base text-[#667C7A] leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              {/* Sub items */}
              <div className="pt-4 border-t border-[#DCD5CC]/60 flex flex-col gap-1.5 text-xs font-geist-mono text-[#667C7A]">
                {item.items.map((sub) => (
                  <div key={sub} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#8EAAA5]" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
