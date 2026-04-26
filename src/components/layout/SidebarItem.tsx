// src/components/layout/SidebarItem.tsx
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "../../lib/utils";
import * as Tooltip from "@radix-ui/react-tooltip";

export function SidebarItem({ to, icon: Icon, label, isOpen }: any) {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  const active = pathname === to;

  const content = (
    <Link
      to={to}
      className={cn(
        "flex items-center rounded-lg transition-all w-full",
        "h-11",
        isOpen ? "px-3 gap-3 justify-start" : "justify-center px-0",
        active
          ? "bg-iris-500/10 text-white"
          : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800",
      )}
    >
      <Icon size={18} />
      {/* TEXTO */}
      <span
        className={cn(
          "text-sm whitespace-nowrap transition-all duration-200",
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 absolute",
        )}
      >
        {label}
      </span>
    </Link>
  );

  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root disableHoverableContent={isOpen} >
        <Tooltip.Trigger asChild>
          {content}
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side="right"
            align="center"
            sideOffset={8}
            className={cn(
              "z-50 px-3 py-1.5 text-sm rounded-md shadow-md",
              "bg-slate-900 text-white",
              "dark:bg-white dark:text-slate-900",
              "animate-in fade-in zoom-in-95"
            )}
          >
            {label}

            <Tooltip.Arrow className="fill-slate-900 dark:fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
