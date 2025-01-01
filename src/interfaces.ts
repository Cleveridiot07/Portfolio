export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  lastUpdated?: string;
  imageUrl?: string;
  githubUrl: string;
  visitUrl: string;
  imageBg?: string;
}

export interface SkillsType {
  [key: string]: string; 
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  lastUpdated: string;
  imageUrl: string;
  githubUrl: string;
  visitUrl: string;
  imageBg: string;
}

export interface ProjectSliderProps {
  projects: ProjectCardProps[];
}
