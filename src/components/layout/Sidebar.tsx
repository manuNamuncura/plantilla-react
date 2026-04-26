// src/components/layout/Sidebar.tsx
import { ChevronLeft, FileText, Folder, LayoutDashboard } from "lucide-react";
import { cn } from "../../lib/utils";
import { useSidebarStore } from "../../store/useSidebarStore";
import { SidebarItem } from "./SidebarItem";
import { IconButton } from "@radix-ui/themes";

export function Sidebar() {
  const { isOpen, toggle } = useSidebarStore();

  return (
    <aside
      className={cn(
        "h-screen flex flex-col border-r transition-all duration-300",
        "bg-slate-100 dark:bg-slate-950",
        "border-slate-200 dark:border-slate-800",
        isOpen ? "w-60" : "w-16",
      )}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between p-3">
        {isOpen && (
          <span className="font-semibold text-sm tracking-wide">Panel</span>
        )}

        <IconButton
          radius="full"
          variant="soft"
          onClick={toggle}
          className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800"
        >
          <ChevronLeft
            size={18}
            className={cn("transition-transform", !isOpen && "rotate-180")}
          />
        </IconButton>
      </div>
      {/* NAV */}
      <nav className="flex-1 space-y-1 p-3">
        <SidebarItem
          to="/"
          icon={LayoutDashboard}
          label="Dashboard"
          isOpen={isOpen}
        />
        <SidebarItem to="/obras" icon={Folder} label="Obras" isOpen={isOpen} />
        <SidebarItem
          to="/partes"
          icon={FileText}
          label="Partes"
          isOpen={isOpen}
        />
      </nav>
    </aside>
  );
}
