import type { Project } from "../../components/project/type";
import type { ProjectDB } from "../../types/database";
import { fetchFromSupabase } from "../supabase";

const getProjects = async (): Promise<Project[]> => {
  const data = await fetchFromSupabase<ProjectDB>(
    "projects",
    "select=*&order=order.desc"
  );

  return data.map((project) => ({
    name: project.name,
    description: project.description,
    github: project.github,
    skillNames: project.skills,
    logo: project.logo_url,
    embedLink: project.embed_link,
  }));
};

export default getProjects;
