import React from 'react';
import { education, publicationsAndPatents, honorsAndCertifications } from '../data/portfolioContent';
import { GraduationCap, Award, FileText, CheckCircle2, Globe, ShieldCheck } from 'lucide-react';

export const EducationAndCredentialsSection: React.FC = () => {
  return (
    <section id="credentials" className="py-16 sm:py-20 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Education, Patents & Honors
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Academic foundation, inventions & professional recognitions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider pb-2 border-b border-zinc-200 dark:border-zinc-800">
              <GraduationCap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              Education & Degrees
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="rounded-xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 transition-all hover:border-zinc-300 dark:hover:border-zinc-700"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <span className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    {edu.degree} • <span className="font-normal text-zinc-600 dark:text-zinc-400">{edu.field}</span>
                  </p>
                  {edu.details && (
                    <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/80 pt-2">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Patents, Certifications & Honors Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Patents & Publications */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider pb-2 border-b border-zinc-200 dark:border-zinc-800 mb-4">
                <FileText className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                Patents & Publications
              </div>

              <div className="space-y-3">
                {publicationsAndPatents.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-zinc-200 bg-white p-4 shadow-xs dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
                        item.type === 'patent'
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50'
                          : 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Honors */}
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-2.5">
                  <ShieldCheck className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  Certifications
                </div>
                <div className="space-y-1.5">
                  {honorsAndCertifications.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-100 dark:border-zinc-800 pt-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-2.5">
                  <Award className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  Honors & Awards
                </div>
                <div className="space-y-1.5">
                  {honorsAndCertifications.awards.map((award, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                      <span>{award}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-100 dark:border-zinc-800 pt-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-2.5">
                  <Globe className="h-4 w-4 text-zinc-500" />
                  Languages
                </div>
                <div className="flex flex-wrap gap-2">
                  {honorsAndCertifications.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300"
                    >
                      <strong className="font-semibold">{lang.language}</strong>: {lang.proficiency}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
