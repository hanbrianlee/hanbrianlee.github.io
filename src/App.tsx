/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { LegacyBackupModal } from './components/LegacyBackupModal';
import { ProjectItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isLegacyModalOpen, setIsLegacyModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-white dark:selection:text-zinc-900 font-sans">
      <Navbar onOpenLegacyModal={() => setIsLegacyModalOpen(true)} />
      
      <main>
        <Hero onOpenLegacyModal={() => setIsLegacyModalOpen(true)} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <SkillsSection />
      </main>

      <Footer onOpenLegacyModal={() => setIsLegacyModalOpen(true)} />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Legacy Jekyll Site Backup & Inspector Modal */}
      <LegacyBackupModal
        isOpen={isLegacyModalOpen}
        onClose={() => setIsLegacyModalOpen(false)}
      />
    </div>
  );
}

