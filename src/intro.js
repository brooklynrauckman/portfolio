import React from "react";
import * as styles from "./intro-styles.js";

function Intro() {
  return (
    <div css={styles.intro}>
      <div css={styles.introContent}>
        <div css={styles.dot}></div>
        <h1 css={styles.introTitle}>Bringing ideas to life</h1>
        <p css={styles.introParagraph}>
          Hi, my name is Brooklyn! I am a self-taught software engineer, who
          enjoys simplifying and solving problems. I'm a lifelong learner, ready
          to take on a new professional challenge.
        </p>
        <div css={styles.centeredButton}>
          <a href="#projects" css={styles.seeProjectsLink}>
            <button css={styles.seeProjectsButton}>See Projects</button>
          </a>
        </div>
      </div>
      <img src="/brooklyn.png" css={styles.introPic} alt="Brooklyn Rauckman" />
      <div css={styles.squareGradient}></div>
    </div>
  );
}

export default Intro;
