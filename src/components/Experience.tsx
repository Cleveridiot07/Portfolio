'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building2 } from 'lucide-react'

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    duration: "2021 - Present",
    description: [
      "Led development of next-generation web applications using React and TypeScript",
      "Improved application performance by 40% through optimization techniques",
      "Mentored junior developers and conducted code reviews",
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Innovation Labs",
    location: "New York, NY",
    duration: "2019 - 2021",
    description: [
      "Developed and maintained multiple full-stack applications",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with cross-functional teams to deliver projects on time",
    ]
  },
  {
    title: "Software Engineer",
    company: "StartUp Inc",
    location: "Boston, MA",
    duration: "2017 - 2019",
    description: [
      "Built RESTful APIs using Node.js and Express",
      "Integrated third-party services and payment gateways",
      "Participated in agile development processes",
    ]
  },
]

export default function Experience() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,#1a1a1a,#000000)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-xl blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors">
                <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{experience.title}</h3>
                    <div className="space-y-2 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1.5">•</span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

