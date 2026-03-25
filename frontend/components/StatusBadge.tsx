import { HackathonStatus } from "@/lib/hackathons";

interface StatusBadgeProps {
  status: HackathonStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#00FF88]/10 text-[#00FF88] border border-[#00FF88]/30">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF88] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF88]"></span>
        </span>
        LIVE
      </span>
    );
  }

  if (status === "wip") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
        <span className="h-2 w-2 rounded-full bg-amber-400"></span>
        IN PROGRESS
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#21262D] text-[#8B949E] border border-[#21262D]">
      <span className="h-2 w-2 rounded-full bg-[#484F58]"></span>
      COMING SOON
    </span>
  );
}
