import "@/css/ProjectDescription.css";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectDescription = ({
  projectDesc,
  projectName,
  projectLink,
  projectGithub,
}) => {
  const descArr = projectDesc.split("@");
  return (
    <div className="projectDesc">
      <div className="projectHeadline">
        <span className="heading gradientText projectDescHeading">
          {projectName}
        </span>
        {(projectLink || projectGithub) && (
          <div className="projectBtns">
            {projectGithub && (
              <Link href={projectGithub} className="tinyBtn glass">
                <FaGithub size={18} />
              </Link>
            )}
            {projectLink && (
              <Link href={projectLink} className="tinyBtn glass">
                <FaLink size={18} />
              </Link>
            )}
          </div>
        )}
      </div>
      <div>
        {descArr.map((desc, index) => (
          <p className="normalText projectDesc" key={index}>
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectDescription;
