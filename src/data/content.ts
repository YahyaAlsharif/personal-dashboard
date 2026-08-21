import kaustAcademyLogo from '../assets/education/kaust-academy-logo.jpg';
import uquLogo from '../assets/education/uqu-logo.png';
import portrait from '../assets/profile/portrait.webp';
import type { Language } from '../context/language';

export type LocalizedLink = {
  label: string;
  href: string;
  external?: boolean;
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
  points: string[];
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  location?: string;
  focus?: string;
  points: string[];
  tags: string[];
  links?: LocalizedLink[];
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
    title: string;
    proof: string;
    intro: string;
    profileAlt: string;
    links: LocalizedLink[];
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  skills: {
    title: string;
    groups: SkillGroup[];
  };
  experience: {
    title: string;
    lede: string;
    items: ExperienceItem[];
  };
  education: {
    title: string;
    items: EducationItem[];
    certificatesTitle: string;
    certificates: string[];
  };
  projects: {
    title: string;
    lede: string;
    roleLabel: string;
    items: Project[];
  };
  cv: {
    title: string;
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
    title: string;
    viewButton: string;
    previousButton: string;
    nextButton: string;
    positionLabel: (current: number, total: number) => string;
    items: Post[];
  };
  contact: {
    title: string;
    lede: string;
    options: ContactOption[];
  };
  externalLinkLabel: string;
  backToTop: string;
};

const cvFileName = 'yahya_alsharif_cv.pdf';
const cvHref = `${import.meta.env.BASE_URL}cv/${cvFileName}`;
const esasHomeHref = `${import.meta.env.BASE_URL}projects/esas-home.webp`;
const esasSrsHref = `${import.meta.env.BASE_URL}projects/esas-srs.pdf`;

export const portraitSrc = portrait;

const links = {
  linkedin: 'https://www.linkedin.com/in/yahya-alsharif-204103304',
  github: 'https://github.com/YahyaAlsharif',
  kaggle: 'https://www.kaggle.com/ghostylicious',
  personalDashboard: 'https://github.com/YahyaAlsharif/personal-dashboard',
  flappyBird: 'https://github.com/YahyaAlsharif/flappy_bird_challenge',
  edgeAiProject: 'https://github.com/YahyaAlsharif/edge_ai_project',
  onKith: 'https://onkith.online/',
  onKithLinkedIn: 'https://www.linkedin.com/company/onkith/',
  onKithPublic: 'https://github.com/YahyaAlsharif/OnKith_Public',
  email: 'yahya.alsharif567@gmail.com',
  kaggleInpaintingRepository: 'https://github.com/YahyaAlsharif/Kaggle_inpainting_comp',
  kaggleInpainting: 'https://www.kaggle.com/code/ghostylicious/mi-gan-inpainting-comp-03',
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

export const localizedContent: Record<Language, DashboardContent> = {
  en: {
    header: {
      brand: 'Yahya Alsharif',
      homeLabel: 'Yahya Alsharif home',
      navigationLabel: 'Primary navigation',
      nav: [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Education', href: '#education' },
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
      title: "Hi, I'm Yahya Alsharif.",
      proof:
        'Software Engineering student at Umm Al-Qura University and a KAUST Academy AI intern, selected among the top 100 of more than 14,000 applicants.',
      intro:
        'I take AI models end to end, from data and label design through training and evaluation to quantisation and measured deployment on the hardware they will actually run on.',
      profileAlt: 'Yahya Alsharif',
      links: [
        { label: 'View CV', href: '#cv' },
        { label: 'Experience', href: '#experience' },
        { label: 'GitHub', href: links.github, external: true },
        { label: 'LinkedIn', href: links.linkedin, external: true },
      ],
    },
    about: {
      title: 'About Me',
      paragraphs: [
        'I work on two sides of the same problem: the software engineering that turns an idea into a documented, testable system, and the applied AI that makes it worth building. In practice that means requirements, architecture and testing on one hand, and datasets, training and evaluation on the other.',
        'Most of my work ends in a measurement. I would rather report a model benchmarked on the device it has to run on than a number from a notebook, and I try to keep every project explainable to someone who will never read the code.',
      ],
    },
    skills: {
      title: 'Skills and Tools',
      groups: [
        {
          title: 'AI and Machine Learning',
          skills: [
            'Python',
            'PyTorch',
            'Hugging Face Transformers',
            'Computer vision',
            'NLP',
            'Reinforcement learning',
            'Evaluation design',
          ],
        },
        {
          title: 'Edge and Optimisation',
          skills: [
            'ONNX Runtime',
            'INT8 quantisation',
            'Model compression',
            'TensorFlow Lite',
            'Raspberry Pi',
            'Benchmarking',
          ],
        },
        {
          title: 'Software Engineering',
          skills: [
            'Requirements engineering',
            'System design',
            'Software testing',
            'Documentation',
            'Java',
            'Project coordination',
          ],
        },
        {
          title: 'Web and Tools',
          skills: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Spring Boot',
            'PostgreSQL',
            'Flutter',
            'Git',
            'Docker',
          ],
        },
      ],
    },
    experience: {
      title: 'Experience',
      lede: 'An eight-week AI internship at KAUST Academy, and the competitions that ran alongside it.',
      items: [
        {
          role: 'AI Intern',
          organization: 'KAUST Academy',
          period: 'Jun 2026 to Aug 2026',
          location: 'King Khalid University, Abha',
          focus: 'Model owner on OnKith, on-device privacy filtering for a voice assistant',
          points: [
            'Owned the privacy model for the full eight weeks: dataset and label design, training, evaluation, optimisation and deployment packaging.',
            'Shipped a TinyBERT masker, then replaced it with DeBERTa-v3-xsmall once evaluation exposed rare-label weakness. Out-of-distribution typed F1 rose from 0.46 to 0.62 and private-character recall from 0.32 to 0.84.',
            'Benchmarked the INT8 production model on the target Raspberry Pi 5: 0.945 typed F1 at 53 ms median latency, and 98.4% prediction agreement with the workstation build.',
            'Traced an apparent quantisation collapse to a decoding defect in the production path and covered the fix with regression tests.',
          ],
          tags: ['Token classification', 'DeBERTa', 'ONNX Runtime', 'INT8', 'Raspberry Pi 5'],
          links: [{ label: 'Read the full project', href: '#project-onkith' }],
        },
        {
          role: 'Kaggle Competitor',
          organization: 'KAUST Academy',
          period: 'Jul 2026 to Aug 2026',
          focus: 'Third place in two of the Academy competitions',
          points: [
            'Competed across image classification, image generation and inpainting, instance segmentation, natural language and audio tasks.',
            'Cell instance segmentation, third of 24 teams. A ConvNeXt-Tiny U-Net regressing a normalised distance map, decoded by marker-controlled watershed: 0.8144 instance F1 on a near-duplicate-aware grouped split and 0.5472 private instance F1.',
            'Image inpainting, third place. No test masks were supplied, so mask recovery, data selection and inpainting all had to work together: FID 12.02 across 8,000 reconstructed images.',
          ],
          tags: ['Computer vision', 'Instance segmentation', 'MI-GAN', 'PyTorch'],
          links: [
            { label: 'Inpainting repository', href: links.kaggleInpaintingRepository, external: true },
            { label: 'Kaggle notebook', href: links.kaggleInpainting, external: true },
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      lede: 'The work behind the summary, with the detail a technical reader would want.',
      roleLabel: 'Role',
      items: [
        {
          id: 'project-onkith',
          name: 'OnKith: Privacy-Aware Edge AI',
          status: 'KAUST Academy capstone | Model evaluation published',
          featured: true,
          description:
            'OnKith is a privacy-first voice assistant that transcribes speech and strips personally identifiable information entirely on-device. I owned the PII detection model: base model selection, data and label design, training, evaluation and INT8 quantisation for a Raspberry Pi 5 target.',
          points: [
            'Fine-tuned TinyBERT-4 for BIO token classification over 33 entity types, reaching 0.957 entity-level F1 on a 40,908-row held-out split never used for training or model selection, then cut the artefact from 54.5 MB to 13.7 MB with INT8 ONNX for 0.3 points of token F1.',
            'Probed the headline metric rather than trusting it: holding the address and sentence fixed and varying only the domain showed the model recognising common mail providers and missing uncommon ones, so part of a 0.99 EMAIL score was memorisation.',
            'Rebuilt the model on DeBERTa-v3-xsmall over a 31-entity ontology after the evaluation exposed dataset imbalance, raising out-of-distribution typed F1 from 0.46 to 0.62 and private-character recall from 0.32 to 0.84.',
            'Benchmarked the whole pipeline on the target device, including an end-to-end audio benchmark that attributes each failure to the stage that caused it, and published the evaluation as a public repository with committed notebook outputs and limitations.',
          ],
          tags: ['Privacy', 'Token classification', 'ONNX Runtime', 'INT8', 'Edge AI'],
          links: [
            { label: 'Visit OnKith', href: links.onKith, external: true },
            { label: 'Evaluation repository', href: links.onKithPublic, external: true },
            { label: 'OnKith on LinkedIn', href: links.onKithLinkedIn, external: true },
          ],
        },
        {
          id: 'project-esas',
          name: 'ESAS: Experience Saudi As a Saudi',
          status: 'Completed graduation project',
          role: 'Coordinator',
          featured: true,
          description:
            'ESAS is a graduation project for discovering authentic, locally curated Saudi tourism experiences, built with Spring Boot, PostgreSQL, Docker and Flutter. I coordinated a six-person team and owned the repository and the documentation set.',
          points: [
            'Coordinated the team from brainstorming through planning, requirements gathering and demo preparation.',
            'Wrote the Software Requirements Specification and designed the use cases, workflows and system diagrams for traveller, provider and administrator journeys.',
            'Built and tested catalogue, booking and role-based features, then presented the poster and live demo at the INJAZ 2026 exhibition.',
          ],
          tags: ['Requirements engineering', 'Spring Boot', 'PostgreSQL', 'Flutter', 'Docker'],
          image: {
            src: esasHomeHref,
            alt: 'ESAS homepage showing authentic Saudi tourism experiences and search controls',
          },
          links: [{ label: 'View SRS (114 pages)', href: esasSrsHref, external: true }],
        },
        {
          name: 'Flappy Bird: Deep Reinforcement Learning',
          status: 'Independent project',
          description:
            'A Dueling Double DQN with prioritised experience replay that learns Flappy Bird from a 12-feature state vector, trained entirely on CPU, with an evaluation protocol designed so a single lucky episode cannot win.',
          points: [
            'Diagnosed instability in the first training run from its own evaluation history, where the mean score collapsed from 861 to 396 between consecutive checkpoints.',
            'Rebuilt the procedure with Polyak averaging and exploration decay scaled to the training budget instead of a fixed step count.',
            'Ranked checkpoints on worst-seed score before mean score, then confirmed on unseen seeds: best episode 5,120 pipes, five-seed holdout mean 400.',
          ],
          tags: ['Reinforcement learning', 'Deep Q-Network', 'PyTorch', 'Evaluation design'],
          links: [{ label: 'View repository', href: links.flappyBird, external: true }],
        },
        {
          name: 'XIAO IMU Gesture Recognition: TinyML',
          status: 'KAUST Academy coursework project',
          description:
            'An end-to-end TinyML pipeline running on a Seeed XIAO nRF52840 Sense: capture labelled IMU gesture windows over serial, train a small 1D CNN, convert to TensorFlow Lite, and run inference on the microcontroller with nothing else in the loop.',
          points: [
            'Built two capture sketches: motion-triggered for active gestures and continuous for the idle class, which a threshold can never record.',
            'Trained a 1D CNN over 119-sample, six-axis windows at about 100 Hz with a stratified held-out split and balanced class weights.',
            'Deployed via TensorFlow Lite Micro in a 48 KB tensor arena, keeping normalisation byte-identical between training and firmware.',
          ],
          tags: ['TinyML', 'TensorFlow Lite Micro', 'Embedded C++', '1D CNN'],
          links: [{ label: 'View repository', href: links.edgeAiProject, external: true }],
        },
        {
          name: 'Personal Dashboard',
          status: 'This site',
          description:
            'A bilingual English and Arabic portfolio built with React, TypeScript, Vite and Tailwind CSS, deployed as a static site on GitHub Pages.',
          points: [
            'Frontend only, with structured content files so the profile, experience, projects and skills stay in one place.',
            'Light and dark themes, responsive layout, CV viewing and download, and accessible anchor navigation.',
          ],
          tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
          links: [{ label: 'View repository', href: links.personalDashboard, external: true }],
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          title: 'BSc Software Engineering',
          organization: 'Umm Al-Qura University',
          period: 'Aug 2023 to Jun 2027 expected',
          status: 'GPA 3.89 / 4.00',
          logoSrc: uquLogo,
          logoAlt: 'Umm Al-Qura University logo',
          description:
            'A software engineering degree covering the full lifecycle: planning, design, implementation, testing, documentation and presentation.',
          points: [
            'Coursework in requirements engineering, architecture, testing, system analysis, algorithms, data structures and object-oriented programming.',
            'Graduation project ESAS, coordinated across a six-person team and presented at INJAZ 2026.',
          ],
        },
        {
          title: 'Artificial Intelligence Specialisation',
          organization: 'KAUST Academy',
          period: 'Nov 2025 to Aug 2026',
          status: 'Completed',
          logoSrc: kaustAcademyLogo,
          logoAlt: 'KAUST Academy logo',
          description:
            'A competitive multi-stage specialisation, completed through to the final eight-week AI Summer Programme at King Khalid University.',
          points: [
            'Selected among the top 100 students from more than 14,000 applicants and advanced through every stage.',
            'Three tracks across the summer programme: computer vision and generative models, reinforcement learning, and natural language processing.',
          ],
        },
      ],
      certificatesTitle: 'Certificates',
      certificates: [
        'Advanced Artificial Intelligence, KAUST Academy',
        'Fundamentals of Deep Learning, NVIDIA',
        'Convolutional Neural Networks, DeepLearning.AI',
        'Linear Algebra for Machine Learning and Data Science, DeepLearning.AI',
        'Introduction to Data Science in Python, University of Michigan',
      ],
    },
    cv: {
      title: 'CV',
      cardText: 'One page, with the full record of experience, projects, education and skills.',
      viewButton: 'View CV',
      downloadButton: 'Download CV',
      closeButton: 'Close',
      closeAriaLabel: 'Close CV viewer',
      modalTitle: 'Yahya Alsharif CV',
      fileName: cvFileName,
      href: cvHref,
    },
    posts: {
      title: 'Milestones',
      viewButton: 'View on LinkedIn',
      previousButton: 'Previous post',
      nextButton: 'Next post',
      positionLabel: (current, total) => `Post ${current} of ${total}`,
      items: [
        {
          title: 'KAUST Academy AI Summer School supporters and investors',
          description:
            'Meeting supporters and investors of the KAUST Academy AI Summer School 2026 and discussing AI education, careers and student projects.',
          embedUrl: links.embedSummerSchool,
          postUrl: links.postSummerSchool,
          iframeTitle:
            'LinkedIn post about meeting KAUST Academy AI Summer School supporters and investors',
        },
        {
          title: 'Graduation project: ESAS',
          description:
            'A milestone post about ESAS, my graduation project focused on authentic, locally curated tourism experiences in Saudi Arabia.',
          embedUrl: links.embedEsas,
          postUrl: links.postEsas,
          iframeTitle: 'LinkedIn post about the ESAS graduation project',
        },
        {
          title: 'KAUST Academy Stage 3 to Stage 4',
          description:
            'A milestone post about finishing KAUST Academy Stage 3 and being accepted into Stage 4.',
          embedUrl: links.embedKaust,
          postUrl: links.postKaust,
          iframeTitle: 'LinkedIn post about KAUST Academy Stage 3 and Stage 4',
        },
      ],
    },
    contact: {
      title: 'Contact',
      lede: 'For opportunities, collaboration, or a professional hello.',
      options: [
        {
          title: 'LinkedIn',
          description: 'Connect professionally and follow project updates.',
          href: links.linkedin,
          buttonText: 'Connect on LinkedIn',
          external: true,
        },
        {
          title: 'Email',
          description: 'Send a direct message about opportunities or questions.',
          href: `mailto:${links.email}`,
          buttonText: 'Send email',
          external: false,
        },
        {
          title: 'GitHub',
          description: 'Browse the public repositories behind these projects.',
          href: links.github,
          buttonText: 'View GitHub',
          external: true,
        },
      ],
    },
    externalLinkLabel: '(opens in a new tab)',
    backToTop: 'Back to top',
  },
  ar: {
    header: {
      brand: 'يحيى الشريف',
      homeLabel: 'الصفحة الرئيسية ليحيى الشريف',
      navigationLabel: 'التنقل الرئيسي',
      nav: [
        { label: 'نبذة عني', href: '#about' },
        { label: 'الخبرة', href: '#experience' },
        { label: 'المشاريع', href: '#projects' },
        { label: 'التعليم', href: '#education' },
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
      title: 'مرحبًا، أنا يحيى الشريف.',
      proof:
        'طالب هندسة برمجيات في جامعة أم القرى، ومتدرب في الذكاء الاصطناعي لدى أكاديمية كاوست، ضمن أفضل 100 من أكثر من 14,000 متقدم.',
      intro:
        'أعمل على نماذج الذكاء الاصطناعي من البداية إلى النهاية: تصميم البيانات والتسميات، ثم التدريب والتقييم، وصولًا إلى الضغط والقياس الفعلي على الجهاز الذي ستعمل عليه.',
      profileAlt: 'يحيى الشريف',
      links: [
        { label: 'عرض السيرة الذاتية', href: '#cv' },
        { label: 'الخبرة', href: '#experience' },
        { label: 'GitHub', href: links.github, external: true },
        { label: 'لينكدإن', href: links.linkedin, external: true },
      ],
    },
    about: {
      title: 'نبذة عني',
      paragraphs: [
        'أعمل على وجهين للمسألة نفسها: هندسة البرمجيات التي تحوّل الفكرة إلى نظام موثق وقابل للاختبار، والذكاء الاصطناعي التطبيقي الذي يجعل بناءه ذا قيمة. عمليًا يعني ذلك المتطلبات والتصميم والاختبار من جهة، والبيانات والتدريب والتقييم من جهة أخرى.',
        'معظم عملي ينتهي بقياس. أفضّل أن أعرض نموذجًا جرى قياسه على الجهاز الذي سيعمل عليه بدل رقم من دفتر تجارب، وأحرص على أن يبقى كل مشروع قابلًا للشرح لمن لن يقرأ الشيفرة أبدًا.',
      ],
    },
    skills: {
      title: 'المهارات والأدوات',
      groups: [
        {
          title: 'الذكاء الاصطناعي وتعلم الآلة',
          skills: [
            'Python',
            'PyTorch',
            'Hugging Face Transformers',
            'الرؤية الحاسوبية',
            'معالجة اللغة الطبيعية',
            'التعلم المعزز',
            'تصميم التقييم',
          ],
        },
        {
          title: 'الأجهزة الطرفية والتحسين',
          skills: [
            'ONNX Runtime',
            'تكميم INT8',
            'ضغط النماذج',
            'TensorFlow Lite',
            'Raspberry Pi',
            'قياس الأداء',
          ],
        },
        {
          title: 'هندسة البرمجيات',
          skills: [
            'هندسة المتطلبات',
            'تصميم الأنظمة',
            'اختبار البرمجيات',
            'التوثيق',
            'Java',
            'تنسيق المشاريع',
          ],
        },
        {
          title: 'الويب والأدوات',
          skills: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Spring Boot',
            'PostgreSQL',
            'Flutter',
            'Git',
            'Docker',
          ],
        },
      ],
    },
    experience: {
      title: 'الخبرة',
      lede: 'تدريب في الذكاء الاصطناعي لمدة ثمانية أسابيع في أكاديمية كاوست، والمسابقات التي رافقته.',
      items: [
        {
          role: 'متدرب ذكاء اصطناعي',
          organization: 'أكاديمية كاوست',
          period: 'يونيو 2026 إلى أغسطس 2026',
          location: 'جامعة الملك خالد، أبها',
          focus: 'مسؤول النموذج في OnKith، تصفية الخصوصية على الجهاز لمساعد صوتي',
          points: [
            'توليت نموذج الخصوصية طوال الأسابيع الثمانية: تصميم البيانات والتسميات، والتدريب، والتقييم، والتحسين، وتجهيز حزمة النشر.',
            'أطلقت نموذج إخفاء قائمًا على TinyBERT، ثم استبدلته بـ DeBERTa-v3-xsmall بعد أن كشف التقييم ضعفًا في الفئات النادرة. ارتفع مقياس F1 خارج التوزيع من 0.46 إلى 0.62، واستدعاء المحارف الخاصة من 0.32 إلى 0.84.',
            'قِست نموذج الإنتاج بصيغة INT8 على Raspberry Pi 5 المستهدف: 0.945 لمقياس F1 بوسيط زمن استجابة 53 ms، مع اتفاق في التنبؤات بنسبة 98.4% مع بيئة العمل.',
            'تتبعت انهيارًا ظاهريًا نُسب إلى التكميم فتبين أنه خلل في فك الترميز داخل مسار الإنتاج، وغطيت الإصلاح باختبارات انحدار.',
          ],
          tags: ['تصنيف الرموز', 'DeBERTa', 'ONNX Runtime', 'INT8', 'Raspberry Pi 5'],
          links: [{ label: 'اقرأ تفاصيل المشروع', href: '#project-onkith' }],
        },
        {
          role: 'متسابق في Kaggle',
          organization: 'أكاديمية كاوست',
          period: 'يوليو 2026 إلى أغسطس 2026',
          focus: 'المركز الثالث في مسابقتين من مسابقات الأكاديمية',
          points: [
            'شاركت في مسابقات تشمل تصنيف الصور، وتوليد الصور وترميمها، وتجزئة الكائنات، ومعالجة اللغة الطبيعية، ومهام الصوت.',
            'تجزئة الخلايا: المركز الثالث بين 24 فريقًا. شبكة ConvNeXt-Tiny U-Net تتنبأ بخريطة مسافات مطبعة، ويجري فك ترميزها بمستجمعات محكومة بالعلامات: 0.8144 لمقياس F1 على تقسيم مجمّع يراعي التكرارات، و0.5472 على المجموعة الخاصة.',
            'ترميم الصور: المركز الثالث. لم تُقدَّم أقنعة الاختبار، لذلك كان على استعادة الأقنعة واختيار البيانات والترميم أن تعمل معًا: درجة FID بلغت 12.02 عبر 8,000 صورة أُعيد بناؤها.',
          ],
          tags: ['الرؤية الحاسوبية', 'تجزئة الكائنات', 'MI-GAN', 'PyTorch'],
          links: [
            { label: 'مستودع الترميم', href: links.kaggleInpaintingRepository, external: true },
            { label: 'دفتر Kaggle', href: links.kaggleInpainting, external: true },
          ],
        },
      ],
    },
    projects: {
      title: 'المشاريع',
      lede: 'العمل الذي يقف خلف الملخص، بالتفصيل الذي يبحث عنه القارئ التقني.',
      roleLabel: 'الدور',
      items: [
        {
          id: 'project-onkith',
          name: 'OnKith: ذكاء اصطناعي طرفي يحفظ الخصوصية',
          status: 'مشروع تخرج تدريب أكاديمية كاوست | تقييم النموذج منشور',
          featured: true,
          description:
            'OnKith مساعد صوتي يضع الخصوصية أولًا: يحوّل الكلام إلى نص ويزيل المعلومات التعريفية بالكامل على الجهاز. توليت نموذج كشف المعلومات الخاصة: اختيار النموذج الأساس، وتصميم البيانات والتسميات، والتدريب، والتقييم، والتكميم إلى INT8 لهدف Raspberry Pi 5.',
          points: [
            'ضبطت TinyBERT-4 لتصنيف الرموز بنظام BIO عبر 33 نوعًا من الكيانات، وبلغت 0.957 لمقياس F1 على مستوى الكيانات على تقسيم محتجز من 40,908 صفوف لم يُستخدم في التدريب أو الاختيار، ثم خفضت حجم الملف من 54.5 MB إلى 13.7 MB عبر ONNX بصيغة INT8 مقابل 0.3 نقطة فقط.',
            'اختبرت المقياس الرئيسي بدل الاكتفاء به: بتثبيت العنوان والجملة وتغيير النطاق فقط، تبيّن أن النموذج يتعرف على مزودي البريد الشائعين ويخفق في النادر منها، أي أن جزءًا من درجة 0.99 للبريد الإلكتروني كان حفظًا.',
            'أعدت بناء النموذج على DeBERTa-v3-xsmall عبر تصنيف من 31 كيانًا بعد أن كشف التقييم اختلالًا في البيانات، فارتفع مقياس F1 خارج التوزيع من 0.46 إلى 0.62 واستدعاء المحارف الخاصة من 0.32 إلى 0.84.',
            'قِست المسار كاملًا على الجهاز المستهدف، بما في ذلك اختبار صوتي متكامل ينسب كل إخفاق إلى المرحلة المسببة له، ونشرت التقييم في مستودع عام يتضمن مخرجات الدفاتر وحدود النتائج.',
          ],
          tags: ['الخصوصية', 'تصنيف الرموز', 'ONNX Runtime', 'INT8', 'الذكاء الاصطناعي الطرفي'],
          links: [
            { label: 'زيارة OnKith', href: links.onKith, external: true },
            { label: 'مستودع التقييم', href: links.onKithPublic, external: true },
            { label: 'OnKith على LinkedIn', href: links.onKithLinkedIn, external: true },
          ],
        },
        {
          id: 'project-esas',
          name: 'ESAS: Experience Saudi As a Saudi',
          status: 'مشروع تخرج مكتمل',
          role: 'منسق',
          featured: true,
          description:
            'ESAS مشروع تخرج لاكتشاف تجارب سياحية سعودية أصيلة ومنتقاة محليًا، بُني باستخدام Spring Boot وPostgreSQL وDocker وFlutter. نسقت فريقًا من ستة أعضاء، وتوليت المستودع ومجموعة التوثيق كاملة.',
          points: [
            'قدت الفريق من العصف الذهني إلى التخطيط وجمع المتطلبات وتجهيز العرض التجريبي.',
            'كتبت وثيقة متطلبات البرمجيات وصممت حالات الاستخدام ومسارات العمل ومخططات النظام لرحلات المسافر ومقدم الخدمة والمشرف.',
            'بنيت واختبرت ميزات الكتالوج والحجز والصلاحيات، ثم قدمت الملصق والعرض المباشر في معرض INJAZ 2026.',
          ],
          tags: ['هندسة المتطلبات', 'Spring Boot', 'PostgreSQL', 'Flutter', 'Docker'],
          image: {
            src: esasHomeHref,
            alt: 'الصفحة الرئيسية لمنصة ESAS تعرض تجارب سياحية سعودية أصيلة وخيارات البحث',
          },
          links: [
            { label: 'عرض وثيقة متطلبات البرمجيات (114 صفحة)', href: esasSrsHref, external: true },
          ],
        },
        {
          name: 'Flappy Bird: التعلم المعزز العميق',
          status: 'مشروع شخصي',
          description:
            'نموذج Dueling Double DQN مع Prioritized Experience Replay يتعلم Flappy Bird من متجه حالة من 12 ميزة، دُرّب بالكامل على CPU، مع بروتوكول تقييم مصمم بحيث لا تحسم حلقة محظوظة واحدة النتيجة.',
          points: [
            'شخّصت عدم الاستقرار في جولة التدريب الأولى من سجل تقييمها نفسه، إذ انخفض متوسط النقاط من 861 إلى 396 بين نقطتي تحقق متتاليتين.',
            'أعدت بناء الإجراء بمتوسط Polyak، ومواءمة اضمحلال الاستكشاف مع ميزانية التدريب بدل عدد خطوات ثابت.',
            'رتبت نقاط التحقق حسب أسوأ نتيجة عبر البذور قبل المتوسط، ثم تحققت على بذور غير مرئية: أفضل حلقة 5,120 أنبوبًا، ومتوسط خمس بذور محتجزة 400.',
          ],
          tags: ['التعلم المعزز', 'شبكات Q العميقة', 'PyTorch', 'تصميم التقييم'],
          links: [{ label: 'عرض المستودع', href: links.flappyBird, external: true }],
        },
        {
          name: 'التعرف على الإيماءات باستخدام IMU على XIAO: TinyML',
          status: 'مشروع مقرر في أكاديمية كاوست',
          description:
            'مسار TinyML متكامل يعمل على Seeed XIAO nRF52840 Sense: يلتقط نوافذ إيماءات معنونة عبر المنفذ التسلسلي، ويدرب شبكة CNN أحادية الأبعاد صغيرة، ويحولها إلى TensorFlow Lite، ثم يشغّل الاستدلال على المتحكم الدقيق من دون أي جهاز آخر في الحلقة.',
          points: [
            'بنيت مخططين للالتقاط: أحدهما يُفعّل بالحركة للإيماءات النشطة، والآخر مستمر لفئة الخمول التي لا يمكن لأي عتبة تسجيلها.',
            'دربت شبكة CNN أحادية الأبعاد على نوافذ من 119 عينة وستة محاور بتردد يقارب 100 Hz، مع تقسيم محتجز طبقي وأوزان فئات متوازنة.',
            'نشرت النموذج عبر TensorFlow Lite Micro ضمن مساحة بسعة 48 KB، مع إبقاء التطبيع متطابقًا على مستوى البايت بين التدريب والبرمجيات الثابتة.',
          ],
          tags: ['TinyML', 'TensorFlow Lite Micro', 'Embedded C++', 'شبكة CNN أحادية الأبعاد'],
          links: [{ label: 'عرض المستودع', href: links.edgeAiProject, external: true }],
        },
        {
          name: 'اللوحة الشخصية',
          status: 'هذا الموقع',
          description:
            'ملف أعمال ثنائي اللغة بالعربية والإنجليزية، بُني باستخدام React وTypeScript وVite وTailwind CSS، ونُشر كموقع ثابت على GitHub Pages.',
          points: [
            'واجهة أمامية فقط، مع ملفات محتوى منظمة تجمع الملف الشخصي والخبرة والمشاريع والمهارات في مكان واحد.',
            'وضعان فاتح وداكن، وتخطيط متجاوب، وعرض السيرة الذاتية وتنزيلها، وتنقل يمكن الوصول إليه.',
          ],
          tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
          links: [{ label: 'عرض المستودع', href: links.personalDashboard, external: true }],
        },
      ],
    },
    education: {
      title: 'التعليم',
      items: [
        {
          title: 'بكالوريوس هندسة البرمجيات',
          organization: 'جامعة أم القرى',
          period: 'أغسطس 2023 إلى يونيو 2027 المتوقع',
          status: 'المعدل 3.89 من 4.00',
          logoSrc: uquLogo,
          logoAlt: 'شعار جامعة أم القرى',
          description:
            'درجة في هندسة البرمجيات تغطي دورة الحياة كاملة: التخطيط والتصميم والتنفيذ والاختبار والتوثيق والعرض.',
          points: [
            'مقررات في هندسة المتطلبات، والمعمارية، والاختبار، وتحليل الأنظمة، والخوارزميات، وهياكل البيانات، والبرمجة كائنية التوجه.',
            'مشروع التخرج ESAS، نُسّق عبر فريق من ستة أعضاء وقُدّم في معرض INJAZ 2026.',
          ],
        },
        {
          title: 'تخصص الذكاء الاصطناعي',
          organization: 'أكاديمية كاوست',
          period: 'نوفمبر 2025 إلى أغسطس 2026',
          status: 'مكتمل',
          logoSrc: kaustAcademyLogo,
          logoAlt: 'شعار أكاديمية كاوست',
          description:
            'تخصص تنافسي متعدد المراحل، أكملته حتى البرنامج الصيفي النهائي للذكاء الاصطناعي لمدة ثمانية أسابيع في جامعة الملك خالد.',
          points: [
            'اختِرت ضمن أفضل 100 طالب من أكثر من 14,000 متقدم، وتقدمت عبر كل المراحل.',
            'ثلاثة مسارات في البرنامج الصيفي: الرؤية الحاسوبية والنماذج التوليدية، والتعلم المعزز، ومعالجة اللغة الطبيعية.',
          ],
        },
      ],
      certificatesTitle: 'الشهادات',
      certificates: [
        'الذكاء الاصطناعي المتقدم، أكاديمية كاوست',
        'أساسيات التعلم العميق، NVIDIA',
        'الشبكات العصبية الالتفافية، DeepLearning.AI',
        'الجبر الخطي لتعلم الآلة وعلم البيانات، DeepLearning.AI',
        'مقدمة في علم البيانات باستخدام Python، جامعة ميشيغان',
      ],
    },
    cv: {
      title: 'السيرة الذاتية',
      cardText: 'صفحة واحدة تضم السجل الكامل للخبرة والمشاريع والتعليم والمهارات.',
      viewButton: 'عرض السيرة الذاتية',
      downloadButton: 'تنزيل السيرة الذاتية',
      closeButton: 'إغلاق',
      closeAriaLabel: 'إغلاق عارض السيرة الذاتية',
      modalTitle: 'السيرة الذاتية ليحيى الشريف',
      fileName: cvFileName,
      href: cvHref,
    },
    posts: {
      title: 'محطات',
      viewButton: 'عرض على LinkedIn',
      previousButton: 'المنشور السابق',
      nextButton: 'المنشور التالي',
      positionLabel: (current, total) => `المنشور ${current} من ${total}`,
      items: [
        {
          title: 'داعمو ومستثمرو المدرسة الصيفية للذكاء الاصطناعي في أكاديمية كاوست',
          description:
            'لقاء داعمي ومستثمري المدرسة الصيفية للذكاء الاصطناعي 2026 ونقاش حول تعليم الذكاء الاصطناعي والمسارات المهنية ومشاريع الطلاب.',
          embedUrl: links.embedSummerSchool,
          postUrl: links.postSummerSchool,
          iframeTitle: 'منشور LinkedIn عن لقاء داعمي ومستثمري المدرسة الصيفية لأكاديمية كاوست',
        },
        {
          title: 'مشروع التخرج ESAS',
          description:
            'منشور عن ESAS، مشروع تخرجي الذي يركز على تجارب سياحية سعودية أصيلة ومنتقاة محليًا.',
          embedUrl: links.embedEsas,
          postUrl: links.postEsas,
          iframeTitle: 'منشور LinkedIn عن مشروع التخرج ESAS',
        },
        {
          title: 'من المرحلة الثالثة إلى الرابعة في أكاديمية كاوست',
          description: 'منشور عن إنهاء المرحلة الثالثة في أكاديمية كاوست والقبول في المرحلة الرابعة.',
          embedUrl: links.embedKaust,
          postUrl: links.postKaust,
          iframeTitle: 'منشور LinkedIn عن المرحلة الثالثة والرابعة في أكاديمية كاوست',
        },
      ],
    },
    contact: {
      title: 'التواصل',
      lede: 'للفرص، أو التعاون، أو التحية المهنية.',
      options: [
        {
          title: 'LinkedIn',
          description: 'تواصل معي مهنيًا وتابع تحديثات المشاريع.',
          href: links.linkedin,
          buttonText: 'التواصل عبر LinkedIn',
          external: true,
        },
        {
          title: 'Email',
          description: 'أرسل رسالة مباشرة حول الفرص أو الأسئلة.',
          href: `mailto:${links.email}`,
          buttonText: 'إرسال بريد إلكتروني',
          external: false,
        },
        {
          title: 'GitHub',
          description: 'تصفح المستودعات العامة خلف هذه المشاريع.',
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
