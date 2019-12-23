import React, {useState} from "react";
import config from "./config.js";

const Projects = () => {

const [swapsToggle, updateSwapsToggle] = useState(false);
const [spaceToggle, updateSpaceToggle] = useState(false);
const [challengeToggle, updateChallengeToggle] = useState(false);

const swaps = config.projects[0];
const space = config.projects[1];
const challenge = config.projects[2];

return(
  <div id="work" className="projects">
    <div className="project-wrapper">
      <a href={`#${swaps.id}`} className={swaps.id}>
        <div className="thumbnail" id={swaps.id} onClick={() => updateSwapsToggle(!swapsToggle)}>
          {swaps.title}
        </div>
      </a>
      {swapsToggle ?
        <div className="project-expand">
          <a href={swaps.app} className="img-link"><img className="project-img" src={swaps.thumbnail} alt="project thumbnail" /></a>
          <div className="project-info">
            <p className="project-des">
              {swaps.caption}
            </p>
            <p className="project-des">
              <b>Tools:</b> {swaps.tools}
            </p>
            <div className="project-buttons">
              <a className="visit-site-link" href={swaps.app} target="blank">
                <button className="visit-site-button">visit site</button>
              </a>
              <a className="view-code-link" href={swaps.code} target="blank">
                <button className="view-code-button">view code</button>
              </a>
            </div>
          </div>
        </div>
      : ''}
    </div>
    <div className="project-wrapper">
      <a href={`#${space.id}`} className={space.id}>
        <div className="thumbnail" id={space.id} onClick={() => updateSpaceToggle(!spaceToggle)}>
          {space.title}
        </div>
      </a>
      {spaceToggle ?
        <div className="project-expand">
          <a href={space.app} className="img-link"><img className="project-img" src={space.thumbnail} alt="project thumbnail" /></a>
          <div className="project-info">
            <p className="project-des">
              {space.caption}
            </p>
            <p className="project-des">
              <b>Tools:</b> {space.tools}
            </p>
            <div className="project-buttons">
              <a className="visit-site-link" href={space.app} target="blank">
                <button className="visit-site-button">visit site</button>
              </a>
              <a className="view-code-link" href={space.code} target="blank">
                <button className="view-code-button">view code</button>
              </a>
            </div>
          </div>
        </div>
      : ''}
    </div>
    <div className="project-wrapper">
      <a href={`#${challenge.id}`} className={challenge.id}>
        <div className="thumbnail" id={challenge.id} onClick={() => updateChallengeToggle(!challengeToggle)}>
          {challenge.title}
        </div>
      </a>
      {challengeToggle ?
        <div className="project-expand">
          <a href={challenge.app} className="img-link"><img className="project-img" src={challenge.thumbnail} alt="project thumbnail" /></a>
          <div className="project-info">
            <p className="project-des">
              {challenge.caption}
            </p>
            <p className="project-des">
              <b>Tools:</b> {challenge.tools}
            </p>
            <div className="project-buttons">
              <a className="visit-site-link" href={challenge.app} target="blank">
                <button className="visit-site-button">visit site</button>
              </a>
              <a className="view-code-link" href={challenge.code} target="blank">
                <button className="view-code-button">view code</button>
              </a>
            </div>
          </div>
        </div>
      : ''}
    </div>
  </div>
);
}

export default Projects;
