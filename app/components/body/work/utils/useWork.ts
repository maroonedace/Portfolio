"use client";
import { useQuery } from "@tanstack/react-query";

export type WorkType = {
  name: string;
  title: string;
  logoUrl: string;
  skills: string[];
  startDate: string;
  endDate: string | null;
  descriptions: string[];
  website: string;
};

const fetchWork = async (): Promise<WorkType[]> => {
  const res = await fetch("/api/work", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load /api/work");
  const json = await res.json();
  return json.work;
}

const useWork = () => {
  const { data, isFetched } = useQuery({
    queryKey: ["work"],
    queryFn: fetchWork,
  });

  return {
    works: data,
    isWorkFetched: isFetched,
  };
};

export default useWork;