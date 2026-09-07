import { motion } from "framer-motion"
import { ABOUT_DATA, SKILL_CATEGORIES } from "../../constants"
import aboutImg from "../../assets/about.jpg"
import { FiMapPin, FiAward, FiBookOpen, FiCpu, FiCode, FiLayers } from "react-icons/fi"

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
      className="space-y-16 pb-16"
    >
      {/* Header */}
      <section className="pt-4 sm:pt-8">
        <motion.div variants={itemVariants} className="space-y-2 max-w-2xl">
          <span className="text-xs uppercase tracking-wider font-semibold text-purple-600 dark:text-purple-400">
            About Me
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Bridging robust backend engineering with modern AI applications.
          </h1>
        </motion.div>
      </section>

      {/* Profile & Narrative Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Profile Card */}
        <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-sm rounded-3xl p-2 bg-gradient-to-b from-neutral-200 via-neutral-100 to-transparent dark:from-neutral-800 dark:via-neutral-900 dark:to-transparent border border-neutral-200 dark:border-neutral-800 shadow-xl">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
              <img
                src={aboutImg}
                alt="James Howell"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-lg font-bold">James Howell</p>
                <div className="flex items-center gap-1.5 text-xs text-neutral-300">
                  <FiMapPin className="text-purple-400" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Narrative & Philosophy */}
        <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6 text-neutral-600 dark:text-neutral-300 leading-relaxed text-base sm:text-lg">
          <p className="text-lg sm:text-xl font-medium text-neutral-900 dark:text-neutral-100 leading-relaxed">
            {ABOUT_DATA.summary}
          </p>

          {ABOUT_DATA.details.map((paragraph, index) => (
            <p key={index} className="text-neutral-600 dark:text-neutral-400">
              {paragraph}
            </p>
          ))}

          {/* Education Spotlight Card */}
          <div className="mt-8 p-6 rounded-2xl border border-purple-500/20 bg-purple-500/5 dark:bg-purple-950/10 space-y-3">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-sm">
              <FiAward className="text-lg" />
              <span>Academic Distinction</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                {ABOUT_DATA.education.degree}
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 w-fit">
                GPA {ABOUT_DATA.education.gpa}
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {ABOUT_DATA.education.institution} • {ABOUT_DATA.education.period}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {ABOUT_DATA.education.highlights.map((item, idx) => (
                <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Categorized Skills Matrix */}
      <section className="space-y-8 pt-6">
        <motion.div variants={itemVariants}>
          <span className="text-xs uppercase tracking-wider font-semibold text-purple-600 dark:text-purple-400">
            Proficiencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mt-1">
            Skills & Technical Arsenal
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xl mt-1">
            Carefully curated tools, languages, and frameworks applied in enterprise and open-source environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/40 shadow-sm hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
                  {idx === 0 ? <FiCode /> : idx === 1 ? <FiLayers /> : idx === 2 ? <FiCpu /> : <FiBookOpen />}
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 text-xs rounded-lg bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

export default AboutView
