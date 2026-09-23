export interface PersonalInfo {
  name: string;
  role: string;
  degree: string;
  status: string;
  tagline: string;
  currentExploration: string;
  email: string;
  github: string;
  linkedin: string;
  leetcode: string;
  resumeUrl: string;
}

export interface FocusItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description?: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  features?: string[];
  learningOutcomes?: string[];
  topics?: string[];
  targetUsers?: string[];
  projectFocus?: string[];
  projectType?: string;
  githubUrl: string;
  liveUrl?: string;
  solvedCount?: string;
  isProductOrEntrepreneurship?: boolean;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  status?: 'past' | 'current' | 'future';
}

export interface EducationItem {
  degree: string;
  specialization: string;
  status: string;
  cgpa: string;
  relevantSubjects: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  icon: string;
}
