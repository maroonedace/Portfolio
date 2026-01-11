import type { Work } from "../../components/work/model";
import type { WorkDB } from "../../types/database";
import { supabase } from "../supabase";

const getWork = async (): Promise<Work[]> => {
  const { data, error } = await supabase
    .from("work")
    .select("*")
    .order("start_date", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  const formattedData: Work[] =
    data?.map((work: WorkDB) => ({
      name: work.name,
      title: work.title,
      website: work.website,
      logoUrl: work.logo_url,
      descriptions: work.descriptions,
      skillNames: work.skills,
      startDate: work.start_date,
      endDate: work.end_date,
    })) || [];

  return formattedData;
};

export default getWork;
