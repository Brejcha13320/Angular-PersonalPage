export interface Project {
  image: string;
  title: string;
  description: string;
  link: ProjectLink;
  technologies: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}
