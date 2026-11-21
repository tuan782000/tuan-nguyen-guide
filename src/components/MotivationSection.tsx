import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function MotivationSection() {
  return (
    <section
      id="motivation"
      className="scroll-mt-20 bg-[#294C3B] py-20 text-[#F7F3EA] lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-wider text-[#E8C989]">
              {PORTFOLIO_DATA.motivation.kicker}
            </p>
            <h2 className="mt-4 font-editorial text-3xl font-semibold leading-tight tracking-tight text-[#F7F3EA] sm:text-4xl lg:text-[2.75rem]">
              {PORTFOLIO_DATA.motivation.title}
            </h2>
          </div>

          <p className="text-sm leading-relaxed tracking-[0.01em] text-[#F7F3EA]/80 lg:col-span-5">
            Joining an energetic food tour, travel experience, or hospitality team brings together
            everything I care about most: welcoming international travelers, sharing authentic
            Vietnamese culture, and growing through daily communication.
          </p>
        </motion.div>

        {/* 4 Editorial Motivation Chapters */}
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-[#F7F3EA]/15 pt-12 md:grid-cols-2 lg:mt-16 lg:gap-x-14 lg:gap-y-12">
          {PORTFOLIO_DATA.motivation.points.map((point, index) => (
            <motion.article
              key={point.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-3 border-b border-[#F7F3EA]/15 pb-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-editorial text-3xl font-medium text-[#E8C989] tabular-nums">
                  {point.number}
                </span>
                <h3 className="font-editorial text-2xl font-medium text-[#F7F3EA]">
                  {point.title}
                </h3>
              </div>
              <p className="pl-0 text-[15px] leading-relaxed tracking-[0.01em] text-[#F7F3EA]/85 sm:pl-12">
                {point.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Anchor Food Story Statement */}
        <motion.blockquote
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-14 max-w-4xl text-center lg:mt-20"
        >
          <p className="font-editorial text-2xl leading-relaxed font-normal italic text-[#E8C989] sm:text-3xl lg:text-[2.1rem]">
            {PORTFOLIO_DATA.motivation.statement}
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
