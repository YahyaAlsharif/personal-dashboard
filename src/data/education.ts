export type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  status?: string;
  description: string;
  points: string[];
};

export const education: TimelineItem[] = [
  {
    title: 'Bachelor of Computer Software Engineering',
    organization: 'Umm Al-Qura University',
    period: '2023 - 2027 Expected',
    status: 'In progress',
    description:
      'A software engineering program focused on building strong technical, analytical, and project delivery foundations.',
    points: [
      'Maintaining a strong academic record with a GPA of 3.88 / 4.00.',
      'Studying software engineering, requirements engineering, software testing, system analysis, algorithms, data structures, and software development.',
      'Working on ESAS as a graduation project focused on authentic, locally curated tourism experiences in Saudi Arabia.',
    ],
  },
  {
    title: 'Artificial Intelligence Specialization',
    organization: 'KAUST Academy',
    period: '2025 - 2026',
    status: 'Stage 4 upcoming / in progress',
    description:
      'A multi-stage AI specialization covering foundational learning, advanced coursework, and selection into the final AI Summer Program.',
    points: [
      'Completed KAUST Academy Introduction to Artificial Intelligence and Advanced Artificial Intelligence stages.',
      'Advanced to the final Summer Program after completing the first three stages, ranking among the top 100 students selected from 14,000+ applicants.',
      'Studied machine learning foundations, neural networks, deep learning concepts, PyTorch basics, convolutional neural networks, and computer vision concepts.',
      'Preparing to begin Stage 4 of the KAUST Academy AI Summer Program at King Khalid University in Abha.',
    ],
  },
];

export const certificates = [
  'Advanced Artificial Intelligence - KAUST Academy',
  'Introduction to Artificial Intelligence - KAUST Academy',
  'Convolutional Neural Networks - DeepLearning.AI',
  'Fundamentals of Deep Learning - NVIDIA',
  'Linear Algebra for Machine Learning and Data Science - DeepLearning.AI',
];
