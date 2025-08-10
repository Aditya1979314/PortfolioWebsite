// src/pages/ProjectsPage.tsx
import React from "react";
import { Link } from "react-router-dom"; // Change to `next/link` if using Next.js

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my work and skills.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "An online store built with React and Firebase.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A task management app to track daily work.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "A blog platform with markdown support.",
    image: "https://via.placeholder.com/300x200",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-10">All Projects</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-gray-600 mt-2 text-sm flex-grow">
                {project.description}
              </p>
              <Link
                to={`/projects/${project.id}`} // Route to ProjectCaseStudy
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium text-center"
              >
                View Case Study
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
