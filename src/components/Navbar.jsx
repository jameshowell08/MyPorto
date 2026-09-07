import { useState } from "react"
import logo from "../assets/JHLogo.svg"
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

const Navbar = ({ activeTab, setActiveTab, theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleTabClick = (id) => {
    setActiveTab(id)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-4 z-50 mb-10 w-full">
      <nav className="mx-auto flex items-center justify-between px-4 py-2.5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl shadow-sm transition-all duration-300">
        {/* Brand / Logo */}
        <button
          onClick={() => handleTabClick("home")}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800 flex items-center justify-center shadow-sm group-hover:border-purple-500 transition-colors">
            <img src={logo} alt="James Howell Logo" className="w-6 h-6 object-contain" />
          </div>
          <span className="text-sm sm:text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 hidden sm:inline-block">
            James Howell
          </span>
        </button>

        {/* Desktop Navigation Tabs */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-neutral-100/80 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-700/40">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`relative px-4 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none ${
                  isActive
                    ? "text-neutral-900 dark:text-neutral-50"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-lg bg-white dark:bg-neutral-700/80 shadow-sm border border-neutral-200/60 dark:border-neutral-600/50"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            )
          })}
        </div>

        {/* Right side controls: Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-200 shadow-sm transition-all hover:border-purple-400 dark:hover:border-purple-400 hover:scale-105 focus:outline-none"
          >
            {theme === "dark" ? (
              <FiSun className="text-lg text-amber-400 transition-transform duration-300" />
            ) : (
              <FiMoon className="text-lg text-purple-600 transition-transform duration-300" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-200 focus:outline-none"
          >
            {mobileMenuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 p-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl shadow-xl space-y-1"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold"
                      : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
