import { NextResponse } from "next/server";
import { WorkType } from "../../components/body/work/utils/useWork";
import { createSupabaseClient } from "../../utils/supabase/server";

export async function GET() {
  const supabase = await createSupabaseClient();
  const { data } = await supabase.from("work").select();

  const work: WorkType[] = data.map((workItem) => ({
    name: workItem.name,
    title: workItem.title,
    website: workItem.website || "",
    startDate: workItem.start_date,
    endDate: workItem.end_date,
    logoUrl: workItem.logo_url,
    skills: workItem.skills || [],
    descriptions: Array.isArray(workItem.descriptions)
      ? workItem.descriptions
      : [workItem.descriptions].filter(Boolean),
  }));
  return NextResponse.json({ work });
}
