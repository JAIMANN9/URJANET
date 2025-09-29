export default function HelpCenterPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold">Help Center</h1>
        <p className="text-sm text-[color:var(--ecg-text-secondary)]">Guides and FAQs</p>
      </header>
      <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
        <details className="p-2"><summary className="cursor-pointer font-medium">How to connect equipment?</summary><p className="text-sm text-[color:var(--ecg-text-secondary)] mt-2">Use the Integrations page to add inverters, turbines, and gateways.</p></details>
        <details className="p-2"><summary className="cursor-pointer font-medium">How to enable PWA?</summary><p className="text-sm text-[color:var(--ecg-text-secondary)] mt-2">Install from your browser’s “Add to Home Screen”.</p></details>
      </div>
    </div>
  );
}


