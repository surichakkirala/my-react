import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML Element(render)
//JSX- It is not HTML inside JS. It is HTML like syntax.
// JSX=> Babel transpiles it to React.createElement => Object => HTML Element(render)
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste React
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
