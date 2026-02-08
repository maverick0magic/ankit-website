import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

export interface MDXFrontmatter {
  title: string;
  date: string;
  summary: string;
  tags?: string[];
  [key: string]: unknown;
}

export interface MDXPost {
  slug: string;
  frontmatter: MDXFrontmatter;
  content: string;
}

export interface MDXPostWithHtml {
  slug: string;
  frontmatter: MDXFrontmatter;
  html: string;
}

export function getContentBySlug(folder: string, slug: string): MDXPost | null {
  const filePath = path.join(contentDirectory, folder, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: data as MDXFrontmatter,
    content,
  };
}

export async function getRenderedContent(folder: string, slug: string): Promise<MDXPostWithHtml | null> {
  const post = getContentBySlug(folder, slug);
  if (!post) return null;

  const result = await remark().use(html).process(post.content);

  return {
    slug: post.slug,
    frontmatter: post.frontmatter,
    html: result.toString(),
  };
}

export function getAllContent(folder: string): MDXPost[] {
  const folderPath = path.join(contentDirectory, folder);
  if (!fs.existsSync(folderPath)) return [];

  const files = fs.readdirSync(folderPath).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      return getContentBySlug(folder, slug);
    })
    .filter((post): post is MDXPost => post !== null)
    .sort((a, b) => {
      if (a.frontmatter.date && b.frontmatter.date) {
        return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
      }
      return 0;
    });
}
