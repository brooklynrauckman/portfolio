import React from "react";

const About = props => (
    <div id="about" className="about">
      <img
        className="headshot"
        src="https://getsimple.space/Landing/brooklyn.jpg"
        alt="Headshot of Brooklyn Rauckman"
      />
      <div className="about-info">
        <p className="about-me">
        I am a lifelong learner, who enjoys solving problems and bringing ideas to life. Transitioning from my teaching career, I am eager to take on a new professional challenge.
        </p>
        <a href="web-dev-resume.pdf" target="_blank">
          <span className="resume-link">resume</span>
        </a>
      </div>
    </div>
);

export default About;
