"use client";
import { useQuery } from "@tanstack/react-query";

export type Skill = {
  name: string;
  logoUrl: string;
  slug: string;
};

const fetchSkills = async (): Promise<Skill[]> => {
  const res = await fetch("/api/skills");
  if (!res.ok) throw new Error("Failed to load /api/skills");
  const json = await res.json();
  return json.skills;
}

const useSkills = () => {
  const { data, isFetched } = useQuery({
    queryKey: ["skills"],
    queryFn: fetchSkills,
  });

  return {
    skills: data,
    isSkillsFetched: isFetched,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  };
};

export default useSkills;
