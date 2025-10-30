import { NextResponse } from "next/server";
import { createSupabaseClient } from "../../utils/supabase/server";
import { ProjectType } from "../../types";

export async function GET() {
  const supabase = await createSupabaseClient();
  const { data } = await supabase.from("projects").select().order("id");

  const projects: ProjectType[] = data.map((project) => ({
    name: project.name,
    logoUrl: project.logo_url,
    skillNames: project.skills || [],
    description: project.description.join(" "),
    embedLink: project.embed_link,
    github: project.github,
  }));

  return NextResponse.json({ projects });
}
