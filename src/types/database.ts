export interface SkillDB {
  name: string;
  logo: string;
}

export interface ProjectDB {
  name: string;
  logo_url: string;
  skills: string[];
  description: string;
  github?: string;
  embed_link?: string;
}

export interface WorkDB {
  name: string;
  title: string;
  website: string;
  logo_url: string;
  descriptions: string[];
  skills: string[];
  start_date: string;
  end_date: string;
}
