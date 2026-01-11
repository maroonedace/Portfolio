import type { Skill } from '../../components/skills/model';
import type { SkillDB } from '../../types/database';
import { supabase } from '../supabase';

const getSkills = async (): Promise<Skill[]> => {
  const { data, error } = await supabase
    .from('skills')
    .select('*');

  if (error) {
    throw new Error(error.message);
  }

  const formattedData: Skill[] =
      data?.map((project: SkillDB) => ({
        name: project.name,
        logo: project.logo,
      })) || [];
  
    return formattedData;
}

export default getSkills