import type { Project } from "../../components/project/type";
import type { ProjectDB } from "../../types/database";
import { supabase } from "../supabase";

const getProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("order");

  if (error) {
    throw new Error(error.message);
  }

  const formattedData: Project[] =
    data?.map((project: ProjectDB) => ({
      name: project.name,
      description: project.description,
      skillNames: project.skills,
      logo: project.logo_url,
      embedLink: project.embed_link,
    })) || [];

  return formattedData;
};

export default getProjects;
