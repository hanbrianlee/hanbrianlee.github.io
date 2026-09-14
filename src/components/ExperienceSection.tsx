import React from 'react';
import { experiences } from '../data/portfolioContent';
import { Calendar, MapPin, Building2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Professional Experience
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Industry track record across autonomous vehicles, robotics & systems engineering
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="rounded-xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 transition-all hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div>
                  <div className="flex items-center gap-2">
                    {index === 0 ? (
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" title="Current Role" />
                    ) : (
                      <span className="inline-flex h-2 w-2 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                    )}
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-1 flex items-center gap-1.5 flex-wrap">
                    <Building2 className="h-4 w-4 text-zinc-500" />
                    <span>{exp.company}</span>
                    <span className="font-normal text-zinc-500 dark:text-zinc-400">• {exp.team}</span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 font-medium shrink-0">
                  <span className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2.5 py-1 dark:bg-zinc-800">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2.5 py-1 dark:bg-zinc-800">
                    <MapPin className="h-3.5 w-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                  Domain: {exp.focus}
                </p>
                <ul className="space-y-2">
                  {exp.bulletPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.technologies.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
