import type { SkillDB } from '../../types/database';
import { supabase } from '../supabase';

const getSkills = async (): Promise<SkillDB[]> => {
  const { data, error } = await supabase
    .from('skills')
    .select('*')

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
}

export default getSkills