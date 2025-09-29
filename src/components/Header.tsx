"use client";
import Link from "next/link";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-semibold text-lg">
            <span className="text-primary">Urja</span>Net
          </Link>
          <nav className="hidden md:flex items-center gap-3">
            <Link href="/" className="inline-flex h-11 items-center rounded-full bg-white/95 px-5 font-medium text-black shadow hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30">Home</Link>
            <Link href="/features" className="inline-flex h-11 items-center rounded-full bg-white/95 px-5 font-medium text-black shadow hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30">Features</Link>
            <Link href="/solutions" className="inline-flex h-11 items-center rounded-full bg-white/95 px-5 font-medium text-black shadow hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30">Solutions</Link>
            <Link href="/dashboard" className="inline-flex h-11 items-center rounded-full bg-white/95 px-5 font-medium text-black shadow hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30">Dashboard</Link>
            <Link href="/about" className="inline-flex h-11 items-center rounded-full bg-white/95 px-5 font-medium text-black shadow hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30">About</Link>
            <Link href="/contact" className="inline-flex h-11 items-center rounded-full bg-white/95 px-5 font-medium text-black shadow hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="hidden sm:inline-flex h-11 items-center rounded-full bg-white/95 px-6 text-base font-semibold text-black shadow hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          >
            Open Dashboard
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  // Keep document color-scheme in sync for form controls and scrollbars
  useEffect(() => {
    const current = theme === "system" ? systemTheme : theme;
    document.documentElement.style.colorScheme = current === "dark" ? "dark" : "light";
  }, [theme, systemTheme]);
  return (
    <button
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/15 hover:bg-black/[.04] dark:hover:bg-white/[.06]"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="hidden dark:block h-5 w-5" />
      <MoonIcon className="dark:hidden h-5 w-5" />
    </button>
  );
}


