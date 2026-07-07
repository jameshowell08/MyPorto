import logo from "../assets/JHLogo.svg"
import GraphemeSplitter from "grapheme-splitter"
import { TypeAnimation } from "react-type-animation"

const Navbar = () => {
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
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-800"
          repeat={Infinity}
        />
      </div>
      <div className="flex items-center">
        <a
          href={`${import.meta.env.BASE_URL}CV_James_Howell.pdf`}
          download="CV_James_Howell.pdf"
          className="rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:bg-neutral-50 hover:text-purple-600 hover:border-purple-300"
        >
          Download CV
        </a>
      </div>
    </nav>
  )
}

export default Navbar

