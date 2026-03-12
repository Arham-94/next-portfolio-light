import "@/css/ProjectSkills.css";
import { icons } from "@/db/icons";

const ProjectSkills = ({ skills }) => {
  if (!skills) return null;
  const skillArray = skills.split(",").map((skill) => skill.trim());

  const matchedIcons = icons.filter((icon) =>
    skillArray.includes(icon.skillName),
  );

  return (
    <>
      <div className="projectSkills">
        {matchedIcons.map((matchIcon, index) => (
          <matchIcon.skillIcon key={index} size={25} />
        ))}
      </div>
    </>
  );
};

export default ProjectSkills;
