import logo from "../assets/JHLogo.svg"
import GraphemeSplitter from "grapheme-splitter"
import { TypeAnimation } from "react-type-animation"

const Navbar = () => {
  const splitter = new GraphemeSplitter()

  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center">
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
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
      </div>
    </nav>
  )
}

export default Navbar
