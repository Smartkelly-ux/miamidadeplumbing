import React, { useState } from 'react';
import { X, Phone, Check, ShieldCheck } from 'lucide-react';

interface DispatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const DispatchModal: React.FC<DispatchModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'General Plumbing Service',
}) => {
  const [service, setService] = useState(defaultService);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#F3EEE6] rounded-[24px] border border-[#DCD5CC] p-6 sm:p-8 shadow-2xl text-[#171717]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-[#171717] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-14 h-14 bg-[#8EAAA5]/20 text-[#171717] rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-7 h-7 text-[#171717]" />
            </div>
            <h3 className="medium-title text-2xl font-normal mb-2">
              Request Received
            </h3>
            <p className="font-geist text-sm text-[#667C7A] mb-6 max-w-sm mx-auto">
              Abe from Miami Dade Plumbing will call you directly at{' '}
              <span className="font-semibold text-[#171717]">{phone || 'your phone'}</span> shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="eliras-btn"
            >
              <span className="btn-inner-border" />
              <span className="btn-text">CLOSE</span>
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B86F50]" />
              <span className="font-geist-mono text-xs text-[#667C7A] tracking-wider uppercase">
                DIRECT SERVICE INQUIRY
              </span>
            </div>

            <h3 className="medium-title text-2xl sm:text-3xl font-normal mb-2">
              Request Service
            </h3>
            <p className="font-geist text-sm text-[#667C7A] mb-6">
              Connect directly with Abe. For emergencies, call{' '}
              <a
                href="tel:7867563185"
                className="font-medium text-[#171717] underline decoration-[#8EAAA5]"
              >
                (786) 756-3185
              </a>
              .
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-geist-mono uppercase text-[#667C7A] mb-1">
                  Service Type
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-white border border-[#DCD5CC] rounded-xl px-4 py-2.5 text-sm font-geist text-[#171717] focus:outline-none focus:border-[#8EAAA5]"
                >
                  <option value="Drains">Drains & Clog Clearing</option>
                  <option value="Water Heaters">Water Heater Repair / Replacement</option>
                  <option value="Fixtures">Fixtures (Faucets, Showers, Toilets)</option>
                  <option value="Lines">Supply Lines & Copper Repiping</option>
                  <option value="Emergency">24/7 Emergency Service</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-geist-mono uppercase text-[#667C7A] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full bg-white border border-[#DCD5CC] rounded-xl px-4 py-2.5 text-sm font-geist text-[#171717] focus:outline-none focus:border-[#8EAAA5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-geist-mono uppercase text-[#667C7A] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(786) 000-0000"
                    className="w-full bg-white border border-[#DCD5CC] rounded-xl px-4 py-2.5 text-sm font-geist text-[#171717] focus:outline-none focus:border-[#8EAAA5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-geist-mono uppercase text-[#667C7A] mb-1">
                  Miami-Dade Location
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address or Neighborhood (e.g., Pinecrest, Miami, Kendall)"
                  className="w-full bg-white border border-[#DCD5CC] rounded-xl px-4 py-2.5 text-sm font-geist text-[#171717] focus:outline-none focus:border-[#8EAAA5]"
                />
              </div>

              <div>
                <label className="block text-xs font-geist-mono uppercase text-[#667C7A] mb-1">
                  Brief Description
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Describe what needs attention..."
                  className="w-full bg-white border border-[#DCD5CC] rounded-xl px-4 py-2.5 text-sm font-geist text-[#171717] focus:outline-none focus:border-[#8EAAA5]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button type="submit" className="eliras-btn w-full sm:w-auto">
                  <span className="btn-inner-border" />
                  <span className="btn-text">SUBMIT REQUEST</span>
                </button>

                <div className="flex items-center gap-1.5 text-xs font-geist-mono text-[#667C7A]">
                  <ShieldCheck className="w-4 h-4 text-[#8EAAA5]" />
                  <span>Direct response from owner</span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
