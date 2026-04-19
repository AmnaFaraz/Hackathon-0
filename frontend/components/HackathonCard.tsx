import Link from "next/link";
import { ExternalLink, ArrowRight, Zap } from "lucide-react";
import { Hackathon } from "@/lib/hackathons";
import { StatusBadge } from "./StatusBadge";

interface HackathonCardProps {
  hackathon: Hackathon;
}

export function HackathonCard({ hackathon }: HackathonCardProps) {
  const isLive = hackathon.status === "live";

  return (
    <div className="group relative flex flex-col bg-[#0D1117] border border-[#21262D] rounded-xl p-6 transition-all duration-300 hover:border-[#00D4FF] hover:bg-[#0D1117] hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]">
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#161B22] border border-[#21262D] text-[#00D4FF] text-sm font-mono font-bold">
            {String(hackathon.id).padStart(2, "0")}
          </span>
        </div>
        <StatusBadge status={hackathon.status} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[#FFFFFF] mb-2 leading-tight group-hover:text-[#00D4FF] transition-colors duration-200">
        {hackathon.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#8B949E] mb-4 leading-relaxed flex-grow">
        {hackathon.description}
      </p>

      {/* Tech stack badges */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {hackathon.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-xs rounded-md bg-[#161B22] text-[#8B949E] border border-[#21262D] font-mono"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Points + Link */}
      <div className="flex items-center justify-between pt-4 border-t border-[#21262D]">
        <div className="flex items-center gap-1.5 text-xs text-[#D29922]">
          <Zap className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="font-mono font-medium">{hackathon.points} pts</span>
        </div>

        {isLive && hackathon.url !== "#" ? (
          <a
            href={hackathon.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${hackathon.title} (opens in new tab)`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00D4FF] text-[#080B14] text-xs font-bold hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-200"
          >
            View Project <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        ) : (
          <Link
            href={`/hackathon/${hackathon.id}`}
            aria-label={`View details for ${hackathon.title}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8B949E] hover:text-[#00D4FF] transition-colors duration-200"
          >
            Details <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        )}
      </div>
    </div>
  );
}
