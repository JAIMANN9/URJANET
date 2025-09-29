export default function AchievementsPage() {
  const badges = [
    { name: "Peak Shaver", desc: "Reduced peak by 15%" },
    { name: "Solar Steward", desc: "Kept arrays at >98% uptime" },
    { name: "Wind Whisperer", desc: "Optimized turbine angles" },
  ];
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold">Achievements</h1>
        <p className="text-sm text-[color:var(--ecg-text-secondary)]">Recognition for efficiency milestones</p>
      </header>
      <div className="grid md:grid-cols-3 gap-4">
        {badges.map((b) => (
          <div key={b.name} className="p-4 rounded-xl border border-black/5 dark:border-white/10">
            <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 mb-3" />
            <div className="font-medium">{b.name}</div>
            <div className="text-sm text-[color:var(--ecg-text-secondary)]">{b.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


