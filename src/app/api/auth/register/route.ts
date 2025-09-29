import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const RegisterSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  campusName: z.string().min(2),
  campusLocation: z.string().min(2),
  campusSize: z.number().min(1),
  systems: z.array(z.enum(["solar", "wind", "battery", "grid"])).default([]),
  role: z.enum(["admin", "manager", "operator", "viewer"]).default("admin"),
});

export async function POST(req: NextRequest) {
  const json = await req.json().catch(() => null);
  const parsed = RegisterSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }
  // Demo: echo back success; persistence omitted
  return NextResponse.json({ ok: true, userId: "user-registered" });
}


