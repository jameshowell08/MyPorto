import { motion } from "framer-motion"

/**
 * Natural Hanging Pendant Lamp with Interactive Pull Cord.
 * Seamlessly controls Night Mode and Light Mode with zero layout shift.
 * Features realistic incandescent warm light physics and natural optical diffusion.
 */
const Lamp = ({ theme = "dark", toggleTheme }) => {
  const isNight = theme === "dark"

  return (
    <div className="relative flex flex-col items-center select-none w-48 sm:w-56 h-[270px]">
      {/* Natural Ambient Light Falloff (Physics-based soft radial diffusion) */}
      <div
        className={`absolute top-24 left-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-700 ease-out flex flex-col items-center z-0 ${
          isNight ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Soft Conic Ambient Light Spread */}
        <div
          className="w-72 sm:w-80 h-64 bg-gradient-to-b from-amber-300/30 via-amber-400/10 to-transparent blur-xl"
          style={{
            clipPath: "polygon(44% 0%, 56% 0%, 100% 100%, 0% 100%)",
          }}
        />
        {/* Soft Ambient Ground Pool */}
        <div className="w-64 sm:w-72 h-16 rounded-full bg-amber-400/20 blur-2xl -mt-12" />
      </div>

      {/* Ceiling Cable Wire (Hangs naturally from top) */}
      <div className="w-[1.5px] h-12 sm:h-14 bg-gradient-to-b from-neutral-400 to-neutral-600 dark:from-neutral-600 dark:to-neutral-400 z-10" />

      {/* Spun-Metal Bell Lamp Shade */}
      <div className="relative z-20 flex flex-col items-center">
        {/* Socket Top Cap */}
        <div className="w-5 h-2 rounded-t bg-neutral-600 dark:bg-neutral-400" />

        {/* Natural Curved Bell Shade */}
        <div
          className={`w-28 sm:w-32 h-14 sm:h-16 rounded-t-[40px] border-b-2 shadow-lg relative overflow-hidden flex items-end justify-center transition-colors duration-500 ${
            isNight
              ? "bg-gradient-to-b from-neutral-800 to-neutral-900 border-amber-400/40 shadow-neutral-950/80"
              : "bg-gradient-to-b from-neutral-100 to-neutral-200 border-neutral-300 shadow-neutral-300/60"
          }`}
        >
          {/* Warm Inner Rim Reflection when lit */}
          <div
            className={`absolute bottom-0 w-full h-1.5 transition-all duration-500 ${
              isNight
                ? "bg-amber-400/80 shadow-[0_0_12px_rgba(251,191,36,0.9)]"
                : "bg-neutral-300/40"
            }`}
          />
        </div>

        {/* Natural Glass Bulb */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Night/Light mode"
          className="relative -mt-2 z-30 cursor-pointer focus:outline-none group p-1"
          title={isNight ? "Click to switch to Light Mode" : "Click to switch to Night Mode"}
        >
          <div
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border transition-all duration-500 flex items-center justify-center ${
              isNight
                ? "bg-amber-300 border-amber-200 shadow-[0_0_35px_12px_rgba(251,191,36,0.85)] text-amber-950"
                : "bg-neutral-200/90 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 shadow-none text-neutral-400"
            }`}
          >
            {/* Filament Core */}
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                isNight
                  ? "bg-white shadow-[0_0_10px_#fff]"
                  : "bg-neutral-300 dark:bg-neutral-500"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Interactive Pull Cord Chain (Natural pull action) */}
      <motion.button
        onClick={toggleTheme}
        whileTap={{ y: 14 }}
        transition={{ type: "spring", stiffness: 600, damping: 15 }}
        className="relative z-30 cursor-pointer focus:outline-none flex flex-col items-center -mt-1 group"
        title="Pull cord to toggle light"
        aria-label="Pull cord to toggle theme"
      >
        {/* Slender Cord String */}
        <div className="w-[1px] h-16 sm:h-20 bg-neutral-400 dark:bg-neutral-500 group-hover:bg-amber-400 transition-colors" />

        {/* Solid Brass Pull Knob Bead */}
        <div
          className={`w-3 h-4 rounded-b-full border shadow-sm transition-all duration-300 group-hover:scale-115 flex items-center justify-center ${
            isNight
              ? "bg-amber-500 border-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)]"
              : "bg-neutral-400 border-neutral-300 group-hover:bg-amber-500"
          }`}
        >
          <div className="w-1 h-1 rounded-full bg-amber-200/80" />
        </div>
      </motion.button>
    </div>
  )
}

export default Lamp
