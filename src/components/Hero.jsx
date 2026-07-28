import { HERO_CONTENT } from "../constants"
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4 lg:mb-35 transition-colors duration-300">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-semibold tracking-tight lg:mt-16 lg:text-8xl text-neutral-900 dark:text-neutral-100"
            >
              James Howell
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-300 dark:via-slate-400 dark:to-purple-400 bg-clip-text text-3xl sm:text-4xl tracking-tight text-transparent"
            >
              Software Engineer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-4xl py-6 font-light tracking-tighter text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <a
                href={`${import.meta.env.BASE_URL}CV_James_Howell.pdf`}
                download="CV_James_Howell.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

