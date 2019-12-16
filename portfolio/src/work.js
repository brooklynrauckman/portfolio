import React from "react";
import Nav from "./nav.js";
import Projects from "./projects.js";

const Work = props => (
  <React.Fragment>
      <Projects projects={props.projects} heading={props.heading} />
      <Nav />
  </React.Fragment>
);

export default Work;
