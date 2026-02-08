
export interface ProjectNode {
  id: string;
  title: string;
  problem: string;
  techStack: string[];
  impact: string;
  vizType: 'line' | 'bar' | 'scatter' | 'radar';
  githubUrl?: string;
}

export interface TimelineEvent {
  period: string;
  institution: string;
  qualification: string;
  achievement: string;
  type: 'school' | 'college' | 'work';
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Interest {
  name: string;
  icon: string;
  color: string;
  detail?: string;
}
