"use client";
import { useEffect, useState } from "react";

export function Toasts() {
  const [messages, setMessages] = useState<string[]>([]);
  useEffect(() => {
    const id = setInterval(() => {
      // Demo: random alert
      if (Math.random() < 0.06) setMessages((m) => [...m.slice(-2), "Optimization action executed"]);
    }, 8000);
    return () => clearInterval(id);
  }, []);
  if (messages.length === 0) return null;
  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2" role="status" aria-live="polite">
      {messages.map((m, i) => (
        <div key={i} className="rounded-md bg-dark/90 text-white px-3 py-2 shadow">
          {m}
        </div>
      ))}
    </div>
  );
}


