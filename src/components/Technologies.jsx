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
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-500 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-500 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-500 p-4"
        >
          <SiPython className="text-7xl text-blue-900" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-500 p-4"
        >
          <SiMysql className="text-7xl text-blue-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-500 p-4"
        >
          <FaJava className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-500 p-4"
        >
          <BiLogoGoLang className="text-7xl text-cyan-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-500 p-4"
        >
          <TbBrandCpp className="text-7xl text-black" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-500 p-4"
        >
          <TbBrandCSharp className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-500 p-4"
        >
          <SiDotnet className="text-7xl text-lime-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-500 p-4"
        >
          <FaHtml5 className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-500 p-4"
        >
          <RiJavascriptFill className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-500 p-4"
        >
          <FaCss3Alt className="text-7xl text-blue-800" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
