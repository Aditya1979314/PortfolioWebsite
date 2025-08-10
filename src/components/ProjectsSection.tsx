import React from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
const ProjectsSection = () => {
  const projects = [{
    id: 1,
    title: 'E-commerce Website',
    description: 'A full-featured online store with product catalog, shopping cart, and secure checkout.',
    image: "/Project1.png",
    link: '/projects'
  }, {
    id: 2,
    title: 'Portfolio App',
    description: 'A responsive portfolio website built with React and Tailwind CSS.',
    image: "/Project1.png",
    link: '/projects'
  }, {
    id: 3,
    title: 'Task Management Tool',
    description: 'A productivity application for managing tasks, projects, and team collaboration.',
    image: "/Project1.png",
    link: '/projects'
  }, {
    id: 4,
    title: 'Weather App',
    description: 'A weather forecast application with real-time data and location-based services.',
    image: "/Project1.png",
    link: '/projects'
  }];
  return <section id="projects" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-2">PROJECTS</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
          tempora explicabo quae quod deserunt eius sapiente
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {projects.map(project => <ProjectCard key={project.id} id={project.id} title={project.title} description={project.description} image={project.image} link={project.link} />)}
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