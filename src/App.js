import React from "react";
import * as styles from "./app-styles.js";
import Intro from "./Intro.js";
import Projects from "./Projects.js";
import Skills from "./Skills.js";
import About from "./About.js";
import Nav from "./Nav";

function App() {
  return (
    <div css={styles.wrapper}>
      <img src="/triangle.png" css={styles.triangleGradient} alt="" />

      <Nav />
      <div css={styles.app}>
        <Intro />
        <Projects />
        <Skills />
        <About />
      </div>
    </div>
  );
}

export default App;
