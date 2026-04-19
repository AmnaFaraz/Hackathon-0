"use client";

import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="hero-gradient absolute inset-0" aria-hidden="true" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--accent-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--accent-cyan) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />
        {/* Glow blobs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl animate-pulse"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand/30 bg-brand/5 text-brand text-xs font-mono mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" aria-hidden="true" />
          Panaversity AI Agent Architect
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
          Amna{" "}
          <span className="text-brand">
            Faraz
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-secondary mb-4 max-w-2xl mx-auto leading-relaxed">
          Building{" "}
          <span className="text-foreground font-medium">Digital FTEs</span>
        </p>
        <p className="text-sm font-mono text-secondary mb-12 tracking-wider">
          168h/week &nbsp;·&nbsp; Zero fatigue &nbsp;·&nbsp; Always on
        </p>

        {/* CTA */}
        <a
          href="#hackathons"
          aria-label="Scroll to hackathon projects"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-brand text-background font-bold text-sm hover:shadow-[0_0_20px_rgba(var(--accent-cyan),0.4)] transition-all duration-200"
        >
          View Projects
          <ChevronDown className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <ChevronDown className="w-5 h-5 text-border" />
      </div>
    </section>
  );
}
