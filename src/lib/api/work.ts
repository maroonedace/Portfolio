import type { Work } from "../../components/work/model";
import type { WorkDB } from "../../types/database";
import { fetchFromSupabase } from "../supabase";

const getWork = async (): Promise<Work[]> => {
  const data = await fetchFromSupabase<WorkDB>(
    "work",
    "select=*&order=start_date.desc"
  );

  return data.map((work) => ({
    name: work.name,
    title: work.title,
    website: work.website,
    logoUrl: work.logo_url,
    descriptions: work.descriptions,
    skillNames: work.skills,
    startDate: work.start_date,
    endDate: work.end_date,
  }));
};

export default getWork;
