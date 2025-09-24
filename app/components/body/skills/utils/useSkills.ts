"use client";
import { useQuery } from "@tanstack/react-query";

export type Skill = {
  name: string;
  src: string;
  bgColor: string;
  slug: string;
};

const fetchSkills = async (): Promise<Skill[]> => {
  const res = await fetch("/api/skills", { cache: "no-store" });
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
  };
};

export default useSkills;
