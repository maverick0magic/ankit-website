"use client";

import { useState } from "react";
import Link from "next/link";

interface SpecFields {
  productName: string;
  problemStatement: string;
  aiApproach: string;
  modelRequirements: string;
  dataNeeds: string;
  evalCriteria: string;
  riskMitigation: string;
  successMetrics: string;
  launchPlan: string;
}

const fields: { key: keyof SpecFields; label: string; placeholder: string; rows: number }[] = [
  { key: "productName", label: "Product Name", placeholder: "e.g., AI Customer Support Agent", rows: 1 },
  { key: "problemStatement", label: "Problem Statement", placeholder: "What problem are you solving? Who is the user? What's the current pain point?", rows: 3 },
  { key: "aiApproach", label: "AI Approach", placeholder: "How will AI solve this? What's the core AI capability? (e.g., RAG-based Q&A, multi-agent workflow, classification)", rows: 3 },
  { key: "modelRequirements", label: "Model Requirements", placeholder: "Which models? What capabilities needed? (reasoning, code gen, vision, speed, cost constraints)", rows: 3 },
  { key: "dataNeeds", label: "Data Needs", placeholder: "What data is required? Where does it come from? Privacy considerations?", rows: 3 },
  { key: "evalCriteria", label: "Evaluation Criteria", placeholder: "How will you measure AI quality? (accuracy, latency, user satisfaction, task completion rate)", rows: 3 },
  { key: "riskMitigation", label: "Risk Mitigation", placeholder: "What could go wrong? Hallucination risks? Bias? How will you mitigate?", rows: 3 },
  { key: "successMetrics", label: "Success Metrics", placeholder: "What KPIs define success? (e.g., 80% task completion, <2s response time, 4.5+ CSAT)", rows: 3 },
  { key: "launchPlan", label: "Launch Plan", placeholder: "Phased rollout? Alpha/beta plan? What's the MVP scope?", rows: 3 },
];

const emptySpec: SpecFields = {
  productName: "", problemStatement: "", aiApproach: "", modelRequirements: "",
  dataNeeds: "", evalCriteria: "", riskMitigation: "", successMetrics: "", launchPlan: "",
};

export default function AIProductSpecPage() {
  const [spec, setSpec] = useState<SpecFields>(emptySpec);

  function updateField(key: keyof SpecFields, value: string) {
    setSpec({ ...spec, [key]: value });
  }

  function generateMarkdown() {
    return `# AI Product Spec: ${spec.productName || "Untitled"}

## Problem Statement
${spec.problemStatement || "Not yet defined."}

## AI Approach
${spec.aiApproach || "Not yet defined."}

## Model Requirements
${spec.modelRequirements || "Not yet defined."}

## Data Needs
${spec.dataNeeds || "Not yet defined."}

## Evaluation Criteria
${spec.evalCriteria || "Not yet defined."}

## Risk Mitigation
${spec.riskMitigation || "Not yet defined."}

## Success Metrics
${spec.successMetrics || "Not yet defined."}

## Launch Plan
${spec.launchPlan || "Not yet defined."}

---
*Generated with AI Product Spec Generator*
`;
  }

  function exportMarkdown() {
    const md = generateMarkdown();
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(spec.productName || "ai-product-spec").toLowerCase().replace(/\s+/g, "-")}-spec.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const filledCount = Object.values(spec).filter((v) => v.trim().length > 0).length;
  const totalFields = fields.length;

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/toolkit" className="text-sm text-primary hover:text-primary-hover transition-colors mb-8 inline-block">
        &larr; Back to Toolkit
      </Link>

      <h1 className="text-3xl font-bold mb-2">AI Product Spec Generator</h1>
      <p className="text-muted mb-6">Fill in each section to generate a complete AI product specification document.</p>

      {/* Progress */}
      <div className="mb-8 p-4 bg-card-bg border border-card-border rounded-lg">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-muted">Completion</span>
          <span className="text-primary font-mono">{filledCount}/{totalFields}</span>
        </div>
        <div className="h-2 bg-background rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${(filledCount / totalFields) * 100}%` }} />
        </div>
      </div>

      {/* Form fields */}
      <div className="space-y-6">
        {fields.map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-medium mb-2">{field.label}</label>
            {field.rows === 1 ? (
              <input
                type="text"
                value={spec[field.key]}
                onChange={(e) => updateField(field.key, e.target.value)}
                placeholder={field.placeholder}
                className="w-full px-4 py-2.5 bg-card-bg border border-card-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary"
              />
            ) : (
              <textarea
                value={spec[field.key]}
                onChange={(e) => updateField(field.key, e.target.value)}
                placeholder={field.placeholder}
                rows={field.rows}
                className="w-full px-4 py-2.5 bg-card-bg border border-card-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary resize-none"
              />
            )}
          </div>
        ))}
      </div>

      {/* Export */}
      <button
        onClick={exportMarkdown}
        className="mt-8 w-full py-3 rounded-lg bg-gradient-to-r from-primary to-primary-hover text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all"
      >
        Export as Markdown
      </button>

      {/* Preview */}
      {filledCount > 0 && (
        <div className="mt-8 p-5 bg-card-bg border border-card-border rounded-xl">
          <h3 className="font-semibold mb-3">Preview</h3>
          <pre className="text-xs text-muted whitespace-pre-wrap overflow-x-auto">{generateMarkdown()}</pre>
        </div>
      )}
    </div>
  );
}
