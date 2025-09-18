import { FaLinkedin, FaGithub, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="py-14 px-6 md:px-20 bg-[#0d111b] text-gray-200 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand + blurb */}
        <div>
          <div className="text-2xl font-extrabold text-sky-400">Portfolio</div>
          <p className="mt-3 text-gray-300">
            Passionate Full Stack Developer creating innovative digital solutions that make a difference.
            Let’s build something amazing together!
          </p>
          <div className="flex gap-3 mt-4 text-lg">
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="hover:text-sky-400"><FaLinkedin /></a>
            <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="hover:text-sky-400"><FaGithub /></a>
            <a href="#" className="hover:text-sky-400"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-bold mb-3">Contact Info</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2"><MdEmail /> john.doe@email.com</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> +1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> San Francisco, CA</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        ©{new Date().getFullYear()} Your Name. All rights reserved. Made with <span className="text-pink-400">❤</span> and lots of <span className="text-amber-300">☕</span>.
      </div>
    </footer>
  );
}
