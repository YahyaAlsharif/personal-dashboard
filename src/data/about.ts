export const aboutIntro = {
  subtitle: 'Who I am, what I am interested in, and how I approach the projects I work on.',
  paragraphs: [
    'I am a Software Engineering student at Umm Al-Qura University and a KAUST Academy AI Specialization participant who advanced to the final summer program.',
    'My interests sit between software engineering and artificial intelligence: practical projects, requirements, design, implementation, testing, and clear presentation. I like work that starts with understanding people and ends with something useful enough to explain, test, and improve.',
  ],
};

export const aboutJumpLinks = [
  { label: 'Software Engineering', href: '#about-software-engineering' },
  { label: 'Artificial Intelligence', href: '#about-artificial-intelligence' },
];

export const softwareEngineeringStory = {
  id: 'about-software-engineering',
  title: 'Software Engineering',
  paragraphs: [
    'I started studying for my Bachelor\'s degree in Software Engineering at Umm Al-Qura University in 2023. Since then, I have been building a foundation in requirements engineering, software design, software architecture, documentation, Java and object-oriented programming, software testing, system analysis, algorithms, and data structures.',
    'When I was in my third year of my bachelor\'s degree, I got the chance to attend NVIDIA\'s Deep Learning workshop and earn the NVIDIA Fundamentals of Deep Learning certificate. The workshop was led by an instructor from the university, and it gave me my first real glimpse of how artificial intelligence works in practice, beyond only using AI tools from the outside.',
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
};

export const artificialIntelligenceStory = {
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
  courseImage: {
    alt: 'DeepLearning.AI Convolutional Neural Networks course screenshot from Coursera',
    caption: 'Convolutional Neural Networks preparation through DeepLearning.AI on Coursera.',
  },
};
