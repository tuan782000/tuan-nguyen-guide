import { motion, useReducedMotion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function ZaloButton() {
  const shouldReduceMotion = useReducedMotion();
  const cleanPhone = PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '');
  const zaloHref = `https://zalo.me/${cleanPhone}`;

  return (
    <motion.a
      href={zaloHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${PORTFOLIO_DATA.personal.displayName} on Zalo (${PORTFOLIO_DATA.personal.phone})`}
      title={`Zalo: ${PORTFOLIO_DATA.personal.phone}`}
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed right-5 bottom-5 z-30 flex items-center gap-2.5 sm:right-8 sm:bottom-8"
    >
      {/* Subtle hover caption on desktop showing phone number */}
      <span className="pointer-events-none hidden rounded-lg bg-[#292929] px-3 py-1.5 text-xs font-medium text-[#F7F3EA] opacity-0 shadow-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 sm:inline-block sm:translate-x-1 whitespace-nowrap">
        Zalo · <span className="tabular-nums">{PORTFOLIO_DATA.personal.phone}</span>
      </span>

      {/* Circular Zalo Button with Wiggle ("rung rung") Animation */}
      <motion.span
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: [0, -10, 10, -8, 8, -4, 0],
                scale: [1, 1.06, 1.06, 1.04, 1.04, 1, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 0.75,
                repeat: Infinity,
                repeatDelay: 2.2,
                ease: 'easeInOut',
              }
        }
        className="relative flex h-13 w-13 items-center justify-center rounded-full bg-[#0068FF] text-white shadow-lg transition-colors duration-200 group-hover:bg-[#0054D1]"
      >
        {/* Subtle Speech Bubble Outline + "Zalo" Label */}
        <svg
          className="h-9 w-9"
          viewBox="0 0 40 40"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20 5C11.163 5 4 11.268 4 19C4 23.164 6.084 26.905 9.403 29.464C9.124 31.326 8.334 33.428 7.305 34.716C7.074 35.005 7.347 35.425 7.702 35.33C9.835 34.762 12.238 33.669 13.797 32.725C15.724 33.368 17.817 33.72 20 33.72C28.837 33.72 36 27.452 36 19.72C36 11.988 28.837 5 20 5Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="rgba(255,255,255,0.1)"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center pb-0.5 text-[11px] font-bold tracking-tight">
          Zalo
        </span>
      </motion.span>
    </motion.a>
  );
}
