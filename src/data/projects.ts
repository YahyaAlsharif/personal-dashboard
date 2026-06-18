export type Project = {
  id?: string;
  name: string;
  status: string;
  role?: string;
  logoSrc?: string;
  logoAlt?: string;
  featured?: boolean;
  description: string;
  details?: string[];
  points: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 'project-esas',
    name: 'ESAS - Experience Saudi As a Saudi',
    status: 'Graduation Project',
    role: 'Coordinator',
    featured: true,
    description:
      'ESAS - Experience Saudi As a Saudi is a graduation project focused on presenting authentic, locally curated tourism experiences in Saudi Arabia. The project began as an idea about making local experiences easier to discover, then developed into a structured software engineering project with requirements, workflows, documentation, system design, prototype development, and a functional demo.',
    details: [
      'As project coordinator, I helped shape the idea, organize the direction of the project, connect the requirements and documentation work with implementation needs, and support the team in preparing the system for presentation.',
      'A major part of my contribution was thinking through what tourists and visitors might need when discovering authentic local experiences: how experiences should be listed, how providers could submit them, how admins could review them, and how users could browse, save, and interact with the platform. This work fed into requirements gathering, use cases, workflows, diagrams, and the Software Requirements Specification.',
      'I also supported the implementation direction across backend and frontend areas, including user flows, provider and admin workflows, experience listings, booking-related features, demo-ready behavior, and documentation alignment. The goal was not only to build screens, but to make the demo understandable, stable, and connected to the project requirements.',
      'The project was showcased at the INJAZ 2026 Graduation Projects Exhibition, where I helped present the poster and live demo, explain the idea and system design, and answer questions from instructors, reviewers, and visitors.',
      'After academic submission, I continued refining ESAS as a personal/public project by improving demo stability, polishing the frontend, aligning documentation, and preparing the project for stronger portfolio presentation and future feature expansion.',
    ],
    points: [
      'Served as project coordinator, helping organize the idea, direction, requirements, documentation, and demo preparation.',
      'Contributed to requirements gathering by thinking through tourism/user needs, provider workflows, admin review flows, and traveler interactions.',
      'Helped prepare SRS documentation, use cases, workflows, diagrams, and system behavior descriptions.',
      'Supported backend/frontend implementation direction, including user flows, provider/admin workflows, experience listings, booking-related features, and demo-ready functionality.',
      'Helped test and stabilize the demo for presentation.',
      'Presented the project poster and live demo at the INJAZ 2026 Graduation Projects Exhibition.',
      'Continued refining the project after academic submission for portfolio quality and future feature expansion.',
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
      'Home AI is a privacy-focused AI project idea exploring how home assistant commands can be processed more safely by keeping speech recognition on-device and using a privacy gate to decide what should stay local versus what can be offloaded.',
    details: [
      'The project is connected to real-world privacy concerns around AI home assistants, especially the question of how much personal speech or context should leave the home.',
    ],
    points: [
      'Explores on-device speech-to-text as a first privacy layer.',
      'Considers a classifier or privacy gate for private versus non-private commands.',
      'Focuses on deciding what should remain local and what can be safely offloaded.',
      'Planned as an AI-focused project tied to practical privacy and edge AI concerns.',
    ],
    tags: ['AI', 'Privacy', 'Speech-to-Text', 'Edge AI', 'Research-Oriented Project'],
  },
  {
    name: 'Personal Dashboard',
    status: 'Current Project',
    description:
      'This website is a public personal dashboard and portfolio built with React, TypeScript, Vite, and Tailwind CSS. It presents my background, education, projects, CV, and contact links in a clean static frontend-only site.',
    details: [
      'This project keeps my content organized in local data files and includes responsive layout behavior, light/dark mode, a CV viewer, anchor navigation, and scroll reveal animations without adding a backend.',
    ],
    points: [
      'Frontend-only and deployable as a static website.',
      'Uses structured content files for profile, education, projects, skills, and contact details.',
      'Includes light/dark mode, CV viewing and download, responsive cards, and scroll reveal animations.',
      'Built to stay simple, public-safe, and easy to maintain.',
    ],
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Static Website', 'Portfolio'],
  },
];
