import projectTufind from "../assets/projects/Tufind.png"
import projectOmnikasir from "../assets/projects/omnikasir.png"
import projectMockInterview from "../assets/projects/mockinterview-ai.png"
import projectNao from "../assets/projects/nao.png"
import projectiFinance from "../assets/projects/iFinance.png"

export const HERO_CONTENT = `I’m James Howell, a Full-Stack Software Engineer experienced in building scalable web applications using C#/.NET, Go, and modern frontend technologies. Skilled in designing RESTful APIs, optimizing databases, and developing responsive user experiences. Currently expanding expertise in AI application development by integrating Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), vector databases, and AI APIs into production-ready software.`

export const PROJECTS = [
  {
    title: "Nao [ON PROGRESS]",
    image: projectNao,
    description:
      "Nao is an AI-powered knowledge platform that leverages Retrieval-Augmented Generation (RAG) to transform Markdown-based documentation into a conversational assistant. Built with FastAPI, Next.js, and Supabase pgvector, it automatically synchronizes knowledge from GitHub, performs semantic retrieval, and generates source-grounded responses using large language models.",
    technologies: ["FastAPI", "TypeScript", "Gemini API", "Supabase"],
    preview: "https://nao-frontend.vercel.app/chat",
    sourceCode: "https://github.com/jameshowell08/nao-frontend",
  },
  {
    title: "iFinance",
    image: projectiFinance,
    description:
      "iFinance is a personal finance management application that enables users to track expenses, manage budgets, and analyze spending patterns through interactive dashboards and financial reports. The application emphasizes responsive user experience, secure data management, and scalable full-stack architecture for personal financial planning.",
    technologies: ["React Native"],
    preview: "https://github.com/jameshowell08/iFinance",
    sourceCode: "https://github.com/jameshowell08/iFinance",
  },
  {
    title: "MockInterviewAI",
    image: projectMockInterview,
    description:
      "An AI-powered mock interview platform that simulates real-world job interviews. It provides interactive voice and text question-and-answer sessions and generates detailed feedback, performance scoring, and tailored improvement suggestions to help candidates build confidence and pass interviews.",
    technologies: ["React", "Tailwind CSS", "Gemini API", "Node.js"],
    preview: "https://mockinterviewapp-frontend.vercel.app",
    sourceCode: "https://github.com/jameshowell08/mockinterviewapp-frontend",
  },
  {
    title: "Omnikasir",
    image: projectOmnikasir,
    description:
      "A Point of sale web application that integrated offline and online transactions management system",
    technologies: ["Next.js", "PosgreSQL", "Prisma"],
    preview: "https://web-omnikasir.vercel.app/",
    sourceCode: "https://github.com/jameshowell08/web-omnikasir",
  },
  {
    title: "TuFind",
    image: projectTufind,
    description:
      "A Mobile application that connects Private tutors and Students",
    technologies: ["Flutter", "GoLang", "MySQL"],
    preview: "https://github.com/jameshowell08/Tufind-Backend",
    sourceCode: "https://github.com/jameshowell08/Tufind-Backend",
  },
]

export const CONTACT = {
  phoneNo: "+6281210815151",
  email: "howelljamescong@gmail.com",
}

