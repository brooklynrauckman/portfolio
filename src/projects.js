import React, { useState } from "react";
import * as styles from "./projects-styles.js";
import SideScroll from "./SideScroll.js";
import Project from "./Project.js";
import config from "./config.js";

function Projects() {
  const [activeProject, setActiveProject] = useState("records");

  return (
    <div css={styles.projects} id="projects">
      <SideScroll
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
      <div css={styles.squareGradient}></div>
      <div css={styles.squareGradientTwo}></div>
      {config.projects.map((project) => (
        <Project
          key={project.id}
          activeProject={activeProject}
          project={project}
        />
      ))}
    </div>
  );
}

export default Projects;
