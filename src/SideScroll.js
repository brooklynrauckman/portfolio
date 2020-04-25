import React from "react";
import * as styles from "./projects-styles.js";
import config from "./config.js";
import Preview from "./Preview.js";

function SideScroll(props) {
  const { activeProject, setActiveProject } = props;

  function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    const slideTimer = setInterval(function () {
      if (direction === "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }
  return (
    <div css={styles.sideScroll}>
      <div
        css={styles.scrollArrowCircle}
        id="slideBack"
        onClick={() =>
          sideScroll(document.getElementById("container"), "left", 10, 400, 10)
        }
      >
        <img css={styles.scrollArrowLeft} src="/scroll-arrow-left.svg" alt="" />
      </div>
      <div css={styles.previewScroll} id="container">
        {config.projects.map((project) => (
          <Preview
            project={project}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
            key={project.id}
          />
        ))}
      </div>
      <div
        css={styles.scrollArrowCircle}
        onClick={() =>
          sideScroll(document.getElementById("container"), "right", 10, 400, 10)
        }
      >
        <img css={styles.scrollArrow} src="/scroll-arrow.svg" alt="" />
      </div>
    </div>
  );
}

export default SideScroll;
