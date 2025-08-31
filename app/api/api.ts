import { NextResponse } from "next/server";

import { promises as fs } from "fs";

const fetchSkills = async () => {
  const file = await fs.readFile(process.cwd() + "public/data/skills.json", "utf8");
  const data = JSON.parse(file);
  return NextResponse.json(data)
};

export default fetchSkills;
