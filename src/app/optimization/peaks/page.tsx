export default function PeaksPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold">Peak Shaving</h1>
        <p className="text-sm text-[color:var(--ecg-text-secondary)]">Battery discharge optimization and load shedding strategies</p>
      </header>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">Predicted next peak</div>
          <ul className="text-sm space-y-2">
            <li>Time window: <span>18:00–20:00</span></li>
            <li>Expected peak: <span>1.2 MW</span></li>
            <li>Recommended discharge: <span>400 kW</span></li>
          </ul>
        </div>
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">Historical peak analysis</div>
          <ul className="text-sm space-y-2">
            <li>Last month peaks: <span>5</span></li>
            <li>Average reduction: <span>18%</span></li>
            <li>Cost avoidance: <span>₹2,10,000</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


