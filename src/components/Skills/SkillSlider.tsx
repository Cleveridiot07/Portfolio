import SkillCard from "./SkillCard";
import { TypeSkills } from "../../typedef";

interface SkillSliderProps {
  title?: string;
  skills: TypeSkills[];
}

const SkillSlider: React.FC<SkillSliderProps> = ({ title = "Skills", skills = [] }) => {
  return (
    <div>
      <div className="w-full text-center text-5xl font-semibold mb-4">{title}</div>
      <div className="w-full md:h-64 h-fit space-y-4 md:space-y-0 flex justify-center space-x-3 px-10 overflow-x-auto flex-wrap sm:flex-nowrap">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <SkillCard
              key={index}
              skillName={skill.skillName}
              skillLevel={skill.skillLevel}
              iconPath={skill.iconPath}
              oddEven={index % 2 === 0}
            />
          ))
        ) : (
          <p className="text-gray-500">No skills available.</p>
        )}
      </div>
    </div>
  );
};

export default SkillSlider;
