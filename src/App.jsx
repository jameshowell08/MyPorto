import { useState, useEffect } from "react"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Technologies from "./components/Technologies"

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme) return savedTheme
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    return "dark"
  })

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

  return (
    <div className="overflow-x-hidden text-neutral-800 dark:text-neutral-100 antialiased selection:bg-cyan-300 selection:text-cyan-900 dark:selection:bg-purple-900 dark:selection:text-purple-100 transition-colors duration-300 min-h-screen">
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* Light Mode Grid & Glow */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-neutral-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px] transition-colors duration-300">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 dark:bg-purple-600/30 opacity-20 dark:opacity-40 blur-[100px] transition-all duration-300"></div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <Technologies />
        <Project />
        <Contact />
      </div>
    </div>
  )
}

export default App
