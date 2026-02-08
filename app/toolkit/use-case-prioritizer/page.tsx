"use client";

import { useState } from "react";
import Link from "next/link";

interface UseCase {
  id: string;
  name: string;
  scores: { impact: number; feasibility: number; data: number; alignment: number; risk: number };
}

const dimensions = [
  { key: "impact", label: "User Impact", weight: 0.3 },
  { key: "feasibility", label: "Technical Feasibility", weight: 0.25 },
  { key: "data", label: "Data Availability", weight: 0.15 },
  { key: "alignment", label: "Strategic Alignment", weight: 0.2 },
  { key: "risk", label: "Risk Level (inverted)", weight: 0.1 },
];

function calcWeightedScore(scores: UseCase["scores"]): number {
  return (
    scores.impact * 0.3 +
    scores.feasibility * 0.25 +
    scores.data * 0.15 +
    scores.alignment * 0.2 +
    (10 - scores.risk) * 0.1
  );
}

export default function UseCasePrioritizerPage() {
  const [useCases, setUseCases] = useState<UseCase[]>([]);
  const [newName, setNewName] = useState("");

  function addUseCase() {
    if (!newName.trim()) return;
    setUseCases([
      ...useCases,
      { id: Date.now().toString(), name: newName.trim(), scores: { impact: 5, feasibility: 5, data: 5, alignment: 5, risk: 5 } },
    ]);
    setNewName("");
  }

  function updateScore(id: string, key: string, value: number) {
    setUseCases(useCases.map((uc) =>
      uc.id === id ? { ...uc, scores: { ...uc.scores, [key]: value } } : uc
    ));
  }

  function removeUseCase(id: string) {
    setUseCases(useCases.filter((uc) => uc.id !== id));
  }

  const ranked = [...useCases].sort((a, b) => calcWeightedScore(b.scores) - calcWeightedScore(a.scores));

  function exportCSV() {
    const header = "Rank,Use Case,Impact,Feasibility,Data,Alignment,Risk,Weighted Score\n";
    const rows = ranked.map((uc, i) =>
      `${i + 1},"${uc.name}",${uc.scores.impact},${uc.scores.feasibility},${uc.scores.data},${uc.scores.alignment},${uc.scores.risk},${calcWeightedScore(uc.scores).toFixed(2)}`
    ).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ai-use-case-priorities.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/toolkit" className="text-sm text-primary hover:text-primary-hover transition-colors mb-8 inline-block">
        &larr; Back to Toolkit
      </Link>

      <h1 className="text-3xl font-bold mb-2">AI Use Case Prioritizer</h1>
      <p className="text-muted mb-10">Add potential AI use cases, score each dimension, and get an auto-ranked priority list.</p>

      {/* Add use case */}
      <div className="flex gap-3 mb-8">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addUseCase()}
          placeholder="Enter an AI use case..."
          className="flex-1 px-4 py-2.5 bg-card-bg border border-card-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary"
        />
        <button
          onClick={addUseCase}
          className="px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
        >
          Add
        </button>
      </div>

      {/* Scoring */}
      {useCases.length > 0 && (
        <div className="space-y-6 mb-10">
          {useCases.map((uc) => (
            <div key={uc.id} className="p-5 bg-card-bg border border-card-border rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">{uc.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-primary">{calcWeightedScore(uc.scores).toFixed(1)}</span>
                  <button onClick={() => removeUseCase(uc.id)} className="text-muted hover:text-red-400 text-sm">Remove</button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                {dimensions.map((dim) => (
                  <div key={dim.key}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted">{dim.label}</span>
                      <span className="text-primary font-mono">{uc.scores[dim.key as keyof UseCase["scores"]]}</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={10}
                      value={uc.scores[dim.key as keyof UseCase["scores"]]}
                      onChange={(e) => updateScore(uc.id, dim.key, parseInt(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Ranked Results */}
      {ranked.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Priority Ranking</h2>
            <button
              onClick={exportCSV}
              className="px-4 py-2 rounded-lg border border-accent text-accent text-sm hover:bg-accent/10 transition-colors"
            >
              Export CSV
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border text-left">
                  <th className="py-3 px-4 font-medium text-muted w-12">#</th>
                  <th className="py-3 px-4 font-medium text-muted">Use Case</th>
                  <th className="py-3 px-4 font-medium text-muted text-center">Impact</th>
                  <th className="py-3 px-4 font-medium text-muted text-center">Feasibility</th>
                  <th className="py-3 px-4 font-medium text-muted text-center">Data</th>
                  <th className="py-3 px-4 font-medium text-muted text-center">Alignment</th>
                  <th className="py-3 px-4 font-medium text-muted text-center">Risk</th>
                  <th className="py-3 px-4 font-medium text-muted text-right">Score</th>
                </tr>
              </thead>
              <tbody>
                {ranked.map((uc, i) => (
                  <tr key={uc.id} className={`border-b border-card-border/50 ${i === 0 ? "bg-primary/5" : ""}`}>
                    <td className="py-3 px-4 text-muted">{i + 1}</td>
                    <td className="py-3 px-4 font-medium text-foreground">{uc.name}</td>
                    <td className="py-3 px-4 text-center text-muted">{uc.scores.impact}</td>
                    <td className="py-3 px-4 text-center text-muted">{uc.scores.feasibility}</td>
                    <td className="py-3 px-4 text-center text-muted">{uc.scores.data}</td>
                    <td className="py-3 px-4 text-center text-muted">{uc.scores.alignment}</td>
                    <td className="py-3 px-4 text-center text-muted">{uc.scores.risk}</td>
                    <td className="py-3 px-4 text-right font-mono text-primary font-medium">{calcWeightedScore(uc.scores).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-3">Weights: Impact 30%, Feasibility 25%, Alignment 20%, Data 15%, Risk 10% (inverted)</p>
        </div>
      )}

      {useCases.length === 0 && (
        <div className="text-center py-16 text-muted">
          Add AI use cases above to start prioritizing them.
        </div>
      )}
    </div>
  );
}
