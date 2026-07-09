export type ProjectStatus = 'Delivered' | 'In Progress' | 'Academic';

export interface Project {
  id: string;
  title: string;
  role: string;
  timeline: string;
  status: ProjectStatus;
  shortDesc: string;
  problem: string;
  features: string[];
  techStack: string[];
  methodology: string;
  futureScope: string;
  images: string[];
  github?: string;
  playStore?: string;
  appStore?: string;
}
