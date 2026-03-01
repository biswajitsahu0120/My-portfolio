/**
 * data.js — Single source of truth for all portfolio content.
 * Edit this file to update any text, links, or section content.
 */

export const PROFILE = {
  name: 'Biswajit Sahu',
  headline: 'Senior Java Backend Engineer',
  subheadline:
    'Building High-Performance Enterprise Telecom Systems using Java, Spring Boot, Kafka & GCP',
  heroIntro:
    'Senior Software Engineer at GlobalLogic with 3+ years delivering production-grade microservices for enterprise telecom platforms. I specialise in Kafka-driven event architectures, Spring Boot API design, PostgreSQL performance tuning, and cloud-native deployments on GCP — shipping reliable, observable, and scalable systems in high-volume production environments.',
  profileImage: '/profile.jpg',       // Profile photo → public/profile.jpg (compressed, 154KB)
  resumeUrl: '/Biswajit_CV.pdf',      // Resume → public/Biswajit_CV.pdf
  email: 'biswajitsahu697@gmail.com',
  phone: '+91 78948 33282',
  location: 'Bengaluru, Karnataka, India',
  linkedin: 'https://www.linkedin.com/in/biswajit-sahu-2021bs2/',
  github: 'https://github.com/biswajitsahu',
  techTags: [
    'Java 17',
    'Spring Boot',
    'Microservices',
    'Kafka',
    'GCP',
    'Docker',
    'Kubernetes',
  ],
  // Expertise tags shown below profile image (replaces numeric badges)
  expertiseTags: [
    'Enterprise Telecom Systems',
    'Event-Driven Architecture',
    'Cloud-Native Microservices',
    'Production-Grade Systems',
  ],
};

export const ABOUT = {
  paragraphs: [
    'I am a Senior Software Engineer at GlobalLogic with 3+ years of experience building production-grade backend systems for enterprise telecom clients. My work centres on microservices architecture, Kafka-driven event processing, and cloud-native deployments that handle high transaction volumes under strict SLA constraints.',
    'I take ownership of the full development lifecycle — from system design and API development to performance tuning, production debugging, and CI/CD automation. I work closely with QA, DevOps, and product teams in Agile environments where delivery quality and reliability are the baseline.',
    'Outside of engineering, I completed an eMBA in Information Technology & Business Analytics from Lovely Professional University (January 2026), sharpening my ability to connect technical decisions with measurable business outcomes.',
  ],
  highlights: [
    { label: '3.5+', sublabel: 'Years Experience' },
    { label: '25–30%', sublabel: 'API Latency Reduced' },
    { label: 'GCP', sublabel: 'Certified Engineer' },
    { label: 'Kafka', sublabel: 'Event-Driven Pipelines' },
  ],
};

export const SKILLS = [
  {
    category: 'Backend & Frameworks',
    icon: '☕',
    items: ['Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'REST APIs', 'gRPC'],
  },
  {
    category: 'Messaging & Streaming',
    icon: '⚡',
    items: ['Apache Kafka', 'Event-Driven Architecture', 'Async Processing', 'Consumer Groups', 'Dead-Letter Queues'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    items: ['Google Cloud Platform (GCP)', 'Docker', 'Kubernetes', 'Jenkins CI/CD', 'Cloud Run', 'GKE'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Query Optimization', 'Connection Pooling'],
  },
  {
    category: 'Architecture & Patterns',
    icon: '🏗️',
    items: ['Microservices', 'Clean Architecture', 'Domain-Driven Design', 'API Gateway', 'Circuit Breaker'],
  },
  {
    category: 'Tools & Testing',
    icon: '🔧',
    items: ['Git', 'Maven', 'JUnit 5', 'Mockito', 'SonarQube', 'Postman', 'Jira'],
  },
];

// AI-assisted engineering practices — shown as a dedicated subsection in Skills
export const AI_SKILLS = [
  'Leveraging Claude AI for structured documentation and technical design drafting',
  'AI-assisted JUnit test case generation and edge-case validation',
  'Business logic drafting and requirement analysis with AI tooling',
  'Debugging assistance and code refactoring improvements using AI tools',
  'Productivity enhancement through AI-supported engineering workflows',
];

export const EXPERIENCE = [
  {
    id: 'exp-1',
    role: 'Senior Software Engineer (Java Backend)',
    company: 'GlobalLogic',
    period: 'Oct 2025 – Present',
    location: 'Bengaluru, Karnataka, India',
    type: 'Full-time',
    domain: 'Enterprise Telecom Systems',
    description:
      'Leading backend development for high-volume enterprise telecom systems, owning end-to-end delivery from design through production support.',
    bullets: [
      'Architected and delivered Spring Boot microservices following clean architecture and domain-driven design, improving maintainability and test coverage across services.',
      'Designed Kafka-based event pipelines for high-throughput asynchronous processing, improving system decoupling and throughput on telecom transaction flows.',
      'Drove API performance optimization initiatives reducing response times by 25–30% through PostgreSQL query tuning, index analysis, and connection pool configuration.',
      'Owned production incident triage and resolution for telecom backend systems, maintaining high availability under SLA constraints.',
      'Automated CI/CD pipelines using Jenkins and Docker, cutting deployment cycle time and reducing manual release risk.',
      'Contributed to architectural design reviews for new microservice rollouts on GCP (GKE, Cloud Run).',
      'Conducted structured code reviews and mentored junior engineers, raising team-wide code quality and adherence to standards.',
    ],
    tags: ['Java 17', 'Spring Boot', 'Kafka', 'GCP', 'Docker', 'Kubernetes', 'Jenkins', 'PostgreSQL'],
  },
  {
    id: 'exp-2',
    role: 'Software Engineer',
    company: 'GlobalLogic',
    period: 'Sep 2022 – Oct 2025',
    location: 'Bengaluru, Karnataka, India',
    type: 'Full-time',
    domain: 'Enterprise Telecom Systems',
    description:
      'Built and maintained production backend services for enterprise telecom clients, contributing across feature development, integration, and operational support.',
    bullets: [
      'Developed and maintained Spring Boot microservices handling core telecom business workflows, aligned to enterprise coding and security standards.',
      'Built REST APIs supporting business-critical integrations, ensuring backward compatibility and clear API contracts.',
      'Integrated Apache Kafka for event-driven inter-service communication, enabling asynchronous and resilient processing.',
      'Optimised PostgreSQL queries and database schemas, improving performance on high-frequency read/write paths.',
      'Supported containerised deployments on GCP, contributing to environment consistency and deployment reliability.',
      'Contributed to Jenkins-based CI/CD pipelines, reducing manual steps in the release process.',
      'Collaborated with QA and cross-functional teams through SIT, UAT, and production support cycles.',
      'Participated in Agile/Scrum ceremonies, sprint planning, and retrospectives, contributing to consistent delivery.',
    ],
    tags: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'GCP', 'Docker', 'Jenkins', 'Git', 'Jira'],
  },
  {
    id: 'exp-3',
    role: 'IoT Intern',
    company: 'Bosch',
    period: 'Apr 2021 – Aug 2021',
    location: 'Bhubaneswar, India',
    type: 'Internship',
    domain: 'IoT & Embedded Systems',
    description:
      'Worked on IoT-based prototypes and embedded communication systems as part of a summer internship at Bosch.',
    bullets: [
      'Developed IoT-based prototypes using microcontrollers and sensors for industrial use cases.',
      'Designed and tested digital communication circuits for device-to-device data exchange.',
      'Analysed system performance data and prepared structured technical documentation.',
    ],
    tags: ['IoT', 'Embedded Systems', 'Microcontrollers', 'Communication Protocols'],
  },
];

export const PROJECTS = [
  {
    id: 'proj-1',
    title: 'Telecom Event Processing Platform',
    description:
      'Contributed to a high-throughput event-driven platform for an enterprise telecom client, processing real-time usage and transaction events using Kafka-based microservices. The system handles millions of events daily with strict latency and reliability SLAs.',
    tech: ['Java 17', 'Spring Boot', 'Apache Kafka', 'PostgreSQL', 'GCP', 'Docker', 'Kubernetes'],
    highlights: [
      'Kafka consumer groups processing high-volume telecom events with fault-tolerant retry logic',
      'API latency improved by 25–30% via query optimization and connection pool tuning',
      'Deployed on GCP with containerized workloads and 99.9% uptime SLA',
    ],
    type: 'Professional',
  },
  {
    id: 'proj-2',
    title: 'Microservices API Gateway & Integration Layer',
    description:
      'Designed and developed a service integration layer for enterprise telecom backend systems, enabling clean inter-service communication via REST APIs and event streams. Focused on fault tolerance, idempotency, and observability.',
    tech: ['Java', 'Spring Cloud', 'Spring Boot', 'Redis', 'PostgreSQL', 'REST APIs', 'Docker'],
    highlights: [
      'Clean API contracts with versioning and backward-compatible schema evolution',
      'Redis-based caching reducing downstream DB load on frequently-accessed resources',
      'Circuit breaker patterns ensuring resilience during partial service outages',
    ],
    type: 'Professional',
  },
  {
    id: 'proj-3',
    title: 'CI/CD Automation Pipeline',
    description:
      'Built and maintained end-to-end CI/CD pipelines using Jenkins and Docker for a suite of microservices, enabling consistent, reliable deployments to GCP environments with automated quality gates.',
    tech: ['Jenkins', 'Docker', 'GCP', 'Kubernetes', 'Shell Scripting', 'SonarQube'],
    highlights: [
      'Automated build, test, and deploy stages reducing manual release effort significantly',
      'SonarQube quality gates integrated to block builds with critical code issues',
      'Containerized deployments enabling consistent dev-to-prod environment parity',
    ],
    type: 'Internal Tool',
  },
];

export const ACHIEVEMENTS = [
  {
    id: 'ach-1',
    metric: '25–30%',
    label: 'API Latency Reduction',
    description:
      'Reduced API latency by 25–30% through query optimization, connection pool tuning, and targeted code-level refactoring across critical microservices.',
    icon: '⚡',
  },
  {
    id: 'ach-2',
    metric: '10M+',
    label: 'Events / Day via Kafka',
    description:
      'Implemented Kafka-based event processing pipelines for asynchronous workflows, handling 10M+ events per day with fault-tolerant consumer groups.',
    icon: '📊',
  },
  {
    id: 'ach-3',
    metric: '60%',
    label: 'Less Manual Deployment Effort',
    description:
      'Automated CI/CD pipelines using Jenkins and Docker, significantly reducing manual deployment effort and improving release confidence.',
    icon: '🚀',
  },
  {
    id: 'ach-4',
    metric: '99.9%',
    label: 'Production Uptime',
    description:
      'Owned production debugging and reliability improvements for telecom systems, maintaining high availability SLAs and fast incident resolution.',
    icon: '🛡️',
  },
];

export const EDUCATION = [
  {
    id: 'edu-1',
    degree: 'eMBA in Information Technology & Business Analytics',
    institution: 'Lovely Professional University',
    period: 'Jan 2024 – Jan 2026',
    status: 'Completed',
    description:
      'Executive MBA focused on IT strategy, business analytics, data-driven decision making, and technology leadership. Completed January 2026.',
    logo: '🎓',
  },
  {
    id: 'edu-2',
    degree: 'Bachelor of Technology (B.Tech), Electronics & Telecommunication',
    institution: 'C. V. Raman Global University',
    period: '2018 – 2022',
    status: 'Completed',
    description:
      'Specialised in embedded systems, signal processing, and communication networks. Final year project focused on IoT-based communication systems.',
    logo: '🏛️',
  },
];

export const CERTIFICATIONS = [
  {
    id: 'cert-1',
    title: 'Associate Cloud Engineer',
    issuer: 'Google Cloud',
    badge: 'GCP',
    color: 'from-blue-500 to-cyan-400',
    description:
      'Validates the ability to deploy applications, monitor operations, and manage enterprise cloud solutions on Google Cloud Platform.',
    skills: ['GCP', 'Cloud Run', 'GKE', 'Cloud Storage', 'IAM', 'VPC'],
    icon: '☁️',
    issued: '2022',
    credentialUrl: '#', // Update with real credential URL
  },
];

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];


