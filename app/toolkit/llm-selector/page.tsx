"use client";

import { useState } from "react";
import Link from "next/link";

interface LLMModel {
  name: string;
  provider: string;
  costPer1kTokens: string;
  latency: string;
  contextWindow: string;
  strengths: string[];
  useCases: string[];
  hosted: "cloud" | "self-hosted" | "both";
}

const models: LLMModel[] = [
  { name: "GPT-4o", provider: "OpenAI", costPer1kTokens: "$0.005", latency: "Fast", contextWindow: "128K", strengths: ["Reasoning", "Code", "Vision", "Instruction following"], useCases: ["chatbot", "code", "agents", "summarization"], hosted: "cloud" },
  { name: "Claude 4 Sonnet", provider: "Anthropic", costPer1kTokens: "$0.003", latency: "Fast", contextWindow: "200K", strengths: ["Long context", "Analysis", "Code", "Safety"], useCases: ["chatbot", "code", "agents", "summarization"], hosted: "cloud" },
  { name: "Claude 4 Opus", provider: "Anthropic", costPer1kTokens: "$0.015", latency: "Medium", contextWindow: "200K", strengths: ["Deep reasoning", "Complex tasks", "Research"], useCases: ["agents", "code", "summarization"], hosted: "cloud" },
  { name: "Gemini 2.5 Pro", provider: "Google", costPer1kTokens: "$0.007", latency: "Fast", contextWindow: "1M", strengths: ["Massive context", "Multimodal", "Reasoning"], useCases: ["chatbot", "summarization", "agents"], hosted: "cloud" },
  { name: "Llama 3.3 70B", provider: "Meta", costPer1kTokens: "$0.001", latency: "Medium", contextWindow: "128K", strengths: ["Open source", "Customizable", "Cost effective"], useCases: ["chatbot", "code", "summarization"], hosted: "both" },
  { name: "Mistral Large", provider: "Mistral", costPer1kTokens: "$0.004", latency: "Fast", contextWindow: "128K", strengths: ["Multilingual", "Code", "Efficiency"], useCases: ["chatbot", "code", "summarization"], hosted: "both" },
  { name: "GPT-4o mini", provider: "OpenAI", costPer1kTokens: "$0.0003", latency: "Very Fast", contextWindow: "128K", strengths: ["Speed", "Low cost", "Good quality"], useCases: ["chatbot", "summarization"], hosted: "cloud" },
  { name: "Claude 4 Haiku", provider: "Anthropic", costPer1kTokens: "$0.0008", latency: "Very Fast", contextWindow: "200K", strengths: ["Speed", "Long context", "Cost effective"], useCases: ["chatbot", "summarization"], hosted: "cloud" },
];

const useCaseOptions = [
  { value: "chatbot", label: "Chatbot" },
  { value: "code", label: "Code Generation" },
  { value: "summarization", label: "Summarization" },
  { value: "agents", label: "AI Agents" },
];

const hostingOptions = [
  { value: "all", label: "All" },
  { value: "cloud", label: "Cloud Only" },
  { value: "self-hosted", label: "Self-Hosted Available" },
];

export default function LLMSelectorPage() {
  const [selectedUseCase, setSelectedUseCase] = useState<string>("chatbot");
  const [hostingFilter, setHostingFilter] = useState<string>("all");

  const filtered = models
    .filter((m) => m.useCases.includes(selectedUseCase))
    .filter((m) => {
      if (hostingFilter === "all") return true;
      if (hostingFilter === "self-hosted") return m.hosted === "self-hosted" || m.hosted === "both";
      return m.hosted === hostingFilter || m.hosted === "both";
    });

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/toolkit" className="text-sm text-primary hover:text-primary-hover transition-colors mb-8 inline-block">
        &larr; Back to Toolkit
      </Link>

      <h1 className="text-3xl font-bold mb-2">LLM Model Selector</h1>
      <p className="text-muted mb-10">Compare models across cost, latency, context window, and capability. Filter by your use case.</p>

      {/* Filters */}
      <div className="flex flex-wrap gap-6 mb-8 p-5 bg-card-bg border border-card-border rounded-xl">
        <div>
          <label className="text-sm font-medium block mb-2">Use Case</label>
          <div className="flex flex-wrap gap-2">
            {useCaseOptions.map((uc) => (
              <button
                key={uc.value}
                onClick={() => setSelectedUseCase(uc.value)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all border ${
                  selectedUseCase === uc.value
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-card-border text-muted hover:text-foreground"
                }`}
              >
                {uc.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-sm font-medium block mb-2">Hosting</label>
          <div className="flex flex-wrap gap-2">
            {hostingOptions.map((h) => (
              <button
                key={h.value}
                onClick={() => setHostingFilter(h.value)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all border ${
                  hostingFilter === h.value
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-card-border text-muted hover:text-foreground"
                }`}
              >
                {h.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-card-border text-left">
              <th className="py-3 px-4 font-medium text-muted">Model</th>
              <th className="py-3 px-4 font-medium text-muted">Provider</th>
              <th className="py-3 px-4 font-medium text-muted">Cost/1K tokens</th>
              <th className="py-3 px-4 font-medium text-muted">Latency</th>
              <th className="py-3 px-4 font-medium text-muted">Context</th>
              <th className="py-3 px-4 font-medium text-muted">Strengths</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((model, i) => (
              <tr key={model.name} className={`border-b border-card-border/50 ${i === 0 ? "bg-primary/5" : ""}`}>
                <td className="py-3 px-4 font-medium text-foreground">
                  {i === 0 && <span className="text-xs text-primary mr-1">★</span>}
                  {model.name}
                </td>
                <td className="py-3 px-4 text-muted">{model.provider}</td>
                <td className="py-3 px-4 text-accent font-mono">{model.costPer1kTokens}</td>
                <td className="py-3 px-4 text-muted">{model.latency}</td>
                <td className="py-3 px-4 text-muted font-mono">{model.contextWindow}</td>
                <td className="py-3 px-4">
                  <div className="flex flex-wrap gap-1">
                    {model.strengths.slice(0, 3).map((s) => (
                      <span key={s} className="text-xs bg-card-bg px-2 py-0.5 rounded text-muted">{s}</span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-10 text-muted">No models match your filters. Try adjusting your criteria.</div>
      )}
    </div>
  );
}
