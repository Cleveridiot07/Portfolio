'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20  relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#1a1a1a,#000000)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a href="mailto:contact@example.com" className="text-white hover:text-blue-400 transition-colors">
                        contact@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a href="tel:+1234567890" className="text-white hover:text-blue-400 transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white">San Francisco, CA</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Social Profiles</h4>
                  <div className="flex gap-4">
                    <SocialLink href="https://github.com" icon={<Github />} label="GitHub" />
                    <SocialLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
                    <SocialLink href="https://twitter.com" icon={<Twitter />} label="Twitter" />
                    <SocialLink href="https://instagram.com" icon={<Instagram />} label="Instagram" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl" />
            <form className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Your email"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div> */}
    </section>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

