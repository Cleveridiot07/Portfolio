import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaAws,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaServer,
} from "react-icons/fa";
import { SiExpress, SiSocketdotio } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { CiLink } from "react-icons/ci";
import { BiLogoCPlusPlus } from "react-icons/bi";

const Skills = () => {
  const icons = [
    { Component: FaAws, top: "75%", left: "55%" },
    { Component: FaDatabase, top: "70%", left: "10%" },
    { Component: FaDocker, top: "40%", left: "85%" },
    { Component: FaJs, top: "35%", left: "5%" },
    { Component: FaNodeJs, top: "78%", left: "40%" },
    { Component: SiExpress, top: "15%", left: "90%" },
    { Component: CiLink, top: "10%", left: "40%" },
    { Component: FaHtml5, top: "15%", left: "25%" },
    { Component: FaCss3Alt, top: "10%", left: "60%" },
    { Component: FaReact, top: "50%", left: "70%" },
    { Component: RiTailwindCssFill, top: "60%", left: "25%" },
    { Component: BiLogoCPlusPlus, top: "80%", left: "70%" },
    { Component: FaGithub, top: "5%", left: "3%" },
    { Component: SiSocketdotio, top: "70%", left: "90%" },
    { Component: FaServer, top: "5%", left: "76%" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-3xl z-20 flex flex-col">
        <h2 className="text-5xl text-center font-bold mb-5">About</h2>
        <p className="w-full px-5 text-center font-semibold text-gray-50">
          As a dynamic and versatile developer, I specialize in crafting
          seamless experiences across frontend, backend, and full-stack
          development. With a solid foundation in analytics and an unwavering
          commitment to innovation, I excel in delivering high-quality,
          impactful solutions that drive meaningful results.
        </p>
      </div>
      {icons.map((icon, index) => {
        const { Component, top, left } = icon;
        return (
          <Component
            key={index}
            style={{
              position: "absolute",
              top: top,
              left: left,
              transform: "translate(-50%, -50%)",
              opacity: 0.5,
              animation: `float-${index % 3 + 1} 5s infinite`,
            }}
            className="text-gray-500 hover:text-gray-200 transition"
            size={window.innerWidth >= 1024 ? 150 : window.innerWidth >= 768 ? 100 : 70}
          />
        );
      })}
      <style>
        {`
          @keyframes float-1 {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
          @keyframes float-2 {
            0% { transform: translateY(0); }
            50% { transform: translateY(15px); }
            100% { transform: translateY(0); }
          }
          @keyframes float-3 {
            0% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Skills;
