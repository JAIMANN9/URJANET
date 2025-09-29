import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const type = req.nextUrl.searchParams.get("type") || "report";
  const rows = [
    ["Metric", "Value"],
    ["Monthly Generation (MWh)", "620"],
    ["Monthly Consumption (MWh)", "540"],
    ["Savings (₹)", "850000"],
  ];
  const csv = rows.map((r) => r.join(",")).join("\n");
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename=ecogrid-${type}.csv`,
    },
  });
}


