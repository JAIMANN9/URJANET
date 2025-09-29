import { NextRequest } from "next/server";

export async function GET(_req: NextRequest) {
  const stream = new ReadableStream({
    start(controller) {
      function push() {
        const solarKW = 400 + Math.random() * 300;
        const windKW = 250 + Math.random() * 200;
        const batteryKW = Math.random() * 150 - 50; // charge/discharge
        const gridImportKW = Math.max(0, 100 + Math.random() * 80 - batteryKW);
        const payload = {
          solarKW,
          windKW,
          batteryKW,
          gridImportKW,
          currentPowerKW: Math.max(0, solarKW + windKW + batteryKW),
          totalEnergyKWh: 18000 + Math.random() * 500,
          costSavingsINR: 850000 + Math.random() * 10000,
          carbonReductionKg: 12500 + Math.random() * 500,
          trend: -2 + Math.random() * 4,
        };
        controller.enqueue(`data: ${JSON.stringify(payload)}\n\n`);
      }
      const id = setInterval(push, 5000);
      push();
      return () => clearInterval(id);
    },
  });
  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}


