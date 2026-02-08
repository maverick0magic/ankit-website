import Link from "next/link";
import { LearnTopic } from "@/data/learn";
import DifficultyBadge from "./DifficultyBadge";

export default function TopicCard({ topic }: { topic: LearnTopic }) {
  const isRookie = topic.difficulty === "rookie";
  const glowClass = isRookie ? "card-glow-green" : "card-glow-purple";
  const borderClass = isRookie ? "border-rookie-green/20" : "border-advanced-purple/20";

  return (
    <Link href={`/learn/${topic.slug}`}>
      <div
        className={`${glowClass} bg-card-bg border ${borderClass} rounded-xl p-5 h-full flex flex-col transition-all hover:-translate-y-1`}
      >
        <div className="flex items-center justify-between mb-3">
          <DifficultyBadge difficulty={topic.difficulty} />
          <span className="text-xs text-muted">{topic.readTime}</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{topic.title}</h3>
        <p className="text-sm text-muted flex-1">{topic.summary}</p>
        <div className="flex gap-2 mt-3 flex-wrap">
          {topic.tags.map((tag) => (
            <span key={tag} className="text-xs text-muted bg-background px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
