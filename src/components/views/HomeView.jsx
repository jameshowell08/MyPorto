import { motion } from "framer-motion"
import { HERO_CONTENT, PROJECTS } from "../../constants"
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi"
import Lamp from "../Lamp"

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

const HomeView = ({ onNavigate, theme, toggleTheme }) => {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}
      className="space-y-12 pb-16"
    >
      {/* Hero Section with Integrated Natural Hanging Lamp */}
      <section className="pt-2 sm:pt-4">
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-6 lg:gap-8">
          {/* Left Column: Hero Text & Action Buttons */}
          <div className="space-y-5 max-w-2xl flex-1 pt-2 sm:pt-4">
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
              Full-Stack <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 dark:from-purple-400 dark:via-indigo-300 dark:to-cyan-400 bg-clip-text text-transparent">Engineer</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              Hi, I&apos;m <span className="font-semibold text-neutral-900 dark:text-neutral-100">{HERO_CONTENT.name}</span>. {HERO_CONTENT.bio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate("projects")}
                className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 dark:bg-neutral-100 px-5 py-3 text-sm font-medium text-white dark:text-neutral-900 shadow-sm hover:bg-neutral-800 dark:hover:bg-white hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                Explore Projects
                <FiArrowRight className="text-sm" />
              </button>

              <a
                href={`${import.meta.env.BASE_URL}CV_James_Howell.pdf`}
                download="CV_James_Howell.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 px-5 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-200 shadow-sm hover:border-neutral-400 dark:hover:border-neutral-700 transition-all"
              >
                <FiDownload className="text-sm" />
                Download CV
              </a>

              <button
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center gap-2 rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 transition-all"
              >
                <FiMail className="text-sm" />
                Get in touch
              </button>
            </motion.div>
          </div>

          {/* Right Column: Apple-inspired Architectural Lamp */}
          <motion.div variants={itemVariants} className="w-full lg:w-auto flex justify-center lg:justify-end flex-shrink-0">
            <Lamp theme={theme} toggleTheme={toggleTheme} />
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="space-y-6 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60">
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
                    <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 font-mono whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[11px] px-1.5 py-0.5 text-neutral-400 self-center">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

export default HomeView
