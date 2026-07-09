import type { ProjectStatus } from '../types/project';

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
}

const statusStyles: Record<ProjectStatus, string> = {
  Delivered:
    'bg-emerald-105/10 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-450 border-emerald-500/10',
  'In Progress':
    'bg-amber-105/10 dark:bg-amber-950/30 text-amber-600 dark:text-amber-450 border-amber-500/10',
  Academic:
    'bg-sky-105/10 dark:bg-sky-950/30 text-sky-600 dark:text-sky-450 border-sky-500/10',
};

export const ProjectStatusBadge = ({ status }: ProjectStatusBadgeProps) => (
  <span
    className={`px-3 py-1 rounded-full border text-xs font-semibold select-none ${statusStyles[status]}`}
  >
    {status}
  </span>
);
