"use client";

import { useState } from "react";
import Link from "next/link";

const dimensions = [
  { key: "data", label: "Data Maturity", description: "Quality, availability, and governance of your data assets" },
  { key: "infra", label: "Technical Infrastructure", description: "Cloud, compute, MLOps, and deployment capabilities" },
  { key: "team", label: "Team Skills", description: "AI/ML expertise, engineering capacity, and cross-functional readiness" },
  { key: "usecase", label: "Use Case Clarity", description: "Well-defined problems with measurable success criteria" },
  { key: "risk", label: "Risk Tolerance", description: "Organizational appetite for AI uncertainty and iterative development" },
];

const recommendations: Record<string, { low: string; mid: string; high: string }> = {
  data: {
    low: "Start with a data audit. Catalog your data sources, assess quality, and establish basic governance before pursuing AI initiatives.",
    mid: "Good foundation. Focus on building data pipelines and ensuring consistent data quality for your target AI use cases.",
    high: "Strong data maturity. You're well-positioned to leverage advanced AI/ML approaches including fine-tuning and RAG.",
  },
  infra: {
    low: "Begin with cloud-based AI services (APIs) to avoid infrastructure overhead. Consider managed ML platforms.",
    mid: "Solid infrastructure base. Evaluate MLOps tools to streamline model deployment and monitoring.",
    high: "Excellent infrastructure. Consider building custom model serving and advanced orchestration capabilities.",
  },
  team: {
    low: "Invest in AI literacy training. Start with prompt engineering skills and no-code AI tools. Consider hiring or contracting AI specialists.",
    mid: "Good team foundation. Develop specialized skills in your target AI domains. Pair engineers with product for applied AI projects.",
    high: "Strong AI team. Focus on advanced techniques, research partnerships, and building institutional knowledge.",
  },
  usecase: {
    low: "Run an AI opportunity discovery workshop. Map business processes to identify high-value, feasible AI applications.",
    mid: "Promising use cases identified. Validate with quick prototypes before committing to full builds. Define clear success metrics.",
    high: "Well-defined use cases with clear ROI. Move to structured pilot programs with defined evaluation criteria.",
  },
  risk: {
    low: "Start with low-risk, internal-facing AI applications. Build confidence with quick wins before expanding to customer-facing use cases.",
    mid: "Balanced risk approach. Implement guardrails and human-in-the-loop processes for customer-facing AI features.",
    high: "High risk tolerance enables aggressive AI adoption. Ensure governance frameworks keep pace with innovation speed.",
  },
};

export default function AIReadinessPage() {
  const [scores, setScores] = useState<Record<string, number>>({
    data: 5, infra: 5, team: 5, usecase: 5, risk: 5,
  });

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const avgScore = totalScore / 5;
  const maxRadius = 120;

  function getLevel(score: number) {
    if (score <= 3) return "low";
    if (score <= 7) return "mid";
    return "high";
  }

  function getOverallAssessment() {
    if (avgScore <= 3) return { label: "Early Stage", color: "text-red-400", desc: "Your organization is in the early stages of AI readiness. Focus on building foundational capabilities before large-scale AI initiatives." };
    if (avgScore <= 5) return { label: "Developing", color: "text-yellow-400", desc: "You have some capabilities in place. Target specific, well-scoped AI projects to build momentum and learn." };
    if (avgScore <= 7) return { label: "Ready", color: "text-rookie-green", desc: "Your organization is well-positioned for AI adoption. Pursue strategic AI initiatives with confidence." };
    return { label: "Advanced", color: "text-primary", desc: "Strong AI readiness across the board. Focus on scaling, optimization, and pushing the frontier." };
  }

  // Radar chart points
  const angleStep = (2 * Math.PI) / 5;
  const radarPoints = dimensions.map((_, i) => {
    const angle = angleStep * i - Math.PI / 2;
    const key = dimensions[i].key;
    const r = (scores[key] / 10) * maxRadius;
    return { x: 150 + r * Math.cos(angle), y: 150 + r * Math.sin(angle) };
  });
  const radarPath = radarPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  const gridLevels = [0.25, 0.5, 0.75, 1];
  const labelPoints = dimensions.map((d, i) => {
    const angle = angleStep * i - Math.PI / 2;
    const r = maxRadius + 30;
    return { x: 150 + r * Math.cos(angle), y: 150 + r * Math.sin(angle), label: d.label };
  });

  const assessment = getOverallAssessment();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/toolkit" className="text-sm text-primary hover:text-primary-hover transition-colors mb-8 inline-block">
        &larr; Back to Toolkit
      </Link>

      <h1 className="text-3xl font-bold mb-2">AI Readiness Assessment</h1>
      <p className="text-muted mb-10">Score your organization across 5 key dimensions to evaluate AI readiness.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Sliders */}
        <div className="space-y-6">
          {dimensions.map((dim) => (
            <div key={dim.key}>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium">{dim.label}</label>
                <span className="text-sm text-primary font-mono">{scores[dim.key]}/10</span>
              </div>
              <p className="text-xs text-muted mb-2">{dim.description}</p>
              <input
                type="range"
                min={1}
                max={10}
                value={scores[dim.key]}
                onChange={(e) => setScores({ ...scores, [dim.key]: parseInt(e.target.value) })}
                className="w-full accent-primary"
              />
            </div>
          ))}
        </div>

        {/* Radar Chart */}
        <div className="flex justify-center items-center">
          <svg width="300" height="300" viewBox="0 0 300 300">
            {/* Grid */}
            {gridLevels.map((level) => {
              const points = dimensions.map((_, i) => {
                const angle = angleStep * i - Math.PI / 2;
                const r = level * maxRadius;
                return `${150 + r * Math.cos(angle)},${150 + r * Math.sin(angle)}`;
              });
              return <polygon key={level} points={points.join(" ")} fill="none" stroke="#2a2a3e" strokeWidth="1" />;
            })}
            {/* Axes */}
            {dimensions.map((_, i) => {
              const angle = angleStep * i - Math.PI / 2;
              return (
                <line
                  key={i}
                  x1="150" y1="150"
                  x2={150 + maxRadius * Math.cos(angle)}
                  y2={150 + maxRadius * Math.sin(angle)}
                  stroke="#2a2a3e" strokeWidth="1"
                />
              );
            })}
            {/* Data polygon */}
            <path d={radarPath} fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" strokeWidth="2" />
            {/* Data points */}
            {radarPoints.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="4" fill="#6366f1" />
            ))}
            {/* Labels */}
            {labelPoints.map((p, i) => (
              <text key={i} x={p.x} y={p.y} textAnchor="middle" fill="#94a3b8" fontSize="11" dominantBaseline="middle">
                {p.label}
              </text>
            ))}
          </svg>
        </div>
      </div>

      {/* Overall Score */}
      <div className="mt-10 p-6 bg-card-bg border border-card-border rounded-xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-4xl font-bold font-mono gradient-text">{avgScore.toFixed(1)}/10</div>
          <div>
            <div className={`text-lg font-semibold ${assessment.color}`}>{assessment.label}</div>
            <p className="text-sm text-muted">{assessment.desc}</p>
          </div>
        </div>
      </div>

      {/* Dimension Recommendations */}
      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold mb-4">Recommendations by Dimension</h2>
        {dimensions.map((dim) => {
          const level = getLevel(scores[dim.key]);
          return (
            <div key={dim.key} className="p-4 bg-card-bg border border-card-border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">{dim.label}</span>
                <span className="text-xs text-muted font-mono">{scores[dim.key]}/10</span>
              </div>
              <p className="text-sm text-muted">{recommendations[dim.key][level]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
