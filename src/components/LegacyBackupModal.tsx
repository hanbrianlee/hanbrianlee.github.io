import React, { useState } from 'react';
import { legacyPortfolioBackup } from '../data/legacyPortfolio';
import { X, FileText, FolderGit2, Check, Copy, ExternalLink, Archive, AlertCircle, Layers, FileCode2, Image } from 'lucide-react';

interface LegacyBackupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegacyBackupModal: React.FC<LegacyBackupModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'structure' | 'documents' | 'json'>('overview');

  if (!isOpen) return null;

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(legacyPortfolioBackup, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
              <Archive className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                Legacy Portfolio Structure & Archive Backup
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Analysis of <a href="https://hanbrianlee.github.io/" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-700 dark:hover:text-zinc-200">hanbrianlee.github.io</a> and repository backup
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-200 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800 pt-3 pb-2 text-xs font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'overview'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
            }`}
          >
            1. Architecture Overview
          </button>
          <button
            onClick={() => setActiveTab('structure')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'structure'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
            }`}
          >
            2. File Tree Breakdown
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'documents'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
            }`}
          >
            3. Preserved PDFs & Assets ({legacyPortfolioBackup.technicalDocuments.length})
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'json'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
            }`}
          >
            4. Raw JSON Backup
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 text-sm text-zinc-600 dark:text-zinc-300 pr-1">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-800/50">
                <h3 className="font-semibold text-zinc-900 dark:text-white text-sm mb-2 flex items-center gap-2">
                  <FolderGit2 className="h-4 w-4 text-indigo-500" />
                  Existing Site Tech Stack & Architecture
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-3">
                  Your current live site is built with <strong>Jekyll (v3.9.3)</strong>, a Ruby-based static site generator natively hosted on <strong>GitHub Pages</strong> from the <code className="px-1 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 font-mono text-[11px]">hanbrianlee.github.io</code> repository. It uses the <strong>Bulma Clean Theme</strong> by C.S. Rhymes.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <span className="text-zinc-400 block text-[10px] uppercase font-semibold">Live Site URL</span>
                    <span className="font-mono text-zinc-800 dark:text-zinc-200 font-medium">{legacyPortfolioBackup.url}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <span className="text-zinc-400 block text-[10px] uppercase font-semibold">GitHub Repo</span>
                    <span className="font-mono text-zinc-800 dark:text-zinc-200 font-medium">hanbrianlee/hanbrianlee.github.io</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 dark:border-emerald-800/40 dark:bg-emerald-950/20">
                  <h4 className="font-bold text-emerald-900 dark:text-emerald-300 text-xs uppercase tracking-wider mb-2">
                    What Was Custom Content (Preserved)
                  </h4>
                  <ul className="text-xs space-y-1.5 text-emerald-950 dark:text-emerald-200">
                    <li>• <strong>Hero & Bio:</strong> Brian Lee intro, quote from The Alchemist, aspirations in autonomous vehicles & humanoid robotics.</li>
                    <li>• <strong>Career:</strong> Senior Deep Learning Engineer at General Motors (UltraCruise perception/mapping/localization).</li>
                    <li>• <strong>Technical PDFs:</strong> AlphaPilot drone racing tests 1, 2, 3 reports, UltraDepth monocular depth estimation, SVHN CNN digits, RL control, Seam Carving, Camera 3D geometry.</li>
                    <li>• <strong>Photos:</strong> Profile portraits and background diagrams.</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
                  <h4 className="font-bold text-zinc-700 dark:text-zinc-300 text-xs uppercase tracking-wider mb-2">
                    What Was Starter Boilerplate (Cleaned Up)
                  </h4>
                  <ul className="text-xs space-y-1.5 text-zinc-600 dark:text-zinc-400">
                    <li>• Bulma Clean Theme demo pages (<code className="font-mono">example-recipe.md</code>, <code className="font-mono">sponsors.md</code>, <code className="font-mono">gallery.md</code>, <code className="font-mono">products.md</code>).</li>
                    <li>• Default demo blog posts ("Creating a post series", "Creating a docs site").</li>
                    <li>• Bulma Sass build dependencies and sample shop items.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'structure' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="rounded-xl border border-zinc-200 bg-zinc-900 text-zinc-200 p-4 overflow-x-auto">
                <pre>{`hanbrianlee.github.io/ (GitHub Pages Repository)
├── _config.yml               # Jekyll site settings, theme configs & plugins
├── _data/                    # YAML navigation and sample theme menus
│   ├── example_menu.yml      # Theme starter menus
│   └── navigation.yml        # Top navigation configuration
├── docs/                     # Documentation & Personal subpages
│   ├── personal/
│   │   ├── aboutme.md        # Personal background & infographic
│   │   └── education.md      # Education timeline
│   └── professional/
│       └── career.md         # GM UltraCruise & Career overview
├── portfolio_files/          # [KEY ASSETS] Research & Technical PDF Reports
│   ├── alphapilot_test1.pdf
│   ├── alphapilot_test2.pdf
│   ├── alphapilottechreports2and3.pdf
│   ├── ultradepth.pdf
│   ├── housenumber.pdf
│   ├── reinforcementlearning.pdf
│   ├── contentaware_seamcarving.pdf
│   ├── camera.pdf
│   └── Test 3 report.pdf
├── img/                      # Profile & Hero images
│   ├── profilepicsmall.jpeg
│   ├── profilepic1.png
│   ├── aboutmyself.png
│   ├── education.png
│   └── irobotimage.jpg
└── index.md                  # Homepage layout & Introduction`}</pre>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-3">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                All 9 technical reports from your original <code className="font-mono">/portfolio_files/</code> directory are preserved and linked directly:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {legacyPortfolioBackup.technicalDocuments.map((doc, i) => (
                  <div key={i} className="rounded-lg border border-zinc-200 bg-white p-3 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-bold text-zinc-900 dark:text-white text-xs">
                        {doc.title}
                      </h4>
                      <span className="text-[10px] font-mono text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
                        PDF
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mb-2">
                      {doc.description}
                    </p>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      <ExternalLink className="h-3 w-3" />
                      {doc.filename}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'json' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Full structured JSON export of your legacy portfolio metadata:
                </p>
                <button
                  onClick={handleCopyJson}
                  className="inline-flex items-center gap-1 rounded-md bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? 'Copied!' : 'Copy JSON'}
                </button>
              </div>

              <div className="max-h-72 overflow-y-auto rounded-xl border border-zinc-200 bg-zinc-900 p-4 font-mono text-[11px] text-zinc-300">
                <pre>{JSON.stringify(legacyPortfolioBackup, null, 2)}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            Backed up safely in <code className="font-mono">src/data/legacyPortfolio.ts</code>
          </span>
          <button
            onClick={onClose}
            className="rounded-lg bg-zinc-900 px-4 py-2 text-xs font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
