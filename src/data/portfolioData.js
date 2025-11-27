/**
 * Portfolio Data Configuration
 * Centralized data file for all website content
 * Update this file to manage all text, images, links, and configurable elements
 */

export const portfolioData = {
  // Site Metadata
  site: {
    name: 'Your Name',
    title: 'Personal Portfolio',
    description: 'A modern portfolio showcasing my work and skills',
    url: 'https://yourportfolio.com',
  },

  // Navigation
  navigation: {
    logo: {
      text: 'Portfolio',
      icon: null, // Path to logo image if available: '/assets/logo.svg'
    },
    links: [
      { path: '/', label: 'Home' },
      { path: '/projects', label: 'Projects' },
      { path: '/about', label: 'About' },
      { path: '/contact', label: 'Contact' },
      // Optional Blog
      // { path: '/blog', label: 'Blog' },
    ],
  },

  // Home Page
  home: {
    hero: {
      title: 'Welcome to My Portfolio',
      subtitle: 'I create beautiful and functional web experiences',
      description: 'A passionate developer specializing in modern web technologies and user-centered design.',
      cta: {
        primary: {
          text: 'View My Work',
          link: '/projects',
        },
        secondary: {
          text: 'Get In Touch',
          link: '/contact',
        },
      },
      image: null, // Path to hero image: '/assets/hero-image.jpg'
    },
    about: {
      title: 'About Me',
      description: [
        'I\'m a passionate developer with a love for creating beautiful and functional web applications. With expertise in modern JavaScript frameworks and a keen eye for design, I bring ideas to life through code.',
        'My journey in web development started several years ago, and I\'ve been continuously learning and growing ever since. I enjoy working on challenging projects that push me to expand my skills and knowledge.',
      ],
      image: null, // Path to about image: '/assets/about-image.jpg'
      cta: {
        text: 'Learn More',
        link: '/about',
      },
    },
    skills: {
      title: 'Skills & Technologies',
      items: [
        { name: 'React', icon: '⚛️' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Python', icon: '🐍' },
        { name: 'Tailwind CSS', icon: '🎨' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'Docker', icon: '🐳' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Git', icon: '📦' },
        { name: 'Figma', icon: '🎨' },
        { name: 'Next.js', icon: '▲' },
      ],
    },
    featuredProjects: {
      title: 'Featured Projects',
      cta: {
        text: 'View All Projects',
        link: '/projects',
      },
      // Projects will be pulled from projects array below
      // Specify IDs of featured projects
      featuredIds: ['1', '2', '3'],
    },
    contactCTA: {
      title: 'Ready to work together?',
      description: 'Let\'s discuss your next project and bring your ideas to life.',
      cta: {
        text: 'Get In Touch',
        link: '/contact',
      },
    },
  },

  // About Page
  about: {
    profile: {
      name: 'Your Name',
      title: 'Full-Stack Developer',
      photo: null, // Path to profile photo: '/assets/profile.jpg'
      bio: [
        'I\'m a passionate developer with a love for creating beautiful and functional web applications. With expertise in modern JavaScript frameworks and a keen eye for design, I bring ideas to life through code.',
        'My journey in web development started several years ago, and I\'ve been continuously learning and growing ever since. I enjoy working on challenging projects that push me to expand my skills and knowledge.',
        'When I\'m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.',
      ],
    },
    skills: [
      { name: 'React', icon: '⚛️', level: 90 },
      { name: 'TypeScript', icon: '📘', level: 85 },
      { name: 'Node.js', icon: '🟢', level: 80 },
      { name: 'Python', icon: '🐍', level: 75 },
      { name: 'Tailwind CSS', icon: '🎨', level: 95 },
      { name: 'MongoDB', icon: '🍃', level: 70 },
      { name: 'PostgreSQL', icon: '🐘', level: 75 },
      { name: 'Docker', icon: '🐳', level: 65 },
      { name: 'AWS', icon: '☁️', level: 60 },
      { name: 'Git', icon: '📦', level: 85 },
      { name: 'Figma', icon: '🎨', level: 70 },
      { name: 'Next.js', icon: '▲', level: 80 },
    ],
    experience: [
      {
        period: '2022 - Present',
        title: 'Senior Full-Stack Developer',
        company: 'Tech Company Inc.',
        description: 'Leading development of scalable web applications using React and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions.',
        technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
      },
      {
        period: '2020 - 2022',
        title: 'Full-Stack Developer',
        company: 'Startup Solutions',
        description: 'Developed and maintained multiple client projects, focusing on responsive design and user experience. Implemented RESTful APIs and database solutions.',
        technologies: ['Vue.js', 'Express', 'MongoDB', 'PostgreSQL'],
      },
      {
        period: '2018 - 2020',
        title: 'Frontend Developer',
        company: 'Digital Agency',
        description: 'Created interactive web interfaces and collaborated with designers to implement pixel-perfect designs. Optimized applications for performance and accessibility.',
        technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      },
    ],
    tools: [
      // Development Tools
      { name: 'VS Code', icon: '💻', category: 'Development Tools' },
      { name: 'Git', icon: '📦', category: 'Development Tools' },
      { name: 'Docker', icon: '🐳', category: 'Development Tools' },
      { name: 'Postman', icon: '📮', category: 'Development Tools' },
      { name: 'Chrome DevTools', icon: '🔍', category: 'Development Tools' },
      { name: 'Terminal', icon: '⌨️', category: 'Development Tools' },
      
      // Design Tools
      { name: 'Figma', icon: '🎨', category: 'Design Tools' },
      { name: 'Adobe XD', icon: '✨', category: 'Design Tools' },
      { name: 'Photoshop', icon: '🖼️', category: 'Design Tools' },
      
      // Project Management
      { name: 'Jira', icon: '📋', category: 'Project Management' },
      { name: 'Trello', icon: '📌', category: 'Project Management' },
      { name: 'Notion', icon: '📝', category: 'Project Management' },
      
      // Cloud & DevOps
      { name: 'AWS', icon: '☁️', category: 'Cloud & DevOps' },
      { name: 'Vercel', icon: '▲', category: 'Cloud & DevOps' },
      { name: 'Netlify', icon: '🌐', category: 'Cloud & DevOps' },
      { name: 'GitHub Actions', icon: '⚙️', category: 'Cloud & DevOps' },
    ],
    cv: {
      url: '/assets/resume.pdf', // Path to CV file
      fileName: 'resume.pdf',
    },
  },

  // Projects
  projects: [
    {
      id: '1',
      title: 'E-Commerce Platform',
      subtitle: 'A modern e-commerce solution',
      description: 'A comprehensive e-commerce platform built with modern web technologies. This project features a complete shopping experience with user authentication, product management, shopping cart, payment integration, and an admin dashboard for managing orders and inventory.',
      shortDescription: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
      date: 'January 2024',
      role: 'Full-Stack Developer',
      category: 'Web Application',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      tags: ['E-Commerce', 'Full-Stack', 'Payment'],
      thumbnail: null, // Path to thumbnail: '/assets/projects/ecommerce-thumb.jpg'
      screenshots: [
        // Paths to screenshots: '/assets/projects/ecommerce-1.jpg',
        // '/assets/projects/ecommerce-2.jpg',
        // '/assets/projects/ecommerce-3.jpg',
      ],
      videoId: null, // YouTube video ID or full URL: 'dQw4w9WgXcQ' or 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      features: [
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and checkout process',
        'Payment integration with Stripe',
        'Admin dashboard for order management',
        'Real-time inventory tracking',
        'Order history and tracking',
        'Email notifications',
      ],
      githubUrl: 'https://github.com/username/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.example.com',
      otherLinks: [], // [{ label: 'Documentation', url: '...', icon: '📚' }]
      slug: '/projects/ecommerce-platform',
    },
    {
      id: '2',
      title: 'Mobile Weather App',
      subtitle: 'Beautiful weather forecasts',
      description: 'A beautiful and intuitive weather application for mobile devices. Features real-time weather forecasts, location-based weather, detailed hourly and daily forecasts, and beautiful animations.',
      shortDescription: 'Beautiful weather application with real-time forecasts and location tracking.',
      date: 'December 2023',
      role: 'Mobile Developer',
      category: 'Mobile Application',
      techStack: ['React Native', 'TypeScript', 'OpenWeather API'],
      tags: ['Mobile', 'Weather', 'API'],
      thumbnail: null,
      screenshots: [
        // '/assets/projects/weather-1.jpg',
        // '/assets/projects/weather-2.jpg',
      ],
      videoId: null,
      features: [
        'Real-time weather updates',
        'Location-based forecasts',
        'Hourly and daily forecasts',
        'Beautiful UI animations',
        'Weather alerts and notifications',
        'Multiple location support',
      ],
      githubUrl: 'https://github.com/username/weather-app',
      liveUrl: null,
      otherLinks: [],
      slug: '/projects/weather-app',
    },
    {
      id: '3',
      title: 'Portfolio Website',
      subtitle: 'Modern portfolio showcase',
      description: 'A modern, responsive portfolio website showcasing my work and skills. Built with React and Tailwind CSS, featuring smooth animations and a clean, professional design.',
      shortDescription: 'Modern portfolio website with animations and responsive design.',
      date: 'November 2023',
      role: 'Frontend Developer',
      category: 'Web Application',
      techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      tags: ['Portfolio', 'Design', 'Responsive'],
      thumbnail: null,
      screenshots: [],
      videoId: null,
      features: [
        'Responsive design',
        'Smooth animations',
        'Project showcase',
        'Contact form',
        'Dark mode support',
        'SEO optimized',
      ],
      githubUrl: 'https://github.com/username/portfolio',
      liveUrl: 'https://portfolio.example.com',
      otherLinks: [],
      slug: '/projects/portfolio',
    },
    {
      id: '4',
      title: 'Task Management Tool',
      subtitle: 'Collaborative task management',
      description: 'Collaborative task management application with real-time updates.',
      shortDescription: 'Collaborative task management application with real-time updates.',
      date: 'October 2023',
      role: 'Full-Stack Developer',
      category: 'Web Application',
      techStack: ['Vue.js', 'Firebase', 'WebSockets'],
      tags: ['Productivity', 'Collaboration', 'Real-time'],
      thumbnail: null,
      screenshots: [],
      videoId: null,
      features: [],
      githubUrl: null,
      liveUrl: null,
      otherLinks: [],
      slug: '/projects/task-manager',
    },
    {
      id: '5',
      title: 'AI Image Generator',
      subtitle: 'AI-powered image generation',
      description: 'AI-powered image generation tool using machine learning models.',
      shortDescription: 'AI-powered image generation tool using machine learning models.',
      date: 'September 2023',
      role: 'Full-Stack Developer',
      category: 'Web Application',
      techStack: ['Python', 'TensorFlow', 'React'],
      tags: ['AI', 'Machine Learning', 'Image Processing'],
      thumbnail: null,
      screenshots: [],
      videoId: null,
      features: [],
      githubUrl: null,
      liveUrl: null,
      otherLinks: [],
      slug: '/projects/ai-image-generator',
    },
    {
      id: '6',
      title: 'Fitness Tracker',
      subtitle: 'Mobile fitness tracking',
      description: 'Mobile fitness tracking app with workout plans and progress analytics.',
      shortDescription: 'Mobile fitness tracking app with workout plans and progress analytics.',
      date: 'August 2023',
      role: 'Mobile Developer',
      category: 'Mobile Application',
      techStack: ['Flutter', 'Firebase', 'Charts'],
      tags: ['Mobile', 'Health', 'Analytics'],
      thumbnail: null,
      screenshots: [],
      videoId: null,
      features: [],
      githubUrl: null,
      liveUrl: null,
      otherLinks: [],
      slug: '/projects/fitness-tracker',
    },
  ],

  // Contact Page
  contact: {
    header: {
      title: 'Get In Touch',
      description: 'Have a project in mind or just want to chat? I\'d love to hear from you!',
    },
    socialLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/yourusername',
        icon: 'github', // Will be rendered as SVG
        color: 'from-[#1A1A1A] to-[#2A2A2A]',
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/yourusername',
        icon: 'linkedin',
        color: 'from-[#0077B5] to-[#005885]',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/yourusername',
        icon: 'twitter',
        color: 'from-[#1DA1F2] to-[#0d8bd9]',
      },
      {
        name: 'Email',
        url: 'mailto:your.email@example.com',
        icon: 'email',
        color: 'from-[#FF71CE] to-[#B967FF]',
      },
    ],
    map: {
      enabled: false, // Set to true to enable map
      address: 'Your Address, City, Country',
      embedUrl: null, // Google Maps embed URL if available
    },
  },
}

// Helper function to get project by ID
export const getProjectById = (id) => {
  return portfolioData.projects.find((project) => project.id === id || project.slug === `/projects/${id}`)
}

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  const { featuredIds } = portfolioData.home.featuredProjects
  return portfolioData.projects.filter((project) => featuredIds.includes(project.id))
}

// Helper function to get all projects
export const getAllProjects = () => {
  return portfolioData.projects
}

// Helper function to get navigation links
export const getNavigationLinks = () => {
  return portfolioData.navigation.links
}

