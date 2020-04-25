import React from "react";
import * as styles from "./projects-styles.js";

function Preview(props) {
  const { activeProject, setActiveProject, project } = props;

  return (
    <div
      css={
        activeProject === project.id ? styles.active : styles.previewConatainer
      }
    >
      <p css={styles.previewTitle}>{project.title}</p>
      <div css={styles.previewBox} onClick={() => setActiveProject(project.id)}>
        <img
          src={project.preview}
          css={styles.previewPic}
          alt={project.title}
        />
      </div>
    </div>
  );
}

export default Preview;
