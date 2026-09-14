import React from 'react';
import { personalInfo } from '../data/portfolioContent';
import { ArrowDown, FileText, Github, Linkedin, Mail, ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenLegacyModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLegacyModal }) => {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-zinc-200 bg-zinc-50/50 py-16 sm:py-24 dark:border-zinc-800 dark:bg-zinc-900/30">
      {/* Background visual elements */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-800/40 dark:bg-emerald-950/40 dark:text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Senior Deep Learning Engineer • Perception, Mapping & Localization
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
              Advancing Deep Learning for Autonomous Driving & Humanoid Robotics
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl font-normal">
              Hi, I’m <span className="font-semibold text-zinc-900 dark:text-white">Brian (HAN UL) Lee</span>. I specialize in real-time computer vision, end-to-end perception, 3D metric depth estimation, and neural mapping for safety-critical autonomous systems.
            </p>

            <blockquote className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 text-sm italic text-zinc-500 dark:text-zinc-400">
              {personalInfo.quote}
            </blockquote>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors shadow-xs"
              >
                <FileText className="h-4 w-4" />
                Explore Research & Reports
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700/80 transition-colors"
              >
                Industry Experience
              </a>

              <button
                onClick={onOpenLegacyModal}
                className="inline-flex items-center gap-2 rounded-lg border border-amber-300 bg-amber-50/70 px-4 py-2.5 text-sm font-medium text-amber-900 hover:bg-amber-100 dark:border-amber-700/60 dark:bg-amber-950/40 dark:text-amber-200 dark:hover:bg-amber-900/60 transition-colors"
              >
                <ShieldCheck className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                Jekyll Backup & Site Analysis
              </button>
            </div>
          </div>

          {/* Portrait & Quick Stats Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 mb-4 border border-zinc-100 dark:border-zinc-800">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="h-full w-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to stylized initials if remote image fails
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="flex h-full w-full items-center justify-center bg-zinc-800 text-white font-bold text-4xl">
                          BL
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-zinc-900 dark:text-white text-base">
                    {personalInfo.name}
                  </h3>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    hanbrianlee
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  {personalInfo.headline} • General Motors UltraCruise
                </p>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <span>Location</span>
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Korean / Canadian</span>
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <span>Current Focus</span>
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Autonomous Perception</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
