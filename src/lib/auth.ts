import { SignJWT, jwtVerify } from "jose";

const ALG = "HS256";
const DAY_MS = 24 * 60 * 60 * 1000;

export type UserRole = "admin" | "manager" | "operator" | "viewer";

export interface JwtPayload {
  sub: string;
  email: string;
  name: string;
  role: UserRole;
  org?: string;
}

function getSecret(): Uint8Array {
  const secret = process.env.AUTH_SECRET || "dev-ecogrid-secret-change-me";
  return new TextEncoder().encode(secret);
}

export async function signJwt(payload: JwtPayload, expiresInMs = 7 * DAY_MS) {
  const iat = Math.floor(Date.now() / 1000);
  const exp = Math.floor((Date.now() + expiresInMs) / 1000);
  return await new SignJWT(payload as unknown as Record<string, unknown>)
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt(iat)
    .setExpirationTime(exp)
    .setSubject(payload.sub)
    .sign(getSecret());
}

export async function verifyJwt<T extends object = JwtPayload>(token: string) {
  const { payload } = await jwtVerify(token, getSecret(), {
    algorithms: [ALG],
  });
  return payload as unknown as T;
}

export const TOKEN_COOKIE = "ecg_token";


