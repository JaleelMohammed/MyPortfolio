// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaJs,
//   FaNodeJs,
//   FaDatabase,
//   FaHtml5,
//   FaCss3Alt,
//   FaGitAlt,
//   FaGithub,
// } from "react-icons/fa";
// import {
//   SiTypescript,
//   SiTailwindcss,
//   SiMongodb,
//   SiJirasoftware,
//   SiPostman,
// } from "react-icons/si";

// // ✅ Reusable Section wrapper
// const Section = ({ id, children, bg = "bg-gray-50" }) => (
//   <section
//     id={id}
//     className={`scroll-mt-24 py-20 md:py-28 w-full flex justify-center ${bg}`}
//   >
//     <div className="max-w-6xl px-6">{children}</div>
//   </section>
// );

// // ✅ Modern Skill Card
// const SkillCard = ({ icon: Icon, name, level, gradient }) => (
//   <motion.div
//     className="p-8 rounded-2xl shadow-xl bg-white/70 backdrop-blur-md border border-white/40 
//                hover:scale-105 hover:shadow-2xl transition-transform duration-300"
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.6 }}
//   >
//     {/* Top section with icon + name */}
//     <div className="flex items-center gap-3 mb-4">
//       <Icon className="text-3xl text-gray-700" />
//       <h3 className="text-xl font-semibold">{name}</h3>
//     </div>

//     {/* Progress Bar */}
//     <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
//       <motion.div
//         className={`h-4 rounded-full ${gradient}`}
//         initial={{ width: 0 }}
//         whileInView={{ width: `${level}%` }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.2, ease: "easeOut" }}
//       />
//     </div>

//     {/* Percentage */}
//     <p className="text-right mt-2 font-medium text-gray-600">{level}%</p>
//   </motion.div>
// );

// export default function Portfolio() {
//   // ✅ Typing Effect Words
//   const words = ["Fullstack Developer", "Frontend Developer", "React Enthusiast"];
//   const [index, setIndex] = useState(0);
//   const [subIndex, setSubIndex] = useState(0);
//   const [deleting, setDeleting] = useState(false);

//   // ✅ Typing effect logic
//   useEffect(() => {
//     if (subIndex === words[index].length + 1 && !deleting) {
//       setTimeout(() => setDeleting(true), 1000);
//       return;
//     }
//     if (subIndex === 0 && deleting) {
//       setDeleting(false);
//       setIndex((prev) => (prev + 1) % words.length);
//       return;
//     }
//     const timeout = setTimeout(() => {
//       setSubIndex((prev) => prev + (deleting ? -1 : 1));
//     }, deleting ? 50 : 150);
//     return () => clearTimeout(timeout);
//   }, [subIndex, index, deleting]);

//   return (
//     <main className="font-sans min-h-screen bg-gray-100">
//       {/* ✅ Hero Section */}
//       <Section id="home" bg="bg-gradient-to-br from-gray-900 to-black text-white">
//         <div className="text-center">
//           <h1 className="text-5xl font-bold mb-4">Hi, I’m John Doe</h1>
//           <h2 className="text-2xl text-blue-400 h-8">
//             {`${words[index].substring(0, subIndex)}`}
//             <span className="animate-pulse">|</span>
//           </h2>
//         </div>
//       </Section>

//       {/* ✅ About Section */}
//       <Section id="about" bg="bg-white">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <h2 className="text-4xl font-semibold mb-6">About Me</h2>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             I’m a passionate developer who loves building fullstack and frontend
//             applications using React, Tailwind, and modern web technologies.
//           </p>
//         </motion.div>
//       </Section>

//       {/* ✅ Skills Section */}
//       <Section id="skills" bg="bg-gray-50">
//         <h2 className="text-4xl font-semibold mb-14 text-center">My Skills</h2>
//         <div className="grid md:grid-cols-3 gap-10">
//           <SkillCard
//             icon={FaHtml5}
//             name="HTML5"
//             level={95}
//             gradient="bg-gradient-to-r from-orange-400 to-red-500"
//           />
//           <SkillCard
//             icon={FaCss3Alt}
//             name="CSS3"
//             level={90}
//             gradient="bg-gradient-to-r from-blue-400 to-indigo-500"
//           />
//           <SkillCard
//             icon={FaJs}
//             name="JavaScript"
//             level={85}
//             gradient="bg-gradient-to-r from-yellow-400 to-orange-500"
//           />
//           <SkillCard
//             icon={SiTypescript}
//             name="TypeScript"
//             level={70}
//             gradient="bg-gradient-to-r from-blue-400 to-indigo-500"
//           />
//           <SkillCard
//             icon={FaReact}
//             name="React.js"
//             level={90}
//             gradient="bg-gradient-to-r from-cyan-400 to-blue-500"
//           />
//           <SkillCard
//             icon={SiTailwindcss}
//             name="TailwindCSS"
//             level={80}
//             gradient="bg-gradient-to-r from-teal-400 to-cyan-500"
//           />
//           <SkillCard
//             icon={FaNodeJs}
//             name="Node.js"
//             level={75}
//             gradient="bg-gradient-to-r from-green-400 to-emerald-500"
//           />
//           <SkillCard
//             icon={SiMongodb}
//             name="MongoDB"
//             level={65}
//             gradient="bg-gradient-to-r from-green-500 to-lime-500"
//           />
//           <SkillCard
//             icon={FaDatabase}
//             name="SQL"
//             level={60}
//             gradient="bg-gradient-to-r from-pink-400 to-red-500"
//           />
//           <SkillCard
//             icon={FaGitAlt}
//             name="Git"
//             level={85}
//             gradient="bg-gradient-to-r from-orange-500 to-red-600"
//           />
//           <SkillCard
//             icon={FaGithub}
//             name="GitHub"
//             level={85}
//             gradient="bg-gradient-to-r from-gray-600 to-gray-800"
//           />
//           <SkillCard
//             icon={SiPostman}
//             name="Postman"
//             level={70}
//             gradient="bg-gradient-to-r from-orange-400 to-yellow-500"
//           />
//           <SkillCard
//             icon={SiJirasoftware}
//             name="Jira"
//             level={65}
//             gradient="bg-gradient-to-r from-blue-400 to-indigo-600"
//           />
//         </div>
//       </Section>
//     </main>
//   );
// }


import { useState, useEffect } from "react";
import AOS from "aos";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SkillsSection from "./Skills";
import ProjectsSection from "./Project";
import Footer from "./Footer";
import profilePic from "../assets/profile.jpg";
import resumeFile from "../assets/resume.pdf";
import Contact from "./Contact";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Project";

const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`px-6 py-2 rounded-lg font-medium transition duration-300 ${className}`}
  >
    {children}
  </button>
);

export default function Home() {
  // AOS init (once)
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
    });
  }, []);

  // Typing effect
  const words = [
    "FullStack Developer",
    "BackEnd Developer",
    "Java Developer",
    "Spring Boot Specialist",
    "FrontEnd Developer",
    "React Enthusiast",
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 900);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 40 : 120);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <main className="bg-[#0a0a0f] text-white">
      {/* HERO */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-20 py-16">
       <div className="relative w-44 h-44 md:w-76 md:h-76">
  <div className="absolute inset-0 rounded-full border-3 border-[#221183] animate-spin-slow"></div>
  <img
    data-aos="zoom-in"
    src={profilePic}
    alt="Profile"
    className="w-full h-full rounded-full border-2 border-blue-600 shadow-2xl object-cover relative z-10"
  />
</div>







        <div data-aos="fade-up" data-aos-delay="150" className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600">Jaleel KM</span>
          </h1>
          <div>
           
          <h2 className="text-xl md:text-3xl text-white h-8 md:h-10 mb-2  font-semibold">A passionate
            <span className="animate-puls text-xl md:text-3xl px-2 text-blue-600 h-8 md:h-10 mb-6 font-bold">
                {words[index].substring(0, subIndex)}
               |</span>
          </h2>
          </div>
          <p className="text-gray-300 max-w-lg mb-6">
            Dedicated to building beautiful, responsive, and highly interactive web applications. I love bringing ideas to life through clean and efficient code.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <a href="#skills">
              <Button className="bg-blue-600 text-black hover:bg-blue-700">View Skills</Button>
            </a>
            <a href={resumeFile} download>
              <Button className="bg-[#1e2533] text-white border border-blue-600 hover:bg-[#141821]">
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social on Home (as requested) */}
          <div className="flex justify-center md:justify-start gap-6 text-3xl">
            <a
              href="https://github.com/JaleelMohammed"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38BDF8]"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jaleel-mohammed"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38BDF8]"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 md:px-20 bg-[#0a0a0f]">
        <div data-aos="fade-up" className=" max-w-3xl p-10 rounded-2xl border-1 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a dedicated Fullstack Developer experienced in building scalable web applications with Java, Spring Boot,
            REST APIs, MySQL, React and Tailwind CSS. I love crafting clean UIs and robust backends that feel
            fast and delightful to use.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      {/* <section id="education" className="py-20 px-6 md:px-20">
        <div data-aos="fade-up" className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Education</h2>
          <div className="grid gap-6">
            <div data-aos="fade-right" className="bg-[#1e2533] p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-xl font-semibold text-[#38BDF8]">B.Tech in Computer Science</h3>
              <p className="text-gray-300">XYZ University — 2019–2023</p>
            </div>
            <div data-aos="fade-left" className="bg-[#1e2533] p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-xl font-semibold text-[#38BDF8]">Higher Secondary</h3>
              <p className="text-gray-300">ABC School — 2017–2019</p>
            </div>
          </div>
        </div>
      </section> */}
       {/* Education Section */}
      <Education/>

      {/* SKILLS  */}
      <Skills/>

      {/* PROJECTS  */}
      <Projects/>

      {/* CONTACT  */}
      <Contact/>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
