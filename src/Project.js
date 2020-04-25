import React from "react";
import * as styles from "./projects-styles.js";

function Project(props) {
  const { project, activeProject } = props;

  return (
    <React.Fragment>
      <div css={styles.projectView(project.id === activeProject)}>
        <div css={styles.projectDetails}>
          <p css={styles.projectTitle}>{project.title}</p>
          <p css={styles.projectParagraph}>{project.caption}</p>
          <div css={styles.skillIcons}>
            {project.tools.map((tool) => (
              <div key={tool} css={styles.skillIconCircle}>
                <img src={tool} css={styles.skillIcon} alt={tool} />
              </div>
            ))}
          </div>
        </div>

        <div css={styles.projectBox}>
          {project.media === "image" ? (
            <img
              src={project.thumbnail}
              css={styles.projectPic}
              alt={project.title}
            />
          ) : (
            <video
              id="video"
              controls
              preload="none"
              poster={project.poster}
              css={styles.video}
            >
              <source id="mp4" src="records.mp4" type="video/mp4" />
            </video>
          )}
          <div css={styles.projectLinks}>
            <a href={project.code} target="blank" css={styles.viewCodeLink}>
              <button css={styles.viewCodeButton}>
                <div css={styles.viewCodeWrapper}>
                  <img css={styles.githubIcon} src="/github.svg" alt="github" />
                  View Code
                </div>
              </button>
            </a>
            {project.media === "video" ? null : (
              <a href={project.app} target="blank" css={styles.visitSiteLink}>
                <button css={styles.visitSiteButton}>Visit Site</button>
              </a>
            )}
          </div>
          <img src="/dots.svg" css={styles.dots} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Project;
