import { motion } from "framer-motion"
import { EXPERIENCES } from "../../constants"
import { FiCalendar, FiMapPin, FiCheck, FiDownload } from "react-icons/fi"

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

const ExperienceView = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}
      className="space-y-16 pb-16"
    >
      {/* Header */}
      <section className="pt-4 sm:pt-8">
        <motion.div variants={itemVariants} className="space-y-2 max-w-2xl">
          <span className="text-xs uppercase tracking-wider font-semibold text-purple-600 dark:text-purple-400">
            Career Journey
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Experience & Milestones
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 pt-1">
            Proven enterprise software development, backend systems optimization, and academic leadership.
          </p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="relative pl-4 sm:pl-8 space-y-12">
        {/* Timeline subtle vertical bar */}
        <div className="absolute left-[7px] sm:left-[23px] top-4 bottom-4 w-px bg-neutral-200 dark:bg-neutral-800"></div>

        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative pl-6 sm:pl-10"
          >
            {/* Timeline node icon */}
            <div className="absolute -left-[14px] sm:-left-[3px] top-1.5 w-4 h-4 rounded-full border-2 border-purple-600 bg-white dark:bg-neutral-950 shadow-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
            </div>

            {/* Card Content */}
            <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/40 p-6 sm:p-8 shadow-sm hover:border-purple-500/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-purple-600 dark:text-purple-400">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                  <span className="inline-flex items-center gap-1">
                    <FiCalendar /> {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <FiMapPin /> {exp.location}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 font-medium text-neutral-600 dark:text-neutral-300">
                    {exp.type}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mb-5">
                {exp.description}
              </p>

              {/* Achievements & Bullets */}
              <div className="space-y-2.5 mb-6">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
                    <FiCheck className="text-purple-500 flex-shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Pill Row */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Download CV CTA */}
      <motion.section
        variants={itemVariants}
        className="p-8 rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900/60 dark:to-neutral-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
            Looking for a complete PDF breakdown?
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Download my comprehensive Curriculum Vitae including full course history and references.
          </p>
        </div>

        <a
          href={`${import.meta.env.BASE_URL}CV_James_Howell.pdf`}
          download="CV_James_Howell.pdf"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all shadow-sm flex-shrink-0 hover:scale-[1.02] active:scale-[0.98]"
        >
          <FiDownload className="text-base" />
          Download Resume (PDF)
        </a>
      </motion.section>
    </motion.div>
  )
}

export default ExperienceView
