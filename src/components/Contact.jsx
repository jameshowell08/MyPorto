import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { BsLinkedin } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"

const Contact = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800 pb-20 transition-colors duration-300">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="my-10 text-center text-4xl font-semibold text-neutral-900 dark:text-neutral-100"
      >
        Contact me
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-4 text-neutral-600 dark:text-neutral-400"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          href={`mailto:${CONTACT.email}`}
          className="border-b border-neutral-400 dark:border-neutral-600 text-neutral-800 dark:text-neutral-200 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-600 dark:hover:border-purple-400 transition-colors"
        >
          {CONTACT.email}
        </motion.a>
      </div>
      <div className="flex items-center justify-center gap-6 mt-8">
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          href="https://github.com/jameshowell08"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          <BsGithub className="text-3xl" />
        </motion.a>
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          href="https://www.linkedin.com/in/jameshowell08/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          <BsLinkedin className="text-3xl" />
        </motion.a>
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="https://www.instagram.com/jameshowellz_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          <BsInstagram className="text-3xl" />
        </motion.a>
      </div>
    </div>
  )
}

export default Contact

