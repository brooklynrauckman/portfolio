// Routes & prop passing

import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./about.js";
import Work from "./work.js";
import App from "./app.js";
import config from "./config.js";
import "./styles.css";
import ScrollToTop from "./scroll.js";

render(
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <ScrollToTop />
    <Route
      exact
      path="/"
      render={props => <App heading={config.intro} {...props} />}
    />
    <Route
      exact
      path="/about"
      render={props => (
        <About
          heading={config.intro}
          {...props}
        />
      )}
    />
    <Route
      exact
      path="/work"
      render={props => (
        <Work heading={config.intro} projects={config.projects} {...props} />
      )}
    />
  </BrowserRouter>,
  document.getElementById("root")
);
