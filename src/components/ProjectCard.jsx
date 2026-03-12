import React from "react";
import "../css/ProjectCard.css";
import Link from "next/link";
import ProjectSkills from "./ProjectSkills";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectCard = ({
  image,
  title,
  description,
  onReadMore,
  skills,
  projectGithub,
  projectLink,
  projectVideo,
}) => {
  return (
    <div className="projectCard glass">
      <div className="projectCardImgWrapper">
        <Image fill src={image} alt={title} className="projectCardImg" />
      </div>

      <div className="projectCardContent">
        <h3 className="heading">{title}</h3>

        <p className="projectCardDesc">{description}</p>

        {(projectLink || projectGithub) && (
          <div className="projectLinks">
            {projectGithub && (
              <Link className="tinyBtn glass" href={projectGithub}>
                <FaGithub size={15} />
              </Link>
            )}
            {projectLink && (
              <Link className="tinyBtn glass" href={projectLink}>
                <FaLink size={15} />
              </Link>
            )}
          </div>
        )}
        <Link className="gradientBtn" href={onReadMore || ""}>
          {projectVideo ? "Watch It" : "Read More"}
        </Link>
        <ProjectSkills skills={skills} />
      </div>
    </div>
  );
};

export default ProjectCard;
