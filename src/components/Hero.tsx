'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Code2, Download } from 'lucide-react'
// import Image from 'next/image'

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                LET&apos;S CONNECT
              </span>
            </h1>
            <div className="relative inline-block mb-6">
              <motion.span
                className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              >
                John Doe
              </motion.span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            </div>
            <p className="text-gray-300 text-lg md:text-xl mb-8">
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <SocialButton href="https://github.com" icon={<Github />} label="GitHub" />
              <SocialButton href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
              <SocialButton href="https://leetcode.com" icon={<Code2 />} label="LeetCode" />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Resume
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <motion.div
              className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center gap-2 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  )
}

