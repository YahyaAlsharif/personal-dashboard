import kaustAcademyLogo from '../assets/education/kaust-academy-logo.jpg';
import uquLogo from '../assets/education/uqu-logo.png';

export type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  status?: string;
  logoSrc: string;
  logoAlt: string;
  description: string;
  details?: string[];
  points: string[];
};

export const education: TimelineItem[] = [
  {
    title: 'Bachelor of Computer Software Engineering',
    organization: 'Umm Al-Qura University',
    period: '2023 - 2027 Expected',
    status: 'In progress',
    logoSrc: uquLogo,
    logoAlt: 'Umm Al-Qura University logo',
    description:
      'I am studying for a Bachelor of Computer Software Engineering at Umm Al-Qura University. Since starting in 2023, I have been building a foundation in how software systems are planned, designed, implemented, tested, documented, and presented.',
    details: [
      'My coursework and academic projects have helped me practice requirements engineering, software design, software architecture, software testing, system analysis, web development, algorithms, data structures, Java, and object-oriented programming. These were not only theory-based topics; several courses required submitted projects, reports, diagrams, testing work, and presentations.',
      'Through university work, I became more comfortable turning an idea into a structured software plan: understanding the problem, identifying users and requirements, writing use cases, preparing diagrams, documenting system behavior, and thinking about how the system should be tested before it is presented.',
      'This foundation became especially important in ESAS - Experience Saudi As a Saudi, my graduation project. ESAS gave me a chance to apply requirements gathering, SRS documentation, workflow planning, backend/frontend implementation support, testing, demo preparation, and project presentation in a larger project context.',
    ],
    points: [
      'Built foundations in requirements engineering, software design, software architecture, testing, system analysis, algorithms, data structures, Java, and web development.',
      'Completed academic work and submitted projects in software design, software testing, requirements engineering, system analysis, and web development.',
      'Practiced preparing documentation, use cases, diagrams, workflows, and testing plans.',
      'Applied these skills in ESAS, including requirements gathering, SRS preparation, workflow planning, implementation support, testing, demo readiness, and presentation.',
    ],
  },
  {
    title: 'Artificial Intelligence Specialization',
    organization: 'KAUST Academy',
    period: '2025 - 2026',
    status: 'Stage 4 upcoming / in progress',
    logoSrc: kaustAcademyLogo,
    logoAlt: 'KAUST Academy logo',
    description:
      'KAUST Academy has been one of the most important parts of my artificial intelligence learning journey. Through its multi-stage Artificial Intelligence Specialization, I progressed from foundational preparation into AI coursework, advanced learning, and selection into the final AI Summer Program.',
    details: [
      'The journey started with foundations such as Python and mathematics for AI, then moved into machine learning concepts, neural networks, PyTorch-style applied work, deep learning, convolutional neural networks, and computer vision. Each stage required learning quickly, applying the material, and competing for selection into the next stage.',
      'During the program, I completed KAUST Academy Introduction to Artificial Intelligence and KAUST Academy Advanced Artificial Intelligence. These stages helped connect the theory of AI with practical model-building concepts and gave me a stronger reason to continue learning beyond surface-level AI tool usage.',
      'After completing the first three stages, I advanced to the final AI Summer Program, ranking among the top 100 students selected from 14,000+ applicants.',
      'I was selected for Stage 4 of the KAUST Academy AI Summer Program at King Khalid University in Abha, where I expect to continue learning advanced AI topics and work on a practical AI project under KAUST Academy guidance.',
    ],
    points: [
      'Completed KAUST Academy Introduction to Artificial Intelligence.',
      'Completed KAUST Academy Advanced Artificial Intelligence.',
      'Studied Python, mathematics for AI, machine learning foundations, neural networks, PyTorch-style applied work, deep learning, CNNs, and computer vision.',
      'Advanced to the final AI Summer Program after completing the first three stages.',
      'Selected for Stage 4 at King Khalid University in Abha, which remains upcoming/in progress until completed.',
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
