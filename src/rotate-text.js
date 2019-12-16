// textloop used on landing page title

import React from "react";
import TextLoop from "react-text-loop";

const Rotate = () => (
  <React.Fragment>
     <TextLoop interval={1500} mask={true}>
        <span>develop</span>
        <span>runn</span>
        <span>learn</span>
        <span>organiz</span>
        <span>hard work</span>
        <span>teach</span>
        <span>problem-solv</span>
        <span>plann</span>
        <span>team play</span>
        <span>explor</span>
    </TextLoop>{" "}
      <span className="base">er</span>
    </React.Fragment>
);

export default Rotate;