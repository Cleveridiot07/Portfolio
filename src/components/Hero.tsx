import { GitlabIcon as GitHub, Linkedin, Twitter, Code, BookOpen } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center">
        <div className="mb-8 relative inline-block">
          <image
            src="/your-profile-picture.jpg"
            alt="Your Name"
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-500"
          />
          <div className="absolute inset-0 rounded-full bg-blue-500 animate-pulse opacity-50"></div>
        </div>
        <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">
          Your Name
        </h1>
        <p className="text-xl text-gray-400 mb-8 animate-fade-in-up animation-delay-200">
          Full Stack Developer | AI Enthusiast | Problem Solver
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-400">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <GitHub size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Twitter size={24} />
          </a>
          <a href="https://codechef.com/users/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Code size={24} />
          </a>
          <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <BookOpen size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

