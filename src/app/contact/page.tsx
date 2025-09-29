"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  async function onSubmit(formData: FormData) {
    setLoading(true);
    const res = await fetch("/api/contact", { method: "POST", body: formData });
    setStatus(res.ok ? "Thanks! We'll get back to you soon." : "Something went wrong.");
    setLoading(false);
  }
  return (
    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <form action={onSubmit} className="space-y-4">
        <label className="block">
          <span className="text-sm">Name</span>
          <input name="name" required className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" />
        </label>
        <label className="block">
          <span className="text-sm">Email</span>
          <input name="email" type="email" required className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" />
        </label>
        <label className="block">
          <span className="text-sm">Message</span>
          <textarea name="message" rows={5} required className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" />
        </label>
        <button disabled={loading} className="h-10 px-4 rounded-md bg-primary text-white font-medium">{loading ? "Sending…" : "Send"}</button>
        {status && <p className="text-sm mt-2">{status}</p>}
      </form>
    </div>
  );
}


