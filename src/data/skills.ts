export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Full-Stack',
    skills: [
      'React',
      'Tailwind CSS',
      'Flutter',
      'Java',
      'Spring Boot',
      'PostgreSQL',
    ],
  },
  {
    title: 'Software Engineering',
    skills: [
      'Requirements engineering',
      'Software requirements specification',
      'System design',
      'Software testing',
      'Documentation',
      'Project coordination',
    ],
  },
  {
    title: 'Artificial Intelligence',
    skills: [
      'AI foundations',
      'Neural networks',
      'Deep learning fundamentals',
      'Computer vision concepts',
      'Applied AI problem-solving',
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      'Python',
      'Machine learning fundamentals',
      'Model training concepts',
      'Data preprocessing',
      'Model evaluation basics',
    ],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Codex'],
  },
];
