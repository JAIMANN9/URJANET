"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Step = 1 | 2 | 3 | 4;

export default function RegisterPage() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    campusName: "",
    campusLocation: "",
    campusSize: 20000,
    systems: [] as string[],
    role: "admin",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function next() {
    setStep((s) => Math.min(4, (s as number) + 1) as Step);
  }
  function back() {
    setStep((s) => Math.max(1, (s as number) - 1) as Step);
  }

  async function submit() {
    setLoading(true);
    await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    router.push("/auth/login");
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] grid place-items-center py-16">
      <div className="w-full max-w-2xl p-6 rounded-xl border border-black/5 dark:border-white/10 glass">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Create your account</h1>
          <Progress step={step} />
        </div>
        {step === 1 && (
          <div className="grid gap-4">
            <TextField label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <TextField label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <TextField label="Password" type="password" value={form.password} onChange={(v) => setForm({ ...form, password: v })} />
          </div>
        )}
        {step === 2 && (
          <div className="grid gap-4">
            <TextField label="Campus name" value={form.campusName} onChange={(v) => setForm({ ...form, campusName: v })} />
            <TextField label="Location" value={form.campusLocation} onChange={(v) => setForm({ ...form, campusLocation: v })} />
            <div>
              <div className="flex items-center justify-between mb-2"><span className="text-sm">Campus size (m²)</span><span className="text-sm text-[color:var(--ecg-text-secondary)]">{form.campusSize}</span></div>
              <input type="range" min={1000} max={100000} value={form.campusSize} onChange={(e) => setForm({ ...form, campusSize: Number(e.target.value) })} className="w-full accent-primary" />
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="grid gap-4">
            <CheckboxGroup
              label="Current systems"
              options={["solar", "wind", "battery", "grid"]}
              values={form.systems}
              onChange={(values) => setForm({ ...form, systems: values })}
            />
            <SelectField
              label="Role"
              options={["admin", "manager", "operator", "viewer"]}
              value={form.role}
              onChange={(v) => setForm({ ...form, role: v })}
            />
          </div>
        )}
        {step === 4 && (
          <div className="space-y-3 text-sm">
            <div className="font-medium">Verification and welcome</div>
            <p className="text-[color:var(--ecg-text-secondary)]">We will verify your campus details and send a confirmation email.</p>
          </div>
        )}
        <div className="mt-6 flex items-center justify-between">
          <button onClick={back} className="h-10 px-4 rounded-md border border-black/10 dark:border-white/15" disabled={step === 1}>Back</button>
          {step < 4 ? (
            <button onClick={next} className="h-10 px-6 rounded-md bg-primary text-white font-medium">Next</button>
          ) : (
            <button onClick={submit} disabled={loading} className="h-10 px-6 rounded-md bg-primary text-white font-medium">{loading ? "Submitting…" : "Finish"}</button>
          )}
        </div>
      </div>
    </div>
  );
}

function TextField({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="text-sm">{label}</span>
      <input className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" type={type} value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}

function SelectField({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <span className="text-sm">{label}</span>
      <select className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

function CheckboxGroup({ label, options, values, onChange }: { label: string; options: string[]; values: string[]; onChange: (v: string[]) => void }) {
  function toggle(v: string) {
    if (values.includes(v)) onChange(values.filter((x) => x !== v));
    else onChange([...values, v]);
  }
  return (
    <fieldset>
      <legend className="text-sm mb-2">{label}</legend>
      <div className="grid grid-cols-2 gap-2">
        {options.map((o) => (
          <label key={o} className="inline-flex items-center gap-2">
            <input type="checkbox" checked={values.includes(o)} onChange={() => toggle(o)} />
            <span className="text-sm capitalize">{o}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Progress({ step }: { step: Step }) {
  return (
    <div className="flex items-center gap-2" aria-label="Registration progress" role="status">
      {[1,2,3,4].map((s) => (
        <div key={s} className={`h-2 w-10 rounded-full ${s <= step ? "bg-primary" : "bg-black/10 dark:bg-white/10"}`} />
      ))}
    </div>
  );
}


