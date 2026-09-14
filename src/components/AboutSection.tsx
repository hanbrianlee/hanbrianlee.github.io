import React from 'react';
import { personalInfo } from '../data/portfolioContent';
import { Compass, Cpu, Navigation, Eye, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Background & Mission
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Engineering safety-critical intelligence for autonomous systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 space-y-4 text-zinc-600 dark:text-zinc-300 text-base leading-relaxed">
            {personalInfo.bioParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
            <p>
              My journey combines deep theoretical rigor in computer vision, camera geometry, and neural representation learning with hands-on systems engineering in robotics, edge acceleration, and automotive platforms.
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">3D Vision & Perception</h3>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                Multi-camera depth estimation, 3D bounding box regression, and multi-sensor fusion.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                  <Navigation className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">Mapping & Localization</h3>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                Visual odometry, semantic map learning, and decimeter-level highway/urban localization.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">Edge Optimization</h3>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                Low-latency TensorRT deployment, quantization, and real-time execution in vehicles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
