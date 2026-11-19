import { motion } from 'motion/react';
import { PORTFOLIO_DATA, type PersonalityTrait } from '../data/portfolioData';

function TravelMotif({ motif }: { motif: PersonalityTrait['motif'] }) {
  switch (motif) {
    case 'compass':
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <circle cx="18" cy="18" r="15" stroke="currentColor" strokeWidth="1.25" />
          <path d="M18 7L20.5 15.5L29 18L20.5 20.5L18 29L15.5 20.5L7 18L15.5 15.5L18 7Z" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      );
    case 'bowl':
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <path d="M6 19C6 25.6274 11.3726 30 18 30C24.6274 30 30 25.6274 30 19H6Z" stroke="currentColor" strokeWidth="1.25" />
          <path d="M13 14C13 11.5 15 11.5 15 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          <path d="M18 14C18 11 20 11 20 8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          <path d="M23 14C23 11.5 25 11.5 25 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      );
    case 'leaf':
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <path d="M9 27C9 15 17 8 28 8C28 19 21 27 9 27Z" stroke="currentColor" strokeWidth="1.25" />
          <path d="M9 27L21 15" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      );
    case 'journal':
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <rect x="8" y="6" width="20" height="24" rx="2.5" stroke="currentColor" strokeWidth="1.25" />
          <line x1="13" y1="6" x2="13" y2="30" stroke="currentColor" strokeWidth="1.25" />
          <line x1="17" y1="13" x2="24" y2="13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          <line x1="17" y1="18" x2="24" y2="18" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      );
    case 'sun':
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <circle cx="18" cy="18" r="6.5" stroke="currentColor" strokeWidth="1.25" />
          <path d="M18 5V8M18 28V31M5 18H8M28 18H31M9 9L11.2 11.2M24.8 24.8L27 27M27 9L24.8 11.2M11.2 24.8L9 27" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      );
    case 'globe':
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <circle cx="18" cy="18" r="13" stroke="currentColor" strokeWidth="1.25" />
          <ellipse cx="18" cy="18" rx="6" ry="13" stroke="currentColor" strokeWidth="1.25" />
          <line x1="5" y1="18" x2="31" y2="18" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      );
  }
}

export function PersonalitySection() {
  return (
    <section id="personality" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-wider text-[#C76F4A]">
            {PORTFOLIO_DATA.personality.kicker}
          </p>
          <h2 className="mt-3 font-editorial text-3xl font-semibold leading-tight tracking-tight text-[#292929] sm:text-4xl lg:text-[2.75rem]">
            {PORTFOLIO_DATA.personality.title}
          </h2>
        </motion.div>

        {/* Expressive Typographic Editorial List */}
        <div className="mt-12 divide-y divide-[#292929]/12 border-y border-[#292929]/12 lg:mt-16">
          {PORTFOLIO_DATA.personality.traits.map((trait, index) => (
            <motion.div
              key={trait.statement}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group grid grid-cols-1 items-center gap-4 py-7 transition-colors duration-200 hover:bg-[#EFE9DC]/50 sm:px-4 md:grid-cols-12 md:gap-8 lg:py-8"
            >
              <div className="flex items-center gap-5 md:col-span-7">
                <span className="shrink-0 text-[#C76F4A] transition-transform duration-200 group-hover:scale-105">
                  <TravelMotif motif={trait.motif} />
                </span>
                <h3 className="font-editorial text-2xl font-medium tracking-tight text-[#292929] transition-colors duration-150 group-hover:text-[#294C3B] sm:text-3xl">
                  {trait.statement}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-[#5C5852] md:col-span-5 md:text-[15px]">
                {trait.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
