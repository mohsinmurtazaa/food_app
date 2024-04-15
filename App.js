import React from "react";
import ReactDOM from "react-dom/client";

//custom react element or core way

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "H1 Tag"),
    React.createElement("h2", {}, "H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "H1 Tag"),
    React.createElement("h2", {}, "H2 Tag"),
  ]),
]);

//react element using jsx
const title = (
  <div className="title">
    <h1>H1 Tag</h1>
    <h2>H2 tag</h2>
    <h3>H3 tag</h3>
  </div>
);
console.log(title);

//functional component
const Title = () => (
  <div className="title">
    <h1>H1 Tag</h1>
    <h2>H2 tag</h2>
    <h3>H3 tag</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Title());
