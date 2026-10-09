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

export type ProjectFigure = {
  src: string;
  alt: string;
  /** Intrinsic size, so the page does not jump while the image loads. */
  width: number;
  height: number;
  caption: string;
  isPhoto?: boolean;
};

export type BrandMark = {
  src: string;
  alt: string;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  location?: string;
  focus?: string;
  brandMark?: BrandMark;
  points: string[];
  tags: string[];
  evidence?: ProjectFigure;
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
  brandMark?: BrandMark;
  figure?: ProjectFigure;
  links?: LocalizedLink[];
};

export type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  note?: string;
  /** Rendered preview of the certificate; omitted when no copy is published. */
  image?: {
    src: string;
    thumbnailSrc: string;
    alt: string;
    width: number;
    height: number;
  };
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
      switchToLight: string;
      switchToDark: string;
    };
  };
  hero: {
    title: string;
    proof: string;
    intro: string;
    profileLocation: string;
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
    certificates: Certificate[];
    certificatePreview: {
      open: string;
      closeButton: string;
      closeAriaLabel: string;
    };
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
    indexLabel: string;
    loading: string;
    unavailable: string;
    items: Post[];
  };
  contact: {
    title: string;
    lede: string;
    options: ContactOption[];
  };
  figureViewer: {
    open: string;
    closeButton: string;
    closeAriaLabel: string;
  };
  externalLinkLabel: string;
  backToTop: string;
  copyright: (year: number) => string;
};

const cvFileName = 'yahya_alsharif_cv.pdf';
const cvHref = `${import.meta.env.BASE_URL}cv/${cvFileName}`;
const esasHomeHref = `${import.meta.env.BASE_URL}projects/esas-home.webp`;
const esasSrsHref = `${import.meta.env.BASE_URL}projects/esas-srs.pdf`;
const onKithLogoHref = `${import.meta.env.BASE_URL}projects/onkith-logo.svg`;
const onKithChartHref = `${import.meta.env.BASE_URL}projects/onkith-ood-comparison.webp`;
const flappyChartHref = `${import.meta.env.BASE_URL}projects/flappy-evaluation.webp`;
const cellLeaderboardHref = `${import.meta.env.BASE_URL}projects/cell-segmentation-leaderboard.webp`;
const mawhubMarkHref = `${import.meta.env.BASE_URL}experience/mawhub-mark.svg`;
const worldSkillsBadgeHref = `${import.meta.env.BASE_URL}experience/worldskills-badge.webp`;
const worldSkillsPhotoHref = `${import.meta.env.BASE_URL}experience/worldskills-software-testing.webp`;

const certificateImage = (slug: string, alt: string, width: number, height: number) => ({
  src: `${import.meta.env.BASE_URL}certificates/${slug}.webp`,
  thumbnailSrc: `${import.meta.env.BASE_URL}certificates/${slug}-thumb.webp`,
  alt,
  width,
  height,
});

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
  onKithRepository: 'https://github.com/YahyaAlsharif/OnKith',
  email: 'yahya.alsharif567@gmail.com',
  kaggleCellSegmentationRepository:
    'https://github.com/YahyaAlsharif/kaust-cell-instance-segmentation',
  kaggleCellSegmentation:
    'https://www.kaggle.com/code/ghostylicious/3rd-place-object-centric-convnext-unet-distance',
  kaggleInpaintingRepository: 'https://github.com/YahyaAlsharif/Kaggle_inpainting_comp',
  kaggleInpainting: 'https://www.kaggle.com/code/ghostylicious/mi-gan-inpainting-comp-03',
  postWorldSkills: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7511493575872823296',
  postMawhub: 'https://www.linkedin.com/feed/update/urn:li:share:7505719217787187200',
  postGraduation: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7502789692703272960',
  postSummerInternship: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7496956199477600256',
  postCellSegmentation: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7491964300434030592',
  postSummerSchool: 'https://www.linkedin.com/feed/update/urn:li:share:7479585722992226305',
  postEsas: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7470469804227932160',
  postKaust: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7439279422131589120',
  embedWorldSkills:
    'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7511493575872823296?collapsed=1',
  embedMawhub:
    'https://www.linkedin.com/embed/feed/update/urn:li:share:7505719217787187200?collapsed=1',
  embedGraduation:
    'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7502789692703272960?collapsed=1',
  embedSummerInternship:
    'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7496956199477600256?collapsed=1',
  embedCellSegmentation:
    'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7491964300434030592?collapsed=1',
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
        switchToLight: 'Switch to light mode',
        switchToDark: 'Switch to dark mode',
      },
    },
    hero: {
      title: "Hi, I'm Yahya Alsharif.",
      proof: 'AI Engineer @ Mawhub | Software Engineering Student',
      intro:
        'I build applied AI and software, from data, training and evaluation through edge deployment, testing and delivery. I represented Saudi Arabia in Software Testing at WorldSkills Shanghai 2026.',
      profileLocation: 'Makkah Region, Saudi Arabia',
      profileAlt: 'Professional headshot of Yahya Alsharif',
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
        'I work where software engineering and applied AI meet. As an AI Engineer at Mawhub, I take implementation work from product requirements to delivery: planning changes across existing codebases, implementing and testing them, and keeping what ships aligned with what was specified. Alongside that, I study Software Engineering at Umm Al-Qura University.',
        'On the AI side, I care about the whole path from data and label design through training and evaluation to quantisation and measurement on the hardware a model will actually run on. Testing is the other half of how I work: after four months of preparation, I represented Saudi Arabia in Software Testing at WorldSkills Shanghai 2026. I would rather report a measured result than a hopeful one.',
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
            'ONNX Runtime',
            'INT8 quantisation',
            'TensorFlow Lite',
            'OpenCV',
            'NumPy',
          ],
        },
        {
          title: 'Software Testing',
          skills: [
            'pytest',
            'Selenium',
            'Appium',
            'Postman',
            'Newman',
            'JMeter',
            'API, web, mobile and performance testing',
          ],
        },
        {
          title: 'Software Development',
          skills: [
            'Java',
            'TypeScript',
            'HTML',
            'CSS',
            'REST APIs',
            'React',
            'Vite',
            'Tailwind CSS',
            'Git',
            'GitHub',
            'Docker',
          ],
        },
        {
          title: 'Engineering Practice',
          skills: [
            'Requirements engineering (SRS)',
            'UML and BPMN modelling',
            'Code review',
            'Technical documentation',
          ],
        },
      ],
    },
    experience: {
      title: 'Experience',
      lede: 'AI engineering at Mawhub, an applied AI internship at KAUST Academy, and competition in software testing and machine learning.',
      items: [
        {
          role: 'AI Engineer',
          organization: 'Mawhub',
          period: 'Sep 2026 to Present',
          focus: 'Implementation of AI and software changes, from product requirements to delivery',
          brandMark: { src: mawhubMarkHref, alt: 'Mawhub logo' },
          points: [
            'Own implementation work from product requirements to delivery, turning product intent into technical plans across existing codebases.',
            'Identify and help resolve the technical and product decisions that implementation depends on.',
            'Implement, test and review AI and software changes through Git and GitHub workflows, documenting and integrating each change while keeping delivered behaviour aligned with the documented requirements.',
          ],
          tags: ['Applied AI', 'Software engineering', 'Testing', 'Code review', 'Git and GitHub'],
        },
        {
          role: 'AI Intern',
          organization: 'KAUST Academy',
          period: 'Jun 2026 to Aug 2026',
          location: 'King Khalid University, Abha',
          focus: 'Privacy-model track of a six-person team project during an eight-week AI internship',
          brandMark: { src: kaustAcademyLogo, alt: 'KAUST Academy logo' },
          points: [
            'Owned the privacy-model track of a team project mentored by KAUST faculty and researchers: dataset and label design, training, evaluation methodology, failure analysis and model iteration for on-device PII detection.',
            "Applied the internship's Edge AI and inference-optimisation work hands-on, carrying a transformer model from PyTorch training through ONNX export and INT8 quantisation to benchmarking on Raspberry Pi hardware.",
          ],
          tags: ['PyTorch', 'Transformers', 'ONNX Runtime', 'INT8', 'Raspberry Pi', 'Edge AI'],
          links: [{ label: 'Read the full project', href: '#project-onkith' }],
        },
        {
          role: 'Software Testing Competitor',
          organization: 'WorldSkills Shanghai 2026',
          period: 'Sep 2026',
          location: 'Shanghai, China',
          focus: 'Represented Saudi Arabia in Software Testing at the international WorldSkills Competition',
          brandMark: {
            src: worldSkillsBadgeHref,
            alt: 'WorldSkills Shanghai 2026 Software Testing credential badge',
          },
          points: [
            "Selected as my college's candidate to train for the competition, then completed about four months of intensive preparation before representing Saudi Arabia in Shanghai.",
            'Tested unfamiliar systems against timed task specifications across API, web, mobile, performance and white-box testing.',
            'Worked with Postman and Newman for APIs, Selenium for the web, Appium for mobile, JMeter for performance and pytest for code-level tests.',
          ],
          tags: ['Postman', 'Newman', 'Selenium', 'Appium', 'JMeter', 'pytest'],
          evidence: {
            src: worldSkillsPhotoHref,
            width: 1600,
            height: 758,
            alt: 'Group photo of Software Testing competitors and experts waving in front of the skill 11 Software Testing area at WorldSkills Shanghai 2026',
            caption: 'Software Testing competitors and experts at WorldSkills Shanghai 2026.',
            isPhoto: true,
          },
        },
        {
          role: 'Kaggle Competitor',
          organization: 'KAUST Academy',
          period: 'Jul 2026 to Aug 2026',
          focus: 'Third place in two of the Academy competitions',
          brandMark: { src: kaustAcademyLogo, alt: 'KAUST Academy logo' },
          points: [
            'Competed across image classification, image generation and inpainting, instance segmentation, natural language and audio tasks.',
            'Cell instance segmentation, third of 24 teams. A ConvNeXt-Tiny U-Net regressing a normalised distance map, decoded by marker-controlled watershed: 0.8144 instance F1 on a near-duplicate-aware grouped split and 0.5472 private instance F1.',
            'Image inpainting, third place. No test masks were supplied, so mask recovery, data selection and inpainting all had to work together: FID 12.02 across 8,000 reconstructed images.',
          ],
          tags: ['Computer vision', 'Instance segmentation', 'MI-GAN', 'PyTorch'],
          evidence: {
            src: cellLeaderboardHref,
            width: 1485,
            height: 681,
            alt: 'Final private Kaggle leaderboard for the cell instance segmentation challenge, with the KAUST Makkah team third at 0.5472',
            caption: 'Cell instance segmentation, final private leaderboard: third of 24 teams at 0.5472.',
          },
          links: [
            {
              label: 'Cell segmentation repository',
              href: links.kaggleCellSegmentationRepository,
              external: true,
            },
            {
              label: 'Cell segmentation Kaggle notebook',
              href: links.kaggleCellSegmentation,
              external: true,
            },
            { label: 'Inpainting repository', href: links.kaggleInpaintingRepository, external: true },
            { label: 'Inpainting Kaggle notebook', href: links.kaggleInpainting, external: true },
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
          name: 'OnKith: Privacy-Preserving Edge AI',
          status: 'KAUST Academy team project | Benchmarked on Raspberry Pi 5',
          role: 'Privacy model, data, evaluation and deployment',
          featured: true,
          description:
            'OnKith is a six-person KAUST Academy team project for privacy-preserving local voice processing: speech is transcribed and personal information is masked on the device, so private details never have to leave it. My track was the privacy model, from its data and evaluation design to the quantised artefact running on a Raspberry Pi 5.',
          points: [
            'Took the privacy model from a BiLSTM span baseline through TinyBERT-4 to DeBERTa-v3-xsmall, choosing the final backbone for out-of-distribution robustness rather than headline in-distribution F1.',
            'Redesigned the data and evaluation strategy after TinyBERT failed out of distribution: a 31-entity privacy ontology over a 284,619-row English corpus with 2,088,335 labelled spans, leakage-aware splits, hard negatives and a frozen out-of-distribution benchmark scored only once.',
            'On that frozen benchmark, moving to DeBERTa raised typed entity F1 from 0.46 to 0.62 and private-character recall from 0.32 to 0.84, and cut the hard-negative false-positive rate from 0.65 to 0.24.',
            'Released the model as a 78.5 MiB INT8 ONNX artefact after tracing an apparent quantisation collapse to a span-decoding defect. On a 4 GB Raspberry Pi 5 it reaches 0.945 typed F1 at 62 ms median masking latency, inside a voice pipeline that runs faster than real time on average (mean RTF 0.63).',
          ],
          tags: ['Privacy', 'PyTorch', 'TinyBERT', 'DeBERTa-v3', 'ONNX Runtime', 'INT8', 'Raspberry Pi 5'],
          brandMark: {
            src: onKithLogoHref,
            alt: 'OnKith logo',
          },
          figure: {
            src: onKithChartHref,
            width: 1600,
            height: 664,
            alt: 'Three bar charts comparing TinyBERT-4 INT8 and DeBERTa-v3-xsmall INT8 on out-of-distribution fixtures: typed entity F1, private character recall and hard-negative false-positive rate, each on the OOD dev set and the frozen OOD final set',
            caption:
              'Out-of-distribution behaviour on identical 360-case fixtures: DeBERTa-v3-xsmall (Model V2) against TinyBERT-4 (Model V1). The frozen final set was scored once.',
          },
          links: [
            { label: 'Visit OnKith', href: links.onKith, external: true },
            { label: 'Project repository', href: links.onKithRepository, external: true },
            { label: 'OnKith on LinkedIn', href: links.onKithLinkedIn, external: true },
          ],
        },
        {
          id: 'project-esas',
          name: 'ESAS: Experience Saudi As a Saudi',
          status: 'Completed graduation project | Working prototype',
          role: 'Coordinator',
          featured: true,
          description:
            'ESAS is a six-person graduation project for discovering authentic, locally curated Saudi tourism experiences: a three-role prototype for travellers, experience providers and administrators. I coordinated the team, owned the repository and much of the formal documentation, and contributed to both the backend and the frontend.',
          points: [
            'Coordinated the team from concept through requirements, design and demonstration, and owned the GitHub repository, merge reviews and integration.',
            'Wrote much of the Software Requirements Specification and the UML and BPMN design documentation for traveller, provider and administrator journeys.',
            'Implemented backend and frontend features for catalogue browsing, role-based access, booking, and the provider and admin dashboards, on Java 21 with Spring Boot, PostgreSQL, Flyway, Spring Security with JWT, REST APIs, Flutter and Docker.',
            'The prototype covers authentication and roles, catalogue filtering, experience details, cart and simulated checkout, bookings, wishlists, provider onboarding and submissions, admin approval and moderation, and an Arabic and English interface. Presented as a poster and live demo at INJAZ 2026.',
          ],
          tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Flyway', 'JWT', 'Flutter', 'Docker'],
          figure: {
            src: esasHomeHref,
            width: 1600,
            height: 552,
            alt: 'ESAS homepage showing authentic Saudi tourism experiences and search controls',
            caption: 'Traveller-facing catalogue with keyword, city and category search.',
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
          figure: {
            src: flappyChartHref,
            width: 1650,
            height: 600,
            alt: 'Line chart of minimum, mean and maximum greedy pipe score across scheduled training transitions, with the minimum staying low while the maximum climbs',
            caption:
              'Why checkpoints are ranked on the worst seed: the maximum swings wildly while the minimum barely moves.',
          },
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
            'Light and dark themes, responsive layout, CV and certificate previews, and accessible anchor navigation.',
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
          period: 'Nov 2025 to Jun 2026',
          status: 'Completed',
          logoSrc: kaustAcademyLogo,
          logoAlt: 'KAUST Academy logo',
          description:
            'A competitive multi-stage specialisation covering introductory and advanced artificial intelligence before qualification for the separate 2026 Summer Internship.',
          points: [
            'Selected among the top 100 students from more than 14,000 applicants and passed every stage to qualify for the internship.',
          ],
        },
      ],
      certificatesTitle: 'Certificates',
      certificates: [
        {
          title: 'Artificial Intelligence Specialization Summer Program',
          issuer: 'KAUST Academy',
          date: 'Jun to Aug 2026',
          note: '320 training hours at King Khalid University, Abha',
          image: certificateImage(
            'kaust-ai-summer-program',
            'KAUST Academy certificate for completing the Artificial Intelligence Specialization Summer Program, 320 training hours at King Khalid University, Abha, June 28 to August 20, 2026',
            1600,
            1132,
          ),
        },
        {
          title: 'Software Testing Competitor',
          issuer: 'WorldSkills Shanghai 2026',
          date: 'Sep 2026',
          note: 'Recognises participation and achievement as a Competitor',
          image: certificateImage(
            'worldskills-shanghai-2026-software-testing',
            'WorldSkills certificate recognising Yahya Alsharif for participation and achievement as a Competitor in Software Testing at WorldSkills Shanghai 2026',
            1132,
            1600,
          ),
        },
        {
          title: 'Advanced Artificial Intelligence',
          issuer: 'KAUST Academy',
          date: 'Feb 2026',
          note: 'Completed with distinction',
          image: certificateImage(
            'kaust-advanced-ai',
            'KAUST Academy certificate for completing the Advanced Artificial Intelligence course with distinction at Umm Al-Qura University, February 2026',
            1600,
            1132,
          ),
        },
        {
          title: 'Fundamentals of Deep Learning',
          issuer: 'NVIDIA',
          date: 'Nov 2025',
          image: certificateImage(
            'nvidia-fundamentals-of-deep-learning',
            'NVIDIA certificate of competency for Fundamentals of Deep Learning, issued November 29, 2025',
            1237,
            1600,
          ),
        },
        {
          title: 'Linear Algebra for Machine Learning and Data Science',
          issuer: 'DeepLearning.AI',
          date: 'Dec 2025',
          image: certificateImage(
            'deeplearningai-linear-algebra',
            'DeepLearning.AI course certificate for Linear Algebra for Machine Learning and Data Science, offered through Coursera, December 2025',
            1600,
            1237,
          ),
        },
        {
          title: 'Convolutional Neural Networks',
          issuer: 'DeepLearning.AI',
        },
      ],
      certificatePreview: {
        open: 'View certificate',
        closeButton: 'Close',
        closeAriaLabel: 'Close certificate preview',
      },
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
      indexLabel: 'All milestones',
      loading: 'Loading the LinkedIn post…',
      unavailable: 'This LinkedIn post could not be shown here.',
      items: [
        {
          title: 'Representing Saudi Arabia at WorldSkills Shanghai 2026',
          description:
            'Competing in Software Testing at WorldSkills Shanghai 2026, working through challenging and sometimes unexpected testing tasks under pressure alongside competitors from around the world.',
          embedUrl: links.embedWorldSkills,
          postUrl: links.postWorldSkills,
          iframeTitle: 'LinkedIn post about competing in Software Testing at WorldSkills Shanghai 2026',
        },
        {
          title: 'Joining Mawhub',
          description:
            'Joining MawHub, The Talent Hub, to apply what I have learned in AI and software engineering to a real-world product.',
          embedUrl: links.embedMawhub,
          postUrl: links.postMawhub,
          iframeTitle: 'LinkedIn post about joining Mawhub',
        },
        {
          title: 'Completing the KAUST Academy AI Specialization',
          description:
            'Reflecting on the final eight-week summer program, presenting OnKith and my privacy-intelligence work at KAUST, and the people who made this journey possible.',
          embedUrl: links.embedGraduation,
          postUrl: links.postGraduation,
          iframeTitle: 'LinkedIn post about completing the KAUST Academy AI Specialization',
        },
        {
          title: 'Eight weeks at KAUST Academy',
          description:
            'Finishing the eight-week KAUST Academy AI Summer Internship, covering computer vision, NLP, generative models, reinforcement learning and Edge AI, alongside the OnKith privacy model and its Raspberry Pi 5 deployment.',
          embedUrl: links.embedSummerInternship,
          postUrl: links.postSummerInternship,
          iframeTitle: 'LinkedIn post about completing the KAUST Academy AI Summer Internship',
        },
        {
          title: 'Third place in cell instance segmentation',
          description:
            'Third place in the KAUST Academy cell instance segmentation challenge, and what training on crops centred on individual cells taught us about knowing when to stop tuning.',
          embedUrl: links.embedCellSegmentation,
          postUrl: links.postCellSegmentation,
          iframeTitle: 'LinkedIn post about third place in the cell instance segmentation challenge',
        },
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
            'ESAS, my graduation project focused on authentic, locally curated tourism experiences in Saudi Arabia.',
          embedUrl: links.embedEsas,
          postUrl: links.postEsas,
          iframeTitle: 'LinkedIn post about the ESAS graduation project',
        },
        {
          title: 'KAUST Academy Stage 3 to Stage 4',
          description: 'Finishing KAUST Academy Stage 3 and being accepted into Stage 4.',
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
    figureViewer: {
      open: 'View larger',
      closeButton: 'Close',
      closeAriaLabel: 'Close enlarged figure',
    },
    externalLinkLabel: '(opens in a new tab)',
    backToTop: 'Back to top',
    copyright: (year) => `© ${year} Yahya Alsharif`,
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
        switchToLight: 'التبديل إلى الوضع الفاتح',
        switchToDark: 'التبديل إلى الوضع الداكن',
      },
    },
    hero: {
      title: 'مرحبًا، أنا يحيى الشريف.',
      proof: 'مهندس ذكاء اصطناعي في Mawhub | طالب هندسة برمجيات',
      intro:
        'أبني حلولًا تطبيقية في الذكاء الاصطناعي والبرمجيات، من البيانات والتدريب والتقييم إلى النشر على الأجهزة الطرفية والاختبار والتسليم. ومثّلت المملكة العربية السعودية في اختبار البرمجيات في WorldSkills Shanghai 2026.',
      profileLocation: 'منطقة مكة المكرمة، المملكة العربية السعودية',
      profileAlt: 'صورة شخصية احترافية ليحيى الشريف',
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
        'أعمل حيث تلتقي هندسة البرمجيات بالذكاء الاصطناعي التطبيقي. بصفتي مهندس ذكاء اصطناعي في Mawhub، أتولى أعمال التنفيذ من متطلبات المنتج حتى التسليم: أخطط للتغييرات عبر قواعد شيفرة قائمة، وأنفذها وأختبرها، وأحرص على أن يطابق ما يُسلَّم ما جرى تحديده. وإلى جانب ذلك أدرس هندسة البرمجيات في جامعة أم القرى.',
        'في جانب الذكاء الاصطناعي، يهمني المسار كاملًا: من تصميم البيانات والتسميات، مرورًا بالتدريب والتقييم، وصولًا إلى التكميم والقياس على الجهاز الذي سيعمل عليه النموذج فعلًا. والاختبار هو النصف الآخر من طريقة عملي: بعد أربعة أشهر من الاستعداد، مثّلت المملكة العربية السعودية في اختبار البرمجيات في WorldSkills Shanghai 2026. وأفضّل أن أعرض نتيجة مقيسة على نتيجة مأمولة.',
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
            'ONNX Runtime',
            'تكميم INT8',
            'TensorFlow Lite',
            'OpenCV',
            'NumPy',
          ],
        },
        {
          title: 'اختبار البرمجيات',
          skills: [
            'pytest',
            'Selenium',
            'Appium',
            'Postman',
            'Newman',
            'JMeter',
            'اختبار واجهات API والويب والجوال والأداء',
          ],
        },
        {
          title: 'تطوير البرمجيات',
          skills: [
            'Java',
            'TypeScript',
            'HTML',
            'CSS',
            'واجهات REST',
            'React',
            'Vite',
            'Tailwind CSS',
            'Git',
            'GitHub',
            'Docker',
          ],
        },
        {
          title: 'الممارسات الهندسية',
          skills: [
            'هندسة المتطلبات (SRS)',
            'النمذجة بـ UML وBPMN',
            'مراجعة الشيفرة',
            'التوثيق التقني',
          ],
        },
      ],
    },
    experience: {
      title: 'الخبرة',
      lede: 'هندسة الذكاء الاصطناعي في Mawhub، وتدريب تطبيقي في الذكاء الاصطناعي بأكاديمية كاوست، ومنافسات في اختبار البرمجيات وتعلم الآلة.',
      items: [
        {
          role: 'مهندس ذكاء اصطناعي',
          organization: 'Mawhub',
          period: 'سبتمبر 2026 حتى الآن',
          focus: 'تنفيذ تغييرات الذكاء الاصطناعي والبرمجيات من متطلبات المنتج حتى التسليم',
          brandMark: { src: mawhubMarkHref, alt: 'شعار Mawhub' },
          points: [
            'أتولى أعمال التنفيذ من متطلبات المنتج حتى التسليم، وأحوّل مقاصد المنتج إلى خطط تقنية عبر قواعد شيفرة قائمة.',
            'أحدد القرارات التقنية وقرارات المنتج التي يعتمد عليها التنفيذ، وأساعد في حسمها.',
            'أنفذ تغييرات الذكاء الاصطناعي والبرمجيات وأختبرها وأراجعها عبر مسارات عمل Git وGitHub، وأوثق كل تغيير وأدمجه مع الحفاظ على توافق السلوك المُسلَّم مع المتطلبات الموثقة.',
          ],
          tags: ['الذكاء الاصطناعي التطبيقي', 'هندسة البرمجيات', 'الاختبار', 'مراجعة الشيفرة', 'Git وGitHub'],
        },
        {
          role: 'متدرب ذكاء اصطناعي',
          organization: 'أكاديمية كاوست',
          period: 'يونيو 2026 إلى أغسطس 2026',
          location: 'جامعة الملك خالد، أبها',
          focus: 'مسار نموذج الخصوصية في مشروع فريق من ستة أعضاء خلال تدريب في الذكاء الاصطناعي لمدة ثمانية أسابيع',
          brandMark: { src: kaustAcademyLogo, alt: 'شعار أكاديمية كاوست' },
          points: [
            'توليت مسار نموذج الخصوصية في مشروع جماعي بإشراف أعضاء هيئة تدريس وباحثين من كاوست: تصميم البيانات والتسميات، والتدريب، ومنهجية التقييم، وتحليل الإخفاقات، وتطوير النموذج على مراحل لكشف المعلومات الشخصية على الجهاز.',
            'طبقت عمليًا ما تناوله التدريب في الذكاء الاصطناعي الطرفي وتحسين الاستدلال، فنقلت نموذج محولات من التدريب في PyTorch إلى التصدير بصيغة ONNX والتكميم إلى INT8، وصولًا إلى قياس أدائه على Raspberry Pi.',
          ],
          tags: ['PyTorch', 'Transformers', 'ONNX Runtime', 'INT8', 'Raspberry Pi', 'الذكاء الاصطناعي الطرفي'],
          links: [{ label: 'اقرأ تفاصيل المشروع', href: '#project-onkith' }],
        },
        {
          role: 'متسابق في اختبار البرمجيات',
          organization: 'WorldSkills Shanghai 2026',
          period: 'سبتمبر 2026',
          location: 'شنغهاي، الصين',
          focus: 'مثّلت المملكة العربية السعودية في اختبار البرمجيات في مسابقة WorldSkills الدولية',
          brandMark: {
            src: worldSkillsBadgeHref,
            alt: 'شارة اعتماد WorldSkills Shanghai 2026 في اختبار البرمجيات',
          },
          points: [
            'اختارتني كليتي مرشحًا للتدرب على المسابقة، فأتممت نحو أربعة أشهر من الاستعداد المكثف قبل تمثيل المملكة العربية السعودية في شنغهاي.',
            'اختبرت أنظمة غير مألوفة وفق مواصفات مهام محددة بزمن، في اختبار واجهات API والويب والجوال والأداء واختبار الصندوق الأبيض.',
            'استخدمت Postman وNewman لواجهات API، وSelenium للويب، وAppium للجوال، وJMeter للأداء، وpytest لاختبارات الشيفرة.',
          ],
          tags: ['Postman', 'Newman', 'Selenium', 'Appium', 'JMeter', 'pytest'],
          evidence: {
            src: worldSkillsPhotoHref,
            width: 1600,
            height: 758,
            alt: 'صورة جماعية لمتسابقي وخبراء اختبار البرمجيات يلوّحون أمام منطقة المهارة 11 لاختبار البرمجيات في WorldSkills Shanghai 2026',
            caption: 'متسابقو وخبراء اختبار البرمجيات في WorldSkills Shanghai 2026.',
            isPhoto: true,
          },
        },
        {
          role: 'متسابق في Kaggle',
          organization: 'أكاديمية كاوست',
          period: 'يوليو 2026 إلى أغسطس 2026',
          focus: 'المركز الثالث في مسابقتين من مسابقات الأكاديمية',
          brandMark: { src: kaustAcademyLogo, alt: 'شعار أكاديمية كاوست' },
          points: [
            'شاركت في مسابقات تشمل تصنيف الصور، وتوليد الصور وترميمها، وتجزئة الكائنات، ومعالجة اللغة الطبيعية، ومهام الصوت.',
            'تجزئة الخلايا: المركز الثالث بين 24 فريقًا. شبكة ConvNeXt-Tiny U-Net تتنبأ بخريطة مسافات مطبعة، ويجري فك ترميزها بمستجمعات محكومة بالعلامات: 0.8144 لمقياس F1 على تقسيم مجمّع يراعي التكرارات، و0.5472 على المجموعة الخاصة.',
            'ترميم الصور: المركز الثالث. لم تُقدَّم أقنعة الاختبار، لذلك كان على استعادة الأقنعة واختيار البيانات والترميم أن تعمل معًا: درجة FID بلغت 12.02 عبر 8,000 صورة أُعيد بناؤها.',
          ],
          tags: ['الرؤية الحاسوبية', 'تجزئة الكائنات', 'MI-GAN', 'PyTorch'],
          evidence: {
            src: cellLeaderboardHref,
            width: 1485,
            height: 681,
            alt: 'لوحة النتائج الخاصة النهائية لمسابقة تجزئة الخلايا، ويظهر فيها فريق كاوست مكة في المركز الثالث بنتيجة 0.5472',
            caption: 'تجزئة الخلايا، لوحة النتائج الخاصة النهائية: المركز الثالث بين 24 فريقًا بنتيجة 0.5472.',
          },
          links: [
            {
              label: 'مستودع تجزئة الخلايا',
              href: links.kaggleCellSegmentationRepository,
              external: true,
            },
            {
              label: 'دفتر Kaggle لتجزئة الخلايا',
              href: links.kaggleCellSegmentation,
              external: true,
            },
            { label: 'مستودع ترميم الصور', href: links.kaggleInpaintingRepository, external: true },
            { label: 'دفتر Kaggle لترميم الصور', href: links.kaggleInpainting, external: true },
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
          status: 'مشروع جماعي في أكاديمية كاوست | جرى قياسه على Raspberry Pi 5',
          role: 'نموذج الخصوصية والبيانات والتقييم والنشر',
          featured: true,
          description:
            'OnKith مشروع جماعي من ستة أعضاء في أكاديمية كاوست لمعالجة الصوت محليًا مع الحفاظ على الخصوصية: يُحوَّل الكلام إلى نص وتُخفى المعلومات الشخصية على الجهاز نفسه، فلا تحتاج التفاصيل الخاصة إلى مغادرته. كان مساري نموذج الخصوصية، من تصميم بياناته وتقييمه إلى النسخة المكممة التي تعمل على Raspberry Pi 5.',
          points: [
            'طورت نموذج الخصوصية من نموذج BiLSTM أساسي لكشف الامتدادات، مرورًا بـ TinyBERT-4، وصولًا إلى DeBERTa-v3-xsmall، واخترت البنية النهائية لمتانتها خارج التوزيع لا لأعلى درجة F1 داخله.',
            'أعدت تصميم استراتيجية البيانات والتقييم بعد إخفاق TinyBERT خارج التوزيع: تصنيف خصوصية من 31 كيانًا على مدونة إنجليزية من 284,619 صفًا و2,088,335 امتدادًا معنونًا، مع تقسيمات تمنع التسرب، وأمثلة سلبية صعبة، ومعيار ثابت خارج التوزيع لا يُقاس إلا مرة واحدة.',
            'على ذلك المعيار الثابت، رفع الانتقال إلى DeBERTa مقياس F1 للكيانات المصنفة من 0.46 إلى 0.62، واستدعاء المحارف الخاصة من 0.32 إلى 0.84، وخفض معدل الإيجابيات الكاذبة في الأمثلة السلبية الصعبة من 0.65 إلى 0.24.',
            'أصدرت النموذج بصيغة ONNX مكممة إلى INT8 بحجم 78.5 MiB بعد أن تتبعت انهيارًا ظاهريًا في التكميم إلى خلل في فك ترميز الامتدادات. وعلى Raspberry Pi 5 بذاكرة 4 GB بلغ 0.945 في F1 المصنف بوسيط زمن إخفاء 62 ms، ضمن مسار صوتي يعمل أسرع من الزمن الحقيقي في المتوسط (متوسط RTF يبلغ 0.63).',
          ],
          tags: ['الخصوصية', 'PyTorch', 'TinyBERT', 'DeBERTa-v3', 'ONNX Runtime', 'INT8', 'Raspberry Pi 5'],
          brandMark: {
            src: onKithLogoHref,
            alt: 'شعار OnKith',
          },
          figure: {
            src: onKithChartHref,
            width: 1600,
            height: 664,
            alt: 'ثلاثة مخططات أعمدة تقارن بين TinyBERT-4 INT8 وDeBERTa-v3-xsmall INT8 على بيانات خارج التوزيع: F1 للكيانات المصنفة، واستدعاء المحارف الخاصة، ومعدل الإيجابيات الكاذبة في الأمثلة السلبية الصعبة، على مجموعة التطوير والمجموعة النهائية الثابتة',
            caption:
              'السلوك خارج التوزيع على 360 حالة متطابقة: DeBERTa-v3-xsmall (Model V2) مقابل TinyBERT-4 (Model V1). قيست المجموعة النهائية الثابتة مرة واحدة فقط.',
          },
          links: [
            { label: 'زيارة OnKith', href: links.onKith, external: true },
            { label: 'مستودع المشروع', href: links.onKithRepository, external: true },
            { label: 'OnKith على LinkedIn', href: links.onKithLinkedIn, external: true },
          ],
        },
        {
          id: 'project-esas',
          name: 'ESAS: Experience Saudi As a Saudi',
          status: 'مشروع تخرج مكتمل | نموذج أولي عامل',
          role: 'منسق',
          featured: true,
          description:
            'ESAS مشروع تخرج لفريق من ستة أعضاء لاكتشاف تجارب سياحية سعودية أصيلة ومنتقاة محليًا: نموذج أولي بثلاثة أدوار للمسافرين ومقدمي التجارب والمشرفين. نسقت الفريق، وتوليت المستودع وجزءًا كبيرًا من التوثيق الرسمي، وساهمت في الواجهتين الخلفية والأمامية.',
          points: [
            'نسقت الفريق من الفكرة إلى المتطلبات والتصميم والعرض، وتوليت مستودع GitHub ومراجعات الدمج والتكامل.',
            'كتبت جزءًا كبيرًا من وثيقة متطلبات البرمجيات ووثائق التصميم بـ UML وBPMN لرحلات المسافر ومقدم الخدمة والمشرف.',
            'نفذت ميزات في الواجهتين الخلفية والأمامية لتصفح الكتالوج، والصلاحيات حسب الدور، والحجز، ولوحات مقدم الخدمة والمشرف، باستخدام Java 21 مع Spring Boot وPostgreSQL وFlyway وSpring Security مع JWT وواجهات REST وFlutter وDocker.',
            'يشمل النموذج الأولي المصادقة والأدوار، وتصفية الكتالوج، وتفاصيل التجارب، والسلة والدفع المحاكى، والحجوزات، وقوائم الأمنيات، وتسجيل مقدمي الخدمة وتقديم تجاربهم، وموافقة المشرف والإشراف على المحتوى، وواجهة بالعربية والإنجليزية. وقُدّم ملصقًا وعرضًا مباشرًا في معرض INJAZ 2026.',
          ],
          tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Flyway', 'JWT', 'Flutter', 'Docker'],
          figure: {
            src: esasHomeHref,
            width: 1600,
            height: 552,
            alt: 'الصفحة الرئيسية لمنصة ESAS تعرض تجارب سياحية سعودية أصيلة وخيارات البحث',
            caption: 'كتالوج موجه للمسافر مع بحث بالكلمة المفتاحية والمدينة والفئة.',
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
          figure: {
            src: flappyChartHref,
            width: 1650,
            height: 600,
            alt: 'مخطط خطي لأدنى ومتوسط وأعلى نتيجة أنابيب عبر خطوات التدريب المجدولة، إذ يبقى الحد الأدنى منخفضًا بينما يرتفع الحد الأعلى',
            caption:
              'لماذا تُرتب نقاط التحقق حسب أسوأ بذرة: الحد الأعلى يتأرجح بشدة بينما الحد الأدنى بالكاد يتحرك.',
          },
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
            'وضعان فاتح وداكن، وتخطيط متجاوب، ومعاينة السيرة الذاتية والشهادات، وتنقل يمكن الوصول إليه.',
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
          period: 'نوفمبر 2025 إلى يونيو 2026',
          status: 'مكتمل',
          logoSrc: kaustAcademyLogo,
          logoAlt: 'شعار أكاديمية كاوست',
          description:
            'تخصص تنافسي متعدد المراحل غطى المستويين التمهيدي والمتقدم في الذكاء الاصطناعي قبل التأهل للتدريب الصيفي المنفصل لعام 2026.',
          points: [
            'اختِرت ضمن أفضل 100 طالب من أكثر من 14,000 متقدم، واجتزت كل مراحل التخصص للتأهل إلى التدريب.',
          ],
        },
      ],
      certificatesTitle: 'الشهادات',
      certificates: [
        {
          title: 'برنامج تخصص الذكاء الاصطناعي الصيفي',
          issuer: 'أكاديمية كاوست',
          date: 'يونيو إلى أغسطس 2026',
          note: '320 ساعة تدريبية في جامعة الملك خالد، أبها',
          image: certificateImage(
            'kaust-ai-summer-program',
            'شهادة أكاديمية كاوست لإتمام برنامج تخصص الذكاء الاصطناعي الصيفي، 320 ساعة تدريبية في جامعة الملك خالد بأبها، من 28 يونيو إلى 20 أغسطس 2026',
            1600,
            1132,
          ),
        },
        {
          title: 'متسابق في اختبار البرمجيات',
          issuer: 'WorldSkills Shanghai 2026',
          date: 'سبتمبر 2026',
          note: 'تقديرًا للمشاركة والإنجاز بصفة متسابق',
          image: certificateImage(
            'worldskills-shanghai-2026-software-testing',
            'شهادة WorldSkills تقديرًا ليحيى الشريف على المشاركة والإنجاز بصفة متسابق في اختبار البرمجيات في WorldSkills Shanghai 2026',
            1132,
            1600,
          ),
        },
        {
          title: 'الذكاء الاصطناعي المتقدم',
          issuer: 'أكاديمية كاوست',
          date: 'فبراير 2026',
          note: 'أُتمّ بامتياز',
          image: certificateImage(
            'kaust-advanced-ai',
            'شهادة أكاديمية كاوست لإتمام مقرر الذكاء الاصطناعي المتقدم بامتياز في جامعة أم القرى، فبراير 2026',
            1600,
            1132,
          ),
        },
        {
          title: 'أساسيات التعلم العميق',
          issuer: 'NVIDIA',
          date: 'نوفمبر 2025',
          image: certificateImage(
            'nvidia-fundamentals-of-deep-learning',
            'شهادة كفاءة من NVIDIA في أساسيات التعلم العميق، صادرة في 29 نوفمبر 2025',
            1237,
            1600,
          ),
        },
        {
          title: 'الجبر الخطي لتعلم الآلة وعلم البيانات',
          issuer: 'DeepLearning.AI',
          date: 'ديسمبر 2025',
          image: certificateImage(
            'deeplearningai-linear-algebra',
            'شهادة مقرر من DeepLearning.AI في الجبر الخطي لتعلم الآلة وعلم البيانات عبر Coursera، ديسمبر 2025',
            1600,
            1237,
          ),
        },
        {
          title: 'الشبكات العصبية الالتفافية',
          issuer: 'DeepLearning.AI',
        },
      ],
      certificatePreview: {
        open: 'عرض الشهادة',
        closeButton: 'إغلاق',
        closeAriaLabel: 'إغلاق معاينة الشهادة',
      },
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
      indexLabel: 'جميع المحطات',
      loading: 'جارٍ تحميل منشور LinkedIn…',
      unavailable: 'تعذّر عرض منشور LinkedIn هنا.',
      items: [
        {
          title: 'تمثيل المملكة العربية السعودية في WorldSkills Shanghai 2026',
          description:
            'المنافسة في اختبار البرمجيات في WorldSkills Shanghai 2026، والعمل تحت الضغط على مهام اختبار صعبة وغير متوقعة أحيانًا إلى جانب متسابقين من حول العالم.',
          embedUrl: links.embedWorldSkills,
          postUrl: links.postWorldSkills,
          iframeTitle: 'منشور LinkedIn عن المنافسة في اختبار البرمجيات في WorldSkills Shanghai 2026',
        },
        {
          title: 'الانضمام إلى Mawhub',
          description:
            'الانضمام إلى MawHub، The Talent Hub، لتطبيق ما تعلمته في الذكاء الاصطناعي وهندسة البرمجيات على منتج حقيقي.',
          embedUrl: links.embedMawhub,
          postUrl: links.postMawhub,
          iframeTitle: 'منشور LinkedIn عن الانضمام إلى Mawhub',
        },
        {
          title: 'إتمام تخصص الذكاء الاصطناعي في أكاديمية كاوست',
          description:
            'تأملات في البرنامج الصيفي الختامي لمدة ثمانية أسابيع، وعرض OnKith وعملي في ذكاء الخصوصية في كاوست، والأشخاص الذين ساهموا في هذه الرحلة.',
          embedUrl: links.embedGraduation,
          postUrl: links.postGraduation,
          iframeTitle: 'منشور LinkedIn عن إتمام تخصص الذكاء الاصطناعي في أكاديمية كاوست',
        },
        {
          title: 'ثمانية أسابيع في أكاديمية كاوست',
          description:
            'إنهاء التدريب الصيفي في الذكاء الاصطناعي بأكاديمية كاوست على مدى ثمانية أسابيع، شملت الرؤية الحاسوبية ومعالجة اللغة والنماذج التوليدية والتعلم المعزز والذكاء الاصطناعي الطرفي، إلى جانب نموذج الخصوصية في OnKith ونشره على Raspberry Pi 5.',
          embedUrl: links.embedSummerInternship,
          postUrl: links.postSummerInternship,
          iframeTitle: 'منشور LinkedIn عن إنهاء التدريب الصيفي للذكاء الاصطناعي في أكاديمية كاوست',
        },
        {
          title: 'المركز الثالث في تجزئة الخلايا',
          description:
            'المركز الثالث في مسابقة تجزئة الخلايا بأكاديمية كاوست، وما علمنا إياه التدريب على قصاصات متمركزة حول الخلايا الفردية عن التوقف في الوقت المناسب عن الضبط.',
          embedUrl: links.embedCellSegmentation,
          postUrl: links.postCellSegmentation,
          iframeTitle: 'منشور LinkedIn عن المركز الثالث في مسابقة تجزئة الخلايا',
        },
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
            'ESAS، مشروع تخرجي الذي يركز على تجارب سياحية سعودية أصيلة ومنتقاة محليًا.',
          embedUrl: links.embedEsas,
          postUrl: links.postEsas,
          iframeTitle: 'منشور LinkedIn عن مشروع التخرج ESAS',
        },
        {
          title: 'من المرحلة الثالثة إلى الرابعة في أكاديمية كاوست',
          description: 'إنهاء المرحلة الثالثة في أكاديمية كاوست والقبول في المرحلة الرابعة.',
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
    figureViewer: {
      open: 'عرض بحجم أكبر',
      closeButton: 'إغلاق',
      closeAriaLabel: 'إغلاق الشكل المكبّر',
    },
    externalLinkLabel: '(يفتح في علامة تبويب جديدة)',
    backToTop: 'العودة إلى الأعلى',
    copyright: (year) => `© ${year} يحيى الشريف`,
  },
};
