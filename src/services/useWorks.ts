import { useQuery } from "@tanstack/react-query";
import getWork from "../lib/api/work";

const useWorks = () => {
  const { data, isFetched } = useQuery({
    queryKey: ["work"],
    queryFn: getWork,
  });

  return {
    works: data,
    isWorksFetched: isFetched,
  };
};

export default useWorks;