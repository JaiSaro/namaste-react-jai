import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent", class: "parent" }, [
  React.createElement("div", { id: "child1", class: "child1" }, [
      React.createElement(
          "h1",
          { id: "header-one", class: "header-one" },
          "I'm h1 tag"
      ),
      React.createElement(
          "h2",
          { id: "header-two", class: "header-two" },
          "I'm h2 tag"
      ),
  ]),
  React.createElement("div", { id: "child2", class: "child2" }, [
      React.createElement(
          "h1",
          { id: "header-one", class: "header-one" },
          "I'm h1 tag"
      ),
      React.createElement(
          "h2",
          { id: "header-two", class: "header-two" },
          "I'm h2 tag"
      ),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
