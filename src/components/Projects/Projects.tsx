"use client";

import { motion } from "framer-motion";
import { Github, Globe, ArrowUpRight } from "lucide-react";
import {
  ReactIcon,
  NodeIcon,
  DatabaseIcon,
  TypeScriptIcon,
  NextJsIcon,
  StripeIcon,
  SocketIcon,
  VueIcon,
} from "./TechIcons";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "AI-Powered Task Manager",
    description:
      "Smart task management application with AI-driven prioritization and natural language processing capabilities.",
    image: "/placeholder.svg",
    techStack: [ReactIcon, NodeIcon, DatabaseIcon],
    liveUrl: "https://project1.demo",
    githubUrl: "https://github.com/username/project1",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management and payment processing.",
    image: "/placeholder.svg",
    techStack: [NextJsIcon, TypeScriptIcon, StripeIcon, DatabaseIcon],
    liveUrl: "https://project2.demo",
    githubUrl: "https://github.com/username/project2",
  },
  {
    title: "Real-time Chat Application",
    description:
      "Feature-rich chat application with end-to-end encryption and file sharing capabilities.",
    image: "/placeholder.svg",
    techStack: [ReactIcon, SocketIcon, NodeIcon, DatabaseIcon],
    liveUrl: "https://project3.demo",
    githubUrl: "https://github.com/username/project3",
  },
  {
    title: "Blockchain Explorer",
    description:
      "Comprehensive blockchain explorer with real-time transaction tracking and wallet analysis.",
    image: "/placeholder.svg",
    techStack: [VueIcon, ReactIcon, NodeIcon, DatabaseIcon],
    liveUrl: "https://project4.demo",
    githubUrl: "https://github.com/username/project4",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 space-y-10 relative overflow-hidden"
    >
      <div className="h-fit w-screen flex justify-start">
        <ProjectCard
          title="DevIDE"
          subtitle="Cloud Based IDE for Developers"
          description="The project is a cloud-based IDE featuring a file explorer, terminal, and other developer tools. It leverages Docker containers to provide isolated development environments, allowing users to write, edit, and execute code directly in the cloud. The IDE offers real-time file browsing, code execution, and project management, all within a web-based interface."
          technologies={[
            "Docker",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
            
          ]}
          imageSrc="./CloudIDE.png"
          visitLink="https://github.com/Cleveridiot07/DevIDE"
          sourceLink="https://github.com/Cleveridiot07/DevIDE"
        />
      </div>
      <div className="h-fit w-screen flex justify-end">
      <ProjectCard
          title="DevIDE"
          subtitle="Cloud Based IDE for Developers"
          description="The project is a cloud-based IDE featuring a file explorer, terminal, and other developer tools. It leverages Docker containers to provide isolated development environments, allowing users to write, edit, and execute code directly in the cloud. The IDE offers real-time file browsing, code execution, and project management, all within a web-based interface."
          technologies={[
            "Docker",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
            
          ]}
          imageSrc="./CloudIDE.png"
          visitLink="https://github.com/Cleveridiot07/DevIDE"
          sourceLink="https://github.com/Cleveridiot07/DevIDE"
        />
      </div>
      <div className="h-fit w-screen flex justify-start">
        <ProjectCard />
      </div>
      <div className="h-fit w-screen flex justify-end">
        <ProjectCard />
      </div>
    </section>
  );
}
