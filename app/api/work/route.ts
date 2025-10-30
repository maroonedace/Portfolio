import { NextResponse } from "next/server";
import { createSupabaseClient } from "../../utils/supabase/server";
import { WorkType } from "../../types";

export async function GET() {
  const supabase = await createSupabaseClient();
  const { data } = await supabase.from("work").select().order("start_date", {
    ascending: false
  });

  const work: WorkType[] = data.map((workItem) => ({
    name: workItem.name,
    title: workItem.title,
    website: workItem.website || "",
    startDate: workItem.start_date,
    endDate: workItem.end_date,
    logoUrl: workItem.logo_url,
    skillNames: workItem.skills || [],
    descriptions: workItem.descriptions || [],
  }));
  return NextResponse.json({ work });
}
