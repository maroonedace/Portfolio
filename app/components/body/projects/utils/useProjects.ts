"use client";
import { useQuery } from "@tanstack/react-query";

export type ProjectType = {
  name: string;
  logoUrl: string;
  skills: string[];
  description: string;
  embedLink?: string;
  github?: string;
};

const fetchProjects = async (): Promise<ProjectType[]> => {
  const res = await fetch("/api/projects", { cache: "no-store" });
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