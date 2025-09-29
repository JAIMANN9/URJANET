"use client";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, BarElement } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, BarElement);

export default function SolarPage() {
  const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const irradiance = labels.map(() => Math.max(0, Math.round(Math.random() * 900)));
  const output = irradiance.map((v) => Math.round(v * 2.5));
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold">Solar Panels</h1>
        <p className="text-sm text-[color:var(--ecg-text-secondary)]">Capacity: 2.5 MW • Location: Kota, Rajasthan</p>
      </header>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">Irradiance vs Output</div>
          <Line data={{ labels, datasets: [ { label: "Irradiance (W/m²)", data: irradiance, borderColor: "#F59E0B" }, { label: "Output (kW)", data: output, borderColor: "#10B981" } ] }} options={{ plugins: { legend: { position: "bottom" as const } } }} />
        </div>
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">Status</div>
          <ul className="text-sm space-y-2">
            <li>Arrays online: <span className="text-green-600">12/12</span></li>
            <li>Cleaning schedule: <span>Every 14 days</span></li>
            <li>Performance vs baseline: <span className="text-green-600">+4.2%</span></li>
          </ul>
        </div>
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10 lg:col-span-2">
          <div className="text-sm font-medium mb-3">Array Performance Comparison</div>
          <Bar data={{ labels: ["Array A","Array B","Array C","Array D"], datasets: [{ label: "kWh/day", data: [520, 505, 498, 512], backgroundColor: "#F59E0B66" }] }} options={{ plugins: { legend: { display: false } } }} />
        </div>
      </div>
    </div>
  );
}


