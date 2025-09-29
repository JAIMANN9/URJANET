"use client";
import { useMemo, useState } from "react";

export default function ROIWidget() {
  const [campusSize, setCampusSize] = useState(20000); // m^2
  const [energyCost, setEnergyCost] = useState(8); // ₹/kWh
  const [renewableCapacity, setRenewableCapacity] = useState(3.5); // MW

  const results = useMemo(() => {
    const capacityFactor = 0.35; // blended solar+wind
    const dailyGenerationMWh = renewableCapacity * 24 * capacityFactor; // MWh/day
    const monthlyGenerationMWh = dailyGenerationMWh * 30; // MWh/month
    const savings = monthlyGenerationMWh * 1000 * energyCost * 0.6; // 60% offset
    const carbonReductionKg = monthlyGenerationMWh * 1000 * 0.8; // kg CO2 avoided
    const roiMonths = Math.max(6, Math.round(24 - renewableCapacity * 2));
    return {
      dailyGenerationMWh,
      monthlyGenerationMWh,
      savings,
      carbonReductionKg,
      roiMonths,
    };
  }, [renewableCapacity, energyCost]);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-6 rounded-xl border border-black/5 dark:border-white/10">
        <div className="space-y-5">
          <LabeledSlider
            label="Campus size (m²)"
            value={campusSize}
            min={1000}
            max={100000}
            step={500}
            onChange={setCampusSize}
          />
          <LabeledSlider
            label="Current energy cost (₹/kWh)"
            value={energyCost}
            min={4}
            max={16}
            step={0.5}
            onChange={setEnergyCost}
          />
          <LabeledSlider
            label="Renewable capacity (MW)"
            value={renewableCapacity}
            min={0.5}
            max={10}
            step={0.1}
            onChange={setRenewableCapacity}
          />
        </div>
      </div>
      <div className="p-6 rounded-xl border border-black/5 dark:border-white/10">
        <div className="grid sm:grid-cols-2 gap-4">
          <MetricCard title="Projected savings/mo" value={`₹${results.savings.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`} accent="primary" />
          <MetricCard title="ROI timeline" value={`${results.roiMonths} months`} accent="secondary" />
          <MetricCard title="Carbon reduction/mo" value={`${Math.round(results.carbonReductionKg).toLocaleString()} kg CO₂`} accent="accent" />
          <MetricCard title="Generation/day" value={`${results.dailyGenerationMWh.toFixed(1)} MWh`} accent="primary" />
        </div>
        <a href="/contact" className="inline-flex mt-6 h-11 items-center justify-center rounded-md bg-primary px-6 text-white font-medium">
          Get Detailed Analysis
        </a>
      </div>
    </div>
  );
}

function LabeledSlider({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm text-[color:var(--ecg-text-secondary)]">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-primary"
        aria-label={label}
      />
    </label>
  );
}

function MetricCard({ title, value, accent }: { title: string; value: string; accent: "primary" | "secondary" | "accent" }) {
  const color = accent === "primary" ? "from-primary/20" : accent === "secondary" ? "from-secondary/20" : "from-accent/20";
  return (
    <div className="p-4 rounded-lg border border-black/5 dark:border-white/10">
      <div className={`h-2 w-12 rounded-full bg-gradient-to-r ${color} to-transparent mb-3`} />
      <div className="text-sm text-[color:var(--ecg-text-secondary)]">{title}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

