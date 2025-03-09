export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Plagiarism Detector',
    desc: 'Developed a code plagiarism detection system that analyzes and identifies similarities in source code repositories.',
    subdesc:
      'Designed a RESTful API for seamless integration with external tools and automation scripts. Integrated text similarity algorithms to detect copied code even with modifications, ensuring accurate plagiarism detection, report generation, and plagiarism analysis.',
    href: 'https://siddardha.me/plagiarism',
    tags: [
      {
        id: 1,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 2,
        name: 'Express.js',
        path: '/assets/express.png',
      },
      {
        id: 3,
        name: 'Git',
        path: '/assets/git.png',
      },
    ],
  },
  {
    title: 'Namma Tutor',
    desc: 'A GenAI-powered platform that uploads PDFs and summarizes concepts page-wise, making studying more efficient.',
    subdesc:
      'Leverages AI to extract and condense key concepts from PDFs, providing concise summaries for better comprehension. Designed for students and professionals seeking quick insights from documents.',
    href: 'https://siddardha.me/namma-tutor',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'PDF.js',
        path: '/assets/pdfjs.png',
      },
      {
        id: 3,
        name: 'GenAI',
        path: '/assets/genai.png',
      },
    ],
  },
  {
    title: 'Real-Time Chat Application',
    desc: 'Developed a real-time chat application enabling seamless communication between users using Socket.io.',
    subdesc:
      'Implemented event-driven architecture for instant message delivery, ensuring low-latency interactions. Designed a responsive UI with user authentication, JSON Web Tokens, and real-time status indicators.',
    href: 'https://chatapp-ffd3.onrender.com/',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 3,
        name: 'Socket.io',
        path: '/assets/socketio.png',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      }
    ],
  },
  {
    title: 'Online Printing Service',
    desc: 'Developed a full-stack web application for NIT Warangal to streamline online printing and order management.',
    subdesc:
      'Implemented secure file uploads for users to submit documents for printing, ensuring data integrity. Integrated real-time order tracking, allowing users to monitor order progress from submission to completion.',
    href: 'https://zerox.studio/',
    tags: [
      {
        id: 1,
        name: 'Tailwind CSS',
        path: '/assets/tailwindcss2.png',
      },
      {
        id: 2,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
      {
        id: 3,
        name: 'Express.js',
        path: '/assets/express.png',
      }, {
        id: 4,
        name: 'PDF.js',
        path: '/assets/pdfjs.png',
      },
    ],
  },
  {
    title: 'Keylogger with Real-Time Monitoring',
    desc: 'Developed a keylogger that captures keystrokes and stores logs in an HTML file for easy access.',
    subdesc:
      'Integrated Express.js to serve logs in real-time, enabling remote monitoring through a web interface. Utilized PM2 for process management, ensuring continuous logging and automatic restarts on crashes.',
    href: 'https://github.com/Siddu-06-0405/CyberSecurity',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'Express.js',
        path: '/assets/express.png',
      },
      {
        id: 3,
        name: 'PM2',
        path: '/assets/pm2.png',
      },
    ],
  },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 1.0 : isMobile ? 3.0 : 3.65,
    deskPosition: isMobile ? [-0.5, -4.5, 0] : [0.25, -7.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-7, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -10, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'SEO & Digital Marketing for Elastomech',
    pos: 'SEO Specialist',
    duration: '2025',
    title: "Currently, I am focusing on SEO and digital marketing for Elastomech, optimizing content, improving website ranking, and implementing strategies to drive organic traffic.",
    icon: '/assets/seo.png',
    // animation: 'victory',
  },
  {
    id: 2,
    name: 'Smart India Hackathon (SIH) Participation',
    pos: 'Team Participant & Problem Solver',
    duration: '2024',
    title: "In 2024, I participated in the Smart India Hackathon, where I worked on solving real-world problems through innovative tech solutions. Collaborating with a team, I tackled challenges that enhanced my problem-solving and teamwork skills.",
    icon: '/assets/sih.png',
    // animation: 'clapping',
  },
  {
    id: 3,
    name: 'Projects & Development',
    pos: 'Full-Stack Developer',
    duration: '2023',
    title: "In 2023, I worked on multiple projects, building web applications and exploring various tech stacks. This year helped me refine my coding skills and gain hands-on experience with real-world applications.",
    icon: '/assets/solo.png',
    // animation: 'salute',
  },
];
