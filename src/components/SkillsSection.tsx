import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#C76F4A]">
              {PORTFOLIO_DATA.skills.kicker}
            </p>
            <h2 className="mt-3 font-editorial text-3xl font-semibold leading-tight tracking-tight text-[#292929] sm:text-4xl lg:text-[2.75rem]">
              {PORTFOLIO_DATA.skills.title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#5C5852]">
            Practical everyday capabilities grounded in hands-on work, warm communication, and a
            genuine eagerness to learn alongside your team.
          </p>
        </motion.div>

        {/* 6 Editorial Skill Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {PORTFOLIO_DATA.skills.items.map((skill, index) => (
            <motion.article
              key={skill.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col justify-between rounded-2xl border border-[#292929]/12 bg-[#EFE9DC]/45 p-7 transition-colors duration-200 hover:border-[#294C3B]/40 hover:bg-[#EFE9DC]/85"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4 border-b border-[#292929]/10 pb-4">
                  <span className="font-editorial text-2xl font-medium text-[#C76F4A] tabular-nums">
                    {skill.number}
                  </span>
                  {skill.meta && (
                    <span className="text-xs font-medium text-[#294C3B]">{skill.meta}</span>
                  )}
                </div>

                <h3 className="mt-5 font-editorial text-xl font-semibold text-[#292929] transition-colors duration-150 group-hover:text-[#294C3B]">
                  {skill.title}
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-[#5C5852]">
                  {skill.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
