import { GitlabIcon as GitHub, CodepenIcon as React, Database, Server, Cloud } from 'lucide-react';
import { TypeScriptLogo, PythonLogo, JavaLogo } from './Logos';

const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: () => <div className="text-yellow-400">JS</div> },
      { name: "TypeScript", icon: TypeScriptLogo },
      { name: "Python", icon: PythonLogo },
      { name: "Java", icon: JavaLogo },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: React },
      { name: "Next.js", icon: () => <div className="font-bold">Next</div> },
      { name: "Vue.js", icon: () => <div className="text-green-500">Vue</div> },
      { name: "Tailwind CSS", icon: () => <div className="text-blue-400">TW</div> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: () => <div className="text-green-500">Node</div> },
      { name: "Express", icon: () => <div className="font-bold">Ex</div> },
      { name: "Django", icon: () => <div className="text-green-700">Dj</div> },
      { name: "Spring Boot", icon: () => <div className="text-green-600">SB</div> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: () => <div className="text-green-500">M</div> },
      { name: "PostgreSQL", icon: () => <div className="text-blue-400">Pg</div> },
      { name: "MySQL", icon: Database },
      { name: "Redis", icon: () => <div className="text-red-500">R</div> },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", icon: () => <div className="text-blue-400">D</div> },
      { name: "Kubernetes", icon: () => <div className="text-blue-500">K8s</div> },
      { name: "AWS", icon: Cloud },
      { name: "Git", icon: GitHub },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "RESTful APIs", icon: Server },
      { name: "GraphQL", icon: () => <div className="text-pink-600">GQL</div> },
      { name: "Microservices", icon: () => <div className="font-bold">μs</div> },
      { name: "Agile/Scrum", icon: () => <div className="font-bold">A/S</div> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">{skillCategory.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skillCategory.items.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-600 rounded-full mb-2">
                      {typeof skill.icon === "function" ? (
                        skill.icon() // Invoke functional icons directly
                      ) : (
                        <skill.icon size={24} /> // Render React components directly
                      )}
                    </div>
                    <span className="text-sm text-center text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
