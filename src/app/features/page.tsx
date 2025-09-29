export const metadata = {
  title: "Features — EcoGrid Pro",
  description: "Live dashboards, forecasting, automation, carbon tracking, and more.",
};

export default function FeaturesPage() {
  const features = [
    { title: "Live Energy Dashboard", desc: "Real-time monitoring for solar, wind, battery and grid.", tag: "Realtime" },
    { title: "Weather Integration", desc: "48-hour forecasting with irradiance and wind models.", tag: "Forecast" },
    { title: "Smart Battery Management", desc: "Automated charge/discharge and thermal oversight.", tag: "Automation" },
    { title: "Load Scheduling", desc: "Priority-based device orchestration and overrides.", tag: "Optimization" },
    { title: "Carbon Tracking", desc: "Emissions baselines, reductions and reporting.", tag: "Sustainability" },
    { title: "Predictive Maintenance", desc: "Health metrics and early warnings across equipment.", tag: "Reliability" },
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold">Platform Features</h1>
        <p className="mt-3 text-[color:var(--ecg-text-secondary)]">A comprehensive suite to operate hybrid renewables across public-sector campuses in Rajasthan.</p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <article key={f.title} className="p-6 rounded-xl border border-black/5 dark:border-white/10">
            <div className="text-xs inline-flex items-center rounded-full bg-primary/10 text-primary px-2 py-0.5 mb-3">{f.tag}</div>
            <h2 className="text-lg font-semibold">{f.title}</h2>
            <p className="mt-1 text-sm text-[color:var(--ecg-text-secondary)]">{f.desc}</p>
          </article>
        ))}
      </div>

      <section className="p-6 rounded-xl border border-black/5 dark:border-white/10">
        <h2 className="text-xl font-semibold">Security & Compliance</h2>
        <ul className="mt-3 text-sm space-y-2 text-[color:var(--ecg-text-secondary)]">
          <li>• JWT-based auth and role-based access control</li>
          <li>• HTTPS, input validation, and audit logging</li>
          <li>• Rate limiting and CORS configurability</li>
        </ul>
      </section>
    </div>
  );
}


