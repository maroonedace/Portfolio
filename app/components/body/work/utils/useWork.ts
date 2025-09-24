"use client";
import { useQuery } from "@tanstack/react-query";

export type Work = {
  name: string;
  title: string;
  logo: string;
  period: string;
  skills: string[];
  website?: string;
  description?: string;
};

const fetchWork = async (): Promise<Work[]> => {
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