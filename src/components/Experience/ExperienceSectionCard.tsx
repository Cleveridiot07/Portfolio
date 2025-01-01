import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface ExperienceSectionCardProps {
  title?: string;
  role?: string;
  company?: string;
  location?: string;
  duration?: string;
  achievements?: string[];
  techStack?: string[];
}

export default function ExperienceSectionCard({
  role = "SDE Intern",
  company = "EASYED",
  location = "Ghaziabad, UP",
  duration = "October 2015 - Present",
  achievements = [
    "Optimized frontend-backend integration, boosting communication efficiency across APIs and elevating user experience and system performance.",
    "Revamped API architecture, reducing latency, enabling faster feature deployments, and cutting the typical release cycle by 3 weeks.",
    "Conducted comprehensive API testing, improving reliability and performance, ensuring seamless frontend-backend integration.",
  ],
  techStack = ['React', 'Node.js', 'API Integration', 'Testing']
}: ExperienceSectionCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onMouseMove={handleMouseMove}
        className="relative group"
      >
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.85), transparent 25%)`,
          }}
        />

        {/* Shine effect */}
        <div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 50%, transparent)`,
            transform: `translateX(${mousePosition.x / 5}px)`,
            pointerEvents: 'none',
          }}
        />

        <div className="relative bg-black/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800 group-hover:border-cyan-500/50 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/20">
          {/* Window Controls */}
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500 group-hover:animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 group-hover:animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 group-hover:animate-pulse"></div>
          </div>

          {/* Title Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2 group-hover:scale-150 transition-transform duration-300">
              {role}
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400">
              <span className="text-white group-hover:text-cyan-300 transition-colors duration-300">{company} | {location}</span>
              <span className="hidden sm:block">•</span>
              <span className="group-hover:text-blue-300 transition-colors duration-300">{duration}</span>
            </div>
          </div>

          {/* Experience achievements */}
          <ul className="space-y-4">
            {achievements.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start group/item hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-cyan-500 group-hover:item:bg-blue-400 group-hover:item:shadow-glow transition-all duration-300"></div>
                <span className="ml-4 text-gray-300 group-hover:item:text-white transition-colors duration-300">
                  {point}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Tech stack tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-gray-800/50 text-gray-400 border border-gray-700 
                         hover:border-cyan-500 hover:text-cyan-400 hover:scale-105 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
