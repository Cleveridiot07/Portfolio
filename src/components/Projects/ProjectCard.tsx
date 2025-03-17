import { SkillsType } from "../../interfaces";
import { ProjectCardProps } from "../../interfaces";


const Skills:SkillsType = {
  Javascript: "./Skills/JS.png",
  Cpp: "./Skills/Cpp.png",
  Python: "./Skills/Python.png",
  Java: "./Skills/Java.png",
  HTML5: "./Skills/HTML5.png",
  CSS3: "./Skills/CSS.png",
  TailwindCSS: "./Skills/Tailwind.png",
  ReactJS: "./Skills/ReactJS.png",
  NodeJS: "./Skills/NodeJs.png",
  ExpressJS: "./Skills/Express.png",
  Docker: "./Skills/Docker.png",
  MongoDB: "./Skills/MongoDB.png",
  Typescript: "./Skills/Typescript.png",
  Default: "./Skills/Skill.png",
  AWS: "./Skills/Aws.png",
  AWS_Lambda: "./Skills/Aws.png",
  AWS_EC2: "./Skills/Aws.png",
  MERN: "./Skills/MERN.png",
  Gemini: "./Skills/Gemini.png",
  Firebase: "./Skills/Firebase.png",
  Azure: "./Skills/Azure.png",
  SocketIO: "./Skills/Socket.png",
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack = [],
  lastUpdated,
  imageUrl,
  githubUrl,
  visitUrl,
  imageBg = "bg-gray-50",
}) => {
  return (
    <div className="flex items-center h-full overflow-scroll justify-center">
      <div className="flex w-full max-w-4xl h-full flex-col overflow-hidden rounded-sm bg-white shadow-lg lg:flex-row">
        {/* Illustration */}
        <div className="w-full bg-sky-900 lg:w-1/2">
          <img
            src={imageUrl || "/placeholder.svg?height=400&width=400"}
            alt="Project Illustration"
            className=  {`h-full ${imageBg} object-fill  w-full`}
          />
        </div>

        {/* Content */}
        <div className="w-full p-8 lg:w-1/2 overflow-scroll">
          <div className="space-y-1 pb-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl text-black font-bold">{title}</h1>

            </div>
            <p className="text-sm text-gray-500">{`Last updated ${lastUpdated || 'N/A'}`}</p>
          </div>

          <div className="space-y-6">
            {/* Project Description */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">About Project</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>

            {/* Tech Stack */}
            {techStack.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Tech Stack</h3>
                <div className="grid md:grid-cols-2 gap-2 sm:grid-cols-1">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-sm border text-gray-950 font-semibold bg-white px-3 py-2 text-sm transition-colors hover:bg-gray-50"
                    >
                      <img
                        src={Skills[tech] || Skills.Default}
                        alt={tech}
                        className="h-8 w-8"
                      />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <a
                href={visitUrl}
                className="flex items-center justify-center gap-2 rounded-sm border bg-sky-950 px-3 text-white py-2 text-sm transition-colors hover:bg-sky-800"
              >
                <img src="./visit.svg" alt="Visit" className="h-6 w-6" />
                Visit
              </a>
              <a
                href={githubUrl}
                className="flex items-center justify-center gap-2 rounded-sm border bg-gray-200 px-4 py-2 text-sm text-black transition-colors hover:bg-gray-50"
              >
                <img src="./Skills/Github.png" alt="GitHub" className="h-6 w-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
