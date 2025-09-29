import { NextRequest } from "next/server";

export async function GET(_req: NextRequest) {
  // Demo equipment API status
  return Response.json({
    solar: { arraysOnline: 12, maintenance: 0 },
    wind: { turbinesOnline: 8, vibrationAlerts: 0 },
    battery: { soc: 68, thermal: "Nominal" },
    grid: { frequency: 50, voltage: 230 },
  });
}


