//heading content is passed through props located in config.js

import React from "react";

const Heading = props => (
  <div>
    {props.heading}
  </div>
);

export default Heading;
