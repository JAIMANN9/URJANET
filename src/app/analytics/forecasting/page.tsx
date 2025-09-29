"use client";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function ForecastingPage() {
  const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const forecastSolar = hours.map((_, i) => Math.max(0, Math.sin((i - 6) / 4) * 600));
  const forecastWind = hours.map((_, i) => 200 + Math.sin(i / 3) * 60);
  const actualSolar = forecastSolar.map((v) => Math.max(0, v + (Math.random() * 80 - 40)));
  const actualWind = forecastWind.map((v) => v + (Math.random() * 40 - 20));
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold">Energy Forecasting</h1>
        <p className="text-sm text-[color:var(--ecg-text-secondary)]">24-hour and 7-day outlook with accuracy metrics</p>
      </header>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">24-hour Forecast (kW)</div>
          <Line data={{ labels: hours, datasets: [ { label: "Solar (forecast)", data: forecastSolar, borderColor: "#F59E0B" }, { label: "Solar (actual)", data: actualSolar, borderColor: "#F59E0B66" }, { label: "Wind (forecast)", data: forecastWind, borderColor: "#3B82F6" }, { label: "Wind (actual)", data: actualWind, borderColor: "#3B82F666" } ] }} options={{ plugins: { legend: { position: "bottom" as const } }, scales: { x: { display: false } } }} />
        </div>
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">Accuracy</div>
          <ul className="text-sm space-y-2">
            <li>Solar MAE: <span>±34 kW</span></li>
            <li>Wind MAE: <span>±21 kW</span></li>
            <li>7-day MAPE: <span>6.4%</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


