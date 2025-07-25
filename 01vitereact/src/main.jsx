// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";

// function MyApp() {
//   return <h1>New react project</h1>;
// }

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const anotherUser = "Deepanshu";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  anotherUser
);

createRoot(document.getElementById("root")).render(reactElement);
