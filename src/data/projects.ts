export type Project = {
  name: string;
  status: string;
  role?: string;
  description: string;
  points: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    name: 'ESAS - Experience Saudi As a Saudi',
    status: 'Graduation Project',
    role: 'Coordinator',
    description:
      'A graduation project focused on presenting authentic, locally curated tourism experiences in Saudi Arabia. The project developed from brainstorming and requirements gathering into system design, documentation, prototype development, and a functional demo.',
    points: [
      'Served as project coordinator.',
      'Contributed to brainstorming, planning, requirements gathering, and system direction.',
      'Helped prepare software requirements, system workflows, use cases, diagrams, and SRS documentation.',
      'Supported backend and frontend implementation planning and demo readiness.',
      'Presented the project poster and live demo at the INJAZ 2026 Graduation Projects Exhibition.',
    ],
    tags: [
      'Software Engineering',
      'Graduation Project',
      'Requirements Engineering',
      'Documentation',
      'Backend / Frontend',
      'Project Coordination',
    ],
  },
  {
    name: 'Home AI Project',
    status: 'Planned / Current Project',
    description:
      'A privacy-focused AI project idea exploring how home assistant commands can be processed more safely by keeping speech recognition on-device and using a privacy gate to decide what should or should not leave the home.',
    points: [
      'Focuses on privacy-aware AI.',
      'Explores on-device speech-to-text.',
      'Considers a classifier or gating system for private versus non-private commands.',
      'Planned as an AI-focused project connected to real-world privacy concerns.',
    ],
    tags: ['AI', 'Privacy', 'Speech-to-Text', 'Edge AI', 'Research-Oriented Project'],
  },
  {
    name: 'Personal Dashboard',
    status: 'Current Project',
    description:
      'A public personal dashboard built with React, TypeScript, Vite, and Tailwind CSS to present background, projects, CV, and contact links in a clean static website.',
    points: [
      'Frontend-only and deployable as a static website.',
      'Organized around clear sections, anchor navigation, and structured local content.',
      'Designed to support light and dark mode without extra dependencies.',
    ],
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Static Website', 'Portfolio'],
  },
];
