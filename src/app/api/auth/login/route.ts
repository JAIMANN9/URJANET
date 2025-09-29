import { NextRequest, NextResponse } from "next/server";
import { signJwt, TOKEN_COOKIE, type JwtPayload } from "@/lib/auth";
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  remember: z.boolean().optional(),
});

export async function POST(req: NextRequest) {
  const json = await req.json().catch(() => null);
  const parsed = LoginSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
  }

  const { email, password, remember } = parsed.data;
  // Demo: accept any password; choose role by email suffix for realism
  const role: JwtPayload["role"] = email.endsWith("@admin")
    ? "admin"
    : email.endsWith("@manager")
    ? "manager"
    : email.endsWith("@operator")
    ? "operator"
    : "viewer";

  const token = await signJwt({
    sub: "user-123",
    email,
    name: email.split("@")[0],
    role,
    org: "Rajasthan Technical University",
  }, remember ? 30 * 24 * 60 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000);

  const res = NextResponse.json({ ok: true });
  res.cookies.set(TOKEN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
  });
  return res;
}


