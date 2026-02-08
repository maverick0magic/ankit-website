import Hero from "@/components/home/Hero";
import Link from "next/link";
import ProjectCard from "@/components/projects/ProjectCard";
import PostCard from "@/components/thoughts/PostCard";
import { projects } from "@/data/projects";
import { getAllContent } from "@/lib/mdx";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const posts = getAllContent("thoughts");
  const featuredPosts = posts.slice(0, 2);

  return (
    <div>
      <Hero />

      {/* Projects Preview */}
      <section className="py-16 border-t border-card-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Projects</h2>
              <p className="text-muted mt-1">Things I&apos;ve built</p>
            </div>
            <Link href="/projects" className="text-sm text-primary hover:text-primary-hover transition-colors">
              View all &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Ideas Preview */}
      {featuredPosts.length > 0 && (
        <section className="py-16 border-t border-card-border">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">Ideas</h2>
                <p className="text-muted mt-1">Things I&apos;ve learned building AI platforms</p>
              </div>
              <Link href="/thoughts" className="text-sm text-primary hover:text-primary-hover transition-colors">
                View all &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {featuredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
