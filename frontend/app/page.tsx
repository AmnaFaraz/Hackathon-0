import { Hero } from "@/components/Hero";
import { HackathonCard } from "@/components/HackathonCard";
import { hackathons } from "@/lib/hackathons";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Hackathons Grid */}
      <section
        id="hackathons"
        className="py-24 px-4 sm:px-6 lg:px-8"
        aria-labelledby="hackathons-heading"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <p className="text-xs font-mono text-brand mb-3 tracking-widest uppercase">
              {"// Hackathon Series"}
            </p>
            <h2
              id="hackathons-heading"
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Panaversity Projects
            </h2>
            <p className="text-secondary max-w-xl leading-relaxed">
              Full-stack AI systems built end-to-end — from Python console to
              cloud-native Kubernetes deployments.
            </p>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-5 rounded-2xl border border-border bg-surface">
            {[
              { label: "Total Projects", value: "5" },
              { label: "Max Points", value: "4,300+" },
              { label: "Tech Stack", value: "10+" },
              { label: "Deploy Targets", value: "3" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold font-mono text-brand mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {hackathons.map((h) => (
              <HackathonCard key={h.id} hackathon={h} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
