import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Article } from "./types";

const articlesDirectory = path.join(process.cwd(), "content/articoli");

function readArticleFile(fileName: string): Article {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(articlesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title ?? slug,
    subtitle: data.subtitle ?? "",
    date: data.date ?? "",
    author: data.author ?? "Redazione",
    category: data.category ?? "Generale",
    cover: data.cover ?? "",
    readingTime: Number(data.readingTime) || 5,
    excerpt: data.excerpt ?? "",
    content,
  };
}

/** Tutti gli articoli, ordinati dal più recente al più vecchio. */
export function getAllArticles(): Article[] {
  if (!fs.existsSync(articlesDirectory)) return [];

  const fileNames = fs.readdirSync(articlesDirectory).filter((f) => f.endsWith(".md"));
  const articles = fileNames.map(readArticleFile);

  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Un singolo articolo, con il markdown del corpo già convertito in HTML. */
export async function getArticleBySlug(
  slug: string
): Promise<(Article & { contentHtml: string }) | null> {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const article = readArticleFile(`${slug}.md`);
  const processed = await remark().use(html).process(article.content);
  const contentHtml = processed.toString();

  return { ...article, contentHtml };
}

export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) return [];
  return fs
    .readdirSync(articlesDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllCategories(): string[] {
  const categories = getAllArticles().map((a) => a.category);
  return Array.from(new Set(categories));
}
