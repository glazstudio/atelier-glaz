import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group bg-white border border-glaz-grey hover:border-glaz-sage transition-all duration-300">
      <div className="aspect-video w-full overflow-hidden bg-glaz-grey relative">
        <img 
          src={project.imageUrl} 
          alt={`Projet : ${project.title} - ${project.description}`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          width="800"
          height="600"
        />
        <div className="absolute inset-0 bg-glaz-dark/0 group-hover:bg-glaz-dark/20 transition-colors duration-300" />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-glaz-sage bg-glaz-cream px-2 py-1 border border-glaz-sage/20">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-gotu text-xl text-glaz-dark mb-2 group-hover:text-glaz-sage transition-colors">
          {project.title}
        </h3>
        <p className="font-lato text-sm text-gray-600 leading-relaxed">
          {project.description}
        </p>
      </div>
    </article>
  );
};

export default ProjectCard;