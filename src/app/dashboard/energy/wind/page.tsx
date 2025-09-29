"use client";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function WindPage() {
  const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const windSpeed = labels.map(() => Math.max(0, Math.round(Math.random() * 18)));
  const output = windSpeed.map((v) => Math.round(Math.pow(v, 3) / 40));
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold">Wind Turbines</h1>
        <p className="text-sm text-[color:var(--ecg-text-secondary)]">Capacity: 1.8 MW • Location: Kota, Rajasthan</p>
      </header>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">Wind Speed vs Output</div>
          <Line data={{ labels, datasets: [ { label: "Wind speed (m/s)", data: windSpeed, borderColor: "#3B82F6" }, { label: "Output (kW)", data: output, borderColor: "#10B981" } ] }} options={{ plugins: { legend: { position: "bottom" as const } } }} />
        </div>
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">Status</div>
          <ul className="text-sm space-y-2">
            <li>Turbines operational: <span className="text-green-600">8/8</span></li>
            <li>Vibration alerts: <span className="text-green-600">None</span></li>
            <li>Power curve efficiency: <span className="text-green-600">97%</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


