import kaustAcademyLogo from '../assets/education/kaust-academy-logo.jpg';
import uquLogo from '../assets/education/uqu-logo.png';
import type { Language } from '../context/language';

export type LocalizedLink = {
  label: string;
  href: string;
};

export type Sidebar = {
  title: string;
  items: string[];
  href?: string;
};

export type Story = {
  id: string;
  title: string;
  paragraphs: string[];
  sidebars?: Sidebar[];
  highlightsTitle?: string;
  highlights?: string[];
  courseImage?: {
    alt: string;
    caption: string;
  };
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type EducationItem = {
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

export type Project = {
  id?: string;
  name: string;
  status: string;
  role?: string;
  featured?: boolean;
  description: string;
  details?: string[];
  points: string[];
  tags: string[];
};

export type Post = {
  title: string;
  description: string;
  embedUrl: string;
  postUrl: string;
  iframeTitle: string;
};

export type ContactOption = {
  title: string;
  description: string;
  href: string;
  buttonText: string;
  external: boolean;
};

export type DashboardContent = {
  header: {
    brand: string;
    theme: {
      light: string;
      dark: string;
      switchToLight: string;
      switchToDark: string;
    };
  };
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    role: string;
    profileName: string;
    profileLocation: string;
    profileAlt: string;
    links: LocalizedLink[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    paragraphs: string[];
    jumpLinks: LocalizedLink[];
    softwareEngineering: Story;
    artificialIntelligence: Story;
    sidebarLinkLabel: (item: string) => string;
  };
  skills: {
    title: string;
    description: string;
    groups: SkillGroup[];
  };
  education: {
    eyebrow: string;
    title: string;
    description: string;
    items: EducationItem[];
    certificatesTitle: string;
    certificates: string[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    roleLabel: string;
    items: Project[];
  };
  cv: {
    eyebrow: string;
    title: string;
    description: string;
    cardTitle: string;
    cardText: string;
    viewButton: string;
    downloadButton: string;
    closeButton: string;
    closeAriaLabel: string;
    modalTitle: string;
    fileName: string;
    href: string;
  };
  posts: {
    eyebrow: string;
    title: string;
    description: string;
    viewButton: string;
    items: Post[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    options: ContactOption[];
  };
  backToTop: string;
};

const cvFileName = 'Yahya_Alsharif_Software_Engineer_CV.pdf';
const cvHref = `${import.meta.env.BASE_URL}cv/${cvFileName}`;

const links = {
  linkedin: 'https://www.linkedin.com/in/yahya-sultan-alsharif-204103304',
  github: 'https://github.com/YahyaAlsharif',
  email: 'yahya.alsharif567@gmail.com',
  postEsas: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7470469804227932160',
  postKaust: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7439279422131589120',
  embedEsas:
    'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7470469804227932160?collapsed=1',
  embedKaust:
    'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7439279422131589120?collapsed=1',
};

export const localizedContent: Record<Language, DashboardContent> = {
  en: {
    header: {
      brand: 'Yahya Alsharif',
      theme: {
        light: 'Light',
        dark: 'Dark',
        switchToLight: 'Switch to light mode',
        switchToDark: 'Switch to dark mode',
      },
    },
    hero: {
      eyebrow: 'Personal Dashboard',
      title: "Hi, I'm Yahya Alsharif.",
      intro:
        'I am a Software Engineering student at Umm Al-Qura University with a growing focus on artificial intelligence, practical software development, and building projects that connect technical ideas with real user needs.',
      role: 'Software Engineering Student | AI Learner | Project Coordinator',
      profileName: 'Yahya Alsharif',
      profileLocation: 'Makkah Region, Saudi Arabia',
      profileAlt: 'Yahya Alsharif',
      links: [
        { label: 'About Me', href: '#about' },
        { label: 'Education', href: '#education' },
        { label: 'Projects', href: '#projects' },
        { label: 'CV', href: '#cv' },
        { label: 'Posts', href: '#posts' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'About Me',
      description:
        'A closer look at my interests, learning style, and how I approach the projects I build.',
      paragraphs: [
        'I am a Software Engineering student at Umm Al-Qura University and a KAUST Academy AI Specialization participant who advanced to the final summer program.',
        'I study software engineering in Makkah, and my interests sit between building software systems properly and understanding how artificial intelligence can be used in practical, responsible ways. I enjoy moving from the early idea stage into requirements, design, implementation, testing, documentation, and presentation, because that full process shows how an idea becomes something people can actually use.',
        'I also like researching concepts and learning how things work under the surface, especially in AI models, machine learning, deep learning, computer vision, and the tools used to build modern software. For me, the most interesting projects combine learning with building: understanding the problem, thinking about users, testing the solution, and improving it until it can be explained clearly to others.',
      ],
      jumpLinks: [
        { label: 'Software Engineering', href: '#about-software-engineering' },
        { label: 'Artificial Intelligence', href: '#about-artificial-intelligence' },
      ],
      softwareEngineering: {
        id: 'about-software-engineering',
        title: 'Software Engineering',
        paragraphs: [
          "I started studying for my Bachelor's degree in Software Engineering at Umm Al-Qura University in 2023. Since then, I have been building a foundation in requirements engineering, software design, software architecture, documentation, Java and object-oriented programming, software testing, system analysis, algorithms, and data structures.",
          "When I was in my third year of my bachelor's degree, I got the chance to attend NVIDIA's Deep Learning workshop and earn the NVIDIA Fundamentals of Deep Learning certificate. The workshop was led by an instructor from the university, and it gave me my first real glimpse of how artificial intelligence works in practice, beyond only using AI tools from the outside.",
          'I applied these software engineering skills in ESAS - Experience Saudi As a Saudi, our graduation project focused on authentic Saudi tourism experiences. My work included requirements gathering, understanding tourism and user needs, SRS documentation, workflows, implementation support, testing and demo readiness, and presenting the project clearly.',
        ],
        sidebars: [
          {
            title: 'Skills',
            items: [
              'Requirements Engineering',
              'Software Design',
              'Software Architecture',
              'Documentation',
              'Java',
              'Software Testing',
            ],
          },
          {
            title: 'Certificate',
            items: ['NVIDIA Fundamentals of Deep Learning'],
          },
          {
            title: 'Project',
            items: ['ESAS - Experience Saudi As a Saudi'],
            href: '#project-esas',
          },
        ],
      },
      artificialIntelligence: {
        id: 'about-artificial-intelligence',
        title: 'Artificial Intelligence',
        paragraphs: [
          'My first real glimpse into AI came through the NVIDIA Fundamentals of Deep Learning experience at Umm Al-Qura University. It made me want to learn not only how to use AI tools, but how AI systems actually work.',
          'I started with prompt engineering and practical ways to use AI, then moved deeper into the foundations: Python, mathematics, machine learning, neural networks, and model training.',
          'KAUST Academy became a major part of that journey. Its Artificial Intelligence Specialization is a competitive multi-stage program. Stage 1 focused on foundational preparation such as Python and mathematics. Stage 2 introduced machine learning, practical AI work, and applied PyTorch-style learning. Stage 3 focused on computer vision and CNN-related topics.',
          'Along the way, I completed KAUST Academy certificates in Introduction to Artificial Intelligence and Advanced Artificial Intelligence. After completing the first three stages, I advanced to the final Summer Program, ranking among the top 100 students selected from 14,000+ applicants.',
          'After Stage 2, I felt I needed to improve my practical performance, especially with applied PyTorch and coding work. Before Stage 3, I studied Convolutional Neural Networks through DeepLearning.AI on Coursera, taught by Andrew Ng, to prepare for computer vision and CNN topics.',
          'That preparation improved my confidence before Stage 3. During Stage 3, I focused heavily, studied consistently, and improved my performance. I was selected for Stage 4 of the KAUST Academy AI Summer Program at King Khalid University in Abha, where I expect to continue learning advanced AI topics and work on a practical AI project under KAUST Academy guidance.',
        ],
        highlights: [
          'Python',
          'Mathematics for AI',
          'Machine Learning',
          'PyTorch',
          'Neural Networks',
          'CNNs',
          'Computer Vision',
          'DeepLearning.AI CNN preparation',
          'KAUST Academy AI Specialization',
          'Stage 4 - King Khalid University, Abha',
        ],
        highlightsTitle: 'Highlights',
        courseImage: {
          alt: 'DeepLearning.AI Convolutional Neural Networks course screenshot from Coursera',
          caption: 'Convolutional Neural Networks preparation through DeepLearning.AI on Coursera.',
        },
      },
      sidebarLinkLabel: (item) => `View ${item} in the projects section`,
    },
    skills: {
      title: 'Skills & Tools',
      description: 'A compact view of the tools, foundations, and practices that support my work.',
      groups: [
        {
          title: 'Full-Stack',
          skills: ['React', 'Tailwind CSS', 'Flutter', 'Java', 'Spring Boot', 'PostgreSQL'],
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
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'Education',
      description:
        'My software engineering education alongside a focused KAUST Academy artificial intelligence journey.',
      items: [
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
      ],
      certificatesTitle: 'Certificates & Training',
      certificates: [
        'Advanced Artificial Intelligence - KAUST Academy',
        'Introduction to Artificial Intelligence - KAUST Academy',
        'Convolutional Neural Networks - DeepLearning.AI',
        'Fundamentals of Deep Learning - NVIDIA',
        'Linear Algebra for Machine Learning and Data Science - DeepLearning.AI',
      ],
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Projects',
      description:
        'The work that reflects my software engineering practice, AI direction, and public portfolio development.',
      roleLabel: 'Role',
      items: [
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
      ],
    },
    cv: {
      eyebrow: 'CV',
      title: 'CV',
      description:
        'A direct link to the full view of my profile, education, certificates, projects, and skills.',
      cardTitle: 'Yahya Alsharif Software Engineer CV',
      cardText:
        'Want the full version of my background, education, certificates, projects, and skills? You can view or download my CV here.',
      viewButton: 'View CV',
      downloadButton: 'Download CV',
      closeButton: 'Close',
      closeAriaLabel: 'Close CV viewer',
      modalTitle: 'Yahya Alsharif - CV | Software Engineering & AI',
      fileName: cvFileName,
      href: cvHref,
    },
    posts: {
      eyebrow: 'POSTS',
      title: 'Posts',
      description:
        'LinkedIn posts that highlight important milestones in my software engineering and AI journey.',
      viewButton: 'View on LinkedIn',
      items: [
        {
          title: 'مشروع التخرج / ESAS',
          description:
            'A LinkedIn milestone post about ESAS, my graduation project focused on authentic, locally curated tourism experiences in Saudi Arabia.',
          embedUrl: links.embedEsas,
          postUrl: links.postEsas,
          iframeTitle: 'LinkedIn post about Graduation Project and ESAS',
        },
        {
          title: 'أكاديمية كاوست: من المرحلة الثالثة إلى المرحلة الرابعة',
          description:
            'A LinkedIn milestone post about finishing KAUST Academy Stage 3 and being accepted into Stage 4 of the AI journey.',
          embedUrl: links.embedKaust,
          postUrl: links.postKaust,
          iframeTitle: 'LinkedIn post about KAUST Academy Stage 3 and Stage 4',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Contact',
      description:
        'For collaboration, opportunities, or a professional hello, LinkedIn, email, and GitHub are the best ways to reach me.',
      options: [
        {
          title: 'LinkedIn',
          description: 'Connect with me professionally and follow my project updates.',
          href: links.linkedin,
          buttonText: 'Connect on LinkedIn',
          external: true,
        },
        {
          title: 'Email',
          description: 'Send a direct message about opportunities, collaboration, or questions.',
          href: `mailto:${links.email}`,
          buttonText: 'Send Email',
          external: false,
        },
        {
          title: 'GitHub',
          description: 'View my public repositories, project work, and development activity.',
          href: links.github,
          buttonText: 'View GitHub',
          external: true,
        },
      ],
    },
    backToTop: 'Back to Top',
  },
  ar: {
    header: {
      brand: 'يحيى الشريف',
      theme: {
        light: 'فاتح',
        dark: 'داكن',
        switchToLight: 'التبديل إلى الوضع الفاتح',
        switchToDark: 'التبديل إلى الوضع الداكن',
      },
    },
    hero: {
      eyebrow: 'Personal Dashboard',
      title: 'مرحبًا، أنا يحيى الشريف.',
      intro:
        'أنا طالب هندسة برمجيات في جامعة أم القرى، ولدي اهتمام متنامٍ بالذكاء الاصطناعي، وتطوير البرمجيات بشكل عملي، وبناء مشاريع تربط الأفكار التقنية باحتياجات المستخدمين الحقيقية.',
      role: 'طالب هندسة برمجيات | متعلم في الذكاء الاصطناعي | منسق مشاريع',
      profileName: 'يحيى الشريف',
      profileLocation: 'منطقة مكة المكرمة، المملكة العربية السعودية',
      profileAlt: 'يحيى الشريف',
      links: [
        { label: 'نبذة عني', href: '#about' },
        { label: 'التعليم', href: '#education' },
        { label: 'المشاريع', href: '#projects' },
        { label: 'السيرة الذاتية', href: '#cv' },
        { label: 'المنشورات', href: '#posts' },
        { label: 'التواصل', href: '#contact' },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'نبذة عني',
      description: 'نظرة أقرب على اهتماماتي، وطريقة تعلمي، وكيف أتعامل مع المشاريع التي أعمل عليها.',
      paragraphs: [
        'أنا طالب هندسة برمجيات في جامعة أم القرى، ومشارك في تخصص الذكاء الاصطناعي في أكاديمية كاوست، وقد تأهلت إلى البرنامج الصيفي النهائي.',
        'أدرس هندسة البرمجيات في مكة المكرمة، وتقع اهتماماتي بين بناء الأنظمة البرمجية بطريقة صحيحة وفهم كيف يمكن استخدام الذكاء الاصطناعي بطرق عملية ومسؤولة. أستمتع بالانتقال من مرحلة الفكرة الأولى إلى المتطلبات، والتصميم، والتنفيذ، والاختبار، والتوثيق، والعرض، لأن هذه الرحلة الكاملة توضح كيف تتحول الفكرة إلى شيء يمكن للناس استخدامه فعلًا.',
        'أحب أيضًا البحث في المفاهيم وفهم كيف تعمل الأشياء من الداخل، خصوصًا في نماذج الذكاء الاصطناعي، وتعلم الآلة، والتعلم العميق، والرؤية الحاسوبية، والأدوات المستخدمة في بناء البرمجيات الحديثة. بالنسبة لي، أكثر المشاريع إثارة للاهتمام هي التي تجمع بين التعلم والبناء: فهم المشكلة، والتفكير في المستخدمين، واختبار الحل، وتحسينه حتى يمكن شرحه بوضوح للآخرين.',
      ],
      jumpLinks: [
        { label: 'هندسة البرمجيات', href: '#about-software-engineering' },
        { label: 'الذكاء الاصطناعي', href: '#about-artificial-intelligence' },
      ],
      softwareEngineering: {
        id: 'about-software-engineering',
        title: 'هندسة البرمجيات',
        paragraphs: [
          'بدأت دراسة درجة البكالوريوس في هندسة البرمجيات في جامعة أم القرى عام 2023. ومنذ ذلك الوقت، أعمل على بناء أساس قوي في هندسة المتطلبات، وتصميم البرمجيات، ومعمارية البرمجيات، والتوثيق، ولغة Java والبرمجة كائنية التوجه، واختبار البرمجيات، وتحليل الأنظمة، والخوارزميات، وهياكل البيانات.',
          'عندما كنت في سنتي الثالثة من مرحلة البكالوريوس، أتيحت لي فرصة حضور ورشة NVIDIA في أساسيات التعلم العميق والحصول على شهادة NVIDIA Fundamentals of Deep Learning. قاد الورشة أحد المدربين من الجامعة، وكانت أول لمحة حقيقية لي عن كيفية عمل الذكاء الاصطناعي بشكل عملي، بعيدًا عن مجرد استخدام أدوات الذكاء الاصطناعي من الخارج.',
          'طبقت هذه المهارات في مشروع ESAS - Experience Saudi As a Saudi، وهو مشروع تخرجنا الذي يركز على تجارب سياحية سعودية أصيلة. شمل عملي جمع المتطلبات، وفهم احتياجات السياحة والمستخدمين، وتوثيق SRS، وإعداد مسارات العمل، ودعم التنفيذ، والاختبار وتجهيز العرض التجريبي، وتقديم المشروع بوضوح.',
        ],
        sidebars: [
          {
            title: 'المهارات',
            items: [
              'هندسة المتطلبات',
              'تصميم البرمجيات',
              'معمارية البرمجيات',
              'التوثيق',
              'Java',
              'اختبار البرمجيات',
            ],
          },
          {
            title: 'الشهادة',
            items: ['NVIDIA Fundamentals of Deep Learning'],
          },
          {
            title: 'المشروع',
            items: ['ESAS - Experience Saudi As a Saudi'],
            href: '#project-esas',
          },
        ],
      },
      artificialIntelligence: {
        id: 'about-artificial-intelligence',
        title: 'الذكاء الاصطناعي',
        paragraphs: [
          'جاءت أول لمحة حقيقية لي في الذكاء الاصطناعي من خلال تجربة NVIDIA Fundamentals of Deep Learning في جامعة أم القرى. جعلتني هذه التجربة أرغب في تعلم ليس فقط كيفية استخدام أدوات الذكاء الاصطناعي، بل كيف تعمل أنظمة الذكاء الاصطناعي فعليًا.',
          'بدأت بهندسة الأوامر والطرق العملية لاستخدام الذكاء الاصطناعي، ثم تعمقت أكثر في الأساسيات: Python، والرياضيات، وتعلم الآلة، والشبكات العصبية، وتدريب النماذج.',
          'أصبحت أكاديمية كاوست جزءًا مهمًا من هذه الرحلة. تخصص الذكاء الاصطناعي فيها هو برنامج تنافسي متعدد المراحل. ركزت المرحلة الأولى على الإعداد الأساسي مثل Python والرياضيات. وقدمت المرحلة الثانية تعلم الآلة، والعمل العملي في الذكاء الاصطناعي، وتطبيقات بأسلوب PyTorch. أما المرحلة الثالثة فركزت على الرؤية الحاسوبية وموضوعات مرتبطة بالشبكات العصبية الالتفافية CNN.',
          'خلال هذه الرحلة، أكملت شهادات أكاديمية كاوست في Introduction to Artificial Intelligence وAdvanced Artificial Intelligence. وبعد إكمال المراحل الثلاث الأولى، تأهلت إلى البرنامج الصيفي النهائي، ضمن أفضل 100 طالب تم اختيارهم من بين أكثر من 14,000 متقدم.',
          'بعد المرحلة الثانية، شعرت أنني بحاجة إلى تحسين أدائي العملي، خصوصًا في تطبيقات PyTorch والبرمجة. وقبل المرحلة الثالثة، درست مقرر Convolutional Neural Networks من DeepLearning.AI على Coursera، والذي يقدمه Andrew Ng، استعدادًا لموضوعات الرؤية الحاسوبية وCNN.',
          'ساعدني هذا التحضير على زيادة ثقتي قبل المرحلة الثالثة. وخلال المرحلة الثالثة، ركزت بشكل كبير، ودرست باستمرار، وحسنت أدائي. تم اختياري للمرحلة الرابعة من برنامج أكاديمية كاوست الصيفي للذكاء الاصطناعي في جامعة الملك خالد في أبها، حيث أتوقع مواصلة تعلم موضوعات متقدمة في الذكاء الاصطناعي والعمل على مشروع عملي بإشراف أكاديمية كاوست.',
        ],
        highlights: [
          'Python',
          'الرياضيات للذكاء الاصطناعي',
          'تعلم الآلة',
          'PyTorch',
          'الشبكات العصبية',
          'CNNs',
          'الرؤية الحاسوبية',
          'التحضير لمقرر CNN من DeepLearning.AI',
          'تخصص الذكاء الاصطناعي في أكاديمية كاوست',
          'المرحلة الرابعة - جامعة الملك خالد، أبها',
        ],
        highlightsTitle: 'أبرز المحاور',
        courseImage: {
          alt: 'لقطة شاشة لمقرر Convolutional Neural Networks من DeepLearning.AI على Coursera',
          caption: 'التحضير لموضوعات الشبكات العصبية الالتفافية من خلال مقرر DeepLearning.AI على Coursera.',
        },
      },
      sidebarLinkLabel: (item) => `عرض ${item} في قسم المشاريع`,
    },
    skills: {
      title: 'المهارات والأدوات',
      description: 'نظرة مختصرة على الأدوات والأساسيات والممارسات التي تدعم عملي.',
      groups: [
        {
          title: 'Full-Stack',
          skills: ['React', 'Tailwind CSS', 'Flutter', 'Java', 'Spring Boot', 'PostgreSQL'],
        },
        {
          title: 'هندسة البرمجيات',
          skills: [
            'هندسة المتطلبات',
            'مواصفات متطلبات البرمجيات',
            'تصميم الأنظمة',
            'اختبار البرمجيات',
            'التوثيق',
            'تنسيق المشاريع',
          ],
        },
        {
          title: 'الذكاء الاصطناعي',
          skills: [
            'أساسيات الذكاء الاصطناعي',
            'الشبكات العصبية',
            'أساسيات التعلم العميق',
            'مفاهيم الرؤية الحاسوبية',
            'حل المشكلات بالذكاء الاصطناعي التطبيقي',
          ],
        },
        {
          title: 'تعلم الآلة',
          skills: [
            'Python',
            'أساسيات تعلم الآلة',
            'مفاهيم تدريب النماذج',
            'معالجة البيانات',
            'أساسيات تقييم النماذج',
          ],
        },
        {
          title: 'الأدوات',
          skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Codex'],
        },
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'التعليم',
      description: 'دراستي في هندسة البرمجيات إلى جانب رحلة مركزة في الذكاء الاصطناعي من خلال أكاديمية كاوست.',
      items: [
        {
          title: 'Bachelor of Computer Software Engineering',
          organization: 'جامعة أم القرى',
          period: '2023 - 2027 متوقع',
          status: 'قيد الدراسة',
          logoSrc: uquLogo,
          logoAlt: 'شعار جامعة أم القرى',
          description:
            'أدرس درجة البكالوريوس في هندسة البرمجيات الحاسوبية في جامعة أم القرى. ومنذ بدايتي في عام 2023، أعمل على بناء أساس في كيفية تخطيط الأنظمة البرمجية، وتصميمها، وتنفيذها، واختبارها، وتوثيقها، وعرضها.',
          details: [
            'ساعدتني المقررات والمشاريع الأكاديمية على ممارسة هندسة المتطلبات، وتصميم البرمجيات، ومعمارية البرمجيات، واختبار البرمجيات، وتحليل الأنظمة، وتطوير الويب، والخوارزميات، وهياكل البيانات، وJava، والبرمجة كائنية التوجه. لم تكن هذه الموضوعات نظرية فقط؛ فقد تطلبت عدة مقررات مشاريع مسلمة، وتقارير، ومخططات، وأعمال اختبار، وعروض تقديمية.',
            'من خلال العمل الجامعي، أصبحت أكثر قدرة على تحويل الفكرة إلى خطة برمجية منظمة: فهم المشكلة، وتحديد المستخدمين والمتطلبات، وكتابة حالات الاستخدام، وإعداد المخططات، وتوثيق سلوك النظام، والتفكير في كيفية اختبار النظام قبل عرضه.',
            'أصبح هذا الأساس مهمًا بشكل خاص في ESAS - Experience Saudi As a Saudi، مشروع تخرجي. منحني ESAS فرصة لتطبيق جمع المتطلبات، وتوثيق SRS، وتخطيط مسارات العمل، ودعم تنفيذ الواجهة الخلفية والأمامية، والاختبار، وتجهيز العرض التجريبي، وتقديم المشروع ضمن سياق مشروع أكبر.',
          ],
          points: [
            'بنيت أساسًا في هندسة المتطلبات، وتصميم البرمجيات، ومعمارية البرمجيات، والاختبار، وتحليل الأنظمة، والخوارزميات، وهياكل البيانات، وJava، وتطوير الويب.',
            'أنجزت أعمالًا أكاديمية ومشاريع مسلمة في تصميم البرمجيات، واختبار البرمجيات، وهندسة المتطلبات، وتحليل الأنظمة، وتطوير الويب.',
            'مارست إعداد التوثيق، وحالات الاستخدام، والمخططات، ومسارات العمل، وخطط الاختبار.',
            'طبقت هذه المهارات في ESAS، بما في ذلك جمع المتطلبات، وإعداد SRS، وتخطيط مسارات العمل، ودعم التنفيذ، وتجهيز العرض التجريبي، وتقديم المشروع.',
          ],
        },
        {
          title: 'Artificial Intelligence Specialization',
          organization: 'أكاديمية كاوست',
          period: '2025 - 2026',
          status: 'المرحلة الرابعة قادمة / قيد التنفيذ',
          logoSrc: kaustAcademyLogo,
          logoAlt: 'شعار أكاديمية كاوست',
          description:
            'كانت أكاديمية كاوست واحدة من أهم أجزاء رحلتي في تعلم الذكاء الاصطناعي. من خلال تخصص الذكاء الاصطناعي متعدد المراحل، انتقلت من الإعداد التأسيسي إلى مقررات الذكاء الاصطناعي، والتعلم المتقدم، والاختيار للبرنامج الصيفي النهائي للذكاء الاصطناعي.',
          details: [
            'بدأت الرحلة بأساسيات مثل Python والرياضيات للذكاء الاصطناعي، ثم انتقلت إلى مفاهيم تعلم الآلة، والشبكات العصبية، والعمل التطبيقي بأسلوب PyTorch، والتعلم العميق، والشبكات العصبية الالتفافية، والرؤية الحاسوبية. كانت كل مرحلة تتطلب التعلم بسرعة، وتطبيق المادة، والمنافسة للانتقال إلى المرحلة التالية.',
            'خلال البرنامج، أكملت KAUST Academy Introduction to Artificial Intelligence وKAUST Academy Advanced Artificial Intelligence. ساعدتني هذه المراحل على ربط نظرية الذكاء الاصطناعي بمفاهيم بناء النماذج عمليًا، وأعطتني دافعًا أقوى لمواصلة التعلم بعيدًا عن الاستخدام السطحي لأدوات الذكاء الاصطناعي.',
            'بعد إكمال المراحل الثلاث الأولى، تأهلت إلى البرنامج الصيفي النهائي للذكاء الاصطناعي، ضمن أفضل 100 طالب تم اختيارهم من بين أكثر من 14,000 متقدم.',
            'تم اختياري للمرحلة الرابعة من برنامج أكاديمية كاوست الصيفي للذكاء الاصطناعي في جامعة الملك خالد في أبها، حيث أتوقع مواصلة تعلم موضوعات متقدمة في الذكاء الاصطناعي والعمل على مشروع عملي بإشراف أكاديمية كاوست.',
          ],
          points: [
            'أكملت KAUST Academy Introduction to Artificial Intelligence.',
            'أكملت KAUST Academy Advanced Artificial Intelligence.',
            'درست Python، والرياضيات للذكاء الاصطناعي، وأساسيات تعلم الآلة، والشبكات العصبية، والعمل التطبيقي بأسلوب PyTorch، والتعلم العميق، وCNNs، والرؤية الحاسوبية.',
            'تأهلت إلى البرنامج الصيفي النهائي بعد إكمال المراحل الثلاث الأولى.',
            'تم اختياري للمرحلة الرابعة في جامعة الملك خالد في أبها، وهي لا تزال قادمة / قيد التنفيذ حتى اكتمالها.',
          ],
        },
      ],
      certificatesTitle: 'الشهادات والتدريب',
      certificates: [
        'Advanced Artificial Intelligence - KAUST Academy',
        'Introduction to Artificial Intelligence - KAUST Academy',
        'Convolutional Neural Networks - DeepLearning.AI',
        'Fundamentals of Deep Learning - NVIDIA',
        'Linear Algebra for Machine Learning and Data Science - DeepLearning.AI',
      ],
    },
    projects: {
      eyebrow: 'Projects',
      title: 'المشاريع',
      description:
        'الأعمال التي تعكس ممارستي لهندسة البرمجيات، واتجاهي في الذكاء الاصطناعي، وتطوير ملفي الشخصي العام.',
      roleLabel: 'الدور',
      items: [
        {
          id: 'project-esas',
          name: 'ESAS - Experience Saudi As a Saudi',
          status: 'مشروع تخرج',
          role: 'منسق',
          featured: true,
          description:
            'ESAS - Experience Saudi As a Saudi هو مشروع تخرج يركز على عرض تجارب سياحية أصيلة ومنتقاة محليًا في المملكة العربية السعودية. بدأ المشروع كفكرة حول تسهيل اكتشاف التجارب المحلية، ثم تطور إلى مشروع هندسة برمجيات منظم يتضمن المتطلبات، ومسارات العمل، والتوثيق، وتصميم النظام، وتطوير النموذج الأولي، وعرضًا تجريبيًا وظيفيًا.',
          details: [
            'بصفتي منسق المشروع، ساعدت في تشكيل الفكرة، وتنظيم اتجاه المشروع، وربط أعمال المتطلبات والتوثيق باحتياجات التنفيذ، ودعم الفريق في تجهيز النظام للعرض.',
            'كان جزء مهم من مساهمتي هو التفكير فيما قد يحتاجه السياح والزوار عند اكتشاف تجارب محلية أصيلة: كيف ينبغي عرض التجارب، وكيف يمكن لمقدمي الخدمات إرسالها، وكيف يمكن للمشرفين مراجعتها، وكيف يمكن للمستخدمين التصفح والحفظ والتفاعل مع المنصة. انعكس هذا العمل على جمع المتطلبات، وحالات الاستخدام، ومسارات العمل، والمخططات، ووثيقة مواصفات متطلبات البرمجيات.',
            'دعمت أيضًا اتجاه التنفيذ في جوانب الواجهة الخلفية والأمامية، بما في ذلك تدفقات المستخدمين، ومسارات مقدمي الخدمات والمشرفين، وقوائم التجارب، والميزات المرتبطة بالحجز، والسلوك المناسب للعرض التجريبي، ومواءمة التوثيق. لم يكن الهدف بناء الشاشات فقط، بل جعل العرض التجريبي مفهومًا ومستقرًا ومرتبطًا بمتطلبات المشروع.',
            'عُرض المشروع في معرض INJAZ 2026 لمشاريع التخرج، حيث ساعدت في تقديم الملصق والعرض التجريبي المباشر، وشرح الفكرة وتصميم النظام، والإجابة عن أسئلة أعضاء هيئة التدريس والمراجعين والزوار.',
            'بعد التسليم الأكاديمي، واصلت تحسين ESAS كمشروع شخصي/عام من خلال تحسين استقرار العرض التجريبي، وصقل الواجهة الأمامية، ومواءمة التوثيق، وتجهيز المشروع لعرض أقوى في ملفي الشخصي وتوسيع الميزات مستقبلًا.',
          ],
          points: [
            'عملت بصفتي منسق المشروع، وساعدت في تنظيم الفكرة، والاتجاه، والمتطلبات، والتوثيق، وتجهيز العرض التجريبي.',
            'ساهمت في جمع المتطلبات من خلال التفكير في احتياجات السياحة والمستخدمين، ومسارات مقدمي الخدمات، وتدفقات مراجعة المشرفين، وتفاعلات المسافرين.',
            'ساعدت في إعداد توثيق SRS، وحالات الاستخدام، ومسارات العمل، والمخططات، ووصف سلوك النظام.',
            'دعمت اتجاه تنفيذ الواجهة الخلفية والأمامية، بما في ذلك تدفقات المستخدمين، ومسارات مقدمي الخدمات والمشرفين، وقوائم التجارب، والميزات المرتبطة بالحجز، والوظائف الجاهزة للعرض التجريبي.',
            'ساعدت في اختبار العرض التجريبي واستقراره قبل التقديم.',
            'قدمت ملصق المشروع والعرض التجريبي المباشر في معرض INJAZ 2026 لمشاريع التخرج.',
            'واصلت تحسين المشروع بعد التسليم الأكاديمي لرفع جودته كجزء من ملفي الشخصي وتوسيع ميزاته مستقبلًا.',
          ],
          tags: [
            'هندسة البرمجيات',
            'مشروع تخرج',
            'هندسة المتطلبات',
            'التوثيق',
            'Backend / Frontend',
            'تنسيق المشاريع',
          ],
        },
        {
          name: 'Home AI Project',
          status: 'مخطط / مشروع حالي',
          description:
            'Home AI هو مشروع ذكاء اصطناعي يركز على الخصوصية، ويستكشف كيف يمكن معالجة أوامر المساعدات المنزلية بشكل أكثر أمانًا من خلال إبقاء التعرف على الكلام داخل الجهاز، واستخدام بوابة خصوصية لتحديد ما يجب أن يبقى محليًا وما يمكن إرساله إلى السحابة.',
          details: [
            'يرتبط المشروع بمخاوف واقعية حول خصوصية مساعدات الذكاء الاصطناعي المنزلية، خصوصًا سؤال: ما مقدار الكلام أو السياق الشخصي الذي ينبغي أن يغادر المنزل؟',
          ],
          points: [
            'يستكشف التعرف على الكلام داخل الجهاز كطبقة أولى للخصوصية.',
            'يدرس استخدام مصنف أو بوابة خصوصية للتمييز بين الأوامر الخاصة وغير الخاصة.',
            'يركز على تحديد ما ينبغي أن يبقى محليًا وما يمكن إرساله بأمان.',
            'مخطط كمشروع يركز على الذكاء الاصطناعي ويرتبط بمخاوف عملية في الخصوصية والذكاء الاصطناعي على الطرفية.',
          ],
          tags: ['الذكاء الاصطناعي', 'الخصوصية', 'التعرف على الكلام', 'Edge AI', 'مشروع ذو توجه بحثي'],
        },
        {
          name: 'Personal Dashboard',
          status: 'مشروع حالي',
          description:
            'هذا الموقع هو لوحة معلومات شخصية وملف أعمال عام مبني باستخدام React وTypeScript وVite وTailwind CSS. يعرض خلفيتي، وتعليمي، ومشاريعي، وسيرتي الذاتية، وروابط التواصل في موقع ثابت ونظيف يعمل بالواجهة الأمامية فقط.',
          details: [
            'يحافظ هذا المشروع على تنظيم المحتوى في ملفات بيانات محلية، ويتضمن تصميمًا متجاوبًا، ووضعًا فاتحًا/داكنًا، وعارضًا للسيرة الذاتية، وتنقلًا عبر الأقسام، وحركات ظهور عند التمرير دون إضافة واجهة خلفية.',
          ],
          points: [
            'يعمل بالواجهة الأمامية فقط ويمكن نشره كموقع ثابت.',
            'يستخدم ملفات محتوى منظمة للملف الشخصي، والتعليم، والمشاريع، والمهارات، وروابط التواصل.',
            'يتضمن الوضع الفاتح/الداكن، وعرض السيرة الذاتية وتحميلها، وبطاقات متجاوبة، وحركات ظهور عند التمرير.',
            'بُني ليبقى بسيطًا، وآمنًا للنشر العام، وسهل الصيانة.',
          ],
          tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'موقع ثابت', 'ملف أعمال'],
        },
      ],
    },
    cv: {
      eyebrow: 'CV',
      title: 'السيرة الذاتية',
      description: 'رابط مباشر للاطلاع الكامل على ملفي، وتعليمي، وشهاداتي، ومشاريعي، ومهاراتي.',
      cardTitle: 'السيرة الذاتية ليحيى الشريف - هندسة البرمجيات والذكاء الاصطناعي',
      cardText:
        'هل تريد الاطلاع على النسخة الكاملة من خلفيتي، وتعليمي، وشهاداتي، ومشاريعي، ومهاراتي؟ يمكنك عرض سيرتي الذاتية أو تحميلها من هنا.',
      viewButton: 'عرض السيرة الذاتية',
      downloadButton: 'تحميل السيرة الذاتية',
      closeButton: 'إغلاق',
      closeAriaLabel: 'إغلاق عارض السيرة الذاتية',
      modalTitle: 'السيرة الذاتية ليحيى الشريف | هندسة البرمجيات والذكاء الاصطناعي',
      fileName: cvFileName,
      href: cvHref,
    },
    posts: {
      eyebrow: 'POSTS',
      title: 'المنشورات',
      description: 'منشورات على LinkedIn تبرز محطات مهمة في رحلتي في هندسة البرمجيات والذكاء الاصطناعي.',
      viewButton: 'عرض على LinkedIn',
      items: [
        {
          title: 'Graduation Project / ESAS',
          description:
            'منشور مهم على LinkedIn حول ESAS، مشروع تخرجي الذي يركز على تجارب سياحية أصيلة ومنتقاة محليًا في المملكة العربية السعودية.',
          embedUrl: links.embedEsas,
          postUrl: links.postEsas,
          iframeTitle: 'LinkedIn post about Graduation Project and ESAS',
        },
        {
          title: 'KAUST Academy Stage 3 to Stage 4',
          description:
            'منشور مهم على LinkedIn حول إكمال المرحلة الثالثة من أكاديمية كاوست والقبول في المرحلة الرابعة من رحلة الذكاء الاصطناعي.',
          embedUrl: links.embedKaust,
          postUrl: links.postKaust,
          iframeTitle: 'LinkedIn post about KAUST Academy Stage 3 and Stage 4',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'التواصل',
      description:
        'للتعاون، أو الفرص، أو التواصل المهني، تعد LinkedIn والبريد الإلكتروني وGitHub أفضل الطرق للوصول إليّ.',
      options: [
        {
          title: 'LinkedIn',
          description: 'تواصل معي مهنيًا وتابع تحديثات مشاريعي.',
          href: links.linkedin,
          buttonText: 'التواصل عبر LinkedIn',
          external: true,
        },
        {
          title: 'Email',
          description: 'أرسل رسالة مباشرة حول الفرص، أو التعاون، أو الأسئلة.',
          href: `mailto:${links.email}`,
          buttonText: 'إرسال بريد إلكتروني',
          external: false,
        },
        {
          title: 'GitHub',
          description: 'اطّلع على مستودعاتي العامة، وأعمالي البرمجية، ونشاطي في التطوير.',
          href: links.github,
          buttonText: 'عرض GitHub',
          external: true,
        },
      ],
    },
    backToTop: 'العودة إلى الأعلى',
  },
};
