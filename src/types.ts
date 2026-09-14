export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription?: string;
  highlights: string[];
  tags: string[];
  pdfUrl?: string;
  pdfFilename?: string;
  date?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  team: string;
  period: string;
  location: string;
  focus: string;
  bulletPoints: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string }[];
}
