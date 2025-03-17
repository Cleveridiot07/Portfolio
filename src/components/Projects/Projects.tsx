
import ProjectSlider from "./ProjectSlider";
import { Project } from "../../interfaces";


const projects:Project[] = [
  {
    title: "Dhwani",
    description:
      "A full-stack music streaming application with real-time features powered by WebSockets, ensuring seamless audio playback and interactive user engagement.",
    techStack: ["MERN", "Typescript", "SocketIO", "Docker", "AWS_EC2"],
    lastUpdated: "2025-03-13",
    imageUrl: "./Projects/Dhwani.jpeg",
    githubUrl: "https://github.com/Cleveridiot07/Dhwani-Music-that-Connects-You",
    visitUrl: "https://dhwani-music-v1.netlify.app/",
    imageBg: "bg-white",
  },
  {
    title: "MockMate",
    description:
      "An AI-powered interview preparation platform that generates dynamic, role-specific questions, enhancing candidate readiness with real-time feedback.",
    techStack: ["MERN", "Typescript", "Gemini", "Firebase", "Azure","AWS_Lambda"],
    lastUpdated: "2025-03-13",
    imageUrl: "./Projects/Mockmate.jpeg",
    githubUrl: "https://github.com/Cleveridiot07/MockMate",
    visitUrl: "https://mockmate-ai.netlify.app/",
    imageBg: "bg-white",
  },  
  {
    title: "VocaScribe",
    description:
      "A seamless speech-to-text transcriber that transforms your voice into accurate, real-time text with ease and efficiency.",
    techStack: ["ReactJS", "Typescript", "AWS","Azure"],
    lastUpdated: "2025-01-03", 
    imageUrl: "./Projects/Ai.jpeg",
    githubUrl: "https://github.com/Cleveridiot07/Vocascribe-Text-to-Speech-convertor",
    visitUrl: "https://vocascribe.netlify.app/",
    imageBg: "bg-white",
  },
  {
    title: "Brain Tumor Classification",
    description:
      "This project is a Brain Tumor Detection API built with FastAPI and TensorFlow, allowing users to upload MRI images and predict tumor presence using a pre-trained CNN model. It is optimized for serverless deployment on AWS Lambda.",
    techStack: ["Python", "FastAPI", "AWS"],
    lastUpdated: "2024-10-14", 
    imageUrl: "./Projects/BrainTumorClassification.webp",
    githubUrl: "https://github.com/Cleveridiot07/BrainTumorClassificationUsingOpenCV",
    visitUrl: "https://github.com/Cleveridiot07/BrainTumorClassificationUsingOpenCV",
    imageBg: "bg-white",
  },
  {
    title: "Note Forge",
    description:
      "NoteForge is a MERN stack-based notes application that offers secure JWT-based authentication, customizable note colors, and a sleek interface powered by Vite and Tailwind CSS. Deployed on Vercel, it ensures a seamless and responsive user experience.",
    techStack: ["ReactJS", "NodeJS", "TailwindCSS", "ExpressJS"],
    lastUpdated: "2023-08-01",
    imageUrl: "./Projects/NoteForge.jpeg",
    githubUrl: "https://github.com/Cleveridiot07/NoteForge",
    visitUrl: "https://noteforgev1.netlify.app/",
    imageBg: "bg-amber-950",
  },
  {
    title: "DevIDE",
    description:
      "A scalable, cloud-based IDE supporting real-time collaboration for developers. Designed for seamless remote development.",
    techStack: ["ReactJS", "ExpressJS", "Docker", "Firebase", "TailwindCSS"],
    lastUpdated: "2024-02-24",
    imageUrl: "./Projects/CloudIDE.jpeg",
    githubUrl: "https://github.com/Cleveridiot07/DevIDE",
    visitUrl: "https://github.com/Cleveridiot07/DevIDE",
    imageBg: "bg-amber-900",
  },
  {
    title: "ImaGenie",
    description:
      "ImaGenie is a MERN stack application that leverages the Limewire API to generate and manage creative images with a modern, responsive interface built using Tailwind CSS. It offers users an intuitive and visually appealing experience.",
    techStack: ["ReactJS", "NodeJS", "TailwindCSS", "ExpressJS","LimeWire API","AWS"],
    lastUpdated: "2023-01-01",
    imageUrl: "./Projects/ImaGenie.jpeg",
    githubUrl: "https://github.com/Cleveridiot07/ImaGeine",
    visitUrl: "https://github.com/Cleveridiot07/ImaGeine",
    imageBg: "bg-gray-950",
  },
  {
    title: "My Portfolio",
    description:
      "A visually stunning MERN stack portfolio featuring a sleek design, responsive interface, and a showcase of projects, skills, and achievements.",
    techStack: ["ReactJS", "NodeJS", "TailwindCSS", "ExpressJS"],
    lastUpdated: "2025-01-01",
    imageUrl: "./Projects/Portfolio.jpg",
    githubUrl: "https://github.com/Cleveridiot07/Portfolio",
    visitUrl: "https://cleveridiot07.netlify.app/",
    imageBg: "bg-gray-950",
  },
];


export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 relative min-h-screen overflow-scroll"
    >
      <ProjectSlider projects={projects}/>
    </section>
  );
}
