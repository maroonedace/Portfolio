import { useQuery } from "@tanstack/react-query";
import { WorkType } from "../../../../types";

const fetchWork = async (): Promise<WorkType[]> => {
  const res = await fetch("/api/work");
  if (!res.ok) throw new Error("Failed to load /api/work");
  const json = await res.json();
  return json.work;
}

const useWork = () => {
  const { data, isFetched } = useQuery({
    queryKey: ["work"],
    queryFn: fetchWork,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  return {
    works: data,
    isWorkFetched: isFetched,
  };
};

export default useWork;