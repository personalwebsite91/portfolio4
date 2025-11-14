import React from 'react';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-[var(--bg-secondary)]/50 rounded-lg overflow-hidden border border-[var(--accent-gold)]/20 group transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-[var(--accent-gold)]/10 hover:border-[var(--accent-gold)]/60 transform hover:-translate-y-2">
      <div className="overflow-hidden h-56">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-[var(--text-secondary)] mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-[var(--accent-gold)]/10 text-[var(--accent-soft-gold)] text-xs font-semibold rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-end space-x-4 mt-auto pt-4 border-t border-[var(--accent-gold)]/10">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-[var(--accent-gold)] hover:text-white transition-colors duration-300">
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-[var(--accent-gold)] hover:text-white transition-colors duration-300">
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;