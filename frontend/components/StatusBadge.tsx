import { HackathonStatus } from "@/lib/hackathons";

interface StatusBadgeProps {
  status: HackathonStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-success/10 text-success border border-success/30">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
        </span>
        LIVE
      </span>
    );
  }

  if (status === "wip") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-warning/10 text-warning border border-warning/30">
        <span className="h-2 w-2 rounded-full bg-warning"></span>
        IN PROGRESS
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-border/30 text-secondary border border-border">
      <span className="h-2 w-2 rounded-full bg-secondary"></span>
      COMING SOON
    </span>
  );
}
