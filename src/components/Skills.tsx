'use client'

import { motion } from 'framer-motion'
import { ReactIcon, NextJsIcon, TypeScriptIcon, TailwindIcon, NodeIcon, PythonIcon, DatabaseIcon, DockerIcon } from './TechIcons'

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: ReactIcon, level: 90 },
      { name: "Next.js", icon: NextJsIcon, level: 85 },
      { name: "TypeScript", icon: TypeScriptIcon, level: 80 },
      { name: "Tailwind CSS", icon: TailwindIcon, level: 95 },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: NodeIcon, level: 85 },
      { name: "Python", icon: PythonIcon, level: 80 },
      { name: "Databases", icon: DatabaseIcon, level: 75 },
      { name: "Docker", icon: DockerIcon, level: 70 },
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#1a1a1a,#000000)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-2xl font-semibold mb-8 text-center text-white">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-8">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <motion.div
                      className="w-20 h-20 mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <skill.icon className="w-12 h-12 text-white" />
                    </motion.div>
                    <h4 className="text-lg font-medium text-white mb-2">{skill.name}</h4>
                    <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

