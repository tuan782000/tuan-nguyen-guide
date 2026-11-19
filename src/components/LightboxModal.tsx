import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import type { EditorialPhoto } from '../data/portfolioData';

interface LightboxModalProps {
  photo: EditorialPhoto | null;
  onClose: () => void;
}

export function LightboxModal({ photo, onClose }: LightboxModalProps) {
  useEffect(() => {
    if (!photo) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, onClose]);

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#16271F]/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Photograph view: ${photo.location}`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-[#F7F3EA] shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close photograph viewer"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#292929]/80 text-[#F7F3EA] transition-colors hover:bg-[#292929] cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="max-h-[72vh] overflow-hidden bg-[#292929]">
              <img
                src={photo.src}
                alt={photo.alt}
                referrerPolicy="no-referrer"
                className="h-full max-h-[72vh] w-full object-contain"
              />
            </div>

            <div className="flex flex-col justify-between gap-2 px-6 py-5 sm:flex-row sm:items-baseline">
              <p className="font-editorial text-lg font-semibold text-[#294C3B]">
                {photo.location}
              </p>
              <p className="text-sm text-[#5C5852] sm:text-right">{photo.caption}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
