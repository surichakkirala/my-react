import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML Element(render)
//JSX- It is not HTML inside JS. It is HTML like syntax.
// JSX=> Babel transpiles it to React.createElement => Object => HTML Element(render)
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste React using React Element
  </h1>
);

//React Functional Component - A JS function which returns a React Element
//Component Composition - putting one component inside another component

const Title = () => {
  return (
    <p className="title" tabIndex="1">
      Title Component
    </p>
  );
};

const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <h1 className="heading">Namaste React using Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
