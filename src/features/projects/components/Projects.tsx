import { useState } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const handleToggleDetails = (id: string) => {
    setActiveProject(prev => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6 items-start relative z-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white tracking-tight border-b-2 border-sky-500 pb-1.5 inline-block">
            Projects
          </h2>
        </div>

        <div className="md:col-span-8 space-y-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              isOpen={activeProject === project.id}
              onToggle={handleToggleDetails}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
