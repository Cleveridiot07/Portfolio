import { GitlabIcon as GitHub, Linkedin, Twitter, Code, BookOpen, Instagram, Youtube, Twitch } from 'lucide-react'

const socialProfiles = [
  { name: 'GitHub', icon: GitHub, url: 'https://github.com/yourusername', username: 'yourusername' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/yourusername', username: 'Your Name' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/yourusername', username: '@yourusername' },
  { name: 'CodeChef', icon: Code, url: 'https://codechef.com/users/yourusername', username: 'yourusername' },
  { name: 'Medium', icon: BookOpen, url: 'https://medium.com/@yourusername', username: '@yourusername' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/yourusername', username: '@yourusername' },
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/c/yourusername', username: 'Your Channel Name' },
  { name: 'Twitch', icon: Twitch, url: 'https://twitch.tv/yourusername', username: 'yourusername' },
]

export default function SocialProfiles() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Connect With Me</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {socialProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <profile.icon size={24} className="text-blue-400 mr-3" />
              <div>
                <h3 className="font-semibold">{profile.name}</h3>
                <p className="text-sm text-gray-400">{profile.username}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

