import { NextResponse } from "next/server";
import { Skill } from "../../components/body/skills/utils/useSkills";
import { createSupabaseClient } from "../../utils/supabase/server";

export async function GET() {
  const supabase = await createSupabaseClient();
  const { data } = await supabase.from("skills").select();

  const skills: Skill[] = data.map((skill) => ({
    name: skill.name,
    logoUrl: skill.logo_url,
    slug: skill.slug,
  }));
  return NextResponse.json({ skills });
}
