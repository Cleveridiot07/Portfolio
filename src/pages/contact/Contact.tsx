'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Send, Cpu, Server, Database } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black opacity-75" />
        <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-20" />
      </div>

      <div className="max-w-4xl w-full space-y-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mt-6 text-center text-4xl font-extrabold text-white">
            Get In Touch
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Let&apos;s connect and create something amazing together!
          </p>
        </motion.div>

        <div className="mt-8 bg-white/10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div
              className="p-6 bg-gradient-to-br from-blue-800 to-cyan-700"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-medium text-white">Contact Information</h3>
              <p className="mt-1 text-gray-300">Fill out the form and I will get back to you shortly.</p>

              <ul className="mt-4 space-y-4">
                <ContactItem icon={<Mail />} content="contact@example.com" />
                <ContactItem icon={<Phone />} content="+1 (555) 123-4567" />
                <ContactItem icon={<MapPin />} content="San Francisco, CA" />
              </ul>

              <div className="mt-8">
                <h4 className="text-sm font-medium text-white">Follow Me</h4>
                <div className="mt-4 flex space-x-6">
                  <SocialIcon href="#" icon={<Github />} label="GitHub" />
                  <SocialIcon href="#" icon={<Linkedin />} label="LinkedIn" />
                  <SocialIcon href="#" icon={<Twitter />} label="Twitter" />
                  <SocialIcon href="#" icon={<Instagram />} label="Instagram" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-6 bg-white/5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 bg-white/10 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 bg-white/10 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 bg-white/10 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        <TechIcons />
      </div>
    </div>
  )
}

function ContactItem({ icon, content }: { icon: React.ReactNode; content: string }) {
  return (
    <li className="flex items-center text-gray-300">
      <div className="flex-shrink-0 text-blue-400">{icon}</div>
      <div className="ml-3">{content}</div>
    </li>
  )
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

function TechIcons() {
  return (
    <motion.div
      className="mt-12 flex justify-center space-x-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
        <Cpu className="h-12 w-12 text-blue-400" />
      </motion.div>
      <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
        <Server className="h-12 w-12 text-cyan-400" />
      </motion.div>
      <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
        <Database className="h-12 w-12 text-blue-400" />
      </motion.div>
    </motion.div>
  )
}

