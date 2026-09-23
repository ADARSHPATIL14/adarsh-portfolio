import {
  PersonalInfo,
  FocusItem,
  SkillCategory,
  ProjectItem,
  TimelineItem,
  EducationItem,
  AchievementItem
} from '../types/portfolio';

/**
 * =====================================================================
 * ADARSH PATIL - PORTFOLIO CONFIGURATION DATA
 * =====================================================================
 * 
 * INSTRUCTIONS FOR USER:
 * Replace the placeholder values below with your actual details:
 * - email: Replace 'YOUR_EMAIL' with your email (e.g. 'adarsh.patil@example.com')
 * - github: Replace 'YOUR_GITHUB_URL' with your profile (e.g. 'https://github.com/yourusername')
 * - linkedin: Replace 'YOUR_LINKEDIN_URL' with your profile (e.g. 'https://linkedin.com/in/yourprofile')
 * - leetcode: Replace 'YOUR_LEETCODE_URL' with your profile (e.g. 'https://leetcode.com/u/yourusername')
 * - resumeUrl: Place your PDF file in 'portfolio/public/resume.pdf' or update this path
 * - solvedCount: In the LeetCode project, change 'XX' to your real number of solved problems
 * - project githubUrls: Update the '#' with your actual project repository links
 */

export const personalInfo: PersonalInfo = {
  name: 'Adarsh Patil',
  role: 'Computer Science Engineering Student',
  degree: 'B.Tech Computer Science & Engineering',
  status: 'Currently learning & building',
  tagline:
    'I’m a passionate Computer Science student who enjoys learning programming, solving problems, and building practical projects.',
  currentExploration:
    'Currently exploring C, C++, Java, DSA, SQL, and software development.',
  // Centralized placeholders - Replace these with your real URLs:
  email: 'YOUR_EMAIL',
  github: 'https://github.com/ADARSHPATIL14',
  linkedin: 'YOUR_LINKEDIN_URL',
  leetcode: 'YOUR_LEETCODE_URL',
  resumeUrl: '/resume.pdf',
};

export const aboutData = {
  heading: 'About Me',
  paragraphs: [
    "I'm Adarsh Patil, a B.Tech Computer Science Engineering student passionate about technology, programming, and continuous learning.",
    "I enjoy understanding how things work and then applying what I learn by building projects. My current focus is on developing strong programming fundamentals, improving my problem-solving skills, and learning the technologies used in modern software development.",
    "I work with languages and technologies such as C, C++, Java, SQL, Git, and GitHub, while continuously exploring new areas of Computer Science.",
    "Along with academics, I work on coding problems, academic projects, personal projects, and technical activities to gain practical experience.",
  ],
  devCard: {
    name: 'Adarsh Patil',
    title: 'B.Tech CSE Student',
    currentFocus: [
      'Data Structures & Algorithms',
      'C++',
      'Java',
      'SQL',
      'Software Development',
    ],
    status: 'Learning • Building • Improving',
  },
};

export const currentFocusList: FocusItem[] = [
  {
    id: 'cpp-programming',
    title: 'C++ & Programming',
    description:
      'Strengthening programming fundamentals and preparing for advanced problem solving.',
    icon: 'Code2',
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description:
      'Practicing algorithms and solving progressively challenging problems.',
    icon: 'Binary',
  },
  {
    id: 'java',
    title: 'Java',
    description:
      'Learning Java from fundamentals to advanced object-oriented programming concepts.',
    icon: 'Coffee',
  },
  {
    id: 'sql-dbms',
    title: 'SQL & DBMS',
    description:
      'Improving database knowledge through SQL practice and database projects.',
    icon: 'Database',
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    description:
      'Building practical projects and improving Git/GitHub workflows.',
    icon: 'GitBranch',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    skills: ['C', 'C++', 'Java', 'Python'],
  },
  {
    id: 'dsa-skills',
    title: 'Data Structures & Algorithms',
    skills: [
      'Arrays',
      'Strings',
      'Searching',
      'Sorting',
      'Basic Algorithms',
      'Problem Solving',
      'LeetCode',
    ],
  },
  {
    id: 'database-skills',
    title: 'Database',
    skills: ['MySQL', 'SQL', 'DBMS', 'CRUD', 'Primary Keys', 'Foreign Keys'],
  },
  {
    id: 'tools-skills',
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'MySQL Workbench'],
  },
  {
    id: 'core-cs',
    title: 'Core Computer Science',
    skills: [
      'Object-Oriented Programming',
      'Programming Fundamentals',
      'Database Management Systems',
      'Software Development Basics',
    ],
  },
  {
    id: 'currently-learning',
    title: 'Currently Learning',
    skills: [
      'Advanced C++',
      'Data Structures & Algorithms',
      'Advanced Java',
      'Backend Development',
      'Software Development',
    ],
  },
];

export const projectsList: ProjectItem[] = [
  {
    id: 'line-editor',
    number: '01',
    title: 'Simple Line Editor',
    subtitle: 'Command-Line Text Editor in C',
    description:
      'A command-line based text editor developed in C to understand practical programming concepts, file handling, string manipulation, and data management.',
    technologies: [
      'C',
      'Arrays',
      'Strings',
      'File Handling',
      'Functions',
      'Git',
      'GitHub',
    ],
    features: [
      'Insert lines',
      'Delete lines',
      'Display document',
      'Search text',
      'Count words',
      'Find and replace text',
      'Save document to .txt',
      'Load document from .txt',
      'Undo functionality',
      'Help menu',
    ],
    learningOutcomes: [
      'Working with arrays and strings',
      'File handling in C',
      'Modular programming',
      'Searching and text manipulation',
      'Team-based development',
      'Git/GitHub workflow',
    ],
    githubUrl: '#', // Replace '#' with actual GitHub repo URL when available
  },
  {
    id: 'leetcode-solutions',
    number: '02',
    title: 'LeetCode Solutions',
    subtitle: 'Algorithmic Problem Solving Repository',
    description:
      'A collection of programming and algorithmic solutions created while practicing problem solving and strengthening Data Structures & Algorithms fundamentals.',
    technologies: ['C', 'C++', 'Java'],
    topics: [
      'Arrays',
      'Strings',
      'Searching',
      'Sorting',
      'Basic Algorithms',
      'Data Structures',
      'Problem Solving',
    ],
    solvedCount: 'XX', // Placeholder per instruction #10 & #28; replace with real count
    githubUrl: '#', // Replace '#' with actual GitHub repo URL
  },
  {
    id: 'puresip',
    number: '03',
    title: 'PureSip',
    subtitle: 'Portable Water Purifier Bottle',
    description:
      'PureSip is a portable water purification bottle concept designed to provide convenient access to cleaner drinking water for people who travel, study, work, exercise, or spend time outdoors.',
    technologies: ['Product Design', 'Prototype Analysis', 'Market Research'],
    projectType: 'Innovation & Entrepreneurship / Product Prototype',
    isProductOrEntrepreneurship: true,
    projectFocus: [
      'Problem Identification',
      'Customer Persona',
      'Product Development',
      'Market Research',
      'Competitor Analysis',
      'Business Model',
      'Go-To-Market Strategy',
      'Product Prototype',
    ],
    targetUsers: [
      'Students',
      'Travelers',
      'Office Workers',
      'Fitness Enthusiasts',
      'Outdoor Activity Users',
    ],
    githubUrl: '#', // Innovation case study / documentation link
  },
];

export const timelineList: TimelineItem[] = [
  {
    year: '2025',
    title: 'Programming Foundations',
    description:
      'Started my Computer Science journey by learning programming fundamentals and exploring C programming.',
    status: 'past',
  },
  {
    year: '2026',
    title: 'Building Strong Foundations',
    description:
      'Expanded my knowledge into C, C++, Java, SQL, Object-Oriented Programming, DBMS, Git, and GitHub.',
    status: 'past',
  },
  {
    year: 'Current',
    title: 'Problem Solving & Development',
    description:
      'Currently focusing on Data Structures & Algorithms, Java, C++, LeetCode, practical projects, and software development.',
    status: 'current',
  },
  {
    year: 'Next',
    title: 'Professional Growth',
    description:
      'Build production-quality projects, contribute to open-source projects, and gain professional software development experience.',
    status: 'future',
  },
];

export const educationData: EducationItem = {
  degree: 'Bachelor of Technology',
  specialization: 'Computer Science & Engineering',
  status: 'Currently pursuing B.Tech in Computer Science and Engineering.',
  cgpa: '9.05',
  relevantSubjects: [
    'Programming',
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Computer Science Fundamentals',
    'Software Development',
  ],
};

export const achievementsList: AchievementItem[] = [
  {
    id: 'academic-perf',
    title: 'Academic Performance',
    description: 'Current CGPA: 9.05 in Bachelor of Technology (CSE).',
    badge: '9.05 CGPA',
    icon: 'GraduationCap',
  },
  {
    id: 'prog-practice',
    title: 'Programming Practice',
    description:
      'Consistently practicing programming and algorithmic problems through coding platforms.',
    badge: 'Consistent Problem Solver',
    icon: 'Code',
  },
  {
    id: 'proj-dev',
    title: 'Project Development',
    description:
      'Developed academic and personal programming projects while learning practical software development.',
    badge: 'Hands-on Builder',
    icon: 'FolderGit2',
  },
  {
    id: 'team-collab',
    title: 'Team Collaboration',
    description:
      'Worked on team-based software and innovation projects using collaborative development workflows.',
    badge: 'Collaborative Workflows',
    icon: 'Users',
  },
  {
    id: 'cont-learning',
    title: 'Continuous Learning',
    description:
      'Continuously expanding knowledge across programming, databases, software development, and Computer Science fundamentals.',
    badge: 'Active Learner',
    icon: 'Sparkles',
  },
];
