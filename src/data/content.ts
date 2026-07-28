import kaustAcademyLogo from '../assets/education/kaust-academy-logo.jpg';
import uquLogo from '../assets/education/uqu-logo.png';
import type { Language } from '../context/language';

export type LocalizedLink = {
  label: string;
  href: string;
  external?: boolean;
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
  points: string[];
  tags: string[];
  image?: {
    src: string;
    alt: string;
  };
  links?: LocalizedLink[];
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
    homeLabel: string;
    navigationLabel: string;
    nav: LocalizedLink[];
    menu: {
      open: string;
      close: string;
    };
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
    proof: string;
    intro: string;
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
    previousButton: string;
    nextButton: string;
    positionLabel: (current: number, total: number) => string;
    items: Post[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    options: ContactOption[];
  };
  externalLinkLabel: string;
  backToTop: string;
};

const cvFileName = 'yahya_alsharif_cv.pdf';
const cvHref = `${import.meta.env.BASE_URL}cv/${cvFileName}`;
const esasHomeHref = `${import.meta.env.BASE_URL}projects/esas-home.webp`;
const esasSrsHref = `${import.meta.env.BASE_URL}projects/esas-srs.pdf`;

const links = {
  linkedin: 'https://www.linkedin.com/in/yahya-alsharif-204103304',
  github: 'https://github.com/YahyaAlsharif',
  personalDashboard: 'https://github.com/YahyaAlsharif/personal-dashboard',
  onKith: 'https://onkith.online/',
  email: 'yahya.alsharif567@gmail.com',
  kaggleInpainting:
    'https://www.kaggle.com/code/ghostylicious/mi-gan-inpainting-comp-03',
  postSummerSchool: 'https://www.linkedin.com/feed/update/urn:li:share:7479585722992226305',
  postEsas: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7470469804227932160',
  postKaust: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7439279422131589120',
  embedSummerSchool:
    'https://www.linkedin.com/embed/feed/update/urn:li:share:7479585722992226305?collapsed=1',
  embedEsas:
    'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7470469804227932160?collapsed=1',
  embedKaust:
    'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7439279422131589120?collapsed=1',
};

// TODO: Confirm which ESAS stack components were web versus mobile before tightening the stack wording.

export const localizedContent: Record<Language, DashboardContent> = {
  en: {
    header: {
      brand: 'Yahya Alsharif',
      homeLabel: 'Yahya Alsharif home',
      navigationLabel: 'Primary navigation',
      nav: [
        { label: 'About', href: '#about' },
        { label: 'Education', href: '#education' },
        { label: 'Projects', href: '#projects' },
        { label: 'CV', href: '#cv' },
        { label: 'Contact', href: '#contact' },
      ],
      menu: {
        open: 'Open navigation menu',
        close: 'Close navigation menu',
      },
      theme: {
        light: 'Light',
        dark: 'Dark',
        switchToLight: 'Switch to light mode',
        switchToDark: 'Switch to dark mode',
      },
    },
    hero: {
      eyebrow: 'AI & Software Development | Software Engineering Student',
      title: "Hi, I'm Yahya Alsharif.",
      proof:
        'KAUST Academy AI Specialisation — top 100 of 14,000+ applicants · 3rd place, image-inpainting competition (FID 12)',
      intro:
        'I build reliable AI and software projects that turn technical ideas into practical, user-centred solutions.',
      profileName: 'Yahya Alsharif',
      profileLocation: 'Makkah Region, Saudi Arabia',
      profileAlt: 'Yahya Alsharif',
      links: [
        { label: 'View CV', href: '#cv' },
        { label: 'Projects', href: '#projects' },
        { label: 'GitHub', href: links.github, external: true },
        { label: 'LinkedIn', href: links.linkedin, external: true },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'About Me',
      description:
        'A closer look at my interests, learning style, and how I approach the projects I build.',
      paragraphs: [
        'I am a Software Engineering student at Umm Al-Qura University and a KAUST Academy AI Specialisation participant currently attending the final AI Summer Programme.',
        'My interests connect disciplined software engineering with practical, responsible AI. I enjoy following ideas through requirements, design, implementation, testing, documentation, and presentation until they become useful systems.',
        'I learn by researching how models and software work beneath the surface, then building, testing, and refining solutions that address real user needs and can be explained clearly.',
      ],
      jumpLinks: [
        { label: 'Software Engineering', href: '#about-software-engineering' },
        { label: 'Artificial Intelligence', href: '#about-artificial-intelligence' },
      ],
      softwareEngineering: {
        id: 'about-software-engineering',
        title: 'Software Engineering',
        paragraphs: [
          "Since starting my Software Engineering bachelor's degree in 2023, I have built foundations in requirements, architecture, Java and object-oriented programming, testing, system analysis, algorithms, and data structures.",
          'I value the complete engineering lifecycle: clarify the problem, document requirements and workflows, design and build the system, test its behaviour, and present the result clearly to users and reviewers.',
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
          'My first practical view of AI came in my third year through a university-led NVIDIA Fundamentals of Deep Learning workshop. It motivated me to understand how AI systems work, not only use them.',
          'I progressed from prompt engineering into Python, mathematics, machine learning, neural networks, PyTorch, and model training.',
          'After Stage 2, I strengthened my applied PyTorch and computer-vision skills through Andrew Ng’s DeepLearning.AI Convolutional Neural Networks course before Stage 3.',
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
          'Final AI Summer Programme - In Progress',
        ],
        highlightsTitle: 'Highlights',
      },
      sidebarLinkLabel: (item) => `View ${item} in the projects section`,
    },
    skills: {
      title: 'Skills & Tools',
      description: 'A compact view of the demonstrated tools, models, and engineering practices that support my work.',
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
          title: 'AI & Machine Learning',
          skills: [
            'Python',
            'PyTorch',
            'Machine learning',
            'Deep learning',
            'Model training',
            'Data preprocessing',
            'Precision, recall & F1 evaluation',
          ],
        },
        {
          title: 'AI Models & Applications',
          skills: [
            'Computer vision',
            'CNNs',
            'RNNs',
            'Transformers',
            'Token classification',
            'Sequence labelling',
          ],
        },
        {
          title: 'Edge & Advanced AI',
          skills: [
            'INT8 quantisation',
            'Model compression',
            'Edge AI',
            'Reinforcement learning',
            'Generative AI',
          ],
        },
        {
          title: 'Tools',
          skills: ['Git', 'GitHub', 'VS Code', 'Docker'],
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
            'I am studying for a Bachelor of Computer Software Engineering at Umm Al-Qura University, building a foundation in planning, designing, implementing, testing, documenting, and presenting software systems.',
          details: [
            'Coursework and submitted projects cover requirements engineering, architecture, testing, system analysis, web development, algorithms, data structures, Java, and object-oriented programming, supported by reports, diagrams, test work, and presentations.',
          ],
          points: [
            'Turn ideas into structured plans by identifying users, requirements, use cases, workflows, and test needs.',
            'Apply software design, architecture, testing, system analysis, algorithms, data structures, Java, and web-development foundations.',
            'Produce documentation, diagrams, testing plans, working demonstrations, and technical presentations.',
          ],
        },
        {
          title: 'Artificial Intelligence Specialization',
          organization: 'KAUST Academy',
          period: '2025 - 2026',
          status: 'Final AI Summer Programme - In Progress',
          logoSrc: kaustAcademyLogo,
          logoAlt: 'KAUST Academy logo',
          description:
            'Through KAUST Academy’s competitive multi-stage Artificial Intelligence Specialisation, I progressed from foundational preparation to advanced applied learning and the final AI Summer Programme.',
          details: [
            'After completing the first three stages, I advanced to the final AI Summer Program, ranking among the top 100 students selected from 14,000+ applicants.',
            'The programme spans sequence and transformer models, self-supervised learning, foundation and world models, generative modelling, reinforcement learning, Edge AI, TinyML, quantisation, and model compression.',
          ],
          points: [
            'Completed KAUST Academy Advanced Artificial Intelligence.',
            'Actively attending the final AI Summer Programme at King Khalid University under KAUST Academy.',
            'Apply the material through practical model-building labs and competitions.',
          ],
        },
      ],
      certificatesTitle: 'Certificates & Training',
      certificates: [
        'Advanced Artificial Intelligence - KAUST Academy',
        'Convolutional Neural Networks - DeepLearning.AI',
        'Fundamentals of Deep Learning - NVIDIA',
        'Linear Algebra for Machine Learning and Data Science - DeepLearning.AI',
        'Introduction to Data Science in Python - University of Michigan',
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
          name: 'OnKith — Privacy-Aware Edge AI',
          status: 'KAUST Academy Team Project | Model Development Completed / Integration in Progress',
          featured: true,
          description:
            'OnKith is a KAUST Academy team project that protects sensitive text before it reaches cloud AI services. I developed and trained a compact TinyBERT-4 token-classification model to detect and mask personally identifiable and sensitive content.',
          points: [
            'Developed and trained a compact TinyBERT-4 token-classification model.',
            'Evaluated precision, recall, and F1, achieving approximately 0.95 F1.',
            'Produced an INT8-quantised model and prepared deployment artefacts for Raspberry Pi 5.',
            'Coordinated the inference workflow and investigated pruning and knowledge distillation as future compression options.',
          ],
          tags: [
            'TinyBERT-4',
            'Token Classification',
            'Privacy',
            'INT8 Quantisation',
            'Edge AI',
            'Raspberry Pi 5',
          ],
          links: [{ label: 'Visit OnKith', href: links.onKith }],
        },
        {
          id: 'project-esas',
          name: 'ESAS - Experience Saudi As a Saudi',
          status: 'Completed Graduation Project | Continuing Portfolio Development',
          role: 'Coordinator',
          featured: true,
          description:
            'ESAS is a graduation project for discovering authentic, locally curated Saudi tourism experiences. Built with Spring Boot, PostgreSQL, Docker, and Flutter, it grew from an initial concept into a documented system and functional demonstration.',
          points: [
            'Led coordination across brainstorming, planning, requirements gathering, documentation, and demo preparation.',
            'Wrote the SRS and designed use cases, workflows, system diagrams, provider submissions, administrator reviews, and traveller interactions.',
            'Built and tested catalogue, booking, and role-based features across the implementation, then stabilised the demonstration.',
            'Presented the poster and live demo at INJAZ 2026 and continued refining the project after academic submission.',
          ],
          tags: [
            'Software Engineering',
            'Graduation Project',
            'Requirements Engineering',
            'Documentation',
            'Project Coordination',
            'Spring Boot',
            'PostgreSQL',
            'Docker',
            'Flutter',
          ],
          image: {
            src: esasHomeHref,
            alt: 'ESAS homepage showing authentic Saudi tourism experiences and search controls',
          },
          links: [{ label: 'View SRS (114 pages)', href: esasSrsHref }],
        },
        {
          name: 'KAUST Academy Image Inpainting Competition',
          status: '3rd Place Overall | FID 12',
          description:
            'Achieved third place overall in the KAUST Academy image-inpainting competition with an FID score of 12.',
          points: [
            'Finished 3rd place overall.',
            'Achieved an FID score of 12.',
            'Documented the MI-GAN fine-tuning approach in a public Kaggle notebook.',
          ],
          tags: ['Computer Vision', 'Image Inpainting', 'MI-GAN', 'PyTorch', 'Competition'],
          links: [{
            label: 'View Competition Notebook',
            href: links.kaggleInpainting,
          }],
        },
        {
          name: 'Personal Dashboard',
          status: 'Deployed Portfolio Project',
          description:
            'This website is a public personal dashboard and portfolio built with React, TypeScript, Vite, and Tailwind CSS. It presents my background, education, projects, CV, and contact links in a clean static frontend-only site.',
          points: [
            'Frontend-only and deployable as a static website.',
            'Uses structured content files for profile, education, projects, skills, and contact details.',
            'Includes light/dark mode, CV viewing and download, responsive cards, and scroll reveal animations.',
            'Built to stay simple, public-safe, and easy to maintain.',
          ],
          tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Static Website', 'Portfolio'],
          links: [{ label: 'View Repository', href: links.personalDashboard }],
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
      eyebrow: 'Posts',
      title: 'Posts',
      description:
        'LinkedIn posts that highlight important milestones in my software engineering and AI journey.',
      viewButton: 'View on LinkedIn',
      previousButton: 'Previous post',
      nextButton: 'Next post',
      positionLabel: (current, total) => `Post ${current} of ${total}`,
      items: [
        {
          title: 'KAUST Academy AI Summer School Supporters & Investors',
          description:
            'A reflection on meeting supporters and investors of the KAUST Academy AI Summer School 2026 and discussing AI education, future careers, and student project ideas.',
          embedUrl: links.embedSummerSchool,
          postUrl: links.postSummerSchool,
          iframeTitle: 'LinkedIn post about meeting KAUST Academy AI Summer School supporters and investors',
        },
        {
          title: 'Graduation Project / ESAS',
          description:
            'A LinkedIn milestone post about ESAS, my graduation project focused on authentic, locally curated tourism experiences in Saudi Arabia.',
          embedUrl: links.embedEsas,
          postUrl: links.postEsas,
          iframeTitle: 'LinkedIn post about Graduation Project and ESAS',
        },
        {
          title: 'KAUST Academy Stage 3 to Stage 4',
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
    externalLinkLabel: '(opens in a new tab)',
    backToTop: 'Back to Top',
  },
  ar: {
    header: {
      brand: 'يحيى الشريف',
      homeLabel: 'الصفحة الرئيسية ليحيى الشريف',
      navigationLabel: 'التنقل الرئيسي',
      nav: [
        { label: 'نبذة عني', href: '#about' },
        { label: 'التعليم', href: '#education' },
        { label: 'المشاريع', href: '#projects' },
        { label: 'السيرة الذاتية', href: '#cv' },
        { label: 'التواصل', href: '#contact' },
      ],
      menu: {
        open: 'فتح قائمة التنقل',
        close: 'إغلاق قائمة التنقل',
      },
      theme: {
        light: 'فاتح',
        dark: 'داكن',
        switchToLight: 'التبديل إلى الوضع الفاتح',
        switchToDark: 'التبديل إلى الوضع الداكن',
      },
    },
    hero: {
      eyebrow: 'تطوير الذكاء الاصطناعي والبرمجيات | طالب هندسة برمجيات',
      title: 'مرحبًا، أنا يحيى الشريف.',
      proof:
        'تخصص الذكاء الاصطناعي في أكاديمية كاوست — ضمن أفضل 100 من أكثر من 14,000 متقدم · المركز الثالث في مسابقة ترميم الصور (FID 12)',
      intro:
        'أبني مشاريع موثوقة في الذكاء الاصطناعي والبرمجيات تحول الأفكار التقنية إلى حلول عملية تتمحور حول المستخدم.',
      profileName: 'يحيى الشريف',
      profileLocation: 'منطقة مكة المكرمة، المملكة العربية السعودية',
      profileAlt: 'يحيى الشريف',
      links: [
        { label: 'عرض السيرة الذاتية', href: '#cv' },
        { label: 'المشاريع', href: '#projects' },
        { label: 'GitHub', href: links.github, external: true },
        { label: 'لينكدإن', href: links.linkedin, external: true },
      ],
    },
    about: {
      eyebrow: 'نبذة',
      title: 'نبذة عني',
      description: 'نظرة أقرب على اهتماماتي، وطريقة تعلمي، وكيف أتعامل مع المشاريع التي أعمل عليها.',
      paragraphs: [
        'أنا طالب هندسة برمجيات في جامعة أم القرى، ومشارك في تخصص الذكاء الاصطناعي في أكاديمية كاوست، وأحضر حاليًا البرنامج الصيفي النهائي للذكاء الاصطناعي.',
        'تربط اهتماماتي بين هندسة البرمجيات المنضبطة والذكاء الاصطناعي العملي والمسؤول. أستمتع بمتابعة الفكرة من المتطلبات والتصميم إلى التنفيذ والاختبار والتوثيق والعرض حتى تصبح نظامًا مفيدًا.',
        'أتعلم بالبحث في كيفية عمل النماذج والبرمجيات من الداخل، ثم أبني الحلول وأختبرها وأحسنها لتلبي احتياجات المستخدمين ويمكن شرحها بوضوح.',
      ],
      jumpLinks: [
        { label: 'هندسة البرمجيات', href: '#about-software-engineering' },
        { label: 'الذكاء الاصطناعي', href: '#about-artificial-intelligence' },
      ],
      softwareEngineering: {
        id: 'about-software-engineering',
        title: 'هندسة البرمجيات',
        paragraphs: [
          'منذ بدء بكالوريوس هندسة البرمجيات عام 2023، بنيت أساسًا في المتطلبات والمعمارية وJava والبرمجة كائنية التوجه والاختبار وتحليل الأنظمة والخوارزميات وهياكل البيانات.',
          'أقدر دورة التطوير الكاملة: توضيح المشكلة، وتوثيق المتطلبات ومسارات العمل، وتصميم النظام وبناءه، واختبار سلوكه، ثم عرض النتيجة بوضوح للمستخدمين والمراجعين.',
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
          'جاءت أول تجربة عملية لي في الذكاء الاصطناعي خلال سنتي الثالثة عبر ورشة جامعية لشهادة NVIDIA Fundamentals of Deep Learning، ودفعتني إلى فهم كيفية عمل الأنظمة لا مجرد استخدامها.',
          'انتقلت من هندسة الأوامر إلى Python والرياضيات وتعلم الآلة والشبكات العصبية وPyTorch وتدريب النماذج.',
          'بعد المرحلة الثانية، عززت مهاراتي التطبيقية في PyTorch والرؤية الحاسوبية بدراسة مقرر Andrew Ng في الشبكات العصبية الالتفافية من DeepLearning.AI قبل المرحلة الثالثة.',
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
          'البرنامج الصيفي النهائي للذكاء الاصطناعي - قيد التنفيذ',
        ],
        highlightsTitle: 'أبرز المحاور',
      },
      sidebarLinkLabel: (item) => `عرض ${item} في قسم المشاريع`,
    },
    skills: {
      title: 'المهارات والأدوات',
      description: 'نظرة مختصرة على الأدوات والنماذج والممارسات الهندسية التي أثبتها من خلال عملي.',
      groups: [
        {
          title: 'التطوير المتكامل',
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
          title: 'الذكاء الاصطناعي وتعلم الآلة',
          skills: [
            'Python',
            'PyTorch',
            'تعلم الآلة',
            'التعلم العميق',
            'تدريب النماذج',
            'معالجة البيانات',
            'التقييم بالدقة والاستدعاء وF1',
          ],
        },
        {
          title: 'نماذج وتطبيقات الذكاء الاصطناعي',
          skills: [
            'الرؤية الحاسوبية',
            'CNNs',
            'RNNs',
            'المحولات',
            'تصنيف الرموز',
            'وسم التسلسلات',
          ],
        },
        {
          title: 'الذكاء الاصطناعي الطرفي والمتقدم',
          skills: [
            'التكميم إلى INT8',
            'ضغط النماذج',
            'الذكاء الاصطناعي الطرفي',
            'التعلم المعزز',
            'الذكاء الاصطناعي التوليدي',
          ],
        },
        {
          title: 'الأدوات',
          skills: ['Git', 'GitHub', 'VS Code', 'Docker'],
        },
      ],
    },
    education: {
      eyebrow: 'التعليم',
      title: 'التعليم',
      description: 'دراستي في هندسة البرمجيات إلى جانب رحلة مركزة في الذكاء الاصطناعي من خلال أكاديمية كاوست.',
      items: [
        {
          title: 'بكالوريوس هندسة البرمجيات الحاسوبية',
          organization: 'جامعة أم القرى',
          period: '2023 - 2027 متوقع',
          status: 'قيد الدراسة',
          logoSrc: uquLogo,
          logoAlt: 'شعار جامعة أم القرى',
          description:
            'أدرس بكالوريوس هندسة البرمجيات الحاسوبية في جامعة أم القرى، وأبني أساسًا في تخطيط الأنظمة وتصميمها وتنفيذها واختبارها وتوثيقها وعرضها.',
          details: [
            'تشمل المقررات والمشاريع هندسة المتطلبات والمعمارية والاختبار وتحليل الأنظمة وتطوير الويب والخوارزميات وهياكل البيانات وJava والبرمجة كائنية التوجه، مدعومة بتقارير ومخططات وأعمال اختبار وعروض.',
          ],
          points: [
            'أحول الأفكار إلى خطط منظمة تحدد المستخدمين والمتطلبات وحالات الاستخدام ومسارات العمل واحتياجات الاختبار.',
            'أطبق أسس التصميم والمعمارية والاختبار وتحليل الأنظمة والخوارزميات وهياكل البيانات وJava وتطوير الويب.',
            'أنتج التوثيق والمخططات وخطط الاختبار والعروض التجريبية والتقديمات التقنية.',
          ],
        },
        {
          title: 'تخصص الذكاء الاصطناعي',
          organization: 'أكاديمية كاوست',
          period: '2025 - 2026',
          status: 'البرنامج الصيفي النهائي للذكاء الاصطناعي - قيد التنفيذ',
          logoSrc: kaustAcademyLogo,
          logoAlt: 'شعار أكاديمية كاوست',
          description:
            'انتقلت عبر تخصص الذكاء الاصطناعي التنافسي متعدد المراحل في أكاديمية كاوست من الإعداد التأسيسي إلى التعلم التطبيقي المتقدم والبرنامج الصيفي النهائي.',
          details: [
            'بعد إكمال المراحل الثلاث الأولى، تأهلت إلى البرنامج الصيفي النهائي للذكاء الاصطناعي، ضمن أفضل 100 طالب تم اختيارهم من بين أكثر من 14,000 متقدم.',
            'يشمل البرنامج النماذج التسلسلية والمحولات والتعلم الذاتي ونماذج الأساس والعالم والنمذجة التوليدية والتعلم المعزز والذكاء الاصطناعي الطرفي وTinyML والتكميم وضغط النماذج.',
          ],
          points: [
            'أكملت KAUST Academy Advanced Artificial Intelligence.',
            'أحضر حاليًا البرنامج الصيفي النهائي في جامعة الملك خالد تحت مظلة أكاديمية كاوست.',
            'أطبق المادة من خلال مختبرات ومسابقات عملية لبناء النماذج.',
          ],
        },
      ],
      certificatesTitle: 'الشهادات والتدريب',
      certificates: [
        'Advanced Artificial Intelligence - KAUST Academy',
        'Convolutional Neural Networks - DeepLearning.AI',
        'Fundamentals of Deep Learning - NVIDIA',
        'Linear Algebra for Machine Learning and Data Science - DeepLearning.AI',
        'Introduction to Data Science in Python - University of Michigan',
      ],
    },
    projects: {
      eyebrow: 'المشاريع',
      title: 'المشاريع',
      description:
        'الأعمال التي تعكس ممارستي لهندسة البرمجيات، واتجاهي في الذكاء الاصطناعي، وتطوير ملفي الشخصي العام.',
      roleLabel: 'الدور',
      items: [
        {
          name: 'OnKith — ذكاء اصطناعي طرفي واعٍ بالخصوصية',
          status: 'مشروع جماعي في أكاديمية كاوست | اكتمل تطوير النموذج / التكامل قيد التنفيذ',
          featured: true,
          description:
            'OnKith مشروع جماعي في أكاديمية كاوست يحمي النصوص الحساسة قبل وصولها إلى خدمات الذكاء الاصطناعي السحابية. طورت ودربت نموذج TinyBERT-4 مدمجًا لتصنيف الرموز واكتشاف المعلومات الشخصية والحساسة وإخفائها.',
          points: [
            'طورت ودربت نموذج TinyBERT-4 مدمجًا لتصنيف الرموز.',
            'قيّمت الدقة والاستدعاء وF1، وحقق النموذج قرابة 0.95 في مقياس F1.',
            'أنتجت نموذجًا مكممًا إلى INT8 وجهزت ملفات النشر على Raspberry Pi 5.',
            'نسقت مسار الاستدلال وبحثت التقليم وتقطير المعرفة كخيارات مستقبلية لضغط النموذج.',
          ],
          tags: ['TinyBERT-4', 'تصنيف الرموز', 'الخصوصية', 'تكميم INT8', 'Edge AI', 'Raspberry Pi 5'],
          links: [{ label: 'زيارة OnKith', href: links.onKith }],
        },
        {
          id: 'project-esas',
          name: 'ESAS - Experience Saudi As a Saudi',
          status: 'مشروع تخرج مكتمل | مواصلة تطويره لملف الأعمال',
          role: 'منسق',
          featured: true,
          description:
            'ESAS مشروع تخرج لاكتشاف تجارب سياحية سعودية أصيلة ومنتقاة محليًا. بُني باستخدام Spring Boot وPostgreSQL وDocker وFlutter، وتطور من فكرة أولية إلى نظام موثق وعرض تجريبي وظيفي.',
          points: [
            'قدت التنسيق بين العصف الذهني والتخطيط وجمع المتطلبات والتوثيق وتجهيز العرض التجريبي.',
            'كتبت وثيقة متطلبات البرمجيات وصممت حالات الاستخدام ومسارات العمل ومخططات النظام وتدفقات مقدمي الخدمات والمشرفين والمسافرين.',
            'بنيت واختبرت ميزات الكتالوج والحجز والصلاحيات ضمن التنفيذ، ثم حسنت استقرار العرض التجريبي.',
            'قدمت الملصق والعرض المباشر في معرض INJAZ 2026 وواصلت تحسين المشروع بعد التسليم الأكاديمي.',
          ],
          tags: [
            'هندسة البرمجيات',
            'مشروع تخرج',
            'هندسة المتطلبات',
            'التوثيق',
            'تنسيق المشاريع',
            'Spring Boot',
            'PostgreSQL',
            'Docker',
            'Flutter',
          ],
          image: {
            src: esasHomeHref,
            alt: 'الصفحة الرئيسية لمنصة ESAS تعرض تجارب سياحية سعودية أصيلة وخيارات البحث',
          },
          links: [{ label: 'عرض وثيقة متطلبات البرمجيات (114 صفحة)', href: esasSrsHref }],
        },
        {
          name: 'مسابقة أكاديمية كاوست لترميم الصور',
          status: 'المركز الثالث على مستوى المسابقة | FID 12',
          description:
            'حققت المركز الثالث على مستوى مسابقة أكاديمية كاوست لترميم الصور بدرجة FID بلغت 12.',
          points: [
            'حققت المركز الثالث على مستوى المسابقة.',
            'حققت درجة FID مقدارها 12.',
            'وثقت منهجية الضبط الدقيق لنموذج MI-GAN في دفتر Kaggle عام.',
          ],
          tags: ['الرؤية الحاسوبية', 'ترميم الصور', 'MI-GAN', 'PyTorch', 'مسابقة'],
          links: [{
            label: 'عرض دفتر المسابقة',
            href: links.kaggleInpainting,
          }],
        },
        {
          name: 'Personal Dashboard',
          status: 'مشروع ملف أعمال منشور',
          description:
            'هذا الموقع هو لوحة معلومات شخصية وملف أعمال عام مبني باستخدام React وTypeScript وVite وTailwind CSS. يعرض خلفيتي، وتعليمي، ومشاريعي، وسيرتي الذاتية، وروابط التواصل في موقع ثابت ونظيف يعمل بالواجهة الأمامية فقط.',
          points: [
            'يعمل بالواجهة الأمامية فقط ويمكن نشره كموقع ثابت.',
            'يستخدم ملفات محتوى منظمة للملف الشخصي، والتعليم، والمشاريع، والمهارات، وروابط التواصل.',
            'يتضمن الوضع الفاتح/الداكن، وعرض السيرة الذاتية وتحميلها، وبطاقات متجاوبة، وحركات ظهور عند التمرير.',
            'بُني ليبقى بسيطًا، وآمنًا للنشر العام، وسهل الصيانة.',
          ],
          tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'موقع ثابت', 'ملف أعمال'],
          links: [{ label: 'عرض المستودع', href: links.personalDashboard }],
        },
      ],
    },
    cv: {
      eyebrow: 'السيرة الذاتية',
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
      eyebrow: 'المنشورات',
      title: 'المنشورات',
      description: 'منشورات على LinkedIn تبرز محطات مهمة في رحلتي في هندسة البرمجيات والذكاء الاصطناعي.',
      viewButton: 'عرض على LinkedIn',
      previousButton: 'المنشور السابق',
      nextButton: 'المنشور التالي',
      positionLabel: (current, total) => `المنشور ${current} من ${total}`,
      items: [
        {
          title: 'لقاء داعمي ومستثمري البرنامج الصيفي للذكاء الاصطناعي',
          description:
            'تأملات حول لقاء داعمي ومستثمري برنامج أكاديمية كاوست الصيفي للذكاء الاصطناعي 2026، ومناقشة تعليم الذكاء الاصطناعي والمهن المستقبلية وأفكار مشاريع الطلاب.',
          embedUrl: links.embedSummerSchool,
          postUrl: links.postSummerSchool,
          iframeTitle: 'منشور LinkedIn عن لقاء داعمي ومستثمري البرنامج الصيفي للذكاء الاصطناعي',
        },
        {
          title: 'مشروع التخرج / ESAS',
          description:
            'منشور مهم على LinkedIn حول ESAS، مشروع تخرجي الذي يركز على تجارب سياحية أصيلة ومنتقاة محليًا في المملكة العربية السعودية.',
          embedUrl: links.embedEsas,
          postUrl: links.postEsas,
          iframeTitle: 'منشور LinkedIn عن مشروع التخرج ESAS',
        },
        {
          title: 'أكاديمية كاوست: من المرحلة الثالثة إلى المرحلة الرابعة',
          description:
            'منشور مهم على LinkedIn حول إكمال المرحلة الثالثة من أكاديمية كاوست والقبول في المرحلة الرابعة من رحلة الذكاء الاصطناعي.',
          embedUrl: links.embedKaust,
          postUrl: links.postKaust,
          iframeTitle: 'منشور LinkedIn عن الانتقال من المرحلة الثالثة إلى الرابعة في أكاديمية كاوست',
        },
      ],
    },
    contact: {
      eyebrow: 'التواصل',
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
    externalLinkLabel: '(يفتح في علامة تبويب جديدة)',
    backToTop: 'العودة إلى الأعلى',
  },
};
