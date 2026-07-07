import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { BsLinkedin } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="my-10 text-center text-4xl"
      >
        Contact me
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          href={`mailto:${CONTACT.email}`}
          className="border-b border-neutral-600 hover:text-purple-600 hover:border-purple-600 transition-colors"
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
          className="hover:text-purple-600 transition-colors"
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
          className="hover:text-purple-600 transition-colors"
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
          className="hover:text-purple-600 transition-colors"
        >
          <BsInstagram className="text-3xl" />
        </motion.a>
      </div>
    </div>
  )
}

export default Contact

