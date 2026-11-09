/**
 * Portfolio Data Configuration
 * Centralized data file for all website content
 * Update this file to manage all text, images, links, and configurable elements
 */

export const portfolioData = {
  // Site Metadata
  site: {
    name: 'Your Name',
    title: 'Farhan\'s Portfolio',
    description: 'A modern portfolio showcasing my work and skills',
    url: 'https://yourportfolio.com',
  },

  // Navigation
  navigation: {
    logo: {
      text: 'Farhan\'s Portfolio',
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
      title: 'Welcome Comrade',
      subtitle: 'I create beautiful and functional mobile and web experiences',
      description: 'A passionate developer specializing in modern mobile and web technologies and user-centered design.',
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
      image: '/assets/hero.jpg', // Path to hero image: '/assets/hero-image.jpg'
    },
    about: {
      title: 'About Me',
      description: [
        "I'm a passionate developer crafting beautiful, high-performance web and mobile applications. I specialize in modern JavaScript frameworks, clean UI/UX design, and AI-powered automations, creating smart, responsive, and impactful solutions that seamlessly blend design, functionality, and intelligence."
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
      { name: 'Flutter', icon: '📱' }, // No icon available, keeping emoji
      { name: 'React', icon: '/assets/generic_icons/react.svg' },
      { name: 'TypeScript', icon: '/assets/generic_icons/typescript.svg' },
      { name: 'Node.js', icon: '/assets/generic_icons/nodejs.svg' },
      { name: 'Python', icon: '/assets/generic_icons/python.svg' },
      { name: 'Tailwind CSS', icon: '/assets/generic_icons/tailwindcss.svg' },
      { name: 'MongoDB', icon: '/assets/generic_icons/mongodb.svg' },
      { name: 'PostgreSQL', icon: '/assets/generic_icons/postgresql.svg' },
      { name: 'Docker', icon: '/assets/generic_icons/docker.svg' },
      { name: 'AWS', icon: '/assets/generic_icons/aws.svg' },
      { name: 'Git', icon: '/assets/generic_icons/git.svg' },
      { name: 'Next.js', icon: '/assets/generic_icons/nextjs.svg' },
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
      featuredIds: ['15', '16', '17'], // Sales Angel, Recruitment Angel, Nova
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
      name: 'Farhan Bukhari',
      title: 'Full-Stack Developer',
      photo: '/assets/profile.jpg',
      bio: [
        'I\'m a passionate full-stack developer specializing in web, mobile, and AI agentic automations. With expertise spanning modern JavaScript frameworks, Flutter for cross-platform mobile development, and intelligent automation systems, I create comprehensive solutions that bridge the gap between design, functionality, and intelligent automation.',
        'My work encompasses building responsive web applications with React and Next.js, developing native and cross-platform mobile apps with Flutter, and implementing AI-powered agentic automations that streamline workflows and enhance system intelligence. I enjoy tackling complex challenges that require a blend of frontend finesse, backend architecture, and innovative automation strategies.',
        'When I\'m not coding, you can find me exploring cutting-edge AI technologies, contributing to open-source projects, or sharing knowledge with the developer community. I\'m always excited to work on projects that push the boundaries of what\'s possible with web, mobile, and AI automation technologies.',
      ],
    },
    skills: [
      { name: 'React', icon: '/assets/generic_icons/react.svg', level: 90 },
      { name: 'TypeScript', icon: '/assets/generic_icons/typescript.svg', level: 85 },
      { name: 'Node.js', icon: '/assets/generic_icons/nodejs.svg', level: 80 },
      { name: 'Python', icon: '/assets/generic_icons/python.svg', level: 75 },
      { name: 'Tailwind CSS', icon: '/assets/generic_icons/tailwindcss.svg', level: 95 },
      { name: 'MongoDB', icon: '/assets/generic_icons/mongodb.svg', level: 70 },
      { name: 'PostgreSQL', icon: '/assets/generic_icons/postgresql.svg', level: 75 },
      { name: 'Docker', icon: '/assets/generic_icons/docker.svg', level: 65 },
      { name: 'AWS', icon: '/assets/generic_icons/aws.svg', level: 60 },
      { name: 'Git', icon: '/assets/generic_icons/git.svg', level: 85 },
      { name: 'Next.js', icon: '/assets/generic_icons/nextjs.svg', level: 80 },
    ],
    experience: [
      {
        period: 'Jun 2025 - November 2025',
        title: 'Software Engineer',
        company: 'EmbiTronics',
        description: 'Developing full-stack applications for web and mobile platforms using React.js, Node.js, and Flutter. Implement cloud-based services with AWS and design automated workflows while applying problem-solving and software design best practices.',
        technologies: ['React.js', 'Node.js', 'AWS', 'Flutter', 'Django', 'Automation', 'Algorithms', 'Software Design']
      },
      {
        period: 'Apr 2024 - May 2025',
        title: 'Flutter Developer',
        company: 'Ten Pixel Studio',
        description: 'Building modern, scalable, and responsive mobile and web applications using Flutter with Firebase integration, focusing on clean architecture, efficient API development, and seamless user experiences.',
        technologies: ['Flutter', 'Firebase', 'Cloud Firestore', 'Architectural Design', 'API Development']
      },
      {
        period: 'Feb 2024 - Present',
        title: 'AI/ML Intern',
        company: 'NETSOL Technologies Inc.',
        description: 'Worked on computer vision and generative AI systems, including fine-tuning YOLOv8 for ant detection and improving model accuracy through dataset optimization. Explored image generation and super-resolution models such as Disco Diffusion, RAG pipelines, and TecoGAN while supporting internal AI R&D experimentation and benchmarking.',
        technologies: ['YOLOv8', 'Computer Vision', 'RAG', 'Disco Diffusion', 'TecoGAN', 'Python']
      },
    ],
    tools: [
      // Development Tools
      { name: 'VS Code', icon: '/assets/generic_icons/vscode.svg', category: 'Development Tools' },
      { name: 'Git', icon: '/assets/generic_icons/git.svg', category: 'Development Tools' },
      { name: 'Docker', icon: '/assets/generic_icons/docker.svg', category: 'Development Tools' },
      { name: 'Postman', icon: '/assets/generic_icons/postman.svg', category: 'Development Tools' },
      { name: 'Chrome DevTools', icon: '/assets/generic_icons/devtools.svg', category: 'Development Tools' },
      { name: 'Terminal', icon: '⌨️', category: 'Development Tools' }, // No icon available, keeping emoji
      
      // Project Management
      { name: 'Jira', icon: '/assets/generic_icons/jira.svg', category: 'Project Management' },
      { name: 'Trello', icon: '/assets/generic_icons/trello.svg', category: 'Project Management' },
      { name: 'Notion', icon: '/assets/generic_icons/notion.svg', category: 'Project Management' },
      
      // Cloud & DevOps
      { name: 'AWS', icon: '/assets/generic_icons/aws.svg', category: 'Cloud & DevOps' },
      { name: 'Vercel', icon: '/assets/generic_icons/vercel.svg', category: 'Cloud & DevOps' },
      { name: 'GitHub Actions', icon: '/assets/generic_icons/githubactions.svg', category: 'Cloud & DevOps' },
    ],
    cv: {
      url: '/assets/documents/Farhan_Bukhari.pdf',
      fileName: 'Farhan_Bukhari.pdf',
    },
  },

  // Projects
  projects: [
    // Order mirrors the GitHub profile README; projects that aren't in the README come last.
    // `id` is a stable identifier, not a position. Projects 15-21 have no screenshots yet
    // (the gallery hides itself when empty) and use demo-video frames as thumbnails.
    {
      id: '15',
      title: 'Sales Angel – AI Voice Sales Agent Platform',
      subtitle: 'Instant AI Voice Calls with Cross-Channel Memory and Precision Callbacks',
      description:
        'An AI-powered outbound/inbound sales voice agent for Act Angel AI. A web lead form triggers an instant, real-time AI phone call that carries conversational memory across calls, hands off naturally to WhatsApp mid-conversation, and automatically books and fires callback calls down to sub-2-second accuracy.',
      shortDescription:
        'An AI voice sales agent that calls leads instantly from a web form, remembers prior conversations, hands off to WhatsApp, and fires callbacks with sub-2-second accuracy.',
      date: null,
      role: 'Full-Stack Developer & AI Automation Engineer',
      category: 'AI Platform',
      techStack: [
        'Next.js',
        'n8n',
        'PostgreSQL',
        'Retell AI',
        'Millis AI',
        'Twilio',
        'Plivo',
        'Claude API',
        'OpenAI API',
        'AWS EC2',
        'Vercel',
      ],
      tags: [
        'Voice AI',
        'Sales Automation',
        'Conversational Memory',
        'WhatsApp Handoff',
        'Multilingual Voice',
        'Workflow Orchestration',
        'Callback Scheduling',
      ],
      thumbnail: '/assets/sales-angel/sales_angel_thumbnail.jpg',
      screenshots: [],
      videoId: 'https://youtu.be/dC_s8eruRIM',
      features: [
        'Instant AI-driven outbound voice call triggered directly from web form submission, with OTP-verified lead capture',
        'Persistent conversational memory, carrying prior call/WhatsApp context into every new interaction with the same prospect',
        'Seamless cross-channel handoff between voice calls, WhatsApp, and email, with the AI able to send summaries, book callbacks, and answer follow-ups on any channel',
        'Precision callback scheduling via per-callback native job dispatch, replacing polling with sub-2-second-accurate automated call-backs',
        'Dual regional voice routing: US calls via Retell/Twilio, India calls via Millis/Plivo to satisfy domestic-origination compliance',
        'Multilingual voice support (English and Hindi) with accent-correct TTS voice/model pairing',
        'Built-in guardrails policy: information-protection rules, call time limits with graceful wrap-up, and automatic flagging of suspicious conversations',
        'Self-hosted workflow orchestration layer coordinating every call, message, and database write across providers',
        'Post-call analysis reconciliation pass as an async safety net, ensuring no conversation outcome is ever silently lost',
      ],
      otherLinks: [],
      slug: '/projects/sales-angel',
    },
    {
      id: '16',
      title: 'Recruitment Angel – AI Recruitment Pipeline & Admin Portal',
      subtitle: 'Voice-Led Hiring Pipeline with AI Scorecards and a Recruiter Admin Portal',
      description:
        "An end-to-end AI recruitment pipeline for Act Angel AI that runs a candidate's entire hiring journey over real voice calls — HR screening, interview scheduling, and a full technical interview — feeding structured scorecards into an admin portal where human recruiters make the final call.",
      shortDescription:
        'An end-to-end AI recruitment pipeline that runs HR screening, interview scheduling, and technical interviews over voice calls and feeds structured scorecards into an admin portal.',
      date: null,
      role: 'Full-Stack Developer & AI Automation Engineer',
      category: 'AI Platform',
      techStack: [
        'Next.js',
        'n8n',
        'PostgreSQL',
        'Retell AI',
        'Millis AI',
        'Salesforce',
        'Twilio',
        'Plivo',
        'AWS EC2',
        'Vercel',
      ],
      tags: [
        'Voice AI',
        'Recruitment Automation',
        'AI Interviews',
        'Candidate Scorecards',
        'Admin Panel',
        'Interview Scheduling',
        'Salesforce Integration',
      ],
      thumbnail: '/assets/recruitment-angel/recruitment_angel_thumbnail.jpg',
      screenshots: [],
      videoId: 'https://youtu.be/emvvDO1g9vw',
      features: [
        'Three-stage AI-led voice pipeline: HR screening call, interview scheduling call, and a role-specific technical interview call',
        'Data-driven technical interview content across multiple job tracks (Salesforce Developer, Agentforce/Agentic AI, CSM, DevOps Engineer, Web Designer, and more), stored and served dynamically rather than hardcoded per role',
        'Automated scorecards across ten weighted evaluation dimensions, with an AI-generated recruiter summary and recommendation on every call',
        'Self-service candidate booking via emailed/WhatsApp scheduling links, replacing unannounced outbound AI calls with candidate-chosen times',
        'Automatic no-answer retry logic with escalating backoff, plus a manual-follow-up safety net that stops auto-retrying and flags a human the moment something genuinely needs review',
        'Full admin portal: live application tracking, reviews and reports dashboards, interview rescheduling with calendar-invite notifications, and configurable automation settings',
        'Dual-write architecture bridging a legacy Salesforce org and a new Postgres-backed admin application during a live migration',
        'Regional voice parity across US (Retell) and India (Millis), with the same guardrails and safety nets on both',
      ],
      otherLinks: [],
      slug: '/projects/recruitment-angel',
    },
    {
      id: '17',
      title: 'Nova – Multi-Tenant SEO Automation Platform',
      subtitle: 'Automated SEO Audits, Brand-Voice AI Content, and Approval-Gated Publishing',
      description:
        'A multi-tenant SEO automation platform built for healthcare practices and agencies. It automates SEO audits, AI-assisted content creation, and publishing across multiple website platforms.',
      shortDescription:
        'A multi-tenant SEO automation platform for healthcare practices and agencies that automates audits, AI-assisted content creation, and publishing.',
      date: null,
      role: 'Full-Stack Developer & Automation Engineer',
      category: 'AI Platform',
      techStack: ['Next.js', 'Supabase', 'n8n', 'Claude API', 'Airtable', 'Cloudflare Workers'],
      tags: [
        'AI SaaS',
        'Multi-Tenant',
        'SEO Automation',
        'Content Generation',
        'Workflow Automation',
        'Human-in-the-Loop',
        'Healthcare',
      ],
      thumbnail: '/assets/nova-seo-automation/nova_seo_automation_thumbnail.jpg',
      screenshots: [],
      videoId: 'https://youtu.be/dWVfgCTUocU',
      features: [
        'Automated SEO audits and content generation',
        '47 scheduled n8n workflows',
        'AI-generated content using brand-specific voice and context',
        'Publishing integrations with WordPress, Wix, Ghost, and Squarespace',
        'Human approval workflows before publishing',
        'Tenant-isolated data and branded agency subdomains',
      ],
      otherLinks: [],
      slug: '/projects/nova-seo-automation',
    },
    {
      id: '18',
      title: 'Multi-Platform Ad Data ETL Pipeline',
      subtitle: 'Automated Daily Ad Performance ETL on Google Cloud Run and BigQuery',
      description:
        'Production ETL pipeline consolidating ad performance data from 8 platforms into BigQuery for centralized reporting and analysis.\n\nIntegrations include Google Ads, Meta Ads, LinkedIn, Naver, Yahoo Japan, Quantcast, and StackAdapt.',
      shortDescription:
        'A production ETL pipeline that consolidates ad performance data from 8 platforms into BigQuery for centralized reporting and analysis.',
      date: null,
      role: 'Data Engineer & Cloud Automation Engineer',
      category: 'Data Engineering',
      techStack: [
        'Python',
        'Google Cloud Run',
        'BigQuery',
        'Cloud Build',
        'Cloud Scheduler',
        'Secret Manager',
        'Docker',
      ],
      tags: [
        'ETL Pipeline',
        'BigQuery',
        'Ad Performance Data',
        'CI/CD',
        'Cloud Automation',
      ],
      thumbnail: '/assets/ad-data-etl-pipeline/ad_data_etl_pipeline_thumbnail.jpg',
      screenshots: [],
      videoId: 'https://youtu.be/6adgVi2_SE4',
      features: [
        'Separate Python extractors for each platform',
        'Automated daily extraction and loading',
        'Containerized Google Cloud Run jobs',
        'Cloud Build pipelines triggered by Git tags',
        'Timezone-aware Cloud Scheduler',
        'Idempotent loading and secure credentials',
      ],
      otherLinks: [],
      slug: '/projects/ad-data-etl-pipeline',
    },
    {
      id: '19',
      title: 'Sales Command Center',
      subtitle: 'Multi-Tenant CRM Dashboard with AI-Assisted Follow-Ups',
      description:
        'A multi-tenant CRM dashboard for local service businesses, covering leads, conversations, appointments, and AI-assisted follow-ups.',
      shortDescription:
        'A multi-tenant CRM dashboard for local service businesses with live GoHighLevel sync, lead classification, and AI-assisted follow-ups.',
      date: null,
      role: 'Full-Stack Developer',
      category: 'AI Platform',
      techStack: ['Next.js', 'Supabase', 'OpenAI API', 'GoHighLevel API'],
      tags: [
        'CRM',
        'Multi-Tenant',
        'Lead Classification',
        'AI Follow-Ups',
        'GoHighLevel',
        'Missed-Call Text-Back',
      ],
      thumbnail: '/assets/sales-command-center/sales_command_center_thumbnail.jpg',
      screenshots: [],
      videoId: 'https://youtu.be/tVmd_2NlV6I',
      features: [
        'Live lead and conversation sync through GoHighLevel',
        'Hot, warm, and cold lead classification',
        'AI identification of stalled leads and missed appointments',
        'Suggested next actions and follow-ups',
        'Missed-call text-back and lead qualification',
        'Separate client CRM environments',
      ],
      otherLinks: [],
      slug: '/projects/sales-command-center',
    },
    {
      id: '20',
      title: 'Shopify AI Support Copilot',
      subtitle: 'Gmail Automation + RAG Assistant for Shopify Support Workflows',
      description:
        'Built an AI-powered customer support assistant inside Gmail for Shopify workflows. Combines a React/TypeScript Chrome Extension (MV3) with a FastAPI backend to generate contextual replies using policy knowledge, Shopify order data, and agent feedback.',
      shortDescription:
        'An AI support assistant inside Gmail that drafts contextual replies from policy knowledge and Shopify order data, using a Chrome extension and a FastAPI RAG backend.',
      date: null,
      role: 'Full-Stack Web Developer',
      category: 'AI Platform',
      techStack: [
        'React.js',
        'TypeScript',
        'Chrome Extension MV3',
        'Python',
        'FastAPI',
        'PostgreSQL',
        'pgvector',
        'Shopify GraphQL',
        'Gmail',
        'Docker',
      ],
      tags: [
        'Chrome Extension',
        'RAG',
        'Customer Support AI',
        'Shopify',
        'Gmail Automation',
        'Human-in-the-Loop',
        'JWT Authentication',
      ],
      thumbnail: '/assets/shopify-ai-support-copilot/shopify_ai_support_copilot_thumbnail.jpg',
      screenshots: [],
      videoId: 'https://youtu.be/pHLVns-6gO0',
      features: [
        'AI-powered customer support directly inside Gmail',
        'React and TypeScript Chrome Extension using Manifest V3',
        'Contextual reply generation using company policy knowledge and Shopify order data',
        'RAG-based retrieval using PostgreSQL and pgvector',
        'Shopify GraphQL and Gmail pipeline integrations',
        'JWT authentication',
        'Smart workflows and draft regeneration',
        'Human-in-the-loop feedback and learning',
        'Local Docker deployment with optional mock mode',
      ],
      otherLinks: [],
      slug: '/projects/shopify-ai-support-copilot',
    },
    {
      id: '8',
      title: 'ChatQre Mobile App – A ChatGPT Clone',
      subtitle: 'Streaming AI Chat with Context Retention and Thread Management',
      description:
        "Developed an AI chatbot app which replicates ChatGPT's functionalities and incorporates features like custom context retention, thread management, and conversation history. It uses Flutter for the frontend and has streaming capabilities to cope with slow responses.\n\nThe backend is built with NestJS and PostgreSQL via Supabase. It uses Markdown rendering in AI responses and includes chat memory persistence. It can handle 50k+ concurrent sessions and has secure JWT token-based authentication.",
      shortDescription:
        'An AI chatbot app that replicates ChatGPT with custom context retention, thread management, conversation history, and streaming responses.',
      date: 'September 2025',
      role: 'Full-Stack Mobile Developer',
      category: 'Mobile Application',
      techStack: ['Flutter', 'NestJS', 'Node.js', 'PostgreSQL', 'Supabase', 'JWT Authentication'],
      tags: [
        'Flutter',
        'AI',
        'Chat System',
        'NestJS',
        'Supabase',
        'PostgreSQL',
        'Streaming Responses',
      ],
      thumbnail: '/assets/chatqre/chatqre_thumbnail.jpg',
      screenshots: [
        '/assets/chatqre/1.png',
        '/assets/chatqre/2.png',
        '/assets/chatqre/3.png',
        '/assets/chatqre/4.png',
        '/assets/chatqre/5.png',
        '/assets/chatqre/6.png',
        '/assets/chatqre/7.png',
        '/assets/chatqre/8.png',
        '/assets/chatqre/9.png',
        '/assets/chatqre/10.png',
      ],
      videoId: 'https://youtu.be/UdCMCIQ2cmc',
      features: [
        'ChatGPT-like AI chatbot experience',
        'Custom context retention',
        'Thread management and conversation history',
        'Streaming responses to handle slow responses',
        'Markdown rendering in AI responses',
        'Chat memory persistence',
        'JWT token-based authentication',
        'Architecture designed to handle 50k+ concurrent sessions',
      ],
      otherLinks: [],
      slug: '/projects/chatqre',
    },
    {
      id: '21',
      title: 'Local Enterprise RAG System',
      subtitle: 'On-Prem Document Assistant Powered by a Locally Hosted LLM',
      description:
        'An on-prem AI document assistant allowing search and interaction with internal documents using a locally hosted language model.',
      shortDescription:
        'An on-prem AI document assistant for searching and interacting with internal documents using a locally hosted language model.',
      date: null,
      role: 'Full-Stack Web Developer',
      category: 'AI Platform',
      techStack: [
        'Next.js',
        'FastAPI',
        'Ollama',
        'Qdrant',
        'PostgreSQL',
        'Docker Compose',
        'OCR',
        'Embeddings',
      ],
      tags: [
        'RAG',
        'Local LLM',
        'On-Prem AI',
        'Semantic Search',
        'OCR',
        'Document Ingestion',
      ],
      thumbnail: '/assets/local-enterprise-rag/local_enterprise_rag_thumbnail.jpg',
      screenshots: [],
      videoId: 'https://youtu.be/-0rHHK6GHSE',
      features: [
        'PDF, DOCX, XLSX, TXT, HTML, and image ingestion',
        'OCR processing',
        'Multilingual embedding and semantic retrieval',
        'Qdrant vector search',
        'Streaming responses with citations',
        'Ollama local inference',
        'Docker private LAN deployment',
      ],
      otherLinks: [],
      slug: '/projects/local-enterprise-rag',
    },
    {
      id: "7",
      title: "Automated Client Onboarding & Weekly Progress Reporting System",
      subtitle: "AI-Powered Workflow Automation for Client Onboarding & Reporting",
      description: "Developed a fully automated onboarding and reporting system using n8n to eliminate repetitive setup work and streamline project communication. Integrated Monday.com, Slack, Gmail, Google Drive, and Google Gemini AI to handle everything from project initialization to ongoing client updates.\n\nThe workflow automatically creates Monday.com boards and project folders, generates onboarding packages, and sends personalized welcome emails through Gmail. It also sets up client-specific Slack communication channels and stores organized project assets in Google Drive.\n\nFor ongoing reporting, the system generates weekly AI-written progress summaries using Gemini and emails them to clients without requiring any manual drafting. This end-to-end automation reduced onboarding time by 90% and ensured consistent, high-quality communication across all client projects.",
      shortDescription: "An n8n-based AI automation that handles client onboarding, sets up project assets, and sends weekly AI-generated progress reports.",
      date: "November 2025",
      role: "Automation Engineer",
      category: "Automation System",
      techStack: [
        "n8n",
        "Monday.com API",
        "Slack API",
        "Gmail API",
        "Google Drive",
        "Google Gemini AI"
      ],
      tags: [
        "Workflow Automation",
        "n8n",
        "AI Integration",
        "Process Optimization",
        "API Automation",
        "Client Onboarding",
        "Progress Reporting"
      ],
      thumbnail: "/assets/client_onboarding_automation/automation_thumbnail.jpg",
      screenshots: [
        "/assets/client_onboarding_automation/1.jpg",
        "/assets/client_onboarding_automation/2.jpg",
        "/assets/client_onboarding_automation/3.jpg"
      ],
      videoId: "https://youtu.be/f8LkF5D-JYY",
      features: [
        "Automated Client Onboarding Workflow",
        "AI-Generated Weekly Progress Reports",
        "Monday.com Board & Project Setup",
        "Automated Folder Creation in Google Drive",
        "Slack Channel Auto-Creation",
        "Personalized Gmail Onboarding Emails",
        "Google Gemini AI Summaries",
        "90% Reduction in Onboarding Time",
        "End-to-End n8n Automation"
      ],
      otherLinks: [],
      slug: "/projects/client-onboarding-automation"
    },
    {
      id: '4',
      title: 'Retainr – Business Admin Portal',
      subtitle: 'Admin Dashboard for Employee Management & Payouts',
      description:
        'Developed a comprehensive admin dashboard to manage employees, monitor performance, and oversee payments efficiently. Built with React.js and Redux Thunk for responsive UI state management, and Node.js + MongoDB for secure backend operations. Designed intuitive data visualizations to track monthly and yearly employee analytics and streamline decision-making.\n\nImplemented approval workflows for withdrawal requests, real-time bonus distribution, and secure card management via Plaid integration. The portal significantly reduced administrative workload, cutting processing time for employee payouts by over 70% and improving overall operational efficiency.',
      shortDescription:
        'A business admin dashboard to manage employees, track analytics, and streamline payout workflows securely.',
      date: 'May 2023',
      role: 'Full-Stack Developer',
      category: 'Web Application',
      techStack: ['React.js', 'Redux Thunk', 'Node.js', 'MongoDB', 'Plaid'],
      tags: [
        'Node.js',
        'React.js',
        'Redux Thunk',
        'MongoDB',
        'User Authentication',
      ],
      thumbnail: '/assets/retainr-business-admin/retainr_business_admin_thumbnail.jpg',
      screenshots: [
        '/assets/retainr-business-admin/2.png',
        '/assets/retainr-business-admin/3.png',
        '/assets/retainr-business-admin/4.png',
        '/assets/retainr-business-admin/5.png',
        '/assets/retainr-business-admin/6.png',
        '/assets/retainr-business-admin/7.png',
        '/assets/retainr-business-admin/8.png',
        '/assets/retainr-business-admin/9.png',
        '/assets/retainr-business-admin/10.png',
        '/assets/retainr-business-admin/11.png',
      ],
      videoId: 'https://youtu.be/HJG-_9rdNGI',
      features: [
        'Employee Management',
        'Performance Analytics Dashboards',
        'Withdrawal Request Approval Workflows',
        'Real-Time Bonus Distribution',
        'Secure Card Management via Plaid',
        'Data Visualization & Insights',
        'Responsive React.js UI',
        'Redux Thunk State Management',
        'Node.js REST API Backend',
        'MongoDB Data Persistence',
      ],
      otherLinks: [],
      slug: '/projects/retainr-business-admin',
    },
    {
      id: '5',
      title: 'Retainr – Super Admin Portal',
      subtitle: 'High-Level Admin Dashboard for System Management',
      description:
        'Developed the super admin dashboard for the Retainr platform, providing high-level management of business admins and employee data. Implemented role-based access control, global insights visualization, and full CRUD operations for all user types. Designed the system for scalability and security using Node.js and MongoDB for backend operations.\n\nThe portal offers a unified interface for system-wide monitoring and control, streamlining administrative workflows and reducing overall admin overhead by 60%. Data integrity and operational efficiency were significantly improved through optimized REST APIs and structured access management.',
      shortDescription:
        'A super admin dashboard for managing business admins, employees, and global insights with role-based access control.',
      date: 'May 2023',
      role: 'Full-Stack Developer',
      category: 'Web Application',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'REST API', 'Admin Panel'],
      tags: [
        'React.js',
        'Redux Thunk',
        'Node.js',
        'MongoDB',
        'REST API',
        'Admin Panel',
      ],
      thumbnail: '/assets/retainr-super-admin/retainr_super_admin_thumbnail.jpg',
      screenshots: [
        '/assets/retainr-super-admin/1.png',
        '/assets/retainr-super-admin/2.png',
        '/assets/retainr-super-admin/3.png',
        '/assets/retainr-super-admin/4.png',
      ],
      videoId: 'https://youtu.be/npR7AYUCFeM',
      features: [
        'Role-Based Access Control',
        'Global Insights Visualization',
        'User Management CRUD Operations',
        'System-Wide Monitoring',
        'Unified Backend with Node.js',
        'MongoDB Data Storage',
        'REST API Integration',
        'Admin Panel Functionality',
        'Scalable System Architecture',
        'Reduced Administrative Overhead',
      ],
      otherLinks: [],
      slug: '/projects/retainr-super-admin',
    },
    {
      id: "6",
      title: "Property Evaluation Automation System",
      subtitle: "AI-Driven Workflow Automation for Real Estate Operations",
      description: "Built an end-to-end automation system to streamline and accelerate property evaluation requests using AI-powered processing and multi-platform integrations. Implemented the workflow entirely on Make.com, enabling automated intake, AI summarization, team notifications, and follow-up communication without manual intervention.\n\nThe system captures client submissions from the intake form, processes and summarizes them using Google Gemini AI, and sends structured insights directly to the internal team via Slack. Automatically generates ClickUp tasks with detailed evaluation data, priority labels, and assigned reviewers. Added personalized automated follow-up emails through Gmail to ensure timely communication with clients.\n\nThis automation reduced manual triage time by 80%, improved evaluation accuracy, and ensured all requests were processed consistently, reliably, and with higher-quality communication.",
      shortDescription: "An end-to-end Make.com automation that processes property evaluation requests using AI, sends Slack alerts, creates ClickUp tasks, and triggers personalized Gmail follow-ups.",
      date: "May 2024",
      role: "Automation Engineer",
      category: "Automation System",
      techStack: [
        "Make.com",
        "Google Gemini AI",
        "ClickUp API",
        "Slack API",
        "Gmail Automation"
      ],
      tags: [
        "Make.com",
        "Automation",
        "Google Gemini",
        "ClickUp",
        "Slack",
        "Gmail",
        "Workflow Optimization",
        "AI Summaries"
      ],
      thumbnail: "/assets/property_automation/property_automation_thumbnail.jpg",
      screenshots: [
        "/assets/property_automation/1.png",
        "/assets/property_automation/2.png",
        "/assets/property_automation/3.png",
        "/assets/property_automation/4.png",

      ],
      videoId: "https://youtu.be/EL8AnTuPciI",
      features: [
        "Automated Evaluation Request Intake",
        "AI-Powered Summaries via Google Gemini",
        "Slack Real-Time Team Notifications",
        "Automatic ClickUp Task Creation",
        "Personalized Gmail Follow-Up Emails",
        "End-to-End Workflow on Make.com",
        "80% Reduction in Manual Triage Time",
        "Consistent Data Processing & Communication"
      ],
      otherLinks: [],
      slug: "/projects/property-evaluation-automation"
    },
    {
      id: '2',
      title: 'Ekvi – Endometriosis Tracking & Awareness App',
      subtitle: 'Women’s Health Tracking, Insights & Guided Awareness Platform',
      description:
        'Worked on Ekvi, a women’s health platform designed to help users track endometriosis symptoms, identify patterns, and improve overall self-awareness. Implemented rich data visualizations comparing pain levels, bowel movements, mood changes, and related symptoms over time. Developed “Ekvi Journeys,” a guided learning experience containing structured lessons, stories, and self-care pathways to help users better manage their condition.\n\nIntegrated a comprehensive article library, daily logs, cycle tracking, sexual health tracking, and wellness insights. Added Amplitude and AppsFlyer for deep analytics, behavior tracking, and conversion insights. Enhanced user retention by 60% through personalized dashboards, intuitive symptom trends, and a clean user experience crafted with Flutter.',
      shortDescription:
        'A women’s health app for tracking endometriosis symptoms with rich insights, guided journeys, and advanced analytics.',
      date: 'September 2025',
      role: 'Full-Stack Mobile Developer',
      category: 'Mobile Application',
      techStack: ['Flutter', 'Node.js', 'Amplitude', 'SQL', 'Analytics'],
      tags: [
        'Flutter',
        'Node.js',
        'Amplitude Analytics',
        'SQL',
        'Healthcare Technology',
        'Women’s Health',
        'Data Visualization'
      ],
      thumbnail: '/assets/ekvi/ekvi_thumbnail.jpg',
      screenshots: [
        '/assets/ekvi/1.jpeg',
        '/assets/ekvi/2.jpeg',
        '/assets/ekvi/3.jpeg',
        '/assets/ekvi/4.jpeg',
        '/assets/ekvi/5.jpeg',
        '/assets/ekvi/6.jpeg',
        '/assets/ekvi/7.jpeg',
        '/assets/ekvi/8.jpeg',
        '/assets/ekvi/9.jpeg',
      ],
      videoId: 'https://youtu.be/L_zR9SpQg4g',
      features: [
        'Endometriosis Symptom Tracking',
        'Detailed Graph & Trend Comparisons',
        'Guided Ekvi Journeys',
        'Health Article Library',
        'Cycle & Sexual Health Tracking',
        'Personalized Dashboards',
        'Amplitude & AppsFlyer Analytics',
        'Node.js Backend Integration',
        'SQL-Based Data Management',
        'Improved User Retention & Engagement'
      ],
      otherLinks: [],
      slug: '/projects/ekvi',
    },
    {
      id: '9',
      title: 'Everafter – Admin Portal',
      subtitle: 'Administrative Dashboard for Parent & Claim Management',
      description:
        'Developed a fully featured administrative web portal to manage parent accounts, track activity trends, and process child-claim requests with higher efficiency. Built using React.js for a responsive, clean UI and Node.js + MongoDB for secure backend operations. Implemented real-time dashboards showing active parent metrics, claim analytics, and system-wide insights.\n\nThe portal greatly improved operational workflow, boosting data accuracy and reducing manual claim handling time by 65%, while ensuring seamless communication with the parent-facing mobile platform.',
      shortDescription:
        'A real-time admin dashboard for parent management, activity insights, and claim processing.',
      date: 'November 2025',
      role: 'Full-Stack Developer',
      category: 'Web Application',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Charting Libraries'],
      tags: [
        'React.js',
        'Admin Panel',
        'MongoDB',
        'Data Analysis',
        'Node.js',
      ],
      thumbnail: '/assets/everafter-admin/everafter_admin_portal_thumbnail.jpg',
      screenshots: [
        '/assets/everafter-admin/1.png',
        '/assets/everafter-admin/2.png',
        '/assets/everafter-admin/3.png',
        '/assets/everafter-admin/4.png',
      ],
      videoId: 'https://youtu.be/3DwKIRieAGU',
      features: [
        'Parent Account Management',
        'Real-time Activity Dashboards',
        'Claim Request Processing',
        'Analytics & Insights',
        'Secure Data Handling',
        'React.js Responsive UI',
        'Fast Node.js APIs',
        'MongoDB Aggregation Pipelines',
        'Improved Operational Efficiency',
      ],
      otherLinks: [],
      slug: '/projects/everafter-admin',
    },
    {
      id: '3',
      title: 'Retainr – Employee Retainment App',
      subtitle: 'Cross-Platform Employee Balance & Payout Management App',
      description:
        'Built a cross-platform employee retainment app using Flutter with Firebase for Google OAuth login and secure token-based session management. Developed a Node.js + MongoDB backend to manage employee balances, bonuses, and withdrawal requests. Integrated Plaid API for secure bank linking, account verification, and automated drip payments (daily, weekly, or fully customized).\n\nImplemented a verified withdrawal workflow allowing business admins to approve payout requests and transfer balances directly to employees. This system improved financial transparency, reduced manual payout errors by 85%, and provided a streamlined, compliant financial workflow for businesses.',
      shortDescription:
        'A financial management app for employee payouts, balances, and automated drip payments.',
      date: 'August 2025',
      role: 'Full-Stack Developer',
      category: 'Mobile Application',
      techStack: ['Flutter', 'Firebase', 'Plaid', 'Node.js', 'MongoDB'],
      tags: [
        'Flutter',
        'Firebase',
        'Plaid',
        'REST API',
        'Node.js',
      ],
      thumbnail: '/assets/retainr/retainr_thumbnail.jpg',
      screenshots: [
        '/assets/retainr/1.png',
        '/assets/retainr/2.png',
        '/assets/retainr/3.png',
        '/assets/retainr/4.png',
        '/assets/retainr/5.png',
      ],
      videoId: 'https://youtu.be/8ix5im_BvVM',
      features: [
        'Google OAuth Login',
        'Employee Balance Management',
        'Bonus & Reward Tracking',
        'Withdrawal Request Workflow',
        'Admin Approval System',
        'Secure Bank Linking via Plaid',
        'Automated Drip Payments',
        'Node.js REST API Backend',
        'MongoDB Data Persistence',
        'Improved Financial Transparency',
      ],
      otherLinks: [],
      slug: '/projects/retainr',
    },
    {
      id: "1",
      title: "Ascensus – Personal Development & Wellness Mobile App",
      subtitle: "AI-Powered Goal Tracking and Community-Driven Wellness Platform",
      description: "Developed a comprehensive Flutter mobile application designed to help users stay consistent with their personal development goals through AI-assisted planning, journaling, and community engagement. Implemented a clean architecture powered by Riverpod for state management, Freezed for immutable models, and Retrofit for type-safe API communication. Integrated Firebase authentication with secure token refresh, alongside Socket.IO for real-time community messaging, challenge participation, and instant notifications.\n\nBuilt advanced AI-driven features including intelligent goal generation, conversational vision-building experiences, and streaming responses for guided journaling. Added structured daily, weekly, and monthly goal tracking; personalized reminders; and a full journaling system with push notifications. Implemented community challenges, leaderboards, and group interactions to boost motivation and accountability. The platform enhances long-term engagement by reducing goal abandonment through smart planning, real-time interactions, and a unified experience for tracking personal growth and wellness.",
      shortDescription: "A clean-architecture Flutter app offering AI-powered goal tracking, journaling, community challenges, and real-time messaging for personal growth and wellness.",
      date: "March 2025",
      role: "Full Stack Mobile Developer",
      category: "Mobile Application",
      techStack: [
        "Flutter",
        "Riverpod",
        "Freezed",
        "Retrofit",
        "Firebase Auth",
        "Socket.IO",
        "Node.js"
      ],
      tags: [
        "Flutter",
        "Riverpod",
        "Clean Architecture",
        "Freezed",
        "Retrofit",
        "Firebase",
        "Socket.IO",
        "AI Features",
        "Real-Time Messaging",
        "Personal Development"
      ],
      thumbnail: "/assets/ascensus/ascensus_thumbnail.jpg",
      screenshots: [
        "/assets/ascensus/1.png",
        "/assets/ascensus/2.png",
        "/assets/ascensus/3.png",
        "/assets/ascensus/4.png",
        "/assets/ascensus/5.png",
        "/assets/ascensus/6.png",
        "/assets/ascensus/7.png",
        "/assets/ascensus/8.png",
        "/assets/ascensus/9.png",
        "/assets/ascensus/10.png",
        "/assets/ascensus/11.png",
        "/assets/ascensus/12.png",
        "/assets/ascensus/13.png",
      ],
      videoId: "https://youtu.be/s8N7wuBEeW8",
      features: [
        "AI-Powered Goal Generation",
        "Daily, Weekly & Monthly Goal Tracking",
        "Conversational Vision-Building Interface",
        "Real-Time Community Messaging",
        "Community Challenges & Leaderboards",
        "Structured Journaling System",
        "Push Notifications & Reminders",
        "Firebase Authentication with Token Refresh",
        "Socket.IO Real-Time Features",
        "Clean Architecture with Riverpod & Freezed"
      ],
      otherLinks: [],
      slug: "/projects/ascensus"
    },
    {
      id: '10',
      title: 'Everafter Mobile App',
      subtitle: 'Parent & Child Mobile Portal in Single App',
      description:
        'Built a dual-portal mobile app in Flutter that provides dedicated experiences for both parents and children. Parents can create and manage child profiles, assign age-appropriate video unlocks, and monitor activity insights. Implemented a secure multi-step claim approval workflow where trusted contacts validate child requests via email, ensuring controlled access when parents are unavailable.\n\nThe backend, developed using Node.js and MongoDB, includes robust session handling with access and refresh tokens, along with strong user authentication logic. Cloud services power email verification, data storage, and real-time updates. This system significantly enhanced trust, security, and user engagement—improving onboarding efficiency by 75%.',
      shortDescription:
        'A secure dual-portal app for parents and children with video access control and trusted-contact verification.',
      date: 'November 2025',
      role: 'Full-Stack Developer',
      category: 'Mobile Application',
      techStack: [
        'Flutter',
        'Node.js',
        'MongoDB',
        'Cloud Services',
        'Email Workflows',
      ],
      tags: [
        'Flutter',
        'Node.js',
        'Cloud Services',
        'User Auth',
        'MongoDB',
      ],
      thumbnail: '/assets/everafter/everafter_thumbnail.jpg',
      screenshots: [
        '/assets/everafter/1.png',
        '/assets/everafter/2.png',
        '/assets/everafter/3.png',
        '/assets/everafter/4.png',
        '/assets/everafter/5.png',
        '/assets/everafter/6.png',
        '/assets/everafter/7.png',
        '/assets/everafter/8.png',
      ],
      videoId: null,
      features: [
        'Parent & Child Dual Portals',
        'Child Profile Management',
        'Age-Based Video Unlocking',
        'Activity Insights',
        'Trusted Contact Approval Flow',
        'Email-Based Verification',
        'Secure Session Handling',
        'Access & Refresh Token Logic',
        'Cloud-Integrated Workflows',
        'High Onboarding Efficiency',
      ],
      otherLinks: [],
      slug: '/projects/everafter',
    },
    {
      id: '11',
      title: 'LivingInGermany',
      subtitle: 'German Citizenship Test Preparation App',
      description:
        'Developed a comprehensive exam preparation app designed to help migrants study for the German citizenship test. The app provides both general and state-specific question sets, mock tests, randomized quizzes, and bookmarking for focused revision. It also includes level-based practice modes, detailed performance insights, and progress analytics to track improvement.\n\nBuilt using Flutter for cross-platform compatibility, the app uses Firebase Authentication for secure access, local storage for offline access to question banks, and Google AdMob for monetization. RevenueCat was integrated for managing subscriptions and premium features. The app significantly improved user test readiness efficiency by 70% compared to manual study methods.',
      shortDescription:
        'A structured exam prep app for the German citizenship test with analytics, quizzes, and mock exams.',
      date: 'January 2025',
      role: 'Flutter Developer',
      category: 'Mobile Application',
      techStack: [
        'Flutter',
        'Firebase Auth',
        'Local Storage',
        'Google AdMob',
        'RevenueCat',
      ],
      tags: [
        'Flutter',
        'Firebase',
        'Data Analysis',
        'QuizMaker',
      ],
      thumbnail: '/assets/livingingermany/livingingermany_thumbnail.jpg',
      screenshots: [
        '/assets/livingingermany/1.png',
        '/assets/livingingermany/2.png',
        '/assets/livingingermany/3.png',
        '/assets/livingingermany/4.png',
        '/assets/livingingermany/5.png',
        '/assets/livingingermany/6.png',
      ],
      videoId: null,
      features: [
        'General and State-Specific Question Sets',
        'Mock Testing System',
        'Randomized Quizzes',
        'Bookmarking for Revision',
        'Level-Based Practice Modes',
        'Progress Analytics',
        'Detailed Result Insights',
        'Offline Question Access',
        'Subscription Management',
        'Ad Monetization',
      ],
      otherLinks: [],
      slug: '/projects/livingingermany',
    },
    {
      id: '12',
      title: 'Organize Thoughts',
      subtitle: 'AI-Assisted Thought Structuring & Productivity App',
      description:
        'Developed a Flutter-based productivity app that helps users convert scattered thoughts into clear, actionable ideas. The app uses GPT-based refinement to clarify messy notes, summarize long text, and merge multiple thoughts into a single coherent insight. It supports tagging and categorization to keep information organized and easy to revisit. Built with a smooth UI focused on reducing friction, the system enables users to quickly capture ideas and instantly turn them into structured summaries.\n\nTo ensure reliability across devices, Firebase was used for syncing, allowing notes, tags, and summaries to stay consistent everywhere. The app significantly improved user clarity and focus, increasing productivity by over 65% during testing. By combining fast note capture with intelligent refinement, it acts as a personal thinking assistant that transforms raw thoughts into meaningful plans and insights.',
      shortDescription:
        'A Flutter app that uses GPT to refine, summarize, and structure scattered thoughts into clear, actionable ideas with cross-device syncing.',
      date: 'January 2024',
      role: 'Flutter Developer',
      category: 'Mobile Application',
      techStack: ['Flutter', 'Firebase', 'GPT', 'Node.js', 'MongoDB'],
      tags: [
        'Flutter',
        'Firebase',
        'Productivity Improvement',
        'OpenAI',
        'Summary Reports',
      ],
      thumbnail: '/assets/organize-thoughts/organize_thoughts_thumbnail.jpg',
      screenshots: [
        '/assets/organize-thoughts/1.png',
        '/assets/organize-thoughts/2.png',
        '/assets/organize-thoughts/3.png',
        '/assets/organize-thoughts/4.png',
        '/assets/organize-thoughts/5.png',
        '/assets/organize-thoughts/6.png',
        '/assets/organize-thoughts/7.png',
      ],
      videoId: null,
      features: [
        'AI-Based Note Refinement',
        'Multi-Note Summarization via AI',
        'Thought Merging',
        'Tagging and Categorization',
        'High-Quality Summaries',
      ],
      otherLinks: [],
      slug: '/projects/organize-thoughts',
    },
    {
      id: '13',
      title: 'Plant Identifier',
      subtitle: 'Smart Plant Recognition & Care Reminder App',
      description: 'Just like flower identifier app, we crafted a better version for better plant care. Implemented GPT-based plant recognition along with detailed plant care schedules. Added recurrent reminders for watering, misting, fertilizing, and sunlight exposure. Used Firebase for push notifications and local caching for offline use. This app improved user plant survival rates by 80% through consistent habit reinforcement.',
      shortDescription: 'Smart Plant Recognition & Care Reminder App',
      date: 'May 2024',
      role: 'Flutter Developer',
      category: 'Mobile Application',
      techStack: ['Flutter', 'Firebase', 'GPT', 'Node.js', 'MongoDB'],
      tags: [
        'Flutter',
        'Mobile App',
        'AI',
        'Plant Care',
        'Firebase',
        'Notifications',
      ],
      thumbnail: '/assets/plant-identifier/plant_identifier_thumbnail.jpg',
      screenshots: [
        '/assets/plant-identifier/1.png',
        '/assets/plant-identifier/2.png',
        '/assets/plant-identifier/3.png',
        '/assets/plant-identifier/4.png',
        '/assets/plant-identifier/5.png',
      ],
      videoId: null, // YouTube video ID or full URL: 'dQw4w9WgXcQ' or 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      features: [
        'GPT-based Plant Recognition',
        'Detailed Plant Care Schedules',
        'Recurrent Reminders',
        'Push Notifications',
        'Offline Support',
        'Improved Plant Survival',
        'User-friendly Interface',
      ],
      otherLinks: [], // [{ label: 'Documentation', url: '...', icon: '📚' }]
      slug: '/projects/plant-identifier',
    },
    {
      id: '14',
      title: 'Flower Identifier',
      subtitle: 'AI-Powered Flower Recognition & Collection App',
      description:
        'Built a Flutter application that identifies flowers in real time using the device camera and GPT-powered visual interpretation. The app recognizes the flower type, category, and natural benefits, presenting the details in a clean and intuitive UI. Designed for nature enthusiasts, it ensures fast scanning and highly accurate results across diverse flower sets. Achieved around 95% accuracy during testing, ensuring reliable recognition even in varied lighting conditions.\n\nIn addition to instant identification, the app allows users to save flowers into a personal collection, transforming the experience into a nature discovery journal. Subtle gamified progress encourages users to explore more plants and build their collection over time. The backend integrates Firebase for secure data storage and a lightweight Node.js service for processing GPT responses, making the entire system scalable and efficient.',
      shortDescription:
        'A Flutter app that identifies flowers through the camera using GPT-powered recognition and lets users save discoveries in a personal nature collection.',
      date: 'August 2024',
      role: 'Flutter Developer',
      category: 'Mobile Application',
      techStack: ['Flutter', 'Firebase', 'GPT', 'Node.js', 'MongoDB'],
      tags: [
        'Flutter',
        'Mobile App',
        'AI',
        'Image Recognition',
        'Flower Detection',
        'Firebase',
        'OpenAI',
      ],
      thumbnail: '/assets/flower-identifier/flower_identifier_thumbnail.jpg',
      screenshots: [
        '/assets/flower-identifier/1.png',
        '/assets/flower-identifier/2.png',
        '/assets/flower-identifier/3.png',
        '/assets/flower-identifier/4.png',
        '/assets/flower-identifier/5.png',
      ],
      videoId: null,
      features: [
        'GPT-based Flower Recognition',
        'Real-time Camera Scanning',
        'Flower Type & Category Detection',
        'Detailed Flower Benefits',
        'Personal Collection Saving',
        'High Accuracy Identification',
      ],
      otherLinks: [],
      slug: '/projects/flower-identifier',
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
        url: 'https://github.com/farhan39',
        icon: 'github', // Will be rendered as SVG
        color: 'from-[#1A1A1A] to-[#2A2A2A]',
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/farhan-bukhari-561a51259',
        icon: 'linkedin',
        color: 'from-[#0077B5] to-[#005885]',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/farhanbukhari557',
        icon: 'instagram',
        color: 'from-[#C13584] to-[#833AB4]',
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

