import { ProjectCarousel } from './ProjectCarousel';
import type { Project } from '../types/project';

interface ProjectDetailsProps {
  isOpen: boolean;
  project: Project;
}

export const ProjectDetails = ({ isOpen, project }: ProjectDetailsProps) => (
  <div className={`project-detail-panel ${isOpen ? 'show' : ''}`}>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-t border-slate-100 dark:border-slate-800/80 pt-6 mt-4">
      {isOpen && <ProjectCarousel images={project.images} projectId={project.id} />}

      <div className="space-y-4 text-xs">
        <div>
          <h4 className="text-slate-800 dark:text-slate-200 font-bold flex items-center gap-1.5 mb-1 select-none">
            <i className="fas fa-exclamation-circle text-sky-500"></i> Problem Solved
          </h4>
          <p className="text-slate-600 dark:text-slate-350 leading-relaxed">{project.problem}</p>
        </div>

        <div>
          <h4 className="text-slate-800 dark:text-slate-200 font-bold flex items-center gap-1.5 mb-1.5 select-none">
            <i className="fas fa-list-check text-sky-500"></i> Key Features
          </h4>
          <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-350">
            {project.features.map((feature) => (
              <li key={feature} className="leading-relaxed">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-slate-800 dark:text-slate-200 font-bold flex items-center gap-1.5 mb-1 select-none">
            <i className="fas fa-layer-group text-sky-500"></i> Tech Stack & Architecture
          </h4>
          <div className="flex flex-wrap gap-1.5 mt-1 select-none">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/60 text-slate-650 dark:text-slate-300 font-semibold text-[10px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-slate-800 dark:text-slate-200 font-bold flex items-center gap-1.5 mb-1 select-none">
            <i className="fas fa-gears text-sky-500"></i> Methodology & Flow
          </h4>
          <p className="text-slate-600 dark:text-slate-350 leading-relaxed">
            {project.methodology}
          </p>
        </div>

        <div>
          <h4 className="text-slate-800 dark:text-slate-200 font-bold flex items-center gap-1.5 mb-1 select-none">
            <i className="fas fa-forward text-sky-500"></i> Future Scope
          </h4>
          <p className="text-slate-600 dark:text-slate-350 leading-relaxed">
            {project.futureScope}
          </p>
        </div>
      </div>
    </div>
  </div>
);
