import { Difficulty } from "@/data/learn";

export default function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const isRookie = difficulty === "rookie";
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        isRookie
          ? "bg-rookie-green/10 text-rookie-green border border-rookie-green/30"
          : "bg-advanced-purple/10 text-advanced-purple border border-advanced-purple/30"
      }`}
    >
      {isRookie ? "Rookie" : "Advanced"}
    </span>
  );
}
