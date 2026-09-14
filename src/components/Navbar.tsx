import React from 'react';
import { personalInfo } from '../data/portfolioContent';
import { Cpu, FileText, Briefcase, Sparkles, Archive, Github, Linkedin, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenLegacyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLegacyModal }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90 transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold text-sm transition-transform group-hover:scale-105">
            BL
          </div>
          <div>
            <span className="font-semibold text-zinc-900 dark:text-white tracking-tight block text-sm sm:text-base leading-tight">
              Brian (HAN UL) Lee
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 block font-normal">
              Deep Learning Engineer
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            Research & Projects
          </a>
          <a href="#skills" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            Skills
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenLegacyModal}
            className="inline-flex items-center gap-1.5 rounded-md border border-amber-300 bg-amber-50/80 px-2.5 py-1.5 text-xs font-medium text-amber-900 hover:bg-amber-100 dark:border-amber-700/50 dark:bg-amber-950/40 dark:text-amber-200 dark:hover:bg-amber-900/60 transition-colors shadow-xs"
            title="Inspect Jekyll site backup & structure"
          >
            <Archive className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
            <span className="hidden sm:inline">Legacy Site Backup</span>
            <span className="sm:hidden">Backup</span>
          </button>

          <div className="flex items-center gap-1 border-l border-zinc-200 dark:border-zinc-800 pl-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Email Brian Lee"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
