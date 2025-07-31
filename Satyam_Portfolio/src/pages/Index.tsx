import Header from '@/components/Header';
import SocialIcons from '@/components/SocialIcons';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TimelineSection from '@/components/TimelineSection';
import ProjectsSection from '@/components/ProjectsSection';
import TechStackSection from '@/components/TechStackSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <SocialIcons />
      
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <ProjectsSection />
        <TechStackSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
