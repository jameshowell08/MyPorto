import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import HomeView from "./components/views/HomeView"
import AboutView from "./components/views/AboutView"
import ExperienceView from "./components/views/ExperienceView"
import ProjectsView from "./components/views/ProjectsView"
import ContactView from "./components/views/ContactView"
import { CONTACT } from "./constants"

const VALID_TABS = ["home", "about", "experience", "projects", "contact"]

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme) return savedTheme
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    return "dark"
  })

  // Hash-based routing / tab state
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "").toLowerCase()
      if (VALID_TABS.includes(hash)) {
        return hash
      }
    }
    return "home"
  })

  // Synchronize hash with activeTab
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase()
      if (VALID_TABS.includes(hash)) {
        setActiveTab(hash)
      }
    }
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const handleTabChange = (newTab) => {
    setActiveTab(newTab)
    window.location.hash = newTab
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  }

  const renderActiveView = () => {
    switch (activeTab) {
      case "home":
        return <HomeView key="home" onNavigate={handleTabChange} theme={theme} toggleTheme={toggleTheme} />
      case "about":
        return <AboutView key="about" />
      case "experience":
        return <ExperienceView key="experience" />
      case "projects":
        return <ProjectsView key="projects" />
      case "contact":
        return <ContactView key="contact" />
      default:
        return <HomeView key="home" onNavigate={handleTabChange} theme={theme} toggleTheme={toggleTheme} />
    }
  }

  return (
    <div className="overflow-x-hidden text-neutral-800 dark:text-neutral-100 antialiased selection:bg-purple-500/20 selection:text-purple-600 dark:selection:bg-purple-500/30 dark:selection:text-purple-300 transition-colors duration-300 min-h-screen flex flex-col justify-between">
      {/* Background Ambience & Clean Minimalist Grid */}
      <div className="fixed top-0 -z-10 h-full w-full pointer-events-none">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-neutral-950 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] transition-colors duration-300">
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute left-1/4 top-10 -z-10 h-[380px] w-[380px] rounded-full bg-purple-400/15 dark:bg-purple-600/15 blur-[120px] transition-all duration-300"></div>
          <div className="absolute right-1/4 top-1/3 -z-10 h-[320px] w-[320px] rounded-full bg-cyan-400/10 dark:bg-cyan-600/10 blur-[130px] transition-all duration-300"></div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 flex-grow">
        <Navbar
          activeTab={activeTab}
          setActiveTab={handleTabChange}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <main id="main-content">
          <AnimatePresence mode="wait">
            {renderActiveView()}
          </AnimatePresence>
        </main>
      </div>

      {/* Minimalist Footer */}
      <footer className="w-full border-t border-neutral-200/80 dark:border-neutral-800/80 py-8 px-4 mt-12 bg-white/40 dark:bg-neutral-950/40 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} James Howell. Designed with precision & minimalism.</p>
          <div className="flex items-center gap-6">
            <a
              href={CONTACT.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={CONTACT.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
