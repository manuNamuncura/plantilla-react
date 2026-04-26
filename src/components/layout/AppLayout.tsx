// src/components/layout/AppLayout.tsx
import { Sidebar } from "./Sidebar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 transition-all duration-300">{children}</div>
    </div>
  );
}
