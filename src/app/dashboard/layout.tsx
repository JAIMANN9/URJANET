"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BellIcon, Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setSidebarOpen(false), [pathname]);

  return (
    <div className="min-h-[calc(100vh-4rem)] grid grid-cols-1 lg:grid-cols-[260px_1fr]">
      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-64 lg:w-auto transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} transition-transform bg-light/70 dark:bg-dark/30 border-r border-black/5 dark:border-white/10 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
        <div className="h-16 flex items-center px-4 border-b border-black/5 dark:border-white/10">
          <span className="font-semibold"><span className="text-primary">EcoGrid</span> Pro</span>
        </div>
        <nav className="p-3 space-y-2 text-sm">
          <NavItem href="/dashboard" label="Overview" current={pathname === "/dashboard"} />
          <div>
            <div className="px-2 mt-3 mb-1 text-[10px] uppercase tracking-wider text-[color:var(--ecg-text-secondary)]">Energy Sources</div>
            <NavItem href="/dashboard/energy/solar" label="Solar Panels" current={pathname.startsWith("/dashboard/energy/solar")} />
            <NavItem href="/dashboard/energy/wind" label="Wind Turbines" current={pathname.startsWith("/dashboard/energy/wind")} />
            <NavItem href="/dashboard/energy/battery" label="Battery Storage" current={pathname.startsWith("/dashboard/energy/battery")} />
            <NavItem href="/dashboard/energy/grid" label="Grid Connection" current={pathname.startsWith("/dashboard/energy/grid")} />
          </div>
          <div>
            <div className="px-2 mt-3 mb-1 text-[10px] uppercase tracking-wider text-[color:var(--ecg-text-secondary)]">Analytics</div>
            <NavItem href="/analytics/reports" label="Performance Reports" current={pathname.startsWith("/analytics/reports")} />
            <NavItem href="/analytics/forecasting" label="Energy Forecasting" current={pathname.startsWith("/analytics/forecasting")} />
            <NavItem href="/analytics/cost" label="Cost Analysis" current={pathname.startsWith("/analytics/cost")} />
            <NavItem href="/analytics/carbon" label="Carbon Footprint" current={pathname.startsWith("/analytics/carbon")} />
          </div>
          <div>
            <div className="px-2 mt-3 mb-1 text-[10px] uppercase tracking-wider text-[color:var(--ecg-text-secondary)]">Optimization</div>
            <NavItem href="/optimization/scheduling" label="Load Scheduling" current={pathname.startsWith("/optimization/scheduling")} />
            <NavItem href="/optimization/peaks" label="Peak Shaving" current={pathname.startsWith("/optimization/peaks")} />
            <NavItem href="/optimization/demand" label="Demand Response" current={pathname.startsWith("/optimization/demand")} />
            <NavItem href="/optimization/maintenance" label="Maintenance Planning" current={pathname.startsWith("/optimization/maintenance")} />
          </div>
          <div>
            <div className="px-2 mt-3 mb-1 text-[10px] uppercase tracking-wider text-[color:var(--ecg-text-secondary)]">Gamification</div>
            <NavItem href="/gamification/leaderboards" label="Leaderboards" current={pathname.startsWith("/gamification/leaderboards")} />
            <NavItem href="/gamification/challenges" label="Challenges" current={pathname.startsWith("/gamification/challenges")} />
            <NavItem href="/gamification/achievements" label="Achievements" current={pathname.startsWith("/gamification/achievements")} />
            <NavItem href="/gamification/community" label="Community Goals" current={pathname.startsWith("/gamification/community")} />
          </div>
          <div>
            <div className="px-2 mt-3 mb-1 text-[10px] uppercase tracking-wider text-[color:var(--ecg-text-secondary)]">Settings</div>
            <NavItem href="/settings/system" label="System Configuration" current={pathname.startsWith("/settings/system")} />
            <NavItem href="/settings/users" label="User Management" current={pathname.startsWith("/settings/users")} />
            <NavItem href="/settings/notifications" label="Notifications" current={pathname.startsWith("/settings/notifications")} />
            <NavItem href="/settings/integrations" label="Integrations" current={pathname.startsWith("/settings/integrations")} />
          </div>
          <div>
            <div className="px-2 mt-3 mb-1 text-[10px] uppercase tracking-wider text-[color:var(--ecg-text-secondary)]">Support</div>
            <NavItem href="/support/help" label="Help Center" current={pathname.startsWith("/support/help")} />
            <NavItem href="/support/contact" label="Contact Support" current={pathname.startsWith("/support/contact")} />
            <NavItem href="/support/status" label="System Status" current={pathname.startsWith("/support/status")} />
          </div>
        </nav>
      </aside>
      <div className="lg:col-start-2 min-h-full">
        <header className="h-16 border-b border-black/5 dark:border-white/10 flex items-center px-4 gap-3">
          <button className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/15" aria-label="Toggle sidebar" onClick={() => setSidebarOpen((s) => !s)}>
            {sidebarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
          <div className="relative flex-1 max-w-xl">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[color:var(--ecg-text-secondary)]" />
            <input aria-label="Global search" placeholder="Search..." className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent pl-9 pr-3 py-2" />
          </div>
          <button aria-label="Notifications" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/15">
            <BellIcon className="h-5 w-5" />
          </button>
          <Link href="/settings/users" className="inline-flex h-9 items-center rounded-md border border-black/10 dark:border-white/15 px-3 text-sm">RTU • Admin</Link>
        </header>
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

function NavItem({ href, label, current }: { href: string; label: string; current: boolean }) {
  return (
    <Link href={href} className={`flex items-center h-9 px-3 rounded-md ${current ? "bg-primary/10 text-primary" : "hover:bg-black/[.04] dark:hover:bg-white/[.06]"}`}>{label}</Link>
  );
}


