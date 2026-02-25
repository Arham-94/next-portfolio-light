import "@/css/Skills.css";
import SkillBar from "./SkillBar";
import { icons } from "@/db/icons";

const Skills = () => {
  const categories = ["frontend", "backend", "tools"];
  const skillsInfo = icons;
  const capitalizeFirst = (str = "") =>
    str ? str[0].toUpperCase() + str.slice(1) : "";
  return (
    <div className="section" id="skills">
      <h2 className="heading sectionHeading gradientText">Skills Showcase.</h2>
      <div className="skillsBlocks">
        {categories.map((category, index) => (
          <div className="skillsBlock glass" key={index}>
            <h2 className="subHeading skillType ">
              {capitalizeFirst(category)}
            </h2>

            {skillsInfo
              .filter((skill) => skill.category === category)
              .map((skill, index) => (
                <SkillBar
                  key={index}
                  skillName={capitalizeFirst(skill.skillName)}
                  skillWidth={skill.skillWidth}
                  Icon={skill.skillIcon}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
