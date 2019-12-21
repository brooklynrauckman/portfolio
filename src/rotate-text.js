// textloop used on intro

import React from "react";
import TextLoop from "react-text-loop";

const Rotate = () => (
  <React.Fragment>
    <span>Hi, my name is Brooklyn. I am </span>
     <TextLoop interval={1500} mask={true}>
        <span>a develop</span>
        <span>a runn</span>
        <span>a learn</span>
        <span>an organiz</span>
        <span>a hard work</span>
        <span>a teach</span>
        <span>a problem-solv</span>
        <span>a plann</span>
        <span>a team play</span>
        <span>an explor</span>
    </TextLoop>{" "}
      <span className="base">er.</span>
    </React.Fragment>
);

export default Rotate;
