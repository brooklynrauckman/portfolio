//landing page

import React from "react";
import Heading from "./heading.js";
import Title from "./title.js";
import Nav from "./nav.js";

const App = props => {

return (
  <React.Fragment>
    <div className="App">
      <div>
        <Title />
      </div>
      <div className="pitch">
        <Heading heading={props.heading.pitch} />
      </div>
    </div>
      <Nav />
  </React.Fragment>
)};

export default App;
