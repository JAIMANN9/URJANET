export default function GridPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold">Grid Connection</h1>
        <p className="text-sm text-[color:var(--ecg-text-secondary)]">Import/Export monitoring • Power quality</p>
      </header>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">Power Quality</div>
          <ul className="text-sm space-y-2">
            <li>Voltage: <span>230V ± 5%</span></li>
            <li>Frequency: <span>50 Hz</span></li>
            <li>THD: <span>3.2%</span></li>
          </ul>
        </div>
        <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
          <div className="text-sm font-medium mb-3">Demand Response</div>
          <ul className="text-sm space-y-2">
            <li>Participation: <span className="text-green-600">Enabled</span></li>
            <li>Events this month: <span>3</span></li>
            <li>Peak shaved: <span>420 kW</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


