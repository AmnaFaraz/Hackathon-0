import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Zap, Code2 } from "lucide-react";
import { hackathons } from "@/lib/hackathons";
import { StatusBadge } from "@/components/StatusBadge";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return hackathons.map((h) => ({ id: String(h.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const hackathon = hackathons.find((h) => h.id === Number(id));
  if (!hackathon) return { title: "Not Found" };
  return {
    title: `H-${hackathon.id}: ${hackathon.title} — Panaversity`,
    description: hackathon.description,
  };
}

export default async function HackathonDetailPage({ params }: Props) {
  const { id } = await params;
  const hackathon = hackathons.find((h) => h.id === Number(id));

  if (!hackathon) notFound();

  return (
    <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#8B949E] hover:text-[#00D4FF] transition-colors duration-200 mb-10"
          aria-label="Back to portfolio"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#161B22] border border-[#21262D] text-[#00D4FF] font-mono font-bold">
              {String(hackathon.id).padStart(2, "0")}
            </span>
            <StatusBadge status={hackathon.status} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#E6EDF3] mb-4">
            {hackathon.title}
          </h1>
          <p className="text-[#8B949E] text-lg leading-relaxed">
            {hackathon.description}
          </p>
        </div>

        {/* Points */}
        <div className="flex items-center gap-2 mb-8 p-4 rounded-xl bg-[#0D1117] border border-[#21262D]">
          <Zap className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
          <span className="text-sm text-[#8B949E]">Points:</span>
          <span className="font-mono font-bold text-[#F59E0B]">
            {hackathon.points}
          </span>
        </div>

        {/* Tech stack */}
        <div className="mb-8">
          <h2 className="text-xs font-mono text-[#00D4FF] mb-3 tracking-widest uppercase">
            {"// Tech Stack"}
          </h2>
          <div className="flex flex-wrap gap-2">
            {hackathon.tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161B22] border border-[#21262D] text-sm text-[#E6EDF3] font-mono"
              >
                <Code2 className="w-3.5 h-3.5 text-[#00D4FF]" aria-hidden="true" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4">
          {hackathon.status === "live" && hackathon.url !== "#" ? (
            <a
              href={hackathon.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${hackathon.title} live demo (opens in new tab)`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00D4FF] text-[#080B14] font-semibold text-sm hover:bg-[#00D4FF]/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
            >
              View Live <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#21262D] text-[#484F58] font-semibold text-sm cursor-not-allowed">
              Coming Soon
            </span>
          )}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#21262D] text-[#8B949E] font-semibold text-sm hover:border-[#484F58] hover:text-[#E6EDF3] transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
