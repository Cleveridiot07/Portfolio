import { Briefcase } from 'lucide-react'

const experiences = [
  {
    company: "Tech Innovators Inc.",
    role: "Senior Full Stack Developer",
    duration: "Jan 2020 - Present",
    responsibilities: [
      "Lead a team of 5 developers in building a cloud-based SaaS platform",
      "Implemented microservices architecture, resulting in 40% improved scalability",
      "Reduced API response times by 60% through optimized database queries and caching strategies"
    ]
  },
  {
    company: "DataDriven Solutions",
    role: "Full Stack Developer",
    duration: "Mar 2017 - Dec 2019",
    responsibilities: [
      "Developed and maintained multiple client-facing web applications using React and Node.js",
      "Integrated machine learning models to provide predictive analytics, increasing user engagement by 25%",
      "Implemented automated testing, reducing bug reports by 30%"
    ]
  },
  // Add more experiences as needed
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative pl-8">
              <div className="absolute left-0 top-0 mt-1 bg-blue-500 rounded-full p-1">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-gray-400">{exp.role}</p>
              <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

