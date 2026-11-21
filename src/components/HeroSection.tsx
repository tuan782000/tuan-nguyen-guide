import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenContact: () => void;
}

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EASE_EDITORIAL,
    },
  },
};

const factsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.42,
    },
  },
};

const factItemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE_EDITORIAL,
    },
  },
};

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section id="top" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Editorial Hero Header with Staggered Reveal */}
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Quiet unboxed location & application metadata */}
          <motion.div
            variants={heroItemVariants}
            className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-[#5C5852]"
          >
            <span className="inline-flex items-center gap-1.5 font-medium text-[#294C3B]">
              <MapPin className="h-3.5 w-3.5 text-[#C76F4A]" strokeWidth={2} />
              {PORTFOLIO_DATA.personal.currentLocation}
            </span>
            <span aria-hidden="true" className="text-[#292929]/30">
              ·
            </span>
            <span>{PORTFOLIO_DATA.personal.targetIndustry}</span>
          </motion.div>

          {/* Expressive Display Headline */}
          <motion.h1
            variants={heroItemVariants}
            className="mt-6 font-editorial text-[clamp(2.75rem,6vw,5.25rem)] font-semibold leading-[1.03] tracking-tight text-[#292929]"
          >
            {PORTFOLIO_DATA.hero.headline}
          </motion.h1>

          {/* Supporting Headline */}
          <motion.p
            variants={heroItemVariants}
            className="mt-5 max-w-2xl font-editorial text-xl leading-snug font-normal text-[#294C3B] sm:text-2xl lg:text-[1.75rem]"
          >
            {PORTFOLIO_DATA.hero.supportingHeadline}
          </motion.p>

          {/* Short Description */}
          <motion.p
            variants={heroItemVariants}
            className="mt-5 max-w-xl text-base leading-relaxed text-[#5C5852] sm:text-lg"
          >
            {PORTFOLIO_DATA.hero.shortDescription}
          </motion.p>

          {/* Target Roles Line */}
          <motion.p variants={heroItemVariants} className="mt-6 text-sm text-[#5C5852]">
            <span className="font-semibold text-[#292929]">Applying for: </span>
            {PORTFOLIO_DATA.personal.targetPosition}
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            variants={heroItemVariants}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#story"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18, ease: EASE_EDITORIAL }}
              className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#294C3B] px-7 py-3 text-sm font-medium text-[#F7F3EA] transition-colors duration-150 hover:bg-[#1E3A2D] whitespace-nowrap shrink-0"
            >
              Explore My Story
              <ArrowDown
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
                strokeWidth={1.75}
              />
            </motion.a>

            <motion.button
              type="button"
              onClick={onOpenContact}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18, ease: EASE_EDITORIAL }}
              className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-[#292929]/25 bg-transparent px-7 py-3 text-sm font-medium text-[#292929] transition-colors duration-150 hover:border-[#C76F4A] hover:text-[#C76F4A] whitespace-nowrap shrink-0 cursor-pointer"
            >
              Contact Me
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
              />
            </motion.button>
          </motion.div>

          {/* Subtle Scroll-Down Indicator */}
          <motion.div
            variants={heroItemVariants}
            className="mt-12 hidden items-center gap-3 text-xs font-medium tracking-wide text-[#5C5852] lg:flex"
          >
            <a
              href="#story"
              className="group inline-flex items-center gap-2.5 transition-colors hover:text-[#294C3B]"
            >
              <span className="flex h-8 w-5 items-start justify-center rounded-full border border-[#292929]/30 p-1">
                <motion.span
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="h-1.5 w-1 rounded-full bg-[#C76F4A]"
                />
              </span>
              <span>Scroll to read my travel journal</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Animated Hairline Divider + Full-Width Editorial Summary Strip */}
        <div className="mt-12 lg:mt-16">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.75, delay: 0.35, ease: EASE_EDITORIAL }}
            style={{ transformOrigin: 'left' }}
            className="h-px w-full bg-[#292929]/12"
          />

          <motion.div
            variants={factsContainerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-6 py-6 lg:grid-cols-4 lg:gap-8"
          >
            {PORTFOLIO_DATA.hero.quickFacts.map((fact) => (
              <motion.div
                key={fact.label}
                variants={factItemVariants}
                className="flex flex-col gap-1"
              >
                <span className="text-xs font-medium text-[#5C5852]">{fact.label}</span>
                <span className="font-editorial text-lg font-medium text-[#292929] tabular-nums">
                  {fact.value}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.75, delay: 0.45, ease: EASE_EDITORIAL }}
            style={{ transformOrigin: 'left' }}
            className="h-px w-full bg-[#292929]/12"
          />
        </div>
      </div>
    </section>
  );
}
