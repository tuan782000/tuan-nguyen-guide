import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
}

const NAV_LINKS = [
  { label: 'Story', href: '#story' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Motivation', href: '#motivation' },
  { label: 'Personality', href: '#personality' },
];

export function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#F7F3EA]/95 backdrop-blur-md border-b border-[#292929]/10'
          : 'bg-[#F7F3EA]/80 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-8 px-6 lg:px-10">
        {/* Zone 1: Single-element brand wordmark */}
        <a
          href="#top"
          className="font-editorial text-lg font-semibold tracking-tight text-[#292929] transition-colors hover:text-[#294C3B] whitespace-nowrap shrink-0"
        >
          {PORTFOLIO_DATA.personal.displayName}
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5C5852]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors duration-150 hover:text-[#294C3B] whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#C76F4A] after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#294C3B] px-5 py-2.5 text-sm font-medium text-[#F7F3EA] transition-colors duration-150 hover:bg-[#1E3A2D] whitespace-nowrap shrink-0 cursor-pointer"
          >
            Contact Me
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#292929] transition-colors hover:bg-[#EFE9DC] md:hidden cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-[#292929]/10 bg-[#F7F3EA] px-6 py-5 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center text-base font-medium text-[#292929] transition-colors hover:text-[#294C3B]"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="mt-3 flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#294C3B] px-5 py-2.5 text-sm font-medium text-[#F7F3EA] transition-colors hover:bg-[#1E3A2D] cursor-pointer"
            >
              Contact Me
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
