import { GitBranch, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#21262D] bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2 text-[#8B949E]">
            <Code2 className="w-4 h-4 text-[#00D4FF]" aria-hidden="true" />
            <span className="font-mono text-sm">
              panaversity<span className="text-[#00D4FF]">.dev</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#8B949E]">
            <a
              href="mailto:amnafaraz89@gmail.com"
              className="hover:text-[#00D4FF] transition-colors duration-200"
            >
              amnafaraz89@gmail.com
            </a>
            <a
              href="https://panaversity.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00D4FF] transition-colors duration-200"
            >
              panaversity.org
            </a>
            <a
              href="https://github.com/AmnaFaraz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in new tab)"
              className="hover:text-[#00D4FF] transition-colors duration-200"
            >
              <GitBranch className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#8B949E] font-mono">
            © 2024 Amna Faraz
          </p>
        </div>
      </div>
    </footer>
  );
}
