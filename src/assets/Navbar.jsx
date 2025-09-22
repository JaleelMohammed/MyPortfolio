import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
    <nav className="fixed w-full top-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold ">
          <div className="bg-[#dfdfdf]  text-blue-600 font-extraboldbold  rounded-full h-13 w-13 md:h-15 md:w-15 flex items-center justify-center border-1">
            JM
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="hover:text-[#384ef8] transition font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#0a0a0f] border-t border-gray-800 flex flex-col items-center gap-6 py-6"
        >
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-[#38BDF8] transition text-lg font-medium"
                onClick={() => setOpen(false)} // close menu on click
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
     
    </>
  );
}
