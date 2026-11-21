import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const heroElement = document.getElementById('top');
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show button only after the user has scrolled past the Hero section
        setIsVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      {
        root: null,
        rootMargin: '-64px 0px 0px 0px',
        threshold: 0,
      },
    );

    observer.observe(heroElement);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
          initial={{ opacity: 0, y: 16, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 14, scale: 0.9 }}
          whileHover={{ y: -3, scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25, ease: EASE_EDITORIAL }}
          className="group fixed right-5 bottom-[5.25rem] z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#294C3B] text-[#F7F3EA] shadow-lg transition-colors duration-200 hover:bg-[#1E3A2D] sm:right-8 sm:bottom-[6rem] cursor-pointer"
        >
          {/* Circular Scroll Progress Ring */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <circle
              cx="24"
              cy="24"
              r="21.5"
              fill="none"
              stroke="rgba(247, 243, 234, 0.2)"
              strokeWidth="2"
            />
            <motion.circle
              cx="24"
              cy="24"
              r="21.5"
              fill="none"
              stroke="#E8C989"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength: smoothProgress }}
            />
          </svg>

          {/* Animated Arrow Up Icon */}
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="relative flex items-center justify-center"
          >
            <ArrowUp
              className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
