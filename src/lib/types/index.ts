
export type ServiceType = {
  title: string;
  description: string;
};

interface ProjectImage {
  imageSrc: string;
  imageAlt: string;
}

interface ProjectDescription {
  summary: string;
  highlights: string[]; 
}

export interface ProjectData {
  title: string;
  description: ProjectDescription
  techStack: string[];
  image: ProjectImage;
  link: string;
  yearBuilt: string;
}
