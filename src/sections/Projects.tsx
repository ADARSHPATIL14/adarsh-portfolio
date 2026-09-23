import React from 'react';
import { projectsList } from '../data/portfolio';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden bg-background cinematic-footer-wrapper">
      {/* Aurora & Grid */}
      <div className="footer-aurora absolute left-1/3 top-1/2 -translate-y-1/2 h-[60vh] w-[75vw] rounded-[50%] blur-[130px] pointer-events-none z-0 opacity-50" />
      <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

      {/* Giant Masked Background Text */}
      <div className="section-giant-bg-text absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none">
        PROJECTS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="PORTFOLIO WORK"
          title="Featured Projects"
          subtitle="Real projects developed while studying, practicing algorithmic problem solving, and building practical software."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
