import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { Link, useParams } from 'react-router-dom';

interface Project{
  id:number,
  title:string,
  description:string,
  image ?:string,
  link:string
}

interface Homeprops{
  projects:Project[]
}

const ProjectCaseStudy = ({projects}:Homeprops) => {
  const{id} = useParams();
  const projectid = Number(id);
  const project = projects.find(p=>p.id === projectid);
  // Sample tools used in the project
  const tools = ['HTML', 'CSS', 'JavaScript', 'React', 'SASS', 'GIT', 'Shopify', 'Wordpress', 'Google ADS', 'Facebook Ads', 'Android', 'iOS'];
  if(!project){
    return <div>Not found the page</div>
  }
  return <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-blue-600 text-white py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">{project.title}</h1>
          <p className="text-xl max-w-3xl mx-auto">
          {project.description}
          </p>
          <div className="mt-12">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded hover:bg-gray-100 transition-colors">
              LIVE LINK
            </a>
          </div>
        </div>
      </section>
      {/* Project Overview Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
          <div className="max-w-4xl text-gray-700 space-y-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              alias tenetur minus quaerat aliquid, aut provident blanditiis,
              deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae
              mollitia laborum corrupti ullam rem. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Neque alias tenetur minus quaerat
              aliquid, aut provident blanditiis, deleniti aspernatur ipsam eaque
              veniam voluptatem corporis vitae mollitia laborum corrupti ullam
              rem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              alias tenetur minus quaerat aliquid, aut provident blanditiis,
              deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae
              mollitia laborum corrupti ullam rem?
            </p>
          </div>
        </div>
      </section>
      {/* Tools Used Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Tools Used</h2>
          <div className="flex flex-wrap gap-4">
            {tools.map((tool, index) => <span key={index} className="bg-gray-200 py-2 px-6 rounded font-medium">
                {tool}
              </span>)}
          </div>
        </div>
      </section>
      {/* See Live Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">See Live</h2>
          <div className="flex flex-wrap gap-4">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded hover:bg-blue-700 transition-colors">
              LIVE LINK
            </a>
            <a href="https://github.com/example/project" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded border border-blue-600 hover:bg-gray-50 transition-colors">
              CODE LINK
            </a>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>;
};
export default ProjectCaseStudy;