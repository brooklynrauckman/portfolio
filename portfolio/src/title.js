//landing page title

import React from "react";
import Rotate from "./rotate-text.js"

function Title() {
  return (
    <div className="Title">
      <h1 className="firstname">
        Brooklyn Rauckman
      </h1>
      <div className="textloop">
        <Rotate />
      </div>
    </div>
  );
}

export default Title;
