import React from "react";
import * as styles from "./about-styles.js";

function About() {
  return (
    <div css={styles.about} id="about">
      <div css={styles.squareGradient}></div>
      <div css={styles.aboutContent}>
        <div css={styles.dot}></div>
        <h1 css={styles.aboutTitle}>Well, You made it this far!</h1>
        <p css={styles.aboutParagraph}>
          So you might as well learn a bit more about me. My passion for math,
          solving problems, and creating things, led me to learn software
          engineering. I enjoy both collaborating with people and zoning-in on
          my work. I love the satisfaction of completing tasks, big and small. I
          am highly organized and love to simplify and optimize my workflow as
          well as my life. I chose to create projects with a variety of features
          and tools to continue to build upon my skill set. I have dedicated
          myself to learning and practicing foundational software engineering
          skills. Apart from this knowledge, I have experience in various work
          settings, providing effective communication and collaboration. I am a
          lifelong learner who looks forward to the opportunity to work with new
          technologies and new people.
        </p>
        <div css={styles.centeredButtons}>
          <a href="/resume.pdf" target="blank" css={styles.resumeLink}>
            <button css={styles.resumeButton}>Download Resume</button>
          </a>
          <a
            href="https://www.linkedin.com/in/brooklyn-rauckman-21514390/"
            target="blank"
            css={styles.contactLink}
          >
            <button css={styles.contactButton}>Get in Touch</button>
          </a>
        </div>
        <div css={styles.footer}>
          <img css={styles.footerLogo} src="/logo.svg" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default About;
