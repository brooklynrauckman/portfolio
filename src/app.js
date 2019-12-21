import React from "react";
import Nav from "./nav.js";
import Intro from "./intro.js";
import About from "./about.js";
import Projects from "./projects.js";


const App = () => {

  return(
    <React.Fragment>
      <div className="hero">
        <Nav />
        <div className="intro">
          <Intro />
        </div>
      </div>
      <About />
      <Projects />
    </React.Fragment>
    );
  }


export default App;
