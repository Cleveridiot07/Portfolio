import SkillSlider from "./SkillSlider";

const Languages = [
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
    skillLevel: "Intermediate",
    iconPath: "./Skills/Python.png",
  },
  {
    skillName: "Java",
    skillLevel: "Intermediate",
    iconPath: "./Skills/Java.png",
  },
];

const frontend = [
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

const Backend = [
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

const DevTools = [
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
    skillLevel: "Intermediate",
    iconPath: "./Skills/Docker.png",
  },

];

const Skills = () => {
  const skillCategories = [
    { title: "Languages", skills: Languages },
    { title: "Frontend", skills: frontend },
    { title: "Backend", skills: Backend },
    { title: "DevTools", skills: DevTools },
  ];

  return (
    <div className="w-screen min-h-screen space-y-10 pt-28">
      {skillCategories.map((category, index) => (
        <SkillSlider key={index} title={category.title} skills={category.skills} />
      ))}
    </div>
  );
};

export default Skills;
