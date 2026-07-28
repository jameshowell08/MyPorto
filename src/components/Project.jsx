import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Project = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800 pb-20 transition-colors duration-300">
      {/* Judul Section dengan Animasi */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold tracking-tight text-purple-600 dark:text-purple-400"
      >
        Featured Projects
      </motion.h2>

      <div className="flex flex-col gap-20 px-4">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="group grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start"
          >
            {/* Bagian Gambar: Menjamin Ukuran Seragam (Uniform Size) */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              {/* Container dengan Rasio Aspek 16:9 Tetap */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-xl ring-1 ring-neutral-200 dark:ring-neutral-700/60">
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
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full lg:col-span-2 flex flex-col"
            >
              <h5 className="mb-3 text-2xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {project.title}
              </h5>

              <p className="mb-6 text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify lg:text-left">
                {project.description}
              </p>

              {/* Badge Teknologi dengan Desain Pill */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full bg-purple-50 dark:bg-neutral-900 border border-purple-200 dark:border-neutral-800 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Tombol Aksi (Preview & Code) */}
              <div className="flex flex-wrap gap-4 mt-auto">
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
                    className="rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-6 py-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300 shadow-sm transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white"
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

