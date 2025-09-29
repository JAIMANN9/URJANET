export default function CostPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold">Cost Analysis</h1>
        <p className="text-sm text-[color:var(--ecg-text-secondary)]">Energy cost breakdown and ROI calculations</p>
      </header>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">Savings vs Grid-only</div>
          <ul className="text-sm space-y-2">
            <li>Monthly savings: <span className="font-medium">₹8,50,000</span></li>
            <li>Peak demand avoided: <span>420 kW</span></li>
            <li>Time-of-use optimization: <span>₹1,20,000</span></li>
          </ul>
        </div>
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">Carbon credit estimation</div>
          <ul className="text-sm space-y-2">
            <li>Carbon reduction: <span>12,500 kg CO₂ / month</span></li>
            <li>Credit value (₹1,000/t): <span>₹12,500</span></li>
            <li>Annualized impact: <span>₹1,50,000</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


