import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';

interface Project{
  id:number,
  title:string,
  description:string,
  heading:string,
  image :string,
  livelink:string,
  githublink:string,
  toolsused:string[]
}

interface Homeprops{
  projects:Project[]
}

const Home = ({projects}:Homeprops) => {
  return <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ProjectsSection projects={projects}/>
      <ContactSection />
      <FooterSection />
    </div>;
};
export default Home;