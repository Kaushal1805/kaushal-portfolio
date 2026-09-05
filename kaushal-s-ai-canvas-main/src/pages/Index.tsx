import Navigation from '../components/Navigation';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import BlogsSection from '../components/sections/BlogsSection';
import AwardsSection from '../components/sections/AwardsSection';
import EducationSection from '../components/sections/EducationSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const SectionDivider = () => (
  <div className="section-divider my-2" />
);

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider />
        <BlogsSection />
        <SectionDivider />
        <AwardsSection />
        <SectionDivider />
        <EducationSection />
        <SectionDivider />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Back to Top */}
      <BackToTop />
    </div>
  );
};

export default Index;