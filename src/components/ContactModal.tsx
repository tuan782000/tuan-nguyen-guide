import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Copy, Mail, MapPin, Phone, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopy = async (value: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Clipboard fallback ignored gracefully
    }
  };

  const mailtoHref = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
    `Application for ${PORTFOLIO_DATA.personal.targetCompany} — ${PORTFOLIO_DATA.personal.displayName}`,
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#16271F]/75 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl border border-[#292929]/12 bg-[#F7F3EA] p-7 shadow-2xl sm:p-9"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close contact dialog"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-lg text-[#5C5852] transition-colors hover:bg-[#EFE9DC] hover:text-[#292929] cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="text-xs font-semibold tracking-wider text-[#C76F4A]">
              Direct Contact
            </p>
            <h3
              id="contact-modal-title"
              className="mt-2 font-editorial text-2xl font-semibold text-[#292929] sm:text-3xl"
            >
              Connect with {PORTFOLIO_DATA.personal.displayName}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5C5852]">
              Available to meet in Ho Chi Minh City for an interview or trial shift with{' '}
              {PORTFOLIO_DATA.personal.targetCompany}.
            </p>

            <div className="mt-6 space-y-3">
              {/* Email Row */}
              <div className="flex items-center justify-between gap-3 rounded-xl border border-[#292929]/12 bg-[#EFE9DC]/65 px-4 py-3.5">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="h-4 w-4 shrink-0 text-[#294C3B]" />
                  <div className="min-w-0">
                    <p className="text-xs text-[#5C5852]">Email</p>
                    <a
                      href={mailtoHref}
                      className="block truncate text-sm font-semibold text-[#292929] hover:text-[#294C3B]"
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, 'email')}
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#292929]/15 bg-[#F7F3EA] px-3 text-xs font-medium text-[#292929] transition-colors hover:border-[#294C3B] hover:text-[#294C3B] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#294C3B]" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              {/* Phone Row */}
              <div className="flex items-center justify-between gap-3 rounded-xl border border-[#292929]/12 bg-[#EFE9DC]/65 px-4 py-3.5">
                <div className="flex items-center gap-3 min-w-0">
                  <Phone className="h-4 w-4 shrink-0 text-[#294C3B]" />
                  <div className="min-w-0">
                    <p className="text-xs text-[#5C5852]">Phone</p>
                    <a
                      href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                      className="block truncate text-sm font-semibold text-[#292929] tabular-nums hover:text-[#294C3B]"
                    >
                      {PORTFOLIO_DATA.personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PORTFOLIO_DATA.personal.phone, 'phone')}
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#292929]/15 bg-[#F7F3EA] px-3 text-xs font-medium text-[#292929] transition-colors hover:border-[#294C3B] hover:text-[#294C3B] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#294C3B]" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              {/* Location Row */}
              <div className="flex items-center gap-3 rounded-xl border border-[#292929]/12 bg-[#EFE9DC]/65 px-4 py-3.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#294C3B]" />
                <div>
                  <p className="text-xs text-[#5C5852]">Current Location</p>
                  <p className="text-sm font-semibold text-[#292929]">
                    {PORTFOLIO_DATA.personal.currentLocation}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#292929]/10 pt-5">
              <a
                href={mailtoHref}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#294C3B] px-5 py-2.5 text-sm font-medium text-[#F7F3EA] transition-colors hover:bg-[#1E3A2D] whitespace-nowrap"
              >
                <Mail className="h-4 w-4" />
                Send Email
              </a>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-[#5C5852] transition-colors hover:text-[#292929] cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
