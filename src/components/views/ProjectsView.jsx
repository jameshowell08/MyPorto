import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PROJECTS } from "../../constants"
import { FiExternalLink, FiGithub } from "react-icons/fi"

const categories = ["All", "AI & LLM", "Full-Stack", "Mobile"]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

const ProjectsView = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}
      className="space-y-12 pb-16"
    >
      {/* Header */}
      <section className="pt-4 sm:pt-8">
        <motion.div variants={itemVariants} className="space-y-2 max-w-2xl">
          <span className="text-xs uppercase tracking-wider font-semibold text-purple-600 dark:text-purple-400">
            Selected Works
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Engineered Software & AI Tools
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 pt-1">
            Production-ready full-stack web applications, AI RAG assistants, and scalable APIs.
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
        {categories.map((category) => {
          const isActive = selectedCategory === category
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                isActive
                  ? "text-neutral-900 dark:text-neutral-100 shadow-sm"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="projectFilterPill"
                  className="absolute inset-0 rounded-full bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {category}
              {category === "All" ? ` (${PROJECTS.length})` : ` (${PROJECTS.filter((p) => p.category === category).length})`}
            </button>
          )
        })}
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -4 }}
              className="group rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/40 overflow-hidden flex flex-col shadow-sm hover:border-purple-500/40 hover:shadow-xl dark:hover:shadow-purple-950/20 transition-all duration-300"
            >
              {/* Media Preview (Uniform 16:9 aspect ratio) */}
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200/60 dark:border-neutral-800/60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-900/85 text-white backdrop-blur-md">
                    {project.category}
                  </span>
                  {project.status && (
                    <span className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-purple-500/80 text-white backdrop-blur-md">
                      {project.status}
                    </span>
                  )}
                </div>
              </div>

              {/* Information */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 font-medium">
                  {project.subtitle}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                  {project.preview && (
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-sm transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                    >
                      <span>Live Demo</span>
                      <FiExternalLink />
                    </a>
                  )}
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-semibold shadow-sm transition-colors"
                    >
                      <FiGithub />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default ProjectsView
