import { GitlabIcon as GitHub, Code, Award } from 'lucide-react'

const profiles = [
  { 
    platform: "GitHub",
    username: "yourusername",
    stats: "500+ contributions last year",
    icon: GitHub,
    url: "https://github.com/yourusername"
  },
  { 
    platform: "LeetCode",
    username: "yourusername",
    stats: "300+ problems solved",
    icon: Code,
    url: "https://leetcode.com/yourusername"
  },
  { 
    platform: "CodeChef",
    username: "yourusername",
    stats: "Highest rating: 1573",
    icon: Award,
    url: "https://www.codechef.com/users/yourusername"
  },
]

export default function CodingProfiles() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Coding Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <a 
              key={index} 
              href={profile.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition-colors"
            >
              <profile.icon size={24} className="text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold">{profile.platform}</h3>
                <p className="text-gray-400">{profile.username}</p>
                <p className="text-sm text-gray-500">{profile.stats}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

