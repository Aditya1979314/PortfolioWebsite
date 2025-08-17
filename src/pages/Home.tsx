import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import SectionWrapper from '../components/SectionWrapper'; // 👈 import it

interface Project {
  id: number;
  title: string;
  description: string;
  heading: string;
  image: string;
  livelink: string;
  githublink: string;
  toolsused: string[];
}

interface Homeprops {
  projects: Project[];
}

const Home = ({ projects }: Homeprops) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <SectionWrapper>
        <HeroSection />
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper>
        <AboutSection />
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper>
        <ProjectsSection projects={projects} />
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper>
        <ContactSection />
      </SectionWrapper>

      {/* Footer Section */}
      <SectionWrapper>
        <FooterSection />
      </SectionWrapper>
    </div>
  );
};

export default Home;
