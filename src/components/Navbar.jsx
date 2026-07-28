import logo from "../assets/JHLogo.svg"
import GraphemeSplitter from "grapheme-splitter"
import { TypeAnimation } from "react-type-animation"
import { FiSun, FiMoon } from "react-icons/fi"

const Navbar = ({ theme, toggleTheme }) => {
  const splitter = new GraphemeSplitter()

  return (
    <nav className="mb-10 flex flex-col sm:flex-row items-center justify-between py-6 gap-4 sm:gap-0">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center">
        <TypeAnimation
          splitter={(str) => splitter.splitGraphemes(str)}
          sequence={[
            "Hello 🇬🇧",
            2000,
            "Ciao 🇮🇹",
            2000,
            "你好 🇨🇳",
            2000,
            "Здравейте 🇧🇬",
            2000,
            "Hola 🇪🇸",
            2000,
            "Bonjour 🇫🇷",
            2000,
            "नमस्ते 🇮🇳",
            2000,
          ]}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-100"
          repeat={Infinity}
        />
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-200 shadow-sm transition-all duration-300 hover:scale-110 hover:border-purple-400 dark:hover:border-purple-400 focus:outline-none"
        >
          {theme === "dark" ? (
            <FiSun className="text-xl text-yellow-400 transition-transform duration-300" />
          ) : (
            <FiMoon className="text-xl text-purple-600 transition-transform duration-300" />
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navbar

