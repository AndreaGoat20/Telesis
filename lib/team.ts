import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { TeamMember } from "./types";

const teamDirectory = path.join(process.cwd(), "content/team");

/** Tutti i membri del team, ordinati secondo il campo `order` del frontmatter. */
export function getAllTeamMembers(): TeamMember[] {
  if (!fs.existsSync(teamDirectory)) return [];

  const fileNames = fs.readdirSync(teamDirectory).filter((f) => f.endsWith(".md"));

  const members = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(teamDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      name: data.name ?? slug,
      role: data.role ?? "",
      photo: data.photo ?? "",
      order: Number(data.order) || 999,
      bio: content.trim(),
    };
  });

  return members.sort((a, b) => a.order - b.order);
}
