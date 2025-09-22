import { motion } from "framer-motion";
import foodDeliveryImg from '../assets/food-delivery.png';
import jobPortalImg from '../assets/Job-port.png';
import redStoreImg from '../assets/red-store.png';
import rjTechImg from '../assets/rj-tech.png';

const projects = [
  {
    title: "Job-Portal Fullsatck WebApp",
    description: "A modern Job-Portal website built with React and TailwindCSS.",
    image: jobPortalImg ,// Replace with your image
    link: "https://job-port-full-stack.vercel.app/",
  },
  {
    title: "Food Delivery WebApp",
    description: "Full-stack e-commerce platform with cart and payment features.",
    image: foodDeliveryImg,
    link: "https://delivery-app-seven-weld.vercel.app/",
  },
  {
    title: "RJ Technology Website",
    description: "A modern web application showcasing technology solutions",
    image: rjTechImg,
    link: "https://rjtechnology-gray.vercel.app/",
  },
  {
    title: "RedStore E-commerce App",
    description: "RedStore is a full‑front‑end e‑commerce style website. It showcases products",
    image: redStoreImg,
    link: "https://jaleelmohammed.github.io/RedStore/",
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
              className="group bg-[#1e2533] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#38BDF8]/10 transition"
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
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#383ef8] transition">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{proj.description}</p>
                <a
                  href={proj.link}
                  className="text-blue-600 font-medium hover:underline"
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
