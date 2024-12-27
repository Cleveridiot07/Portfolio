'use client'

import { motion } from 'framer-motion'
import { Trophy, Star, Code2 } from 'lucide-react'

const profiles = [
  {
    platform: "LeetCode",
    username: "techmaster",
    stats: [
      { label: "Problems Solved", value: "500+" },
      { label: "Contest Rating", value: "1800" },
      { label: "Global Rank", value: "Top 5%" },
    ],
    icon: Code2,
    color: "from-yellow-500 to-orange-500"
  },
  {
    platform: "CodeChef",
    username: "codechef_pro",
    stats: [
      { label: "Problems Solved", value: "300+" },
      { label: "Max Rating", value: "1900" },
      { label: "Stars", value: "4⭐" },
    ],
    icon: Trophy,
    color: "from-red-500 to-pink-500"
  },
  {
    platform: "Codeforces",
    username: "algo_master",
    stats: [
      { label: "Problems Solved", value: "400+" },
      { label: "Max Rating", value: "1700" },
      { label: "Rank", value: "Expert" },
    ],
    icon: Star,
    color: "from-purple-500 to-indigo-500"
  },
]

export default function CodingProfiles() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#1a1a1a,#000000)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
        >
          Coding Profiles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => {
            const Icon = profile.icon
            return (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${profile.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{profile.platform}</h3>
                      <p className="text-gray-400">@{profile.username}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {profile.stats.map((stat) => (
                      <div key={stat.label} className="flex justify-between items-center">
                        <span className="text-gray-400">{stat.label}</span>
                        <span className="text-white font-semibold">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

