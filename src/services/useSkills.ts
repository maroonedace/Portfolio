import { useQuery } from "@tanstack/react-query";
import getSkills from "../lib/api/skills";

const useSkills = () => {
  const { data, isFetched } = useQuery({
    queryKey: ["skills"],
    queryFn: getSkills,
  });

  return {
    skills: data,
    isSkillsFetched: isFetched,
  };
};

export default useSkills;