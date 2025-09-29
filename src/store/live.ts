"use client";
import { create } from "zustand";

type Series = {
  timestamps: number[];
  solarKW: number[];
  windKW: number[];
  batteryKW: number[];
};

type Latest = {
  totalEnergyKWh: number;
  currentPowerKW: number;
  costSavingsINR: number;
  carbonReductionKg: number;
  solarKW: number;
  windKW: number;
  batteryKW: number;
  gridImportKW: number;
  trend: number;
};

type LiveState = {
  series: Series;
  latest: Latest;
  connect: () => void;
};

export const useLiveStore = create<LiveState>((set) => ({
  series: { timestamps: [], solarKW: [], windKW: [], batteryKW: [] },
  latest: {
    totalEnergyKWh: 18000,
    currentPowerKW: 900,
    costSavingsINR: 850000,
    carbonReductionKg: 12500,
    solarKW: 500,
    windKW: 350,
    batteryKW: 50,
    gridImportKW: 120,
    trend: 1.2,
  },
  connect: () => {
    if (typeof EventSource === "undefined") return;
    const es = new EventSource("/api/live");
    es.onmessage = (ev) => {
      const data = JSON.parse(ev.data);
      const now = Date.now();
      set((s) => ({
        latest: { ...s.latest, ...data },
        series: {
          timestamps: [...s.series.timestamps, now].slice(-60),
          solarKW: [...s.series.solarKW, data.solarKW].slice(-60),
          windKW: [...s.series.windKW, data.windKW].slice(-60),
          batteryKW: [...s.series.batteryKW, data.batteryKW].slice(-60),
        },
      }));
    };
  },
}));


