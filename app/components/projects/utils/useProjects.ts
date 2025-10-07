import { useQuery } from "@tanstack/react-query";
import { ProjectType } from "../../../types";

const fetchProjects = async (): Promise<ProjectType[]> => {
  const res = await fetch("/api/projects");
  if (!res.ok) throw new Error("Failed to load /api/projects");
  const json = await res.json();
  return json.projects;
}

const useProjects = () => {
  const { data, isFetched } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  return {
    projects: data,
    isProjectsFetched: isFetched,
  };
};

export default useProjects;