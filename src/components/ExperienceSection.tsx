import { motion } from 'motion/react';
import { Sprout } from 'lucide-react';
import { PORTFOLIO_DATA, type EditorialPhoto } from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';

interface ExperienceSectionProps {
  onSelectPhoto: (photo: EditorialPhoto) => void;
}

export function ExperienceSection({ onSelectPhoto }: ExperienceSectionProps) {
  const experience = PORTFOLIO_DATA.experience.entries[0];

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-y border-[#292929]/10 bg-[#EFE9DC]/55 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C76F4A]">
            <Sprout className="h-4 w-4" strokeWidth={1.75} />
            <span>{PORTFOLIO_DATA.experience.kicker}</span>
          </div>
          <h2 className="mt-4 font-editorial text-3xl font-semibold leading-tight tracking-tight text-[#292929] sm:text-4xl lg:text-[2.75rem]">
            {PORTFOLIO_DATA.experience.title}
          </h2>
        </motion.div>

        {/* Visual Editorial Timeline Layout */}
        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          {/* Timeline Entry Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative pl-8 sm:pl-10">
              {/* Hairline Vertical Timeline Rail */}
              <div
                aria-hidden="true"
                className="absolute left-2.5 top-2 bottom-2 w-px bg-[#294C3B]/25"
              />
              {/* Editorial Timeline Node */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-[#294C3B] bg-[#F7F3EA]"
              >
                <span className="h-2 w-2 rounded-full bg-[#C76F4A]" />
              </div>

              {/* Experience Card */}
              <article className="rounded-2xl border border-[#292929]/12 bg-[#F7F3EA] p-7 sm:p-9">
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[#292929]/10 pb-5">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-[#C76F4A] tabular-nums">
                      Experience {experience.index}
                    </p>
                    <h3 className="mt-1 font-editorial text-2xl font-semibold text-[#292929] sm:text-3xl">
                      {experience.company}
                    </h3>
                  </div>
                  <div className="text-sm text-[#5C5852]">
                    <span className="font-semibold text-[#294C3B]">{experience.position}</span>
                    <span aria-hidden="true" className="mx-2 text-[#292929]/30">
                      ·
                    </span>
                    <span className="tabular-nums">{experience.duration}</span>
                  </div>
                </div>

                <p className="mt-5 text-[15px] leading-relaxed text-[#5C5852]">
                  {experience.summary}
                </p>

                {/* Responsibilities */}
                <div className="mt-7">
                  <h4 className="text-xs font-semibold tracking-wider text-[#294C3B]">
                    Key Responsibilities
                  </h4>
                  <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-[#292929]">
                    {experience.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C76F4A]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Developed — clean unboxed typographic strip */}
                <div className="mt-8 border-t border-[#292929]/10 pt-6">
                  <h4 className="text-xs font-semibold tracking-wider text-[#294C3B]">
                    Core Strengths Developed
                  </h4>
                  <p className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm font-medium text-[#292929]">
                    {experience.developedSkills.map((skill, idx) => (
                      <span key={skill} className="inline-flex items-center gap-2.5">
                        <span>{skill}</span>
                        {idx < experience.developedSkills.length - 1 && (
                          <span aria-hidden="true" className="text-[#C76F4A]">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </article>
            </div>
          </motion.div>

          {/* Accompanying Agricultural Photography & Reflection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            <EditorialImage
              photo={PORTFOLIO_DATA.experience.image}
              onSelect={onSelectPhoto}
            />

            <div className="rounded-2xl border border-[#292929]/10 bg-[#F7F3EA] p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wider text-[#294C3B]">
                From Farm Work to Hospitality
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#5C5852]">
                Working in livestock operations taught me punctuality, strict safety standards,
                physical stamina, and calm teamwork under pressure — habits that transfer directly
                to following tour routes, maintaining high service quality, and supporting
                international guests with energy and care.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
