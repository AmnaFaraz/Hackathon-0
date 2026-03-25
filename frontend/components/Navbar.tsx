"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, GitBranch, Code2 } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#21262D] bg-[#080B14]/80 backdrop-blur-md">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-[#E6EDF3] hover:text-[#00D4FF] transition-colors duration-200"
          aria-label="Panaversity — home"
        >
          <Code2 className="w-5 h-5 text-[#00D4FF]" aria-hidden="true" />
          <span className="font-mono font-bold text-sm tracking-tight">
            panaversity<span className="text-[#00D4FF]">.dev</span>
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden sm:flex items-center gap-6 text-sm text-[#8B949E]">
          <a
            href="#hackathons"
            className="hover:text-[#E6EDF3] transition-colors duration-200"
          >
            Hackathons
          </a>
          <a
            href="https://panaversity.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E6EDF3] transition-colors duration-200"
          >
            Panaversity
          </a>
          <a
            href="https://github.com/AmnaFaraz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            className="hover:text-[#E6EDF3] transition-colors duration-200"
          >
            <GitBranch className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="ml-4 p-2 rounded-lg border border-[#21262D] text-[#8B949E] hover:text-[#E6EDF3] hover:border-[#484F58] transition-all duration-200"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4" aria-hidden="true" />
            )}
          </button>
        )}
      </nav>
    </header>
  );
}
