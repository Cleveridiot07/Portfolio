import { Github, Link as LinkIcon, Sprout } from 'lucide-react';

// Utility function to generate random colors
const getRandomColor = () => {
  const colors = [
    "bg-red-500/60 text-red-300",
    "bg-blue-500/60 text-blue-300",
    "bg-green-500/60 text-green-300",
    "bg-yellow-500/60 text-yellow-300",
    "bg-orange-500/60 text-orange-300",
    "bg-purple-500/60 text-purple-300",
    "bg-cyan-500/60 text-cyan-300",
    "bg-pink-500/60 text-pink-300",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export function ProjectCard({
  title = "FootPrint",
  subtitle = "RESTORE NATURE. REMOVE CARBON.",
  description = "Carbon FootPrint is a sustainable platform with a Carbon Tracker, Meal Planner, and chatbot.",
  technologies = ["HTML5", "CSS3", "JavaScript", "React", "Redux"],
  imageSrc = "https://ninjainterview.com/images/blog/video-interview-platform.png?v=1671197900125901718",
  visitLink = "#",
  sourceLink = "#",
}) {
  return (
    <div className="relative md:max-w-[80vw] bg-black overflow-hidden p-10 rounded-sm text-white group">
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover opacity-80"
        />
      </div>

      {/* Hover Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-slate-200 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>

      <div className="relative px-8 py-12 lg:px-12 lg:py-16">
        <div className="flex items-center gap-2 mb-4">
          <Sprout className="h-8 w-8 text-emerald-400" />
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6 lg:text-5xl">
            {subtitle.split('.').map((line, index) => (
              <span
                key={index}
                className={`block ${
                  index === 0 ? `${getRandomColor()}` : ''
                }`}
              >
                {line.trim()}
              </span>
            ))}
          </h1>

          <p className="text-lg text-slate-50 italic">{description}</p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm ${getRandomColor()}`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={visitLink}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 transition-colors rounded-lg text-white font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon className="h-4 w-4" />
              Visit App
            </a>
            <a
              href={sourceLink}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 transition-colors rounded-lg text-white font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
