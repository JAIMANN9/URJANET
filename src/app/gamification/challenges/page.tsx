"use client";
import { useState } from "react";

export default function ChallengesPage() {
  const [challenges, setChallenges] = useState([
    { title: "Reduce evening peak by 10%", progress: 60 },
    { title: "Switch off idle lab equipment", progress: 45 },
    { title: "Clean solar arrays this week", progress: 80 },
  ]);
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold">Sustainability Challenges</h1>
        <p className="text-sm text-[color:var(--ecg-text-secondary)]">Weekly energy-saving goals</p>
      </header>
      <div className="grid md:grid-cols-3 gap-4">
        {challenges.map((c, i) => (
          <div key={c.title} className="p-4 rounded-xl border border-black/5 dark:border-white/10">
            <div className="font-medium mb-2">{c.title}</div>
            <div className="h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
              <div className="h-full bg-primary" style={{ width: `${c.progress}%` }} />
            </div>
            <div className="mt-2 text-sm text-[color:var(--ecg-text-secondary)]">{c.progress}% complete</div>
            <button className="mt-3 h-9 px-3 rounded-md border border-black/10 dark:border-white/15 text-sm" onClick={() => setChallenges(update(challenges, i, { progress: Math.min(100, c.progress + 10) }))}>Nudge team</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function update<T extends object>(arr: T[], idx: number, partial: Partial<T>): T[] {
  return arr.map((item, i) => (i === idx ? { ...item, ...partial } : item));
}


