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
} from "react-icons/fa";
import { SiExpress, SiSocketdotio } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { CiLink } from "react-icons/ci";
import { BiLogoCPlusPlus } from "react-icons/bi";

const Skills = () => {
  const icons = [
    { Component: FaAws, top: "80%", left: "50%" },
    { Component: FaDatabase, top: "80%", left: "10%" },
    { Component: FaDocker, top: "50%", left: "95%" },
    { Component: FaJs, top: "45%", left: "35%" },
    { Component: FaNodeJs, top: "88%", left: "30%" },
    { Component: SiExpress, top: "25%", left: "85%" },
    { Component: CiLink, top: "20%", left: "40%" },
    { Component: FaHtml5, top: "25%", left: "20%" },
    { Component: FaCss3Alt, top: "20%", left: "60%" },
    { Component: FaReact, top: "50%", left: "70%" },
    { Component: RiTailwindCssFill, top: "60%", left: "20%" },
    { Component: BiLogoCPlusPlus, top: "80%", left: "80%" },
    { Component: FaGithub, top: "15%", left: "8%" },
    { Component: SiSocketdotio, top: "50%", left: "50%" },
  ];

  return (
    <div className="min-h-screen max-h-96 flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-3xl z-20 flex flex-col">
        <h2 className=" text-5xl text-center font-bold mb-5"> About</h2>
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
              animation: `float-${(index % 3) + 1} 5s infinite`,
            }}
            className="text-gray-500 hover:text-gray-200 transition"
            size={150}
          />
        );
      })}
    </div>
  );
};

export default Skills;
