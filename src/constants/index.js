import project1 from "../assets/projects/Tufind.png"
import project7 from "../assets/projects/omnikasir.png"
import projectMockInterview from "../assets/projects/mockinterview-ai.png"

export const HERO_CONTENT = `I’m James Howell, a Full Stack Software Developer based in Jakarta, Indonesia. I’m passionate about learning and always strive to excel in my studies. With a diligent work ethic and a humble attitude, I approach every opportunity with enthusiasm and dedication. I believe in continuous growth and eagerly embrace new challenges.  I have worked on various types of projects involving Golang, Java, .NET, SQL, and React, which has given me a solid foundation in my field.`

export const PROJECTS = [
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
    image: project7,
    description:
      "A Point of sale web application that integrated offline and online transactions management system",
    technologies: ["Next.js", "PosgreSQL", "Prisma"],
    preview: "https://web-omnikasir.vercel.app/",
    sourceCode: "https://github.com/jameshowell08/web-omnikasir",
  },
  {
    title: "TuFind",
    image: project1,
    description:
      "A Mobile application that connects Private tutors and Students",
    technologies: ["Flutter", "GoLang", "MySQL"],
    preview: "https://github.com/jameshowell08/Tufind-Backend",
    sourceCode: "https://github.com/jameshowell08/Tufind-Backend",
  },
]

export const CONTACT = {
  phoneNo: "+628991726900 ",
  email: "howelljamescong@gmail.com",
}

