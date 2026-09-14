import React from 'react';
import { personalInfo } from '../data/portfolioContent';
import { FileText, Briefcase, MapPin, Mail, Github, Linkedin, GraduationCap, Phone } from 'lucide-react';

export const Hero: React.FC = () => {
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
              Senior Deep Learning & Automated Driving Software Engineer
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
              Perception at Waymo • ex-GM • ex-LG
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl font-normal">
              Hi, I’m <span className="font-semibold text-zinc-900 dark:text-white">Brian (HAN UL) Lee</span>. I specialize in deep learning perception, online scene mapping, end-to-end mapless driving, neural localization, and multi-sensor fusion for safety-critical automated driving.
            </p>

            <blockquote className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 text-sm italic text-zinc-500 dark:text-zinc-400">
              {personalInfo.quote}
            </blockquote>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors shadow-xs"
              >
                <Briefcase className="h-4 w-4" />
                View Career Timeline ({personalInfo.subHeadline})
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700/80 transition-colors"
              >
                <FileText className="h-4 w-4" />
                Research & Technical Reports
              </a>

              <a
                href="#credentials"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700/80 transition-colors"
              >
                <GraduationCap className="h-4 w-4" />
                Education & Patents
              </a>
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
                    const target = e.currentTarget;
                    target.style.display = 'none';
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
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                  {personalInfo.headline}
                </p>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <span>Current Location</span>
                  <span className="font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-rose-500" /> Mountain View, CA
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <span>Career Trajectory</span>
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Waymo • GM • LG</span>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  <span>Direct Connect</span>
                  <div className="flex items-center gap-2">
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-1 hover:text-zinc-900 dark:hover:text-white" title="GitHub">
                      <Github className="h-3.5 w-3.5" />
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-1 hover:text-zinc-900 dark:hover:text-white" title="LinkedIn">
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="p-1 hover:text-zinc-900 dark:hover:text-white" title="Email">
                      <Mail className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
