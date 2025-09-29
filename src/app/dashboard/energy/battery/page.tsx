"use client";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function BatteryPage() {
  const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const soc = labels.map((_, i) => Math.max(20, Math.min(100, 60 + Math.sin(i/3) * 30)));
  const temp = labels.map((_, i) => 25 + Math.cos(i/4) * 4);
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold">Battery Storage</h1>
        <p className="text-sm text-[color:var(--ecg-text-secondary)]">Capacity: 3.0 MWh • Charge/Discharge optimized</p>
      </header>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">State of Charge & Temperature</div>
          <Line data={{ labels, datasets: [ { label: "SoC (%)", data: soc, borderColor: "#10B981" }, { label: "Temp (°C)", data: temp, borderColor: "#F59E0B" } ] }} options={{ plugins: { legend: { position: "bottom" as const } } }} />
        </div>
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">Health</div>
          <ul className="text-sm space-y-2">
            <li>Cycle count: <span>1,240</span></li>
            <li>Estimated lifespan: <span>7.8 years</span></li>
            <li>Thermal status: <span className="text-green-600">Nominal</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


