import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import ROIWidget from "./(components)/ROIWidget";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/photovoltaic-2138992.jpg"
          alt="Solar panels under Rajasthan sky"
          fill
          priority
          className="object-cover object-center -z-10"
        />
        <div className="absolute inset-0 bg-black/50 -z-10" />
        <div className="px-4 sm:px-6 lg:px-8 max-w-4xl">
          <span className="inline-flex items-center rounded-full bg-white/20 text-white px-3 py-1 text-xs font-medium ring-1 ring-white/30">
            Trusted by 50+ Rajasthan Campuses
          </span>
          <h1 className="mt-6 text-5xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]">
            UrjaNet
          </h1>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Orchestrate Your Campus Energy Future
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Transform your renewable energy systems into an intelligent, coordinated virtual power plant that maximizes efficiency and minimizes costs.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="/dashboard" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-white font-medium shadow hover:opacity-90">
              Open Dashboard
            </Link>
            <Link href="#demo" className="inline-flex h-11 items-center justify-center rounded-md border border-white/30 text-white px-6 font-medium hover:bg-white/10">
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-8">The Challenge of Fragmented Renewable Energy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Uncoordinated Systems", "Weather Variability", "Manual Management"].map((title, idx) => (
              <div key={title} className="p-6 rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-black/20">
                <div className="text-primary font-medium mb-2">{idx === 0 ? "Solar and wind operating in isolation" : idx === 1 ? "Unpredictable energy generation patterns" : "Lack of intelligent automation"}</div>
                <div className="text-lg font-semibold">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 bg-light/50 dark:bg-dark/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-8">Introducing Intelligent Energy Orchestration</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Real-time Coordination", "Predictive Analytics", "Smart Automation", "Cost Optimization"].map((title) => (
              <div key={title} className="p-6 rounded-xl border border-black/5 dark:border-white/10">
                <div className="h-24 rounded-md bg-gradient-to-tr from-primary/20 to-secondary/20 mb-4" />
                <div className="font-semibold">{title}</div>
                <p className="text-sm text-[color:var(--ecg-text-secondary)] mt-1">AI-powered system integration, forecasting, and optimization.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-8">Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Live Energy Dashboard",
              "Weather Integration",
              "Smart Battery Management",
              "Load Scheduling",
              "Carbon Tracking",
              "Predictive Maintenance",
            ].map((title) => (
              <div key={title} className="p-6 rounded-xl border border-black/5 dark:border-white/10 hover:shadow-lg">
                <div className="h-40 rounded-md bg-gradient-to-tr from-secondary/20 to-accent/20 mb-4" />
                <div className="font-semibold">{title}</div>
                <p className="text-sm text-[color:var(--ecg-text-secondary)] mt-1">Interactive, real-time, and data-driven controls.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-light/50 dark:bg-dark/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-8">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Starter", price: "₹50,000/month", desc: "Small campuses (up to 1MW)" },
              { name: "Professional", price: "₹150,000/month", desc: "Medium campuses (up to 5MW)" },
              { name: "Enterprise", price: "Custom pricing", desc: "Large campuses (5MW+)" },
            ].map((p, i) => (
              <div key={p.name} className={`p-6 rounded-xl border ${i===1?"border-primary":"border-black/5 dark:border-white/10"} bg-white/70 dark:bg-black/20`}>
                <div className="text-lg font-semibold">{p.name}</div>
                <div className="text-2xl font-bold mt-2">{p.price}</div>
                <p className="text-sm text-[color:var(--ecg-text-secondary)] mt-1">{p.desc}</p>
                <Link href="/auth/register" className="inline-flex mt-4 h-10 items-center justify-center rounded-md bg-primary px-4 text-white font-medium">
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
    </div>
      </section>

      {/* Gamification */}
      <section className="py-16" id="gamification">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-8">Engage Your Campus Community</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Energy Champions Leaderboard", desc: "Campus-wide competitions" },
              { title: "Sustainability Challenges", desc: "Weekly energy-saving goals" },
              { title: "Achievement Badges", desc: "Recognition for milestones" },
              { title: "Green Points System", desc: "Reward participation" },
            ].map((g) => (
              <div key={g.title} className="p-6 rounded-xl border border-black/5 dark:border-white/10">
                <div className="h-20 rounded-md bg-gradient-to-tr from-accent/20 to-primary/20 mb-4" />
                <div className="font-semibold">{g.title}</div>
                <p className="text-sm text-[color:var(--ecg-text-secondary)] mt-1">{g.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-xl border border-black/5 dark:border-white/10">
            <div className="font-semibold mb-3">Mock Leaderboard</div>
            <ol className="space-y-2">
              {[
                { campus: "IIT Jodhpur", score: 98 },
                { campus: "Rajasthan University", score: 92 },
                { campus: "MNIT Jaipur", score: 89 },
              ].map((r, i) => (
                <li key={r.campus} className="flex items-center justify-between">
                  <div className="flex items-center gap-3"><span className="text-sm text-[color:var(--ecg-text-secondary)]">#{i+1}</span><span className="font-medium">{r.campus}</span></div>
                  <div className="text-primary font-semibold">{r.score}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-light/50 dark:bg-dark/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-8">Built for Scalability & Reliability</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { name: "AI & Machine Learning", desc: "Advanced analytics and predictions" },
              { name: "IoT Integration", desc: "Seamless device connectivity" },
              { name: "Cloud Infrastructure", desc: "Scalable and secure architecture" },
              { name: "Mobile-First Design", desc: "Access anywhere, anytime" },
              { name: "API-First Architecture", desc: "Easy integration with systems" },
            ].map((t) => (
              <div key={t.name} className="p-6 rounded-xl border border-black/5 dark:border-white/10">
                <div className="h-16 rounded-md bg-gradient-to-tr from-secondary/20 to-primary/20 mb-4" />
                <div className="font-semibold">{t.name}</div>
                <p className="text-sm text-[color:var(--ecg-text-secondary)] mt-1">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16" id="roi">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-8">ROI Calculator</h2>
          <Suspense fallback={<div role="status" aria-busy className="h-40 rounded-xl animate-pulse bg-black/5 dark:bg-white/10" /> }>
            <ROIWidget />
          </Suspense>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-light/50 dark:bg-dark/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-8">What Campuses Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "IIT Jodhpur", quote: "40% reduction in energy costs" },
              { name: "Rajasthan University", quote: "Seamless integration with existing infrastructure" },
              { name: "MNIT Jaipur", quote: "Significant improvement in grid stability" },
            ].map((t) => (
              <div key={t.name} className="p-6 rounded-xl border border-black/5 dark:border-white/10">
                <div className="h-16 w-16 rounded-full bg-primary/20 mb-4" aria-hidden />
                <blockquote className="italic">“{t.quote}”</blockquote>
                <div className="mt-2 text-sm text-[color:var(--ecg-text-secondary)]">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" id="faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-8">Frequently Asked Questions</h2>
          <div className="divide-y divide-black/5 dark:divide-white/10 rounded-xl border border-black/5 dark:border-white/10">
            {[
              { q: "Integration with existing systems?", a: "Yes, via API-first architecture and adapters." },
              { q: "Data security and privacy?", a: "Encrypted in transit and at rest, RBAC controls, audit logs." },
              { q: "Training and support?", a: "Onboarding, documentation, and 24/7 support plans." },
              { q: "Hardware requirements?", a: "Works with standard inverters, controllers, and IoT gateways." },
              { q: "Regulatory compliance?", a: "Compliant with applicable DISCOM and campus policies." },
            ].map((f, i) => (
              <details key={i} className="p-6">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-2 text-sm text-[color:var(--ecg-text-secondary)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
