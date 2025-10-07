export interface WorkType {
  name: string;
  title: string;
  logoUrl: string;
  skillNames: string[];
  startDate: string;
  endDate: string | null;
  descriptions: string[];
  website: string;
};

export interface ProjectType {
  name: string;
  logoUrl: string;
  skillNames: string[];
  description: string;
  embedLink?: string;
  github?: string;
};

