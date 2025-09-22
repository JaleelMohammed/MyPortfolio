import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiJirasoftware,
  SiPostman,
  SiExpress,
  SiSpringboot,
  SiHibernate,
  SiNpm,
  SiVite,
  SiBootstrap,
  SiGooglechrome,
} from "react-icons/si";

const skills = {
  Frontend: [
    { name: "HTML5", level: 95, color: "#E34F26", icon: FaHtml5 },
    { name: "CSS3", level: 90, color: "#1572B6", icon: FaCss3Alt },
    { name: "JavaScript", level: 90, color: "#F7DF1E", icon: FaJs },
    { name: "TypeScript", level: 80, color: "#3178C6", icon: SiTypescript },
    { name: "React", level: 92, color: "#61DAFB", icon: FaReact },
    { name: "Tailwind CSS", level: 90, color: "#38BDF8", icon: SiTailwindcss },
    { name: "Bootstrap", level: 90, color: "#7952B3", icon: SiBootstrap },
  ],
  Backend: [
    { name: "Java", level: 90, color: "#CB3837", icon: FaJava },
    { name: "Spring Boot", level: 85, color: "#6DB33F", icon: SiSpringboot },
    { name: "Hibernate", level: 80, color: "#59666C", icon: SiHibernate },
    { name: "RESTful APIs", level: 85, color: "#FF5733", icon: SiExpress },
    { name: "MySQL", level: 82, color: "#4479A1", icon: FaDatabase },
    { name: "MongoDB", level: 78, color: "#47A248", icon: SiMongodb },
    { name: "Node.js", level: 75, color: "#339933", icon: FaNodeJs },
  ],
  Tools: [
    { name: "Git", level: 90, color: "#F05032", icon: FaGitAlt },
    { name: "GitHub", level: 88, color: "#59666c", icon: FaGithub },
    { name: "Postman", level: 80, color: "#FF6C37", icon: SiPostman },
    { name: "Jira", level: 75, color: "#0052CC", icon: SiJirasoftware },
    { name: "npm", level: 85, color: "#CB3837", icon: SiNpm },
    { name: "Vite", level: 80, color: "#646CFF", icon: SiVite },
    { name: "Chrome DevTools", level: 90, color: "#4285F4", icon: SiGooglechrome },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section className="bg-[#0a0a0f] text-white py-16" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My <span className="text-blue-600">Skills</span> </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], i) => (
            <motion.div
              key={category}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gradient-to-br from-[#1e2533] to-[#141821] p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-xl font-bold mb-6 text-center border-b border-gray-700 pb-2 text-blue-600">
                {category}
              </h3>
              <div className="space-y-4">
                {skillList.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <Icon className="text-xl" style={{ color: skill.color }} />
                          <span className="text-sm">{skill.name}</span>
                        </div>
                        <span className="text-xs text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import { motion } from "framer-motion";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaDatabase,
//   FaGitAlt,
//   FaGithub,
//   FaJava,
// } from "react-icons/fa";
// import {
//   SiTypescript,
//   SiTailwindcss,
//   SiMongodb,
//   SiJirasoftware,
//   SiPostman,
//   SiExpress,
//   SiSpringboot,
//   SiHibernate,
//   SiNpm,
//   SiVite,
//   SiBootstrap,
//   SiGooglechrome,
// } from "react-icons/si";

// const skills = {
//   Frontend: [
//     { name: "HTML5", level: 95, color: "#E34F26", icon: FaHtml5 },
//     { name: "CSS3", level: 95, color: "#1572B6", icon: FaCss3Alt },
//     { name: "JavaScript", level: 90, color: "#F7DF1E", icon: FaJs },
//     { name: "TypeScript", level: 80, color: "#3178C6", icon: SiTypescript },
//     { name: "React", level: 92, color: "#61DAFB", icon: FaReact },
//     { name: "Tailwind CSS", level: 90, color: "#38BDF8", icon: SiTailwindcss },
//     { name: "Bootstrap", level: 90, color: "#7952B3", icon: SiBootstrap },
//   ],
//   Backend: [
//     { name: "Java", level: 90, color: "#CB3837", icon: FaJava },
//     { name: "Spring Boot", level: 85, color: "#6DB33F", icon: SiSpringboot },
//     { name: "Hibernate", level: 80, color: "#59666C", icon: SiHibernate },
//     { name: "RESTful APIs", level: 85, color: "#FF5733", icon: SiExpress },
//     { name: "MySQL", level: 82, color: "#4479A1", icon: FaDatabase },
//     { name: "MongoDB", level: 78, color: "#47A248", icon: SiMongodb },
//     { name: "Node.js", level: 75, color: "#339933", icon: FaNodeJs },
//   ],
//   Tools: [
//     { name: "Git", level: 90, color: "#F05032", icon: FaGitAlt },
//     { name: "GitHub", level: 88, color: "#59666d", icon: FaGithub },
//     { name: "Postman", level: 80, color: "#FF6C37", icon: SiPostman },
//     { name: "Jira", level: 75, color: "#0052CC", icon: SiJirasoftware },
//     { name: "npm", level: 85, color: "#CB3837", icon: SiNpm },
//     { name: "Vite", level: 80, color: "#646CFF", icon: SiVite },
//     { name: "Chrome DevTools", level: 90, color: "#4285F4", icon: SiGooglechrome },
//   ],
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   show: { 
//     opacity: 1, 
//     scale: 1,
//     transition: { 
//       duration: 0.4,
//       ease: "easeOut"
//     }
//   },
//   hover: {
//     y: -5,
//     boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.3)",
//     transition: {
//       duration: 0.2,
//       ease: "easeOut"
//     }
//   }
// };

// export default function Skills() {
//   return (
//     <section className="bg-gradient-to-b from-[#0a0a0f] to-[#151522] text-white py-16" id="skills">
//       <div className="max-w-6xl mx-auto px-5">
//         <motion.h2 
//           className="text-3xl font-bold text-center mb-3"
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           viewport={{ once: true }}
//         >
//           My <span className="text-transparent bg-clip-text bg-blue-600 ">Skills</span>
//         </motion.h2>
//         <motion.p 
//           className="text-gray-400 text-center text-sm max-w-xl mx-auto mb-12"
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, delay: 0.1 }}
//           viewport={{ once: true }}
//         >
//           Technologies and tools I use to create amazing digital experiences
//         </motion.p>

//         <div className="grid md:grid-cols-3 gap-6">
//           {Object.entries(skills).map(([category, skillList], i) => (
//             <motion.div
//               key={category}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="show"
//               whileHover="hover"
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ delay: i * 0.15 }}
//               className="bg-gradient-to-br from-[#1a1f2e] to-[#161a27] p-5 rounded-xl shadow-lg border border-gray-800 relative overflow-hidden"
//             >
//               {/* Subtle gradient accent */}
//               <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 "></div>
              
//               <div className="relative">
//                 <h3 className="text-lg font-semibold mb-4 text-center flex items-center justify-center">
//                   <span className="bg-blue-600 text-transparent bg-clip-text font-bold">
//                     {category}
//                   </span>
//                 </h3>
//                 <div className="space-y-3">
//                   {skillList.map((skill, index) => {
//                     const Icon = skill.icon;
//                     return (
//                       <motion.div
//                         key={skill.name}
//                         variants={fadeUp}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true }}
//                         transition={{ delay: index * 0.05 }}
//                         className="group"
//                       >
//                         <div className="flex items-center justify-between mb-1">
//                           <div className="flex items-center gap-2">
//                             <Icon className="text-lg" style={{ color: skill.color }} />
//                             <span className="text-xs font-medium">{skill.name}</span>
//                           </div>
//                           <span className="text-xs text-gray-400 font-mono">{skill.level}%</span>
//                         </div>
//                         <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
//                           <motion.div
//                             className="h-1.5 rounded-full relative"
//                             style={{ backgroundColor: skill.color }}
//                             initial={{ width: 0 }}
//                             whileInView={{ width: `${skill.level}%` }}
//                             transition={{ duration: 1, ease: "easeOut", delay: index * 0.03 }}
//                           >
//                             <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20"></div>
//                           </motion.div>
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
