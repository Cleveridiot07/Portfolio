import SkillSlider from "./SkillSlider";
import { TypeSkills } from "../../typedef";

const Languages: TypeSkills[] = [
  {
    skillName: "Javascript",
    skillLevel: "Intermediate",
    iconPath: "./Skills/JS.png",
  },
  {
    skillName: "C++",
    skillLevel: "Intermediate",
    iconPath: "./Skills/Cpp.png",
  },
  {
    skillName: "Python",
    skillLevel: "Beginner",
    iconPath: "./Skills/Python.png",
  },
];

const frontend: TypeSkills[] = [
  {
    skillName: "HTML5",
    skillLevel: "Intermediate",
    iconPath: "./Skills/HTML5.png",
  },
  {
    skillName: "CSS3",
    skillLevel: "Intermediate",
    iconPath: "./Skills/CSS.png",
  },
  {
    skillName: "Tailwind CSS",
    skillLevel: "Intermediate",
    iconPath: "./Skills/Tailwind.png",
  },
  {
    skillName: "React JS",
    skillLevel: "Intermediate",
    iconPath: "./Skills/ReactJS.png",
  },
];

const Backend: TypeSkills[] = [
  {
    skillName: "Node JS",
    skillLevel: "Intermediate",
    iconPath: "./Skills/NodeJs.png",
  },
  {
    skillName: "Express JS",
    skillLevel: "Intermediate",
    iconPath: "./Skills/Express.png",
  },
  {
    skillName: "REST APIs",
    skillLevel: "Intermediate",
    iconPath: "./Skills/API.png",
  },
];

const DevTools: TypeSkills[] = [
  {
    skillName: "Postman",
    skillLevel: "Intermediate",
    iconPath: "./Skills/PostmanApi.png",
  },
  {
    skillName: "Github",
    skillLevel: "Intermediate",
    iconPath: "./Skills/Github.png",
  },
  {
    skillName: "Docker",
    skillLevel: "Beginner",
    iconPath: "./Skills/Docker.png",
  },
];

const Database: TypeSkills[] = [
  {
    skillName: "MongoDB",
    skillLevel: "Intermediate",
    iconPath: "./Skills/MongoDB.png",
  },
  {
    skillName: "MySQL",
    skillLevel: "Intermediate",
    iconPath: "./Skills/Mysql.png",
  },
];

const Skills = () => {
  const skillCategories = [
    { title: "Languages", skills: Languages },
    { title: "Frontend", skills: frontend },
    { title: "Backend", skills: Backend },
    { title: "Database", skills: Database },
    { title: "DevTools", skills: DevTools },
  ];

  return (
    <div className="w-screen min-h-screen space-y-10 pt-28">
      {skillCategories.map((category, index) => (
        <SkillSlider
          key={index}
          title={category.title}
          skills={category.skills}
        />
      ))}
    </div>
  );
};

export default Skills;
