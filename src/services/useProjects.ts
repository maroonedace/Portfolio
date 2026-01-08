import { useQuery } from "@tanstack/react-query";
import getProjects from "../lib/api/project";

const useProjects = () => {
  const { data, isFetched } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return {
    projects: data,
    isProjectsFetched: isFetched,
  };
};

export default useProjects;
