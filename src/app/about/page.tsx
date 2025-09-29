export const metadata = {
  title: "About — EcoGrid Pro",
  description: "Mission-driven energy orchestration for campuses in Rajasthan.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 space-y-6">
      <h1 className="text-3xl font-bold">About EcoGrid Pro</h1>
      <p className="text-[color:var(--ecg-text-secondary)]">
        EcoGrid Pro is a comprehensive platform that unifies solar, wind, battery storage, and grid systems into an intelligent virtual power plant, tailor-made for public-sector campuses across Rajasthan.
      </p>
      <p className="text-[color:var(--ecg-text-secondary)]">
        Our mission is to make renewable energy reliable, affordable, and orchestrated—so your campus can thrive sustainably.
      </p>
    </div>
  );
}


