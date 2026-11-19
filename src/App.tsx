import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { MotivationSection } from './components/MotivationSection';
import { PersonalitySection } from './components/PersonalitySection';
import { ClosingSection } from './components/ClosingSection';
import { LightboxModal } from './components/LightboxModal';
import { ContactModal } from './components/ContactModal';
import type { EditorialPhoto } from './data/portfolioData';

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<EditorialPhoto | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#292929]">
      <Navbar onOpenContact={() => setContactOpen(true)} />

      <main>
        <HeroSection onOpenContact={() => setContactOpen(true)} />
        <StorySection onSelectPhoto={setSelectedPhoto} />
        <ExperienceSection onSelectPhoto={setSelectedPhoto} />
        <SkillsSection />
        <MotivationSection />
        <PersonalitySection />
        <ClosingSection />
      </main>

      <LightboxModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
