export interface ProjectsProps {
  id?: number;
  title: string;
  description?: string;
  tecnologies?: string;
  github?: string;
  link?: string;
  gif: string;
  images: Array<string>;
}

export interface ContactProps {
  name: string;
  email: string;
  message: string;
}
