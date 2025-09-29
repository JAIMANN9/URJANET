"use client";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend);

export default function ReportsPage() {
  const days = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
  const generation = days.map(() => 15 + Math.random() * 10);
  const consumption = days.map(() => 18 + Math.random() * 8);
  const utilization = generation.map((g, i) => Math.min(100, Math.round((g / (consumption[i] || 1)) * 100)));

  return (
    <div className="space-y-6">
      <header className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold">Performance Reports</h1>
          <p className="text-sm text-[color:var(--ecg-text-secondary)]">Customizable date range and downloadable summaries</p>
        </div>
        <div className="flex items-center gap-2">
          <input type="date" className="rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm" />
          <span className="text-sm">to</span>
          <input type="date" className="rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 text-sm" />
          <button className="h-9 px-3 rounded-md bg-primary text-white text-sm">Apply</button>
        </div>
      </header>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">Energy Generation vs Consumption (MWh)</div>
          <Line data={{ labels: days, datasets: [ { label: "Generation", data: generation, borderColor: "#10B981" }, { label: "Consumption", data: consumption, borderColor: "#3B82F6" } ] }} options={{ plugins: { legend: { position: "bottom" as const } } }} />
        </div>
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">Equipment Utilization (%)</div>
          <Bar data={{ labels: days, datasets: [ { label: "Utilization", data: utilization, backgroundColor: "#F59E0B66" } ] }} options={{ plugins: { legend: { display: false } } }} />
        </div>
      </div>

      <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-medium">Downloadable Reports</div>
          <div className="flex items-center gap-2 text-sm">
            <a className="inline-flex h-9 items-center rounded-md border border-black/10 dark:border-white/15 px-3" href="/api/export/csv?type=report">CSV</a>
            <a className="inline-flex h-9 items-center rounded-md border border-black/10 dark:border-white/15 px-3" href="/api/export/pdf?type=report">PDF</a>
          </div>
        </div>
        <table className="w-full text-sm">
          <thead className="text-left text-[color:var(--ecg-text-secondary)]">
            <tr><th className="py-2">Metric</th><th>Value</th><th>Change</th></tr>
          </thead>
          <tbody>
            <tr className="border-t border-black/5 dark:border-white/10"><td className="py-2">Monthly Generation</td><td>~{sum(generation).toFixed(1)} MWh</td><td className="text-green-600">+4.1%</td></tr>
            <tr className="border-t border-black/5 dark:border-white/10"><td className="py-2">Monthly Consumption</td><td>~{sum(consumption).toFixed(1)} MWh</td><td className="text-green-600">+1.2%</td></tr>
            <tr className="border-t border-black/5 dark:border-white/10"><td className="py-2">Savings vs Grid-only</td><td>₹8,50,000</td><td className="text-green-600">+3.6%</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function sum(arr: number[]) { return arr.reduce((a, b) => a + b, 0); }


