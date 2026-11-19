import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function ClosingSection() {
  const [bgError, setBgError] = useState(false);

  const mailtoHref = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
    `Application for ${PORTFOLIO_DATA.personal.targetCompany} — ${PORTFOLIO_DATA.personal.displayName}`,
  )}`;

  return (
    <section id="contact" className="scroll-mt-20">
      {/* Full-Width Emotional Closing Hero */}
      <div className="relative overflow-hidden bg-[#1E3A2D] text-[#F7F3EA]">
        {!bgError && (
          <img
            src={PORTFOLIO_DATA.closing.backgroundImage}
            alt={PORTFOLIO_DATA.closing.backgroundAlt}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setBgError(true)}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        )}

        {/* Measured Contrast Scrim for WCAG AA+ Legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#16271F]/95 via-[#16271F]/80 to-[#16271F]/65"
        />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-24 lg:px-10 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold tracking-wider text-[#E8C989]">
              Closing Note · {PORTFOLIO_DATA.personal.targetCompany}
            </p>

            <h2 className="mt-4 font-editorial text-3xl font-semibold leading-tight tracking-tight text-[#F7F3EA] sm:text-5xl">
              {PORTFOLIO_DATA.closing.headline}
            </h2>

            <div className="mt-8 space-y-4 text-base leading-relaxed tracking-[0.01em] text-[#F7F3EA]/90 sm:text-lg">
              {PORTFOLIO_DATA.closing.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-9 border-t border-[#F7F3EA]/20 pt-6">
              <p className="text-sm text-[#F7F3EA]/80">{PORTFOLIO_DATA.closing.signOff}</p>
              <p className="mt-1 font-editorial text-2xl font-medium tracking-wide text-[#E8C989]">
                {PORTFOLIO_DATA.personal.fullName}
              </p>
            </div>

            {/* Direct Email CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={mailtoHref}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#C76F4A] px-7 py-3 text-sm font-semibold text-[#F7F3EA] transition-colors duration-150 hover:bg-[#AD5B38] whitespace-nowrap shrink-0"
              >
                <Mail className="h-4 w-4" strokeWidth={1.75} />
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Contact Information Strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 grid grid-cols-1 gap-6 border-t border-[#F7F3EA]/20 pt-8 sm:grid-cols-3"
          >
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#E8C989]" strokeWidth={1.75} />
              <div>
                <p className="text-xs font-medium text-[#F7F3EA]/65">Email</p>
                <a
                  href={mailtoHref}
                  className="mt-1 block text-sm font-medium text-[#F7F3EA] transition-colors hover:text-[#E8C989]"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#E8C989]" strokeWidth={1.75} />
              <div>
                <p className="text-xs font-medium text-[#F7F3EA]/65">Phone</p>
                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                  className="mt-1 block text-sm font-medium text-[#F7F3EA] tabular-nums transition-colors hover:text-[#E8C989]"
                >
                  {PORTFOLIO_DATA.personal.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E8C989]" strokeWidth={1.75} />
              <div>
                <p className="text-xs font-medium text-[#F7F3EA]/65">Location</p>
                <p className="mt-1 text-sm font-medium text-[#F7F3EA]">
                  {PORTFOLIO_DATA.personal.currentLocation}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quiet Editorial Footer */}
      <footer className="bg-[#16271F] py-6 text-xs text-[#F7F3EA]/65">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-6 sm:flex-row lg:px-10">
          <p>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.displayName} · Personal Portfolio
            for {PORTFOLIO_DATA.personal.targetCompany}
          </p>
          <a
            href="#top"
            className="font-medium text-[#E8C989] transition-colors hover:text-[#F7F3EA]"
          >
            Back to top
          </a>
        </div>
      </footer>
    </section>
  );
}
