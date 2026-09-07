import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CONTACT } from "../../constants"
import { FiMail, FiMapPin, FiSend, FiCopy, FiCheck, FiGithub, FiLinkedin, FiInstagram, FiAlertCircle } from "react-icons/fi"

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

const ContactView = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [copied, setCopied] = useState(false)
  const [isDropping, setIsDropping] = useState(false)
  const [statusMessage, setStatusMessage] = useState(null)

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setIsDropping(true)
    setStatusMessage(null)

    const formDataObj = new FormData()
    formDataObj.append("name", formData.name)
    formDataObj.append("email", formData.email)
    formDataObj.append("message", formData.message)
    formDataObj.append("_subject", `New Portfolio Message from ${formData.name}`)
    formDataObj.append("_template", "table")
    formDataObj.append("_captcha", "false")

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formDataObj,
      })

      const data = await response.json()

      if (response.ok && (data.success === "true" || data.success === true)) {
        setTimeout(() => {
          setIsDropping(false)
          setStatusMessage({
            type: "success",
            text: `Message delivered! Your email was successfully sent to ${CONTACT.email}.`,
          })
          setFormData({ name: "", email: "", message: "" })
        }, 1100)
      } else if (data.message && data.message.toLowerCase().includes("activation")) {
        // FormSubmit requires the user to click the activation email once
        setTimeout(() => {
          setIsDropping(false)
          setStatusMessage({
            type: "activation",
            text: `Activation email sent! FormSubmit sent an 'Activate Form' link to ${CONTACT.email}. Please open that email and click the button once, and your portfolio will be fully activated for direct delivery!`,
          })
        }, 1000)
      } else {
        throw new Error(data.message || "Failed to submit form")
      }
    } catch (err) {
      console.error("Email submission error:", err)
      setTimeout(() => {
        setIsDropping(false)
        setStatusMessage({
          type: "error",
          text: `Could not send via automated server. You can email directly at ${CONTACT.email}.`,
        })
      }, 1000)
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}
      className="space-y-16 pb-16"
    >
      {/* Header */}
      <section className="pt-4 sm:pt-8 text-center max-w-2xl mx-auto space-y-3">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-semibold">
          Get in Touch
        </motion.div>
        <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Let&apos;s build something remarkable together.
        </motion.h1>
        <motion.p variants={itemVariants} className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
          Have an opportunity, questions about my projects, or want to discuss AI systems? Drop a letter in the postbox below.
        </motion.p>
      </section>

      {/* Main Interactive Contact Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Animated Postbox & Dropped Mail Stack */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex flex-col items-center p-8 rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/40 shadow-sm relative overflow-hidden"
        >
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-semibold tracking-wider text-purple-600 dark:text-purple-400">
              Interactive Postbox
            </span>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Watch your letter drop into the box & stay delivered
            </p>
          </div>

          {/* Minimalist Illustrated Postbox Container */}
          <div className="relative w-48 h-56 flex flex-col items-center justify-end my-2">
            {/* Ambient Postbox Glow */}
            <div className="absolute top-6 w-32 h-32 rounded-full bg-purple-500/20 blur-2xl -z-10"></div>

            {/* In-Flight Dropping Envelope Animation */}
            <AnimatePresence>
              {isDropping && (
                <motion.div
                  initial={{ y: -80, opacity: 0, scale: 0.6, rotate: -8 }}
                  animate={{
                    y: [ -80, -20, 30 ],
                    opacity: [ 0, 1, 0 ],
                    scale: [ 0.6, 1, 0.4 ],
                    rotate: [ -8, 4, 0 ],
                  }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                  className="absolute top-0 z-30 w-20 h-14 bg-purple-50 border-2 border-purple-500 rounded-lg shadow-xl flex items-center justify-center"
                >
                  <div className="w-16 h-10 border border-purple-300 rounded flex items-center justify-center bg-white text-purple-600 text-xs font-mono font-bold">
                    MAIL
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Postbox SVG Graphic */}
            <div className="relative z-10 w-36 h-48 flex flex-col items-center">
              {/* Mailbox Dome / Top */}
              <div className="w-28 h-12 bg-purple-600 rounded-t-full shadow-inner flex items-center justify-center relative">
                <div className="w-16 h-1.5 bg-purple-800/40 rounded-full"></div>
                {/* Mailbox Flag */}
                <motion.div
                  animate={isDropping ? { rotate: [0, -35, 0] } : { rotate: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute -right-3 top-2 origin-bottom-left w-2.5 h-10 bg-neutral-400 dark:bg-neutral-600 rounded-t flex flex-col items-end"
                >
                  <div className="w-5 h-4 bg-red-500 rounded-sm"></div>
                </motion.div>
              </div>

              {/* Mailbox Main Body */}
              <div className="w-28 h-28 bg-purple-700 dark:bg-purple-800 rounded-b-xl p-3 flex flex-col items-center justify-between shadow-lg relative border-t border-purple-500/50">
                {/* Mail Slot */}
                <div className="w-20 h-3.5 bg-neutral-900 rounded-full border border-purple-400/40 shadow-inner flex items-center justify-center">
                  <div className="w-16 h-1 bg-neutral-950 rounded-full"></div>
                </div>

                {/* Metallic Postbox Emblem */}
                <div className="w-10 h-10 rounded-full border border-purple-400/40 bg-purple-600/60 flex items-center justify-center text-white/90 text-xs font-bold tracking-wider">
                  JH
                </div>

                {/* Keyhole / Latch */}
                <div className="w-3 h-3 rounded-full bg-neutral-900/60 border border-purple-400/30"></div>
              </div>

              {/* Post Pole */}
              <div className="w-5 h-8 bg-neutral-300 dark:bg-neutral-700 rounded-b shadow-sm"></div>
            </div>

            {/* Mailbox Pedestal Base */}
            <div className="w-32 h-2.5 bg-neutral-200 dark:bg-neutral-800 rounded-full"></div>
          </div>
        </motion.div>

        {/* Right: Modern Minimalist Contact Form */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/40 p-6 sm:p-8 shadow-sm space-y-6"
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Drop a Message
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Fill in your thoughts and watch it animate into the postbox above.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sarah Connor"
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all placeholder:text-neutral-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. sarah@example.com"
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all placeholder:text-neutral-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                Your Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi James, I'd like to talk about an exciting project..."
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all placeholder:text-neutral-400 resize-none"
              />
            </div>

            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3.5 rounded-xl text-xs font-medium flex items-start gap-2.5 ${
                  statusMessage.type === "success"
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                    : statusMessage.type === "activation"
                    ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                    : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                }`}
              >
                {statusMessage.type === "success" ? (
                  <FiCheck className="text-base flex-shrink-0 mt-0.5" />
                ) : statusMessage.type === "activation" ? (
                  <FiMail className="text-base flex-shrink-0 mt-0.5" />
                ) : (
                  <FiAlertCircle className="text-base flex-shrink-0 mt-0.5" />
                )}
                <span className="leading-relaxed">{statusMessage.text}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isDropping}
              className="w-full py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-[0.99] text-white text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] disabled:opacity-50"
            >
              <FiSend className="text-base" />
              <span>{isDropping ? "Sending to Inbox..." : "Drop Mail into Postbox"}</span>
            </button>
          </form>

          {/* Quick Direct Contacts */}
          <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-800/60">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <FiMail className="text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <span className="text-xs text-neutral-700 dark:text-neutral-300 truncate">
                  {CONTACT.email}
                </span>
              </div>
              <button
                onClick={copyEmail}
                title="Copy Email"
                className="p-1.5 text-neutral-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {copied ? <FiCheck className="text-emerald-500" /> : <FiCopy />}
              </button>
            </div>

            <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-800/60">
              <FiMapPin className="text-purple-600 dark:text-purple-400 flex-shrink-0" />
              <span className="text-xs text-neutral-700 dark:text-neutral-300">
                {CONTACT.location}
              </span>
            </div>
          </div>

          {/* Social Channels */}
          <div className="flex items-center justify-center gap-6 pt-2">
            <a
              href={CONTACT.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500 transition-all hover:scale-110"
            >
              <FiGithub className="text-lg" />
            </a>
            <a
              href={CONTACT.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500 transition-all hover:scale-110"
            >
              <FiLinkedin className="text-lg" />
            </a>
            <a
              href={CONTACT.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500 transition-all hover:scale-110"
            >
              <FiInstagram className="text-lg" />
            </a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default ContactView
