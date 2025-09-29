export const metadata = {
  title: "Solutions — EcoGrid Pro",
  description: "Tailored energy orchestration for campuses across Rajasthan.",
};

export default function SolutionsPage() {
  const solutions = [
    { title: "Campus Virtual Power Plant", desc: "Unify solar, wind, battery, and grid as one coordinated asset." },
    { title: "Grid Services Participation", desc: "Demand response, peak shaving, and ancillary services." },
    { title: "O&M Optimization", desc: "Predictive maintenance and streamlined scheduling." },
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold">Solutions</h1>
        <p className="mt-3 text-[color:var(--ecg-text-secondary)]">Deploy a reliable, scalable orchestration layer for public-sector campuses.</p>
      </header>
      {/* Problem → Solution framing */}
      <section className="grid lg:grid-cols-2 gap-6">
        <article className="p-6 rounded-xl border border-black/5 dark:border-white/10">
          <h2 className="text-xl font-semibold">The Problem We Solve</h2>
          <ul className="mt-3 text-sm space-y-2 text-[color:var(--ecg-text-secondary)]">
            <li>• Fragmented solar, wind, battery, and grid systems create operational silos.</li>
            <li>• Weather variability causes unstable generation and manual firefighting.</li>
            <li>• Peak charges inflate bills; batteries underperform without smart control.</li>
            <li>• Reporting is time‑consuming; data lives in vendor portals and spreadsheets.</li>
          </ul>
        </article>
        <article className="p-6 rounded-xl border border-black/5 dark:border-white/10">
          <h2 className="text-xl font-semibold">Our Unique Approach</h2>
          <p className="mt-3 text-sm text-[color:var(--ecg-text-secondary)]">
            EcoGrid Pro treats your campus as a single virtual power plant. We blend forecasting, optimization, and orchestration so supply, storage, and demand act like a team—always pursuing the lowest cost and highest reliability.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="p-3 rounded-lg bg-primary/10">Real‑time coordination</div>
            <div className="p-3 rounded-lg bg-secondary/10">Weather‑aware scheduling</div>
            <div className="p-3 rounded-lg bg-accent/10">Peak reduction</div>
            <div className="p-3 rounded-lg bg-black/5 dark:bg-white/10">Automated reporting</div>
          </div>
        </article>
      </section>

      {/* Solution cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {solutions.map((s) => (
          <article key={s.title} className="p-6 rounded-xl border border-black/5 dark:border-white/10">
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <p className="mt-1 text-sm text-[color:var(--ecg-text-secondary)]">{s.desc}</p>
          </article>
        ))}
      </div>
      
      {/* Interactive details */}
      <section className="p-6 rounded-xl border border-black/5 dark:border-white/10 space-y-3">
        <h2 className="text-xl font-semibold">How Orchestration Works</h2>
        {["Ingest & normalize device telemetry","Forecast generation & demand","Optimize battery and load schedules","Execute safely with overrides","Measure, learn, and improve"].map((q, i) => (
          <details key={i} className="rounded-lg border border-black/5 dark:border-white/10 p-3">
            <summary className="cursor-pointer font-medium">{i+1}. {q}</summary>
            <p className="mt-2 text-sm text-[color:var(--ecg-text-secondary)]">Step {i+1} ensures resilient control and transparent decision‑making across all assets.</p>
          </details>
        ))}
      </section>

      {/* Before/After comparison */}
      <section className="grid lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-black/5 dark:border-white/10">
          <h2 className="text-xl font-semibold">Before EcoGrid Pro</h2>
          <ul className="mt-3 text-sm list-disc list-inside text-[color:var(--ecg-text-secondary)] space-y-1">
            <li>Manual toggling between vendor dashboards</li>
            <li>Reactive responses to clouds and wind lulls</li>
            <li>Battery discharge at the wrong time</li>
            <li>End‑of‑month surprises on the bill</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl border border-black/5 dark:border-white/10">
          <h2 className="text-xl font-semibold">After EcoGrid Pro</h2>
          <ul className="mt-3 text-sm list-disc list-inside text-[color:var(--ecg-text-secondary)] space-y-1">
            <li>Single pane of glass orchestration</li>
            <li>Forecast‑aware scheduling across assets</li>
            <li>Automated peak shaving and demand response</li>
            <li>Continuous savings verification and reports</li>
          </ul>
        </div>
      </section>

      {/* KPI progress */}
      <section className="grid md:grid-cols-3 gap-6">
        {[{label:"Peak reduction",val:72,color:"bg-primary"},{label:"Renewables utilization",val:88,color:"bg-secondary"},{label:"Automation coverage",val:65,color:"bg-accent"}].map((k)=>(
          <div key={k.label} className="p-6 rounded-xl border border-black/5 dark:border-white/10">
            <div className="text-sm text-[color:var(--ecg-text-secondary)]">{k.label}</div>
            <div className="mt-2 h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
              <div className={`h-full ${k.color}`} style={{width:`${k.val}%`}} />
            </div>
            <div className="mt-2 text-sm font-medium">{k.val}%</div>
          </div>
        ))}
      </section>

      {/* Implementation Approach */}
      <section className="p-6 rounded-xl border border-black/5 dark:border-white/10">
        <h2 className="text-xl font-semibold">Implementation Approach</h2>
        <ol className="mt-3 text-sm list-decimal list-inside space-y-2 text-[color:var(--ecg-text-secondary)]">
          <li>Assessment & integration planning</li>
          <li>Device onboarding & data normalization</li>
          <li>Optimization rollout & training</li>
        </ol>
      </section>

      {/* Case studies */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Campus Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{c:"IIT Jodhpur",m:"40% cost reduction"},{c:"Rajasthan University",m:"Seamless integrations"},{c:"MNIT Jaipur",m:"Improved grid stability"}].map((cs)=> (
            <article key={cs.c} className="p-6 rounded-xl border border-black/5 dark:border-white/10">
              <div className="text-lg font-semibold">{cs.c}</div>
              <p className="text-sm text-[color:var(--ecg-text-secondary)] mt-1">Outcome: {cs.m}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Architecture overview */}
      <section className="p-6 rounded-xl border border-black/5 dark:border-white/10">
        <h2 className="text-xl font-semibold">Architecture at a Glance</h2>
        <div className="mt-3 grid md:grid-cols-4 gap-3 text-sm">
          <div className="p-3 rounded-lg bg-black/5 dark:bg-white/10">IoT Edge Gateways</div>
          <div className="p-3 rounded-lg bg-black/5 dark:bg:white/10">Data Lake + Stream</div>
          <div className="p-3 rounded-lg bg-black/5 dark:bg:white/10">Optimization Engine</div>
          <div className="p-3 rounded-lg bg-black/5 dark:bg:white/10">API + Web App</div>
        </div>
      </section>

      {/* ROI & TCO */}
      <section className="grid lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-black/5 dark:border-white/10">
          <h2 className="text-xl font-semibold">Return on Investment</h2>
          <p className="mt-2 text-sm text-[color:var(--ecg-text-secondary)]">Typical campuses see payback within 12–24 months driven by peak avoidance and efficiency gains.</p>
        </div>
        <div className="p-6 rounded-xl border border-black/5 dark:border-white/10">
          <h2 className="text-xl font-semibold">Total Cost of Ownership</h2>
          <p className="mt-2 text-sm text-[color:var(--ecg-text-secondary)]">Cloud‑native, modular architecture minimizes maintenance and scales with additional assets.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="p-6 rounded-xl border border-black/5 dark:border-white/10 text-center">
        <h2 className="text-2xl font-semibold">Ready to orchestrate your campus energy?</h2>
        <p className="mt-2 text-sm text-[color:var(--ecg-text-secondary)]">Explore the live dashboard and see real‑time coordination in action.</p>
        <a href="/dashboard" className="inline-flex mt-4 h-11 items-center rounded-md bg-primary px-6 text-white font-medium">Open Dashboard</a>
      </section>
    </div>
  );
}


