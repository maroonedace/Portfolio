import { NextResponse } from "next/server";
import { ProjectType } from "../../components/body/projects/utils/useProjects";
import { createSupabaseClient } from "../../utils/supabase/server";

export async function GET() {
  const supabase = await createSupabaseClient();
  const { data } = await supabase.from("projects").select();

  const projects: ProjectType[] = data.map((project) => ({
    name: project.name,
    logoUrl: project.logo_url,
    skills: project.skills || [],
    descriptions: Array.isArray(project.descriptions)
      ? project.descriptions
      : [project.descriptions].filter(Boolean),
    embedLink: project.embed_link,
    github: project.github,
  }));

  return NextResponse.json({ projects });
}
