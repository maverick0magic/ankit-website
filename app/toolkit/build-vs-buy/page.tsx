"use client";

import { useState } from "react";
import Link from "next/link";

interface Question {
  id: string;
  question: string;
  options: { label: string; buildScore: number; buyScore: number }[];
}

const questions: Question[] = [
  {
    id: "customization",
    question: "How much customization do you need?",
    options: [
      { label: "Standard features are fine", buildScore: 0, buyScore: 3 },
      { label: "Some customization needed", buildScore: 1, buyScore: 2 },
      { label: "Heavy customization required", buildScore: 3, buyScore: 0 },
    ],
  },
  {
    id: "data_sensitivity",
    question: "How sensitive is your data?",
    options: [
      { label: "Public / non-sensitive data", buildScore: 0, buyScore: 3 },
      { label: "Moderately sensitive (internal business data)", buildScore: 1, buyScore: 2 },
      { label: "Highly sensitive (PII, financial, healthcare)", buildScore: 3, buyScore: 0 },
    ],
  },
  {
    id: "team_capability",
    question: "What is your team's AI/ML capability?",
    options: [
      { label: "No AI/ML engineers", buildScore: 0, buyScore: 3 },
      { label: "Some experience with AI tools", buildScore: 1, buyScore: 2 },
      { label: "Strong AI/ML team in place", buildScore: 3, buyScore: 1 },
    ],
  },
  {
    id: "timeline",
    question: "What is your timeline to production?",
    options: [
      { label: "Need it this month", buildScore: 0, buyScore: 3 },
      { label: "1-3 months", buildScore: 1, buyScore: 2 },
      { label: "3-6+ months is fine", buildScore: 3, buyScore: 1 },
    ],
  },
  {
    id: "budget",
    question: "What is your budget model preference?",
    options: [
      { label: "Predictable subscription pricing", buildScore: 0, buyScore: 3 },
      { label: "Flexible — willing to invest upfront", buildScore: 2, buyScore: 1 },
      { label: "Want to minimize long-term costs", buildScore: 3, buyScore: 0 },
    ],
  },
  {
    id: "competitive",
    question: "Is this AI capability a competitive differentiator?",
    options: [
      { label: "No — table stakes feature", buildScore: 0, buyScore: 3 },
      { label: "Somewhat — adds value but not core", buildScore: 1, buyScore: 2 },
      { label: "Yes — core to our product value", buildScore: 3, buyScore: 0 },
    ],
  },
];

export default function BuildVsBuyPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const buildScore = questions.reduce((sum, q) => {
    const idx = answers[q.id];
    return sum + (idx !== undefined ? q.options[idx].buildScore : 0);
  }, 0);

  const buyScore = questions.reduce((sum, q) => {
    const idx = answers[q.id];
    return sum + (idx !== undefined ? q.options[idx].buyScore : 0);
  }, 0);

  const allAnswered = Object.keys(answers).length === questions.length;
  const totalMax = questions.length * 3;

  function getRecommendation() {
    const diff = buildScore - buyScore;
    if (diff >= 4) return { label: "Build", color: "text-primary", reasoning: "Your situation strongly favors building a custom solution. You have the team, timeline, and strategic need to justify the investment." };
    if (diff >= 1) return { label: "Build (Lean)", color: "text-primary-hover", reasoning: "Building is slightly favored, but consider starting with APIs and open-source components to accelerate development." };
    if (diff >= -1) return { label: "Hybrid", color: "text-accent", reasoning: "Consider a hybrid approach: buy a foundation (APIs, platforms) and build custom layers on top for differentiation." };
    if (diff >= -4) return { label: "Buy (Customize)", color: "text-yellow-400", reasoning: "Buying is favored, but look for solutions with strong customization and integration capabilities." };
    return { label: "Buy", color: "text-rookie-green", reasoning: "Your situation clearly favors buying an existing solution. Focus on vendor evaluation and integration." };
  }

  const recommendation = getRecommendation();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/toolkit" className="text-sm text-primary hover:text-primary-hover transition-colors mb-8 inline-block">
        &larr; Back to Toolkit
      </Link>

      <h1 className="text-3xl font-bold mb-2">Build vs Buy AI</h1>
      <p className="text-muted mb-10">Answer these questions to get a scored recommendation on whether to build or buy your AI solution.</p>

      <div className="space-y-8">
        {questions.map((q, qi) => (
          <div key={q.id} className="p-5 bg-card-bg border border-card-border rounded-xl">
            <p className="font-medium mb-4">{qi + 1}. {q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, oi) => (
                <button
                  key={oi}
                  onClick={() => setAnswers({ ...answers, [q.id]: oi })}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all border ${
                    answers[q.id] === oi
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-card-border hover:border-primary/30 text-muted hover:text-foreground"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {allAnswered && !showResults && (
        <button
          onClick={() => setShowResults(true)}
          className="mt-8 w-full py-3 rounded-lg bg-gradient-to-r from-primary to-primary-hover text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all"
        >
          Get Recommendation
        </button>
      )}

      {showResults && (
        <div className="mt-10 p-6 bg-card-bg border border-card-border rounded-xl">
          <div className="text-center mb-6">
            <div className={`text-3xl font-bold ${recommendation.color}`}>{recommendation.label}</div>
            <p className="text-sm text-muted mt-2">{recommendation.reasoning}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="text-center p-4 bg-background rounded-lg">
              <div className="text-2xl font-bold text-primary font-mono">{buildScore}/{totalMax}</div>
              <div className="text-xs text-muted mt-1">Build Score</div>
              <div className="mt-2 h-2 bg-card-border rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${(buildScore / totalMax) * 100}%` }} />
              </div>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <div className="text-2xl font-bold text-accent font-mono">{buyScore}/{totalMax}</div>
              <div className="text-xs text-muted mt-1">Buy Score</div>
              <div className="mt-2 h-2 bg-card-border rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full" style={{ width: `${(buyScore / totalMax) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
