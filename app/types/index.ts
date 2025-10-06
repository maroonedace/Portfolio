export interface AboutData {
  descriptions: string[];
}

export interface Skill {
  name: string;
  slug: string;
  logoUrl: string;
}

export interface WorkType {
  name: string;
  title: string;
  logoUrl: string;
  skills: string[];
  startDate: string;
  endDate: string | null;
  descriptions: string[];
  website: string;
};

export interface ProjectType {
  name: string;
  logoUrl: string;
  skills: string[];
  description: string;
  embedLink?: string;
  github?: string;
};

