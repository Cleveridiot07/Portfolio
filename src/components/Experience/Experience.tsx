import { motion } from 'framer-motion';
import ExperienceSectionCard from './ExperienceSectionCard';

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
    skills: ['React', 'Node.js', 'API Integration', 'Testing'],
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
    skills: ['React', 'UI/UX Design', 'Open-Source Development'],
  },
  {
    event: 'GSSoC 2024',
    location: 'Online',
    duration: 'September 2024 – November 2024',
    contributions: [
      'Enhanced functionality of Pen Craft, increasing user engagement through intuitive design improvements.',
      'Containerized JournalForge with Docker, optimizing deployment workflows for 50+ developers, achieving faster deployment times with consistent environments across dev and production.',
    ],
    skills: ['Docker', 'Node.js', 'UI/UX Design', 'Open-Source Development'],
  },
];

export default function Experience() {
  return (
    <div className="">
      {/* Experience Section */}
      <section id="experience" className="pt-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Experience
          </motion.h2>

          <div className="min-w-screen flex items-center justify-center px-5 pt-5">
            {experiences.map((exp, index) => (
              <ExperienceSectionCard
                key={index}
                role={exp.role}
                company={exp.company}
                location={exp.location}
                duration={exp.duration}
                achievements={exp.achievements}
                techStack={exp.skills}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Contributions Section */}
      <section id="openSource" className="pt-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Open Source Contributions
          </motion.h2>
          <div className="min-w-screen flex flex-col items-center justify-center px-5 space-y-8">
            {openSourceContributions.map((contribution, index) => (
              <ExperienceSectionCard
                key={index}
                role={contribution.event}
                company=""
                location={contribution.location}
                duration={contribution.duration}
                achievements={contribution.contributions}
                techStack={contribution.skills}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
