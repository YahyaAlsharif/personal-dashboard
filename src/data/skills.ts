export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Flutter'],
  },
  {
    title: 'Backend',
    skills: ['Java', 'Spring Boot', 'PostgreSQL'],
  },
  {
    title: 'AI / Machine Learning',
    skills: [
      'Python',
      'Machine learning fundamentals',
      'Deep learning fundamentals',
      'Neural networks',
      'Convolutional neural networks',
      'Computer vision concepts',
      'Applied AI problem-solving',
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
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ', 'Docker', 'Postman', 'Codex'],
  },
];
