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
    'B.Tech Computer Science and Engineering student with a 9.05 CGPA at REVA University, building a strong foundation in programming, data structures, databases, and software development.',
  currentExploration:
    'Currently exploring C, C++, Java, Python, DSA, SQL, Git/GitHub, and software development.',
  email: 'adarshpatil9390@gmail.com',
  phone: '9390302205',
  location: 'Bengaluru, Karnataka, India',
  github: 'https://github.com/ADARSHPATIL14',
  linkedin: 'https://www.linkedin.com/in/adarshpatil14/',
  leetcode: 'https://leetcode.com/u/Adarsh_patil14/',
  resumeUrl: '/resume.pdf',
};

export const aboutData = {
  heading: 'About Me',
  paragraphs: [
    "I'm Adarsh Patil, a B.Tech Computer Science and Engineering student at REVA University with a 9.05 CGPA, dedicated to building a rock-solid foundation in programming, data structures, databases, and software development.",
    "Currently developing proficiency across C, C++, Java, Python, SQL, Git/GitHub, and web technologies through academic and personal hands-on projects.",
    "Seeking software development internship opportunities where I can apply my problem-solving skills, collaborate with engineering teams, and deliver practical, high-quality software.",
  ],
  devCard: {
    name: 'Adarsh Patil',
    title: 'B.Tech CSE • REVA University',
    currentFocus: [
      'Data Structures & Algorithms',
      'C & C++',
      'Java & Python',
      'DBMS & MySQL',
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
    id: 'core-cs',
    title: 'Core Computer Science',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Database Management Systems (DBMS)',
      'SQL',
    ],
  },
  {
    id: 'tools-skills',
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'MySQL', 'MySQL Workbench'],
  },
  {
    id: 'hardware-iot',
    title: 'Hardware & Systems',
    skills: ['IoT basics', 'Arduino', 'NodeMCU', 'MATLAB basics'],
  },
  {
    id: 'technical-interests',
    title: 'Areas of Interest',
    skills: [
      'Software Development',
      'Problem Solving',
      'Data Structures & Algorithms',
      'Open-Source & GitHub Projects',
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
  institution: 'REVA University',
  degree: 'Bachelor of Technology',
  specialization: 'Computer Science & Engineering',
  location: 'Bengaluru, Karnataka',
  expectedYear: 'Expected 2029',
  status: 'Pursuing B.Tech in Computer Science and Engineering at REVA University, Bengaluru (Expected 2029).',
  cgpa: '9.05',
  relevantSubjects: [
    'Programming (C, C++, Java, Python)',
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'Database Management Systems (DBMS & SQL)',
    'Git & GitHub Workflows',
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
