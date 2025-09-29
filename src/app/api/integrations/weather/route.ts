import { NextRequest } from "next/server";

export async function GET(_req: NextRequest) {
  // Demo weather API response
  return Response.json({
    location: { city: "Kota", region: "Rajasthan" },
    current: { tempC: 32, windMs: 5.2, irradiance: 780, condition: "Sunny" },
    forecast48h: Array.from({ length: 16 }, (_, i) => ({
      hour: i * 3,
      tempC: 28 + Math.sin(i / 2) * 4,
      windMs: 4 + Math.cos(i / 3),
      irradiance: Math.max(0, 900 * Math.sin((i + 3) / 3)),
    })),
  });
}


