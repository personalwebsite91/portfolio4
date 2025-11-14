import React from 'react';
import { PROJECTS } from '../data';
import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';

const Projects: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gold-gradient-text">
            Featured Creations
          </h2>
        </AnimatedSection>
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;