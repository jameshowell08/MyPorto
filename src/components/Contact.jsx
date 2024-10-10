import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { BsLinkedin } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact me
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          href="#"
          className="border-b"
        >
          {CONTACT.email}
        </motion.a>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          href="https://github.com/jameshowell08"
          className="border-b"
        >
          <BsGithub className="mt-4 text-3xl" />
        </motion.a>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          href="www.linkedin.com/in/jameshowell08"
          className="border-b"
        >
          <BsLinkedin className="mt-4 text-3xl" />
        </motion.a>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          href="https://www.instagram.com/jameshowellz_/"
          className="border-b"
        >
          <BsInstagram className="mt-4 text-3xl" />
        </motion.a>
      </div>
    </div>
  )
}

export default Contact
