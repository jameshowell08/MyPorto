import { RiReactjsLine } from "react-icons/ri"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiPython } from "react-icons/si"
import { SiMysql } from "react-icons/si"
import { RiJavascriptFill } from "react-icons/ri"
import { BiLogoGoLang } from "react-icons/bi"
import { FaJava } from "react-icons/fa"
import { TbBrandCpp } from "react-icons/tb"
import { TbBrandCSharp } from "react-icons/tb"
import { SiDotnet } from "react-icons/si"
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"

import { motion } from "framer-motion"

const iconVariants = (duration) => ({
  intial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
})

const Technologies = () => {
  const cardClass =
    "rounded-2xl border-2 border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 p-4 transition-all duration-300 hover:border-purple-500 dark:hover:border-purple-400 shadow-sm"

  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800 pb-24 transition-colors duration-300">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        className="my-20 text-center text-4xl text-neutral-900 dark:text-neutral-100 font-semibold"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className={cardClass}
        >
          <RiReactjsLine className="text-7xl text-cyan-500 dark:text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className={cardClass}
        >
          <RiTailwindCssFill className="text-7xl text-sky-500 dark:text-sky-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className={cardClass}
        >
          <SiPython className="text-7xl text-blue-600 dark:text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className={cardClass}
        >
          <SiMysql className="text-7xl text-blue-700 dark:text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className={cardClass}
        >
          <FaJava className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className={cardClass}
        >
          <BiLogoGoLang className="text-7xl text-cyan-600 dark:text-cyan-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className={cardClass}
        >
          <TbBrandCpp className="text-7xl text-blue-800 dark:text-blue-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className={cardClass}
        >
          <TbBrandCSharp className="text-7xl text-purple-600 dark:text-purple-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className={cardClass}
        >
          <SiDotnet className="text-7xl text-purple-700 dark:text-lime-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className={cardClass}
        >
          <FaHtml5 className="text-7xl text-orange-600 dark:text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className={cardClass}
        >
          <RiJavascriptFill className="text-7xl text-amber-500 dark:text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className={cardClass}
        >
          <FaCss3Alt className="text-7xl text-blue-600 dark:text-blue-400" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
