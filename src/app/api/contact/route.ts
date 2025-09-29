import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // In production, forward to CRM/Email service
  await req.formData();
  return NextResponse.json({ ok: true });
}


