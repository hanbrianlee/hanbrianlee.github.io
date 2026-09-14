import React, { useState } from 'react';
import { projects } from '../data/portfolioContent';
import { ProjectItem } from '../types';
import { FileText, ExternalLink, Download, Eye, Sparkles, Tag } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Autonomous Systems & Robotics', 'Computer Vision & 3D Geometry', 'Deep Learning & Neural Networks', 'Computational Photography'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Selected Work & Publications
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Research papers, technical reports & systems
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              All technical PDFs and benchmark reports preserved from your original portfolio files.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-lg border border-zinc-200 dark:border-zinc-700/60 self-start md:self-auto">
            {['All', 'Autonomous & Robotics', '3D Vision', 'Deep Learning'].map((cat) => {
              const isActive = (cat === 'All' && selectedCategory === 'All') ||
                               (cat === 'Autonomous & Robotics' && selectedCategory.includes('Autonomous')) ||
                               (cat === '3D Vision' && selectedCategory.includes('Computer Vision')) ||
                               (cat === 'Deep Learning' && selectedCategory.includes('Deep Learning'));
              return (
                <button
                  key={cat}
                  onClick={() => {
                    if (cat === 'All') setSelectedCategory('All');
                    else if (cat === 'Autonomous & Robotics') setSelectedCategory('Autonomous Systems & Robotics');
                    else if (cat === '3D Vision') setSelectedCategory('Computer Vision & 3D Geometry');
                    else if (cat === 'Deep Learning') setSelectedCategory('Deep Learning & Neural Networks');
                  }}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-white text-zinc-900 shadow-xs dark:bg-zinc-900 dark:text-white'
                      : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-[11px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-400">
                    <Tag className="h-3 w-3" />
                    {project.category.split('&')[0].trim()}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-800 dark:border-amber-800/40 dark:bg-amber-950/40 dark:text-amber-300">
                      <Sparkles className="h-3 w-3" />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1 mb-3">
                  {project.subtitle}
                </p>

                <p className="text-xs text-zinc-600 dark:text-zinc-300 line-clamp-3 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="space-y-1.5 mb-4">
                  {project.highlights.slice(0, 2).map((highlight, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                      <span className="mt-1 h-1 w-1 rounded-full bg-zinc-400 shrink-0" />
                      <span className="line-clamp-1">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 py-2 text-xs font-medium text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    Details & Report
                  </button>

                  {project.pdfUrl && (
                    <a
                      href={project.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2 rounded-lg border border-zinc-200 bg-white text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white transition-colors"
                      title={`Open original PDF (${project.pdfFilename})`}
                    >
                      <Download className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
