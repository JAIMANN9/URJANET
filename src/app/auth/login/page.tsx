"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const search = useSearchParams();
  const redirect = search.get("redirect") || "/dashboard";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, remember }),
    });
    if (!res.ok) {
      setError("Invalid credentials");
    } else {
      router.push(redirect);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] grid place-items-center py-16">
      <form onSubmit={onSubmit} className="w-full max-w-md p-6 rounded-xl border border-black/5 dark:border-white/10 glass">
        <h1 className="text-2xl font-semibold mb-6">Sign in to EcoGrid Pro</h1>
        <label className="block mb-4">
          <span className="text-sm">Email</span>
          <input className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="block mb-4">
          <span className="text-sm">Password</span>
          <input className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label className="flex items-center gap-2 mb-4">
          <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
          <span className="text-sm">Remember me</span>
        </label>
        {error && <p className="text-sm text-red-600 mb-3" role="alert">{error}</p>}
        <button disabled={loading} className="w-full h-10 rounded-md bg-primary text-white font-medium">{loading ? "Signing in…" : "Sign In"}</button>
        <div className="mt-4 text-sm text-[color:var(--ecg-text-secondary)]">
          <a href="#" className="hover:underline">Forgot password?</a>
        </div>
        <div className="mt-2 text-sm">
          Don’t have an account? <a href="/auth/register" className="text-primary hover:underline">Sign up</a>
        </div>
      </form>
    </div>
  );
}


