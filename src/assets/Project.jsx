import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and TailwindCSS.",
    image: "https://via.placeholder.com/600x400", // Replace with your image
    link: "#",
  },
  {
    title: "E-commerce App",
    description: "Full-stack e-commerce platform with cart and payment features.",
    image: "https://via.placeholder.com/600x400",
    link: "#",
  },
  {
    title: "Chat Application",
    description: "Real-time chat app using WebSocket and Node.js backend.",
    image: "https://via.placeholder.com/600x400",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-[#0a0a0f]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Some of my works that showcase my skills and passion for modern web
          development.
        </p>

        {/* ✅ Responsive Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-[#1e2533] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#38BDF8]/30 transition"
            >
              {/* Image */}
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#38BDF8] transition">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{proj.description}</p>
                <a
                  href={proj.link}
                  className="text-[#38BDF8] font-medium hover:underline"
                >
                  View Details →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
