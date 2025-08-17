import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedinIcon, GithubIcon, TwitterIcon, YoutubeIcon, InstagramIcon } from 'lucide-react';
const HeroSection = () => {
  return <section className="w-full bg-blue-600 text-white relative">
      {/* Social Media Sidebar */}
      <div className="absolute left-0 top-1/3 flex flex-col">
        <a href="https://www.linkedin.com/in/aditya-singh-76376721a/" target='_blank' className="bg-blue-700 p-4 hover:bg-blue-800 transition-colors">
          <LinkedinIcon size={24} />
        </a>
        <a href="https://github.com/Aditya1979314" target='_blank' className="bg-blue-700 p-4 hover:bg-blue-800 transition-colors">
          <GithubIcon size={24} />
        </a>
        <a href="https://x.com/Aditya31872628" target='_blank' className="bg-blue-700 p-4 hover:bg-blue-800 transition-colors">
          <TwitterIcon size={24} />
        </a>
        {/* <a href="https://youtube.com" className="bg-blue-700 p-4 hover:bg-blue-800 transition-colors">
          <YoutubeIcon size={24} />
        </a>
        <a href="https://instagram.com" className="bg-blue-700 p-4 hover:bg-blue-800 transition-colors">
          <InstagramIcon size={24} />
        </a> */}
      </div>
      {/* Hero Content */}
      <div className="container mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          HEY, MY NAME IS ADITYA SINGH
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-12">
          Building fast, reliable, and modern web applications with full-stack expertise.
        </p>
        <Link to="/projects" className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded hover:bg-gray-100 transition-colors">
          PROJECTS
        </Link>
      </div>
    </section>;
};
export default HeroSection;