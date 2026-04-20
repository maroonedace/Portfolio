import type { Skill } from '../../components/skills/model';
import type { SkillDB } from '../../types/database';
import { fetchFromSupabase } from '../supabase';

const getSkills = async (): Promise<Skill[]> => {
  const data = await fetchFromSupabase<SkillDB>(
    "skills",
    "select=*"
  );

  return data.map((skill) => ({
    name: skill.name,
    logo: skill.logo,
  }));
};

export default getSkills;