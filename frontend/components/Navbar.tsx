"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, GitBranch, Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-[12px]">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground hover:text-brand transition-colors duration-200"
          aria-label="Panaversity — home"
        >
          <Code2 className="w-5 h-5 text-brand" aria-hidden="true" />
          <span className="font-mono font-bold text-sm tracking-tight">
            panaversity<span className="text-brand">.dev</span>
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden sm:flex items-center gap-6 text-sm text-secondary">
          <a
            href="#hackathons"
            className="hover:text-foreground transition-colors duration-200"
          >
            Hackathons
          </a>
          <a
            href="https://panaversity.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-200"
          >
            Panaversity
          </a>
          <a
            href="https://github.com/AmnaFaraz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            className="hover:text-foreground transition-colors duration-200"
          >
            <GitBranch className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className={`
              ml-4 p-2 rounded-xl border-2 transition-all duration-300
              flex items-center justify-center relative w-10 h-10
              ${resolvedTheme === "dark" 
                ? "bg-amber-400/10 border-amber-500/50 text-amber-500 shadow-[0_0_15px_rgba(251,191,36,0.1)]" 
                : "bg-slate-900 border-indigo-500/50 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.1)]"
              }
              hover:scale-110 active:scale-95 group/theme
            `}
            aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
          >
            <div className="absolute inset-0 bg-current opacity-0 group-hover/theme:opacity-5 transition-opacity rounded-lg" />
            <AnimatePresence mode="wait" initial={false}>
              {resolvedTheme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <Sun className="w-5 h-5" aria-hidden="true" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <Moon className="w-5 h-5" aria-hidden="true" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        )}
      </nav>
    </header>
  );
}
