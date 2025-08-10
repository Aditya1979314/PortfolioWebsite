import React from 'react';
import { Link } from 'react-router-dom';
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  id: number;
}
const ProjectCard = ({
  title,
  description,
  image,
  id
}: ProjectCardProps) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link to={`/projects/${id}`} className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition-colors">
          CASE STUDY
        </Link>
      </div>
    </div>;
};
export default ProjectCard;