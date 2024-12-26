import { ExternalLink, GitlabIcon as GitHub } from 'lucide-react'

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "A task management application with AI-driven prioritization and scheduling.",
    techStack: ["React", "Node.js", "MongoDB", "TensorFlow.js"],
    liveUrl: "https://ai-task-manager.com",
    githubUrl: "https://github.com/yourusername/ai-task-manager"
  },
  {
    title: "Blockchain Voting System",
    description: "A secure and transparent voting system built on blockchain technology.",
    techStack: ["Solidity", "Ethereum", "Web3.js", "React"],
    liveUrl: "https://blockchain-voting.com",
    githubUrl: "https://github.com/yourusername/blockchain-voting"
  },
  {
    title: "Real-time Collaboration Tool",
    description: "A real-time collaboration platform for remote teams with video conferencing and shared workspaces.",
    techStack: ["Vue.js", "WebRTC", "Socket.io", "Express"],
    liveUrl: "https://collab-tool.com",
    githubUrl: "https://github.com/yourusername/collab-tool"
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center"
                >
                  <ExternalLink size={16} className="mr-1" /> Live Demo
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center"
                >
                  <GitHub size={16} className="mr-1" /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

