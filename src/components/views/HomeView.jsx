import { motion } from "framer-motion"
import { HERO_CONTENT, PROJECTS } from "../../constants"
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi"
import { RiSparklingFill } from "react-icons/ri"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const HomeView = ({ onNavigate }) => {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}
      className="space-y-16 pb-16"
    >
      {/* Hero Section */}
      <section className="pt-4 sm:pt-8">
        <div className="space-y-5 max-w-3xl">
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.1]">
            Full-Stack <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 dark:from-purple-400 dark:via-indigo-300 dark:to-cyan-400 bg-clip-text text-transparent">Engineer</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
            Hi, I&apos;m <span className="font-semibold text-neutral-900 dark:text-neutral-100">{HERO_CONTENT.name}</span>. {HERO_CONTENT.bio}
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 pt-8">
          <button
            onClick={() => onNavigate("projects")}
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 dark:bg-neutral-100 px-5 py-3 text-sm font-medium text-white dark:text-neutral-900 shadow-md hover:bg-neutral-800 dark:hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Explore Projects
            <FiArrowRight className="text-base" />
          </button>

          <a
            href={`${import.meta.env.BASE_URL}CV_James_Howell.pdf`}
            download="CV_James_Howell.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 px-5 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-200 shadow-sm hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800/80 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <FiDownload className="text-base" />
            Download CV
          </a>

          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-500/5 transition-all duration-200"
          >
            <FiMail className="text-base" />
            Get in touch
          </button>
        </motion.div>
      </section>

      {/* Metrics / Key Focus */}
      <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <div className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-900/40 backdrop-blur-sm">
          <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">Enterprise Backend</div>
          <p className="text-xs text-purple-600 dark:text-purple-400 font-medium mb-2">C# / .NET / Go / SQL Server</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Production experience developing high-performance REST APIs and mission-critical services at Asuransi Astra Buana.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-900/40 backdrop-blur-sm">
          <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">AI Engineering</div>
          <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mb-2">RAG / pgvector / Gemini API</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Specializing in semantic vector search, knowledge retrieval pipelines, and conversational AI software.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-900/40 backdrop-blur-sm">
          <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">3.87 / 4.00 GPA</div>
          <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium mb-2">Binus University Computer Science</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Strong theoretical and applied foundation across algorithms, scalable architectures, and distributed systems.
          </p>
        </div>
      </motion.section>

      {/* Featured Projects Highlight */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-purple-600 dark:text-purple-400">Handpicked Work</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">Featured Projects</h2>
          </div>
          <button
            onClick={() => onNavigate("projects")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
          >
            View all ({PROJECTS.length})
            <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/40 overflow-hidden flex flex-col shadow-sm transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg dark:hover:shadow-purple-950/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-neutral-900/80 text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2 font-medium">
                  {project.subtitle}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 font-mono">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[11px] px-1.5 py-0.5 text-neutral-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Bio CTA Banner */}
      <motion.section
        variants={itemVariants}
        className="rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/5 via-indigo-500/5 to-cyan-500/5 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400">
            <RiSparklingFill /> Want to learn more about my background?
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            From enterprise software in .NET to cutting-edge AI platforms
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Explore my work history, university projects, and technical proficiencies.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => onNavigate("about")}
            className="px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:border-purple-500 transition-colors"
          >
            Read Story
          </button>
          <button
            onClick={() => onNavigate("experience")}
            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-colors shadow-sm"
          >
            View Experience
          </button>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default HomeView
