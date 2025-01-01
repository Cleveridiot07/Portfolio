'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, GitPullRequest, GitCommit, Star, Users } from 'lucide-react'

const githubStats = {
  totalContributions: 1337,
  pullRequests: 42,
  commits: 500,
  stars: 250,
  followers: 100
}

const GithubStats: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
        >
          GitHub Contributions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            icon={<Github className="w-8 h-8" />}
            label="Total Contributions"
            value={githubStats.totalContributions}
          />
          <StatCard
            icon={<GitPullRequest className="w-8 h-8" />}
            label="Pull Requests"
            value={githubStats.pullRequests}
          />
          <StatCard
            icon={<GitCommit className="w-8 h-8" />}
            label="Commits"
            value={githubStats.commits}
          />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContributionGraph />
          <div className="grid grid-cols-2 gap-8">
            <StatCard
              icon={<Star className="w-8 h-8" />}
              label="Stars"
              value={githubStats.stars}
            />
            <StatCard
              icon={<Users className="w-8 h-8" />}
              label="Followers"
              value={githubStats.followers}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: number }> = ({ icon, label, value }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center"
    >
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{label}</h3>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
      >
        {value}
      </motion.span>
    </motion.div>
  )
}

const ContributionGraph: React.FC = () => {
  // This is a simplified version. In a real scenario, you'd fetch this data from GitHub API
  const contributions = Array(52).fill(0).map(() => Math.floor(Math.random() * 10))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
    >
      <h3 className="text-xl font-semibold mb-4">Contribution Graph</h3>
      <div className="flex justify-between">
        {contributions.map((count, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{ height: `${count * 10}%` }}
            transition={{ duration: 1, delay: index * 0.02 }}
            className="w-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t-sm"
            style={{ maxHeight: '100px' }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default GithubStats

