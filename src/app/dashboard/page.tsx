import { Suspense } from "react";
import Overview from "./sections/Overview";

export default function DashboardOverviewPage() {
  return (
    <Suspense fallback={<div role="status" aria-busy className="h-[320px] rounded-xl animate-pulse bg-black/5 dark:bg-white/10" /> }>
      <Overview />
    </Suspense>
  );
}


