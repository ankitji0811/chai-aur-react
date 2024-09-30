import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

/* const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click to visit Google",
}; */

/* const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit
  </a>
); */

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  "a",
  { href: "https://google.com" },
  "Visit Me",
  anotherUser
);



createRoot(document.getElementById("root")).render(reactElement);
