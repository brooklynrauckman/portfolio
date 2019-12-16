//project content is passed through props located in config.js

import React from "react";
import Heading from "./heading.js";

const Projects = props => (
  <div className="Project">
    <div className="name">
      <Heading heading={props.heading.projects} />
    </div>
    <div className="wrapper">
      <ul className="project-list">
        {props.projects.map(project => (
          <li key={project.id}>
            <a href={project.app} target="blank">
              <img
                src={project.thumbnail}
                alt="Project Thumbnail"
                className="thumbnail"
              />
            </a>
            <p className="caption">{project.caption}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Projects;
