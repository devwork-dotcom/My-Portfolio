import type { Project } from '../types/project';

interface ProjectLinksProps {
  project: Project;
}

const linkClass =
  'px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/40 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-sky-50 dark:hover:bg-slate-750 hover:text-sky-500 transition';

export const ProjectLinks = ({ project }: ProjectLinksProps) => (
  <div className="flex gap-2">
    {project.github && (
      <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
        <i className="fab fa-github mr-1"></i> GitHub
      </a>
    )}
    {project.playStore && (
      <a href={project.playStore} target="_blank" rel="noopener noreferrer" className={linkClass}>
        <i className="fab fa-google-play mr-1"></i> Play Store
      </a>
    )}
    {project.appStore && (
      <a href={project.appStore} target="_blank" rel="noopener noreferrer" className={linkClass}>
        <i className="fab fa-app-store-ios mr-1"></i> App Store
      </a>
    )}
  </div>
);
