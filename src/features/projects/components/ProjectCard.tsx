import { ProjectDetails } from './ProjectDetails';
import { ProjectLinks } from './ProjectLinks';
import { ProjectStatusBadge } from './ProjectStatusBadge';
import type { Project } from '../types/project';

interface ProjectCardProps {
  isOpen: boolean;
  onToggle: (id: string) => void;
  project: Project;
}

export const ProjectCard = ({ isOpen, onToggle, project }: ProjectCardProps) => (
  <article className="group relative rounded-3xl overflow-hidden glass-panel border border-slate-200/50 dark:border-slate-800/80 hover:border-sky-500/30 dark:hover:border-sky-500/20 shadow-sm hover:shadow-md transition-all duration-300 p-6">
    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
      <div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-sky-500 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
          {project.role} | {project.timeline}
        </p>
      </div>
      <ProjectStatusBadge status={project.status} />
    </div>

    <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed mb-4">
      {project.shortDesc}
    </p>

    <div className="flex flex-wrap gap-2.5 items-center justify-between">
      <ProjectLinks project={project} />
      <button
        onClick={() => onToggle(project.id)}
        className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700 text-white text-xs font-bold transition-all shadow shadow-sky-500/10 hover:shadow-sky-500/20 active:scale-95 cursor-pointer"
      >
        {isOpen ? 'Hide Project Details' : 'View Project Screens & Details'}
      </button>
    </div>

    <ProjectDetails isOpen={isOpen} project={project} />
  </article>
);
