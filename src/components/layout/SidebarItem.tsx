// src/components/layout/SidebarItem.tsx
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "../../lib/utils";

export function SidebarItem({ to, icon: Icon, label, isOpen }: any) {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  const active = pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center rounded-lg transition-all",
        "h-11",
        isOpen ? "px-3 gap-3 justify-start" : "justify-center",
        active
          ? "bg-iris-500/10 text-white"
          : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800",
      )}
    >
      <Icon size={18} />
      {/* TEXTO */}
      <span
        className={cn(
          "text-sm whitespace-nowrap transition-all",
          isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden",
        )}
      >
        {label}
      </span>
    </Link>
  );
}
