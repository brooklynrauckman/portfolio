// Routes & prop passing

import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./about.js";
import App from "./app.js";
import "./styles.css";
import ScrollToTop from "./scroll.js";

render(
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <ScrollToTop />
    <Route
      exact
      path="/"
      render={() => <App />}
    />
    <Route
      exact
      path="/about"
      render={() => <About />}
    />
  </BrowserRouter>,
  document.getElementById("root")
);
