import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const file = await fs.readFile(
    path.join(process.cwd(), "public/data/projects.json"),
    "utf-8"
  );
  return NextResponse.json(JSON.parse(file));
}