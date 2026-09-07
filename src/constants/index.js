import projectTufind from "../assets/projects/Tufind.png"
import projectOmnikasir from "../assets/projects/omnikasir.png"
import projectMockInterview from "../assets/projects/mockinterview-ai.png"
import projectNao from "../assets/projects/nao.png"
import projectiFinance from "../assets/projects/iFinance.png"

export const HERO_CONTENT = {
  name: "James Howell",
  title: "Full-Stack Engineer",
  location: "Jakarta, Indonesia",
  status: "Available for new opportunities",
  bio: "Full-Stack Software Engineer experienced in building scalable web applications using C#/.NET, Go, and modern frontend technologies. Skilled in designing RESTful APIs, optimizing databases, and developing responsive user experiences. Currently expanding expertise in AI application development by integrating Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), vector databases, and AI APIs into production-ready software.",
}

export const ABOUT_DATA = {
  summary: `I'm a Computer Science student at Binus University (GPA 3.87/4.00) and Software Engineer based in Jakarta, Indonesia. My journey in tech spans building enterprise-grade backend APIs in C# and Go to crafting sleek, responsive user interfaces with React and Next.js.`,
  details: [
    "I focus on clean architecture, scalable system design, and performant data layers. Recently, my primary focus has been AI-driven software development—architecting RAG pipelines with Supabase pgvector, FastAPI, and Gemini API.",
    "Previously, I served as an Application Developer Intern at PT Asuransi Astra Buana, where I developed mission-critical UI components, engineered high-throughput RESTful APIs with .NET, and tuned complex SQL Server stored procedures for operational speed and integrity.",
    "When I'm not writing code, I love exploring emerging AI papers, dissecting minimalist design patterns, and refining open-source software solutions."
  ],
  education: {
    degree: "Bachelor of Computer Science",
    institution: "Binus University",
    period: "2022 - 2026",
    gpa: "3.87 / 4.00",
    highlights: ["Software Engineering Lab Assignments", "Data Structures & Algorithms", "Database Design", "AI & Machine Learning fundamentals"]
  }
}

export const SKILL_CATEGORIES = [
  {
    category: "Languages",
    skills: ["C#", "Go", "TypeScript", "JavaScript", "Python", "Java", "SQL", "C++"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "React Native", "Framer Motion", "HTML5/CSS3"]
  },
  {
    category: "Backend & APIs",
    skills: ["ASP.NET Core", ".NET Framework", "Go (Gin)", "FastAPI", "Node.js", "RESTful APIs"]
  },
  {
    category: "Databases & Storage",
    skills: ["SQL Server", "PostgreSQL", "MySQL", "pgvector", "Supabase", "Prisma", "GORM"]
  },
  {
    category: "AI & Modern Tech",
    skills: ["RAG Pipelines", "Gemini API", "Vector Embeddings", "Prompt Engineering", "LLM Orchestration"]
  },
  {
    category: "Cloud, Tools & DevOps",
    skills: ["Git & GitHub", "Docker", "GitHub Actions", "Google Cloud Run", "Render", "Vercel", "Postman"]
  }
]

export const EXPERIENCES = [
  {
    role: "Application Developer Intern",
    company: "PT Asuransi Astra Buana",
    period: "March 2025 - February 2026",
    location: "Jakarta, Indonesia",
    type: "Internship",
    description: "Developed enterprise insurance software applications and backend services supporting high-volume internal operations.",
    bullets: [
      "Developed and deployed responsive UI components and robust RESTful APIs using C# and .NET Framework, aligning closely with business requirements.",
      "Enhanced backend services and optimized core business logic to maintain high throughput and low-latency response times for critical user workflows.",
      "Designed normalized database tables, engineered optimized SQL queries, and implemented Stored Procedures in SQL Server to ensure data integrity and maximize retrieval speed.",
      "Collaborated with QA engineers and project managers to troubleshoot edge-case issues and deliver reliable software solutions within agile release sprints."
    ],
    technologies: ["C#", ".NET Framework", "ASP.NET", "SQL Server", "Stored Procedures", "REST APIs", "Git"]
  }
]

export const PROJECTS = [
  {
    id: "nao",
    title: "Nao",
    subtitle: "AI-Powered Documentation & RAG Assistant",
    status: "In Progress",
    category: "AI & LLM",
    image: projectNao,
    description:
      "An AI-powered knowledge engine that leverages Retrieval-Augmented Generation (RAG) to transform markdown repositories and technical documentation into an interactive conversational assistant. Built with FastAPI, Next.js, and Supabase pgvector, it automatically synchronizes knowledge from GitHub, performs hybrid semantic retrieval, and generates source-grounded responses.",
    technologies: ["FastAPI", "TypeScript", "Gemini API", "Supabase pgvector", "Next.js"],
    preview: "https://nao-frontend.vercel.app/chat",
    sourceCode: "https://github.com/jameshowell08/nao-frontend",
    featured: true,
  },
  {
    id: "ifinance",
    title: "iFinance",
    subtitle: "Personal Finance Management Mobile Application",
    status: "Completed",
    category: "Mobile",
    image: projectiFinance,
    description:
      "A cross-platform personal finance management mobile app that enables users to track daily expenses, manage multiple category budgets, and analyze spending habits through interactive financial dashboards.",
    technologies: ["React Native", "TypeScript", "Tailwind CSS", "Mobile UI"],
    preview: "https://github.com/jameshowell08/iFinance",
    sourceCode: "https://github.com/jameshowell08/iFinance",
    featured: true,
  },
  {
    id: "mockinterview-ai",
    title: "MockInterviewAI",
    subtitle: "Real-time AI Interview Simulation & Evaluation",
    status: "Completed",
    category: "AI & LLM",
    image: projectMockInterview,
    description:
      "An AI-powered mock interview platform that simulates real-world job interviews with interactive audio/text Q&A sessions and generates detailed feedback, performance scoring, and tailored improvement suggestions.",
    technologies: ["React", "Tailwind CSS", "Gemini API", "Node.js"],
    preview: "https://mockinterviewapp-frontend.vercel.app",
    sourceCode: "https://github.com/jameshowell08/mockinterviewapp-frontend",
    featured: true,
  },
  {
    id: "omnikasir",
    title: "OmniKasir",
    subtitle: "Integrated POS & Store Management System",
    status: "Completed",
    category: "Full-Stack",
    image: projectOmnikasir,
    description:
      "A modern Point of Sale web application designed to integrate offline store sales with online transaction and inventory management workflows seamlessly.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    preview: "https://web-omnikasir.vercel.app/",
    sourceCode: "https://github.com/jameshowell08/web-omnikasir",
    featured: false,
  },
  {
    id: "tufind",
    title: "TuFind Backend",
    subtitle: "Private Tutor & Student Matching Platform",
    status: "Completed",
    category: "Full-Stack",
    image: projectTufind,
    description:
      "High-performance backend service connecting private tutors and students. Built with Go, Gin, and MySQL with robust JWT authentication and optimized relational schema queries.",
    technologies: ["GoLang", "Gin", "GORM", "MySQL", "JWT"],
    preview: "https://github.com/jameshowell08/Tufind-Backend",
    sourceCode: "https://github.com/jameshowell08/Tufind-Backend",
    featured: false,
  },
]

export const CONTACT = {
  name: "James Howell",
  phoneNo: "+62 812-1081-5151",
  email: "howelljamescong@gmail.com",
  location: "Jakarta, Indonesia",
  socials: {
    github: "https://github.com/jameshowell08",
    linkedin: "https://www.linkedin.com/in/jameshowell08/",
    instagram: "https://www.instagram.com/jameshowellz_/",
  }
}

