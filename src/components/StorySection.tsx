import { motion } from 'motion/react';
import { Compass } from 'lucide-react';
import { PORTFOLIO_DATA, type EditorialPhoto } from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';

interface StorySectionProps {
  onSelectPhoto: (photo: EditorialPhoto) => void;
}

export function StorySection({ onSelectPhoto }: StorySectionProps) {
  const [coastPhoto, marketPhoto, foodPhoto, ruralPhoto] = PORTFOLIO_DATA.story.collage;

  return (
    <section id="story" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section Header + Personal Narrative */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C76F4A]">
              <Compass className="h-4 w-4" strokeWidth={1.75} />
              <span>{PORTFOLIO_DATA.story.kicker}</span>
            </div>

            <h2 className="mt-4 font-editorial text-3xl font-semibold leading-tight tracking-tight text-[#292929] sm:text-4xl lg:text-[2.75rem]">
              {PORTFOLIO_DATA.story.title}
            </h2>

            <p className="mt-4 font-editorial text-xl font-medium text-[#294C3B]">
              {PORTFOLIO_DATA.story.hometownLabel}
            </p>

            <p className="mt-5 text-base leading-relaxed text-[#5C5852]">
              {PORTFOLIO_DATA.story.narrative}
            </p>
          </motion.div>

          {/* Personal Introduction Journal Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-[#292929]/10 bg-[#EFE9DC]/65 p-7 sm:p-9 lg:col-span-7"
          >
            <p className="text-xs font-semibold tracking-wider text-[#294C3B]">
              Personal Introduction
            </p>
            <div className="mt-4 space-y-4 text-[15px] leading-[1.75] text-[#292929]">
              {PORTFOLIO_DATA.introduction.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Asymmetric Editorial Photo Collage */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-12 lg:mt-20 lg:gap-10">
          {/* Left Column: Quy Nhon Coast + Vietnamese Traditional Food */}
          <div className="flex flex-col gap-8 md:col-span-7 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <EditorialImage photo={coastPhoto} onSelect={onSelectPhoto} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="md:pl-10"
            >
              <EditorialImage photo={foodPhoto} onSelect={onSelectPhoto} />
            </motion.div>
          </div>

          {/* Right Column: Vertical Local Market + Rural Life */}
          <div className="flex flex-col justify-between gap-8 md:col-span-5 md:pt-12 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <EditorialImage photo={marketPhoto} onSelect={onSelectPhoto} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <EditorialImage photo={ruralPhoto} onSelect={onSelectPhoto} />
            </motion.div>
          </div>
        </div>

        {/* Editorial Personal Statement Pull-Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-16 max-w-4xl border-y border-[#292929]/15 py-10 text-center lg:mt-24 lg:py-12"
        >
          <p className="font-editorial text-2xl leading-relaxed font-normal italic text-[#294C3B] sm:text-3xl">
            {PORTFOLIO_DATA.story.statement}
          </p>
          <footer className="mt-4 text-xs font-semibold tracking-wider text-[#C76F4A]">
            {PORTFOLIO_DATA.personal.displayName} · {PORTFOLIO_DATA.personal.hometownShort}
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
