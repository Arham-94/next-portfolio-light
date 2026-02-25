import Background from "@/components/Background";
import ImageVideo from "@/components/ImageVideo";
import ProjectDescription from "@/components/ProjectDescription";
import ProjectSkills from "@/components/ProjectSkills";
import "@/css/SeparateProject.css";
import { projects } from "@/db/projects";

export default async function Page({ params }) {
  const { id } = await params;
  const projectShown = projects[id - 1];
  return (
    <>
      <div className="projectPage"></div>
      {/* <div className="blackOverlay"></div> */}
      {/* <Background></Background> */}
      <div className="wholePage ">
        <div className="projectContainer">
          <div className="videoDesc">
            <ImageVideo
              imageSrc={projectShown.cover || ""}
              videoSrc={projectShown.video || ""}
            />
            <ProjectDescription
              projectLink={projectShown.link}
              projectGithub={projectShown.github}
              projectName={projectShown.name}
              projectDesc={projectShown.description}
            />
            <ProjectSkills skills={projectShown.skills || ""} />
          </div>
        </div>
      </div>
    </>
  );
}
