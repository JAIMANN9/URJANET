export default function LeaderboardsPage() {
  const rows = [
    { rank: 1, campus: "IIT Jodhpur", score: 98, savings: "₹12,30,000" },
    { rank: 2, campus: "Rajasthan University", score: 92, savings: "₹9,80,000" },
    { rank: 3, campus: "MNIT Jaipur", score: 89, savings: "₹8,10,000" },
  ];
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold">Energy Champions Leaderboard</h1>
        <p className="text-sm text-[color:var(--ecg-text-secondary)]">Campus-wide energy efficiency rankings</p>
      </header>
      <div className="p-4 rounded-xl border border-black/5 dark:border-white/10 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-[color:var(--ecg-text-secondary)]">
            <tr><th className="py-2">Rank</th><th>Campus</th><th>Score</th><th>Savings</th></tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.rank} className="border-t border-black/5 dark:border-white/10">
                <td className="py-2">#{r.rank}</td>
                <td>{r.campus}</td>
                <td className="font-medium text-primary">{r.score}</td>
                <td>{r.savings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


