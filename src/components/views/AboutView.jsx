import { motion } from "framer-motion"
import { ABOUT_DATA, SKILL_CATEGORIES } from "../../constants"
import { FiAward, FiBookOpen, FiCpu, FiCode, FiLayers, FiCheckCircle } from "react-icons/fi"

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

const AboutView = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}
      className="space-y-16 pb-16 max-w-4xl"
    >
      {/* Straightforward Header */}
      <section className="pt-4 sm:pt-8">
        <motion.div variants={itemVariants}>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            About Me
          </h1>
        </motion.div>
      </section>

      {/* Narrative & Story (Direct & Straightforward) */}
      <motion.section variants={itemVariants} className="space-y-6">
        <p className="text-xl sm:text-2xl font-normal text-neutral-900 dark:text-neutral-100 leading-relaxed">
          {ABOUT_DATA.summary}
        </p>

        <div className="space-y-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
          {ABOUT_DATA.details.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </motion.section>

      {/* Academic Background */}
      <motion.section variants={itemVariants} className="p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-900/40 backdrop-blur-sm space-y-4">
        <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-sm">
          <FiAward className="text-lg" />
          <span>Academic Background</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              {ABOUT_DATA.education.degree}
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
              {ABOUT_DATA.education.institution} • {ABOUT_DATA.education.period}
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold w-fit border border-emerald-500/20">
            <FiCheckCircle className="text-xs" />
            GPA {ABOUT_DATA.education.gpa}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {ABOUT_DATA.education.highlights.map((item, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Technical Arsenal / Skills Grid */}
      <section className="space-y-6 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60">
        <motion.div variants={itemVariants}>
          <span className="text-xs uppercase tracking-wider font-semibold text-purple-600 dark:text-purple-400">
            Proficiencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mt-1">
            Skills & Technical Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-900/30 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 text-sm">
                    {idx === 0 ? <FiCode /> : idx === 1 ? <FiLayers /> : idx === 2 ? <FiCpu /> : <FiBookOpen />}
                  </div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-2.5 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

export default AboutView
