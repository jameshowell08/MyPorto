import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Judul Section dengan Animasi */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold tracking-tight text-purple-400"
      >
        Featured Projects
      </motion.h2>

      <div className="flex flex-col gap-20 px-4">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="group flex flex-wrap lg:justify-center items-start gap-12"
          >
            {/* Bagian Gambar: Menjamin Ukuran Seragam (Uniform Size) */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/3"
            >
              {/* Container dengan Rasio Aspek 16:9 Tetap */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-800 shadow-2xl ring-1 ring-neutral-700">
                <img
                  src={project.image}
                  alt={project.title}
                  // object-cover memastikan gambar mengisi bingkai tanpa terlihat gepeng
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                {/* Efek Overlay Gelap untuk estetika modern */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent"></div>
              </div>
            </motion.div>

            {/* Bagian Deskripsi Proyek */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-xl lg:w-2/3 flex flex-col"
            >
              <h5 className="mb-3 text-2xl font-bold text-black group-hover:text-purple-400 transition-colors">
                {project.title}
              </h5>

              <p className="mb-6 text-neutral-400 leading-relaxed text-justify lg:text-left">
                {project.description}
              </p>

              {/* Badge Teknologi dengan Desain Pill */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full bg-neutral-900 border border-neutral-800 px-3 py-1 text-xs font-medium text-purple-300 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Tombol Aksi (Preview & Code) */}
              <div className="flex gap-4 mt-auto">
                {project.preview && (
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-purple-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  >
                    Live Demo
                  </a>
                )}
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-neutral-700 bg-neutral-950 px-6 py-2 text-sm font-semibold text-neutral-300 transition-all hover:bg-neutral-800 hover:text-white"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
