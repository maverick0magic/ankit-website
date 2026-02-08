"use client";

import { useState } from "react";
import Link from "next/link";

const patterns = [
  { id: "single", label: "Single Agent", description: "One LLM agent with tools. Best for focused, well-defined tasks.", icon: "🤖" },
  { id: "multi", label: "Multi-Agent (Orchestrator)", description: "Supervisor agent delegates to specialized worker agents.", icon: "👥" },
  { id: "rag", label: "RAG Pipeline", description: "Retrieval-augmented generation with knowledge base integration.", icon: "📚" },
  { id: "hitl", label: "Human-in-the-Loop", description: "Agent with human approval gates for critical decisions.", icon: "🤝" },
];

const toolOptions = ["Web Search", "Code Execution", "File I/O", "Database Query", "API Calls", "Calculator", "Image Generation", "Email/Messaging"];
const dataSourceOptions = ["Vector Database", "SQL Database", "REST API", "File System", "Knowledge Base", "Real-time Streams", "Document Store"];
const guardrailOptions = ["Input Validation", "Output Filtering", "Token Limits", "Rate Limiting", "Content Moderation", "PII Detection", "Hallucination Checks", "Human Approval Gate"];

export default function AgentArchitecturePlannerPage() {
  const [selectedPattern, setSelectedPattern] = useState<string>("single");
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [selectedDataSources, setSelectedDataSources] = useState<string[]>([]);
  const [selectedGuardrails, setSelectedGuardrails] = useState<string[]>([]);
  const [agentName, setAgentName] = useState("");
  const [agentDescription, setAgentDescription] = useState("");

  function toggleItem(list: string[], item: string, setter: (v: string[]) => void) {
    setter(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
  }

  function generateMarkdown() {
    const pattern = patterns.find((p) => p.id === selectedPattern);
    const md = `# Agent Architecture: ${agentName || "Untitled Agent"}

## Overview
${agentDescription || "No description provided."}

## Architecture Pattern
**${pattern?.label}** — ${pattern?.description}

## Tools
${selectedTools.length > 0 ? selectedTools.map((t) => `- ${t}`).join("\n") : "- None selected"}

## Data Sources
${selectedDataSources.length > 0 ? selectedDataSources.map((d) => `- ${d}`).join("\n") : "- None selected"}

## Guardrails
${selectedGuardrails.length > 0 ? selectedGuardrails.map((g) => `- ${g}`).join("\n") : "- None selected"}

## Architecture Diagram (Text)
\`\`\`
${selectedPattern === "single" ? `[User] → [${agentName || "Agent"}] → [Tools: ${selectedTools.join(", ") || "None"}]
                    ↕
         [Data: ${selectedDataSources.join(", ") || "None"}]` :
  selectedPattern === "multi" ? `[User] → [Orchestrator Agent]
              ↓
    ┌─────────┼─────────┐
    ↓         ↓         ↓
[Worker 1] [Worker 2] [Worker N]
    ↓         ↓         ↓
  [Tools]   [Tools]   [Tools]` :
  selectedPattern === "rag" ? `[User Query] → [Embedding] → [Vector Search] → [Context Assembly]
                                                          ↓
                                                    [LLM + Context] → [Response]` :
  `[User] → [Agent] → [Decision Point]
                      ↓ (auto)        ↓ (needs approval)
                 [Execute]      [Human Review] → [Approve/Reject]
                                                      ↓
                                                 [Execute/Abort]`}
\`\`\`

---
*Generated with AI Agent Architecture Planner*
`;
    return md;
  }

  function exportMarkdown() {
    const md = generateMarkdown();
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(agentName || "agent-architecture").toLowerCase().replace(/\s+/g, "-")}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/toolkit" className="text-sm text-primary hover:text-primary-hover transition-colors mb-8 inline-block">
        &larr; Back to Toolkit
      </Link>

      <h1 className="text-3xl font-bold mb-2">Agent Architecture Planner</h1>
      <p className="text-muted mb-10">Design your agent architecture by selecting patterns, tools, data sources, and guardrails.</p>

      {/* Agent basics */}
      <div className="mb-8 space-y-4">
        <input
          type="text"
          value={agentName}
          onChange={(e) => setAgentName(e.target.value)}
          placeholder="Agent name..."
          className="w-full px-4 py-2.5 bg-card-bg border border-card-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary"
        />
        <textarea
          value={agentDescription}
          onChange={(e) => setAgentDescription(e.target.value)}
          placeholder="Describe what this agent does..."
          rows={3}
          className="w-full px-4 py-2.5 bg-card-bg border border-card-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary resize-none"
        />
      </div>

      {/* Pattern Selection */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Architecture Pattern</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {patterns.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedPattern(p.id)}
              className={`text-left p-4 rounded-xl border transition-all ${
                selectedPattern === p.id
                  ? "border-primary bg-primary/10"
                  : "border-card-border bg-card-bg hover:border-primary/30"
              }`}
            >
              <div className="text-2xl mb-2">{p.icon}</div>
              <div className="font-medium mb-1">{p.label}</div>
              <p className="text-xs text-muted">{p.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Tools, Data Sources, Guardrails */}
      {[
        { title: "Tools", items: toolOptions, selected: selectedTools, setter: setSelectedTools },
        { title: "Data Sources", items: dataSourceOptions, selected: selectedDataSources, setter: setSelectedDataSources },
        { title: "Guardrails", items: guardrailOptions, selected: selectedGuardrails, setter: setSelectedGuardrails },
      ].map(({ title, items, selected, setter }) => (
        <div key={title} className="mb-8">
          <h2 className="text-lg font-semibold mb-4">{title}</h2>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <button
                key={item}
                onClick={() => toggleItem(selected, item, setter)}
                className={`px-3 py-1.5 rounded-lg text-sm border transition-all ${
                  selected.includes(item)
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-card-border text-muted hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Export */}
      <button
        onClick={exportMarkdown}
        className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-primary-hover text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all"
      >
        Export Architecture Document
      </button>

      {/* Preview */}
      <div className="mt-8 p-5 bg-card-bg border border-card-border rounded-xl">
        <h3 className="font-semibold mb-3">Preview</h3>
        <pre className="text-xs text-muted whitespace-pre-wrap overflow-x-auto">{generateMarkdown()}</pre>
      </div>
    </div>
  );
}
