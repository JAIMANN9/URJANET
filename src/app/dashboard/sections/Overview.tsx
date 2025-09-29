"use client";
import { useEffect } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
} from "chart.js";
import { useLiveStore } from "@/store/live";
import dynamic from "next/dynamic";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, BarElement, ArcElement);

const Sankey = dynamic(() => import("./Sankey"), { ssr: false, loading: () => <div role="status" aria-busy className="h-[320px] rounded-xl animate-pulse bg-black/5 dark:bg-white/10" /> });

export default function Overview() {
  const { latest, series, connect } = useLiveStore();
  useEffect(() => { connect(); }, [connect]);

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-4 gap-4">
        <Metric title="Total Energy Generated" value={`${(latest.totalEnergyKWh/1000).toFixed(1)} MWh`} trend={latest.trend} />
        <Metric title="Current Power Output" value={`${latest.currentPowerKW.toFixed(0)} kW`} trend={latest.trend} />
        <Metric title="Energy Cost Savings" value={`₹${latest.costSavingsINR.toLocaleString("en-IN")}`} trend={latest.trend} />
        <Metric title="Carbon Reduction" value={`${latest.carbonReductionKg.toFixed(0)} kg CO₂`} trend={latest.trend} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">Real-time Energy Flow</div>
          <Sankey />
        </div>
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">Power Output (kW)</div>
          <Line
            data={{
              labels: series.timestamps.map((t) => new Date(t).toLocaleTimeString()),
              datasets: [
                { label: "Solar", data: series.solarKW, borderColor: "#10B981", backgroundColor: "#10B98133" },
                { label: "Wind", data: series.windKW, borderColor: "#3B82F6", backgroundColor: "#3B82F633" },
                { label: "Battery", data: series.batteryKW, borderColor: "#F59E0B", backgroundColor: "#F59E0B33" },
              ],
            }}
            options={{
              animation: false,
              responsive: true,
              plugins: { legend: { position: "bottom" as const } },
              scales: { x: { display: false }, y: { beginAtZero: true } },
            }}
          />
        </div>
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">Source Mix</div>
          <Doughnut
            data={{
              labels: ["Solar", "Wind", "Battery", "Grid"],
              datasets: [
                {
                  data: [latest.solarKW, latest.windKW, Math.abs(latest.batteryKW), latest.gridImportKW],
                  backgroundColor: ["#F59E0B66", "#3B82F666", "#10B98166", "#6B728066"],
                  borderColor: ["#F59E0B", "#3B82F6", "#10B981", "#6B7280"],
                },
              ],
            }}
            options={{ plugins: { legend: { position: "bottom" as const } } }}
          />
        </div>
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">Hourly Consumption vs Generation</div>
          <Bar
            data={{
              labels: series.timestamps.map((t) => new Date(t).getHours()).slice(-12),
              datasets: [
                { label: "Generation", data: series.solarKW.slice(-12).map((v, i) => v + (series.windKW.slice(-12)[i] || 0)), backgroundColor: "#10B98166" },
                { label: "Consumption", data: series.solarKW.slice(-12).map((v, i) => v * 0.8 + (series.windKW.slice(-12)[i] || 0) * 0.6 + 200), backgroundColor: "#3B82F666" },
              ],
            }}
            options={{ plugins: { legend: { position: "bottom" as const } }, responsive: true }}
          />
        </div>
      </div>
    </div>
  );
}

function Metric({ title, value, trend }: { title: string; value: string; trend: number }) {
  const trendColor = trend >= 0 ? "text-green-600" : "text-red-600";
  const trendSign = trend >= 0 ? "+" : "";
  return (
    <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
      <div className="text-sm text-[color:var(--ecg-text-secondary)]">{title}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
      <div className={`text-xs ${trendColor}`}>{trendSign}{trend.toFixed(1)}%</div>
    </div>
  );
}


