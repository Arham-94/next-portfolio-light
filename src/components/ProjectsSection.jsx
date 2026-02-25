"use client";
import "@/css/ProjectSection.css";
import { projects } from "@/db/projects.js";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaGithub,
  FaLink,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaPlay,
} from "react-icons/fa";

const ProjectsSection = () => {
  const [projectNumber, setProjectNumber] = useState(0);

  let projectShown = projects[projectNumber];

  function projectCountIncrease() {
    setProjectNumber((prev) => (prev + 1 >= projects.length ? 0 : prev + 1));
  }

  function projectCountDecrease() {
    setProjectNumber((prev) => (prev - 1 < 0 ? projects.length - 1 : prev - 1));
  }

  return (
    <div className="section" id="projects">
      <div className="heading sectionHeading gradientText ">Projects Done.</div>
      <div className="glass projects">
        <div className="projectContent">
          <div className="heading">
            {projectNumber < 9 && 0}
            {projectNumber + 1}
            <span className="gradientText">
              /{projectNumber < 9 && 0}
              {projects.length}
            </span>
          </div>
          <h2 className="heading ">{projectShown.name}</h2>
          <p className="normalText projectDesc">
            {projectShown.description.slice(0, 180)}...
          </p>
          <Link href={`/project/${projectNumber + 1}`} className="gradientBtn">
            Read More...
          </Link>

          {(projectShown.link || projectShown.github) && (
            <div className="projectLinks">
              {projectShown.github && (
                <Link className="tinyBtn glass" href={projectShown.github}>
                  <FaGithub size={15} />
                </Link>
              )}
              {projectShown.link && (
                <Link className="tinyBtn glass" href={projectShown.link}>
                  <FaLink size={15} />
                </Link>
              )}
            </div>
          )}
          <hr />
          <div className="projectLinks">
            <div className="tinyBtn glass">
              <FaArrowAltCircleLeft size={20} onClick={projectCountDecrease} />
            </div>
            <div className="tinyBtn glass" onClick={projectCountIncrease}>
              <FaArrowAltCircleRight size={20} />
            </div>
          </div>
        </div>
        <div className="projectImage">
          <div className="projectImageWrapper">
            <Image src={projectShown.cover} alt="" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
