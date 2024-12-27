'use client'

import { motion } from 'framer-motion'
import { Github, Globe, ArrowUpRight } from 'lucide-react'
import { ReactIcon, NodeIcon, DatabaseIcon, TypeScriptIcon, NextJsIcon, StripeIcon, SocketIcon, VueIcon } from './TechIcons'

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "Smart task management application with AI-driven prioritization and natural language processing capabilities.",
    image: "/placeholder.svg",
    techStack: [ReactIcon, NodeIcon, DatabaseIcon],
    liveUrl: "https://project1.demo",
    githubUrl: "https://github.com/username/project1",
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
    image: "/placeholder.svg",
    techStack: [NextJsIcon, TypeScriptIcon, StripeIcon, DatabaseIcon],
    liveUrl: "https://project2.demo",
    githubUrl: "https://github.com/username/project2",
  },
  {
    title: "Real-time Chat Application",
    description: "Feature-rich chat application with end-to-end encryption and file sharing capabilities.",
    image: "/placeholder.svg",
    techStack: [ReactIcon, SocketIcon, NodeIcon, DatabaseIcon],
    liveUrl: "https://project3.demo",
    githubUrl: "https://github.com/username/project3",
  },
  {
    title: "Blockchain Explorer",
    description: "Comprehensive blockchain explorer with real-time transaction tracking and wallet analysis.",
    image: "/placeholder.svg",
    techStack: [VueIcon, ReactIcon, NodeIcon, DatabaseIcon],
    liveUrl: "https://project4.demo",
    githubUrl: "https://github.com/username/project4",
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a,#000000)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative perspective"
            >
              <motion.div
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-500 ease-out transform preserve-3d hover:rotate-y-12"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex gap-4">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Globe className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {project.techStack.map((Icon, i) => (
                      <motion.div
                        key={i}
                        className="p-2 bg-white/5 rounded-full"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="w-6 h-6 text-blue-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

