import React from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

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

const ProjectsSection = ({projects}:Homeprops) => {
  return <section id="projects" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-2">PROJECTS</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-16"></div>
        {/* <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
          tempora explicabo quae quod deserunt eius sapiente
        </p> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {projects.slice(0,4).map(project => <ProjectCard key={project.id} id={project.id} title={project.title} description={project.heading} image={project.image} link={project.livelink} />)}
        </div>
        <div className="text-center">
          <Link to="/projects" className="inline-block bg-blue-600 text-white font-semibold py-4 px-8 rounded hover:bg-blue-700 transition-colors">
            VIEW ALL PROJECTS
          </Link>
        </div>
      </div>
    </section>;
};
export default ProjectsSection;