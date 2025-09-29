"use client";
import { useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([
    { name: "Admin RTU", email: "admin@rtu.ac.in", role: "admin" },
    { name: "Energy Manager", email: "manager@rtu.ac.in", role: "manager" },
    { name: "Operator 1", email: "operator1@rtu.ac.in", role: "operator" },
  ]);
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold">User Management</h1>
        <p className="text-sm text-[color:var(--ecg-text-secondary)]">Invite users and manage roles</p>
      </header>
      <div className="p-4 rounded-xl border border-black/5 dark:border-white/10">
        <table className="w-full text-sm">
          <thead className="text-left text-[color:var(--ecg-text-secondary)]"><tr><th className="py-2">Name</th><th>Email</th><th>Role</th><th></th></tr></thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={u.email} className="border-t border-black/5 dark:border-white/10">
                <td className="py-2">{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <select value={u.role} onChange={(e) => setUsers(update(users, i, { role: e.target.value }))} className="rounded-md border border-black/10 dark:border-white/15 bg-transparent px-2 py-1">
                    {['admin','manager','operator','viewer'].map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </td>
                <td className="text-right"><button className="h-8 px-3 rounded-md border border-black/10 dark:border-white/15">Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function update<T extends object>(arr: T[], idx: number, partial: Partial<T>): T[] {
  return arr.map((item, i) => (i === idx ? { ...item, ...partial } : item));
}


