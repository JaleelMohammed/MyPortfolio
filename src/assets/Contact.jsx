import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#1e2533] to-[#141821]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Get In Touch
        </h2>
        <p className="text-gray-400 mb-12">
          Always open to discussing new opportunities and collaborations.
        </p>

        {/* ✅ Contact Form */}
        <form className="grid gap-4 max-w-2xl mx-auto text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-[#0a0a0f] border border-gray-700 focus:outline-none focus:border-[#38BDF8] transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-[#0a0a0f] border border-gray-700 focus:outline-none focus:border-[#38BDF8] transition"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-3 rounded-lg bg-[#0a0a0f] border border-gray-700 focus:outline-none focus:border-[#38BDF8] transition"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-black font-semibold rounded-lg hover:bg-blue-700 transition w-full mx-auto"
          >
            Send Message
          </button>
        </form>

        {/* ✅ Social Links */}
        <div className="flex justify-center gap-6 mt-10 text-3xl">
          <a
            href="https://github.com/JaleelMohammed"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#38BDF8] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jaleel-mohammed"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition "
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
