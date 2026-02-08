import { notFound } from "next/navigation";
import Link from "next/link";
import { getRenderedContent, getAllContent } from "@/lib/mdx";
import { learnTopics } from "@/data/learn";
import DifficultyBadge from "@/components/learn/DifficultyBadge";

export function generateStaticParams() {
  return getAllContent("learn").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getRenderedContent("learn", slug);
  if (!post) return { title: "Not Found" };
  return { title: `${post.frontmatter.title} | Ankit Govil` };
}

export default async function LearnArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getRenderedContent("learn", slug);
  if (!post) notFound();

  const topicMeta = learnTopics.find((t: { slug: string }) => t.slug === slug);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/learn" className="text-sm text-primary hover:text-primary-hover transition-colors mb-8 inline-block">
        &larr; Back to Learnings
      </Link>

      <div className="flex items-center gap-3 mb-4">
        {topicMeta && <DifficultyBadge difficulty={topicMeta.difficulty} />}
        {topicMeta && <span className="text-sm text-muted">{topicMeta.readTime} read</span>}
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-8">{post.frontmatter.title}</h1>

      <div className="mdx-content" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
