import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LongCurvedImage } from './components/LongCurvedImage';
import { BackgroundStory } from './components/BackgroundStory';
import { Services } from './components/Services';
import { WaterHeaterFeature } from './components/WaterHeaterFeature';
import { ServiceStrip } from './components/ServiceStrip';
import { DirectService } from './components/DirectService';
import { ReviewsCarousel } from './components/ReviewsCarousel';
import { PlumbingFlow } from './components/PlumbingFlow';
import { EmergencySection } from './components/EmergencySection';
import { FieldCarousel } from './components/FieldCarousel';
import { GalleryMoment } from './components/GalleryMoment';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { DispatchModal } from './components/DispatchModal';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('General Plumbing Service');

  const handleSelectService = (service: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F3EEE6] text-[#171717] font-geist selection:bg-[#8EAAA5]/30">
      {/* 1. Rounded Translucent Navigation */}
      <Navbar onOpenModal={() => setModalOpen(true)} />

      <main>
        {/* 2. Editorial Hero */}
        <Hero onOpenModal={() => setModalOpen(true)} />

        {/* 3. Long Curved Image Holder */}
        <LongCurvedImage />

        {/* 4. Background Image Story */}
        <BackgroundStory />

        {/* 5. Services Blocks */}
        <Services onSelectService={handleSelectService} />

        {/* 6. Water Heater Feature */}
        <WaterHeaterFeature />

        {/* 7. Editorial Horizontal Service Strip */}
        <ServiceStrip />

        {/* 8. Direct Service / Owner Approach */}
        <DirectService />

        {/* Moving Row Carousel for Verified Reviews */}
        <ReviewsCarousel />

        {/* 9. Container Scroll — The Plumbing Flow */}
        <PlumbingFlow />

        {/* 10. Emergency Image Section */}
        <EmergencySection />

        {/* 11. Image Carousel — In The Field */}
        <FieldCarousel />

        {/* 12. Image Gallery Moment */}
        <GalleryMoment />

        {/* 13. Final CTA */}
        <FinalCta onOpenModal={() => setModalOpen(true)} />
      </main>

      {/* 14. Rounded Dark Footer */}
      <Footer />

      {/* Interactive Modal for Service Dispatch Request */}
      <DispatchModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
};

export default App;
