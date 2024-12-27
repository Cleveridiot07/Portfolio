import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'SDE Intern',
    company: 'EASYED',
    location: 'Ghaziabad, UP',
    duration: 'October 2015 - Present',
    achievements: [
      'Optimized frontend-backend integration, boosting communication efficiency across APIs and elevating user experience and system performance.',
      'Revamped API architecture, reducing latency, enabling faster feature deployments, and cutting the typical release cycle by 3 weeks.',
      'Conducted comprehensive API testing, improving reliability and performance, ensuring seamless frontend-backend integration.',
    ],
  },
];

const openSourceContributions = [
  {
    event: 'Hacktoberfest 2024',
    location: 'Online',
    duration: 'October 2024 – November 2024',
    contributions: [
      'Built open-source solutions that expanded accessibility and functionality, supporting a community of 500+ developers.',
      'Enhanced user interface and experience across projects like QR Code Generator, positively impacting over 1,000 users.',
    ],
  },
  {
    event: 'GSSOC 2024',
    location: 'Online',
    duration: 'September 2024 – November 2024',
    contributions: [
      'Enhanced functionality of Pen Craft, increasing user engagement through intuitive design improvements.',
      'Containerized JournalForge with Docker, optimizing deployment workflows for 50+ developers, achieving faster deployment times with consistent environments across dev and production.',
    ],
  },
];

export default function Experience() {
  return (
    <div className="">
      {/* Experience Section */}
      <section id="experience" className="pt-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Experience
          </motion.h2>
          <div className="min-w-screen flex items-center justify-center px-5 pt-5">
            {experiences.map((exp, index) => (
              <div key={index} className="rounded-lg shadow-xl bg-gray-900 text-white mb-8 w-full max-w-4xl">
                <div className="border-b border-gray-800 px-8 py-3">
                  <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
                  <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
                  <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
                </div>
                <div className="px-8 py-6">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-sm text-gray-400">{exp.company} | {exp.location}</p>
                  <p className="text-sm text-gray-400">{exp.duration}</p>
                  <ul className="mt-3 list-disc list-inside">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-300">{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Contributions Section */}
      <section id="openSource" className="pt-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Open Source Contributions
          </motion.h2>
          <div className="min-w-screen flex flex-col items-center justify-center px-5 space-y-8">
            {openSourceContributions.map((contribution, index) => (
              <div key={index} className="rounded-lg shadow-xl bg-gray-900 text-white w-full max-w-4xl">
                <div className="border-b border-gray-800 px-8 py-3">
                  <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
                  <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
                  <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
                </div>
                <div className="px-8 py-6">
                  <h3 className="text-xl font-bold">{contribution.event}</h3>
                  <p className="text-sm text-gray-400">{contribution.location}</p>
                  <p className="text-sm text-gray-400">{contribution.duration}</p>
                  <ul className="mt-3 list-disc list-inside">
                    {contribution.contributions.map((detail, idx) => (
                      <li key={idx} className="text-gray-300">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
