"use client";
import { useState } from "react";

export default function SchedulingPage() {
  const [loads, setLoads] = useState([
    { name: "HVAC - Block A", priority: 1, window: "22:00–06:00" },
    { name: "Data Center Cooling", priority: 0, window: "00:00–23:59" },
    { name: "Water Pumps", priority: 2, window: "01:00–05:00" },
  ]);
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold">Load Scheduling</h1>
        <p className="text-sm text-[color:var(--ecg-text-secondary)]">Priority-based device scheduling with recommendations</p>
      </header>
      <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
        <table className="w-full text-sm">
          <thead className="text-left text-[color:var(--ecg-text-secondary)]"><tr><th className="py-2">Device</th><th>Priority</th><th>Window</th><th></th></tr></thead>
          <tbody>
            {loads.map((l, i) => (
              <tr key={l.name} className="border-t border-black/5 dark:border-white/10">
                <td className="py-2">{l.name}</td>
                <td>
                  <select value={l.priority} onChange={(e) => setLoads(update(loads, i, { priority: Number(e.target.value) }))} className="rounded-md border border-black/10 dark:border-white/15 bg-transparent px-2 py-1">
                    <option value={0}>High</option>
                    <option value={1}>Medium</option>
                    <option value={2}>Low</option>
                  </select>
                </td>
                <td><input value={l.window} onChange={(e) => setLoads(update(loads, i, { window: e.target.value }))} className="rounded-md border border-black/10 dark:border-white/15 bg-transparent px-2 py-1" /></td>
                <td className="text-right"><button className="h-8 px-3 rounded-md border border-black/10 dark:border-white/15">Optimize</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function update<T extends object>(arr: T[], idx: number, partial: Partial<T>): T[] {
  return arr.map((item, i) => (i === idx ? { ...item, ...partial } : item));
}


