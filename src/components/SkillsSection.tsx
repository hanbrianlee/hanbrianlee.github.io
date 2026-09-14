import React from 'react';
import { skillCategories } from '../data/portfolioContent';
import { Cpu, Terminal, Wrench, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Core Competencies
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Technical expertise across deep learning & robotics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                {idx === 0 && <Cpu className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />}
                {idx === 1 && <Terminal className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />}
                {idx === 2 && <Wrench className="h-5 w-5 text-amber-600 dark:text-amber-400" />}
                <h3 className="font-bold text-zinc-900 dark:text-white text-base">
                  {cat.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center justify-between text-xs">
                    <span className="font-medium text-zinc-700 dark:text-zinc-300">
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="rounded bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                        {skill.level}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
